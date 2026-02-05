# Roadmap

> **SSOT:** Tämä on projektin ainoa roadmap.
>
> **Workflow & gates:** [docs/workflow.md](./workflow.md) | [docs/qa-workflow.md](./qa-workflow.md)

## Phase 0 – DONE
- Nimi: Lomaopas.fi
- Kohderyhmä & sisältörajaus
- Taksonomia & URL-rakenne
- City-sivun template

## Phase 1: Fuengirola MVP – DONE
- **Tavoite:** Ensimmäisen kohdeoppaan julkaisu (Fuengirola).
- **Laajuus:** Espanja > Fuengirola.
- **Sisältö:** Hub-sivu, Liikkuminen, Rannat, Ravintolat, Päiväretket, Nähtävyydet, FAQ.
- **Tekniikka:** SvelteKit-pohja, reititys ja SEO-perusta.

## Phase 1.5: Fuengirola SEO & QA – DONE
- SEO-optimointi ja sisäinen linkitys.
- Sisällön viimeistely.
- Dokumentaation päivittäminen.

---

## Phase 2: LomaSihteeri MVP – DONE

**Tavoite:** Personoitu päivän kirje live-datalla Fuengirolan käyttäjille.

### 2.1 Sää (AEMET) – DONE
- AEMET OpenData -integraatio (Fuengirola, municipio 29054)
- Suomenkielinen sääteksti ja johtopäätös
- Fallback-tuki API-virheille

### 2.2 Tapahtumat (live + curated fallback) – DONE
- Visit Costa del Sol -API (ensisijainen)
- Kuratoidut viikottaiset tapahtumat (fallback)
- Päiväkohtainen valinta (dayOfWeek)

### 2.3 Häiriöt/varoitukset (AEMET CAP) – DONE
- AEMET avisos_cap -endpoint (Málaga zone 61)
- Severity-mapping: red/orange/yellow
- Suomenkieliset varoitustekstit ja toimintaohjeet

### 2.4 Unified Daily Briefing + Cache – DONE
- `/api/briefing` yhdistää sää, varoitukset, tapahtumat
- In-memory cache (TTL 30 min)
- Best-effort: ok=true jos sää TAI tapahtumat onnistuu

### Phase 2 valmis ja testattu
- `npm run check` + `npm run build` läpäisty
- E2E smoke-testi (Playwright) vihreä
- Phase Gate -käytäntö dokumentoitu (`docs/testing.md`)

---

## Phase 3: Monetisointi – PAUSED (3.8 odottaa)

**Syy:** siirretty myöhemmäksi fokusointipäätöksellä
**Aktivoituu kun:** sisältöpohja riittävän laaja

**Tavoite:** Tulonlähteiden luominen affiliate-linkeillä ja PDF-myynnillä.

### 3.1–3.2 Affiliate-linkit – DONE
- Strategia dokumentoitu
- Linkit integroitu sivuille (Booking, GetYourGuide, Rentalcars)

### 3.3–3.5 PDF-myynti (valmistelu) – DONE
- PDF-sisältö viimeistelty
- PDF-teaser kaupunkisivulle
- Myyntimalli lukittu (Stripe, 9,90 €)

### 3.6–3.7 Stripe-integraatio – DONE
- Checkout Session API
- Webhook (maksun vahvistus)
- Supabase-tilaustallennus
- Token-suojattu lataus (7 pv / 5 latausta)

### 3.8 Lanseeraus – PAUSED
- Odottaa lisää liikennettä ja sisältöä
- **Aktivoituu kun:** sisältöpohja riittävän laaja

---

## Track — Kaupunkien skaalaus – DONE

**Tavoite:** Skaalata Lomaopas.fi useaan kaupunkiin hyödyntäen Fuengirolan valmista mallia.

### Kohteet ✅ DONE
1. **Málaga** ✅
2. **Torremolinos** ✅
3. **Benalmádena** ✅

---

## Track — Global Destinations (2026) — READY FOR EXPANSION

**Tavoite:** Laajentaa Lomaopas.fi:n sisältö Top 20 -kohdelistan mukaiseksi klusteriksi (2026).

**Status:** ⏳ READY (odottaa Design MVP:tä)

