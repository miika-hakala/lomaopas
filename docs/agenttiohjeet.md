# AGENTTIOHJEET – Lomaopas.fi

## 1. Tarkoitus

Tämä dokumentti määrittää, miten Lomaopas.fi-projektin agentteja käytetään oikein.

Agenttiohjeet:
- selkeyttävät työnjakoa
- estävät väärän agentin valintaa
- varmistavat yhtenäisen tehtävänannon
- tekevät delegoinnista toistettavaa

Työnjohtaja ei tee tehtäviä itse. Hän delegoi tehtävät oikealle agentille tämän ohjeen mukaisesti.

---

## 2. Yleiset säännöt kaikille agenteille

Nämä säännöt sitovat kaikkia agentteja poikkeuksetta:

- **Dokumentaatio on totuus.** Jos sisältö ja dokumentaatio ovat ristiriidassa, dokumentaatio voittaa.
- **Scope-vuoto on kielletty.** Agentti ei saa laajentaa projektin rajausta.
- **Ei oletuksia.** Agentti toimii vain annetun tiedon pohjalta.
- **Ei ideointia ilman lupaa.** Uusia ominaisuuksia ei ehdoteta, ellei erikseen pyydetä.
- **Kaikki tehtävät tulevat työnjohtajalta.** Agentti ei aloita työtä ilman delegoitua tehtävää.
- **Loppuraportti on pakollinen.** Jokainen tehtävä päättyy raporttiin.

---

## 3. Agenttikohtaiset ohjeet

### Claude Code

**Käyttötarkoitus:**
- dokumentaatio ja säännöt
- ohjeet ja käsikirjat
- sisältötekstit (oppaat, artikkelit)
- PDF-tuotteiden tekstisisällöt

**Ei käytetä:**
- repo-operaatioihin (git, tiedostorakenne)
- koodin kirjoittamiseen
- teknisiin muutoksiin

**Milloin paras valinta:**
- kun tarvitaan uusi dokumentti
- kun olemassa olevaa tekstiä päivitetään
- kun sisältö vaatii suomen kielen hallintaa
- kun tehtävä liittyy sääntöihin tai ohjeisiin

---

### Codex CLI

**Käyttötarkoitus:**
- repo-operaatiot (git add, commit, push)
- tiedostorakenteen muutokset
- kansioiden luonti ja siirto
- koodimuutokset

**Ei käytetä:**
- sisältöjen kirjoittamiseen
- dokumentaation tuottamiseen
- päätöksentekoon

**Vaatimukset varovaisuuteen:**
- ei ylimääräisiä muutoksia
- vain pyydetyt operaatiot
- tarkista `git status` ennen pushia
- raportoi kaikki muutokset

**Git-käytännöt: commit vs push**

Codex CLI tekee commitin tehtävän päätteeksi, mutta **ei pushaa automaattisesti**.
Push tehdään vain, jos tehtävänannossa on erillinen `PUSH:`-osio.

Tämä on tarkoituksellista:
- Työnjohtaja voi tarkistaa commitin ennen julkaisua
- Virheet voidaan korjata ennen kuin ne päätyvät remoteen
- Push-oikeus on eksplisiittinen päätös, ei oletus

**Valmis PUSH-osio tehtävänantoihin:**

Jos työnjohtaja haluaa pushin osaksi tehtävää, hän lisää tehtävänannon loppuun:

```
PUSH:
- git push origin main (tai nykyinen branch)
- vahvista loppuraportissa: "pushed"
```

Jos `PUSH:`-osiota ei ole, agentti raportoi commitin mutta jättää pushin työnjohtajan tehtäväksi.

**Milloin paras valinta:**
- kun tiedosto pitää siirtää tai nimetä uudelleen
- kun tarvitaan commit ja push
- kun rakenteeseen tehdään muutos

---

### Gemini

**Käyttötarkoitus:**
- dokumenttien kokoaminen annetusta materiaalista
- massasisällön tuottaminen
- rakenteiden täyttäminen valmiiseen pohjaan
- useita toistuvia sisältöjä kerralla

**Ei käytetä:**
- päätöksentekoon
- scope-rajauksiin
- sääntöjen tulkintaan
- uusien rakenteiden suunnitteluun

**Lähdeaineiston merkitys:**
Gemini toimii vain annetun materiaalin pohjalta. Työnjohtajan on toimitettava kaikki tarvittava tieto tehtävänannossa. Gemini ei hae tietoa itse eikä tee oletuksia.

**Milloin paras valinta:**
- kun sama rakenne toistetaan useaan kohteeseen
- kun lähdeaineisto on valmis ja rajattu
- kun tehtävä on mekaaninen kokoaminen

---

## 4. Tehtävänannon pakollinen muoto

Jokainen tehtävä annetaan agentille **yhtenä kopioitavana tekstiblokkina**.

### Pakolliset osiot

```
ROOLI: [Agentin nimi ja tehtävätyyppi]

TAVOITE:
[Mitä tehtävässä saavutetaan]

LUKITUT SÄÄNNÖT:
- [Sääntö 1]
- [Sääntö 2]
- ...

KONTEKSTI:
[Taustatiedot, joita agentti tarvitsee]

TEHTÄVÄ:
[Tarkat toimenpiteet]

LOPPURAPORTTI:
[Mitä agentin on raportoitava]
```

### Miksi tätä muotoa ei saa rikkoa

- Agentti ei näe keskusteluhistoriaa
- Agentti toimii vain annetun tiedon varassa
- Epätäydellinen tehtävänanto johtaa virheisiin
- Työnjohtajan on voitava tarkistaa, mitä pyydettiin

Jos tehtävänanto on puutteellinen, työnjohtaja korjaa sen ennen delegointia.

---

## 5. Loppuraporttivaatimus

Jokaisen agentin on raportoitava tehtävän päätteeksi vähintään:

```
pwd
ls (tai tree)
git status
commit hash (jos committeja tehty)
```

### Miksi raportti on tärkeä

- Työnjohtaja näkee, mitä tapahtui
- Virheet havaitaan heti
- Muutokset ovat jäljitettäviä
- Hyväksyntä tai hylkäys perustuu tosiasioihin

Ilman raporttia tehtävää ei katsota suoritetuksi.

---

## 6. Yleiset virheet ja hylkäysperusteet

### Yleisimmät virheet

| Virhe | Seuraus |
|-------|---------|
| Scope-vuoto | Sisältöä lisätty rajauksen ulkopuolelta |
| Omien oletusten tekeminen | Toiminta ilman annettua tietoa |
| Väärän agentin valinta | Tehtävä ei kuulu agentin vastuualueeseen |
| Raportin puuttuminen | Tehtävää ei voida tarkistaa |
| Ylimääräiset muutokset | Muutoksia, joita ei pyydetty |

### Hylkäysperusteet

Työnjohtaja hylkää tehtävän, jos:

- agentti on tehnyt scope-vuodon
- tehtävänannosta on poikettu
- raportti puuttuu tai on puutteellinen
- muutoksia on tehty ilman pyyntöä
- dokumentaatiota on rikottu

Hylkäyksen jälkeen tehtävä palautetaan korjattavaksi tai perutaan.

---

## Yhteenveto

Oikea agentti oikeaan tehtävään.
Täydellinen tehtävänanto, täydellinen raportti.
Näin Lomaopas.fi etenee hallitusti.
