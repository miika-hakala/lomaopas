# AUDIT-RAPORTTI: Admin/Auth Security Review

**Päivämäärä:** 2026-02-08
**Branch:** `feature/ci-hardening`
**Edellinen korjaus:** `750f78c fix(security): tighten RLS + add admin access`
**Tarkastaja:** Claude Code (automated audit)

---

## Yhteenveto

Tarkastettu koko admin/auth-pinon turvallisuus: SvelteKit hooks, admin-reittien suojaukset, form actions, RLS-policyt, API-endpointit, syötteen validointi ja audit trail. Löydettiin **2 P0**, **3 P1** ja **5 P2** -tason löydöstä.

**Arkkitehtuuri:** SvelteKit + Supabase (RLS). Admin CRUD tapahtuu client-side Supabase-kutsuina (ei form actioneita). Tietoturva nojaa kolmeen kerrokseen:
1. Server-side page load guard (`isAdmin()` hook)
2. RLS-policyt tietokannassa (admin_users EXISTS-tarkistus)
3. UI-piilotus (ei riittävä yksinään)

---

## LÖYDÖKSET

### F01 — `getSession()` ei validoi JWT:tä palvelinpuolella

| | |
|---|---|
| **Prioriteetti** | **P0 (BLOCKER)** |
| **Tiedosto** | `src/hooks.server.ts:10` |
| **Tyyppi** | Auth bypass -riski |
| **Vaikutus** | Väärennetty JWT-cookie voi ohittaa session-tarkistuksen |

**Kuvaus:** `hooks.server.ts` käyttää `supabase.auth.getSession()` joka lukee JWT:n cookiesta **ilman palvelinpuolen validointia**. Supabasen oma dokumentaatio varoittaa:

> *"getSession() reads the session from the storage medium... It does not send a request to the Supabase server. Use getUser() for server-side validation."*

**Toisto-ohje:**
1. Kirjaudu sisään normaalisti
2. Muokkaa auth-cookien JWT payloadia (esim. Base64-decode, muuta `sub`-kenttä, encode takaisin)
3. `getSession()` palauttaa session-objektin väärennetyllä user-id:llä

**Lieventävä tekijä:** `isAdmin()` (rivi 18) tekee Supabase-kyselyn joka menee RLS:n läpi — RLS käyttää `auth.uid()` joka validoidaan Supabase-palvelimen JWT-signaturea vasten. Eli väärennetty JWT ei läpäise admin-tarkistusta KOSKA Supabase-palvelin hylkää sen. **Mutta** `getSession()`:n palauttama `session`-objekti (user email, id) voi olla väärä ja se palautetaan layoutin `PageData`:ssa kaikille sivuille.

**Korjausehdotus:**
```typescript
// hooks.server.ts — vaihda getSession() → getUser()
event.locals.getSession = async () => {
  const { data: { user }, error } = await event.locals.supabase.auth.getUser();
  if (error || !user) return null;
  // Hae session vasta kun user on validoitu
  const { data: { session } } = await event.locals.supabase.auth.getSession();
  return session;
};
```

**PR-ehdotus:** PR1

---

### F02 — Admin-reiteiltä puuttuu yhteinen layout guard

| | |
|---|---|
| **Prioriteetti** | **P0 (BLOCKER)** |
| **Tiedosto** | `src/routes/admin/` (puuttuva tiedosto) |
| **Tyyppi** | Auth-suojauksen rakenteellinen heikkous |
| **Vaikutus** | Uusi admin-sivu ilman tarkistusta = avoin pääsy |

**Kuvaus:** Ei ole `src/routes/admin/+layout.server.ts` -tiedostoa. Jokainen admin-sivu (`+page.server.ts`) toistaa saman auth-tarkistuksen erikseen:

```
admin/+page.server.ts        → session + isAdmin ✓
admin/articles/new/+page.server.ts → session + isAdmin ✓
admin/articles/[id]/+page.server.ts → session + isAdmin ✓
admin/login/+page.ts          → EI server-side tarkistusta (tarkoituksellinen)
```

