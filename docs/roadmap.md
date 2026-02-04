# Roadmap

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
**Aktivoituu kun:** nykyinen NEXT-vaihe julkaistu

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
- Jatkuu Phase 1x jälkeen
- **Syy:** siirretty myöhemmäksi fokusointipäätöksellä
- **Aktivoituu kun:** nykyinen NEXT-vaihe julkaistu

---

## Phase 1x: Kaupunkien skaalaus – ACTIVE

**Tavoite:** Skaalata Lomaopas.fi useaan kaupunkiin hyödyntäen Fuengirolan valmista mallia.

### Kohteet (järjestyksessä)
1. **Málaga** (ensimmäinen)
2. Torremolinos
3. (myöhemmin) Benalmádena

### Laajuus per kaupunki
- PDF master (single source of truth)
- Kaupunkisivu + alasivut (PDF:n pohjalta)
- SEO & sisäinen linkitys
- Ei uusia ominaisuuksia – sisältöfokus

### Hyödyt
- Kasvattaa sivuston liikennettä
- Laajentaa sisältöpohjaa ennen lanseerausta
- Testaa skaalautuvuutta

---

## Phase 2x – Global Destinations (2026)

**Tavoite:** Laajentaa Lomaopas.fi:n sisältö Top 20 -kohdelistan mukaiseksi klusteriksi (2026).

### P0 – Ehdoton ydin (suurin volyymi)
1. **Gran Canaria** — PDF stub → PDF master → City pages → **QA/SEO (NEXT)** → DONE
2. **Teneriffa** — PDF stub → PDF master → City pages → **QA/SEO (NEXT)** → DONE
3. **Thaimaa** — PDF stub → PDF master → City pages → QA/SEO → DONE
4. **Mallorca** — PDF stub → PDF master → City pages → QA/SEO → DONE
5. **Costa del Sol** — PDF stub → PDF master → City pages → QA/SEO → DONE/PARTIAL (Fuengirola, Málaga, Torremolinos, Benalmádena, Marbella valmiit)

*Huom: Gran Canaria ja Teneriffa odottavat QA/SEO-kierrosta.*

### P1 – Suuret aurinko- ja perhelomakohteet
6. **Kreeta** — PDF stub → PDF master → City pages → QA/SEO → DONE
7. **Rodos** — PDF stub → PDF master → City pages → QA/SEO → DONE
8. **Antalya** — PDF stub → PDF master → City pages → QA/SEO → DONE
9. **Alanya** — PDF stub → PDF master → City pages → QA/SEO → DONE
10. **Hurghada** — PDF stub → PDF master → City pages → QA/SEO → DONE

### P1 – Kaupunkilomat ja yhdistelmäkohteet
11. **Barcelona** — PDF stub → PDF master → City pages → QA/SEO → DONE
12. **Rooma** — PDF stub → PDF master → City pages → QA/SEO → DONE
13. **Pariisi** — PDF stub → PDF master → City pages → QA/SEO → DONE
14. **Lontoo** — PDF stub → PDF master → City pages → QA/SEO → DONE
15. **New York** — PDF stub → PDF master → City pages → QA/SEO → DONE

### P2 – Tärkeät mutta pienempi volyymi
16. **Kypros** — PDF stub → PDF master → City pages → QA/SEO → DONE
17. **Zakynthos** — PDF stub → PDF master → City pages → QA/SEO → DONE
18. **Lissabon** — PDF stub → PDF master → City pages → QA/SEO → DONE
19. **Cancún** — PDF stub → PDF master → City pages → QA/SEO → DONE
20. **Fuerteventura** — PDF stub → PDF master → City pages → QA/SEO → DONE

**Toimitusketju:** PDF stub → PDF master → City pages → QA/SEO → DONE

Lähde: `docs/market/top-destinations-2026.md`

---

## Phase 4 – Premium & App (PENDING – tauolla)
- Laajennus premium-sisältöön (offline-kartat, syvemmät oppaat).
- Mahdollinen natiivisovellus.

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
