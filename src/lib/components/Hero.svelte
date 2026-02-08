<script lang="ts">
  export let title: string;
  export let subtitle: string = '';
  export let variant: 'hub' | 'spoke' | 'article' = 'spoke';
  export let image: string = '';
  export let imageAlt: string = '';
</script>

<section class="hero hero--{variant}">
  <div class="hero-content">
    <h1>{title}</h1>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    <slot />
  </div>
  {#if image}
    <div class="hero-image">
      <img src={image} alt={imageAlt || title} loading="lazy" />
    </div>
  {/if}
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

  .hero-image {
    margin-top: var(--space-xl);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .hero-image img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: cover;
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
