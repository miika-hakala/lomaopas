# Kuvakäytäntö — Design MVP

## Periaatteet

- 1 hero-kuva per opas (hub tai spoke)
- Ei gallerioita MVP:ssä
- Kuvat eivät ole pakollisia — oppaat toimivat ilman kuvia
- Hero-komponentti tukee valinnaista `image`-propia

## Hero-kuvien spesifikaatio

- Kuvasuhde: 16:9
- Minimiresoluutio: 1200 x 675 px
- Formaatti: WebP (ensisijainen), JPEG (vaihtoehto)
- Tiedostonimi: `{slug}.webp` (esim. `fuengirola.webp`)
- Sijainti: `static/images/heroes/`

## Käyttö komponentissa

Hero-komponentti tukee valinnaista kuvaa:

```svelte
<Hero
  title="Fuengirola"
  subtitle="Matkaopas Costa del Solilla"
  variant="spoke"
  image="/images/heroes/fuengirola.webp"
  imageAlt="Fuengirolan ranta ja rantabulevardi"
/>
```

Jos `image`-propia ei anneta, hero näyttää vain otsikon ja subtitlen.

## Kuvalähteet

- Omat valokuvat (ensisijainen)
- Unsplash (CC0, mainitse lähde)
- Pixabay (CC0)

## Tulevaisuus (post-MVP)

- Sisältökuvat (1 kuva / 1–2 osiota)
- Kuvakomponentti captionilla
- Lazy loading + srcset
- Image optimization pipeline
