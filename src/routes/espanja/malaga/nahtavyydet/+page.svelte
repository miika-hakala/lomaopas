<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { tickets, activities } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Málaga – Nähtävyydet | Lomaopas.fi</title>
  <meta
    name="description"
    content="Málagan parhaat nähtävyydet: Alcazaba, Picasso-museo, Gibralfaro, katedraali ja Pompidou. Vinkit lippuihin ja parhaisiin aikoihin."
  />
</svelte:head>

<h1>Málagan nähtävyydet</h1>

<p>
Málaga on kulttuurikaupunki, jossa on yllättävän paljon nähtävää. Picasson
syntymäkaupunki tarjoaa museoita, historiallisia linnoituksia ja modernin taiteen
keskuksia – kaikki kävelyetäisyydellä toisistaan.
</p>

<h2>Alcazaba</h2>

<ul>
  <li>Mauriaikainen linnoitus mäellä (700-luku)</li>
  <li>Upeat näkymät kaupunkiin ja merelle</li>
  <li>Yhdistettävissä Gibralfaron linnaan (polku)</li>
  <li><strong>Hinta:</strong> ~3,50 € (yhdistelmälippu Gibralfaro ~5,50 €)</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Alcazaba Málaga</code>
<AffiliateLink link={tickets.alcazaba} />
</p>

<h2>Museo Picasso Málaga</h2>

<ul>
  <li>Picasso syntyi Málagassa – tämä on hänen museonsa</li>
  <li>Yli 200 teosta</li>
  <li><strong>Varaa liput etukäteen</strong> – suosittu!</li>
  <li><strong>Hinta:</strong> ~12 €</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Museo Picasso Málaga</code>
<AffiliateLink link={tickets.picassoMuseum} />
</p>

<h2>Gibralfaro-linna</h2>

<ul>
  <li>Korkeimmalla mäellä – parhaat näkymät Málagaan</li>
  <li>Reipas nousu jalan tai bussi nro 35</li>
  <li>Yhdistä Alcazabaan (polku yhdistää)</li>
</ul>
<p>
<strong>Vinkki:</strong> Mene auringonlaskuun. Näkymät ovat huikeat.
<strong>Hakusana:</strong> <code>Castillo Gibralfaro</code>
</p>

<h2>Catedral de Málaga ("La Manquita")</h2>

<ul>
  <li>Renessanssikatedraali – toinen torni jäi rakentamatta</li>
  <li>Katolitorni avoinna nousuun (upeat näkymät)</li>
  <li><strong>Hinta:</strong> ~6 €</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Catedral Málaga</code>
</p>

<h2>Centre Pompidou Málaga</h2>

<ul>
  <li>Moderni taide värikuutiossa satamassa</li>
  <li>Pariisin Pompidoun sivutoimipiste</li>
  <li><strong>Hinta:</strong> ~9 €</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Centre Pompidou Málaga</code>
</p>

<h2>Teatro Romano</h2>

<ul>
  <li>Roomalainen teatteri Alcazaban juurella</li>
  <li>Ilmainen sisäänpääsy</li>
  <li>Tulkintakeskus vieressä</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Teatro Romano Málaga</code>
</p>

<h2>Muelle Uno (Satama)</h2>

<ul>
  <li>Moderni satama-alue kävelyyn ja shoppailuun</li>
  <li>Ravintolat, kahvilat, näkymät</li>
  <li>Ilmainen</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>Muelle Uno Málaga</code>
</p>

<h2>Calle Larios</h2>

<ul>
  <li>Málagan pääkävelykatu</li>
  <li>Ostokset, kahvilat, katuesiintyjät</li>
  <li>Jouluvalaistus legendaarinen (joulu)</li>
</ul>

<h2>Vinkkejä</h2>

<ul>
  <li><strong>Varaa liput:</strong> Picasso-museoon ja Alhambraan (Granada) viikkoja etukäteen</li>
  <li><strong>Paras aika:</strong> Aamulla tai iltapäivällä – vältä keskipäivän kuumuutta</li>
  <li><strong>Yhdistä:</strong> Alcazaba + Gibralfaro + Teatro Romano samalle päivälle</li>
</ul>

<p>
<AffiliateLink link={activities.malagaDayTrips} showDisclosure={false} />
</p>

<p>
<a href="/espanja/malaga/ravintolat">← Ravintolat</a> |
<a href="/espanja/malaga/paivaretket">Päiväretket →</a>
</p>

<p>
<a href="/espanja/malaga">← Takaisin Málagaan</a>
</p>
