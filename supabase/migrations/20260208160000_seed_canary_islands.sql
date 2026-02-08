-- ============================================================
-- Kanariansaaret content migration
-- Migrates hardcoded /kanariansaaret/ routes to dynamic system
-- ============================================================

-- 1. Destinations
-- Kanariansaaret (country/hub)
INSERT INTO destinations (slug, name, type, parent_id, published)
VALUES ('kanariansaaret', 'Kanariansaaret', 'country', NULL, true);

-- Gran Canaria (city/spoke under Kanariansaaret)
INSERT INTO destinations (slug, name, type, parent_id, published)
VALUES (
  'gran-canaria',
  'Gran Canaria',
  'city',
  (SELECT id FROM destinations WHERE slug = 'kanariansaaret'),
  true
);

-- Teneriffa (city/spoke under Kanariansaaret)
INSERT INTO destinations (slug, name, type, parent_id, published)
VALUES (
  'teneriffa',
  'Teneriffa',
  'city',
  (SELECT id FROM destinations WHERE slug = 'kanariansaaret'),
  true
);

-- 2. Categories (add only if missing)
INSERT INTO categories (slug, name)
VALUES
  ('rannat', 'Rannat'),
  ('nahtavyydet', 'Nähtävyydet'),
  ('ravintolat', 'Ravintolat'),
  ('liikkuminen', 'Liikkuminen'),
  ('majoitus', 'Majoitus'),
  ('paivaretket', 'Päiväretket'),
  ('faq', 'UKK')
ON CONFLICT (slug) DO NOTHING;

-- 3. Gran Canaria + Teneriffa articles
INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'rannat',
  'Gran Canarian rannat',
  $$
<p>
	Gran Canarian rannat ovat sen suurin vetonaula. Saaren 236 kilometrin rannikolta löytyy yli 60
	kilometriä rantaa, joista jokainen löytää suosikkinsa. Etelän kultaiset hiekka-aavikot ovat
	kuuluisimpia, mutta saarella on myös laavakivialtaita ja syrjäisiä pikkupoukamia.
</p>

<h2>Saaren tunnetuimmat rannat</h2>

<h3>Playa del Inglés ja Maspalomas</h3>
<p>
	Tämä on saaren suurin ja ikonisin ranta-alue, joka on todellisuudessa yksi valtava, kilometrien
	pituinen hiekkaranta. Ranta jaetaan yleensä kolmeen osaan:
</p>
<ul>
	<li>
		<strong>Playa del Inglésin pääty:</strong> Vilkas, täynnä palveluita, baareja ja
		vesiurheilumahdollisuuksia.
	</li>
	<li>
		<strong>Keskiosa (dyynit):</strong> Rauhallisempi ja luonnonläheisempi. Kuuluisien dyynien
		reunustama alue on suosittu nudistien ja rauhallisuutta etsivien keskuudessa.
	</li>
	<li>
		<strong>Maspalomasin pääty (Faro):</strong> Majakan juurella oleva osa on tyylikäs ja
		rauhallinen, ja se yhdistyy Melonerasin bulevardiin. Sopii hyvin perheille.
	</li>
</ul>

<h3>Playa de Amadores – "Rakastavaisten ranta"</h3>
<p>
	Puerto Ricon vieressä sijaitseva, puolikuun muotoinen ja hohtavan valkeahiekkainen ranta on
	monien mielestä saaren kaunein. Karibialta tuotu hiekka ja aallonmurtajien suojaama turkoosi
	vesi luovat uima-altaan omaiset olosuhteet, jotka sopivat täydellisesti lapsiperheille.
</p>

<h3>Puerto de Mogánin ranta</h3>
<p>
	Viehättävän satamakylän sydämessä sijaitseva kultahiekkainen ranta on pieni, mutta erittäin
	suojaisa. Vesi on tyyni ja kirkas, mikä tekee siitä erinomaisen paikan rauhalliseen uimiseen
	ja snorklaukseen.
</p>

<h3>Las Canteras (Las Palmas)</h3>
<p>
	Yksi maailman parhaista kaupunkirannoista. Noin kolme kilometriä pitkä ranta on paikallisten
	olohuone. Luonnollinen laavariutta (La Barra) suojaa suurinta osaa rannasta ja tekee siitä
	laguunimaisen rauhallisen. Rantabulevardi on täynnä elämää, kahviloita ja
	<a href="/kanariansaaret/gran-canaria/ravintolat">tapas-baareja</a>.
</p>

<h2>Rantavinkit</h2>

<ul>
	<li>
		<strong>Lippujärjestelmä:</strong> Noudata aina rannoilla olevaa lippujärjestelmää. Vihreä
		tarkoittaa turvallista, keltainen vaatii varovaisuutta ja punainen kieltää uimisen.
	</li>
	<li>
		<strong>Aurinko:</strong> Kanariansaarten aurinko on erittäin voimakas. Käytä korkean
		suojakertoimen aurinkovoidetta, hattua ja aurinkolaseja, myös pilvisellä säällä.
	</li>
	<li>
		<strong>Turvallisuus:</strong> Älä jätä arvoesineitä vartioimatta rannalle. Monilta rannoilta
		löytyy vuokrattavia säilytyslokeroita.
	</li>
	<li>
		<strong>Palvelut:</strong> Useimmilla rannoilla voi vuokrata aurinkotuoleja ja -varjoja (n. 5–10
		€ / päivä).
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'rannat'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'nahtavyydet',
  'Gran Canarian nähtävyydet',
  $$
<p>
	Gran Canaria on paljon muutakin kuin rantoja. Saaren sisäosien dramaattiset vuoristomaisemat,
	viehättävät pikkukylät ja pääkaupungin vilinä tarjoavat nähtävää ja koettavaa jokaiselle.
</p>

<h2>Luonnonnähtävyydet</h2>

<h3>Maspalomasin dyynit</h3>
<p>
	Eteläkärjen ikoninen, Saharan aavikkoa muistuttava hiekkadyynialue on saaren kuuluisin
	luonnonnähtävyys. Kävele dyynien halki Playa del Inglésistä Maspalomasin majakalle ja koe
	ainutlaatuinen maisema.
