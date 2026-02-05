# TASKS – Lomaopas.fi

Päivitetty: 2026-02-05

---

## ACTIVE

**P8.1-001: Gran Canaria & Teneriffa QA/SEO**
- Review existing Gran Canaria content (PDF master + 8 city pages)
- Review existing Teneriffa content (PDF master + 8 city pages)
- SEO optimization (titles, meta descriptions, headings)
- Internal linking check (hub ↔ spoke connections)
- Content quality check (consistency, accuracy, completeness)

---

## NEXT

### Phase 8.1 — Content Expansion (P0 Priority)

**Thaimaa** (Next after Gran Canaria/Teneriffa QA):
- [ ] P8.1-002: Thaimaa PDF master creation
- [ ] P8.1-003: Thaimaa city pages (hub + spokes)
- [ ] P8.1-004: Thaimaa QA/SEO pass

**Mallorca**:
- [ ] P8.1-005: Mallorca PDF master creation
- [ ] P8.1-006: Mallorca city pages (hub + spokes)
- [ ] P8.1-007: Mallorca QA/SEO pass

**Costa del Sol expansion**:
- [ ] P8.1-008: Costa del Sol remaining cities (if any)
- [ ] P8.1-009: Costa del Sol QA/SEO pass

### Phase 8.1 — Content Expansion (P1 Priority)

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

### Phase 8.1 — Content Expansion (P2 Priority)

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

### Phase 8.2 — Design MVP (PAUSED)

- [ ] P8.2-001: Design MVP implementation

### Phase 9 — PWA / Mobiilisovellus (Post-launch)

- [ ] P9-001: PWA-toteutus
- [ ] P9-002: Natiivisovellus (ehdollinen)

### Muu (odottaa julkaisua)

- [ ] P3.8-LAUNCH-001: PDF-myynnin lanseeraus (Stripe live)

---

## DONE

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

### Phase 6 — Launch readiness

- [x] P6-001: Analytics & monitoring setup
- [x] P6-002: Error logging
- [x] P6-003: Performance optimization

### Phase 6.5 — Production hardening

- [x] P6.5-001: Security headers
- [x] P6.5-002: Rate limiting
- [x] P6.5-003: GDPR compliance
- [x] P6.5-004: Backup & recovery
- [x] P6.5-005: SEO production safeguards
- [x] P6.5-006: Google Search Console setup
