<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.article.title} - {data.city.name} - Lomaopas.fi</title>
</svelte:head>

<div class="container">
	<nav class="breadcrumb">
		<a href="/">Etusivu</a>
		<span>/</span>
		<a href="/{data.country.slug}">{data.country.name}</a>
		<span>/</span>
		<a href="/{data.country.slug}/{data.city.slug}">{data.city.name}</a>
		<span>/</span>
		<span>{data.article.title}</span>
	</nav>

	<article class="article">
		<header>
			<h1>{data.article.title}</h1>
			{#if data.article.category}
				<span class="category">{data.article.category.name}</span>
			{/if}
		</header>

		{#if data.article.content}
			<div class="content">
				{data.article.content}
			</div>
		{:else}
			<p class="no-content">Sisältö tulossa pian...</p>
		{/if}

		<footer>
			<a href="/{data.country.slug}/{data.city.slug}" class="back-link">
				← Takaisin {data.city.name}-sivulle
			</a>
		</footer>
	</article>
</div>

<style>
	.container {
		max-width: 800px;
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

	.article header {
		margin-bottom: 2rem;
	}

	.article h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #111827;
		line-height: 1.2;
	}

	.category {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: #eff6ff;
		color: #1e40af;
		border-radius: 16px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.content {
		font-size: 1.125rem;
		line-height: 1.75;
		color: #374151;
		margin-bottom: 3rem;
	}

	.content :global(p) {
		margin-bottom: 1.5rem;
	}

	.content :global(h2) {
		font-size: 1.875rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		color: #111827;
	}

	.content :global(h3) {
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: #111827;
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}

	.content :global(li) {
		margin-bottom: 0.5rem;
	}

	.no-content {
		color: #6b7280;
		font-style: italic;
	}

	footer {
		padding-top: 2rem;
		border-top: 1px solid #e5e7eb;
	}

	.back-link {
		color: #3b82f6;
		text-decoration: none;
		font-weight: 500;
	}

	.back-link:hover {
		text-decoration: underline;
	}
</style>
