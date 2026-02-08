<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Lomaopas.fi - Suomenkielinen matkaopas</title>
	<meta
		name="description"
		content="Lomaopas.fi tarjoaa suomenkielistä matkatietoa suosituista lomakohteista. Tutustu kohteisiin ja suunnittele unelmalomasi."
	/>
	<meta property="og:title" content="Lomaopas.fi - Suomenkielinen matkaopas" />
	<meta property="og:description" content="Suomenkielinen matkaopas suosituimpiin lomakohteisiin." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="home-page">
	<section class="hero-home">
		<h1>Lomaopas<span class="accent">.fi</span></h1>
		<p class="tagline">Suomenkielinen matkaopas suosituimpiin lomakohteisiin.</p>
	</section>

	{#if data.regions.length > 0}
		<section class="regions-section">
			<h2>Kohteet</h2>
			<ul class="card-grid">
				{#each data.regions as region}
					<li>
						<a href="/{region.slug}" class="region-card">
							<h3>{region.name}</h3>
							<p class="card-cta">Tutustu kohteisiin →</p>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>

<style>
	.home-page {
		max-width: var(--max-width-page);
		margin: 0 auto;
	}

	.hero-home {
		padding: var(--space-3xl) 0;
		text-align: center;
	}

	.hero-home h1 {
		font-size: var(--font-size-5xl);
		font-weight: var(--font-weight-bold);
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.accent {
		color: var(--color-accent);
	}

	.tagline {
		font-size: var(--font-size-xl);
		color: var(--color-text-secondary);
	}

	.regions-section {
		padding: var(--space-xl) 0;
	}

	.regions-section h2 {
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

	.region-card {
		display: block;
		padding: var(--space-lg);
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		transition: all 0.15s ease;
	}

	.region-card:hover {
		border-color: var(--color-link);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
		text-decoration: none;
	}

	.region-card h3 {
		font-size: var(--font-size-xl);
		margin-bottom: var(--space-sm);
		color: var(--color-text-primary);
	}

	.card-cta {
		color: var(--color-link);
		font-size: var(--font-size-sm) !important;
		margin: 0;
	}

	@media (max-width: 768px) {
		.hero-home h1 {
			font-size: var(--font-size-3xl);
		}
	}
</style>
