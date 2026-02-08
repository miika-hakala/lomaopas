<script lang="ts">
  import { onMount } from 'svelte';

  export let items: { id: string; title: string; level?: number }[] = [];

  let activeId = '';
  let isOpen = false;

  onMount(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });

  function handleClick(id: string) {
    isOpen = false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

{#if items.length > 0}
  <!-- Mobile toggle -->
  <div class="toc-mobile">
    <button
      class="toc-toggle"
      on:click={() => (isOpen = !isOpen)}
      aria-expanded={isOpen}
    >
      {isOpen ? 'Piilota sisältö' : 'Näytä sisältö'}
      <span class="toggle-icon">{isOpen ? '▲' : '▼'}</span>
    </button>
    {#if isOpen}
      <nav class="toc-nav toc-nav--mobile" aria-label="Sisällysluettelo">
        <ol>
          {#each items as item}
            <li class:indent={item.level && item.level > 2}>
              <button
                class="toc-link"
                class:active={activeId === item.id}
                on:click={() => handleClick(item.id)}
              >
                {item.title}
              </button>
            </li>
          {/each}
        </ol>
      </nav>
    {/if}
  </div>

  <!-- Desktop sticky -->
  <nav class="toc-desktop" aria-label="Sisällysluettelo">
    <p class="toc-heading">Sisältö</p>
    <ol>
      {#each items as item}
        <li class:indent={item.level && item.level > 2}>
          <button
            class="toc-link"
            class:active={activeId === item.id}
            on:click={() => handleClick(item.id)}
          >
            {item.title}
          </button>
        </li>
      {/each}
    </ol>
  </nav>
{/if}

<style>
  /* Desktop */
  .toc-desktop {
    display: none;
    position: sticky;
    top: calc(var(--header-height) + var(--space-xl));
    max-height: calc(100vh - var(--header-height) - var(--space-2xl));
    overflow-y: auto;
    padding: var(--space-lg);
    border-left: 2px solid var(--color-border);
  }

  @media (min-width: 1024px) {
    .toc-desktop {
      display: block;
    }
    .toc-mobile {
      display: none;
    }
  }

  .toc-heading {
    font-size: var(--font-size-xs) !important;
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted) !important;
    margin-bottom: var(--space-md);
  }

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-xs);
  }

  li.indent {
    padding-left: var(--space-md);
  }

  .toc-link {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    transition: all 0.15s ease;
    line-height: var(--line-height-normal);
  }

  .toc-link:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-secondary);
  }

  .toc-link.active {
    color: var(--color-accent);
    font-weight: var(--font-weight-medium);
    background: var(--color-accent-light);
  }

  /* Mobile */
  .toc-mobile {
    margin-bottom: var(--space-xl);
  }

  .toc-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
  }

  .toggle-icon {
    font-size: var(--font-size-xs);
  }

  .toc-nav--mobile {
    margin-top: var(--space-sm);
    padding: var(--space-md);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }
</style>
