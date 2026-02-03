<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { tickets, activities } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Benalmádena – Nähtävyydet | Lomaopas.fi</title>
  <meta
    name="description"
    content="Benalmádenan nähtävyydet: Puerto Marina, köysirata, Pueblo, Selwo Marina, Tivoli World ja Sea Life. Vinkit perheille ja pariskunnille."
  />
</svelte:head>

<h1>Nähtävyydet Benalmádenassa</h1>

<p>
Benalmádena tarjoaa enemmän nähtävyyksiä ja aktiviteetteja kuin mikään muu
Costa del Solin kohde. Perheille Selwo Marina, Tivoli World ja Sea Life,
pariskunnille Puerto Marina ja Pueblo.
</p>

<h2>Puerto Marina (palkittu satama)</h2>

<ul>
  <li>Yksi maailman kauneimmista venesatamista</li>
  <li>Maurilaistyylinen arkkitehtuuri</li>
  <li><a href="/espanja/benalmadena/ravintolat">Ravintolat</a>, baarit, myymälät</li>
  <li>Illalla valaistuna erittäin tunnelmallinen</li>
  <li>Ilmainen sisäänpääsy</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Puerto Marina Benalmádena</code>
</p>

<h2>Teleférico (köysirata)</h2>

<ul>
  <li>Nousee Monte Calamorron huipulle (769 m)</li>
  <li>Upeat panoraamanäkymät – Afrikan rannikko näkyy selkeällä säällä</li>
  <li>Lintushow ja kävelyreittejä huipulla</li>
  <li>Viileämpää ylhäällä – ota lämmin kerros mukaan!</li>
</ul>
<p>
<AffiliateLink link={tickets.teleferico} />
</p>

<h2>Benalmádena Pueblo (valkoinen kylä)</h2>

<ul>
  <li>Aito andalusialainen vuoristokylä</li>
  <li>Valkoiset talot, kukkivat pihat, kapeat kujat</li>
  <li>Upeat näkymät merelle ja vuorille</li>
  <li>Paras aika: aamupäivä tai auringonlasku</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Benalmádena Pueblo</code>
</p>

<h2>Stupa de la Iluminación</h2>

<ul>
  <li>Euroopan suurin buddhalainen stupa (33 m)</li>
  <li>Rauhallinen, meditoiva tunnelma</li>
  <li>Upeat näkymät</li>
  <li>Ilmainen sisäänpääsy</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Stupa Benalmádena</code>
</p>

<h2>Castillo de Bil-Bil</h2>

<ul>
  <li>Maurilainen linna <a href="/espanja/benalmadena/rannat">rannalla</a> (1930-luku)</li>
  <li>Kulttuuritilaisuuksia ja näyttelyitä</li>
  <li>Upea valokuvakohde</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Castillo Bil-Bil Benalmádena</code>
</p>

<h2>Mariposario (perhospuutarha)</h2>

<ul>
  <li>Trooppisia perhosia ja eksoottisia kasveja</li>
  <li>Sopii kaikenikäisille</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Mariposario Benalmádena</code>
</p>

<h2>Lasten kanssa</h2>

<h3>Selwo Marina</h3>
<ul>
  <li>Delfinaario ja merileijonien show</li>
  <li>Pingviinit, flamingot, merisaukot</li>
  <li>Koko päivän kohde</li>
</ul>
<p>
<AffiliateLink link={tickets.selwoMarina} />
</p>

<h3>Tivoli World</h3>
<ul>
  <li>Huvipuisto Arroyo de la Mielissä</li>
  <li>Vuoristoratoja, karuselleja, show'ta</li>
  <li>Sopii kaikille ikäryhmille</li>
  <li>Illalla valaistuna tunnelmallinen</li>
</ul>
<p>
<AffiliateLink link={tickets.tivoliWorld} />
</p>

<h3>Sea Life Benalmádena</h3>
<ul>
  <li>Akvaario Puerto Marinan vieressä</li>
  <li>Hait, meritähdet, kosketusallas lapsille</li>
</ul>
<p>
<AffiliateLink link={tickets.seaLife} />
</p>

<h3>Aqualand Torremolinos</h3>
<ul>
  <li>Vesipuisto naapurikaupungissa (~10 min)</li>
  <li>Liukumäkiä kaikille tasoille</li>
</ul>
<p>
<AffiliateLink link={tickets.aqualand} />
</p>

<p>
<AffiliateLink link={activities.benalmadena} showDisclosure={false} />
</p>

<p>
<a href="/espanja/benalmadena/ravintolat">← Ravintolat</a> |
<a href="/espanja/benalmadena/paivaretket">Päiväretket →</a>
</p>

<p>
<a href="/espanja/benalmadena">← Takaisin Benalmádenaan</a>
</p>
