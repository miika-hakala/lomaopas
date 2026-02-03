<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>{{CITY_NAME}} – Lomaopas suomalaisille | Lomaopas.fi</title>
  <meta
    name="description"
    content="{{CITY_NAME}}: {{META_DESCRIPTION}}. Käytännön vinkit, rannat, ravintolat ja nähtävyydet."
  />
</svelte:head>

<h1>{{CITY_NAME}} – {{TAGLINE}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<h2>Pikaopas</h2>

<ul>
  <li><strong>Sijainti:</strong> {{LOCATION}}</li>
  <li><strong>Lentokentältä:</strong> {{AIRPORT_DISTANCE}}</li>
  <li><strong>Sopii:</strong> {{TARGET_AUDIENCE}}</li>
  <li><strong>Paras aika:</strong> Huhti–kesäkuu, syys–lokakuu</li>
</ul>

<h2>Navigointi</h2>

<ul>
  <li><a href="/espanja/{{city_slug}}/liikkuminen">Saapuminen ja liikkuminen</a></li>
  <li><a href="/espanja/{{city_slug}}/missa-asua">Missä asua – alueet</a></li>
  <li><a href="/espanja/{{city_slug}}/rannat">Rannat</a></li>
  <li><a href="/espanja/{{city_slug}}/ravintolat">Ravintolat ja ruoka</a></li>
  <li><a href="/espanja/{{city_slug}}/nahtavyydet">Nähtävyydet ja tekeminen</a></li>
  <li><a href="/espanja/{{city_slug}}/paivaretket">Päiväretket</a></li>
  <li><a href="/espanja/{{city_slug}}/faq">Usein kysytyt kysymykset</a></li>
</ul>

<h2>Majoitus</h2>

<p>
{{ACCOMMODATION_INTRO}}
</p>
<p>
<AffiliateLink link={accommodation.{{city_slug}}} />
</p>

<p>
<a href="/espanja">← Takaisin Espanjaan</a>
</p>

<!--
TEMPLATE VARIABLES:
- {{CITY_NAME}}: Kaupungin nimi (esim. "Nerja")
- {{city_slug}}: URL-muoto (esim. "nerja")
- {{META_DESCRIPTION}}: Lyhyt kuvaus meta-tagiin
- {{TAGLINE}}: Hub-sivun tagline (esim. "Idyllinen valkoinen kylä")
- {{INTRO_PARAGRAPH}}: 2-3 lauseen intro
- {{LOCATION}}: Sijainti (esim. "Costa del Sol, 50 km Málagasta itään")
- {{AIRPORT_DISTANCE}}: Etäisyys lentokentältä (esim. "~1 h bussilla")
- {{TARGET_AUDIENCE}}: Kohderyhmä (esim. "Perheille, pariskunnille")
- {{ACCOMMODATION_INTRO}}: Majoituskappale

PDF-MAPPING: Osiot 1 (Tervetuloa) + 4 (Alueet ja majoitus) tiivistettynä
-->
