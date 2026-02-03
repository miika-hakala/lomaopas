# LomaSihteeri Riskienhallinta

Tämä dokumentti tunnistaa LomaSihteeri-projektiin liittyvät keskeiset riskit ja esittää keinot niiden hallintaan.

## Tekninen Riski

- **Riski:** Sähköpostien toimitettavuusongelmat (spam-suodattimet, mustat listat). Jos viestit eivät mene perille, palvelu on hyödytön.
- **Hallintakeino:**
    - Käytetään tunnettua ja luotettavaa transaktiosähköpostipalvelua (esim. Postmark, SendGrid).
    - Noudatetaan sähköpostimarkkinoinnin parhaita käytäntöjä (SPF, DKIM, DMARC).
    - Tarjotaan selkeä ja helppo peruutuslinkki jokaisessa viestissä.
    - Seurataan aktiivisesti toimitettavuutta ja avausprosentteja.

## Data & Lähteet

- **Riski:** Sisältö perustuu vanhentuneeseen tai virheelliseen tietoon. Esim. sääennuste on väärä tai suositeltu ravintola on lopettanut.
- **Hallintakeino:**
    - Käytetään luotettavia ja vakiintuneita API-rajapintoja (esim. säädataan).
    - Keskitytään ajattomaan sisältöön nopeasti vanhenevan tiedon sijaan.
    - Suositaan linkittämistä Lomaopas.fi:n olemassa olevaan, ylläpidettyyn sisältöön.
    - Lisätään viesteihin pieni vastuuvapauslauseke ("Tiedot on kerätty parhaista lähteistä, mutta tarkista aina ajantasaiset tiedot, kuten aukioloajat, paikan päällä.").

## GDPR & Yksityisyys

- **Riski:** Käyttäjien henkilötietoja (sähköposti, matkapäivät) käsitellään virheellisesti tai tietosuojaseloste on puutteellinen.
- **Hallintakeino:**
    - Kerätään vain minimimäärä dataa (sähköposti, matkakohde, päivämäärät, kiinnostuksen kohteet).
    - Onboarding-prosessissa pyydetään selkeä suostumus tietojen käyttöön.
    - Tietosuojaseloste päivitetään kattamaan LomaSihteeri-palvelun.
    - Varmistetaan, että käyttäjä voi helposti peruuttaa tilauksen ja pyytää tietojensa poistamista.
    - Data tallennetaan turvallisesti EU-alueella.

## Käyttäjäkokemus

- **Riski:** Käyttäjä kokee viestit ärsyttävinä, turhina tai "spämminä".
- **Hallintakeino:**
    - Tiukka sisältöstrategia: vain relevanttia ja hyödyllistä sisältöä.
    - Lähetystiheys pidetään maltillisena (1 viesti/päivä).
    - Personointi varmistaa, että sisältö vastaa käyttäjän odotuksia.
    - Helppo ja näkyvä tilauksen peruutusmahdollisuus.

## Liiketoimintariski

- **Riski:** Palvelu ei saavuta riittävää käyttäjämäärää tai sitoutumista, jolloin sen ylläpito ja kehitys ei ole kannattavaa.
- **Hallintakeino:**
    - Vahva integrointi Lomaopas.fi-sivustoon varmistaa näkyvyyden.
    - Ilmainen MVP madaltaa kokeilukynnystä ja maksimoi käyttäjähankinnan.
    - Onnistumisen mittareita (avaus-%, CTR, palaute) seurataan tarkasti alusta alkaen.
    - Jos mittarit eivät osoita onnistumista, projekti voidaan "tappaa" nopeasti ennen suurten lisäinvestointien tekemistä.

## Suurin Riski: Scope Creep (Laajentumisvaara)

- **Riski:** Suurin yksittäinen riski on, että MVP-vaiheessa projektiin yritetään lisätä liikaa ominaisuuksia ("olisi kiva, jos..."). Tämä johtaa aikataulun venymiseen, kustannusten nousuun ja alkuperäisen ydinidean hämärtymiseen.
- **Hallintakeino:**
    - **Tiukka rajaus:** Pidetään kiinni `mvp.md`-dokumentissa määritellyistä rajoituksista.
    - **"Ei nyt" -lista:** Kaikki uudet ideat ja ominaisuuspyynnöt kirjataan ylös erilliseen listaan tulevaisuutta varten, mutta niitä ei implementoida MVP-vaiheessa.
    - **Päätösvalta:** Projektin vetäjällä on selkeä valta sanoa "ei" uusille ominaisuuksille, jotka eivät ole MVP:n ytimessä.
    - **Fokus ydinlupauksessa:** Jokaisen potentiaalisen lisäyksen kohdalla kysytään: "Auttaako tämä validoimaan sen, että käyttäjät haluavat päivittäisen lomakirjeen?" Jos vastaus on ei, sitä ei tehdä nyt.
