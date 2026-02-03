<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { activities, transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>{{CITY_NAME}} – Päiväretket | Lomaopas.fi</title>
  <meta
    name="description"
    content="Päiväretket {{CITY_NAME_ELATIVE}}: {{DESTINATIONS_LIST}}. Vinkit liikkumiseen ja lippujen varaamiseen."
  />
</svelte:head>

<h1>Päiväretket {{CITY_NAME_ELATIVE}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<h2>Suosituimmat päiväretkikohteet</h2>

<!-- TOISTA PER KOHDE -->
<h3>{{DESTINATION_NAME}}</h3>
<ul>
  <li><strong>Etäisyys:</strong> {{DESTINATION_DISTANCE}}</li>
  <li>{{DESTINATION_HIGHLIGHT_1}}</li>
  <li>{{DESTINATION_HIGHLIGHT_2}}</li>
</ul>
<p>
<!-- Jos oma sivumme: -->
<a href="/espanja/{{destination_slug}}">Lue lisää {{DESTINATION_NAME_ELATIVE}} →</a>
<!-- Jos affiliate: -->
<AffiliateLink link={activities.{{activity_slug}}} />
</p>
<!-- /TOISTA -->

<h2>Liikkuminen päiväretkille</h2>

<h3>Juna (C1-lähijuna)</h3>
<p>{{TRAIN_DAY_TRIPS}}</p>

<h3>Bussi</h3>
<p>{{BUS_DAY_TRIPS}}</p>

<h3>Vuokra-auto</h3>
<p>{{CAR_DAY_TRIPS}}</p>
<p><AffiliateLink link={transport.carRental} /></p>

<h2>Vinkkejä</h2>

<ul>
  <li><strong>Alhambra:</strong> Varaa liput 2–4 viikkoa etukäteen</li>
  <li><strong>Ajoitus:</strong> Lähde aamulla – ehdit nähdä enemmän</li>
  <li><strong>Vesi:</strong> Ota mukaan, erityisesti kesällä</li>
</ul>

<p>
<a href="/espanja/{{city_slug}}/nahtavyydet">← Nähtävyydet</a> |
<a href="/espanja/{{city_slug}}/faq">FAQ →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 8 (Päiväretket)

CROSS-CITY LINKS: Muista päivittää muiden kaupunkien paivaretket-sivut!
-->
