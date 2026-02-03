<script lang="ts">
  import AffiliateLink from '$lib/affiliates/AffiliateLink.svelte';
  import { accommodation } from '$lib/affiliates/links';
</script>

<svelte:head>
  <title>Málaga – Missä asua | Lomaopas.fi</title>
  <meta
    name="description"
    content="Missä kannattaa majoittua Málagassa? Vertailu alueista: Centro Histórico, Soho, La Malagueta ja El Palo. Vinkit ensikertalaisille ja perheille."
  />
</svelte:head>

<h1>Missä asua Málagassa</h1>

<p>
Málagan alueet eroavat toisistaan selvästi. Valinta riippuu siitä, haluatko olla
keskellä kaupunkielämää, lähellä rantaa vai rauhallisemmassa ympäristössä.
</p>

<h2>Centro Histórico (Vanhakaupunki)</h2>

<ul>
  <li><strong>Kenelle:</strong> Ensikertalaiset, kulttuurista kiinnostuneet</li>
  <li><strong>Plussat:</strong> Kaikki nähtävyydet, ravintolat ja tunnelma kävelyetäisyydellä</li>
  <li><strong>Miinukset:</strong> Vilkas, ei suoraa rantaa, kalliimpi</li>
</ul>
<p>
Paras valinta, jos haluat kokea Málagan sydämen. Museo, katedraali ja tapas-baarit
ovat ovesi takana.
</p>

<h2>Soho (Taidealue)</h2>

<ul>
  <li><strong>Kenelle:</strong> Nuoret aikuiset, taiteesta kiinnostuneet</li>
  <li><strong>Plussat:</strong> Katutaide, trendikkäät ravintolat, lähellä keskustaa</li>
  <li><strong>Miinukset:</strong> Ei rantaa</li>
</ul>
<p>
Málagan "Brooklyn" – hipsterit, galleria ja street art. Pompidou-keskus on vieressä.
</p>

<h2>La Malagueta (Rantaalue)</h2>

<ul>
  <li><strong>Kenelle:</strong> Rantaa ja keskustaa arvostavat</li>
  <li><strong>Plussat:</strong> Kaupunkiranta kävelyetäisyydellä keskustasta</li>
  <li><strong>Miinukset:</strong> Urbaanimpi ranta, ei tropiikin tunnelmaa</li>
</ul>
<p>
Hyvä kompromissi: ranta aamulla, museo iltapäivällä.
</p>

<h2>El Palo / Pedregalejo</h2>

<ul>
  <li><strong>Kenelle:</strong> Aitoa espanjalaista tunnelmaa hakevat, perheet</li>
  <li><strong>Plussat:</strong> Paikalliset rannat, erinomaiset chiringuitos (espetos!)</li>
  <li><strong>Miinukset:</strong> Kauempana keskustasta (bussi ~20 min)</li>
</ul>
<p>
Jos haluat maistaa oikeaa Málagaa – paikallisia rantoja ja sardiineja – tämä on alue.
</p>

<h2>Vertailu</h2>

<table>
  <thead>
    <tr>
      <th>Alue</th>
      <th>Keskusta</th>
      <th>Ranta</th>
      <th>Hintataso</th>
      <th>Tunnelma</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Centro Histórico</td>
      <td>★★★</td>
      <td>–</td>
      <td>€€€</td>
      <td>Vilkas, historiallinen</td>
    </tr>
    <tr>
      <td>Soho</td>
      <td>★★★</td>
      <td>–</td>
      <td>€€</td>
      <td>Trendikäs, taide</td>
    </tr>
    <tr>
      <td>La Malagueta</td>
      <td>★★</td>
      <td>★★</td>
      <td>€€</td>
      <td>Rento, urbaani</td>
    </tr>
    <tr>
      <td>El Palo</td>
      <td>★</td>
      <td>★★★</td>
      <td>€</td>
      <td>Paikallinen, aito</td>
    </tr>
  </tbody>
</table>

<p>
<AffiliateLink link={accommodation.malaga} />
</p>

<p>
<a href="/espanja/malaga/rannat">Lue lisää rannoista →</a>
</p>

<p>
<a href="/espanja/malaga">← Takaisin Málagaan</a>
</p>
