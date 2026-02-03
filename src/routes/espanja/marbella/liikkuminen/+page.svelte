<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Liikkuminen | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Opas liikkumiseen Marbellassa. Näin pääset lentokentältä, käytät busseja ja takseja sekä liikut kävellen Golden Milella ja vanhassakaupungissa."
  />
</svelte:head>

<h1>Liikkuminen Marbellassa</h1>

<p>
Marbella on kompakti rantakaupunki, jossa vanhakaupunki, rantabulevardi ja
satama-alueet ovat helposti käveltävissä. Alueiden välillä liikkuminen onnistuu
myös busseilla ja takseilla.
</p>

<h2>Saapuminen Málagan lentokentältä</h2>

<p>
Lentokentältä Marbellaan pääsee parhaiten bussilla, taksilla tai vuokra-autolla.
</p>

<ul>
  <li><strong>Suora bussi</strong> – kätevin vaihtoehto, matka noin 45–70 minuuttia</li>
  <li><strong>Taksi tai kuljetus</strong> – suora ja helppo. <AffiliateLink link={transport.airportTransfer} /></li>
  <li><strong>Vuokra-auto</strong> – hyvä, jos aiot tehdä useita päiväretkiä</li>
</ul>

<h2>Kävellen</h2>

<p>
Vanhakaupunki (Casco Antiguo), Plaza de los Naranjos ja Paseo Marítimo ovat
parhaita koettavia kävellen. Kävely on myös helpoin tapa nauttia Golden Milestä.
</p>

<h2>Bussit</h2>

<p>
Paikallisbussit yhdistävät keskustan, Puerto Banúsin ja San Pedron alueet.
Bussilla pääset myös Marbellan linja-autoasemalle, josta lähtevät kaukobussit
Málagaan ja muihin kohteisiin.
</p>

<h2>Taksit ja sovellukset</h2>

<p>
Taksit ovat luotettavia, erityisesti iltaisin. Sovelluspohjaiset kyytipalvelut
voivat toimia sesongista riippuen.
</p>

<h2>Autoilu</h2>

<p>
Auton vuokraaminen on järkevää, jos aiot tehdä retkiä Rondayn, Gibraltarille tai
sisämaahan. Keskustassa pysäköinti voi olla haastavaa sesongin aikaan. Lue lisää
<a href="/espanja/marbella/paivaretket">päiväretkistä Marbellasta</a>.
</p>

<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/marbella/paivaretket">Päiväretket →</a>
</p>

<p>
<a href="/espanja/marbella">← Takaisin Marbellaan</a>
</p>
