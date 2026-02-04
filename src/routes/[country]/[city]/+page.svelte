<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.city.name} - {data.country.name} - Lomaopas.fi</title>
</svelte:head>

<div class="container">
	<nav class="breadcrumb">
		<a href="/">Etusivu</a>
		<span>/</span>
		<a href="/{data.country.slug}">{data.country.name}</a>
		<span>/</span>
		<span>{data.city.name}</span>
	</nav>

	<article class="city">
		<h1>{data.city.name}</h1>

		<section class="intro">
			<p>Tutustu {data.city.name}n nähtävyyksiin, ravintoloihin ja rantoihin.</p>
		</section>

		{#if data.articles.length > 0}
			<section class="articles">
				<h2>Artikkelit</h2>
				<ul class="article-list">
					{#each data.articles as article}
						<li>
							<a
								href="/{data.country.slug}/{data.city.slug}/{article.slug}"
								class="article-card"
							>
								<h3>{article.title}</h3>
								{#if article.category}
									<span class="category">{article.category.name}</span>
								{/if}
								<p>Lue lisää →</p>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{:else}
			<p class="no-content">Ei vielä artikkeleita tälle kohteelle.</p>
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

	.city h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #111827;
	}

	.intro {
		font-size: 1.125rem;
		color: #4b5563;
		margin-bottom: 3rem;
	}

	.articles h2 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		color: #111827;
	}

	.article-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
		list-style: none;
		padding: 0;
	}

	.article-card {
		display: block;
		padding: 1.5rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.article-card:hover {
		border-color: #3b82f6;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.article-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: #111827;
	}

	.category {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background: #eff6ff;
		color: #1e40af;
		border-radius: 12px;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
	}

	.article-card p {
		color: #3b82f6;
		margin: 0.5rem 0 0 0;
	}

	.no-content {
		color: #6b7280;
		font-style: italic;
	}
</style>
