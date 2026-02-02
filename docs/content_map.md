# Sisältökartta – Fuengirola (PDF → sivut)

## Periaatteet

- **PDF on single source of truth.** Kaikki sisältö johdetaan PDF-dokumentista.
- **Sivut ovat näkymiä PDF:stä.** Sivusto pilkkoo ja esittää PDF:n sisällön navigoitavassa muodossa.
- **Alasivut vain tarpeeseen.** Alasivu luodaan, kun sisältö palvelee selkeää käyttäjäintentiota (esim. "missä asua").
- **Kaupunkisivu on aloitussivu.** Se kokoaa yleiskuvan ja linkit alasivuihin.
- **Ei duplikaatiota.** Sama tieto ei toistu usealla sivulla – linkitetään.
- **Scope pysyy.** Vain turistia palveleva sisältö (1–14 vrk).

---

## Reittikartta

### /espanja

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja` |
| **Tavoite** | Espanjan yleiskatsaus lomakohteena suomalaiselle turistille. |
| **Lähdeosio(t)** | Ei suoraan PDF:stä; kootaan kaupunkisivujen pohjalta. |
| **Sisältöblokit** | - Miksi Espanja lomakohteena<br>- Costa del Sol lyhyesti<br>- Kaupunkikortti: Fuengirola<br>- Kaupunkikortti: Málaga (tulossa) |
| **CTA / jatkolinkit** | → /espanja/fuengirola |

---

### /espanja/fuengirola

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola` |
| **Tavoite** | Kokonaiskuva Fuengirolasta ja nopea navigaatio alasivuihin. |
| **Lähdeosio(t)** | `### 1️⃣ Tervetuloa Fuengirolaan`, `### 2️⃣ Pikaopas` |
| **Sisältöblokit** | - Hero: "Helppo lomakohde suomalaiselle"<br>- Kenelle sopii / ei sovi<br>- Pikaoppaan highlight (saapuminen, alueet, vinkit)<br>- Alasivulinkit (kortit)<br>- Lomailijan arki (ruokakaupat, apteekit)<br>- Hyödylliset sovellukset |
| **CTA / jatkolinkit** | → liikkuminen, missa-asua, rannat, ravintolat, nahtavyydet, paivaretket, faq |

**Huom:** Osiot `### 🔟 Lomailijan arki` ja `### 1️⃣1️⃣ Hyödylliset sovellukset` jäävät kaupunkisivulle, koska ne ovat lyhyitä eivätkä ansaitse omaa alasivua.

---

### /espanja/fuengirola/liikkuminen

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/liikkuminen` |
| **Tavoite** | Kertoa turistille, miten liikkua lentokentältä ja lomalla. |
| **Lähdeosio(t)** | `### 3️⃣ Saapuminen Fuengirolaan`, `### 4️⃣ Liikkuminen lomalla` |
| **Sisältöblokit** | - Lentokentältä kaupunkiin (juna, bussi, taksi)<br>- Juna: paras vaihtoehto<br>- Kävely keskustassa<br>- Junayhteydet lähikaupunkeihin<br>- Bussit<br>- Taksit & Uber<br>- Auto: milloin tarpeellinen |
| **CTA / jatkolinkit** | → paivaretket (sisämaan retket), → kaupunkisivu |

---

### /espanja/fuengirola/missa-asua

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/missa-asua` |
| **Tavoite** | Auttaa turistia valitsemaan oikea alue majoittumiseen. |
| **Lähdeosio(t)** | `### 5️⃣ Missä asua Fuengirolassa` |
| **Sisältöblokit** | - Keskusta: ensikertalaisille<br>- Los Boliches: perheille<br>- Torreblanca: budjettimatkailijalle<br>- Carvajal: rauhaa hakeville<br>- Vertailutaulukko (plussat/miinukset) |
| **CTA / jatkolinkit** | → rannat (alueen rannat), → kaupunkisivu |

---

### /espanja/fuengirola/rannat

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/rannat` |
| **Tavoite** | Esitellä Fuengirolan rannat ja auttaa valitsemaan. |
| **Lähdeosio(t)** | `### 6️⃣ Rannat` |
| **Sisältöblokit** | - Los Bolichesin ranta (lapsiystävällinen)<br>- Carvajalin ranta (rauhallinen)<br>- Keskustan ranta (vilkas)<br>- Hintataso (aurinkotuolit)<br>- Kartta tai aluekuvaus |
| **CTA / jatkolinkit** | → missa-asua, → kaupunkisivu |

---

