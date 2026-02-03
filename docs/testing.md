# TESTAUS – Lomaopas.fi

## 1. Pakolliset komennot

Jokaisen koodimuutoksen jälkeen ajetaan:

```bash
npm run check    # TypeScript + Svelte-tarkistus
npm run build    # Tuotantobuildi
```

**Molemmat on läpäistävä ilman virheitä.**

Jos jompikumpi epäonnistuu, vaihetta ei voi kuitata PASS.

---

## 2. Manuaalinen smoke-test (5 min)

Käynnistä dev-palvelin ja tarkista perusasiat:

```bash
npm run dev
```

### Yleinen checklist

| Kohde | Tarkistus |
|-------|-----------|
| Etusivu | Latautuu, ei konsolivirheitä |
| Navigointi | Linkit toimivat |
| Responsiivisuus | Mobiili + desktop OK |
| Suomenkieliset tekstit | Näkyvät oikein |

### LomaSihteeri-smoke

| Kohde | Tarkistus |
|-------|-----------|
| `/espanja/fuengirola` | LomaSihteeri-nosto näkyy |
| `/espanja/fuengirola/lomasihteeri` | Dashboard latautuu |
| Onboarding | Vaiheet 1→2→valmis toimii |
| Päivän kirje | Sää, varoitukset, tapahtumat näkyvät |
| Profiilin nollaus | "Nollaa profiili" tyhjentää tiedot |

---

## 2b. E2E-testi (Playwright)

Automatisoitu smoke-testi korvaa manuaalisen LomaSihteeri-testin kun vihreä:

```bash
npm run test:e2e        # Headless (CI-yhteensopiva)
npm run test:e2e:ui     # UI-tila (debuggaus)
```

### Mitä testi kattaa

- Kaupunkisivu → CTA-klikkaus
- Onboarding vaiheet 1 ja 2
- Dashboard: profiili + päivän kirje näkyvät
- LocalStorage: profiili säilyy reload-jälkeen
- API `/api/briefing`: status 200, oikea rakenne

**Jos E2E-testi on vihreä, manuaalista LomaSihteeri-smokea ei tarvita.**

---

## 3. API-muutosten minimitestit

Kun API-endpointteja muutetaan:

```bash
# Tarkista että endpoint vastaa
curl -s http://localhost:5173/api/briefing | jq .ok

# Odotettu tulos: true (tai false jos API-avain puuttuu)
```

### API-checklist

| Endpoint | Tarkistus |
|----------|-----------|
| `/api/briefing` | Palauttaa `ok`, `weather`, `alerts`, `events` |
| `/api/weather` | Palauttaa `ok`, `summary` |
| `/api/alerts` | Palauttaa `ok`, `items[]` |
| `/api/events` | Palauttaa `ok`, `items[]` |

### Fallback-testaus

```bash
# Ilman API-avainta: fallback-data palautuu
unset AEMET_API_KEY
npm run dev
# Tarkista: sää näyttää fallback-tekstin
```

---

## 4. Definition of Done – testaus (Phase Gate)

**Vaihetta ei kuitata PASS, ellei seuraavat ehdot täyty:**

### Pakolliset

- [ ] `npm run check` – 0 errors
- [ ] `npm run build` – success
- [ ] Smoke-test suoritettu (yleinen TAI E2E)

### Jos kyseessä LomaSihteeri-muutos

- [ ] `npm run test:e2e` – PASS (korvaa manuaalisen smoke-testin)
- [ ] API-vastaukset tarkistettu (jos API-muutos)

### Loppuraportissa ilmoitettava

```
TESTIT:
- npm run check: PASS/FAIL
- npm run build: PASS/FAIL
- npm run test:e2e: PASS/FAIL (tai manuaalinen smoke)
- [lisätestit tarvittaessa]
```

---

## 5. Testausperiaatteet

1. **Testit ennen committia** – ei committeja, jotka rikkovat buildin
2. **Fallback toimii** – API-virheet eivät kaada sovellusta
3. **Mobiili ensin** – testaa pienellä näytöllä
4. **Suomenkielisyys** – tarkista että tekstit ovat oikein

---

## Yhteenveto

Testaus on pakollinen osa jokaista vaihetta.
Ilman läpäistyjä testejä ei ole PASS-kuittausta.
