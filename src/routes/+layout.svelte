<script lang="ts">
  import '$lib/styles/global.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="site-main">
  {@render children()}
</main>

<Footer />

<style>
  .site-main {
    flex: 1;
    width: 100%;
    max-width: var(--max-width-page);
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
  }
</style>
