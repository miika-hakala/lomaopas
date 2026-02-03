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

### 2026-02-03 – Projekti keskeytetty Fuengirola v1:n jälkeen
- **Kuvaus:** Käyttäjän pyynnöstä projekti keskeytettiin Fuengirola v1 -version valmistumisen jälkeen. Projektin jatkamisesta tehdään erillinen päätös.
- **Vaikutus:** Ei aktiivista kehitystä; turvallinen jatkopiste luotu. Fuengirola v1 on lukittu.
- **Lähde:** `docs/status.md`
- **Commit:** `afb3bcd16c8ee01c64696622f372e70d8f6c34c4`

### 2026-02-03 – Phase 2 (LomaSihteeri MVP) valmis
- **Kuvaus:** LomaSihteeri-toiminnallisuus toteutettu: onboarding, päivän kirje live-datalla (sää, varoitukset, tapahtumat), LocalStorage-profiili. E2E-testit ja Phase Gate -käytäntö dokumentoitu.
- **Vaikutus:** Käyttäjät voivat saada personoidun päivän katsauksen Fuengirolan lomalle.
- **Lähde:** `docs/lomasihteeri/`, `docs/testing.md`
- **Commit:** `fbf98be`

### 2026-02-03 – Phase 3 (Monetisointi) vaiheet 3.1–3.7 valmiit
- **Kuvaus:** Affiliate-linkit integroitu, PDF-myyntimalli lukittu, Stripe-checkout toteutettu, Supabase-tilaustallennus ja token-suojattu lataus (7 pv / 5 latausta) implementoitu.
- **Vaikutus:** Tekninen valmius PDF-myyntiin. Lanseeraus (3.8) odottaa lisää liikennettä.
- **Lähde:** `docs/monetization.md`, `docs/premium_products.md`
- **Commit:** `0ae2eea`

### 2026-02-03 – Phase 3.8 (lanseeraus) siirretty myöhemmäksi
- **Kuvaus:** Päätettiin siirtää PDF-oppaan julkinen lanseeraus odottamaan, kunnes sivustolla on enemmän liikennettä ja sisältöä.
- **Vaikutus:** Stripe-integraatio on valmis mutta ei aktiivisessa käytössä. Fokus siirtyy sisällön laajentamiseen.
- **Perustelu:** Liikenteen ja sisältöpohjan kasvattaminen ennen monetisointia parantaa konversiota.
- **Lähde:** `docs/status.md`, `docs/roadmap.md`
- **Commit:** (tämä commit)

### 2026-02-03 – Phase 1x (Kaupunkien skaalaus) aloitettu
- **Kuvaus:** Päätettiin aloittaa uusi vaihe, jossa Lomaopas.fi laajennetaan useaan kaupunkiin hyödyntäen Fuengirolan valmista mallia. Ensimmäinen kohde on Málaga, sen jälkeen Torremolinos ja myöhemmin Benalmádena.
- **Vaikutus:** Sisältöfokus: PDF master per kaupunki, sitten kaupunkisivut. Ei uusia ominaisuuksia.
- **Perustelu:** Kasvattaa liikennettä ja sisältöpohjaa ennen PDF-lanseerausta.
- **Lähde:** `docs/roadmap.md`, `docs/TASKS.md`
- **Commit:** (tämä commit)

### 2026-02-03 – TOP 20 (2026) kohdelista lukittu
- **Kuvaus:** TOP 20 -kohdelista vuodelle 2026 lukittiin ja siitä tehtiin virallinen ohjausdokumentti. Lista ohjaa roadmap-priorisointia, automaation ajamisjärjestystä sekä PDF-masterien ja kohdesivujen tuotantoa.
- **Vaikutus:** Kehitys ja sisältötyö priorisoidaan P0/P1/P2 -jaon mukaan, eikä listaa muuteta ilman strategista päätöstä.
- **Lähde:** `docs/market/top-destinations-2026.md`
- **Commit:** (tämä commit)

### 2026-02-03 – Session closed by user; Phase 2x docs locked
- **Kuvaus:** Istunto suljettiin käyttäjän pyynnöstä. Phase 2x -dokumentaatio lukittiin ja seuraavaksi toimenpiteeksi määritettiin Gran Canaria -scaffold.
- **Vaikutus:** Työ pysäytetään tähän kohtaan; seuraava aktiivinen toimenpide on Phase 2x.P0.1 Gran Canaria scaffold.
- **Lähde:** `docs/status.md`, `docs/roadmap.md`, `docs/TASKS.md`
- **Commit:** (tämä commit)

### 2026-02-03 – Multi-region automaatio valmis
- **Kuvaus:** City scaffold -automaatio rakennettu tukemaan useita maita/alueita. Automaatio luo PDF stubin, kaupunkisivut, affiliate-linkit ja lomasihteeri-sivut. Testattu Gran Canarialla ja Teneriffalla.
- **Vaikutus:** Phase 2x skaalautuvuus varmistettu. Uusien kohteiden lisääminen nopeutuu merkittävästi.
- **Ominaisuudet:** Multi-region tuki (`--region`), PDF stub generointi (11-osion runko), idempotenssi, affiliate stub generointi (quoted keys), hub card injection, hyphenated slugs tuki (bracket notation).
- **Testattu:** Málaga & Torremolinos (idempotenssi), Gran Canaria (multi-region, hyphenated slug), Teneriffa (multi-city per region).
- **Lähde:** `docs/scripts/new-city-multiregion.md`, `scripts/new-city.ts`
- **Commitit:** `cb78bbb`, `e5e8637`, `fa9d4c1`, `47b11a0`, `4980a11`
