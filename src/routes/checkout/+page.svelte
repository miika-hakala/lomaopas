<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PRODUCTS } from '$lib/stripe/products';

  const product = PRODUCTS.fuengirola_pdf;
  let loading = $state(false);
  let error = $state('');
  let cancelled = $state(false);

  onMount(() => {
    cancelled = $page.url.searchParams.get('cancelled') === 'true';
  });

  async function startCheckout() {
    loading = true;
    error = '';

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'fuengirola_pdf' }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      error = 'Maksun käynnistäminen epäonnistui. Yritä uudelleen.';
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Osta Fuengirola-opas | Lomaopas.fi</title>
  <meta name="description" content="Osta Fuengirola – Täydellinen lomaopas (PDF). Toimii offline, sisältää checklistat ja hakusanat." />
</svelte:head>

<div class="checkout-page">
  <h1>Osta Fuengirola-opas</h1>

  {#if cancelled}
    <div class="notice">
      Maksu peruutettiin. Voit yrittää uudelleen.
    </div>
  {/if}

  <div class="product-card">
    <h2>{product.name}</h2>
    <p class="description">{product.description}</p>

    <ul class="features">
      <li>✓ Toimii offline – ei vaadi nettiyhteyttä</li>
      <li>✓ Tulostettava A4-muoto</li>
      <li>✓ Valmiit checklistat ennen matkaa ja perillä</li>
      <li>✓ Suorat hakusanat Google Mapsiin</li>
      <li>✓ ~15–20 sivua kuratoitua tietoa</li>
    </ul>

    <div class="price">
      <span class="amount">{(product.price / 100).toFixed(2).replace('.', ',')} €</span>
    </div>

    {#if error}
      <p class="error">{error}</p>
    {/if}

    <button onclick={startCheckout} disabled={loading} class="buy-button">
      {#if loading}
        Ladataan...
      {:else}
        Osta nyt
      {/if}
    </button>

    <p class="payment-info">Maksu käsitellään turvallisesti Stripen kautta.</p>
  </div>

  <p class="back-link">
    <a href="/espanja/fuengirola">← Takaisin Fuengirola-oppaaseen</a>
  </p>
</div>

<style>
  .checkout-page {
    max-width: 500px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  .notice {
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .product-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 1.5rem;
  }

  .product-card h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }

  .description {
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  .features li {
    padding: 0.25rem 0;
    color: #495057;
  }

  .price {
    text-align: center;
    margin-bottom: 1rem;
  }

  .amount {
    font-size: 2rem;
    font-weight: bold;
    color: #212529;
  }

  .error {
    color: #dc3545;
    text-align: center;
    margin-bottom: 1rem;
  }

  .buy-button {
    display: block;
    width: 100%;
    padding: 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .buy-button:hover:not(:disabled) {
    background: #0056b3;
  }

  .buy-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }

  .payment-info {
    text-align: center;
    font-size: 0.85rem;
    color: #6c757d;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .back-link {
    margin-top: 2rem;
  }

  .back-link a {
    color: #6c757d;
  }
</style>