### P0 – Ehdoton ydin (suurin volyymi)
1. **Gran Canaria** — PDF master ✅ | City pages ✅ | QA/SEO (after Design MVP)
2. **Teneriffa** — PDF master ✅ | City pages ✅ | QA/SEO (after Design MVP)
3. **Thaimaa** — (after Design MVP)
4. **Mallorca** — (after Design MVP)
5. **Costa del Sol** — ✅ DONE (Fuengirola, Málaga, Torremolinos, Benalmádena, Marbella)

### P1 – Suuret aurinko- ja perhelomakohteet
6. **Kreeta**
7. **Rodos**
8. **Antalya**
9. **Alanya**
10. **Hurghada**

### P1 – Kaupunkilomat ja yhdistelmäkohteet
11. **Barcelona**
12. **Rooma**
13. **Pariisi**
14. **Lontoo**
15. **New York**

### P2 – Tärkeät mutta pienempi volyymi
16. **Kypros**
17. **Zakynthos**
18. **Lissabon**
19. **Cancún**
20. **Fuerteventura**

**Toimitusketju:** Design MVP → PDF master → City pages → QA/SEO → DONE

Lähde: `docs/market/top-destinations-2026.md`

---

## Phase 8 — Post-Launch & Expansion (ACTIVE)

Status: 🔄 ACTIVE  
Started: 2026-02-05

Tavoite:
- Luoda skaalautuva visuaalinen perusta
- Skaalata sisältöä hallitusti
- Rakentaa SEO- ja liikenneperusta
- Valmistella kaupallistamista

**KRIITTINEN JÄRJESTYS:**
1. **Phase 8.1 — Design MVP** (ACTIVE) → Visuaalinen perusta
2. **Phase 8.2 — Content Expansion** (NEXT) → Sisällön skaalaus

---

### Phase 8.1 — Design MVP (ACTIVE)

Status: 🔄 ACTIVE  
Started: 2026-02-05

**Tavoite:**
- Luoda kevyt mutta kestävä visuaalinen perusta
- Tukea hub/spoke-sisältörakennetta
- Mahdollistaa sisällön skaalaus ilman design-muutoksia

**Rajaus:**
- Koskee vain:
  - Alueoppaita (hub)
  - Kohdeoppaita (spoke)
- Ei admin-näkymiä
- Ei kampanjasivuja
- Ei animaatioita tai teemoja

**Design MVP sisältää seuraavat pakolliset komponentit:**
1. Base layout (header, footer, max-width, responsiivisuus)
2. Hero (alueopas / kohdeopas)
3. Typografia (1 otsikkofontti, 1 leipäfontti)
4. Sisältölayout (luettavuus, spacing)
5. Opas-navigointi (alue ↔ kohde)
6. Sisällysluettelo (TOC)
7. Info-kortti (geneerinen)
8. Neutraali CTA-komponentti
9. Breadcrumbs
10. Kuvakäytäntö (1 hero-kuva / opas)

**DONE-kriteeri:**
- Alue- ja kohdeopas toimivat visuaalisesti
- Sisältö on luettavaa pitkissä artikkeleissa
- Uusia oppaita voi lisätä ilman design-työtä

**Design + Brand MVP referenssisivu (kohdeopas):**
`docs/design-mvp-fuengirola.md`

Design MVP ei laajene ilman erillistä päätöstä.

**Out of scope (Design MVP):**
- Dark mode
- Teemavärit per kohde
- Animaatiot ja transition-efektit
- Kampanja- ja landing-sivut
- Admin-näkymien design
- Brändigraafiset kuvitukset

---

### Phase 8.2 — Content Expansion (NEXT)

Status: ⏳ NEXT (alkaa kun Design MVP valmis)

**SISÄLTÖRAKENNESÄÄNTÖ (SSOT):**

- Alueet (saaret, rannikkoalueet) toteutetaan yleisoppaina (hub)
- Kaupungit ja lomakohteet toteutetaan omina oppainaan (spoke)
- Alueopas ohjaa, kohdeopas syventää
- Yksi opas = yksi selkeä hakuintentio
- Massasisältöä ei tuoteta ilman QA-porttia

**OPAS-TYYPPIMALLIT (virallinen)**

**Alueopas (HUB) – malli**

```
# {ALUEEN NIMI} – Matkaopas

## Yleiskuva
Lyhyt johdanto alueeseen ja sen luonteeseen.

## Missä alue sijaitsee
Maantieteellinen sijainti ja kartta.

## Ilmasto ja paras matkustusaika
Yleistasoinen kuvaus vuodenajoista.

## Kenelle alue sopii
Perheet, pariskunnat, aktiivilomat, etätyö jne.

## Lomakohteet alueella
- [Kohde 1]
- [Kohde 2]
- [Kohde 3]

## Liikkuminen alueella
Autot, julkinen liikenne, etäisyydet (yleistaso).

## Usein kysytyt kysymykset
Lyhyet, alueelliset vastaukset.
```

