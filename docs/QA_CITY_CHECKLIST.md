# QA Checklist: Uusi kaupunki

Käytä tätä checklistia jokaiselle uudelle kaupungille ennen julkaisua.

## A) Tiedostorakenne

- [ ] Hub-sivu: `src/routes/espanja/{city}/+page.svelte`
- [ ] Liikkuminen: `src/routes/espanja/{city}/liikkuminen/+page.svelte`
- [ ] Missä asua: `src/routes/espanja/{city}/missa-asua/+page.svelte`
- [ ] Rannat: `src/routes/espanja/{city}/rannat/+page.svelte`
- [ ] Ravintolat: `src/routes/espanja/{city}/ravintolat/+page.svelte`
- [ ] Nähtävyydet: `src/routes/espanja/{city}/nahtavyydet/+page.svelte`
- [ ] Päiväretket: `src/routes/espanja/{city}/paivaretket/+page.svelte`
- [ ] FAQ: `src/routes/espanja/{city}/faq/+page.svelte`

## B) SEO Meta

Jokaisella sivulla:

- [ ] `<title>` sisältää kaupungin nimen ja sivun aiheen
- [ ] `<title>` päättyy `| Lomaopas.fi`
- [ ] `<meta name="description">` on 120-160 merkkiä
- [ ] Meta description on uniikki jokaiselle sivulle

**Formaatti:**
```
<title>{Kaupunki} – {Aihe} | Lomaopas.fi</title>
```

## C) Linkitys

### Hub-sivu
- [ ] Linkit kaikkiin 7 alasivuun
- [ ] Linkki takaisin `/espanja`

### Alasivut (jokainen)
- [ ] Kontekstuaalinen linkki edelliseen sivuun (← Edellinen)
- [ ] Kontekstuaalinen linkki seuraavaan sivuun (Seuraava →)
- [ ] Hub-linkki (← Takaisin {Kaupunki})

### Linkitysjärjestys
```
liikkuminen → missa-asua → rannat → ravintolat → nahtavyydet → paivaretket → faq
```

### Cross-city linkit
- [ ] Päiväretket-sivulla linkit naapurikaupunkeihin
- [ ] Naapurikaupunkien päiväretket-sivut päivitetty

## D) Affiliate-linkit

### links.ts päivitys
- [ ] `accommodation.{city}` lisätty
- [ ] `activities.{city}` lisätty (jos relevantti)
- [ ] Kaupunkikohtaiset `tickets.{attraction}` lisätty

### Sivuilla käytössä
- [ ] Hub: `accommodation.{city}`
- [ ] Liikkuminen: `transport.airportTransfer`, `transport.carRental`
- [ ] Missä asua: `accommodation.{city}`
- [ ] Nähtävyydet: relevantit `tickets.*`
- [ ] Päiväretket: relevantit `activities.*`, `transport.carRental`

### Import-tarkistus
```svelte
<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation, activities, tickets, transport } from '$lib/affiliates/links';
</script>
```

## E) Sisältö

- [ ] Ei aikaherkää sisältöä (vuosiluvut, "tänä vuonna" jne.)
- [ ] Hinnat annettu haarukkoina (esim. "10–15 €")
- [ ] Ei tyhjää Lorem ipsum -tekstiä
- [ ] Kaikki hakusanat ovat oikeassa muodossa (`code`-tagissa)
- [ ] Sijamuodot oikein (illatiivi, elatiivi, inessiivi)

## F) Espanja-sivu

- [ ] Uusi kaupunkikortti lisätty `/espanja/+page.svelte`
- [ ] Meta description päivitetty sisältämään uusi kaupunki

## G) Tekniset tarkistukset

```bash
# TypeScript-tarkistus
npm run check

# Build-tarkistus
npm run build

# Linkkien toimivuus (manuaalinen)
npm run dev
# → Tarkista kaikki 8 sivua selaimessa
```

## H) PDF Master

- [ ] PDF stub created by new-city (automaattinen stub on olemassa)
- [ ] PDF-master olemassa: `docs/pdf/{city}_pdf.md`
- [ ] Kaikki 11 osiota mukana
- [ ] Sisältö vastaa verkkosivuja

## I) Git

```bash
# Commitin muoto
git commit -m "feat: add {city} city pages"

# Tai jos vain affiliate-päivitys
git commit -m "feat: add {city} affiliate links"
```

---

## Pikachecklista (lyhyt versio)

```
□ 8 sivua luotu
□ SEO meta kaikilla sivuilla
□ Linkitys toimii (prev/next/hub)
□ Affiliate-avaimet lisätty
□ Cross-city linkit päivitetty
□ /espanja hub päivitetty
□ npm run check OK
□ npm run build OK
```

---

## Virhetilanteet

### "Cannot find module" (affiliate)
→ Tarkista että avain on lisätty `links.ts`-tiedostoon

### Linkki 404
→ Tarkista route-kansion nimi (pitää olla lowercase, ei ääkkösiä)

### Build epäonnistuu
→ Aja `npm run check` ensin, korjaa TypeScript-virheet

### Meta description liian pitkä
→ Pidä 120-160 merkissä, Google katkaisee pidemmät
