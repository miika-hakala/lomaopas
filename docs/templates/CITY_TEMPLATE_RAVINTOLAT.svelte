<svelte:head>
  <title>{{CITY_NAME}} – Ravintolat ja ruoka | Lomaopas.fi</title>
  <meta
    name="description"
    content="{{CITY_NAME}}: parhaat ravintolat ja paikalliset erikoisuudet. Hintataso, ruokailuajat ja vinkit."
  />
</svelte:head>

<h1>Ravintolat ja ruoka – {{CITY_NAME}}</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<h2>Hintataso</h2>

| Ateria | Hintahaarukka |
|--------|---------------|
| Kahvi | 1,50–2,50 € |
| Olut (caña) | 2–3 € |
| Tapas-annos | 3–8 € |
| Menú del día | 10–14 € |
| Illallinen | 15–35 € |

<h2>Ruokailuajat</h2>

<ul>
  <li><strong>Lounas:</strong> 13:00–16:00 (menú del día tarjolla)</li>
  <li><strong>Illallinen:</strong> 20:00–23:00</li>
  <li><strong>Siesta:</strong> 14–17 monet paikat kiinni</li>
</ul>

<h2>Parhaat alueet ruokailuun</h2>

<!-- TOISTA PER ALUE -->
<h3>{{DINING_AREA}}</h3>
<p>{{DINING_AREA_DESC}}</p>
<!-- /TOISTA -->

<h2>Paikalliset erikoisuudet</h2>

<ul>
  <li><strong>Espetos:</strong> Grillatut sardiinit bambukepillä</li>
  <li><strong>Gazpacho:</strong> Kylmä tomaattikeitto</li>
  <li><strong>Pescaíto frito:</strong> Friteerattu pikkukala</li>
  {{CITY_SPECIALTIES}}
</ul>

<h2>Vinkit</h2>

<ul>
  <li><strong>Menú del día:</strong> Paras hinta-laatusuhde</li>
  <li><strong>Vältä:</strong> Ravintoloita kuvamenuilla ovella</li>
  <li><strong>Tippi:</strong> Ei pakollinen, pyöristys riittää</li>
</ul>

<p>
<a href="/espanja/{{city_slug}}/rannat">← Rannat</a> |
<a href="/espanja/{{city_slug}}/nahtavyydet">Nähtävyydet →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 6 (Ravintolat ja ruoka)
-->
