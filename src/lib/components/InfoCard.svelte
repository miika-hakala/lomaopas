<script lang="ts">
  export let title: string;
  export let variant: 'default' | 'highlight' = 'default';
</script>

<div class="info-card info-card--{variant}">
  <h3 class="info-card-title">{title}</h3>
  <div class="info-card-content">
    <slot />
  </div>
</div>

<style>
  .info-card {
    padding: var(--space-lg);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-lg);
  }

  .info-card--highlight {
    background: var(--color-accent-light);
    border-color: var(--color-accent);
  }

  .info-card-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-md);
  }

  .info-card-content {
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
  }

  .info-card-content :global(p) {
    margin-bottom: var(--space-sm);
  }

  .info-card-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .info-card-content :global(ul) {
    padding-left: var(--space-lg);
    margin-bottom: var(--space-sm);
  }

  .info-card-content :global(li) {
    margin-bottom: var(--space-xs);
  }
</style>
