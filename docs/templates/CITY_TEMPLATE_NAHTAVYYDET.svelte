<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { tickets } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>{{CITY_NAME}} – Nähtävyydet | Lomaopas.fi</title>
  <meta
    name="description"
    content="{{CITY_NAME}}: parhaat nähtävyydet ja tekemistä. {{ATTRACTIONS_LIST}}."
  />
</svelte:head>

<h1>Nähtävyydet – {{CITY_NAME}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<!-- TOISTA PER NÄHTÄVYYS -->
<h2>{{ATTRACTION_NAME}}</h2>
<ul>
  <li>{{ATTRACTION_DESC_1}}</li>
  <li>{{ATTRACTION_DESC_2}}</li>
  <li><strong>Hinta:</strong> {{ATTRACTION_PRICE}}</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>{{ATTRACTION_SEARCH}}</code>
</p>
<!-- Jos lippulinkki: -->
<p><AffiliateLink link={tickets.{{ticket_slug}}} /></p>
<!-- /TOISTA -->

<h2>Lasten kanssa</h2>

<ul>
  {{KIDS_ATTRACTIONS}}
</ul>

<p>
<a href="/espanja/{{city_slug}}/ravintolat">← Ravintolat</a> |
<a href="/espanja/{{city_slug}}/paivaretket">Päiväretket →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 7 (Nähtävyydet ja tekeminen)
-->