Tämä toimii NYT, mutta on hauras: jos lisätään uusi admin-sivu (esim. `admin/destinations/+page.server.ts`) ja unohdetaan guard → avoin reitti.

**Toisto-ohje:**
1. Luo uusi tiedosto `src/routes/admin/test/+page.svelte` ilman `+page.server.ts`:ää
2. Navigoi `/admin/test` → sivu renderöityy ilman auth-tarkistusta

**Korjausehdotus:** Luo `src/routes/admin/+layout.server.ts`:

```typescript
import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  // Login-sivu on julkinen
  if (url.pathname === '/admin/login') return {};

  const session = await locals.getSession();
  if (!session) throw redirect(303, '/admin/login');

  const isAdmin = await locals.isAdmin();
  if (!isAdmin) throw error(403, 'Forbidden');

  return { session, isAdmin };
};
```

Sen jälkeen poista tuplat yksittäisistä `+page.server.ts`-tiedostoista.

**PR-ehdotus:** PR1

---

### F03 — Muuttujan varjostus: `error` shadowed admin/+page.server.ts

| | |
|---|---|
| **Prioriteetti** | **P1** |
| **Tiedosto** | `src/routes/admin/+page.server.ts:16` |
| **Tyyppi** | Bug (variable shadowing) |
| **Vaikutus** | Jos Supabase-kysely epäonnistuu ja koodia muokataan, `error()` SvelteKit-funktio ei ole käytettävissä rivin 16 jälkeen |

**Kuvaus:** Rivi 1 importtaa `error` @sveltejs/kit:stä. Rivi 16 destructuroi `error` Supabase-vastauksesta:

```typescript
import { error, redirect } from '@sveltejs/kit'; // rivi 1
// ...
const { data: articles, error } = await locals.supabase // rivi 16 — SHADOWS import
```

Tämän jälkeen `error` viittaa Supabase-virheeseen, ei SvelteKit:n `error()`-funktioon. Tällä hetkellä ei aiheuta ongelmaa koska `error()` ei kutsuta rivin 16 jälkeen, mutta koodia muokattaessa riski kasvaa.

**Korjausehdotus:**
```typescript
const { data: articles, error: articlesError } = await locals.supabase...
```

Sama pattern on jo käytössä muissa tiedostoissa (`error: cityError`, `error: articleError`).

**PR-ehdotus:** PR1

---

### F04 — Ei input-validointia palvelinpuolella (CRUD)

| | |
|---|---|
| **Prioriteetti** | **P1** |
| **Tiedosto** | `src/lib/components/ArticleForm.svelte:37-79` |
| **Tyyppi** | Puuttuva validointi |
| **Vaikutus** | Admin voi syöttää mitä tahansa dataa suoraan Supabaseen |

**Kuvaus:** Kaikki CRUD-operaatiot (create/update/delete articles) tapahtuvat **client-side** suoraan Supabase-kantaan:

```svelte
// ArticleForm.svelte:57-60 — client-side update
const { error: updateError } = await supabase
  .from('articles')
  .update(articleData)
  .eq('id', article.id);
```

Ei ole SvelteKit form actioneita (`+page.server.ts` export const actions). Tämä tarkoittaa:
- Ei server-side input validointia (slug-formaatti, max-pituudet, HTML-injektio contentissa)
- Ei CSRF-suojausta (SvelteKit form actions sisältävät automaattisen CSRF-tokenin)
- Admin voi suoraan kutsua Supabase-apia selaimesta

**Lieventävä tekijä:** RLS estää ei-adminien kirjoitukset. Content renderöidään `{data.article.content}` -syntaksilla (ei `{@html}`), joten XSS ei ole riski **tällä hetkellä**.

**Korjausehdotus:** Lisää SvelteKit form actions (`+page.server.ts` → `export const actions`) admin-sivuille. Validoi input server-puolella (slug regex, max content length, title required).

