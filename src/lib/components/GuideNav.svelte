<script lang="ts">
  export let label: string;
  export let href: string;
  export let direction: 'up' | 'back' = 'up';
</script>

<div class="guide-nav">
  <a href={href} class="guide-nav-link">
    {#if direction === 'back'}
      <span class="arrow">←</span>
    {:else}
      <span class="arrow">↑</span>
    {/if}
    {label}
  </a>
</div>

<style>
  .guide-nav {
    padding-top: var(--space-2xl);
    margin-top: var(--space-2xl);
    border-top: 1px solid var(--color-border);
  }

  .guide-nav-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-link);
    text-decoration: none;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all 0.15s ease;
  }

  .guide-nav-link:hover {
    border-color: var(--color-link);
    background: var(--color-bg-accent);
    text-decoration: none;
  }

  .arrow {
    font-size: var(--font-size-lg);
  }
</style>
