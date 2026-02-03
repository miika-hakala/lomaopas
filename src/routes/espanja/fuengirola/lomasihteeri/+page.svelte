<script lang="ts">
  import { onMount } from 'svelte';
  import { getLomasihteeriStatus, type LomaProfile } from '$lib/lomasihteeri/time';
  import { copy } from '$lib/lomasihteeri/copy';

  let profile: LomaProfile | null = null;
  let status: string = 'Ladataan profiilia...';

  const interestLabels: Record<string, string> = copy.onboarding2.interests;
  const interestTips: Record<string, string> = copy.briefing.interest_tips;

  onMount(() => {
    const profileData = localStorage.getItem('lomasihteeri_profile');
    if (profileData) {
      profile = JSON.parse(profileData);
      status = getLomasihteeriStatus(profile);
    } else {
      profile = null;
    }
  });

  function clearProfile() {
    localStorage.removeItem('lomasihteeri_profile');
    profile = null;
  }

  function formatInterests(interests: string[]): string {
    return interests.map((i) => interestLabels[i] || i).join(', ') || 'Ei valittu';
  }

  function getInterestTips(interests: string[]): { label: string; tip: string }[] {
    if (!interests || interests.length === 0) {
      return [{ label: 'Yleinen', tip: copy.briefing.interests_fallback }];
    }
    return interests
      .filter((i) => interestTips[i])
      .map((i) => ({ label: interestLabels[i] || i, tip: interestTips[i] }));
  }
</script>

<svelte:head>
  <title>{copy.dashboard.page_title} – Fuengirola</title>
</svelte:head>

<h1>{copy.dashboard.page_title}</h1>

<div class="profile-card">
  {#if profile}
    <h2>{copy.dashboard.trip_title}</h2>
    <p><strong>Kaupunki:</strong> Fuengirola</p>
    <p><strong>Loma alkaa:</strong> {profile.start_date}</p>
    <p><strong>Loma päättyy:</strong> {profile.end_date}</p>
    <p><strong>Kiinnostuksen kohteet:</strong> {formatInterests(profile.interests)}</p>

    <div class="briefing-card">
      <div class="briefing-header">
        <h3>{copy.dashboard.briefing_title}</h3>
        <span class="demo-badge">{copy.briefing.demo_badge}</span>
      </div>
      <p class="briefing-status">{copy.briefing.status_text}</p>

      <div class="briefing-section">
        <h4>{copy.briefing.weather_title}</h4>
        <p>{copy.briefing.weather_text}</p>
      </div>

      <div class="briefing-section alerts-ok">
        <h4>{copy.briefing.alerts_title}</h4>
        <p>{copy.briefing.alerts_ok}</p>
      </div>

      <div class="briefing-section">
        <h4>{copy.briefing.events_title}</h4>
        <ul>
          {#each copy.briefing.events as event}
            <li>{event}</li>
          {/each}
        </ul>
      </div>

      <div class="briefing-section">
        <h4>{copy.briefing.interests_title}</h4>
        <ul class="interest-tips">
          {#each getInterestTips(profile.interests) as { label, tip }}
            <li><strong>{label}:</strong> {tip}</li>
          {/each}
        </ul>
      </div>

      <div class="briefing-section tip-section">
        <h4>{copy.briefing.tip_title}</h4>
        <p>{copy.briefing.tip_text}</p>
      </div>
    </div>

    <p><a href="/espanja/fuengirola/lomasihteeri/onboarding">Muokkaa tietoja</a></p>
    <button on:click={clearProfile}>Nollaa ja poista profiili</button>

  {:else}
    <div class="no-profile">
      <h2>{copy.dashboard.no_profile_title}</h2>
      <p>{copy.dashboard.no_profile_body}</p>
      <a href="/espanja/fuengirola/lomasihteeri/onboarding" class="button">{copy.dashboard.no_profile_cta}</a>
    </div>
  {/if}
</div>

<p><a href="/espanja/fuengirola">← {copy.dashboard.back_to_city}</a></p>

<style>
  .profile-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
  }
  .no-profile {
    text-align: center;
  }
  .no-profile p {
    margin: 1rem 0;
  }
  .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  .button:hover {
    background-color: #0056b3;
  }
  button {
    background-color: #dc3545;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
  button:hover {
    background-color: #c82333;
  }

  /* Päivän kirje -demo */
  .briefing-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  .briefing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .briefing-header h3 {
    margin: 0;
  }
  .demo-badge {
    background: #6c757d;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    text-transform: uppercase;
  }
  .briefing-status {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  .briefing-section {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  .briefing-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .briefing-section h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
    color: #333;
  }
  .briefing-section p {
    margin: 0;
    color: #555;
  }
  .briefing-section ul {
    margin: 0;
    padding-left: 1.25rem;
    color: #555;
  }
  .briefing-section li {
    margin-bottom: 0.25rem;
  }
  .alerts-ok {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    padding: 0.75rem 1rem;
  }
  .alerts-ok h4,
  .alerts-ok p {
    color: #155724;
  }
  .interest-tips li {
    margin-bottom: 0.5rem;
  }
  .tip-section {
    background: #fff3cd;
    border: 1px solid #ffeeba;
    border-radius: 4px;
    padding: 0.75rem 1rem;
  }
  .tip-section h4,
  .tip-section p {
    color: #856404;
  }
</style>