**PR-ehdotus:** PR2

---

### F05 — Admin-sivujen unpublished content query ilman RLS-suodatusta

| | |
|---|---|
| **Prioriteetti** | **P1** |
| **Tiedosto** | `src/routes/admin/articles/new/+page.server.ts:17` |
| **Tyyppi** | Tietojen vuotomahdollisuus |
| **Vaikutus** | Admin-sivulla näkyvät KAIKKI destinaatiot (myös unpublished) |

**Kuvaus:** Admin-sivujen load-funktioissa haetaan destinaatiot ja kategoriat ilman `published`-suodatusta:

```typescript
// articles/new/+page.server.ts:17
locals.supabase.from('destinations').select('id, name, slug').order('name')
```

RLS sallii adminien lukea kaiken, joten tämä palauttaa myös unpublished destinaatiot. **Tämä on todennäköisesti tarkoituksellista** (admin tarvitsee nähdä kaikki), mutta se altistaa admin-lukemaan dataa jota hänelle ei ehkä kuuluisi näyttää jos admin-roolit joskus eriytetään (esim. "city editor" vs "super admin").

**Nyt ei ongelma**, mutta dokumentoitava rakenteellinen riski.

**PR-ehdotus:** PR3 (matala prioriteetti)

---

### F06 — Audit trail puuttuu kokonaan

| | |
|---|---|
| **Prioriteetti** | **P2** |
| **Tiedosto** | `supabase/migrations/` (puuttuva) |
| **Tyyppi** | Puuttuva ominaisuus |
| **Vaikutus** | Ei tiedetä kuka muutti mitä ja milloin |

**Kuvaus:** Tietokannassa on `created_at` ja `updated_at` kentät, mutta ei `created_by` / `updated_by` -kenttiä eikä erillistä audit log -taulua. Jos useampi admin muokkaa sisältöjä, ei ole mahdollista jäljittää muutoksia.

**Korjausehdotus:**
1. Lisää `created_by UUID REFERENCES auth.users(id)` ja `updated_by UUID` sarakkeet `articles`-tauluun
2. TAI luo erillinen `audit_log`-taulu (action, table_name, record_id, user_id, old_data, new_data, timestamp)
3. Käytä Postgres trigger -funktiota automaattiseen kirjaamiseen

**PR-ehdotus:** PR3

---

### F07 — Service-role client ympäristömuuttujien nimien ristiriita

| | |
|---|---|
| **Prioriteetti** | **P2** |
| **Tiedosto** | `src/lib/db/supabase.ts:10` vs `.env.example:14-15` |
| **Tyyppi** | Konfiguraatiovirhe |
| **Vaikutus** | Service-role client ei toimi ilman oikeita env-nimiä |

**Kuvaus:**

| Tiedosto | Muuttuja koodissa | .env.example |
|---|---|---|
| `src/lib/db/supabase.ts:10` | `SUPABASE_URL` | `PUBLIC_SUPABASE_URL` |
| `src/lib/db/supabase.ts:10` | `SUPABASE_SERVICE_KEY` | `SUPABASE_SERVICE_ROLE_KEY` |

Koodi ja .env.example käyttävät eri nimiä. Tämä moduuli ei ole käytössä nyt (Stripe disabled), mutta kun Phase 3.5 aktivoidaan, tämä rikkoo deployn.

**Korjausehdotus:** Yhdenmukaista nimet: `.env.example` → `SUPABASE_SERVICE_KEY` TAI koodi → `SUPABASE_SERVICE_ROLE_KEY`.

**PR-ehdotus:** PR2

---

### F08 — Dead code: service-role client -moduuli

| | |
|---|---|
| **Prioriteetti** | **P2** |
| **Tiedosto** | `src/lib/db/supabase.ts` |
| **Tyyppi** | Dead code |
| **Vaikutus** | Ylläpidon hämäys, mahdollinen turvallisuusriski jos vahingossa importataan |

