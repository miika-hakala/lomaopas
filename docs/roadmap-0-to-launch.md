# LOMAOPAS Roadmap: Phase 0 → Julkaisu

> **ACTIVE ROADMAP (SSOT)**
>
> This is the ONLY active roadmap for Lomaopas.fi.
> All other roadmap documents or phase descriptions are LEGACY
> and must NOT be used for planning or execution.

---

## Phase 0 — Projektin perustus ja näkyvyys (P0)
Tavoite: saat sivuston näkyviin ja testattavaksi heti, ennen mitään isompaa rakentamista.

0.1 Repo ja paikallinen ajo
- npm install onnistuu
- npm run dev käynnistyy
- perusnäkymä aukeaa selaimessa
Gate: käyttäjä avaa local URL:n ja näkee etusivun

0.2 Git- ja PR-kuri
- branch-käytäntö feat/* fix/* docs/*
- PR-template (testit, preview-linkki, tarkistetut URLit)
- ei mergeä ilman preview + testit
Gate: PR-malli käytössä

0.3 Testirunko heti
- npm run build toimii
- npm run test olemassa (min 1 testi)
- npm run e2e olemassa (min 1 smoke)
Gate: CI ajaa build+test vähintään

## Phase 1 — Vercel käyttöön (Preview ensin) (P0)
1.1 Vercel-projekti
- Add New Project → repo lomaopas
- Root directory oikein
- Build command + output oikein
- Preview deployments päälle PR:ille
Gate: käyttäjä avaa Vercel Preview URL:n ja näkee sivun

1.2 Preview-checklist pakolliseksi
- PR vaatii preview-linkin + 3–5 tarkistus-URLia
- broken link check (manuaali aluksi)
Gate: yksikään PR ei mene läpi ilman preview-linkkiä

## Phase 2 — Supabase käyttöön (P0)
2.1 Supabase-projekti (tuotanto + dev)
- Luo Supabase Project (Production)
- Luo Supabase Project (Dev) TAI selkeä ympäristöpolitiikka
- Tallenna SUPABASE_URL, ANON_KEY, SERVICE_ROLE_KEY
Gate: yhteys toimii lokaalisti (health query)

2.2 Schema v1 (minimi)
- destinations, articles, categories, sources/article_sources
- migraatiot Supabase CLI:llä
- seed: 1 kohde + 1 artikkeli
Gate: sivu näyttää DB:stä tulevan testisisällön

2.3 RLS (turva heti)
- Public read vain julkaistu
- Write vain admin-rooleille / service role
Gate: anonyymi ei näe luonnoksia

## Phase 3 — Sisältöputki ja admin (P0/P1)
3.1 Admin v1
- Supabase Auth login
- listaa/muokkaa/julkaise
- slug-validointi
Gate: käyttäjä luo artikkelin adminissa ja näkee sen julkisena

3.2 Import/ingest (tarvittaessa)
- yksi hallittu ingest
- lähteet talteen ja näkyville
Gate: ingest tuottaa artikkelin ilman rikkinäisiä linkkejä

## Phase 4 — Sivuston perusrakenne ja reitit (P0)
4.1 Navigaatio ja perussivut
- etusivu, kohdelistaus, kohdesivu, artikkelisivu, haku/filtterit minimi
Gate: 10 URLia previewssa, ei 404

4.2 SEO peruspaketti
- meta, canonical, sitemap, OG
Gate: SEO sanity ok

## Phase 5 — Laatu: testit, linkit, regressio (P0)
5.1 Unit + e2e minimit
- smoke: etusivu/kohdelistaus/artikkeli/ei 404
Gate: CI vihreä ennen mergeä

5.2 Broken-link -suoja
- e2e testaa etusivun näkyvät sisälinkit
- placeholder link kielto prodissa
Gate: testit failaa jos 404

## Phase 6 — Julkaisuvalmius: performance, analytics, error logs (P1)
- analytics/speed insights
- error monitoring
- uptime check
- cookie notice jos tarvitaan
Gate: dashboard näkyy (kävijät + virheet)

## Phase 6.5 — Production hardening & compliance (P0)

Tavoite: tuotantovalmius ilman sokkoa (turva, palautus, laki, SEO-suojat).

### 6.5.1 Ympäristöt & rollback
- Preview/Staging ja Production eroteltu (env-varit + tarvittaessa Supabase dev/prod)
- Rollback-prosessi dokumentoitu (paluu edelliseen deployhin)
- DB-migraatioiden palautusstrategia (rollback tai forward-fix) dokumentoitu
Gate: pystyt palauttamaan edellisen toimivan deployn + migraatiostrategia on kirjattu

### 6.5.2 Turva & kovennus
- Security headers (vähintään: X-Frame-Options, Referrer-Policy, basic CSP)
- Rate limiting API-routeille + adminille
- Server-side input validation (ei vain client)
- Admin RBAC selkeä + minimi audit trail (kuka julkaisi mitä)
Gate: admin ja API suojattu (rate limit + validointi), ei avoimia kirjoitusoikeuksia

### 6.5.3 GDPR / tietosuoja / evästeet
- Tietosuojaseloste julkaistu
- Evästekäytäntö julkaistu (jos analytics/cookies)
- Cookie consent toteutettu jos trackereita käytössä
Gate: sivustolla on vaaditut sivut ja consent toimii tarvittaessa

### 6.5.4 Operointi: backupit & hälytykset
- Supabase backup/snapshot -politiikka määritelty
- Palautustesti tehty (vähintään kerran)
- Monitoring + alertit (ei pelkkä dashboard): error rate / uptime ilmoitukset
Gate: palautus on testattu ja hälytys tulee virheistä/katkoksista

### 6.5.5 SEO tuotantotason suojat
- 404/500 sivut + selkeä UX
- Redirect-mappi (jos URLit muuttuu)
- Structured data (minimi): Article + BreadcrumbList (+ tarvittaessa WebSite/SearchAction)
- Preview-ympäristöt noindex (ettei Google indeksoi previewta)
Gate: preview ei indeksoidu, tuotannossa 404/500 ok ja structured data mukana

### 6.5.6 Google Search & indexing readiness
- Google Search Console property luotu
  - domain- tai URL-property (ensisijaisesti domain)
- Sitemap.xml:
  - saatavilla /sitemap.xml
  - lisätty Google Search Consoleen
- Indexing-tila tarkistettu:
  - Pages/Coverage-raportissa ei kriittisiä virheitä
  - Manual actions: none
- Preview- ja staging-ympäristöt:
  - noindex + nofollow
  - eivät indeksoidu Googleen
- Robots.txt tarkistettu:
  - ei estä tuotannon indeksointia
  - estää preview-ympäristöt

Gate:
- Google Search Console hyväksyy sitemapin
- Tuotantosivut indeksoitavissa
- Preview/staging ei indeksoidu

## Phase 7 — Julkaisu (P0)
7.1 Domain & prod-asetukset
- domain, https, redirectit
- env vars oikein
- service role ei clientiin
Gate: prod toimii domainilla, ei secrets-vuotoa

7.2 Launch checklist
- 20 tärkeintä URLia testattu prodissa
- sitemap/robots ok
- admin ok
- monitoring ok
- backup/snapshot
Gate: go live vasta kun checklist täynnä

## Jatkuva työskentelymalli
Jokainen PR: local → preview (käyttäjä näkee) → testit (CI) → merge → prod tarvittaessa

---

## Phase 8 — LomaSihteeri (AI-avusteinen matkailuassistentti) (POST-LAUNCH)

Tavoite: tarjota käyttäjälle älykäs, kontekstuaalinen apuri hyödyntäen
julkaistua ja validoitua Lomaopas-sisältöä.

### 8.1 Rajaus (tärkeä)
- EI osa Lomaopas v1 -julkaisua
- EI vaikuta Phase 0–7 aikatauluun
- Read-only suhteessa tietokantaan alkuvaiheessa

### 8.2 Toiminnallisuus v1
- Kysymys–vastaus artikkeleista ja kohteista
- Suositukset olemassa olevasta sisällöstä
- Ei sisällön generointia ilman lähdettä

### 8.3 Tekniset periaatteet
- Käyttää vain julkaistua dataa (published=true)
- Ei automaattisia DB-muutoksia
- Lokitus ja rajoitukset (rate limit)

Gate:
- Web julkaistu
- Sisältömalli vakaa
- Käyttödata saatavilla (analytics)

---

## Phase 9 — PWA / Mobiilisovellus (POST-LAUNCH)

Tavoite: parantaa saavutettavuutta ja sitoutumista, ei korvata webiä.

### 9.1 Rajaus (tärkeä)
- EI natiivisovellusta ennen PWA:ta
- EI osa Lomaopas v1 -julkaisua
- Päätös perustuu käyttödataan, ei oletuksiin

### 9.2 PWA (ensisijainen)
- Add to Home Screen
- Offline-tuki keskeisille sivuille
- Push-notifikaatiot (vain jos perusteltu)

### 9.3 Natiivisovellus (ehdollinen)
- iOS / Android vain jos:
  - PWA ei riitä
  - Käyttödata osoittaa tarpeen
  - Backend vakaa

Gate:
- Web käytössä tuotannossa
- Analytics osoittaa toistuvaa käyttöä
- Selkeä käyttötapaus sovellukselle
