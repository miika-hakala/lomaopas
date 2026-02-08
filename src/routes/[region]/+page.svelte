<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Hero from '$lib/components/Hero.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.region.name} - Lomaopas.fi</title>
	<meta
		name="description"
		content="Tutustu {data.region.name}n kohteisiin ja vinkkeihin. Suomenkielinen matkaopas."
	/>
	<meta property="og:title" content="{data.region.name} - Lomaopas.fi" />
	<meta property="og:description" content="Tutustu {data.region.name}n kohteisiin ja vinkkeihin." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="guide-page">
	<Breadcrumbs items={[
		{ label: 'Etusivu', href: '/' },
		{ label: data.region.name }
	]} />

	<Hero
		title={data.region.name}
		subtitle="Tutustu {data.region.name}n kohteisiin ja vinkkeihin."
		variant="hub"
	/>

	{#if data.destinations.length > 0}
		<section class="destinations-section">
			<h2>Kohteet</h2>
			<ul class="card-grid">
				{#each data.destinations as dest}
					<li>
						<a href="/{data.region.slug}/{dest.slug}" class="destination-card">
							<h3>{dest.name}</h3>
							<p class="card-cta">Lue lisää →</p>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<p class="empty-state">Ei vielä kohteita tälle alueelle.</p>
	{/if}
</div>

<style>
	.guide-page {
		max-width: var(--max-width-page);
		margin: 0 auto;
	}

	.destinations-section h2 {
		font-size: var(--font-size-2xl);
		margin-bottom: var(--space-lg);
		color: var(--color-text-primary);
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-lg);
		list-style: none;
		padding: 0;
	}

	.destination-card {
		display: block;
		padding: var(--space-lg);
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		transition: all 0.15s ease;
	}

	.destination-card:hover {
		border-color: var(--color-link);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
		text-decoration: none;
	}

	.destination-card h3 {
		font-size: var(--font-size-xl);
		margin-bottom: var(--space-sm);
		color: var(--color-text-primary);
	}

	.card-cta {
		color: var(--color-link);
		font-size: var(--font-size-sm) !important;
		margin: 0;
	}

	.empty-state {
		color: var(--color-text-muted);
		font-style: italic;
	}
</style>