**Kuvaus:** Moduuli `src/lib/db/supabase.ts` luo Supabase-clientin **service role -avaimella**, mutta sitä ei importata mistään koodissa. Service-role key ohittaa RLS:n kokonaan, joten tämän vahingossa käyttöönotto olisi turvallisuusriski.

**Korjausehdotus:** Poista tiedosto tai merkitse selkeästi "Phase 3.5 only" -kommentilla. Vaihtoehtoisesti siirrä `src/lib/db/` pois käytöstä kunnes tarvitaan.

**PR-ehdotus:** PR2

---

### F09 — Ei rate limitingiä admin-loginille

| | |
|---|---|
| **Prioriteetti** | **P2** |
| **Tiedosto** | `src/routes/admin/login/+page.svelte:12-30` |
| **Tyyppi** | Brute force -riski |
| **Vaikutus** | Automaattinen salasanojen kokeilu mahdollista |

**Kuvaus:** Login-lomake kutsuu `supabase.auth.signInWithPassword()` ilman rajoituksia. Supabase tarjoaa sisäänrakennettua rate limitingiä (GoTrue), mutta se on konfiguroitavissa ja oletusasetukset vaihtelevat.

**Korjausehdotus:**
1. Siirrä login server-side form actioniksi ja lisää rate limit (esim. Vercel Edge -tasolla)
2. TAI lisää client-side delay/lockout failed attemptien jälkeen
3. Varmista Supabase Dashboardista GoTrue rate limiting -asetukset

**PR-ehdotus:** PR3

---

### F10 — Login-sivun redirect on vain client-side

| | |
|---|---|
| **Prioriteetti** | **P2** |
| **Tiedosto** | `src/routes/admin/login/+page.ts` (ei `+page.server.ts`) |
| **Tyyppi** | UX / defence-in-depth |
| **Vaikutus** | Jo kirjautunut admin näkee login-sivun hetkellisesti ennen redirectiä |

**Kuvaus:** Login-sivu käyttää `+page.ts` (universal load, ei server load), joten redirect-logiikka suoritetaan client-sidella. Ei ole turvallisuusongelma, mutta server-side redirect olisi nopeampi ja varmempi.

**Korjausehdotus:** Muuta `admin/login/+page.ts` → `admin/login/+page.server.ts` TAI käsittele admin layout guardissa.

**PR-ehdotus:** PR1 (sisältyy layout guard -korjaukseen)

---

## VAHVISTETTU OK

Nämä tarkistettiin ja todettiin kunnossa:

| # | Tarkistuskohde | Tila | Huomio |
|---|---|---|---|
| OK1 | RLS-policyt: admin-only writes | OK | `EXISTS (SELECT 1 FROM admin_users au WHERE au.user_id = auth.uid())` kaikissa tauluissa |
| OK2 | Public SELECT vain published | OK | `USING (published = true)` destinations & articles |
| OK3 | Content rendering (XSS) | OK | Käyttää `{data.article.content}` EI `{@html}` → ei XSS-riskiä |
| OK4 | Admin page load guards | OK | Kaikki 3 admin-sivua tarkistavat session + isAdmin |
| OK5 | Disabled Stripe endpoints | OK | Kaikki palauttavat `503 Service Unavailable` |
| OK6 | API endpoints (public) | OK | Vain read-only: sää, varoitukset, tapahtumat. Ei kirjoituksia. |
| OK7 | Sitemap: vain published content | OK | Hakee `.eq('published', true)` |
| OK8 | Auth callback | OK | Vastaanottaa code, vaihtaa sessioniksi, redirectaa /admin |
| OK9 | SSRF/Path traversal | OK | Ei tiedostopolkujen käsittelyä, ei user-inputteja URL:iin |
| OK10 | admin_users RLS | OK | User näkee vain oman rivinsä, service role voi hallinnoida |

---

