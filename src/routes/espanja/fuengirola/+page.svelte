<script lang="ts">
  import { copy } from '$lib/lomasihteeri/copy';
</script>

<svelte:head>
  <title>Fuengirola – Aurinkoinen matkaopas | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Suunnitteletko matkaa Fuengirolaan? Tämä matkaopas kattaa kaiken olennaisen: upeat rannat, parhaat ravintolat, nähtävyydet ja liikkumisen. Aloita loman suunnittelu!"
  />
</svelte:head>

<h1>Fuengirola – Costa del Solin suosikkikohde</h1>

<p>
Fuengirola on aurinkoinen rannikkokaupunki Etelä-Espanjassa Costa del Solilla.
Se tunnetaan pitkistä hiekkarannoistaan, helposta liikkumisesta ja
monipuolisista palveluista. Kaupunki sopii hyvin niin lyhyelle lomalle kuin
pidempäänkin oleskeluun.
</p>

<p>
Fuengirolassa yhdistyvät rantaloma, kaupunkielämä ja erinomainen sijainti.
Keskusta on kompakti ja suurin osa palveluista on kävelyetäisyydellä. Lisäksi
junayhteys Málagan lentokentältä tekee saapumisesta vaivatonta.
</p>

<section class="lomasihteeri-cta" aria-labelledby="lomasihteeri-heading">
  <h2 id="lomasihteeri-heading">{copy.cta.title}</h2>
  <p>{copy.cta.body}</p>
  <a href="/espanja/fuengirola/lomasihteeri/onboarding" class="cta-button" data-testid="lomasihteeri-cta">{copy.cta.button}</a>
  <p class="cta-note">{copy.cta.note}</p>
</section>

<style>
  .lomasihteeri-cta {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    max-width: 600px;
  }
  .lomasihteeri-cta h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    color: #212529;
  }
  .lomasihteeri-cta p {
    margin: 0 0 1rem 0;
    color: #495057;
    line-height: 1.5;
  }
  .cta-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.15s ease;
  }
  .cta-button:hover {
    background-color: #0056b3;
  }
  .cta-button:focus-visible {
    outline: 3px solid #007bff;
    outline-offset: 2px;
  }
  .cta-note {
    margin: 1rem 0 0 0;
    font-size: 0.85rem;
    color: #6c757d;
  }

  .pdf-teaser {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-left: 4px solid #6c757d;
    border-radius: 4px;
    padding: 1rem 1.25rem;
    margin: 2rem 0;
    max-width: 600px;
  }
  .pdf-teaser h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #495057;
  }
  .pdf-teaser p {
    margin: 0 0 0.75rem 0;
    color: #6c757d;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .pdf-teaser ul {
    margin: 0;
    padding-left: 1.25rem;
    color: #6c757d;
    font-size: 0.9rem;
  }
  .pdf-teaser li {
    margin-bottom: 0.25rem;
  }
</style>

<h2>Mitä Fuengirolassa voi tehdä?</h2>

<ul>
  <li><strong>Nauti rannoista</strong> – useita kilometrejä hyvin hoidettuja hiekkarantoja</li>
  <li><strong>Syö hyvin</strong> – satoja ravintoloita ja perinteisiä rantabaareja</li>
  <li><strong>Liiku helposti</strong> – juna, bussit ja taksit toimivat sujuvasti</li>
  <li><strong>Tee päiväretkiä</strong> – Málaga, Mijas ja Marbella ovat lähellä</li>
</ul>

<h2>Kenelle Fuengirola sopii?</h2>

<p>
Fuengirola on erinomainen kohde monenlaisille matkailijoille:
</p>

<ul>
  <li>Rantalomaa etsiville</li>
  <li>Lapsiperheille</li>
  <li>Talvehtijoille</li>
  <li>Helppoa lomaa arvostaville ensikertalaisille</li>
</ul>

<aside class="pdf-teaser" aria-labelledby="pdf-heading">
  <h3 id="pdf-heading">Tulossa: Fuengirola offline-opas</h3>
  <p>Valmistelemme ladattavaa PDF-opasta, joka toimii ilman nettiyhteyttä.</p>
  <ul>
    <li>Toimii offline – ei vaadi dataa kohteessa</li>
    <li>Valmiit checklistat ennen matkaa ja perillä</li>
    <li>Suorat hakusanat Google Mapsiin</li>
  </ul>
</aside>

<h2>Lisätietoa</h2>

<ul>
  <li><a href="/espanja/fuengirola/liikkuminen">Saapuminen ja liikkuminen</a></li>
  <li><a href="/espanja/fuengirola/missa-asua">Missä asua</a></li>
  <li><a href="/espanja/fuengirola/rannat">Rannat</a></li>
  <li><a href="/espanja/fuengirola/ravintolat">Ravintolat</a></li>
  <li><a href="/espanja/fuengirola/nahtavyydet">Nähtävyydet</a></li>
  <li><a href="/espanja/fuengirola/paivaretket">Päiväretket</a></li>
  <li><a href="/espanja/fuengirola/faq">Usein kysytyt kysymykset</a></li>
</ul>

<p>
<a href="/espanja">← Takaisin Espanja-oppaaseen</a>
</p>
