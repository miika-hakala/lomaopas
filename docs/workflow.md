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
| `npm run test` | Playwright E2E (headless) |
| `npm run e2e` | Playwright E2E (alias) |
| `npm run check` | TypeScript + Svelte tarkistukset |

## Test commands

| Komento | Tarkoitus |
|---------|-----------|
| `npm run test` | Playwright E2E (headless) |
| `npm run e2e` | Playwright E2E (alias) |
| `npm run test:e2e` | Playwright E2E (alias) |
| `npm run test:ui` | Playwright UI |
| `npm run test:headed` | Playwright headed |

Unit tests (Vitest) are not currently configured.

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

## Minimitason manuaalinen opas-workflow (SSOT)

Tämä workflow on virallinen tapa luoda uusia oppaita
ennen admin-automaation valmistumista.

### 🧱 Vaihe 1 — Päätös
1. Päätetään:
   - Alueopas vai Kohdeopas
2. Varmistetaan, että rakenne noudattaa HUB/SPOKE-sääntöä

### 📄 Vaihe 2 — Sisällön scaffold
1. Luodaan opas vakioidun mallin mukaan:
   - Alueopas-malli TAI
   - Kohdeopas-malli
2. Kaikki osiot luodaan tyhjinä tai luonnoksina

### ✍️ Vaihe 3 — Sisällöntuotanto
Sallittua:
- Manuaalinen kirjoittaminen
- AI-avusteinen luonnostelu (Claude / agentti)

Pakollista:
- Sisällön tarkistus
- Rakenteen säilyttäminen

### 🧪 Vaihe 4 — QA
Tarkistetaan:
- Oikea opastyyppi
- Oikea linkitys (alue ↔ kohde)
- Ei päällekkäistä sisältöä
- Ei rikottuja linkkejä

### 🚀 Vaihe 5 — Julkaisu
1. Opas merkitään julkaistuksi
2. Lisätään linkitys:
   - Alueoppaaseen
   - Mahdollisiin sisaroppaisiin
3. Tarkistetaan näkyvyys frontendissä

### 🔒 Workflow-säännöt
- Yksi opas = yksi julkaisu kerrallaan
- Ei massajulkaisuja
- Ei suoraa AI → publish -ketjua

Kohdeoppaan visuaalinen ja sisällöllinen referenssi:
`docs/design-mvp-fuengirola.md`

## QA Checklist — Destination Guide Publication

### Rakenne
- [ ] Oikea opastyyppi (Alue / Kohde)
- [ ] Noudattaa virallista opas-tyyppimallia
- [ ] Kaikki pakolliset osiot olemassa

### Sisältö
- [ ] Ei placeholder-tekstiä
- [ ] Ei päällekkäistä sisältöä muiden oppaiden kanssa
- [ ] Sisältö vastaa yhtä selkeää hakuintentiota

### Linkitys
- [ ] Alueopas linkittää kohdeoppaaseen (jos kohde)
- [ ] Kohdeopas linkittää takaisin alueoppaaseen
- [ ] Ei rikottuja sisäisiä linkkejä

### SEO (kevyt)
- [ ] Otsikko vastaa kohdetta
- [ ] Meta-kuvaus olemassa
- [ ] Ei kilpaile toisen oppaan kanssa samoista termeistä

### Julkaisu
- [ ] Manuaalinen tarkistus tehty
- [ ] Ei AI-sisältöä ilman tarkistusta
- [ ] Julkaistu yksi opas kerrallaan
