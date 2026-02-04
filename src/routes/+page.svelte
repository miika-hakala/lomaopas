<svelte:head>
	<title>Lomaopas.fi - Suomenkielinen matkaopas</title>
	<meta
		name="description"
		content="Lomaopas.fi tarjoaa suomenkielistä matkatietoa Espanjan kohteista. Tutustu Fuengirolan rantoihin ja nähtävyyksiin."
	/>
	<meta property="og:title" content="Lomaopas.fi - Suomenkielinen matkaopas" />
	<meta property="og:description" content="Suomenkielinen matkaopas Espanjan kohteisiin" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://lomaopas.vercel.app/" />
</svelte:head>

<div class="container">
	<h1>Lomaopas.fi</h1>
	<p>Minimalistinen runko, joka listaa Espanjan kohteet ja Fuengirolan alasivut.</p>
	<p><a href="/espanja">Siirry Espanja-sivulle</a></p>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	a {
		color: #3b82f6;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
