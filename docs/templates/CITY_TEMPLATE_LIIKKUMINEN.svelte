<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>{{CITY_NAME}} – Saapuminen ja liikkuminen | Lomaopas.fi</title>
  <meta
    name="description"
    content="Näin pääset {{CITY_NAME_ILLATIVE}}. Juna, bussi, taksi lentokentältä. Liikkuminen lomalla ja käytännön vinkit."
  />
</svelte:head>

<h1>Saapuminen ja liikkuminen – {{CITY_NAME}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<h2>Lentokentältä {{CITY_NAME_ILLATIVE}}</h2>

<h3>Juna (suositus)</h3>
<ul>
  <li><strong>Reitti:</strong> Málaga Airport → {{TRAIN_STATION}}</li>
  <li><strong>Kesto:</strong> {{TRAIN_DURATION}}</li>
  <li><strong>Hinta:</strong> {{TRAIN_PRICE}}</li>
  <li><strong>Vuoroväli:</strong> 20–30 min</li>
</ul>

<h3>Taksi</h3>
<ul>
  <li><strong>Hinta:</strong> {{TAXI_PRICE}}</li>
  <li><strong>Kesto:</strong> {{TAXI_DURATION}}</li>
</ul>
<p>
<AffiliateLink link={transport.airportTransfer} />
</p>

<h3>Bussi</h3>
<ul>
  <li><strong>Linja:</strong> {{BUS_LINE}}</li>
  <li><strong>Hinta:</strong> {{BUS_PRICE}}</li>
</ul>

<h2>Liikkuminen lomalla</h2>

<h3>Kävellen</h3>
<p>{{WALKING_INFO}}</p>

<h3>Juna</h3>
<p>{{LOCAL_TRAIN_INFO}}</p>

<h3>Bussi</h3>
<p>{{LOCAL_BUS_INFO}}</p>

<h3>Taksi</h3>
<p>{{LOCAL_TAXI_INFO}}</p>

<h3>Vuokra-auto</h3>
<p>{{CAR_RENTAL_INFO}}</p>
<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/{{city_slug}}/missa-asua">Missä asua →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
TEMPLATE VARIABLES:
- {{CITY_NAME}}: Kaupungin nimi
- {{city_slug}}: URL-muoto
- {{CITY_NAME_ILLATIVE}}: Illatiivi (esim. "Nerjaan")
- {{CITY_NAME_ILLATIVE_SHORT}}: Lyhyt back-link (esim. "Nerjaan")
- {{TRAIN_STATION}}: Juna-aseman nimi
- {{TRAIN_DURATION}}: Junan kesto
- {{TRAIN_PRICE}}: Junan hinta
- {{TAXI_PRICE}}: Taksin hinta
- {{TAXI_DURATION}}: Taksin kesto
- {{BUS_LINE}}: Bussilinja
- {{BUS_PRICE}}: Bussin hinta
- + liikkumistiedot

PDF-MAPPING: Osio 2 (Saapuminen) + Osio 3 (Liikkuminen)
-->
