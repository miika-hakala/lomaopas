<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Gran Canaria – Missä asua | Lomaopas.fi</title>
  <meta name="description" content="Tulossa: tiivis katsaus alueisiin ja majoittumiseen Gran Canariassa." />
</svelte:head>

<h1>Gran Canaria – Missä asua</h1>
<p>Tulossa: lyhyt vertailu alueista ja majoitusvinkeistä lomailijalle.</p>

<p>
<AffiliateLink link={accommodation['gran-canaria']} />
</p>

<p><a href="/kanariansaaret/gran-canaria">← Takaisin Gran Canariaan</a></p>
