# Workflow – Lomaopas.fi

## Pakollinen työnkulku (ei poikkeuksia)

- **Local**: nähtävä muutos (`npm run dev`) TAI Vercel Preview linkki
- **Ennen mergeä aina**: `npm run build` + `npm run test`
- **Kun UI/reitit/linkit muuttuvat**: `npm run e2e` (Playwright)
- **PR-raportti sisältää aina**:
  - Preview linkki
  - Ajetut komennot + tulos
  - Testatut URLit (3–10)

## Gate-sääntö

Ei mergeä ilman:
- Preview/Local nähty
- CI vihreä
- E2E vihreä kun reitit/linkit muuttuvat

## Projektikonteksti (kansio = projekti)

- Ei koskaan viitata toisiin projekteihin tai niiden URL:eihin
- Kaikki komennot ja tarkistukset tehdään tämän repon sisällä

## Standard commands

| Komento | Tarkoitus |
|---------|-----------|
| `npm run dev` | Käynnistä kehityspalvelin |
| `npm run build` | Tuotantobuildi |
| `npm run test` | Yksikkötestit (Vitest) |
| `npm run e2e` | E2E-testit (Playwright) |
| `npm run check` | TypeScript + Svelte tarkistukset |

## PR-raporttipohja

```markdown
## PR Summary

### Changes
- [Lyhyt kuvaus muutoksista]

### Preview
- [ ] Local tested: `npm run dev`
- [ ] Preview URL: [linkki]

### Commands run
- [ ] `npm run build` ✅
- [ ] `npm run test` ✅
- [ ] `npm run e2e` ✅ (jos UI/reitit muuttui)

### Tested URLs (3-10)
1. /
2. /espanja/fuengirola
3. /espanja/fuengirola/rannat

### Notes
[Lisätiedot tarvittaessa]
```
