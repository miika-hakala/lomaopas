<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Teneriffa – Liikkuminen | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Opas liikkumiseen Teneriffassa. Näin pääset lentokentältä ja käytät junaa, busseja ja takseja. Katso myös vinkit autonvuokraukseen ja päiväretkiin."
  />
</svelte:head>

<h1>Liikkuminen Teneriffalla</h1>

<p>
	Teneriffan suuren koon ja monipuolisen maaston vuoksi liikkumiseen on useita hyviä
	vaihtoehtoja. Lomakohteiden sisällä pärjää kävellen, mutta saaren muihin osiin tutustuminen
	vaatii moottoroitua kulkupeliä.
</p>

<h2>Saapuminen lentokentältä</h2>

<p>
	Teneriffalla on kaksi kansainvälistä lentokenttää: eteläinen (TFS, Reina Sofía) ja pohjoinen
	(TFN, Los Rodeos). Suurin osa Suomesta saapuvista lomalennoista laskeutuu eteläiselle
	TFS-kentälle.
</p>

<h3>Eteläinen lentokenttä (TFS)</h3>
<p>
	TFS on pääasiallinen turistikenttä, joka sijaitsee kätevästi lähellä etelän lomakohteita.
</p>
<ul>
	<li>
		<strong>Bussi:</strong> Vihreät TITSA-bussit ovat edullisin tapa siirtyä. Linja 40 on
		nopea yhteys Costa Adejeen ja Los Cristianosiin (n. 4€). Linja 111 jatkaa pääkaupunki
		Santa Cruziin.
	</li>
	<li>
		<strong>Taksi tai yksityiskuljetus:</strong> Taksi Costa Adejeen tai Los Cristianosiin maksaa
		noin 25–30 €. Etukäteen varattu kuljetus voi olla kätevä. <AffiliateLink
			link={transport.airportTransfer}
		/>
	</li>
</ul>

<h3>Pohjoinen lentokenttä (TFN)</h3>
<p>
	TFN palvelee pääasiassa saarten välisiä ja Espanjan sisäisiä lentoja. Se on paras kenttä, jos
	majoitut pohjoisessa.
</p>
<ul>
	<li>
		<strong>Bussi:</strong> Linja 30 on suora yhteys Puerto de la Cruziin (n. 5 €) ja linja 20
		pääkaupunki Santa Cruziin.
	</li>
	<li><strong>Taksi:</strong> Taksimatka Puerto de la Cruziin maksaa noin 25–30 €.</li>
</ul>

<h2>Liikkuminen saarella</h2>

<h3>Kävely</h3>
<p>
	Etelän lomakohteet – Los Cristianos, Playa de las Américas ja Costa Adeje – ovat käytännössä
	kasvaneet yhteen. Niitä yhdistää yli 10 kilometriä pitkä rantabulevardi, jota pitkin on
	miellyttävä kävellä.
</p>

<h3>Bussi (TITSA)</h3>
<p>
	Saaren julkinen liikenne on vihreiden TITSA-bussien varassa, ja verkosto on erittäin kattava.
	Edullisin tapa matkustaa on hankkia ladattava <strong>Ten+ -matkakortti</strong>, jolla
	matkojen hinnasta saa merkittävän alennuksen. Kertalippuja voi ostaa myös suoraan
	kuljettajalta.
</p>

<h3>Taksi</h3>
<p>
	Viralliset valkoiset taksit ovat yleisiä ja luotettavia. Hinnat ovat mittarin mukaiset ja
	eurooppalaista keskitasoa. Huomioi, että suositut kyytipalvelut kuten Uber tai Bolt eivät
	toimi saarella.
</p>

<h3>Autoilu ja vuokra-auto</h3>
<p>
	Autonvuokraus on ehdottomasti suositeltavin tapa kokea Teneriffan monimuotoisuus, kuten
	Teiden kansallispuisto ja Mascan vuoristokylä. Ole kuitenkin erityisen varovainen
	vuoristoteillä, jotka voivat olla kapeita ja mutkaisia. Lue lisää <a
		href="/kanariansaaret/teneriffa/paivaretket">vinkkejämme päiväretkiin</a
	>.
</p>

<p>
	<AffiliateLink link={transport.carRental} />
</p>

<p>
	<a href="/kanariansaaret/teneriffa/missa-asua">Seuraavaksi: Missä asua →</a>
</p>

<p><a href="/kanariansaaret/teneriffa">← Takaisin Teneriffa-oppaaseen</a></p>

