# PDF Master → Sivut -mapping

Tämä dokumentti kuvaa, miten PDF-masterin osiot mappautuvat verkkosivuiksi.

## Yleiskuva

```
PDF-osio                    → Verkkosivu
─────────────────────────────────────────────
1. Tervetuloa               → hub (+page.svelte)
2. Saapuminen               → liikkuminen/
3. Liikkuminen              → liikkuminen/
4. Alueet ja majoitus       → missa-asua/ + hub
5. Rannat                   → rannat/
6. Ravintolat ja ruoka      → ravintolat/
7. Nähtävyydet              → nahtavyydet/
8. Päiväretket              → paivaretket/
9. Käytännön asiat          → faq/ (osittain)
10. Hyödylliset sovellukset → faq/ (osittain)
11. FAQ                     → faq/
```

## Yksityiskohtainen mapping

### Hub-sivu (+page.svelte)

**Lähteet:**
- Osio 1: Tervetuloa (intro, kenelle sopii/ei sovi)
- Osio 4: Alueet ja majoitus (tiivistelmä)

**Sisältö:**
- Title + meta description
- Intro-kappale (2-3 lausetta)
- Pikaopas (sijainti, lentokentältä, sopii, paras aika)
- Navigointi (linkit 7 alasivuun)
- Majoitus-affiliate

### liikkuminen/+page.svelte

**Lähteet:**
- Osio 2: Saapuminen (juna, taksi, bussi)
- Osio 3: Liikkuminen (kävely, juna, bussi, taksi, vuokra-auto)

**Affiliates:**
- `transport.airportTransfer`
- `transport.carRental`

### missa-asua/+page.svelte

**Lähteet:**
- Osio 4: Alueet ja majoitus (kaikki alueet)

**Affiliates:**
- `accommodation.{city}`

### rannat/+page.svelte

**Lähteet:**
- Osio 5: Rannat (kaikki rannat + rantavinkit)

**Affiliates:**
- Ei tyypillisesti

### ravintolat/+page.svelte

**Lähteet:**
- Osio 6: Ravintolat ja ruoka (hintataso, ajat, alueet, erikoisuudet)

**Affiliates:**
- Ei tyypillisesti

### nahtavyydet/+page.svelte

**Lähteet:**
- Osio 7: Nähtävyydet ja tekeminen (kaikki kohteet + lasten kanssa)

**Affiliates:**
- `tickets.{attraction}` (jos relevantti)
- `activities.{city}`

### paivaretket/+page.svelte

**Lähteet:**
- Osio 8: Päiväretket (kaikki kohteet + liikkuminen)

**Affiliates:**
- `activities.{destination}` (Ronda, Granada, Mijas, Nerja jne.)
- `transport.carRental`

**TÄRKEÄ:** Muista päivittää muiden kaupunkien päiväretket-sivut cross-linkeillä!

### faq/+page.svelte

**Lähteet:**
- Osio 11: FAQ (kaikki kysymykset)
- Osio 9: Käytännön asiat (checklista-osat)
- Osio 10: Hyödylliset sovellukset (voidaan upottaa)

**Affiliates:**
- Ei tyypillisesti

## Linkitysrakenne

```
Hub
├── liikkuminen    ← → missa-asua
├── missa-asua     ← → rannat
├── rannat         ← → ravintolat
├── ravintolat     ← → nahtavyydet
├── nahtavyydet    ← → paivaretket
├── paivaretket    ← → faq
└── faq            ← hub
```

### Jokaisen sivun linkit

1. **Kontekstuaaliset linkit** (prev/next):
   - `← Edellinen sivu` | `Seuraava sivu →`

2. **Hub-linkki**:
   - `← Takaisin {Kaupunki}`

3. **Sisältölinkit**:
   - Muihin sivuihin relevantin sisällön yhteydessä

### Cross-city linkit

Päiväretket-sivuilla linkitetään naapurikaupunkeihin:

```
Fuengirola  ↔ Málaga, Benalmádena
Málaga      ↔ Fuengirola, Benalmádena
Torremolinos ↔ Benalmádena, Málaga, Fuengirola
Benalmádena ↔ Torremolinos, Málaga, Fuengirola
```

## Sijamuodot (suomen kieli)

| Perusmuoto | Illatiivi (mihin?) | Elatiivi (mistä?) | Inessiivi (missä?) |
|------------|-------------------|-------------------|-------------------|
| Fuengirola | Fuengirolaan | Fuengirolasta | Fuengirolassa |
| Málaga | Málagaan | Málagasta | Málagassa |
| Torremolinos | Torremolinokseen | Torremolinoksesta | Torremolinoksessa |
| Benalmádena | Benalmádenaan | Benalmádenasta | Benalmádenassa |
| Nerja | Nerjaan | Nerjasta | Nerjassa |
| Marbella | Marbellaan | Marbellasta | Marbellassa |
| Ronda | Rondaan | Rondasta | Rondassa |
| Granada | Granadaan | Granadasta | Granadassa |
| Mijas | Mijasiin | Mijasista | Mijasissa |

## Työnkulku: Uusi kaupunki

1. **Luo PDF-master** (`docs/pdf/{city}_pdf.md`)
2. **Kopioi templatet** ja korvaa muuttujat
3. **Luo route-kansio** (`src/routes/espanja/{city}/`)
4. **Lisää affiliate-avaimet** (`src/lib/affiliates/links.ts`)
5. **Päivitä cross-city linkit** (muiden kaupunkien paivaretket)
6. **Päivitä hub** (`/espanja/+page.svelte` - lisää uusi kaupunkikortti)
7. **Aja QA-checklist**