## PR-EHDOTUS JA TOTEUTUSJÄRJESTYS

### PR1: Auth hardening (BLOCKER — tee ensin)

**Scope:** Turvallisuuskriittiset korjaukset joiden pitää olla paikallaan ennen muita muutoksia.

| # | Tiedosto | Muutos |
|---|---|---|
| F01 | `src/hooks.server.ts` | `getSession()` → `getUser()` + session haku |
| F02 | `src/routes/admin/+layout.server.ts` (uusi) | Luo admin layout guard |
| F02 | `src/routes/admin/+page.server.ts` | Poista tuplat session/admin-tarkistus (layout hoitaa) |
| F02 | `src/routes/admin/articles/new/+page.server.ts` | Poista tuplat |
| F02 | `src/routes/admin/articles/[id]/+page.server.ts` | Poista tuplat |
| F03 | `src/routes/admin/+page.server.ts` | `error` → `articlesError` rename |
| F10 | `src/routes/admin/login/+page.ts` | Voi poistaa (layout guard hoitaa redirectin) |

**Arvio:** ~30 min koodausta + testit
**Riski:** Matala — SvelteKit layout guard on vakiopattern

---

### PR2: Input validation + dead code cleanup

**Scope:** Palvelinpuolen validointi ja koodin siivous.

| # | Tiedosto | Muutos |
|---|---|---|
| F04 | `src/routes/admin/articles/new/+page.server.ts` | Lisää form actions (create) |
| F04 | `src/routes/admin/articles/[id]/+page.server.ts` | Lisää form actions (update/delete) |
| F04 | `src/lib/components/ArticleForm.svelte` | Muuta käyttämään form actions client-side kutsun sijaan |
| F07 | `.env.example` | Korjaa env-nimet vastaamaan koodia |
| F08 | `src/lib/db/supabase.ts` | Lisää "Phase 3.5" -kommentti TAI poista |

**Arvio:** ~1-2h koodausta (form actions on isompi refaktorointi)
**Riski:** Keskitaso — form actions muuttaa käyttöliittymän toimintalogiikkaa

---

### PR3: Audit trail + hardening

**Scope:** Jäljitettävyys ja lisäsuojaukset.

| # | Tiedosto | Muutos |
|---|---|---|
| F06 | `supabase/migrations/` (uusi) | Audit log -taulu + trigger |
| F06 | `supabase/migrations/` (uusi) | `created_by`/`updated_by` sarakkeet |
| F05 | Dokumentointi | Dokumentoi admin-roolien rajoitukset |
| F09 | `src/routes/admin/login/` | Rate limiting (server-side tai Supabase Dashboard) |

**Arvio:** ~1-2h koodausta
**Riski:** Matala — uudet migraatiot, ei riko olemassaolevaa

---

## BLOCKER-ANALYYSI

```
PR1 (auth hardening)  ← TÄMÄ ENSIN, muut riippuvat tästä
  ↓
PR2 (input validation) ← Voidaan tehdä PR1:n jälkeen
  ↓
PR3 (audit trail)      ← Voidaan tehdä milloin tahansa
```

**Blocker = PR1.** Ilman sitä:
- `getSession()` ei validoi JWT:tä palvelinpuolella (F01)
- Uusi admin-sivu voi unohtua suojata (F02)

PR2 ja PR3 eivät ole blockereita mutta ovat tärkeitä ennen tuotantokäyttöä.

---

## TESTAUS-CHECKLISTA

Jokaiselle PR:lle tulee varmistaa:

- [ ] `npm run build` onnistuu
- [ ] Playwright-testit: `admin-flow.spec.ts` ja `admin-crud.spec.ts` pass
- [ ] Manuaalinen testaus: unauthed → `/admin` → redirect login
- [ ] Manuaalinen testaus: authenticated non-admin → `/admin` → 403
- [ ] Manuaalinen testaus: admin → CRUD toimii normaalisti
- [ ] RLS-testit: `rls.spec.ts` pass
