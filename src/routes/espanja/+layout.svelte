<header>
  <h1>Espanja</h1>
  <nav>
    <a href="/espanja">Espanja</a>
    <a href="/espanja/fuengirola">Fuengirola</a>
    <a href="/espanja/fuengirola/liikkuminen">Liikkuminen</a>
    <a href="/espanja/fuengirola/missa-asua">Missä asua</a>
    <a href="/espanja/fuengirola/rannat">Rannat</a>
    <a href="/espanja/fuengirola/ravintolat">Ravintolat</a>
    <a href="/espanja/fuengirola/nahtavyydet">Nähtävyydet</a>
    <a href="/espanja/fuengirola/paivaretket">Päiväretket</a>
    <a href="/espanja/fuengirola/faq">UKK</a>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    padding: 1rem 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
  }

  nav a {
    text-decoration: none;
  }

  main {
    padding-top: 0.75rem;
  }

  @media (max-width: 640px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
