# Päätösloki – Lomaopas.fi

## Periaatteet
Tämä loki kirjaa Lomaopas.fi-projektin keskeiset, lukitut päätökset aikajärjestyksessä. Sen tarkoitus on ylläpitää projektin visiota ja estää scope-vuotoa.

Päätös on lukittu, kun se on dokumentoitu projektin `docs`-kansiossa ja muutos on commitoitu versionhallintaan. Tämä loki ei korvaa varsinaista dokumentaatiota, vaan kokoaa yhteen siitä johdetut päätökset.

## Päätökset (aikajärjestyksessä, uusin viimeiseksi)

### 2026-02-02 – Projektin konsepti ja sisältörajaus
- **Kuvaus:** Projektin perustavat päätökset. Määriteltiin nimeksi Lomaopas.fi, kohderyhmäksi 1–14 vrk suomalaisturistit ja ydinfokukseksi tarjota kaikki oleellinen tieto suomeksi. Samalla tehtiin selkeä rajaus, että projekti ei palvele maahanmuuttajia tai asukkaita.
- **Vaikutus:** Lukitsee projektin ytimen ja kohderyhmän, mikä ohjaa kaikkea sisällöntuotantoa. Estää sekoittumisen asukasprojekteihin.
- **Lähde:** `docs/concept.md`, `docs/content_scope.md`
- **Commit:** `0e78066 docs: initial Lomaopas.fi documentation`

### 2026-02-02 – Tekninen ja sisällöllinen rakenne
- **Kuvaus:** Sivuston taksonomia ja URL-rakenne määriteltiin muotoon `/maa/kaupunki`. Lisäksi päätettiin slug-säännöistä (pienet kirjaimet, ei ääkkösiä) ja siitä, että tiedosto- ja kansionimet pidetään aina pienillä kirjaimilla.
- **Vaikutus:** Luo selkeän ja johdonmukaisen rakenteen sivustolle ja repositorioon. Varmistaa, että URL-osoitteet ovat siistejä ja pysyviä.
- **Lähde:** `docs/taxonomy.md`, projektin tiedostorakenne
- **Commit:** `0e78066 docs: initial Lomaopas.fi documentation`

### 2026-02-02 – Roadmap ja vaiheistus
- **Kuvaus:** Projektin elinkaari jaettiin neljään vaiheeseen (Phase 0–4), alkaen MVP-julkaisusta (Espanja + 1–2 kaupunkia) ja edeten skaalaukseen, monetisointiin ja mahdolliseen sovellukseen.
- **Vaikutus:** Antaa selkeän suunnan projektin kehitykselle ja auttaa priorisoimaan tehtäviä. MVP-fokus mahdollistaa nopean aloituksen.
- **Lähde:** `docs/roadmap.md`
- **Commit:** `0e78066 docs: initial Lomaopas.fi documentation`

### 2026-02-02 – Monetisointimalli
- **Kuvaus:** Kaupallistaminen päätettiin perustaa kahteen pilariin: affiliate-markkinointiin ja omien premium PDF-oppaiden myyntiin. PDF-oppaan hinnaksi asetettiin 9,90 € ja konversio-oletukseksi 0,3–0,8 %.
- **Vaikutus:** Määrittää, miten projekti tuottaa tuloja. Ohjaa premium-sisällön kehitystä ja affiliate-kumppanuuksien valintaa.
- **Lähde:** `docs/monetization.md`, `docs/premium_products.md`
- **Commit:** `0e78066 docs: initial Lomaopas.fi documentation`

### 2026-02-02 – Ensimmäinen Premium-tuote: Fuengirola PDF
- **Kuvaus:** Ensimmäiseksi premium-tuotteeksi luotiin sisältöpohja Fuengirolan PDF-oppaalle. Tämä toimii mallina tuleville kaupunkioppaille.
- **Vaikutus:** Konkretisoi premium-tuotteen idean ja luo valmiin rungon sisällöntuotannolle.
- **Lähde:** `docs/pdf/fuengirola_pdf.md`
- **Commit:** `0e78066 docs: initial Lomaopas.fi documentation`

