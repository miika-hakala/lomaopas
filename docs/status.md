## Lomaopas.fi – STATUS

Päivitetty: 2026-02-03

---

### Fuengirola v1 — ✅ VALMIS

Commit: `afb3bcd16c8ee01c64696622f372e70d8f6c34c4`

**Sisältö:**
- Fuengirola hub + kaikki alaosiot
- SEO-viimeistely ja sisäinen linkitys

---

### LomaSihteeri MVP — ✅ VALMIS

Commit: `fbf98be` (test: add playwright e2e smoke for lomasihteeri flow)

**Toiminnallisuus:**
- Onboarding-flow (päivämäärät + kiinnostukset)
- Päivän kirje live-datalla:
  - Sää (AEMET)
  - Varoitukset (AEMET CAP)
  - Tapahtumat (Visit Costa del Sol + curated fallback)
- LocalStorage-profiili (ei kirjautumista)
- Unified `/api/briefing` endpoint (30 min cache)

**Testaus:**
- `npm run check` – PASS
- `npm run build` – PASS
- `npm run test:e2e` – PASS (Playwright smoke)
- Phase Gate -käytäntö dokumentoitu

**Viitteet:**
- Testausohje: `docs/testing.md`
- LomaSihteeri-dokumentaatio: `docs/lomasihteeri/`

---

### Tekninen tila

| Kohde | Tila |
|-------|------|
| SvelteKit build | ✅ OK |
| Reittirakenne | Lukittu |
| Main-haara | Ajan tasalla |
| E2E-testit | Vihreä |

---

### Seuraavat vaiheet (PENDING – tauolla)

- Phase 3: Monetisointi
- Phase 4: Premium & App

Projekti jatkuu erillisellä päätöksellä.
