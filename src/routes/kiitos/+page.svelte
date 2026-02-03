<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let { data } = $props();

  // Auto-refresh for pending status
  let refreshCount = $state(0);
  const MAX_REFRESHES = 30; // 30 * 2s = 60s max wait

  onMount(() => {
    if (data.status === 'pending') {
      const interval = setInterval(() => {
        refreshCount++;
        if (refreshCount >= MAX_REFRESHES) {
          clearInterval(interval);
          return;
        }
        // Reload to check for updated order status
        window.location.reload();
      }, 2000);

      return () => clearInterval(interval);
    }
  });

  function formatDate(isoDate: string | null): string {
    if (!isoDate) return '';
    return new Date(isoDate).toLocaleDateString('fi-FI', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }
</script>

<svelte:head>
  <title>Kiitos tilauksestasi | Lomaopas.fi</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="kiitos-page">
  {#if data.status === 'paid'}
    <div class="success-card">
      <div class="checkmark">✓</div>
      <h1>Kiitos tilauksestasi!</h1>

      <p>Maksu on vastaanotettu onnistuneesti.</p>

      <div class="download-section">
        <h2>Lataa oppaasi</h2>

        <a href={data.downloadUrl} class="download-button" download>
          Lataa PDF
        </a>

        <p class="download-info">
          Latauksia jäljellä: {data.remainingDownloads}<br />
          {#if data.expiresAt}
            Linkki voimassa: {formatDate(data.expiresAt)} asti
          {/if}
        </p>

        {#if data.email}
          <p class="email-note">
            Vahvistus lähetetty: {data.email}
          </p>
        {/if}
      </div>

      <div class="info">
        <h3>Mitä seuraavaksi?</h3>
        <ul>
          <li>Tallenna PDF puhelimeesi tai tulosta se</li>
          <li>Lataa Google Maps -kartat offline-tilaan</li>
          <li>Käy läpi "Ennen matkaa" -checklista</li>
        </ul>
      </div>

      <p class="support">
        Ongelmia? Ota yhteyttä: <a href="mailto:tuki@lomaopas.fi">tuki@lomaopas.fi</a>
      </p>
    </div>

  {:else if data.status === 'pending'}
    <div class="pending-card">
      <div class="spinner"></div>
      <h1>Maksua vahvistetaan...</h1>

      <p>
        Odota hetki, vahvistamme maksusi. Tämä kestää yleensä muutaman sekunnin.
      </p>

      <p class="refresh-note">
        Sivu päivittyy automaattisesti. ({refreshCount}/{MAX_REFRESHES})
      </p>

      <p class="support">
        Jos sivu ei päivity minuutin kuluessa, ota yhteyttä:<br />
        <a href="mailto:tuki@lomaopas.fi">tuki@lomaopas.fi</a>
      </p>
    </div>

  {:else}
    <div class="error-card">
      <div class="error-icon">!</div>
      <h1>Jotain meni pieleen</h1>

      <p>{data.message || 'Tilausta ei löytynyt.'}</p>

      <p class="support">
        Ota yhteyttä: <a href="mailto:tuki@lomaopas.fi">tuki@lomaopas.fi</a>
      </p>
    </div>
  {/if}

  <p class="back-link">
    <a href="/espanja/fuengirola">← Takaisin Fuengirola-oppaaseen</a>
  </p>
</div>

<style>
  .kiitos-page {
    max-width: 500px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .success-card,
  .pending-card,
  .error-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
  }

  .checkmark {
    width: 60px;
    height: 60px;
    background: #28a745;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 1rem;
  }

  .error-icon {
    width: 60px;
    height: 60px;
    background: #dc3545;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 auto 1rem;
  }

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid #dee2e6;
    border-top-color: #007bff;
    border-radius: 50%;
    margin: 0 auto 1rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .success-card h1 {
    margin: 0 0 0.5rem 0;
    color: #28a745;
  }

  .pending-card h1 {
    margin: 0 0 0.5rem 0;
    color: #495057;
  }

  .error-card h1 {
    margin: 0 0 0.5rem 0;
    color: #dc3545;
  }

  .download-section {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .download-section h2 {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
  }

  .download-button {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
  }

  .download-button:hover {
    background: #0056b3;
  }

  .download-info {
    margin: 1rem 0 0 0;
    font-size: 0.85rem;
    color: #6c757d;
  }

  .email-note {
    margin: 0.5rem 0 0 0;
    font-size: 0.85rem;
    color: #6c757d;
  }

  .refresh-note {
    font-size: 0.85rem;
    color: #6c757d;
  }

  .info {
    text-align: left;
    margin-top: 1.5rem;
  }

  .info h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .info ul {
    margin: 0;
    padding-left: 1.25rem;
    color: #495057;
  }

  .info li {
    margin-bottom: 0.25rem;
  }

  .support {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: #6c757d;
  }

  .support a {
    color: #007bff;
  }

  .back-link {
    margin-top: 2rem;
    text-align: center;
  }

  .back-link a {
    color: #6c757d;
  }
</style>
