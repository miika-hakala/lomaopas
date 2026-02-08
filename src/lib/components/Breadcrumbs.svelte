<script lang="ts">
  export let items: { label: string; href?: string }[] = [];
</script>

<nav class="breadcrumbs" aria-label="Murupolku">
  {#each items as item, i}
    {#if i > 0}
      <span class="separator" aria-hidden="true">/</span>
    {/if}
    {#if item.href}
      <a href={item.href}>{item.label}</a>
    {:else}
      <span class="current" aria-current="page">{item.label}</span>
    {/if}
  {/each}
</nav>

<style>
  .breadcrumbs {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-bottom: var(--space-xl);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-xs);
  }

  .breadcrumbs a {
    color: var(--color-link);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .separator {
    color: var(--color-text-muted);
    margin: 0 var(--space-xs);
  }

  .current {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-medium);
  }
</style>
