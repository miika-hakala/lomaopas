# TASKS – Lomaopas.fi

Päivitetty: 2026-02-04

---

## ACTIVE

(tyhjä)

---

## NEXT

### Phase 3 — Admin & sisältö

- [ ] P3-001: Ota Supabase Auth käyttöön (admin login)
- [ ] P3-002: Luo admin-näkymä artikkeleiden listaukseen
- [ ] P3-003: Lisää artikkelin luonti ja muokkaus
- [ ] P3-004: Lisää publish/unpublish -toiminto

### Phase 4 — Sivusto & reitit

- [ ] P4-001: Rakenna etusivu
- [ ] P4-002: Rakenna kohdelistaus
- [ ] P4-003: Rakenna kohdesivu
- [ ] P4-004: Rakenna artikkelisivu
- [ ] P4-005: Lisää perushaku / filtterit

### Phase 5 — Testaus & laatu

- [ ] P5-001: Lisää e2e smoke-testit (etusivu, artikkeli, ei 404)
- [ ] P5-002: Lisää broken-link -testi etusivulle
- [ ] P5-003: Estä placeholder-linkit tuotannossa

### Phase 6 — Julkaisuvalmius

- [ ] P6-001: Lisää analytics ja performance-mittaus
- [ ] P6-002: Lisää error monitoring

### Phase 6.5 — Production hardening & compliance

- [ ] P6.5-001: Erota preview ja production -ympäristöt
- [ ] P6.5-002: Lisää security headers ja rate limiting
- [ ] P6.5-003: Lisää tietosuojaseloste ja evästekäytäntö
- [ ] P6.5-004: Lisää backup- ja palautuspolitiikka
- [ ] P6.5-005: Lisää Google Search Console ja sitemap

### Phase 7 — Julkaisu

- [ ] P7-001: Määritä tuotantodomain ja HTTPS
- [ ] P7-002: Tarkista env-varit tuotannossa
- [ ] P7-003: Aja launch checklist ja julkaise

---

## PAUSED

### Phase 8 — LomaSihteeri (Post-launch)

- [ ] P8-001: LomaSihteeri MVP (AI-assistentti)

### Phase 9 — PWA / Mobiilisovellus (Post-launch)

- [ ] P9-001: PWA-toteutus
- [ ] P9-002: Natiivisovellus (ehdollinen)

### Muu (odottaa julkaisua)

- [ ] P3.8-LAUNCH-001: PDF-myynnin lanseeraus (Stripe live)

---

## DONE

### Phase 0 — Perustus ja näkyvyys

- [x] P0-001: Asenna riippuvuudet ja varmista että npm run dev käynnistyy
- [x] P0-002: Varmista että perusnäkymä aukeaa selaimessa lokaalisti
- [x] P0-003: Lisää PR-template ja kirjaa preview + testit pakollisiksi
- [x] P0-004: Lisää CI: npm run build + npm run test
- [x] P0-005: Lisää Playwright smoke-test (etusivu aukeaa)

### Phase 1 — Vercel & Preview

- [x] P1-001: Luo Vercel-projekti repo lomaopas:lle
- [x] P1-002: Määritä Vercel build ja root directory oikein
- [x] P1-003: Ota käyttöön Preview deployments PR:ille
- [x] P1-004: Dokumentoi preview-linkki pakolliseksi PR:issä

### Phase 2 — Supabase

- [x] P2-001: Luo Supabase production -projekti
- [x] P2-002: Tallenna Supabase env-varit lokaalisti ja Verceliin
- [x] P2-003: Ota Supabase CLI käyttöön ja linkitä projekti
- [x] P2-004: Luo schema v1 (destinations, articles, categories, sources)
- [x] P2-005: Lisää seed-data (1 kohde + 1 artikkeli)
- [x] P2-006: Lisää RLS: public read, admin write

- [x] P0-SETUP-001: Projektin pystytys ja perusdokumentaatio
- [x] P1-FNG-001: Fuengirola MVP-sisältö (PDF + sivut)
- [x] P1.5-SEO-001: Fuengirola SEO & QA
- [x] P2-LS-001: LomaSihteeri MVP -toiminnallisuus
- [x] P3-MON-001: Monetisoinnin tekninen toteutus (Stripe, Supabase)
- [x] P2x-AUTO-001: Multi-region scaffold-automaatio
- [x] P2x-GC-000: Gran Canaria sisällöntuotanto (PDF + sivut)
- [x] P2x-TFN-000: Teneriffa sisällöntuotanto (PDF + sivut)
