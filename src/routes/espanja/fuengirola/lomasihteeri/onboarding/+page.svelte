<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let step = 1;
  let startDate: string = '';
  let endDate: string = '';
  let interests = {
    ruoka_ja_viini: false,
    kulttuuri: false,
    rannat: false,
    perhe: false,
    golf: false,
    urheilu: false,
  };

  const citySlug = 'fuengirola'; // Hardcoded for this MVP example

  type InterestKey = keyof typeof interests;

  function nextStep() {
    if (step === 1 && startDate && endDate) {
      step = 2;
    }
  }

  function saveProfile() {
    const selectedInterests = (Object.keys(interests) as InterestKey[]).filter(
      (key) => interests[key]
    );

    const profile = {
      city_slug: citySlug,
      start_date: startDate,
      end_date: endDate,
      interests: selectedInterests,
    };

    localStorage.setItem('lomasihteeri_profile', JSON.stringify(profile));
    goto('/espanja/fuengirola/lomasihteeri');
  }
</script>

<svelte:head>
  <title>Ota LomaSihteeri käyttöön – Fuengirola</title>
</svelte:head>

<h1>LomaSihteeri: Fuengirola</h1>

{#if step === 1}
  <div class="onboarding-step">
    <h2>Vaihe 1/2: Kerro matkasi ajankohta</h2>
    <form on:submit|preventDefault={nextStep}>
      <div>
        <label for="start-date">Saapumispäivä</label>
        <input type="date" id="start-date" bind:value={startDate} required />
      </div>
      <div>
        <label for="end-date">Lähtöpäivä</label>
        <input type="date" id="end-date" bind:value={endDate} required />
      </div>
      <button type="submit">Seuraava</button>
    </form>
  </div>
{/if}

{#if step === 2}
  <div class="onboarding-step">
    <h2>Vaihe 2/2: Valitse kiinnostuksen kohteesi</h2>
    <p>Valitse 1-3 sinua eniten kiinnostavaa aihetta.</p>
    <form on:submit|preventDefault={saveProfile}>
      <div class="interests-grid">
        {#each Object.keys(interests) as interest}
          {@const key = interest as InterestKey}
          <div>
            <input type="checkbox" id={key} bind:checked={interests[key]} />
            <label for={key}>{key.replace(/_/g, ' ')}</label>
          </div>
        {/each}
      </div>
      <button type="submit">Valmis</button>
    </form>
  </div>
{/if}

<style>
  .onboarding-step {
    border: 1px solid #eee;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input[type="date"] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  button {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
