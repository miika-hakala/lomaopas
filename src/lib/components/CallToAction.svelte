<script lang="ts">
  export let title: string;
  export let description: string = '';
  export let href: string;
  export let linkText: string = 'Lue lisää';
</script>

<div class="cta">
  <div class="cta-content">
    <h3 class="cta-title">{title}</h3>
    {#if description}
      <p class="cta-description">{description}</p>
    {/if}
  </div>
  <a href={href} class="cta-link">
    {linkText} →
  </a>
</div>

<style>
  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    margin: var(--space-xl) 0;
  }

  .cta-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }

  .cta-description {
    font-size: var(--font-size-sm) !important;
    color: var(--color-text-muted) !important;
    margin: 0;
  }

  .cta-link {
    flex-shrink: 0;
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-accent);
    color: var(--color-text-inverse);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    transition: background 0.15s ease;
  }

  .cta-link:hover {
    background: var(--color-link-hover);
    text-decoration: none;
    color: var(--color-text-inverse);
  }

  @media (max-width: 640px) {
    .cta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
