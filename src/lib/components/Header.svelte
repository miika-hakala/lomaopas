<header class="site-header">
  <div class="header-inner">
    <a href="/" class="logo">
      Lomaopas<span class="logo-dot">.fi</span>
    </a>
    <nav class="header-nav">
      <a href="/">Etusivu</a>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    height: var(--header-height);
    display: flex;
    align-items: center;
  }

  .header-inner {
    width: 100%;
    max-width: var(--max-width-page);
    margin: 0 auto;
    padding: 0 var(--space-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    text-decoration: none;
  }

  .logo:hover {
    text-decoration: none;
  }

  .logo-dot {
    color: var(--color-accent);
  }

  .header-nav {
    display: flex;
    gap: var(--space-lg);
  }

  .header-nav a {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    text-decoration: none;
  }

  .header-nav a:hover {
    color: var(--color-text-primary);
    text-decoration: none;
  }
</style>
