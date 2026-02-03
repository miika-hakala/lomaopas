<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Benalmádena – Liikkuminen | Lomaopas.fi</title>
  <meta
    name="description"
    content="Opas liikkumiseen Benalmádenassa. Lentokentältä junalla 12 min! Vinkit junaan, busseihin, köysirataan ja taksipalveluihin."
  />
</svelte:head>

<h1>Liikkuminen Benalmádenassa</h1>

<p>
Benalmádenassa liikkuminen on helppoa. Ranta-alue on tasainen ja rantapromenadi
jatkuu saumattomasti Torremolinokseen ja Fuengirolaan. Vuoristokylään (Pueblo)
pääset bussilla tai taksilla.
</p>

<h2>Saapuminen lentokentältä</h2>

<h3>Juna (suositus)</h3>
<ul>
  <li><strong>Reitti:</strong> Málaga Airport → Arroyo de la Miel</li>
  <li><strong>Kesto:</strong> ~12 minuuttia</li>
  <li><strong>Hinta:</strong> ~2–3 €</li>
  <li><strong>Vuoroväli:</strong> 20–30 min</li>
</ul>
<p>
Seuraa kylttejä "Tren / Train" terminaalista. Osta lippu automaatista (kortti tai
käteinen). Valitse <code>Arroyo de la Miel</code>.
</p>

<h3>Taksi</h3>
<ul>
  <li><strong>Hinta:</strong> 20–30 €</li>
  <li><strong>Kesto:</strong> ~15 min</li>
  <li>Käytä vain virallisia takseja (valkoinen auto, vihreä valo)</li>
</ul>
<p>
<AffiliateLink link={transport.airportTransfer} />
</p>

<h2>Liikkuminen kaupungissa</h2>

<h3>Kävellen</h3>
<ul>
  <li>Ranta-alue (Costa) on tasainen ja helppokulkuinen</li>
  <li>Rantapromenadi: yhtenäinen reitti <a href="/espanja/torremolinos">Torremolinokseen</a> (~15 min) ja Fuengirolaan (~45 min)</li>
  <li>Puerto Marina helposti käveltävissä rannalta</li>
  <li><strong>Huom:</strong> Pueblo ja Arroyo ovat mäkisiä!</li>
</ul>

<h3>Juna</h3>
<ul>
  <li><strong>Linja C1:</strong> Málaga ↔ Torremolinos ↔ Benalmádena ↔ Fuengirola</li>
  <li><strong>Asema:</strong> Arroyo de la Miel (ainoa Benalmádenassa)</li>
  <li><strong>Hinta:</strong> 1,80–4,50 € riippuen matkasta</li>
</ul>

<h3>Bussi</h3>
<ul>
  <li>Paikallisbussi yhdistää Costa ↔ Arroyo ↔ Pueblo</li>
  <li>Hyödyllinen vuoristokylään nousemiseen</li>
  <li><strong>Hinta:</strong> ~1,40 €</li>
</ul>

<h3>Köysirata (Teleférico)</h3>
<ul>
  <li><strong>Reitti:</strong> Arroyo de la Miel → Monte Calamorro (769 m)</li>
  <li>Upeat näkymät, Afrikan näkee selkeällä säällä</li>
  <li><strong>Hinta:</strong> ~12–15 € (meno-paluu)</li>
</ul>

<h3>Taksi</h3>
<ul>
  <li>Käytännöllinen Puebloon nousemiseen</li>
  <li>Arroyo → Pueblo: ~8–12 €</li>
  <li>Costa → Pueblo: ~10–15 €</li>
</ul>

<h2>Vuokra-auto</h2>

<p>
Ei välttämätön ranta-alueella. Hyödyllinen jos haluat käydä Pueblossa usein tai
tehdä <a href="/espanja/benalmadena/paivaretket">päiväretkiä</a> sisämaahan (Ronda, Granada).
</p>

<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/benalmadena">← Takaisin Benalmádenaan</a>
</p>
