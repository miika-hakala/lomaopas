<script lang="ts">
  import { page } from '$app/stores';

  const sessionId = $derived($page.url.searchParams.get('session_id'));
</script>

<svelte:head>
  <title>Kiitos tilauksestasi | Lomaopas.fi</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="kiitos-page">
  <div class="success-card">
    <div class="checkmark">✓</div>
    <h1>Kiitos tilauksestasi!</h1>

    <p>Maksu on vastaanotettu onnistuneesti.</p>

    <div class="download-section">
      <h2>Lataa oppaasi</h2>
      <p>Latauslinkki lähetetään myös sähköpostiisi.</p>

      {#if sessionId}
        <a href="/lataa?session_id={sessionId}" class="download-button">
          Lataa PDF
        </a>
      {:else}
        <p class="note">Jos latauslinkki ei toimi, tarkista sähköpostisi.</p>
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

  .success-card {
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

  h1 {
    margin: 0 0 0.5rem 0;
    color: #28a745;
  }

  .download-section {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .download-section h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .download-section p {
    margin: 0 0 1rem 0;
    color: #6c757d;
    font-size: 0.9rem;
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

  .note {
    color: #6c757d;
    font-size: 0.85rem;
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
