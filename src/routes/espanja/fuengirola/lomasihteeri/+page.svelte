<script lang="ts">
  import { onMount } from 'svelte';
  import { getLomasihteeriStatus, type LomaProfile } from '$lib/lomasihteeri/time';
  import { copy } from '$lib/lomasihteeri/copy';
  import { getDailyWeather, type DailyWeather } from '$lib/lomasihteeri/weather';

  let profile: LomaProfile | null = null;
  let status: string = '';
  let isLoading = true;
  let weather: DailyWeather = {
    summary: copy.briefing.weather_text,
    conclusion: '',
    ok: false,
  };

  const interestLabels: Record<string, string> = copy.onboarding2.interests;
  const interestTips: Record<string, string> = copy.briefing.interest_tips;

  onMount(async () => {
    const profileData = localStorage.getItem('lomasihteeri_profile');
    if (profileData) {
      profile = JSON.parse(profileData);
      status = getLomasihteeriStatus(profile);
      // Hae live-sää
      weather = await getDailyWeather('fuengirola');
    } else {
      profile = null;
    }
    isLoading = false;
  });

  function clearProfile() {
    localStorage.removeItem('lomasihteeri_profile');
    profile = null;
  }

  function formatInterests(interests: string[]): string {
    if (!interests || interests.length === 0) {
      return copy.dashboard.interests_none;
    }
    return interests.map((i) => interestLabels[i] || i).join(', ');
  }

  function getInterestTips(interests: string[]): { label: string; tip: string }[] {
    if (!interests || interests.length === 0) {
      return [{ label: 'Yleinen', tip: copy.briefing.interests_fallback }];
    }
    const tips = interests
      .filter((i) => interestTips[i])
      .map((i) => ({ label: interestLabels[i] || i, tip: interestTips[i] }));
    return tips.length > 0 ? tips : [{ label: 'Yleinen', tip: copy.briefing.interests_fallback }];
  }
</script>

<svelte:head>
  <title>{copy.dashboard.page_title} – Fuengirola</title>
</svelte:head>

