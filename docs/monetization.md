# Monetisointi

Strategia perustuu kahteen pääpilariin: affiliate-markkinointiin ja omien premium-tuotteiden myyntiin.

---

## 1. Affiliate-markkinointi

Kumppanuuslinkkien kautta saatavat komissiot. Fokus on lomailijalle relevantteissa palveluissa.

### Aktivoitavat kategoriat (Phase 3)

| Kategoria | Kumppanit | Prioriteetti |
|-----------|-----------|--------------|
| Hotellit & majoitus | Booking.com, Hotels.com | Korkea |
| Retket & elämykset | GetYourGuide, Viator | Korkea |
| Lentokenttäkuljetukset | Kiwirides, Welcome Pickups | Keskitaso |
| Autonvuokraus | Rentalcars, Discover Cars | Keskitaso |
| Matkavakuutukset | Eurooppalainen, World Nomads | Matala |

### Missä linkkejä käytetään

| Sijainti | Linkitystyyppi | Esimerkki |
|----------|----------------|-----------|
| **Liikkuminen-sivu** | Kuljetuspalvelut | "Varaa lentokenttäkuljetus etukäteen" |
| **Missä asua -sivu** | Majoitushaku | "Hae hotelleja Fuengirolasta" |
| **Päiväretket-sivu** | Retket ja aktiviteetit | "Katso retket Málagaan" |
| **Nähtävyydet-sivu** | Lippuvaraukset | "Varaa liput Bioparciin" |
| **FAQ-sivu** | Vakuutukset | "Vertaa matkavakuutuksia" |

### Periaatteet

1. **Sisältö ensin** – Affiliate-linkki ei koskaan korvaa aitoa suositusta
2. **Relevanssi** – Linkki vain jos palvelu oikeasti hyödyttää lukijaa
3. **Ei aggressiivisuutta** – Ei pop-uppeja, ei pakotettuja klikkauksia
4. **Läpinäkyvyys** – Kumppanuuslinkki merkitään selkeästi (esim. "mainosyhteistyö")
5. **Turistifokus** – Vain 1–14 vrk lomailijalle relevantteja palveluita (ks. content_scope.md)

### Kielletyt käytännöt

- Linkkien piilottaminen tekstin sekaan ilman merkintää
- Harhaanjohtavat CTA:t ("Pakollinen varaus")
- Useita affiliate-bannereita samalla sivulla
- Palvelut, jotka eivät liity lomailuun

---

## 2. Premium PDF-oppaat (Ydintuote)

Myydään ladattavia, offline-toimivia PDF-oppaita per kaupunki.

- **Hinta:** 9,90 € per opas
- **Konversio-oletus:** 0,3–0,8 % sivuston kävijöistä ostaa oppaan
- **Myyntivaltti:** Helppous, offline-saatavuus, kuratoitu sisältö, checklistat ja suorat karttalinkit

---

## 3. Myyntimalli (Phase 3.5)

### Ensimmäinen tuote

| Kenttä | Arvo |
|--------|------|
| Tuote | Fuengirola PDF-opas |
| Hinta | 9,90 € |
| Muoto | PDF (A4, tulostettava) |
| Toimitus | Välitön lataus maksun jälkeen |

### Maksunvälittäjä

**Valinta: Stripe**

| Kriteeri | Stripe |
|----------|--------|
| Käyttöönotto | Nopea, ei erillisiä sopimuksia |
| Provisio | ~2,9 % + 0,25 € / transaktio |
| Valuutta | EUR natiivisti |
| PDF-toimitus | Integroitavissa Checkout Sessioniin |
| Käyttäjätilit | Ei tarvita (guest checkout) |

Vaihtoehto: Lemon Squeezy (all-in-one, hoitaa myös ALV:n)

### Ostovirta (käyttäjän näkökulmasta)

```
1. Käyttäjä klikkaa "Osta opas" (myyntisivu)
2. → Stripe Checkout (hosted page)
3. → Maksun vahvistus
4. → Kiitos-sivu + latauslinkki
5. → Sähköpostivahvistus + linkki (varmuuskopio)
```

### Toimitusmalli

| Vaihe | Toteutus |
|-------|----------|
| PDF-tiedosto | Staattinen, versionhallittu |
| Latauslinkki | Stripe Checkout success_url + token |
| Varmuuskopio | Sähköpostiin (Stripe/Resend) |
| Linkin voimassaolo | 7 päivää / 5 latausta |

### Tekninen toteutus (korkean tason)

```
/api/checkout      → Luo Stripe Checkout Session
/api/webhook       → Vastaanota Stripe events
/kiitos            → Näytä latauslinkki (token-validointi)
/lataa/[token]     → Toimita PDF (kertakäyttöinen/rajoitettu)
```

### Mitä EI tehdä (Phase 3.5)

- Ei käyttäjätilejä tai kirjautumista
- Ei subscription-mallia
- Ei ostoskorin tai bundle-myynnin toteutusta
- Ei useita tuotteita (vain Fuengirola)
- Ei ALV-käsittelyä itse (käytetään Stripea tai LemonSqueezyä)
- Ei manuaalista laskutusta
- Ei palautuskäsittelyä automatisoituna (case-by-case)

---

## Phase 3 -aikataulu

| Vaihe | Toimenpide | Tila |
|-------|------------|------|
| 3.1 | Affiliate-strategia dokumentoitu | DONE |
| 3.2 | Affiliate-linkit sivuille | DONE |
| 3.3 | PDF-sisältö viimeistelty | DONE |
| 3.4 | PDF-teaser kaupunkisivulle | DONE |
| 3.5 | Myyntimalli lukittu | DONE |
| 3.6 | Stripe-integraatio | TODO |
| 3.7 | Myyntisivu + checkout | TODO |
| 3.8 | Lanseeraus | TODO |
