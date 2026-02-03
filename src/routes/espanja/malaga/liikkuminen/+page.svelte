<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Málaga – Liikkuminen | Lomaopas.fi</title>
  <meta
    name="description"
    content="Opas liikkumiseen Málagassa. Näin pääset lentokentältä keskustaan junalla, metrolla tai taksilla. Vinkit busseihin ja autonvuokraukseen."
  />
</svelte:head>

<h1>Liikkuminen Málagassa</h1>

<p>
Málagan keskusta on kompakti ja helppo kävellä. Vanhakaupungin nähtävyydet ovat
kävelyetäisyydellä toisistaan, ja julkinen liikenne toimii hyvin laajempiin
siirtymiin.
</p>

<h2>Saapuminen lentokentältä</h2>

<h3>Juna (suositus)</h3>
<ul>
  <li><strong>Reitti:</strong> Málaga Airport → María Zambrano (keskusta)</li>
  <li><strong>Kesto:</strong> ~12 minuuttia</li>
  <li><strong>Hinta:</strong> ~2,20 €</li>
  <li><strong>Vuoroväli:</strong> 20–30 min</li>
</ul>
<p>
Seuraa kylttejä "Tren / Train" terminaalista. Osta lippu automaatista (kortti tai
käteinen). Juna pysähtyy myös <code>Málaga Centro-Alameda</code> -asemalla, joka on
lähempänä vanhakaupunkia.
</p>

<h3>Taksi</h3>
<ul>
  <li><strong>Hinta:</strong> 20–30 € (kiinteä tai mittari)</li>
  <li><strong>Kesto:</strong> ~15–20 min</li>
</ul>
<p>
Käytä vain virallisia takseja (valkoinen auto, vihreä valo). Voit myös
<AffiliateLink link={transport.airportTransfer} />
</p>

<h3>Bussi</h3>
<ul>
  <li><strong>Linja A Express:</strong> Lentokenttä → Keskusta</li>
  <li><strong>Hinta:</strong> ~3 €</li>
  <li><strong>Kesto:</strong> ~20–30 min</li>
</ul>

<h2>Liikkuminen kaupungissa</h2>

<h3>Kävellen</h3>
<p>
Vanhakaupunki on kompakti – kaikki nähtävyydet ovat kävelyetäisyydellä. Calle
Lariosilta Alcazaballe kävelet noin 15 minuutissa. Huomaa, että vanhakaupunki
on mäkinen – mukavat kengät ovat tarpeen!
</p>

<h3>Metro</h3>
<ul>
  <li><strong>Linja 1 & 2:</strong> Yhdistävät keskustan ja lähialueet</li>
  <li><strong>Hinta:</strong> ~1,35 € (1 vyöhyke)</li>
  <li>Hyödyllinen jos majoitus on metron varrella</li>
</ul>

<h3>Bussi (EMT Málaga)</h3>
<ul>
  <li>Kattava paikallisliikenneverkko</li>
  <li><strong>Hinta:</strong> ~1,40 €</li>
  <li>Hyödyllinen rannoille (La Malagueta, El Palo)</li>
</ul>

<h3>Juna (lähijuna)</h3>
<ul>
  <li><strong>Linja C1:</strong> Málaga ↔ Fuengirola (rannikko)</li>
  <li>Erinomainen päiväretkiin Costa del Solilla</li>
  <li>Lue lisää <a href="/espanja/malaga/paivaretket">päiväretkistä</a></li>
</ul>

<h2>Vuokra-auto</h2>

<p>
Autoa ei tarvita keskustassa – pysäköinti on hankalaa ja kallista. Auto on
hyödyllinen vain päiväretkille (Ronda, Granada, valkoiset kylät).
</p>

<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/malaga">← Takaisin Málagaan</a>
</p>