</p>

<h3>Roque Nublo</h3>
<p>
	Saaren symboli ja entinen pyhä paikka. Noin 1,5 km pituinen helppo kävelyreitti vie sinut 80
	metriä korkean monoliitin juurelle, josta avautuvat saaren upeimmat panoraamanäkymät.
</p>

<h3>Pico de las Nieves</h3>
<p>
	Gran Canarian korkein huippu (1949 m). Kirkkaalla säällä huipulta voi nähdä naapurisaari
	Teneriffan ja sen Teide-tulivuoren. Huipulle pääsee autolla.
</p>

<h2>Kylät ja kaupungit</h2>

<h3>Vegueta, Las Palmas</h3>
<p>
	Pääkaupungin historiallinen sydän on tunnelmallinen sekoitus kapeita mukulakivikatuja,
	värikkäitä siirtomaa-ajan rakennuksia ja viihtyisiä aukioita. Vieraile Santa Anan
	katedraalissa ja Kolumbuksen talossa (Casa de Colón).
</p>

<h3>Teror</h3>
<p>
	Yksi saaren kauneimmista kylistä, joka on kuuluisa perinteisistä kanarialaisista taloistaan ja
	niiden koristeellisista puuparvekkeista. Sunnuntain markkinat ovat suosittuja.
</p>

<h3>Puerto de Mogán</h3>
<p>
	"Kanarian Pikku-Venetsiaksi" kutsuttu kuvauksellinen satamakylä, jonka kanavat, sillat ja
	kukkaloisto hurmaavat kävijän. Erinomainen paikka <a
		href="/kanariansaaret/gran-canaria/paivaretket">päiväretkelle</a
	>.
</p>

<h2>Tekemistä lasten kanssa</h2>

<h3>Palmitos Park</h3>
<p>
	Laaja eläin- ja kasvitieteellinen puisto lähellä Maspalomasia. Upeat delfiini- ja
	petolintunäytökset ovat puiston kohokohtia.
</p>

<h3>Aqualand Maspalomas</h3>
<p>
	Suuri vesipuisto, joka tarjoaa liukumäkiä ja altaita kaikenikäisille. Varma hitti kuumana
	päivänä.
</p>

<h3>Poema del Mar</h3>
<p>
	Moderni ja näyttävä akvaario Las Palmasin satamassa. Kolmeen osaan jaettu akvaario esittelee
	maailman meriä syvyyksistä sademetsiin.
</p>

<h3>Veneretket</h3>
<p>
	Lounaisrannikon satamista (erityisesti Puerto Rico) lähtee päivittäin retkiä, joilla voi nähdä
	delfiinejä ja valaita niiden luonnollisessa ympäristössä. 
</p>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'nahtavyydet'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'ravintolat',
  'Gran Canarian ravintolat',
  $$
<p>
	Gran Canarian ravintolatarjonta on laaja ja monipuolinen. Se vaihtelee lomakohteiden
	perinteisistä turistimenuista Las Palmasin autenttisiin tapas-baareihin ja Melonerasin
	gourmet-elämyksiin. Hintataso on yleisesti ottaen Suomea edullisempi, ja saarelta löytyy
	herkkuja jokaiseen makuun.
</p>

<h2>Hintataso ja ruokailuajat</h2>
<p>
	Paikallisten suosima <strong>Menú del Día</strong> (päivän menu) on erinomainen ja edullinen
	lounasvaihtoehto arkisin klo 13–16. Se sisältää yleensä 2-3 ruokalajia, juoman ja jälkiruoan
	hintaan 10–18 €. Illallista syödään tyypillisesti myöhään, klo 20:30 alkaen.
</p>

<h2>Parhaat ravintola-alueet</h2>

<h3>Meloneras</h3>
<p>
	Melonerasin rantabulevardi on keskittymä tyylikkäitä ja moderneja ravintoloita. Se on
	täydellinen paikka laadukkaaseen illalliseen auringonlaskua ihaillen.
</p>

<h3>Puerto de Mogán</h3>
<p>
	Idyllisen sataman kalaravintolat ovat kuuluisia tuoreista merenelävistään. Tunnelma on
	romanttinen ja täydellinen erityiseen iltaan.
</p>

<h3>Las Palmas</h3>
<p>
	Saaren kulinaarinen keskus. Veguetan ja Trianan kaupunginosat ovat täynnä autenttisia
	tapas-baareja, ja Mercado del Puerton kauppahallin ympäristö on loistava paikka maistella
	tuoreita herkkuja.
</p>

<h2>Mitä maistaa – Kanarialaisia erikoisuuksia</h2>

<ul>
	<li>
		<strong>Papas Arrugadas con Mojo:</strong> Kanariansaarten kansallisruoka. Pienet perunat
		keitetään suolavedessä ryppyisiksi ja tarjoillaan vihreän (Mojo Verde) ja punaisen (Mojo Rojo)
		-kastikkeen kera.
	</li>
	<li>
		<strong>Kala ja merenelävät:</strong> Maista tuoretta paikallista kalaa, kuten
		<code>sama</code>, <code>cherne</code> tai <code>vieja</code> (papukaijakala).
	</li>
	<li>
		<strong>Ropa Vieja:</strong> Lihapata, jossa on usein revittyä naudanlihaa, kikherneitä ja
		kasviksia. Nimi tarkoittaa "vanhoja vaatteita".
	</li>
	<li>
		<strong>Queso Asado:</strong> Paikallista juustoa paahdettuna pannulla, tarjoillaan usein
		mojon tai hunajan kera.
	</li>
	<li>
		<strong>Bienmesabe:</strong> Makea jälkiruoka, joka on valmistettu manteleista, sokerista,
		munasta ja sitruunasta.
	</li>
	<li>
		<strong>Ron Miel:</strong> Kanarialainen hunajaromi, jota tarjoillaan usein aterian päätteeksi.
		Makea ja pehmeä digestiivi.
	</li>
</ul>

