# New-city: multi-region-tuki (suunnitelma)

Tämä dokumentti kuvaa suunnitelman `new-city`-automaation laajentamiseksi tukemaan useita maita/alueita. Tavoite on säilyttää nykyinen taaksepäin yhteensopivuus ja noudattaa URL-taksonomiaa: `/maa/kaupunki` tai `/alue/kaupunki`.

## Käyttöesimerkit

```bash
# Espanja (oletus)
npm run new-city -- malaga "Málaga"

# Espanja eksplisiittisesti
npm run new-city -- malaga "Málaga" --region espanja

# Kanariansaaret
npm run new-city -- gran-canaria "Gran Canaria" --region kanariansaaret

# Kreikka
npm run new-city -- kreeta "Kreeta" --region kreikka
```

## Parametrit ja oletusarvot

- `city_slug` (pakollinen): kaupungin slug, esim. `malaga`
- `city_name` (valinnainen): kaupungin nimi, esim. `Málaga`
- `--region <slug>` (valinnainen): alue/maa, oletus `espanja`

Oletusarvo säilyttää nykyisen toiminnallisuuden ilman parametriä.

## Region-mapping (slug → hub-sivu)

Automaation on pääteltävä hub-sivu `src/routes/<region>/+page.svelte`:

- `espanja` → `src/routes/espanja/+page.svelte`
- `kanariansaaret` → `src/routes/kanariansaaret/+page.svelte`
- `kreikka` → `src/routes/kreikka/+page.svelte`

**Huom:** Taksonomia määrittää ylätason maiksi/alueiksi esim. `espanja`, `kreikka`, `italia`. Uudet alueet lisätään vain, jos taxonomiaan on lisätty vastaava ylätaso.

## Template-logiikka

- Mallina käytetään edelleen Fuengirolaa (`src/routes/espanja/fuengirola`).
- Template toimii yleisenä rakenteena (hub + alasivut + lomasihteeri), mutta **region** ohjaa kohdepolkua:
  - `src/routes/<region>/<city_slug>/...`
- PDF-stub luodaan aina `docs/pdf/<city_slug>_pdf.md` (ei region-kohtaista polkua).

## Hub-kortin lisääminen

Kortti lisätään regionin hub-sivulle:
- `src/routes/<region>/+page.svelte`
- Vaatimus: hub-sivulla on insertion point (esim. `<!-- NEW_CITY_CARD_INSERTION_POINT -->`).
- Jos insertion point puuttuu, logataan varoitus ja jatketaan.

## Rajoitukset ja tulevat kehityskohteet

- **Region-hubit:** Oletetaan, että `src/routes/<region>/+page.svelte` on olemassa. Puuttuessa ei luoda uutta automaattisesti.
- **Template-polku:** Template on espanja/fuengirola — sisältö on espanjapainotteinen, joten tarvitaan myöhemmin region-kohtaiset templatet.
- **Affiliate-logiikka:** nykyinen affiliate-avaimet ovat city-slug-pohjaisia. Regionin vaikutus affiliate-URL:iin tulee tarkentaa myöhemmin.
- **Sisältö-tekstien lokalisaatio:** kieli on suomi, mutta sisältöviitteet voivat olla Espanja-keskeisiä. Tarvitaan tulevaisuudessa neutralisointi tai region-variantit.

---

## Toteutuksen TODO (koodimuutokset)

### new-city.ts
- [ ] Lisää `--region <slug>` parametri ja oletus `espanja`.
- [ ] Käytä `baseDestPath = src/routes/<region>/<city_slug>`.
- [ ] Muuta `ensureEspanjaCard` → yleinen `ensureRegionCard(region, city_slug, city_name)`.
- [ ] Hub-polku: `src/routes/<region>/+page.svelte`.
- [ ] Päivitä kortin linkki muotoon `/<region>/<city_slug>`.
- [ ] Päivitä lomasihteeri-linkkien korvaus polkuun `/<region>/<city_slug>/lomasihteeri`.

### Hub-sivut
- [ ] Varmista, että `src/routes/<region>/+page.svelte` on olemassa.
- [ ] Lisää `<!-- NEW_CITY_CARD_INSERTION_POINT -->` kaikkiin region-hubeihin.

### Affiliate-logiikka
- [ ] Päätä, onko affiliate-linkkien avaimet edelleen pelkkiä city-slug-arvoja.
- [ ] Jos region vaikuttaa, lisää `region`-prefiksi tai erillinen mapping.

---

## Muutosarvio

**Keskisuuri muutos.**
- Parametri- ja polkumuutokset ovat selkeitä.
- Riskit liittyvät template-tekstien region-sidonnaisuuteen ja hub-sivujen saatavuuteen.
