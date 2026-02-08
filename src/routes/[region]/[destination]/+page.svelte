<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import GuideNav from '$lib/components/GuideNav.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.destination.name} - {data.region.name} - Lomaopas.fi</title>
	<meta
		name="description"
		content="{data.destination.name} - tutustu nähtävyyksiin, ravintoloihin ja rantoihin. Suomenkielinen matkaopas."
	/>
</svelte:head>

<div class="guide-page">
	<Breadcrumbs items={[
		{ label: 'Etusivu', href: '/' },
		{ label: data.region.name, href: '/' + data.region.slug },
		{ label: data.destination.name }
	]} />

	<Hero
		title={data.destination.name}
		subtitle="Tutustu {data.destination.name}n nähtävyyksiin, ravintoloihin ja rantoihin."
		variant="spoke"
	/>

	{#if data.articles.length > 0}
		<section class="articles-section">
			<h2>Artikkelit</h2>
			<ul class="card-grid">
				{#each data.articles as article}
					<li>
						<a
							href="/{data.region.slug}/{data.destination.slug}/{article.slug}"
							class="article-card"
						>
							<h3>{article.title}</h3>
							{#if article.category}
								<span class="category-tag">{article.category.name}</span>
							{/if}
							<p class="card-cta">Lue lisää →</p>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<p class="empty-state">Ei vielä artikkeleita tälle kohteelle.</p>
	{/if}

	<GuideNav
		label="Katso koko {data.region.name}-alueopas"
		href="/{data.region.slug}"
		direction="up"
	/>
</div>

<style>
	.guide-page {
		max-width: var(--max-width-page);
		margin: 0 auto;
	}

	.articles-section h2 {
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

	.article-card {
		display: block;
		padding: var(--space-lg);
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		transition: all 0.15s ease;
	}

	.article-card:hover {
		border-color: var(--color-link);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
		text-decoration: none;
	}

	.article-card h3 {
		font-size: var(--font-size-xl);
		margin-bottom: var(--space-sm);
		color: var(--color-text-primary);
	}

	.category-tag {
		display: inline-block;
		padding: var(--space-xs) var(--space-sm);
		background: var(--color-accent-light);
		color: var(--color-accent);
		border-radius: var(--radius-full);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		margin-bottom: var(--space-sm);
	}

	.card-cta {
		color: var(--color-link);
		font-size: var(--font-size-sm) !important;
		margin: var(--space-sm) 0 0 0;
	}

	.empty-state {
		color: var(--color-text-muted);
		font-style: italic;
	}
</style>
