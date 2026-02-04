<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { transport } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Gran Canaria – Liikkuminen | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Opas liikkumiseen Gran Canariassa. Näin pääset lentokentältä ja käytät junaa, busseja ja takseja. Katso myös vinkit autonvuokraukseen ja päiväretkiin."
  />
</svelte:head>

<h1>Liikkuminen Gran Canariassa</h1>

<p>
	Gran Canarialla liikkuminen on vaivatonta, ja saaren moniin osiin on hyvät yhteydet.
	Lomakohteiden sisällä pärjää usein kävellen, mutta saaren muihin osiin tutustumiseen on
	useita hyviä vaihtoehtoja.
</p>

<h2>Saapuminen lentokentältä</h2>

<p>
	Gran Canarian kansainvälinen lentokenttä (LPA) sijaitsee saaren itärannikolla, noin 25–30
	minuutin ajomatkan päässä etelän suosituimmista lomakohteista.
</p>

<h3>Bussi (Guagua)</h3>
<p>
	Kätevin ja edullisin tapa siirtyä majoitukseen on saaren kattava sinisten "Global"-bussien
	verkosto. Lipun voi ostaa suoraan kuljettajalta.
</p>
<ul>
	<li>
		<strong>Etelän lomakohteet (Maspalomas, Playa del Inglés):</strong> Linjat 66 ja 90. Matka
		kestää n. 30–40 min ja maksaa n. 4 €.
	</li>
	<li>
		<strong>Lounaisrannikko (Puerto Rico, Puerto de Mogán):</strong> Linja 91. Matka Mogániin
		kestää n. tunnin ja maksaa n. 7 €.
	</li>
	<li>
		<strong>Pääkaupunki Las Palmas:</strong> Linja 60. Matka kestää n. 30 min ja maksaa n. 3 €.
	</li>
</ul>

<h3>Taksi tai yksityiskuljetus</h3>
<p>
	Taksi on nopein ja vaivattomin vaihtoehto. Hinta suosituimpiin etelän kohteisiin on noin
	40–50 €. Voit myös varata etukäteen jaetun tai yksityisen kuljetuksen, mikä voi olla hyvä
	vaihtoehto isommalle ryhmälle. <AffiliateLink link={transport.airportTransfer} />
</p>

<h2>Liikkuminen saarella</h2>

<h3>Kävely</h3>
<p>
	Useimmat etelän lomakohteet, kuten Playa del Inglés, Maspalomas ja Meloneras, on suunniteltu
	käveltäviksi. Rantabulevardit (Paseo Marítimo) yhdistävät alueita ja tarjoavat upeita
	maisemia kävelylenkeille.
</p>

<h3>Bussit</h3>
<p>
	Saaren laajuinen Global-bussiverkosto on edullinen ja tehokas tapa nähdä saarta. Las
	Palmasin sisällä liikennöivät keltaiset Guaguas Municipales -bussit. Reitit ja aikataulut
	löytyvät parhaiten yhtiöiden omista sovelluksista (GuaguasGLOBAL ja GuaguasLPA).
</p>

<h3>Taksit</h3>
<p>
	Taksit ovat yleisiä ja luotettavia. Viralliset taksit ovat valkoisia, ja ne ovat hyvä
	vaihtoehto lyhyille siirtymille lomakohteiden sisällä. Huomioi, että Uber ja Bolt eivät
	toimi saarella.
</p>

<h3>Autoilu ja vuokra-auto</h3>
<p>
	Auton vuokraaminen on paras tapa tutustua saaren piilotettuihin helmiin, kuten vuoristokyliin
	ja syrjäisempiin rantoihin. Polttoaine on yleensä Suomea edullisempaa, mutta huomioi, että
	vuoristotiet voivat olla kapeita ja mutkaisia. Lue lisää
	<a href="/kanariansaaret/gran-canaria/paivaretket">vinkkejämme päiväretkiin</a>.
</p>

<p>
	<AffiliateLink link={transport.carRental} />
</p>

<p>
	<a href="/kanariansaaret/gran-canaria/missa-asua">Seuraavaksi: Missä asua →</a>
</p>

<p>
	<a href="/kanariansaaret/gran-canaria">← Takaisin Gran Canaria -oppaaseen</a>
</p>
