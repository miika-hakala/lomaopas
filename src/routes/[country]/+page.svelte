<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.destination.name} - Lomaopas.fi</title>
	<meta
		name="description"
		content="Tutustu {data.destination.name}n kohteisiin ja nähtävyyksiin. Suomenkielinen matkaopas."
	/>
	<meta property="og:title" content="{data.destination.name} - Lomaopas.fi" />
	<meta property="og:description" content="Tutustu {data.destination.name}n kohteisiin" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="container">
	<nav class="breadcrumb">
		<a href="/">Etusivu</a>
		<span>/</span>
		<span>{data.destination.name}</span>
	</nav>

	<article class="destination">
		<h1>{data.destination.name}</h1>

		<section class="intro">
			<p>Tutustu {data.destination.name}n kohteisiin ja vinkkeihin.</p>
		</section>

		{#if data.cities.length > 0}
			<section class="cities">
				<h2>Kohteet</h2>
				<ul class="city-list">
					{#each data.cities as city}
						<li>
							<a href="/{data.destination.slug}/{city.slug}" class="city-card">
								<h3>{city.name}</h3>
								<p>Lue lisää →</p>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{:else}
			<p class="no-content">Ei vielä kohteita tälle alueelle.</p>
		{/if}
	</article>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #6b7280;
		margin-bottom: 2rem;
	}

	.breadcrumb a {
		color: #3b82f6;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span {
		margin: 0 0.5rem;
	}

	.destination h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #111827;
	}

	.intro {
		font-size: 1.125rem;
		color: #4b5563;
		margin-bottom: 3rem;
	}

	.cities h2 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		color: #111827;
	}

	.city-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
		list-style: none;
		padding: 0;
	}

	.city-card {
		display: block;
		padding: 1.5rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.city-card:hover {
		border-color: #3b82f6;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.city-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: #111827;
	}

	.city-card p {
		color: #3b82f6;
		margin: 0;
	}

	.no-content {
		color: #6b7280;
		font-style: italic;
	}
</style>
