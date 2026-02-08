<script lang="ts">
  export let title: string;
  export let subtitle: string = '';
  export let variant: 'hub' | 'spoke' | 'article' = 'spoke';
</script>

<section class="hero hero--{variant}">
  <div class="hero-content">
    <h1>{title}</h1>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    <slot />
  </div>
</section>

<style>
  .hero {
    padding: var(--space-2xl) 0;
    margin-bottom: var(--space-xl);
  }

  .hero--hub {
    padding: var(--space-3xl) 0;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: var(--space-2xl);
  }

  .hero--spoke {
    padding: var(--space-2xl) 0;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: var(--space-2xl);
  }

  .hero--article {
    padding: var(--space-xl) 0;
    margin-bottom: var(--space-xl);
  }

  .hero-content {
    max-width: var(--max-width-content);
  }

  h1 {
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    color: var(--color-text-primary);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-md);
  }

  .hero--article h1 {
    font-size: var(--font-size-4xl);
  }

  .subtitle {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    line-height: var(--line-height-relaxed);
    max-width: 600px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--font-size-3xl);
    }

    .hero--article h1 {
      font-size: var(--font-size-2xl);
    }

    .subtitle {
      font-size: var(--font-size-lg);
    }
  }
</style>