<main class="dashboard-container">
  <h1>{copy.dashboard.page_title}</h1>

  {#if isLoading}
    <div class="profile-card">
      <p class="loading-text">Ladataan...</p>
    </div>
  {:else if profile}
    <section class="profile-card" aria-labelledby="trip-title">
      <h2 id="trip-title">{copy.dashboard.trip_title}</h2>
      <dl class="trip-details">
        <div class="detail-row">
          <dt>{copy.dashboard.label_city}</dt>
          <dd>Fuengirola</dd>
        </div>
        <div class="detail-row">
          <dt>{copy.dashboard.label_start}</dt>
          <dd>{profile.start_date}</dd>
        </div>
        <div class="detail-row">
          <dt>{copy.dashboard.label_end}</dt>
          <dd>{profile.end_date}</dd>
        </div>
        <div class="detail-row">
          <dt>{copy.dashboard.label_interests}</dt>
          <dd>{formatInterests(profile.interests)}</dd>
        </div>
      </dl>
      <a href="/espanja/fuengirola/lomasihteeri/onboarding" class="edit-link">{copy.dashboard.edit_link}</a>
    </section>

    <section class="briefing-card" aria-labelledby="briefing-title">
      <div class="briefing-header">
        <h2 id="briefing-title">{copy.dashboard.briefing_title}</h2>
        <span class="demo-badge" aria-label="Tämä on esittelyversio">{copy.briefing.demo_badge}</span>
      </div>
      <p class="briefing-status">{copy.briefing.status_text}</p>

      <article class="briefing-section">
        <h3>{copy.briefing.weather_title}</h3>
        <p>{weather.summary}{#if weather.conclusion} {weather.conclusion}{/if}</p>
      </article>

      <article class="briefing-section alerts-ok">
        <h3>{copy.briefing.alerts_title}</h3>
        <p><span class="ok-icon" aria-hidden="true">{copy.briefing.alerts_ok_icon}</span> {copy.briefing.alerts_ok}</p>
      </article>

      <article class="briefing-section">
        <h3>{copy.briefing.events_title}</h3>
        <ul>
          {#each copy.briefing.events as event}
            <li>{event}</li>
          {/each}
        </ul>
      </article>

      <article class="briefing-section">
        <h3>{copy.briefing.interests_title}</h3>
        <ul class="interest-tips">
          {#each getInterestTips(profile.interests) as { label, tip }}
            <li><strong>{label}:</strong> {tip}</li>
          {/each}
        </ul>
      </article>

      <article class="briefing-section tip-section">
        <h3>{copy.briefing.tip_title}</h3>
        <p>{copy.briefing.tip_text}</p>
      </article>
    </section>

    <div class="actions">
      <button type="button" class="btn-danger" on:click={clearProfile}>{copy.dashboard.clear_btn}</button>
    </div>

  {:else}
    <section class="profile-card no-profile" aria-labelledby="no-profile-title">
      <h2 id="no-profile-title">{copy.dashboard.no_profile_title}</h2>
      <p>{copy.dashboard.no_profile_body}</p>
      <a href="/espanja/fuengirola/lomasihteeri/onboarding" class="btn-primary">{copy.dashboard.no_profile_cta}</a>
    </section>
  {/if}

  <nav class="back-nav">
    <a href="/espanja/fuengirola">← {copy.dashboard.back_to_city}</a>
  </nav>
</main>

<style>
  .dashboard-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
  }
  .dashboard-container h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    color: #212529;
  }
  .loading-text {
    text-align: center;
    color: #6c757d;
    padding: 2rem;
  }
  .profile-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
  .profile-card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    color: #212529;
  }
  .trip-details {
    margin: 0;
  }
  .detail-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e9ecef;
  }
  .detail-row:last-child {
    border-bottom: none;
  }
  .detail-row dt {
    color: #6c757d;
    font-size: 0.9rem;
  }
  .detail-row dd {
    margin: 0;
    color: #212529;
    font-weight: 500;
  }
  .edit-link {
    display: inline-block;
    margin-top: 1rem;
    color: #007bff;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .edit-link:hover {
    text-decoration: underline;
  }
  .no-profile {
    text-align: center;
    padding: 2rem 1.5rem;
  }
  .no-profile p {
    margin: 0.75rem 0 1.5rem;
    color: #495057;
    line-height: 1.5;
  }
  .btn-primary {
    display: inline-block;
    padding: 0.875rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.15s ease;
  }
  .btn-primary:hover {
    background-color: #0056b3;
  }
  .btn-primary:focus-visible {
    outline: 3px solid #007bff;
    outline-offset: 2px;
  }
  .actions {
    margin-top: 1rem;
  }
  .btn-danger {
    background-color: transparent;
    color: #dc3545;
    border: 1px solid #dc3545;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
  }
  .btn-danger:hover {
    background-color: #dc3545;
    color: white;
  }
  .btn-danger:focus-visible {
    outline: 3px solid #dc3545;
    outline-offset: 2px;
  }
  .back-nav {
    margin-top: 1.5rem;
  }
  .back-nav a {
    color: #007bff;
    text-decoration: none;
  }
  .back-nav a:hover {
    text-decoration: underline;
  }

  /* Päivän kirje */
  .briefing-card {
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
  .briefing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }
  .briefing-header h2 {
    margin: 0;
    font-size: 1.1rem;
  }
  .demo-badge {
    background: #e9ecef;
    color: #495057;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .briefing-status {
    color: #6c757d;
    font-size: 0.85rem;
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e9ecef;
  }
  .briefing-section {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e9ecef;
  }
  .briefing-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .briefing-section h3 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .briefing-section p {
    margin: 0;
    color: #495057;
    line-height: 1.5;
  }
  .briefing-section ul {
    margin: 0;
    padding-left: 1.25rem;
    color: #495057;
  }
  .briefing-section li {
    margin-bottom: 0.4rem;
    line-height: 1.4;
  }
  .alerts-ok {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    padding: 0.875rem 1rem;
  }
  .alerts-ok h3,
  .alerts-ok p {
    color: #155724;
  }
  .ok-icon {
    font-weight: bold;
    margin-right: 0.25rem;
  }
  .interest-tips li {
    margin-bottom: 0.6rem;
  }
  .tip-section {
    background: #fff3cd;
    border: 1px solid #ffeeba;
    border-radius: 8px;
    padding: 0.875rem 1rem;
  }
  .tip-section h3,
  .tip-section p {
    color: #856404;
  }
</style>
