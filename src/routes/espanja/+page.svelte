<svelte:head>
  <title>Espanja – Lomakohteet suomalaisille | Lomaopas.fi</title>
  <meta
    name="description"
    content="Espanjan lomakohteet suomalaisille. Costa del Solin aurinkorannikko: Málaga, Fuengirola, Torremolinos ja muut kohteet. Käytännön vinkit ja oppaat."
  />
</svelte:head>

<h1>Espanja – Aurinkorannikko suomalaisille</h1>

<p>
Espanja on suomalaisten suosikkikohde – ja syystäkin. Costa del Solin
aurinkorannikko tarjoaa lämpöä, rantoja ja espanjalaista elämäntapaa vain
muutaman tunnin lennon päässä.
</p>

<h2>Costa del Sol</h2>

<p>
Costa del Sol ("Aurinkorannikko") on Etelä-Espanjan rannikkoalue Andalusiassa.
Alue tunnetaan yli 300 aurinkoisesta päivästä vuodessa, pitkistä hiekkarannoista
ja helposta saavutettavuudesta Málagan lentokentän kautta.
</p>

<h2>Kohteet</h2>

<div class="city-cards">
  <div class="city-card">
    <h3>Málaga</h3>
    <p>
      Costa del Solin pääkaupunki. Kulttuuria, museita ja kaupunkielämää.
      Picasson syntymäkaupunki tarjoaa historiaa, taidetta ja erinomaista ruokaa.
    </p>
    <p><strong>Sopii:</strong> Kulttuurista kiinnostuneille, kaupunkilomaa etsiville</p>
    <p><a href="/espanja/malaga">Tutustu Málagaan →</a></p>
  </div>

  <div class="city-card">
    <h3>Fuengirola</h3>
    <p>
      Helppo ja rento rantalomakohde. Kompakti kaupunki pitkillä hiekkarannoilla,
      hyvällä junayhteydellä ja monipuolisilla palveluilla.
    </p>
    <p><strong>Sopii:</strong> Perheille, ensikertalaisille, rantalomaa etsiville</p>
    <p><a href="/espanja/fuengirola">Tutustu Fuengirolaan →</a></p>
  </div>

  <div class="city-card">
    <h3>Torremolinos</h3>
    <p>
      Costa del Solin alkuperäinen turistikohde. Rantalomaa, vilkasta yöelämää ja
      kansainvälinen ilmapiiri. Lähinnä lentokenttää – vain 8 min junalla.
    </p>
    <p><strong>Sopii:</strong> Yöelämää etsiville, ystäväporukoille, helppoutta arvostaville</p>
    <p><a href="/espanja/torremolinos">Tutustu Torremolinokseen →</a></p>
  </div>
</div>

<h2>Käytännön perusteet</h2>

<ul>
  <li><strong>Lentokenttä:</strong> Málaga (AGP) – suorat lennot Suomesta</li>
  <li><strong>Aikavyöhyke:</strong> UTC+1 (sama kuin Keski-Eurooppa)</li>
  <li><strong>Valuutta:</strong> Euro (€)</li>
  <li><strong>Kieli:</strong> Espanja, englanti toimii turistialueilla</li>
  <li><strong>Paras aika:</strong> Huhti–kesäkuu, syys–lokakuu</li>
</ul>

<h2>Lisää kohteita tulossa</h2>

<p>
Seuraavaksi: Benalmádena, Marbella ja muut Costa del Solin kohteet.
</p>

<style>
  .city-cards {
    display: grid;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  @media (min-width: 640px) {
    .city-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .city-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .city-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.25rem;
  }

  .city-card h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
  }

  .city-card p {
    margin: 0 0 0.75rem 0;
    color: #495057;
  }

  .city-card p:last-child {
    margin-bottom: 0;
  }

  .city-card a {
    font-weight: 500;
  }
</style>
