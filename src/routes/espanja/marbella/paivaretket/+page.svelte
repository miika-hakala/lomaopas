<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { activities, transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Päiväretket | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Päiväretket Marbellasta: Ronda, Gibraltar, Málaga, Benalmádena, Torremolinos ja Fuengirola. Vinkit liikkumiseen ja retkien suunnitteluun."
  />
</svelte:head>

<h1>Päiväretket Marbellasta</h1>

<p>
Marbella on erinomainen tukikohta päiväretkille. Lähialueella on sekä
rannikkokaupunkeja että sisämaan upeita kohteita, joihin pääsee bussilla tai
vuokra-autolla.
</p>

<p>
Jos haluat pysyä kaupungissa, katso myös <a href="/espanja/marbella/nahtavyydet">Marbellan nähtävyydet</a>.
</p>

<h2>Suosituimmat päiväretkikohteet</h2>

<h3>Ronda</h3>
<p>
  Ikoninen rotkokaupunki ja Puente Nuevo -silta. Yksi Andalusian parhaista
  päiväretkistä.
  <AffiliateLink link={activities.ronda} />
</p>

<h3>Gibraltar</h3>
<p>
  Brittitunnelmaa, apinat ja upeat näkymät. Ota passi tai henkilökortti mukaan
  rajalle.
</p>

<h3>Málaga</h3>
<p>
  Kulttuuria, museoita ja vilkas vanhakaupunki. Bussilla tai autolla noin
  45–60 minuuttia.
  <a href="/espanja/malaga">Lue lisää Málagasta →</a>
</p>

<h3>Benalmádena</h3>
<p>
  Monipuolinen perhekohde Puerto Marinan sataman ja köysiradan ansiosta.
  <a href="/espanja/benalmadena">Lue lisää Benalmádenasta →</a>
  <AffiliateLink link={activities.benalmadena} />
</p>

<h3>Torremolinos</h3>
<p>
  Pitkät rannat, rennot rantabaarit ja helppo päiväretki rannikkoa pitkin.
  <a href="/espanja/torremolinos">Lue lisää Torremolinoksesta →</a>
  <AffiliateLink link={activities.torremolinos} />
</p>

<h3>Fuengirola</h3>
<p>
  Helppo retki rannoille ja rantabulevardille. Junayhteys toimii Málagan kautta.
  <a href="/espanja/fuengirola">Lue lisää Fuengirolasta →</a>
</p>

<h3>Mijas Pueblo</h3>
<p>
  Andalusialainen valkoinen kylä, hyvä lyhyempi retki.
  <AffiliateLink link={activities.mijas} />
</p>

<h2>Liikkuminen retkille</h2>
<p>Vaihtoehtoja on useita, ja lisätietoa löydät <a href="/espanja/marbella/liikkuminen">liikkuminen Marbellassa</a> -sivultamme.</p>
<ul>
  <li><strong>Bussi:</strong> Helppo vaihtoehto Málagaan, Rondaan ja rannikon kohteisiin.</li>
  <li><strong>Auto:</strong> Eniten vapautta, erityisesti Rondayn ja Gibraltarille. <AffiliateLink link={transport.carRental} /></li>
  <li><strong>Juna:</strong> Ei suoraa junaa Marbellaan, mutta junalla pääsee Málagasta rannikkokaupunkeihin.</li>
</ul>

<h2>Vinkkejä päiväretkille</h2>
<ul>
  <li><strong>Ajoitus:</strong> Lähde liikkeelle aamulla ja vältä ruuhkat.</li>
  <li><strong>Liput:</strong> Suosituimpiin kohteisiin liput kannattaa varata etukäteen.</li>
  <li><strong>Kuumuus:</strong> Ota mukaan vettä, hattu ja aurinkosuoja.</li>
</ul>

<p>
  <AffiliateLink link={activities.marbella} showDisclosure={false} />
</p>

<p>
  <a href="/espanja/marbella">← Takaisin Marbellaan</a>
</p>