<h2>Käytännön vinkkejä</h2>
<ul>
	<li>
		<strong>Aukioloajat:</strong> Lounas tarjoillaan tyypillisesti klo 13–16 ja illallinen klo 20–24.
		Monet ravintolat ovat kiinni iltapäivisin.
	</li>
	<li>
		<strong>Tippaaminen:</strong> Palvelumaksu sisältyy yleensä hintaan, mutta hyvästä palvelusta on
		tapana jättää 5–10 % tippi.
	</li>
	<li>
		<strong>Pöytävaraus:</strong> Suosituimpiin ravintoloihin kannattaa tehdä varaus etukäteen,
		erityisesti viikonloppuisin ja lomasesonkina.
	</li>
	<li>
		<strong>Allergiat:</strong> Useimmat ravintolat osaavat ottaa erityisruokavaliot huomioon. Kerro
		allergiastasi tarjoilijalle.
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'ravintolat'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'liikkuminen',
  'Liikkuminen Gran Canariassa',
  $$
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
	vaihtoehto isommalle ryhmälle. 
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
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'liikkuminen'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'missa-asua',
  'Gran Canaria – Missä asua',
  $$
<p>
	Gran Canarian majoitustarjonta on keskittynyt pääasiassa etelärannikon lomakohteisiin sekä
	pääkaupunki Las Palmasiin. Jokaisella alueella on oma ainutlaatuinen luonteensa, joten oikean
	alueen valinta on avain onnistuneeseen lomaan.
</p>

<h2>Playa del Inglés – Vilkas ja eläväinen</h2>
<p>
	Saaren suurin ja tunnetuin lomakeskus, joka ei nuku koskaan. Alue on rakennettu 70-luvulla ja
	se näkyy arkkitehtuurissa, mutta palveluiden määrä on vertaansa vailla.
</p>
<ul>
	<li><strong>Kenelle sopii?</strong> Juhlijoille, nuorille, ryhmille ja vilinää kaipaaville.</li>
	<li>
		<strong>Plussat:</strong> Valtava ravintola- ja baaritarjonta, vilkas yöelämä (Yumbo & Kasbah),
		pitkä hiekkaranta ja suomalaiset palvelut.
	</li>
	<li>
		<strong>Miinukset:</strong> Voi olla meluisa, arkkitehtuuri on osin vanhentunutta, ei aitoa
		kanarialaista tunnelmaa.
	</li>
</ul>

<h2>Maspalomas & Meloneras – Tyylikäs ja rauhallinen</h2>
<p>
	Heti Playa del Inglésin vieressä sijaitseva alue on huomattavasti rauhallisempi ja tasokkaampi.
	Tunnetaan upeista dyyneistään ja Melonerasin modernista rantabulevardista.
</p>
<ul>
	<li>
		<strong>Kenelle sopii?</strong> Pariskunnille, lapsiperheille ja laatua sekä rauhaa
		arvostaville.
	</li>
	<li>
		<strong>Plussat:</strong> Ikoniset dyynit, tyylikäs Melonerasin rantakatu, laadukkaat hotellit
		ja ravintolat.
	</li>
	<li><strong>Miinukset:</strong> Hintataso on korkeampi, yöelämä on hyvin rauhallista.</li>
</ul>

<h2>Puerto Rico & Amadores – Perheiden aurinkovarma suosikki</h2>
<p>
	Lounaisrannikon laaksoon rakennettu lomakeskus, joka on kuuluisa saaren aurinkoisimmasta
	ilmastosta ja suojaisista rannoistaan.
</p>
<ul>
	<li>
		<strong>Kenelle sopii?</strong> Lapsiperheille, auringonpalvojille ja vesiaktiviteeteista
		nauttiville.
	</li>
	<li>
		<strong>Plussat:</strong> Saaren aurinkoisin paikka, lapsiystävälliset rannat, paljon
		aktiviteetteja ja veneretkiä.
	</li>
	<li><strong>Miinukset:</strong> Hyvin mäkinen maasto, voi tuntua eristetyltä laaksossaan.</li>
</ul>

<h2>Puerto de Mogán – Idyllinen ja romanttinen "Pikku-Venetsia"</h2>
<p>
	Saaren lounaiskulmassa sijaitseva kuvauksellinen kalastajakylä, jota pidetään yhtenä
	Kanariansaarten kauneimmista.
</p>
<ul>
	<li>
		<strong>Kenelle sopii?</strong> Pariskunnille, rauhaa ja romantiikkaa etsiville, esteetikoille.
	</li>
	<li>
		<strong>Plussat:</strong> Äärimmäisen kaunis ja viehättävä, laadukkaita kalaravintoloita,
		rauhallinen ilmapiiri.
	</li>
	<li>
		<strong>Miinukset:</strong> Hintataso on korkea, voi ruuhkautua päiväretkeläisistä,
		vähemmän aktiviteetteja.
	</li>
</ul>

<h2>Las Palmas – Kulttuurintäyteinen kaupunkikohde</h2>
<p>
	Saaren pääkaupunki tarjoaa aidon espanjalaisen kaupungin sykkeen yhdistettynä upeaan Las
	Canterasin uimarantaan.
</p>
<ul>
	<li>
		<strong>Kenelle sopii?</strong> Kaupunkilomailijoille, kulttuurin ja historian ystäville,
		omatoimimatkailijoille.
	</li>
	<li>
		<strong>Plussat:</strong> Veguetan historiallinen vanhakaupunki, upea Las Canterasin ranta,
		erinomainen ravintola- ja shoppailutarjonta.
	</li>
	<li>
		<strong>Miinukset:</strong> Sää voi olla pilvisempi kuin etelässä, vähemmän perinteinen
		"lomakeskus".
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'majoitus'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'paivaretket',
  'Päiväretket Gran Canarialta',
  $$
<p>
	Vaikka oma lomakohteesi olisi täydellinen, Gran Canarian todellinen luonne paljastuu parhaiten
	päiväretkillä. Saaren kompaktin koon ansiosta voit kokea aavikkoa, vuoristoa ja suurkaupungin
	sykettä saman päivän aikana.
</p>

<h2>Suosituimmat päiväretkikohteet</h2>

