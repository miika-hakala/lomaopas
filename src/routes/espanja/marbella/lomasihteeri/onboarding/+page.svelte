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

  const citySlug = 'marbella';

  type InterestKey = keyof typeof interests;

  const interestLabels: Record<InterestKey, string> = copy.onboarding2.interests;

  $: canProceed = startDate !== '' && endDate !== '';

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
    goto('/espanja/marbella/lomasihteeri');
  }
</script>

<svelte:head>
  <title>Ota LomaSihteeri käyttöön – Marbella</title>
  <meta name="description" content="Aloita LomaSihteeri Marbellassa. Määritä matkasi päivämäärät ja kiinnostuksen kohteesi saadaksesi henkilökohtaisia suosituksia." />
</svelte:head>

<main class="onboarding-container">
  <h1>LomaSihteeri: Marbella</h1>

  {#if step === 1}
    <section class="onboarding-step" aria-labelledby="step1-title">
      <p class="step-indicator">{copy.onboarding1.step_indicator}</p>
      <h2 id="step1-title">{copy.onboarding1.page_title}</h2>
      <p class="help-text">{copy.onboarding1.help}</p>
      <form on:submit|preventDefault={nextStep}>
        <div class="form-group">
          <label for="start-date">{copy.onboarding1.label_arrival}</label>
          <input
            type="date"
            id="start-date"
            bind:value={startDate}
            aria-describedby={errorMessage ? 'date-error' : undefined}
            data-testid="start-date"
          />
        </div>
        <div class="form-group">
          <label for="end-date">{copy.onboarding1.label_departure}</label>
          <input
            type="date"
            id="end-date"
            bind:value={endDate}
            aria-describedby={errorMessage ? 'date-error' : undefined}
            data-testid="end-date"
          />
        </div>
        {#if errorMessage}
          <p class="error" id="date-error" role="alert">{errorMessage}</p>
        {/if}
        <div class="button-row">
          <button type="submit" class="btn-primary" disabled={!canProceed} data-testid="btn-next">{copy.onboarding1.btn_next}</button>
        </div>
      </form>
      <p class="back-link"><a href="/espanja/marbella">← {copy.onboarding1.btn_back}</a></p>
    </section>
  {/if}

  {#if step === 2}
    <section class="onboarding-step" aria-labelledby="step2-title">
      <p class="step-indicator">{copy.onboarding2.step_indicator}</p>
      <h2 id="step2-title">{copy.onboarding2.page_title}</h2>
      <p class="help-text">{copy.onboarding2.help}</p>
      <form on:submit|preventDefault={saveProfile}>
        <fieldset class="interests-fieldset">
          <legend class="visually-hidden">Valitse kiinnostuksen kohteet</legend>
          <div class="interests-grid">
            {#each Object.keys(interests) as interest}
              {@const key = interest as InterestKey}
              <label class="interest-option">
                <input type="checkbox" bind:checked={interests[key]} />
                <span class="interest-label">{interestLabels[key]}</span>
              </label>
            {/each}
          </div>
        </fieldset>
        <p class="saved-note">{copy.onboarding2.saved_note}</p>
        <p class="edit-note">{copy.onboarding2.edit_later_note}</p>
        <div class="button-row">
          <button type="submit" class="btn-primary" data-testid="btn-done">{copy.onboarding2.btn_done}</button>
        </div>
      </form>
      <p class="back-link"><button type="button" class="link-btn" on:click={prevStep}>← {copy.onboarding1.btn_back}</button></p>
    </section>
  {/if}
</main>

<style>
  .onboarding-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .onboarding-container h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .onboarding-step {
    background: #fff;
    border: 1px solid #dee2e6;
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
  }
  .step-indicator {
    font-size: 0.85rem;
    color: #6c757d;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .onboarding-step h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #212529;
  }
  .help-text {
    color: #555;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }
  input[type="date"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  input[type="date"]:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
  .error {
    color: #dc3545;
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 0.75rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  .interests-fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin: 0 0 1rem 0;
  }
  .interest-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    cursor: pointer;
    transition: border-color 0.15s ease, background-color 0.15s ease;
  }
  .interest-option:hover {
    background: #e9ecef;
  }
  .interest-option:has(input:checked) {
    background: #e7f1ff;
    border-color: #007bff;
  }
  .interest-option input[type="checkbox"] {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0;
    accent-color: #007bff;
  }
  .interest-label {
    font-size: 0.95rem;
    color: #333;
    word-break: break-word;
  }
  .saved-note,
  .edit-note {
    color: #6c757d;
    font-size: 0.85rem;
    margin: 0.5rem 0;
  }
  .button-row {
    margin-top: 1.5rem;
  }
  .btn-primary {
    width: 100%;
    padding: 0.875rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }
  .btn-primary:hover:not(:disabled) {
    background-color: #0056b3;
  }
  .btn-primary:focus-visible {
    outline: 3px solid #007bff;
    outline-offset: 2px;
  }
  .btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    opacity: 0.65;
  }
  .back-link {
    text-align: center;
    margin-top: 1rem;
  }
  .back-link a {
    color: #007bff;
    text-decoration: none;
  }
  .back-link a:hover {
    text-decoration: underline;
  }
  .link-btn {
    background: none;
    border: none;
    color: #007bff;
    padding: 0;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
  .link-btn:hover {
    text-decoration: underline;
  }
  .link-btn:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  @media (max-width: 400px) {
    .interests-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
