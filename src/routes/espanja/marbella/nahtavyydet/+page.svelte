<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { tickets, activities } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Nähtävyydet | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Löydä Marbellan parhaat nähtävyydet. Esittelyssä Castillo Sohail, Bioparc, satama ja rantapaseo. Vinkit kävelyretkiin ja parhaisiin elämyksiin."
  />
</svelte:head>

<h1>Marbellan nähtävyydet</h1>

<p>
  Vaikka Marbella on tunnettu ennen kaikkea rannoistaan, kaupungista ja sen lähialueilta löytyy myös paljon nähtävää ja koettavaa. Tässä muutamia suosituimpia kohteita.
</p>

<h2>Keskeiset nähtävyydet</h2>

<h3>Castillo de Sohail</h3>
<p>
  Tämä upea, 900-luvulta peräisin oleva linna vartioi kaupunkia joen suulla. Linna on itsessään vaikuttava näky, ja sen muurilta avautuvat hienot maisemat merelle ja vuorille. Se on myös loistava paikka aloittaa <a href="/espanja/marbella/paivaretket">päiväretki</a> läheiseen Mijasin kylään.
</p>

<h3>Paseo Marítimo (Rantapaseo)</h3>
<p>
  Marbellan kahdeksan kilometriä pitkä rantabulevardi on kaupungin sydän. Se on täydellinen paikka kävelylle, pyöräilylle tai vain ihmisten katseluun. Varella on lukemattomia kahviloita, baareja ja ravintoloita vieri vieressä <a href="/espanja/marbella/rannat">rantojen</a> kanssa.
</p>

<h3>Bioparc Marbella</h3>
<p>
  Moderni ja palkittu eläintarha, joka on erikoistunut uhanalaisiin lajeihin. Bioparc jäljittelee eläinten luonnollisia elinympäristöjä ja on suosittu kohde erityisesti lapsiperheiden keskuudessa.
  <AffiliateLink link={tickets.bioparc} />
</p>

<h3>Satama (Puerto Deportivo)</h3>
<p>
  Marbellan venesatama on vilkas paikka, jossa voi ihailla jahteja, nauttia ravintoloiden tarjonnasta tai lähteä veneretkelle. Satamasta lähtee risteilyjä delfiinien bongaukseen ja kalastusretkiä.
</p>

<h3>Markkinat</h3>
<p>
  Marbellassa järjestetään yhdet Costa del Solin suurimmista markkinoista. Tiistaisin ja lauantaisin Feria-alue täyttyy kojuista, joissa myydään kaikkea vaatteista ja keramiikasta paikallisiin herkkuihin.
</p>

<h2>Tekemistä ja aktiviteetteja</h2>
<ul>
  <li><strong>Kävelyreitit:</strong> Kiipeä Castillo Sohailin ympäristössä oleville kukkuloille tai kävele rantapaseo päästä päähän.</li>
  <li><strong>Auringonlaskut:</strong> Nauti upeista auringonlaskuista linnan raunioilta tai jostakin rantapaseon monista baareista.</li>
  <li><strong>Perhetekeminen:</strong> Bioparcin lisäksi lapsille on tarjolla vesipuisto (Aquamijas), minigolfia ja useita leikkipuistoja.</li>
</ul>

<h2>Vinkkejä</h2>
<ul>
  <li><strong>Paras aika vierailla:</strong> Nähtävyydet ovat ruuhkaisimpia keskikesällä. Kevät ja syksy ovat erinomaista aikaa tutustua kohteisiin rauhassa.</li>
  <li><strong>Liput:</strong> Suosituimpiin kohteisiin liput kannattaa ostaa etukäteen verkosta jonojen välttämiseksi. <AffiliateLink link={activities.marbellaDayTrips} showDisclosure={false} /></li>
</ul>

<p>
  <a href="/espanja/marbella">← Takaisin Marbellaan</a>
</p>