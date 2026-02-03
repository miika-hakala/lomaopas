<svelte:head>
  <title>{{CITY_NAME}} – Usein kysytyt kysymykset | Lomaopas.fi</title>
  <meta
    name="description"
    content="Vastaukset yleisimpiin kysymyksiin {{CITY_NAME_ELATIVE}}. {{FAQ_TOPICS}}."
  />
</svelte:head>

<h1>Usein kysytyt kysymykset – {{CITY_NAME}}</h1>

<p>
Vastauksia yleisimpiin kysymyksiin, joita {{CITY_NAME_ILLATIVE}} matkustavat pohtivat.
</p>

<!-- VAKIO-FAQ (kaikille kaupungeille) -->

<h2>Onko {{CITY_NAME}} turvallinen?</h2>
<p>
{{SAFETY_ANSWER}}
</p>

<h2>Pärjääkö {{CITY_NAME_INESSIVE}} englannilla?</h2>
<p>
{{LANGUAGE_ANSWER}}
</p>

<h2>Mikä on paras aika matkustaa {{CITY_NAME_ILLATIVE}}?</h2>
<p>
Huhti–kesäkuu ja syys–lokakuu. Kevät ja syksy tarjoavat miellyttävän lämpötilan
(20–28°C). Kesällä kuuma (30–35°C).
</p>

<h2>Tarvitseeko {{CITY_NAME_INESSIVE}} autoa?</h2>
<p>
{{CAR_ANSWER}}
</p>

<h2>Onko {{CITY_NAME}} kallis?</h2>
<p>
{{PRICE_ANSWER}}
</p>

<h2>Kortti vai käteinen?</h2>
<p>
Kortti käy lähes kaikkialla (Visa, Mastercard). Pidä silti mukana ~50 €
käteistä pieniä ostoksia varten.
</p>

<!-- KAUPUNKIKOHTAISET FAQ -->
{{CITY_SPECIFIC_FAQS}}

<h2>Checklista ennen matkaa</h2>

<ul>
  <li>Matkavakuutus voimassa</li>
  <li>Google Maps offline ({{CITY_NAME}}, Málaga)</li>
  <li>Renfe-sovellus ladattuna (junaliput)</li>
  <li>Eurooppalainen sairaanhoitokortti mukana</li>
  {{CITY_SPECIFIC_CHECKLIST}}
</ul>

<p>
<a href="/espanja/{{city_slug}}/paivaretket">← Päiväretket</a>
</p>

<p>
<a href="/espanja/{{city_slug}}">← Takaisin {{CITY_NAME_ILLATIVE_SHORT}}</a>
</p>

<!--
PDF-MAPPING: Osio 11 (FAQ) + Osio 9 (Käytännön asiat, osittain)

SIJAMUODOT:
- ILLATIVE: mihin? (Nerjaan, Málagaan)
- ELATIVE: mistä? (Nerjasta, Málagasta)
- INESSIVE: missä? (Nerjassa, Málagassa)
-->
