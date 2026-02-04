# TASKS – Lomaopas.fi

Päivitetty: 2026-02-03

---

## DESTINATION-BUILD-TEMPLATE

- [ ] PDF stub (`npm run new-city`)
- [ ] PDF master (sisältö täytetty)
- [ ] City pages (hub + alasivut)
- [ ] QA/SEO (`docs/QA_CITY_CHECKLIST.md`)
- [ ] DONE

---

## Phase 1: Fuengirola MVP – DONE

- [x] Hub-sivu
- [x] Liikkuminen
- [x] Rannat
- [x] Ravintolat
- [x] Päiväretket
- [x] Nähtävyydet
- [x] FAQ

---

## Phase 1.5: SEO & QA – DONE

- [x] SEO-optimointi
- [x] Sisäinen linkitys
- [x] Dokumentaation päivitys

---

## Phase 2: LomaSihteeri MVP – DONE

### 2.1 Sää – DONE
- [x] AEMET-integraatio
- [x] Suomenkielinen teksti
- [x] Fallback-tuki

### 2.2 Tapahtumat – DONE
- [x] Visit Costa del Sol -API
- [x] Curated fallback
- [x] Päiväkohtainen valinta

### 2.3 Varoitukset – DONE
- [x] AEMET CAP -integraatio
- [x] Severity-mapping
- [x] Suomenkieliset tekstit

### 2.4 Unified Briefing – DONE
- [x] `/api/briefing` endpoint
- [x] In-memory cache (30 min TTL)
- [x] Best-effort logiikka

### Testaus – DONE
- [x] `npm run check` läpäisty
- [x] `npm run build` läpäisty
- [x] E2E smoke-testi (Playwright)
- [x] Phase Gate -dokumentaatio

---

## Phase 3: Monetisointi – PAUSED (3.8 odottaa)

### 3.1–3.2 Affiliate-linkit – DONE
- [x] Strategia dokumentoitu
- [x] Linkit sivuille (Booking, GetYourGuide, Rentalcars)
- [x] AffiliateLink-komponentti

### 3.3–3.5 PDF-myynti (valmistelu) – DONE
- [x] PDF-sisältö viimeistelty
- [x] PDF-teaser kaupunkisivulle
- [x] Myyntimalli lukittu

### 3.6–3.7 Stripe-integraatio – DONE
- [x] POST /api/checkout (Checkout Session)
- [x] POST /api/webhook (Stripe events)
- [x] GET /api/lataa (token-suojattu lataus)
- [x] Supabase-tilaustallennus
- [x] Latausrajat (7 pv / 5 latausta)
- [x] /checkout ja /kiitos sivut

### 3.8 Lanseeraus – PAUSED
- [ ] Stripe live-avaimet
- [ ] Varsinainen PDF-tiedosto
- [ ] Email-vahvistukset

---

## Phase 1x: Kaupunkien skaalaus – ACTIVE

### P1x.1 Málaga (ensimmäinen kohde)
- [ ] PDF master: Málaga (`docs/pdf/malaga_pdf.md`)
- [ ] Kaupunkisivut PDF:n pohjalta
- [ ] SEO & sisäinen linkitys

### P1x.2 Torremolinos
- [ ] PDF master: Torremolinos
- [ ] Kaupunkisivut PDF:n pohjalta
- [ ] SEO & sisäinen linkitys

### P1x.3 Benalmádena (myöhemmin)
- [ ] PDF master
- [ ] Kaupunkisivut

---

## Phase 2x: Global Destinations (2026) – PLANNED

### P2x.P0 – Ehdoton ydin

#### Gran Canaria
- [x] PDF stub (`npm run new-city`)
- [x] PDF master (sisältö täytetty)
- [x] City pages (hub + alasivut)
- [ ] QA/SEO (`docs/QA_CITY_CHECKLIST.md`)
- [ ] DONE

#### Teneriffa
- [x] PDF stub (`npm run new-city`)
- [x] PDF master (sisältö täytetty)
- [x] City pages (hub + alasivut)
- [ ] QA/SEO (`docs/QA_CITY_CHECKLIST.md`)
- [ ] DONE

#### Thaimaa (Phuket / Krabi / Koh Samui)
- [ ] PDF stub (`npm run new-city`)
- [ ] PDF master (sisältö täytetty)
- [ ] City pages (hub + alasivut)
- [ ] QA/SEO (`docs/QA_CITY_CHECKLIST.md`)
- [ ] DONE

#### Mallorca
- [ ] PDF stub (`npm run new-city`)
- [ ] PDF master (sisältö täytetty)
- [ ] City pages (hub + alasivut)
- [ ] QA/SEO (`docs/QA_CITY_CHECKLIST.md`)
- [ ] DONE

#### Costa del Sol — DONE/PARTIAL
- Fuengirola, Málaga, Torremolinos, Benalmádena, Marbella

---

## Phase 4: Premium & App – PENDING (tauolla)

- [ ] Offline-kartat
- [ ] Syvemmät oppaat
- [ ] Natiivisovellus (mahdollinen)

---

## Huomautukset

- Phase 3.8 (lanseeraus) siirretty odottamaan lisää liikennettä
- Phase 1x aloitetaan ennen lanseerausta
- Testausohje: `docs/testing.md`