<h3>1. Las Palmas – Pääkaupungin sykkeeseen</h3>
<p>
	Täydellinen vastakohta etelän lomakohteille. Las Palmas on aito, vilkas espanjalainen
	suurkaupunki, joka tarjoaa kulttuuria, historiaa, shoppailua ja yhden maailman parhaista
	kaupunkirannoista. Vieraile Veguetan historiallisessa kaupunginosassa, shoppaile Trianan
	kävelykadulla ja rentoudu Las Canterasin rannalla paikallisten tapaan.
</p>
<p>
	<strong>Miten päästä:</strong> Etelän lomakohteista pääsee erittäin helposti ja edullisesti
	bussilla (esim. linjat 30, 50, 91). Matka kestää noin 45–60 minuuttia.
</p>

<h3>2. Vuoristokierros – Saaren sydämeen</h3>
<p>
	Koe "pienoismanner" käytännössä ajamalla rannikon kuivuudesta sisämaan vehreisiin laaksoihin ja
	karuille huipuille. Reitin varrella on viehättäviä kyliä kuten Fataga, näköalapaikkoja ja
	saaren kuuluisimmat luonnonnähtävyydet Roque Nublo ja Pico de las Nieves.
</p>
<p>
	<strong>Miten päästä:</strong> Paras tapa on vuokra-autolla, joka antaa vapauden pysähdellä
	omassa tahdissa. Myös valmiita, järjestettyjä bussiretkiä on runsaasti tarjolla.
	
</p>

<h3>3. Puerto de Mogán – Idyllinen satamakylä</h3>
<p>
	Vieraile "Kanarian Pikku-Venetsiassa", joka on monien mielestä saaren kaunein paikka. Nauti
	romanttisesta tunnelmasta, kiertele kukkien koristamia kujia ja syö tuoretta kalaa
	satamaravintolassa. Perjantaisin kylä täyttyy saaren suurimmista markkinoista.
</p>
<p>
	<strong>Miten päästä:</strong> Bussit (esim. linja 1 ja 32) kulkevat tiheästi rannikkoa pitkin.
	Hauska vaihtoehto on myös vesibussi (Ferry), joka kulkee Arguineguinin ja Puerto Ricon kautta.
	
</p>

<h3>4. Teror & Arucas – Pohjoisen helmet</h3>
<p>
	Tällä retkellä näet saaren vehreän ja perinteisen pohjoisosan. Teror on kuuluisa
	pyhiinvaelluskirkostaan ja upeista, veistetyistä puuparvekkeistaan. Arucasin kaupunkia
	hallitsee valtava, mustasta laavakivestä rakennettu kirkko, ja siellä sijaitsee myös
	Arehucas-rommitehdas, jossa voi vierailla.
</p>
<p>
	<strong>Miten päästä:</strong> Helpointa on liikkua vuokra-autolla, jolloin voi yhdistää
	molemmat kohteet samaan päivään.
</p>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'paivaretket'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'faq',
  'Usein kysytyt kysymykset Gran Canariasta',
  $$
<p>
	Tälle sivulle on koottu vastaukset yleisimpiin kysymyksiin, joita Gran Canarialle matkustavat
	pohtivat.
</p>

<h2>Voiko Gran Canarialla juoda hanavettä?</h2>
<p>
	Ei suositella. Vaikka vesi on teknisesti puhdasta, se on usein merivedestä suodatettua ja
	sisältää paljon mineraaleja, jotka voivat aiheuttaa vatsavaivoja tottumattomalle. Käytä sitä
	hampaiden pesuun, mutta osta juomavesi pulloissa.
</p>

<h2>Millainen on hintataso?</h2>
<p>
	Yleisesti ottaen hieman Suomea edullisempi. Erityisesti ruokakaupassa ja ulkona syödessä
	säästää. <a href="/kanariansaaret/gran-canaria/ravintolat">Ravintoloiden</a> hintataso on
	kohtuullinen, ja paikalliset tuotteet ovat edullisia.
</p>

<h2>Tarvitsenko käteistä vai pärjääkö kortilla?</h2>
<p>
	Molempi parempi. Kortti käy lähes kaikkialla, mutta käteistä on hyvä olla pieniä ostoksia,
	toreja, busseja ja mahdollisia tippejä varten.
</p>

<h2>Onko saari turvallinen?</h2>
<p>
	Kyllä, Gran Canaria on erittäin turvallinen kohde. Terve maalaisjärki auttaa pitkälle: pidä
	huolta omaisuudestasi tungoksessa ja älä jätä arvoesineitä näkyville autoon tai rannalle.
	Yleinen hätänumero on 112.
</p>

<h2>Kannattaako auto vuokrata?</h2>
<p>
	Ehdottomasti, jos haluat tutustua saaren upeisiin sisäosiin, vuoristokyliin ja
	pohjoisrannikkoon. Jos kuitenkin aiot pysyä pääasiassa etelän lomakohteiden ja Las Palmasin
	välillä, pärjäät mainiosti erinomaisella ja edullisella
	<a href="/kanariansaaret/gran-canaria/liikkuminen">bussiverkostolla</a>.
</p>

<h2>Milloin on paras aika matkustaa?</h2>
<p>
	Sää on miellyttävä ympäri vuoden. Talvikuukaudet (loka-maaliskuu) ovat vilkkainta sesonkia,
	jolloin lämpötila on Suomen kesän luokkaa. Kesällä (kesä-syyskuu) on kuumempaa, mutta
	merituuli viilentää mukavasti.
</p>

<h2>Puhuvatko paikalliset englantia?</h2>
<p>
	Kyllä, turistialueilla ja nuoremman sukupolven keskuudessa pärjää hyvin englannilla.
	Pienemmissä kylissä ja kaupoissa muutama sana espanjaa, kuten <em>hola</em> (hei),
	<em>gracias</em> (kiitos) ja <em>por favor</em> (pyydän), on kuitenkin erittäin arvostettu ele.
</p>

<h2>Mitä ovat dyynit ja saako niillä kävellä?</h2>
<p>
	Maspalomasin dyynit ovat luonnonsuojelualue, joka koostuu tuulen muovaamasta hiekasta.
	Dyynialueella saa kävellä merkittyjä reittejä pitkin. Se on upea paikka auringonlaskun
	ihailuun.
</p>

<h2>Lisää käytännön vinkkejä</h2>

