# QA workflow

## Definition of Done (DoD)

- [ ] Muutos nähty local/preview
- [ ] `npm run build` ✅
- [ ] `npm run test` ✅
- [ ] `npm run e2e` ✅ (kun UI/reitit/linkit muuttuvat)
- [ ] Ei 404-linkkejä näkyvissä osioissa (etusivu + navigaatio)

## Phase Gate (Phase valmistuminen)

Kun Phase on teknisesti valmis, ennen siirtymistä seuraavaan:

### Pakollinen dokumentaatiopäivitys

- [ ] **docs/status.md päivitetty:**
  - Current active status -taulukko
  - Current phase (vanha → COMPLETE, uusi → ACTIVE)
  - Next task (seuraavan phase:n ensimmäinen tehtävä)
  - Phase progress -taulukko

- [ ] **docs/TASKS.md päivitetty:**
  - Valmiit tehtävät siirretty DONE-osioon
  - NEXT-osio päivitetty seuraavan phase:n tehtävillä
  - Päiväys päivitetty

- [ ] **Dokumentaatiocommit tehty:**
  - Commit-viesti: "docs: update status - Phase X complete, Phase Y active"
  - Pushattu remoteen (jos vaaditaan)

### Gate-sääntö

**Phase EI ole valmis ennen kuin dokumentaatio on päivitetty ja commitoitu.**

Työnjohtaja hyväksyy Phase:n vasta kun:
1. Kaikki tekniset tehtävät täytetty
2. Testit läpäisseet
3. Dokumentaatio ajan tasalla

## Playwright E2E minimit (smoke)

- `/` aukeaa
- yksi kohdesivu aukeaa (tai fallback jos ei vielä dataa)
- yksi artikkelisivu aukeaa (tai fallback)
- ei 404 / error page

## Broken-link gate

- Etusivun näkyvät sisälinkit klikataan e2e-testissä
- Testi failaa jos 404

## Preview / staging noindex

- Preview-ympäristöt: `noindex, nofollow`
- Tuotanto: index allowed
