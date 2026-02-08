# TASKS – Lomaopas.fi

Päivitetty: 2026-02-08

---

## ACTIVE

**P8.2-001: Gran Canaria & Teneriffa QA/SEO pass**
- Review existing content (PDF masters + city pages)
- SEO optimization (titles, meta descriptions, headings)
- Internal linking check (hub ↔ spoke connections)
- Content quality assurance

Gate criteria:
- All pages load correctly
- Meta tags present and accurate
- Hub ↔ spoke links work
- Content reviewed for quality

---

## NEXT

### Phase 8.2 — Content Expansion (after Design MVP)

**Gran Canaria & Teneriffa QA/SEO** (First after Design MVP):
- [ ] P8.2-001: Gran Canaria & Teneriffa QA/SEO pass
  - Review existing content (PDF masters + city pages)
  - SEO optimization (titles, meta descriptions, headings)
  - Internal linking check (hub ↔ spoke connections)
  - Content quality assurance

**Thaimaa** (Next after Gran Canaria/Teneriffa QA):
- [ ] P8.2-002: Thaimaa PDF master creation
- [ ] P8.2-003: Thaimaa city pages (hub + spokes)
- [ ] P8.2-004: Thaimaa QA/SEO pass

**Mallorca**:
- [ ] P8.2-005: Mallorca PDF master creation
- [ ] P8.2-006: Mallorca city pages (hub + spokes)
- [ ] P8.2-007: Mallorca QA/SEO pass

**Costa del Sol expansion** (if needed):
- [ ] P8.2-008: Costa del Sol remaining cities
- [ ] P8.2-009: Costa del Sol QA/SEO pass

### Phase 8.2 — Content Expansion (P1 Priority)

**P1 destinations** (after P0 complete):
- Kreeta
- Rodos
- Antalya
- Alanya
- Hurghada
- Barcelona
- Rooma
- Pariisi
- Lontoo
- New York

### Phase 8.2 — Content Expansion (P2 Priority)

**P2 destinations** (after P1 complete):
- Kypros
- Zakynthos
- Lissabon
- Cancún
- Fuerteventura

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

### Design MVP (Phase 8.1)

- [x] P8.1-001: Design MVP implementation
  - Layer 1: Typography (Inter), base layout, header, footer
  - Layer 2: Hero, breadcrumbs, content layout, guide navigation
  - Layer 3: TOC, info card, CTA components
  - Layer 4: Image support and guidelines
  - 10/10 components implemented

### Security Audit (Post-Launch)

- [x] AUDIT-PR1: Auth hardening (getUser validation, admin layout guard, variable shadowing fix)
- [x] AUDIT-PR2: Form actions with server-side validation, dead code cleanup, env fix
- [x] AUDIT-PR3: Audit trail migration, admin role documentation, rate limiting docs

### Phase 8 Activation

- [x] P8-000: Activate Phase 8 (documentation update)

### Phase 7 — Launch

- [x] P7-001: Final smoke test
- [x] P7-002: Monitor production
- [x] P7-003: Document launch

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

### Historical tasks

- [x] P0-SETUP-001: Projektin pystytys ja perusdokumentaatio
- [x] P1-FNG-001: Fuengirola MVP-sisältö (PDF + sivut)
- [x] P1.5-SEO-001: Fuengirola SEO & QA
- [x] P2-LS-001: LomaSihteeri MVP -toiminnallisuus
- [x] P3-MON-001: Monetisoinnin tekninen toteutus (Stripe, Supabase)
- [x] P2x-AUTO-001: Multi-region scaffold-automaatio
- [x] P2x-GC-000: Gran Canaria sisällöntuotanto (PDF + sivut)
- [x] P2x-TFN-000: Teneriffa sisällöntuotanto (PDF + sivut)