### /espanja/fuengirola/ravintolat

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/ravintolat` |
| **Tavoite** | Antaa turistille käytännön vinkit syömiseen. |
| **Lähdeosio(t)** | `### 7️⃣ Ravintolat & kahvilat` |
| **Sisältöblokit** | - Hintataso (lounas, illallinen, kahvi)<br>- Ruokailurytmi Espanjassa<br>- Tippikäytännöt<br>- Miten tunnistaa hyvä paikka<br>- Varausvinkit viikonlopuille |
| **CTA / jatkolinkit** | → kaupunkisivu |

---

### /espanja/fuengirola/nahtavyydet

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/nahtavyydet` |
| **Tavoite** | Esitellä mitä Fuengirolassa voi tehdä ja nähdä. |
| **Lähdeosio(t)** | `### 8️⃣ Nähtävyydet & tekeminen` |
| **Sisältöblokit** | - Sohailin linna<br>- Rantapromenadi<br>- Markkinat<br>- Minigolf ja vesipuistot<br>- Lasten kanssa (rannat, puistot, vesipuisto) |
| **CTA / jatkolinkit** | → paivaretket, → rannat, → kaupunkisivu |

---

### /espanja/fuengirola/paivaretket

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/paivaretket` |
| **Tavoite** | Listata päiväretkikohteet Fuengirolasta. |
| **Lähdeosio(t)** | `### 9️⃣ Päiväretket` |
| **Sisältöblokit** | - Málaga (juna, ~45 min)<br>- Mijas Pueblo (valkoinen kylä)<br>- Ronda (rotko, autolla/junalla)<br>- Kulkuvälineet kohteittain |
| **CTA / jatkolinkit** | → liikkuminen (kulkuyhteydet), → kaupunkisivu |

---

### /espanja/fuengirola/faq

| Kenttä | Arvo |
|--------|------|
| **URL** | `/espanja/fuengirola/faq` |
| **Tavoite** | Vastata yleisimpiin turistin kysymyksiin. |
| **Lähdeosio(t)** | `### 1️⃣2️⃣ Usein kysytyt kysymykset`, `### 1️⃣3️⃣ Checklista ennen matkaa` |
| **Sisältöblokit** | - Onko turvallista?<br>- Pärjääkö englannilla?<br>- Kortti vai käteinen?<br>- Checklista ennen lähtöä<br>- Checklista perillä |
| **CTA / jatkolinkit** | → kaupunkisivu, → liikkuminen |

---

## PDF-osioiden sijoittuminen

| PDF-osio | Reitti |
|----------|--------|
| 1️⃣ Tervetuloa Fuengirolaan | /espanja/fuengirola |
| 2️⃣ Pikaopas | /espanja/fuengirola |
| 3️⃣ Saapuminen Fuengirolaan | /espanja/fuengirola/liikkuminen |
| 4️⃣ Liikkuminen lomalla | /espanja/fuengirola/liikkuminen |
| 5️⃣ Missä asua Fuengirolassa | /espanja/fuengirola/missa-asua |
| 6️⃣ Rannat | /espanja/fuengirola/rannat |
| 7️⃣ Ravintolat & kahvilat | /espanja/fuengirola/ravintolat |
| 8️⃣ Nähtävyydet & tekeminen | /espanja/fuengirola/nahtavyydet |
| 9️⃣ Päiväretket | /espanja/fuengirola/paivaretket |
| 🔟 Lomailijan arki | /espanja/fuengirola |
| 1️⃣1️⃣ Hyödylliset sovellukset | /espanja/fuengirola |
| 1️⃣2️⃣ Usein kysytyt kysymykset | /espanja/fuengirola/faq |
| 1️⃣3️⃣ Checklista ennen matkaa | /espanja/fuengirola/faq |

---

## Sisäinen linkitys

### Kaupunkisivulta (/espanja/fuengirola)
- Linkit kaikkiin alasivuihin (kortteina tai listana)
- Pikaoppaan kohdat linkittävät vastaaviin alasivuihin

### Alasivuilta
- Aina linkki takaisin kaupunkisivulle
- Kontekstuaaliset linkit lähialasivuille:
  - liikkuminen → paivaretket
  - missa-asua → rannat
  - rannat → missa-asua
  - nahtavyydet → paivaretket, rannat
  - paivaretket → liikkuminen
  - faq → liikkuminen

### Maasivulta (/espanja)
- Kortti-linkki kaupunkisivulle

---

## Mitä EI tehdä vielä (Phase 1.1)

- Ei myyntisivua PDF:lle
- Ei checkout-toiminnallisuutta
- Ei mobiilisovellusta
- Ei käyttäjätilejä tai kirjautumista
- Ei kommentteja tai käyttäjäsisältöä
- Ei hakutoimintoa
- Ei monikielisyyttä

Nämä ovat mahdollisia myöhemmissä vaiheissa (ks. roadmap.md).
