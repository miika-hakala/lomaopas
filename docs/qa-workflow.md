# QA workflow

## Definition of Done (DoD)

- [ ] Muutos nähty local/preview
- [ ] `npm run build` ✅
- [ ] `npm run test` ✅
- [ ] `npm run e2e` ✅ (kun UI/reitit/linkit muuttuvat)
- [ ] Ei 404-linkkejä näkyvissä osioissa (etusivu + navigaatio)

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
