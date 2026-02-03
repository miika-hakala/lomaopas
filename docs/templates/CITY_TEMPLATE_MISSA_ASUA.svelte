<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>{{CITY_NAME}} – Missä asua | Lomaopas.fi</title>
  <meta
    name="description"
    content="{{CITY_NAME}}: parhaat alueet majoittumiseen. {{AREAS_LIST}}. Vertailu ja vinkit."
  />
</svelte:head>

<h1>Missä asua – {{CITY_NAME}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<h2>Alueet</h2>

<!-- TOISTA PER ALUE -->
<h3>{{AREA_NAME}} {{AREA_RECOMMENDATION}}</h3>
<ul>
  <li><strong>Kenelle:</strong> {{AREA_TARGET}}</li>
  <li><strong>Plussat:</strong> {{AREA_PROS}}</li>
  <li><strong>Miinukset:</strong> {{AREA_CONS}}</li>
</ul>
<!-- /TOISTA -->

<h2>Vertailu</h2>

| Alue | Ranta | Ravintolat | Hintataso | Tunnelma |
|------|-------|------------|-----------|----------|
| {{AREA_1}} | {{STARS}} | {{STARS}} | {{PRICE}} | {{VIBE}} |

<h2>Majoituksen varaaminen</h2>

<p>
{{BOOKING_INFO}}
</p>
<p>
<AffiliateLink link={accommodation.{{city_slug}}} />
</p>

<p>
<a href="/espanja/{{city_slug}}/liikkuminen">← Liikkuminen</a> |
<a href="/espanja/{{city_slug}}/rannat">Rannat →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 4 (Alueet ja majoitus)
-->