<h3>Ruokakaupat ja apteekit</h3>
<p>
	Suuria supermarketteja (Mercadona, HiperDino) löytyy lomakohteiden laitamita, ja pienempiä
	(SPAR, SuperDino) keskustoista. Apteekit (Farmacia) tunnistaa vihreästä rististä, ja niistä
	saa apua pieniin vaivoihin. Aina yksi apteekki on päivystysvuorossa (farmacia de guardia).
</p>

<h3>Hyödyllisiä sovelluksia</h3>
<p>Lataa puhelimeesi ainakin nämä ennen matkaa:</p>
<ul>
	<li><strong>Google Maps:</strong> Navigointiin ja paikkojen etsimiseen. Muista ladata kartta offline-tilaan!</li>
	<li><strong>GuaguasGLOBAL:</strong> Saaren bussiverkoston virallinen sovellus aikatauluille ja reiteille.</li>
	<li><strong>Google Translate:</strong> Auttaa rikkomaan kielimuuria ravintoloissa ja kaupoissa.</li>
	<li><strong>AEMET:</strong> Espanjan virallinen ja luotettavin sääsovellus.</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'gran-canaria'),
  (SELECT id FROM categories WHERE slug = 'faq'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'rannat',
  'Teneriffan rannat',
  $$
<p>
	Teneriffan rannat ovat yhtä monimuotoisia kuin saari itse. Etelä tarjoaa perinteisiä,
	kultahiekkaisia paratiiseja, kun taas pohjoinen yllättää dramaattisilla, mustan laavahiekan
	peittämillä rannoillaan.
</p>

<h2>Etelän kultaiset hiekkarannat</h2>

<h3>Playa del Duque & Playa de Fañabé</h3>
<p>
	Costa Adejen tyylikkäimmät rannat tarjoavat vaaleaa hiekkaa, turkoosia vettä ja laadukkaita
	palveluita. Rauhallinen ilmapiiri tekee niistä täydellisiä pariskunnille ja perheille, jotka
	etsivät rentoa rantaelämää.
</p>

<h3>Playa de las Vistas</h3>
<p>
	Los Cristianosin ja Las Américasin välissä sijaitseva pitkä, leveä ja suosittu kultahiekkainen
	ranta, joka on suojassa aalloilta. Rannalla on paljon palveluita ja aktiviteetteja.
</p>

<h3>Playa de las Teresitas</h3>
<p>
	Pääkaupunki Santa Cruzin kupeessa sijaitseva ranta on kuin postikorttimaisema. Se on luotu
	Saharasta tuodusta kullankeltaisesta hiekasta, ja palmujen reunustama poukama on erittäin
	suosittu paikallisten keskuudessa viikonloppuisin.
</p>

<h2>Pohjoisen vulkaaniset helmet</h2>

<h3>Playa Jardín</h3>
<p>
	Puerto de la Cruzissa sijaitseva, taiteilija César Manriquen suunnittelema ranta-alue on
	enemmän kuin vain ranta. Se on mustan laavahiekan, eksoottisten puutarhojen ja vesiputousten
	kaunis yhdistelmä.
</p>

<h3>Playa de Benijo</h3>
<p>
	Anagan vuoriston juurella sijaitseva saaren syrjäisin ja dramaattisin ranta. Sen mustalta
	hiekalta kohoavat upeat, meren muovaamat kalliomuodostelmat. Varo voimakkaita virtauksia; tämä
	ranta on enemmän valokuvausta ja maisemien ihailua varten.
</p>

<h3>Garachicon luonnonaltaat (El Caletón)</h3>
<p>
	Ei perinteinen ranta, mutta ainutlaatuinen uimiskokemus. Tulivuorenpurkauksen synnyttämät
	laavamuodostelmat ovat luoneet Atlantin aalloilta suojassa olevia luonnollisia
	merivesialtaita.
</p>

<h2>Rantavinkit</h2>
<ul>
	<li>
		<strong>Musta hiekka kuumenee:</strong> Vulkaaninen hiekka voi tulla polttavan kuumaksi
		auringossa. Rantakengät ovat välttämättömät.
	</li>
	<li>
		<strong>Kunnioita Atlanttia:</strong> Erityisesti pohjoisessa merenkäynti voi olla voimakasta.
		Noudata aina lippuohjeistusta (punainen lippu = uimakielto).
	</li>
	<li>
		<strong>Suojaudu auringolta:</strong> Aurinko on erittäin voimakas myös pilvisellä säällä. Käytä
		korkeakertoimista aurinkovoidetta.
	</li>
	<li>
		<strong>Palvelut:</strong> Useimmilla suosituilla rannoilla voi vuokrata aurinkotuoleja ja -varjoja
		(n. 8–12 € / päivä).
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'rannat'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'nahtavyydet',
  'Teneriffan nähtävyydet',
  $$
<p>
	Teneriffa on täynnä maailmanluokan nähtävyyksiä ja aktiviteetteja, jotka ulottuvat Teide-tulivuoren
	huipulta syvälle Atlantin aaltoihin ja pohjoisen vehreisiin laaksoihin.
</p>

<h2>Saaren kolme suurta</h2>

<h3>Teiden kansallispuisto</h3>
<p>
	Yksikään Teneriffan-matka ei ole täydellinen ilman vierailua Teiden kansallispuistossa. Koe
	kuumainen vulkaaninen maisema, nouse köysiradalla 3555 metrin korkeuteen ja ihaile
	uskomattomia panoraamanäkymiä. Alue on myös yksi maailman parhaista paikoista tähtien
	tarkkailuun.
</p>

<h3>Siam Park</h3>
<p>
	Costa Adejessa sijaitseva, toistuvasti maailman parhaaksi vesipuistoksi äänestetty
	thaimaalais-teemainen elämyspuisto. Tarjoaa huimia liukumäkiä adrenaliinin metsästäjille,
	mutta myös rentoja altaita ja oman alueen perheen pienimmille.
</p>

<h3>Loro Parque</h3>
<p>
	Puerto de la Cruzissa sijaitseva, yksi maailman tunnetuimmista eläinpuistoista. Kuuluisa
	valtavasta papukaijakokoelmastaan, mutta sen suurimpia vetonauloja ovat maailmatasoiset
	miekkavalas-, delfiini- ja merileijonaesitykset sekä upea pingviinimaailma.
</p>

<h2>Luontoa ja maisemia</h2>

<h3>Mascan kylä ja laakso</h3>
<p>
	Henkeäsalpaavan kaunis ja dramaattinen rotkolaakson rinteeseen tarrautunut kylä. Pelkkä
	ajomatka sinne kapeaa ja mutkittelevaa vuoristotietä pitkin on seikkailu, jota ei kannata
	jättää väliin.
</p>

<h3>Los Gigantesin kalliot</h3>
<p>
	Länsirannikon jopa 600 metriä pystysuoraan mereen putoavat kalliot ovat vaikuttava näky.
	Parhaiten ne kokee mereltä käsin veneretkellä, joita lähtee läheisestä satamasta. Usein
	retkillä nähdään myös delfiinejä. 
</p>

<h3>Anagan maalaispuisto</h3>
<p>
	Saaren koilliskulman muinainen laakeripuumetsä, joka on kuin ripaus esihistoriallista
	maailmaa. Alueella on upeita, hyvin merkittyjä vaellusreittejä, jotka sopivat niin aloittelijoille
	kuin kokeneillekin patikoijille.
</p>

<h2>Kulttuuria ja historiaa</h2>

<h3>San Cristóbal de La Laguna</h3>
<p>
	Unescon suojelema vanhakaupunki on Teneriffan historiallinen ja kulttuurinen sydän. Sen
	värikkäät siirtomaa-ajan rakennukset ja suorakulmainen asemakaava toimivat mallina monille
	Latinalaisen Amerikan kaupungeille.
</p>

<h3>Garachico</h3>
<p>
	Hurmaava pikkukaupunki pohjoisrannikolla, jonka vuoden 1703 tulivuorenpurkaus osin tuhosi.
	Purkauksen seurauksena syntyivät kuuluisat El Caletónin luonnonaltaat, joissa voi uida.
</p>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'nahtavyydet'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'ravintolat',
  'Teneriffan ravintolat',
  $$
<p>
	Teneriffan ruokakulttuuri on sekoitus perinteistä espanjalaista keittiötä, afrikkalaisia
	vaikutteita ja saarten omia, ainutlaatuisia raaka-aineita. Tarjontaa on fine dining
	-ravintoloista rustiikkisiin, perheomisteisiin <strong>guachinche</strong>-paikkoihin.
</p>

<h2>Hintataso ja ruokailuajat</h2>
<p>
	Hintataso on yleisesti Suomea edullisempi, erityisesti paikallisten suosimissa ravintoloissa.
	Edullinen <strong>Menú del Día</strong> (päivän menu) on tarjolla monissa paikoissa
	arkilounasaikaan (klo 13–16) hintaan 10–18 €. Illallista syödään tyypillisesti myöhään, klo
	20:30 alkaen.
</p>

<h2>Parhaat ravintola-alueet</h2>

<h3>Etelän lomakohteet</h3>
<p>
	Costa Adejesta löydät tasokkaimmat ja kansainväliset ravintolat, erityisesti La Caletan
	kalastajakylän alueelta. Playa de las Américas ja Los Cristianos tarjoavat valtavan valikoiman
	kaikkea mahdollista jokaiseen budjettiin.
</p>

<h3>Pohjoisen kaupungit</h3>
<p>
	Puerto de la Cruzin vanhastakaupungista ja La Lagunasta löytyy runsaasti perinteisiä
	kanarialaisia ravintoloita ja saaren parhaita tapas-paikkoja, joissa on hyvä hinta-laatusuhde.
</p>

<h3>Guachinchet – Saaren piilotetut helmet</h3>
<p>
	Nämä ovat saaren todellisia erikoisuuksia. Guachinchet ovat rustiikkisia, usein perheiden
	omissa autotalleissa tai viinitilojen yhteydessä toimivia ruokapaikkoja, jotka tarjoavat itse
	tuotettua viiniä ja muutamaa yksinkertaista, mutta herkullista kotiruokalajia. Ne ovat
	erittäin edullisia ja tarjoavat aidon paikalliskokemuksen. Etsi niitä erityisesti pohjoisen
	viinialueilta, kuten La Orotavasta ja Tacorontesta.
</p>

<h2>Mitä maistaa – Kanarialaisia erikoisuuksia</h2>

<ul>
	<li>
		<strong>Papas Arrugadas con Mojo:</strong> Kanariansaarten ikonisin ruoka. Pieniä
		ryppyperunoita, jotka tarjoillaan punaisen (Mojo Rojo) ja vihreän (Mojo Verde) kastikkeen
		kera.
	</li>
	<li>
		<strong>Potaje de berros:</strong> Pehmeä ja maukas vesikrassikeitto, joka on tyypillinen
		alkuruoka.
	</li>
	<li>
		<strong>Queso Asado con Miel de Palma:</strong> Paistettua paikallista vuohenjuustoa, joka
		tarjoillaan usein makean palmuhunajan kanssa.
	</li>
	<li>
		<strong>Kala ja viinit:</strong> Maista tuoretta paikallista kalaa, kuten <code>vieja</code> (papukaijakala),
		ja nauti paikallisista viineistä, jotka saavat ainutlaatuisen mineraalisen luonteensa
		vulkaanisesta maaperästä.
	</li>
</ul>

<h2>Käytännön vinkkejä</h2>
<ul>
	<li>
		<strong>Aukioloajat:</strong> Lounas tarjoillaan tyypillisesti klo 13–16 ja illallinen klo
		20–24. Monet ravintolat ovat kiinni iltapäivisin.
	</li>
	<li>
		<strong>Tippaaminen:</strong> Palvelumaksu sisältyy yleensä hintaan, mutta hyvästä palvelusta on
		tapana jättää 5–10 % tippi.
	</li>
	<li>
		<strong>Pöytävaraus:</strong> Suosituimpiin ravintoloihin kannattaa tehdä varaus etukäteen,
		erityisesti viikonloppuisin ja lomasesonkina.
	</li>
	<li>
		<strong>Allergiat:</strong> Useimmat ravintolat osaavat ottaa erityisruokavaliot huomioon. Kerro
		allergiastasi tarjoilijalle.
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'ravintolat'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'liikkuminen',
  'Liikkuminen Teneriffalla',
  $$
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
		noin 25–30 €. Etukäteen varattu kuljetus voi olla kätevä. 
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
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'liikkuminen'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'missa-asua',
  'Teneriffa – Missä asua',
  $$
<p>
	Teneriffan majoituksen valinta on ennen kaikkea valinta etelän ja pohjoisen välillä. Nämä
	kaksi aluetta eroavat toisistaan merkittävästi niin ilmaston, luonnon kuin tunnelmankin
	suhteen. Valintasi määrittää pitkälti lomasi luonteen.
</p>

<h2>Etelä-Teneriffa: Aurinkoa, rantoja ja palveluita</h2>
<p>
	Etelä on saaren turismin sykkivä sydän, jossa aurinko paistaa lähes takuuvarmasti. Alue on
	pääosin modernia ja rakennettu turismia varten, tarjoten laajan valikoiman hotelleja ja
	aktiviteetteja.
</p>

<h3>Costa Adeje</h3>
<ul>
	<li><strong>Tunnelma:</strong> Etelän tyylikkäin ja tasokkain alue.</li>
	<li><strong>Sopii:</strong> Laatua, luksusta ja rauhaa etsiville pariskunnille ja perheille.</li>
	<li>
		<strong>Plussat:</strong> Upeat 5 tähden hotellit, siistit rannat (Playa del Duque), elegantit
		ostoskeskukset ja ravintolat.
	</li>
	<li><strong>Miinukset:</strong> Hintataso on korkeampi kuin muissa etelän kohteissa.</li>
</ul>

<h3>Playa de las Américas</h3>
<ul>
	<li><strong>Tunnelma:</strong> Saaren juhlimisen ja yöelämän keskus.</li>
	<li><strong>Sopii:</strong> Nuorille, ryhmille ja kaikille, jotka etsivät vilinää ja vauhtia.</li>
	<li>
		<strong>Plussat:</strong> Legendaarinen yöelämä (Verónicas-katu), laaja valikoima baareja, hyvät
		surffausmahdollisuudet.
	</li>
	<li><strong>Miinukset:</strong> Voi olla meluisa, osa rakennuskannasta on vanhentunutta.</li>
</ul>

<h3>Los Cristianos</h3>
<ul>
	<li><strong>Tunnelma:</strong> Entinen kalastajakylä, jossa on rennompi ja paikallisempi ote.</li>
	<li>
		<strong>Sopii:</strong> Lapsiperheille ja vanhemmille matkailijoille, jotka kaipaavat
		rauhallisempaa menoa.
	</li>
	<li>
		<strong>Plussat:</strong> Miellyttävä rantabulevardi ja satama (lautat La Gomeralle), astetta
		autenttisempi tunnelma.
	</li>
	<li><strong>Miinukset:</strong> Suosituimmat rannat ovat usein hyvin ruuhkaisia.</li>
</ul>

<h2>Pohjois-Teneriffa: Vehreyttä ja aitoutta</h2>
<p>
	Pohjoinen on ilmastoltaan kosteampi ja maisemiltaan vehreämpi. Täällä koet paikallista
	kulttuuria ja historiaa kaukana etelän suurimmista turistimassoista.
</p>

<h3>Puerto de la Cruz</h3>
<ul>
	<li><strong>Tunnelma:</strong> Pohjoisen perinteikäs ja pääasiallinen lomakaupunki.</li>
	<li>
		<strong>Sopii:</strong> Kulttuurista, historiasta ja luonnosta kiinnostuneille. Hyvä
		tukikohta patikoijille.
	</li>
	<li>
		<strong>Plussat:</strong> Kaunis vanhakaupunki, Lago Martiánez -merivesialtaat, Loro Parque,
		lähellä upeita vaellusreittejä.
	</li>
	<li>
		<strong>Miinukset:</strong> Sää on epävakaisempi ja viileämpi kuin etelässä, rannat ovat
		tummaa laavahiekkaa.
	</li>
</ul>

<h3>Santa Cruz & La Laguna</h3>
<ul>
	<li><strong>Tunnelma:</strong> Aitoa kanarialaista kaupunkielämää saaren hallinnollisissa keskuksissa.</li>
	<li><strong>Sopii:</strong> Kaupunkilomailijoille, shoppailijoille, historian ja arkkitehtuurin ystäville.</li>
	<li>
		<strong>Plussat:</strong> La Laguna on Unescon maailmanperintökohde. Santa Cruzissa on parhaat
		ostosmahdollisuudet ja kuuluisa karnevaali.
	</li>
	<li>
		<strong>Miinukset:</strong> Eivät ole rantalomakohteita, vaikka upea Las Teresitasin ranta onkin
		lähellä Santa Cruzia.
	</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'majoitus'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'paivaretket',
  'Päiväretket Teneriffalta',
  $$
<p>
	Teneriffan todellinen sielu löytyy usein lomakeskusten ulkopuolelta. Päiväretki on paras tapa
	kokea saaren uskomaton monimuotoisuus, ja saaren suuren koon vuoksi retkiin kannattaa varata
	koko päivä.
</p>

<h2>Suosituimmat päiväretkikohteet</h2>

<h3>1. Teiden kansallispuisto</h3>
<p>
	Tämä on pakollinen klassikko. Koe kuumainen vulkaaninen maisema, näe Espanjan korkein huippu ja
	nauti uskomattomista panoraamanäkymistä. Tämä Unescon maailmanperintökohde on saaren tärkein
	nähtävyys.
</p>
<p>
	<strong>Miten päästä:</strong> Kätevin tapa on vuokra-autolla, joka antaa vapauden pysähdellä
	omassa tahdissa. Myös lähes kaikki matkanjärjestäjät tarjoavat valmiita bussiretkiä, jotka
	ovat helppo ja informatiivinen vaihtoehto. Muista varata köysiradan liput hyvissä ajoin
	etukäteen. 
</p>

<h3>2. Masca ja Los Gigantes</h3>
<p>
	Tämä retki vie sinut saaren vanhimpaan ja jylhimpään osaan, Tenon vuoristoon. Näe huikean
	kaunis Mascan vuoristokylä ja aja yhtä Euroopan kuuluisimmista ja haastavimmista teistä.
	Ihaile Los Gigantesin massiivisia, mereen putoavia kallioita.
</p>
<p>
	<strong>Miten päästä:</strong> Vuokra-auto on joustavin vaihtoehto, mutta vaatii kokenutta ja
	rauhallista kuskia Mascan tiellä. Helpompi tapa on osallistua järjestetylle bussiretkelle.
	
</p>

<h3>3. La Gomera – Naapurisaaren rauhaan</h3>
<p>
	Vaihda maisemaa ja koe Teneriffan pienempi, rauhallisempi ja vehreämpi naapurisaari. Vaella
	Garajonayn kansallispuiston ikivanhassa laakeripuumetsässä ja tutustu saaren ainutlaatuiseen
	vihellyskieleen, <em>el silbo gomeroon</em>.
</p>
<p>
	<strong>Miten päästä:</strong> Nopeat lautat (Fred. Olsen ja Naviera Armas) kulkevat useita
	kertoja päivässä Los Cristianosin satamasta La Gomeralle. Suosituin tapa on osallistua
	valmiille päiväretkelle, joka sisältää lauttamatkat, lounaan ja opastetun kierroksen
	saarella.
</p>

<h3>4. Pohjoisen kierros: La Laguna & Anaga</h3>
<p>
	Pakene etelän aurinkoa ja tutustu saaren vihreään, historialliseen ja autenttiseen
	pohjoisosaan. Kävele La Lagunan Unescon suojelemassa vanhassakaupungissa ja aja Anagan
	vuoriston serpentiiniteitä.
</p>
<p>
	<strong>Miten päästä:</strong> Tämä retki onnistuu parhaiten vuokra-autolla, sillä se antaa
	vapauden pysähtyä pienissä kylissä ja näköalapaikoilla.
</p>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'paivaretket'),
  true
);

