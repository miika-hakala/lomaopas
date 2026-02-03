<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Liikkuminen | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Opas liikkumiseen Marbellassa. Näin pääset lentokentältä ja käytät junaa, busseja ja takseja. Katso myös vinkit autonvuokraukseen ja päiväretkiin."
  />
</svelte:head>

<h1>Liikkuminen Marbellassa</h1>

<p>
Marbellassa liikkuminen on helppoa ja edullista. Kaupunki on melko tasainen ja
sopii hyvin kävelyyn, mutta myös julkinen liikenne toimii luotettavasti.
</p>

<h2>Saapuminen lentokentältä</h2>

<p>
Málagan lentokentältä Marbellaan pääsee usealla tavalla:
</p>

<ul>
  <li><strong>Juna</strong> – nopein ja suosituin vaihtoehto, matka kestää noin 45 minuuttia</li>
  <li><strong>Taksi tai kuljetus</strong> – suora ja helppo. <AffiliateLink link={transport.airportTransfer} /></li>
  <li><strong>Vuokra-auto</strong> – hyvä vaihtoehto, jos aiot liikkua laajemmin</li>
</ul>

<h2>Juna</h2>

<p>
Paikallisjuna kulkee Marbellan ja Málagan välillä useita kertoja tunnissa.
Junalla pääsee kätevästi myös lentokentälle ja naapurikaupunkeihin.
</p>

<p>
Marbellassa on useita asemia, kuten keskustan ja Los Bolichesin alueilla.
</p>

<h2>Bussit</h2>

<p>
Paikallisbussit kulkevat kaupungin sisällä ja lähialueille. Bussit ovat
edullisia, mutta aikataulut voivat vaihdella erityisesti iltaisin.
</p>

<h2>Taksit ja sovellukset</h2>

<p>
Takseja on hyvin saatavilla, ja ne ovat luotettava tapa liikkua erityisesti
iltaisin. Myös sovelluspohjaiset kyytipalvelut toimivat alueella.
</p>

<h2>Autoilu</h2>

<p>
Auton vuokraaminen voi olla järkevää, jos suunnittelet päiväretkiä tai haluat
liikkua vapaammin. Keskustassa pysäköinti voi olla haastavaa, mutta parkkihalleja
on useita. Lue lisää <a href="/espanja/marbella/paivaretket">vinkkejämme päiväretkiin</a>.
</p>

<p>
<AffiliateLink link={transport.carRental} />
</p>

<p>
<a href="/espanja/marbella">← Takaisin Marbellaan</a>
</p>
