<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="footer-logo">Lomaopas<span class="footer-dot">.fi</span></a>
      <p class="footer-tagline">Kaikki mitä suomalainen tarvitsee lomalla.</p>
    </div>
    <nav class="footer-nav">
      <a href="/">Etusivu</a>
      <a href="/tietoa">Tietoa sivustosta</a>
    </nav>
    <p class="footer-copy">© {new Date().getFullYear()} Lomaopas.fi</p>
  </div>
</footer>

<style>
  .site-footer {
    margin-top: auto;
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    padding: var(--space-2xl) 0;
  }

  .footer-inner {
    max-width: var(--max-width-page);
    margin: 0 auto;
    padding: 0 var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .footer-logo {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    text-decoration: none;
  }

  .footer-logo:hover {
    text-decoration: none;
  }

  .footer-dot {
    color: var(--color-accent);
  }

  .footer-tagline {
    font-size: var(--font-size-sm) !important;
    color: var(--color-text-muted) !important;
  }

  .footer-nav {
    display: flex;
    gap: var(--space-lg);
  }

  .footer-nav a {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    text-decoration: none;
  }

  .footer-nav a:hover {
    color: var(--color-text-primary);
  }

  .footer-copy {
    font-size: var(--font-size-xs) !important;
    color: var(--color-text-muted) !important;
  }
</style>
