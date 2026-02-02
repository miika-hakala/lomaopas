# MUOKKAUSOHJEET – Lomaopas.fi

## 1. Tarkoitus

Tämän dokumentin tarkoitus on määrittää, miten Lomaopas.fi-projektin sisältöä,
dokumentaatiota ja rakennetta saa muokata turvallisesti ja hallitusti.

Muokkausohjeet:
- estävät scope-vuodon
- suojaavat jo tehtyjä päätöksiä
- varmistavat yhtenäisen rakenteen
- tekevät muutoksista jäljitettäviä

Tämä dokumentti on **sitova** kaikille agenteille ja työnjohtajalle.

---

## 2. Mitä saa muokata ja mitä ei

### Sallittu sisältö (DO)

- Turistille suunnattu tieto (1–14 vrk lomat)
- Evergreen-sisältö (ei aikaherkkä)
- Liikkuminen, rannat, ravintolat, nähtävyydet
- Päiväretket ja lomailijan arkipalvelut
- Premium-tuotteisiin liittyvä sisältö
- Dokumentaatio, joka selkeyttää projektia

### Kielletty sisältö (DON’T)

- Asumiseen liittyvä sisältö
- Viranomaisasiat (NIE, residencia, verotus)
- Terveydenhuoltojärjestelmät
- Paikallisuutiset ja politiikka
- Pitkäaikainen arki
- Sisältö, joka ei palvele lomaa

Jos sisältö ei selvästi palvele 1–14 vrk lomaa, sitä ei lisätä.

---

## 3. Muutosprosessi

### Prosessin vaiheet (pakollinen järjestys)

1. Muutosehdotus
2. Perustelu (miksi tarvitaan)
3. Vaikutus scopeen (rikooko vai ei)
4. Päätös (hyväksy / hylkää)
5. Dokumenttipäivitys
6. Commit ja push

Yhtään vaihetta ei saa ohittaa.

### Mikä dokumentti päivittyy?

- Vision tai kohderyhmän muutos → `concept.md`
- Sisältörajan muutos → `content_scope.md`
- Rakenne tai URL-logiikka → `taxonomy.md`
- Aikataulu tai vaiheistus → `roadmap.md`
- Ansaitseminen → `monetization.md`
- Premium-tuotteet → `premium_products.md`

---

## 4. Nimeämiskäytännöt

### Tiedostot ja kansiot

- Kaikki nimet pienillä kirjaimilla
- Ei välilyöntejä
- Käytä alaviivaa `_` tarvittaessa

Esimerkki:
docs/muokkausohjeet.md
docs/pdf/fuengirola_pdf.md


### Slug-säännöt

- pienet kirjaimet
- ei ääkkösiä
- ei vuosilukuja
- ei stop-sanoja

### URL-mallit

- `/maa`
- `/maa/kaupunki`
- alasivut vain tarpeeseen

---

## 5. Muokkaustyyppien luokittelu

- **Dokumentaatiomuutos** → `docs:`
- **Sisältömuutos** → `feat:`
- **Rakenteellinen muutos / siivous** → `chore:`
- **Kaupallistaminen** → `feat:`

Luokittelu näkyy commit-viestissä.

---

## 6. PR / commit -käytäntö

### Commit-viesti

- englanniksi
- lyhyt ja kuvaava
- yksi muutos per commit

Esimerkki:
docs: add content editing and change rules


### Ennen pushia tarkista

- `git status` on clean
- ei ylimääräisiä tiedostoja
- nimet oikein (case-sensitive)

### Working tree clean -vaatimus

Push ei ole sallittu, jos working tree ei ole clean.

### Ilman PR:ää

Tässä projektissa:
- pieni tiimi
- yksi työnjohtaja

Suora push `main`-branchiin on sallittu, kun muutos on rajattu ja dokumentoitu.

---

## 7. Agenttityöskentely

### Agentit ja vastuualueet

- **Claude Code**: dokumentaatio, säännöt, sisällöt
- **Codex CLI**: repo, git, rakenne, koodi
- **Gemini**: dokumenttien kokoaminen ja massasisältö

### Tehtävän antaminen

Tehtävä annetaan aina:
- yhdessä kopioitavassa tekstiblokissa
- sisältäen kaiken tarvittavan materiaalin
- ilman viittauksia keskusteluhistoriaan

### Loppuraportin vaatimukset

Agentin on raportoitava vähintään:
- `pwd`
- `ls` tai `tree`
- `git status`
- commit hash

---

## 8. Laatutarkistuslista

Ennen hyväksyntää varmista:

- sisältö ei riko scopea
- nimet pienillä kirjaimilla
- ei ristiriitoja dokumenttien välillä
- linkit ja polut oikein
- kaupallinen logiikka säilyy

### Hylkäysperusteet

- scope-vuoto
- dokumentoimaton muutos
- epäselvä perustelu
- ristiriita aiemman päätöksen kanssa

---

## Yhteenveto

Muokkaus ei ole vapaata luovuutta.  
Muokkaus on hallittua, dokumentoitua ja perusteltua toimintaa.

Näin Lomaopas.fi pysyy selkeänä, hallittuna ja kannattavana.
Tämän jälkeen Codex CLI voi jatkaa suoraan:

git add docs/muokkausohjeet.md
git commit -m "docs: add content editing and change rules"
git push
