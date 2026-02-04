# TASKS – Lomaopas.fi

Päivitetty: 2026-02-04

---

## ACTIVE

(tyhjä)

---

## NEXT

### Phase 7 — Launch

- [ ] P7-001: Final smoke test
- [ ] P7-002: Monitor production
- [ ] P7-003: Document launch

### Phase 7 — Julkaisu

- [ ] P7-001: Määritä tuotantodomain ja HTTPS
- [ ] P7-002: Tarkista env-varit tuotannossa
- [ ] P7-003: Aja launch checklist ja julkaise

---

## PAUSED

### LomaSihteeri (POST-LAUNCH, PAUSED)

- [ ] LS-001: LomaSihteeri MVP (AI-assistentti)

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

### Phase 3 — Admin & sisältö

- [x] P3-001: Ota Supabase Auth käyttöön (admin login)
- [x] P3-002: Luo admin-näkymä artikkeleiden listaukseen
- [x] P3-003: Lisää artikkelin luonti ja muokkaus
- [x] P3-004: Lisää publish/unpublish -toiminto (valmis P3-003:ssa)

### Phase 4 — Site structure (julkinen sivusto)

- [x] P4-001: Luo julkinen destination-sivu (/espanja)
- [x] P4-002: Luo julkinen city-sivu (/espanja/fuengirola)
- [x] P4-003: Luo julkinen article-sivu (/espanja/fuengirola/rannat)
- [x] P4-004: Lisää navigaatio ja breadcrumbs (valmis implisiittisesti)
- [x] P4-005: Testaa että RLS toimii (vain julkaistu sisältö näkyy)

### Phase 5 — Testing

- [x] P5-001: Aja täydellinen e2e-testisarja
- [x] P5-002: Testaa kaikki julkiset reitit automaattisesti
- [x] P5-003: Testaa admin CRUD -flow automaattisesti
- [x] P5-004: Varmista että build + deploy toimii Vercelissä

### Phase 6 — Launch readiness

- [x] P6-001: SEO basics (meta tags, sitemap, robots.txt)
- [x] P6-002: Performance check (implisiittinen - SvelteKit + Vercel optimoinnit)
- [-] P6-003: Analytics setup (SKIPPED - optional, post-launch)
- [-] P6-004: Error monitoring (SKIPPED - optional, post-launch)
- [x] P6-005: Final review

### Phase 6.5 — Hardening

- [x] P6.5-001: Tarkista kaikki kriittiset polut toimivat päästä päähän
- [x] P6.5-002: Varmista error handling kaikissa kriittisissä kohdissa
- [x] P6.5-003: Testaa edge caset (tyhjät tulokset, virheelliset syötteet)
- [x] P6.5-004: Varmista että kaikki linkit toimivat

- [x] P0-SETUP-001: Projektin pystytys ja perusdokumentaatio
- [x] P1-FNG-001: Fuengirola MVP-sisältö (PDF + sivut)
- [x] P1.5-SEO-001: Fuengirola SEO & QA
- [x] P2-LS-001: LomaSihteeri MVP -toiminnallisuus
- [x] P3-MON-001: Monetisoinnin tekninen toteutus (Stripe, Supabase)
- [x] P2x-AUTO-001: Multi-region scaffold-automaatio
- [x] P2x-GC-000: Gran Canaria sisällöntuotanto (PDF + sivut)
- [x] P2x-TFN-000: Teneriffa sisällöntuotanto (PDF + sivut)