### 2026-02-02 – Työnjohtajarooli ja agenttimalli
- **Kuvaus:** Määriteltiin "Työnjohtaja"-rooli, joka vastaa projektin vision noudattamisesta, mutta ei itse tee tehtäviä. Työ delegoidaan erikoistuneille agenteille (Claude Code, Codex CLI, Gemini).
- **Vaikutus:** Lukitsee projektin johtamis- ja toteutusmallin. Varmistaa, että päätökset ja toteutus pysyvät erillään ja että työtä tehdään hallitusti.
- **Lähde:** `docs/tyonjohtaja.md`
- **Commit:** `39f4aae docs: add tyonjohtaja role and delegation rules`

### tuntematon – Muokkausohjeet lukittu
- **Kuvaus:** Dokumentoitiin säännöt sisällön muokkaamiselle, uusien dokumenttien luomiselle ja muutosten hallinnalle. Ohjeistus korostaa dokumentaation seuraamista ja hallittuja, perusteltuja muutoksia.
- **Vaikutus:** Yhtenäistää tavan, jolla projektin sisältöä ja dokumentaatiota muokataan. Varmistaa, että muutokset ovat jäljitettävissä ja noudattavat projektin periaatteita.
- **Lähde:** `docs/muokkausohjeet.md`
- **Commit:** `f1d880f docs: add content editing and change rules`

### tuntematon – Agenttien käyttöohjeet lukittu
- **Kuvaus:** Laadittiin tarkemmat käyttö- ja delegointisäännöt projektissa käytettäville agenteille (Claude, Codex, Gemini). Ohjeistaa, mikä agentti sopii mihinkin tehtävään ja miten tehtävänanto tulee muotoilla.
- **Vaikutus:** Selkeyttää työnjakoa agenttien välillä ja tehostaa delegointia. Varmistaa, että Työnjohtaja osaa valita oikean työkalun kuhunkin tehtävään.
- **Lähde:** `docs/agenttiohjeet.md`
- **Commit:** `0ba32ca docs: add agent usage and delegation rules`

### 2026-02-02 – Hybridimalli: PDF sisältöytimenä, sivusto ensisijaisena kanavana
- **Kuvaus:** Päätettiin hybridimallista, jossa PDF toimii sisäisenä sisältömasterina ("single source of truth"). Sivusto rakennetaan ensin PDF-sisällön pohjalta. PDF julkaistaan tuotteena vasta myöhemmässä vaiheessa, kun sivustolla on liikennettä ja PDF tarjoaa selkeää lisäarvoa (offline, checklistat, tiivistys). PDF ei ole vielä tuote eikä myynnissä.
- **Vaikutus:** Estää ennenaikaisen monetisoinnin. Ohjaa Phase 1.1 kehitystä (sisältö ensin, kanava kevyt). Varmistaa, että sivut ja mahdollinen appi perustuvat yhteen totuuslähteeseen.
- **Lähde:** keskustelussa sovittu hybridimalli, `docs/pdf/fuengirola_pdf.md`, `docs/concept.md`
- **Commit:** ei vielä commitoitu

### 2026-02-02 – Phase 1.1 teknologia: SvelteKit
- **Kuvaus:** Päätettiin käyttää SvelteKitiä Phase 1.1 -sivuston teknologiana. Tämä mahdollistaa myöhemmän appimaisen kehityksen ilman uudelleenplatformausta. Sivuston minimirunko ja reitit rakennetaan `docs/content_map.md` -tiedoston mukaisesti ilman kirjautumista, maksua tai checkout-toiminnallisuutta.
- **Vaikutus:** Luodaan teknologinen perusta tulevalle kehitykselle, joka skaalautuu sovellukseksi. Ohjaa Phase 1.1 kehitystä keskittymään sisältöön ja kevyeen kanavaan.
- **Lähde:** keskustelussa sovittu teknologiavalinta
- **Commit:** ei vielä commitoitu