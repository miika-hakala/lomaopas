<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Missä asua | Lomaopas.fi</title>
  <meta name="description" content="Tulossa: tiivis katsaus alueisiin ja majoittumiseen Marbellassa." />
</svelte:head>

<h1>Marbella – Missä asua</h1>
<p>Tulossa: lyhyt vertailu alueista ja majoitusvinkeistä lomailijalle.</p>

<p>
<AffiliateLink link={accommodation.marbella} />
</p>

<p><a href="/espanja/marbella">← Takaisin Marbellaan</a></p>
