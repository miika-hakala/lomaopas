<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Torremolinos – Liikkuminen | Lomaopas.fi</title>
  <meta
    name="description"
    content="Opas liikkumiseen Torremolinoksessa. Lentokenttä vain 8 min junalla! Vinkit junaan, busseihin ja taksipalveluihin."
  />
</svelte:head>

<h1>Liikkuminen Torremolinoksessa</h1>

<p>
Torremolinos on Costa del Solin lähin kohde lentokentälle – juna kestää vain
noin 8 minuuttia. Kaupungissa liikkuminen on helppoa kävellen, ja rantapromenadi
jatkuu saumattomasti Benalmádenaan asti.
</p>

<h2>Saapuminen lentokentältä</h2>

<h3>Juna (suositus)</h3>
<ul>
  <li><strong>Reitti:</strong> Málaga Airport → Torremolinos</li>
  <li><strong>Kesto:</strong> ~8 minuuttia</li>
  <li><strong>Hinta:</strong> ~2 €</li>
  <li><strong>Vuoroväli:</strong> 20–30 min</li>
</ul>
<p>
Seuraa kylttejä "Tren / Train" terminaalista. Osta lippu automaatista.
Valitse asema majoituksen mukaan: <code>Torremolinos</code> (keskusta) tai
<code>La Nogalera</code> (rannikko/La Carihuela).
</p>

<h3>Taksi</h3>
<ul>
  <li><strong>Hinta:</strong> 15–25 €</li>
  <li><strong>Kesto:</strong> ~10 min</li>
  <li>Käytä vain virallisia takseja (valkoinen auto, vihreä valo)</li>
</ul>
<p>
<AffiliateLink link={transport.airportTransfer} />
</p>

<h2>Liikkuminen kaupungissa</h2>

<h3>Kävellen (paras tapa)</h3>
<ul>
  <li>Rantapromenadi: 6 km La Carihuelasta Benalmádenaan</li>
  <li>Keskusta kompakti – kaikki kävelyetäisyydellä</li>
  <li>Merkitse majoitus Google Mapsiin</li>
</ul>

<h3>Juna</h3>
<ul>
  <li><strong>Linja C1:</strong> Málaga ↔ Torremolinos ↔ Fuengirola</li>
  <li><strong>Kaksi asemaa:</strong> Torremolinos (keskusta) ja La Nogalera (rannikko)</li>
  <li><strong>Hinta:</strong> 1,80–4,50 € riippuen matkasta</li>
</ul>

<h3>Taksi</h3>
<ul>
  <li>Luotettava ja kohtuuhintainen</li>
  <li>Pyydä arvio hinnasta ennen matkaa</li>
  <li><strong>Hakusana:</strong> <code>Radio Taxi Torremolinos</code></li>
</ul>

<h2>Vuokra-auto</h2>

<p>
Ei tarvita Torremolinoksessa – juna toimii erinomaisesti. Hyödyllinen vain
Rondaan, Granadaan tai sisämaahan suuntautuville <a href="/espanja/torremolinos/paivaretket">päiväretkille</a>.
</p>
<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/torremolinos">← Takaisin Torremolinokseen</a>
</p>
