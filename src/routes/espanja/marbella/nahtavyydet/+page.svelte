<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { activities } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Marbella – Nähtävyydet | Matkaopas Espanjaan</title>
  <meta
    name="description"
    content="Marbellan nähtävyydet: Casco Antiguo, Plaza de los Naranjos, Avenida del Mar, Paseo Marítimo ja Puerto Banús. Vinkit kävelyyn ja aktiviteetteihin."
  />
</svelte:head>

<h1>Marbellan nähtävyydet</h1>

<p>
Marbella tunnetaan rannoistaan, mutta kaupungissa on myös paljon nähtävää.
Vanhakaupunki, rantabulevardi ja satama-alueet sopivat erityisesti kävelyyn ja
rennon päivänviettoon.
</p>

<h2>Keskeiset nähtävyydet</h2>

<h3>Casco Antiguo & Plaza de los Naranjos</h3>
<p>
  Marbellan sydän: valkoisia taloja, pieniä aukioita ja appelsiinipuita. Täydellinen
  paikka kahvitauolle ja iltakävelylle.
</p>

<h3>Avenida del Mar (Dalí-patsaat)</h3>
<p>
  Palmujen keskellä kulkeva kävelyalue, jossa on ulkoilmapatsaita ja merinäköala.
</p>

<h3>Paseo Marítimo</h3>
<p>
  Rantabulevardi yhdistää keskustan ja Golden Milen. Reitti on helppo kävellä,
  ja varrella on kahviloita sekä näkymiä rannalle.
</p>

<h3>Puerto Banús</h3>
<p>
  Tunnettu satama, jossa voi ihailla jahteja, nauttia ravintoloista ja kierrellä
  putiikeissa. Hyvä kohde iltakävelylle.
</p>

<h3>Parque de la Alameda</h3>
<p>
  Varjoisa puisto vanhankaupungin ja rannan välissä. Sopii taukopaikaksi kuumina
  päivinä.
</p>

<h3>La Cañada</h3>
<p>
  Suuri ostoskeskus, joka toimii hyvänä vaihtoehtona sadepäivänä. Helppo
  saavuttaa bussilla tai taksilla.
</p>

<h2>Tekemistä ja aktiviteetteja</h2>
<ul>
  <li><strong>Kävelyreitit:</strong> Vanhakaupunki → Avenida del Mar → Paseo Marítimo.</li>
  <li><strong>Auringonlasku:</strong> Golden Milen rantabulevardilta parhaat näkymät.</li>
  <li><strong>Aktiviteetit:</strong> <AffiliateLink link={activities.marbella} showDisclosure={false} /></li>
</ul>

<p>
Jos haluat nähdä lisää Andalusiaa, katso <a href="/espanja/marbella/paivaretket">päiväretket Marbellasta</a>.
</p>

<p>
  <a href="/espanja/marbella/paivaretket">Päiväretket →</a>
</p>

<p>
  <a href="/espanja/marbella">← Takaisin Marbellaan</a>
</p>
