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

### Phase 3: Monetisointi — ⏸️ PAUSED (3.8 lanseeraus odottaa)

**Valmiit vaiheet (3.1–3.7):**
- [x] Affiliate-strategia dokumentoitu
- [x] Affiliate-linkit sivuille (Booking, GetYourGuide, Rentalcars)
- [x] PDF-sisältö viimeistelty
- [x] PDF-teaser kaupunkisivulle
- [x] Myyntimalli lukittu (Stripe, 9,90 €)
- [x] Stripe-integraatio
- [x] Myyntisivu + checkout
- [x] Supabase-tilaustallennus + latausrajat (7 pv / 5 latausta)

**Odottaa:**
- [ ] Phase 3.8: Lanseeraus (paused – odotetaan lisää liikennettä)

**Commit (3.7):** `0ae2eea` (feat: harden payments with supabase persistence)

**Viitteet:**
- `docs/monetization.md`
- `docs/premium_products.md`

---

### Phase 1x: Kaupunkien skaalaus — 🟢 ACTIVE

**Tavoite:** Laajentaa sisältö uusiin kaupunkeihin Fuengirola-mallilla.

**Ensimmäinen kohde:** Málaga

**Status:**
- [ ] Málaga PDF master
- [ ] Málaga kaupunkisivut
- [ ] Sisäinen linkitys

---

### Phase 2x: Global Destinations (2026) — 🟢 ACTIVE

**Tavoite:** Top 20 -kohteiden vaiheistus ja toimitusketju (PDF → sivut → QA).

**Status:**
- **Gran Canaria — DONE** (PDF master + City pages, `npm run check/build` PASS)
- **Teneriffa — DONE** (PDF master + City pages, `npm run check/build` PASS)
- Automaatio valmis ja testattu

**Commit (viimeisin):** `abb77b9`

**Next:** QA/SEO-kierros (Gran Canaria, Teneriffa)

---

### Tekninen tila

| Kohde | Tila |
|-------|------|
| SvelteKit build | ✅ OK |
| Reittirakenne | Lukittu |
| Main-haara | Ajan tasalla |
| E2E-testit | Vihreä |
| Stripe-integraatio | ✅ Valmis |
| Supabase (orders) | ✅ Valmis |

---

### Seuraavat vaiheet

| Vaihe | Status |
|-------|--------|
| Phase 1x – Málaga | ACTIVE |
| Phase 2x – Global Destinations (2026) | ACTIVE |
| Phase 3.8 – Lanseeraus | PAUSED |
| Phase 4 – Premium & App | PENDING |
