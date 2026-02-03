# LomaSihteeri UI Sijoittuminen

Tämä dokumentti kuvaa, miten ja missä LomaSihteeri-palveluun liittyminen (onboarding) tapahtuu Lomaopas.fi-sivustolla.

## Sijoittuminen Kaupunkisivulla

LomaSihteeri on vahvasti läsnä kaupunkikohtaisilla sivuilla (esim. `/espanja/fuengirola`), koska palvelu on sidottu matkakohteeseen.

### 1. Hero-nosto

- **Sijainti:** Heti kaupunkisivun pääkuvan ja otsikon alapuolella, ennen leipätekstin alkua.
- **Elementti:** Visuaalisesti erottuva laatikko tai banneri.
- **Viesti:** Lyhyt, iskevä arvolupaus. Esim. "Ota kaikki irti Fuengirolan-lomastasi. Tilaa ilmainen LomaSihteeri."
- **Toiminto:** CTA-nappi ("Tilaa tästä" tai "Lue lisää"), joka avaa onboarding-prosessin.

### 2. Pikaopas-integraatio

- **Sijainti:** Kaupunkisivun oikean tai vasemman reunan "Pikaopas"-palkissa.
- **Elementti:** Oma osio Pikaopas-listauksessa muiden linkkien (esim. Rannat, Nähtävyydet) joukossa.
- **Viesti:** "LomaSihteeri" tai "Henkilökohtainen opas".
- **Toiminto:** Linkki, joka avaa onboarding-prosessin.

### 3. Mikro-CTA Alasivuilla

- **Sijainti:** Relevanteilla alasivuilla (esim. `/fuengirola/rannat`, `/fuengirola/ravintolat`) leipätekstin lomassa tai lopussa.
- **Elementti:** Huomiota herättävä tekstikappale tai pieni laatikko.
- **Viesti:** Kontekstisidonnainen viesti. Esim. ravintolasivulla: "Haluatko lisää ravintolavinkkejä suoraan sähköpostiisi lomasi aikana? Kokeile ilmaista LomaSihteeriä."
- **Toiminto:** Linkki, joka avaa onboarding-prosessin.

## Onboarding (2 vaihetta)

Kun käyttäjä klikkaa mitä tahansa yllä mainituista CTA-elementeistä, käynnistyy yksinkertainen, kaksivaiheinen prosessi. Tämä voidaan toteuttaa modaali-ikkunalla tai omalla, yksinkertaisella sivulla.

### Vaihe 1: Loman Tiedot

- **Otsikko:** "Kerro matkastasi"
- **Kysymykset:**
    1.  **Matkakohde:** Esitäytettynä, jos käyttäjä tuli kaupunkisivulta. Muuten alasvetovalikko.
    2.  **Saapumispäivä:** Päivämäärävalitsin.
    3.  **Lähtöpäivä:** Päivämäärävalitsin.
- **Nappi:** "Seuraava"

### Vaihe 2: Personointi ja Tilaus

- **Otsikko:** "Valitse kiinnostuksen kohteesi"
- **Kysymykset:**
    1.  **Kiinnostuksen kohteet:** Checkbox-lista (Golf, Urheilu, Ruoka, Kulttuuri, Perhe).
    2.  **Sähköposti:** Kenttä sähköpostiosoitteelle.
- **Hyväksyntä:** Checkbox GDPR-ehtojen hyväksymiseen ("Hyväksyn, että Lomaopas.fi lähettää minulle matkaani koskevia viestejä. Voit peruuttaa tilauksen milloin tahansa.").
- **Nappi:** "Tilaa LomaSihteeri"

Tämän jälkeen käyttäjälle näytetään vahvistussivu/viesti ja hän saa ensimmäisen ennakkoviestin sähköpostiinsa.

## Mitä ei tehdä

- **Ei popup-ikkunoita:** Emme keskeytä käyttäjän selailua automaattisesti ilmestyvillä ponnahdusikkunoilla. Liittyminen on aina käyttäjän omasta toiminnasta kiinni.
- **Ei omaa päävalikon kohtaa:** LomaSihteeri ei saa omaa linkkiä sivuston päänavigaatioon MVP-vaiheessa, koska se on kontekstisidonnainen lisäpalvelu, ei itsenäinen osio.
