<script lang="ts">
  import { goto } from '$app/navigation';
  import { copy } from '$lib/lomasihteeri/copy';

  let step = 1;
  let startDate: string = '';
  let endDate: string = '';
  let errorMessage: string = '';
  let interests = {
    ruoka_ja_viini: false,
    kulttuuri: false,
    rannat: false,
    perhe: false,
    golf: false,
    urheilu: false,
  };

  const citySlug = 'fuengirola';

  type InterestKey = keyof typeof interests;

  const interestLabels: Record<InterestKey, string> = copy.onboarding2.interests;

  function nextStep() {
    if (!startDate || !endDate) {
      errorMessage = copy.onboarding1.error_missing;
      return;
    }
    errorMessage = '';
    step = 2;
  }

  function prevStep() {
    step = 1;
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
    <h2>{copy.onboarding1.page_title}</h2>
    <p class="help-text">{copy.onboarding1.help}</p>
    <form on:submit|preventDefault={nextStep}>
      <div>
        <label for="start-date">{copy.onboarding1.label_arrival}</label>
        <input type="date" id="start-date" bind:value={startDate} />
      </div>
      <div>
        <label for="end-date">{copy.onboarding1.label_departure}</label>
        <input type="date" id="end-date" bind:value={endDate} />
      </div>
      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}
      <button type="submit">{copy.onboarding1.btn_next}</button>
    </form>
    <p><a href="/espanja/fuengirola">{copy.onboarding1.btn_back}</a></p>
  </div>
{/if}

{#if step === 2}
  <div class="onboarding-step">
    <h2>{copy.onboarding2.page_title}</h2>
    <p class="help-text">{copy.onboarding2.help}</p>
    <form on:submit|preventDefault={saveProfile}>
      <div class="interests-grid">
        {#each Object.keys(interests) as interest}
          {@const key = interest as InterestKey}
          <div>
            <input type="checkbox" id={key} bind:checked={interests[key]} />
            <label for={key}>{interestLabels[key]}</label>
          </div>
        {/each}
      </div>
      <p class="saved-note">{copy.onboarding2.saved_note}</p>
      <button type="submit">{copy.onboarding2.btn_done}</button>
    </form>
    <p><button type="button" class="link-btn" on:click={prevStep}>{copy.onboarding1.btn_back}</button></p>
  </div>
{/if}

<style>
  .onboarding-step {
    border: 1px solid #eee;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
  .help-text {
    color: #555;
    margin-bottom: 1rem;
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
  .error {
    color: #dc3545;
    margin-bottom: 1rem;
  }
  .saved-note {
    color: #666;
    font-size: 0.9rem;
    margin: 1rem 0;
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
  .link-btn {
    background: none;
    color: #007bff;
    padding: 0;
    text-decoration: underline;
  }
  .link-btn:hover {
    background: none;
    color: #0056b3;
  }
</style>
