<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { activities, transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Málaga – Päiväretket | Lomaopas.fi</title>
  <meta
    name="description"
    content="Päiväretket Málagasta: Granada ja Alhambra, Ronda, Nerja, Frigiliana, Fuengirola ja Marbella. Vinkit liikkumiseen ja lippujen varaamiseen."
  />
</svelte:head>

<h1>Päiväretket Málagasta</h1>

<p>
Málagan keskeinen sijainti tekee siitä erinomaisen tukikohdan Andalusian
tutkimiseen. Juna, bussi tai vuokra-auto – vaihtoehtoja on paljon.
</p>

<h2>Granada ja Alhambra</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~1,5 h bussilla</li>
  <li><strong>Hinta:</strong> ~12 € (ALSA-bussi)</li>
  <li>Maailmankuulu Alhambra-palatsi</li>
  <li><strong>TÄRKEÄÄ:</strong> Varaa Alhambra-liput viikkoja etukäteen!</li>
</ul>
<p>
Koko päivän retki. Alhambra on yksi Espanjan suosituimmista kohteista – liput
myydään usein loppuun.
<AffiliateLink link={activities.granada} />
</p>

<h2>Ronda</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~1,5 h autolla tai bussilla</li>
  <li>Häikäisevä rotkokaupunki</li>
  <li>Puente Nuevo -silta (ikoninen näkymä)</li>
  <li>Espanjan vanhin härkätaisteluareena</li>
</ul>
<p>
<AffiliateLink link={activities.ronda} />
</p>

<h2>Nerja ja luolat</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~1 h bussilla</li>
  <li>Kuuluisat Cuevas de Nerja -tippukiviluolat</li>
  <li>Balcón de Europa -näköalatasanne</li>
  <li>Kaunis valkoinen kylä</li>
</ul>
<p>
<AffiliateLink link={activities.nerja} />
</p>

<h2>Frigiliana</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~1 h bussilla (vaihto Nerjassa)</li>
  <li>Espanjan kaunein valkoinen kylä (palkittu!)</li>
  <li>Yhdistä Nerjan kanssa samalle päivälle</li>
</ul>
<p>
Tunnelmallinen, valokuvauksellinen – täydellinen puolen päivän kohde.
</p>

<h2>Fuengirola</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~35 min junalla</li>
  <li>Helppo päiväretki rannoille</li>
  <li>Bioparc-eläintarha (lapsille!)</li>
  <li>Markkinat tiistaisin ja lauantaisin</li>
</ul>
<p>
<a href="/espanja/fuengirola">Lue lisää Fuengirolasta →</a>
</p>

<h2>Marbella</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~45 min autolla</li>
  <li>Luksusrannikko ja Puerto Banús</li>
  <li>Viehättävä vanhakaupunki (Casco Antiguo)</li>
</ul>

<h2>El Caminito del Rey</h2>

<ul>
  <li><strong>Etäisyys:</strong> ~1 h autolla</li>
  <li>Kuuluisa kallioseinämäpolku</li>
  <li><strong>Varaa liput etukäteen!</strong></li>
  <li>Ei sovellu korkeanpaikankammoisille</li>
</ul>

<h2>Liikkuminen päiväretkille</h2>

<h3>Juna (C1-lähijuna)</h3>
<p>
Paras tapa Fuengirolaan ja Costa del Solin rannikolle. Lähtee María Zambranolta.
</p>

<h3>Bussi (ALSA)</h3>
<p>
Granadaan, Rondaan, Nerjaan. Linja-autoasema on lähellä juna-asemaa.
</p>

<h3>Vuokra-auto</h3>
<p>
Paras vaihtoehto Rondaan, Frigilianaan ja Caminito del Reylle.
<AffiliateLink link={transport.carRental} />
</p>

<h2>Vinkkejä</h2>

<ul>
  <li><strong>Alhambra:</strong> Varaa liput 2–4 viikkoa etukäteen</li>
  <li><strong>Ajoitus:</strong> Lähde aamulla – ehdit nähdä enemmän</li>
  <li><strong>Vesi:</strong> Ota mukaan, erityisesti kesällä</li>
</ul>

<p>
<a href="/espanja/malaga/liikkuminen">← Liikkuminen</a>
</p>

<p>
<a href="/espanja/malaga">← Takaisin Málagaan</a>
</p>
