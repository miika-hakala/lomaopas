<script lang="ts">
  import { copy } from '$lib/lomasihteeri/copy';
</script>

<svelte:head>
  <title>Marbella – Rantaelämää ja vanhakaupunki | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Suunnitteletko matkaa Marbellaan? Vanhakaupunki, Golden Mile, Puerto Banús, rannat, ravintolat ja päiväretket. Pikaopas ja linkit tärkeimpiin sivuihin."
  />
</svelte:head>

<h1>Marbella – tyylikäs rantaloma Costa del Solilla</h1>

<p>
Marbella on Costa del Solin elegantti rantalomakohde, jossa vanhakaupunki,
Golden Mile ja Puerto Banús luovat kolme erilaista tunnelmaa. Vanhakaupungin
kujat ja Plaza de los Naranjos tarjoavat andalusialaista charmia, kun taas
rantabulevardi ja satama-alueet sopivat rentoon lomapäivään.
</p>

<p>
Marbellassa on helppo yhdistää ranta, hyvä ruoka ja päiväretket. Kaupunki on
kompakti, mutta alueiden välillä liikkuminen onnistuu kävellen, bussilla tai
taksilla.
</p>

<section class="lomasihteeri-cta" aria-labelledby="lomasihteeri-heading">
  <h2 id="lomasihteeri-heading">{copy.cta.title}</h2>
  <p>{copy.cta.body}</p>
  <a href="/espanja/marbella/lomasihteeri/onboarding" class="cta-button" data-testid="lomasihteeri-cta">{copy.cta.button}</a>
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

<h2>Mitä Marbellassa voi tehdä?</h2>

<ul>
  <li><strong>Kävele Old Townissa</strong> – Casco Antiguo ja Plaza de los Naranjos</li>
  <li><strong>Nauti Golden Milestä</strong> – rantabulevardi ja resort‑fiilis</li>
  <li><strong>Käy Puerto Banúsissa</strong> – satama, ostokset ja iltakävely</li>
  <li><strong>Tee päiväretkiä</strong> – Ronda, Málaga ja Gibraltar ovat lähellä</li>
</ul>

<h2>Kenelle Marbella sopii?</h2>

<ul>
  <li>Haluat rantaloman ja kaupunkifiiliksen samassa paketissa</li>
  <li>Arvostat siistiä ympäristöä ja tyylikästä rantapromenadia</li>
  <li>Pidät satama‑alueista, ostoksista ja hyvistä ravintoloista</li>
  <li>Haluat tehdä päiväretkiä Andalusian sisämaahan</li>
</ul>

<h2>Pikaopas</h2>

<h3>Tärkeimmät hakusanat Google Mapsiin</h3>
<ul>
  <li><strong>Vanhakaupunki:</strong> <code>Casco Antiguo Marbella</code></li>
  <li><strong>Plaza de los Naranjos:</strong> <code>Plaza de los Naranjos</code></li>
  <li><strong>Puerto Banús:</strong> <code>Puerto Banús</code></li>
  <li><strong>Golden Mile:</strong> <code>Golden Mile Marbella</code></li>
  <li><strong>Rantabulevardi:</strong> <code>Paseo Marítimo Marbella</code></li>
  <li><strong>Linja-autoasema:</strong> <code>Estación de Autobuses Marbella</code></li>
</ul>

<h3>Tyypilliset hinnat</h3>
<ul>
  <li>Bussi lentokentältä: ~8–15 €</li>
  <li>Paikallisbussi: ~1–2 €</li>
  <li>Aurinkotuoli + varjo: 10–20 € / päivä</li>
  <li>Kahvi: 1,80–3 €</li>
  <li>Illallinen: 25–50 €</li>
</ul>

<h3>Hätänumerot</h3>
<ul>
  <li>Yleinen hätänumero: <strong>112</strong></li>
  <li>Poliisi: <strong>091</strong></li>
</ul>

<aside class="pdf-teaser" aria-labelledby="pdf-heading">
  <h3 id="pdf-heading">Marbella offline‑pikaopas</h3>
  <p>Tallenna tärkeimmät vinkit puhelimeen ennen matkaa.</p>
  <ul>
    <li>Hakusanat Google Mapsiin</li>
    <li>Hintahaarukat ja käytännön vinkit</li>
    <li>Checklista ennen matkaa ja perillä</li>
  </ul>
</aside>

<h2>Lisätietoa</h2>

<ul>
  <li><a href="/espanja/marbella/liikkuminen">Saapuminen ja liikkuminen</a></li>
  <li><a href="/espanja/marbella/missa-asua">Missä asua</a></li>
  <li><a href="/espanja/marbella/rannat">Rannat</a></li>
  <li><a href="/espanja/marbella/ravintolat">Ravintolat</a></li>
  <li><a href="/espanja/marbella/nahtavyydet">Nähtävyydet</a></li>
  <li><a href="/espanja/marbella/paivaretket">Päiväretket</a></li>
  <li><a href="/espanja/marbella/faq">Usein kysytyt kysymykset</a></li>
</ul>

<p>
<a href="/espanja">← Takaisin Espanja-oppaaseen</a>
</p>