INSERT INTO articles (slug, title, content, destination_id, category_id, published)
VALUES (
  'faq',
  'Usein kysytyt kysymykset Teneriffasta',
  $$
<p>
	Tälle sivulle on koottu vastaukset yleisimpiin kysymyksiin, joita Teneriffalle matkustavat
	pohtivat.
</p>

<h2>Mikä on suurin ero etelä- ja pohjois-Teneriffan välillä?</h2>
<p>
	Ilmasto ja tunnelma. Etelä on aurinkoinen, kuiva ja täynnä moderneja, kansainvälisiä
	lomakohteita. Pohjoinen on vehreämpi, kosteampi ja tarjoaa enemmän autenttista kanarialaista
	kulttuuria ja historiallisia kaupunkeja.
</p>

<h2>Pääseekö Teide-tulivuoren huipulle asti?</h2>
<p>
	Köysirata vie sinut 3 555 metrin korkeuteen. Siitä ylöspäin kraatterin reunalle (3 718 m)
	vaaditaan erillinen, ilmainen lupa, joka on haettava kansallispuiston verkkosivuilta usein
	viikkoja tai jopa kuukausia etukäteen. Maisemat ovat upeat jo köysiradan yläasemalta.
</p>

<h2>Mikä on "guachinche"?</h2>
<p>
	Se on perinteinen, usein perheomisteinen rustiikkinen ruokapaikka, joita löytyy pääasiassa
	pohjoisen viinialueilta. Ne tarjoavat omatekoista viiniä ja muutamia yksinkertaisia,
	herkullisia kotiruokalajeja erittäin edulliseen hintaan. Aito ja paikallinen elämys, jota ei
	kannata jättää väliin!
</p>

<h2>Kannattaako auto vuokrata?</h2>
<p>
	Kyllä, se on erittäin suositeltavaa, jos haluat kokea saaren monipuolisesti. Auto on lähes
	välttämätön Teiden, Mascan ja Anagan vuoriston tutkimiseen. Etelän lomakohteiden välillä ja
	pääkaupunkiin pääsee kuitenkin kätevästi myös
	<a href="/kanariansaaret/teneriffa/liikkuminen">bussilla</a>.
</p>

<h2>Onko Teneriffa kallis matkakohde?</h2>
<p>
	Hintataso on yleisesti ottaen edullisempi kuin Suomessa. Pohjois-Teneriffa ja pienemmät kylät
	ovat edullisempia kuin etelän tasokkaimmat lomakohteet, kuten Costa Adeje.
</p>

<h2>Voiko hanavettä juoda?</h2>
<p>
	Juomavedeksi suositellaan pullovettä. Hanavesi on turvallista peseytymiseen, mutta sen maku ja
	korkea mineraalipitoisuus voivat aiheuttaa vatsavaivoja tottumattomalle.
</p>

<h2>Käytännön vinkkejä</h2>
<h3>Raha ja maksaminen</h3>
<p>
	Kortti käy lähes kaikkialla, mutta käteistä on hyvä olla pieniä ostoksia, toreja ja busseja
	varten. Vältä yksityisten yritysten (esim. Euronet) nostoautomaatteja ja suosi pankkien omia.
</p>

<h3>Turvallisuus</h3>
<p>
	Teneriffa on turvallinen kohde. Normaali varovaisuus taskuvarkaiden varalta vilkkailla
	alueilla riittää. Yleinen hätänumero on 112.
</p>

<h2>Hyödyllisiä sovelluksia</h2>
<p>Lataa puhelimeesi ainakin nämä ennen matkaa:</p>
<ul>
	<li>
		<strong>Google Maps:</strong> Navigointiin ja paikkojen etsimiseen. Muista ladata kartta
		offline-tilaan!
	</li>
	<li>
		<strong>ten+ móvil:</strong> TITSA-bussien virallinen sovellus aikatauluille ja lippujen
		ostoon.
	</li>
	<li><strong>AEMET:</strong> Espanjan virallinen ja luotettavin sääsovellus.</li>
</ul>
$$,
  (SELECT id FROM destinations WHERE slug = 'teneriffa'),
  (SELECT id FROM categories WHERE slug = 'faq'),
  true
);