Alueopas ei sisällä yksityiskohtaisia nähtävyys-, ravintola- tai aktiviteettilistoja.

**Kohdeopas (SPOKE) – malli**

```
# {KOHTEEN NIMI} – Matkaopas

## Yleiskuva
Millainen kohde on ja kenelle se sopii.

## Sijainti ja saapuminen
Miten kohteeseen pääsee.

## Rannat
Kohteen tärkeimmät rannat.

## Nähtävyydet
Paikalliset nähtävyydet ja kohokohdat.

## Tekemistä ja aktiviteetit
Ulkoilu, retket, tapahtumat.

## Ravintolat ja ruokailu
Paikalliset ravintolat ja ruokakulttuuri.

## Liikkuminen kohteessa
Kävellen, bussit, taksit, vuokraus.

## Päiväretket
Retkikohteet lähialueella.

## Käytännön vinkit
Hyvä tietää ennen matkaa.

## Usein kysytyt kysymykset
Kohdekohtaiset kysymykset ja vastaukset.
```

**Gran Canaria – konkreettinen hierarkia (esimerkkikohde)**

Alueopas:
- Gran Canaria (alueopas)

Kohdeoppaat:
- Playa del Inglés
- Maspalomas
- Puerto Rico
- Las Palmas

Sääntö:
- Gran Canaria -opas ei sisällä yksityiskohtaista sisältöä näistä
- Jokainen kohdeopas linkittää takaisin Gran Canariaan

---

## Phase 9 — Admin Automation & Assisted Content Creation (DRAFT)

Status: 📝 DRAFT (ei aikataulutettu)

Tavoite:
- Nopeuttaa uusien matkakohteiden luontia
- Vähentää manuaalista virhettä
- Mahdollistaa hallittu AI-avusteinen sisällöntuotanto admin-paneelissa

Phase 9 on puhtaasti parannusvaihe.
Se ei ole edellytys sisällön skaalaukselle Phase 8:ssa.

### Phase 9.1 — Admin-assisted Destination Creation

Mahdollinen toteutus:

Admin-paneeli tarjoaa ohjatun prosessin:
1. Luo uusi alue tai kohde
2. Valitse opastyyppi (Alue / Kohde)
3. Automaattinen scaffold:
   - sivurakenne
   - tyhjät osiot
4. AI-avusteinen sisällön luonnostelu (valinnainen)
5. Pakollinen manuaalinen tarkistus
6. Julkaisu vain admin-hyväksynnällä

Rajoitukset:
- AI ei koskaan julkaise suoraan
- AI ei muuta rakennetta
- Kaikki AI-sisältö = DRAFT

### Phase 9 — Gate-periaatteet

Gate-säännöt:
- Automaatiot eivät ole pakollisia
- Manuaalinen workflow säilyy aina
- Admin voi ohittaa automaation kokonaan

---

## Track — LomaSihteeri (AI-avusteinen matkailuassistentti) (POST-LAUNCH)

Status: ⏸️ PAUSED

Scope: lukee vain julkaistua sisältöä alkuvaiheessa, ei automaattisia DB-muutoksia

Milestones:
- LS-0: Rajaus & konsepti
- LS-1: MVP (Q&A + suositukset)
- LS-2: Syvempi integraatio (oppaat/ohjaus)

---

## 🧠 PARKED & FUTURE SYSTEMS

### Local AI Agent (Offline / Private)
- oma lokaalisti ajettava agentti
- oma tietokanta, agentti päivittää itse
- rajattu Lomaopas / kohdekohtaisiin tietoihin
- HW: Ryzen 5950X / 64GB RAM / RTX 3060
- Tila: PARKED
- Aktivoituu kun: Fuengirola + 1 laajennuskohde vakaa

### Agenttiarkkitehtuuri & työnjako
- Planner / Työnjohtaja / Worker-agentit
- tehtävät delegoidaan kopioitavina blokkeina
- Single Source of Truth: ROADMAP + TASKS
- Tila: OSIN KÄYTÖSSÄ
- Huom: ei omaa roadmap-vaihetta
