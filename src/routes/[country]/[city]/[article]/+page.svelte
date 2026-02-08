<script lang="ts">
  import type { PageData } from './$types';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import GuideNav from '$lib/components/GuideNav.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.article.title} - {data.city.name} - Lomaopas.fi</title>
  <meta
    name="description"
    content="{data.article.content?.substring(0, 160) || data.article.title}"
  />
  <meta property="og:title" content="{data.article.title} - Lomaopas.fi" />
  <meta
    property="og:description"
    content="{data.article.content?.substring(0, 160) || data.article.title}"
  />
  <meta property="og:type" content="article" />
</svelte:head>

<div class="article-page">
  <Breadcrumbs items={[
    { label: 'Etusivu', href: '/' },
    { label: data.country.name, href: '/' + data.country.slug },
    { label: data.city.name, href: '/' + data.country.slug + '/' + data.city.slug },
    { label: data.article.title }
  ]} />

  <Hero
    title={data.article.title}
    variant="article"
  >
    {#if data.article.category}
      <span class="category-tag">{data.article.category.name}</span>
    {/if}
  </Hero>

  <article class="article-content">
    {#if data.article.content}
      <div class="prose">
        {data.article.content}
      </div>
    {:else}
      <p class="empty-state">Sisältö tulossa pian...</p>
    {/if}
  </article>

  <GuideNav
    label="Takaisin {data.city.name}-sivulle"
    href="/{data.country.slug}/{data.city.slug}"
    direction="back"
  />
</div>

<style>
  .article-page {
    max-width: var(--max-width-content);
    margin: 0 auto;
  }

  .category-tag {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: var(--color-accent-light);
    color: var(--color-accent);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    margin-top: var(--space-sm);
  }

  .prose {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
  }

  .prose :global(p) {
    margin-bottom: var(--space-lg);
  }

  .prose :global(h2) {
    font-size: var(--font-size-3xl);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-md);
    color: var(--color-text-primary);
  }

  .prose :global(h3) {
    font-size: var(--font-size-2xl);
    margin-top: var(--space-xl);
    margin-bottom: var(--space-sm);
    color: var(--color-text-primary);
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin-bottom: var(--space-lg);
    padding-left: var(--space-lg);
  }

  .prose :global(li) {
    margin-bottom: var(--space-sm);
  }

  .empty-state {
    color: var(--color-text-muted);
    font-style: italic;
  }
</style>
