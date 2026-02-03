<svelte:head>
  <title>{{CITY_NAME}} – Rannat | Lomaopas.fi</title>
  <meta
    name="description"
    content="{{CITY_NAME}}: parhaat rannat. {{BEACHES_LIST}}. Vinkit palveluista ja aurinkotuoleista."
  />
</svelte:head>

<h1>{{CITY_NAME}} – Rannat</h1>

<p>
{{INTRO_PARAGRAPH}}
</p>

<!-- TOISTA PER RANTA -->
<h2>{{BEACH_NAME}} {{BEACH_RECOMMENDATION}}</h2>
<ul>
  <li>{{BEACH_FEATURE_1}}</li>
  <li>{{BEACH_FEATURE_2}}</li>
  <li>{{BEACH_FEATURE_3}}</li>
</ul>
<p>
<strong>Hakusana:</strong> <code>{{BEACH_SEARCH}}</code>
</p>
<!-- /TOISTA -->

<h2>Rantavinkit</h2>

<ul>
  <li><strong>Paras aika:</strong> 10–13 ja 16–19 (vältä keskipäivän aurinko)</li>
  <li><strong>Varkauksista:</strong> Älä jätä arvoesineitä rannalle</li>
  <li><strong>Vesi:</strong> Ota aina pullo mukaan</li>
  <li><strong>Aurinkotuolit:</strong> 6–10 € / päivä</li>
</ul>

<p>
<a href="/espanja/{{city_slug}}/missa-asua">← Missä asua (alueet)</a> |
<a href="/espanja/{{city_slug}}/ravintolat">Ravintolat →</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 5 (Rannat)
-->
