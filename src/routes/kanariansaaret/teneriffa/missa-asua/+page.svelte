<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Teneriffa – Missä asua | Lomaopas.fi</title>
  <meta name="description" content="Tulossa: tiivis katsaus alueisiin ja majoittumiseen Teneriffassa." />
</svelte:head>

<h1>Teneriffa – Missä asua</h1>
<p>Tulossa: lyhyt vertailu alueista ja majoitusvinkeistä lomailijalle.</p>

<p>
<AffiliateLink link={accommodation.teneriffa} />
</p>

<p><a href="/kanariansaaret/teneriffa">← Takaisin Teneriffaan</a></p>
