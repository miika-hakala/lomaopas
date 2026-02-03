<script lang="ts">
  import { onMount } from 'svelte';
  import { getLomasihteeriStatus, type LomaProfile } from '$lib/lomasihteeri/time';
  import { copy } from '$lib/lomasihteeri/copy';

  let profile: LomaProfile | null = null;
  let status: string = 'Ladataan profiilia...';

  const interestLabels: Record<string, string> = copy.onboarding2.interests;

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

    <div class="status-box">
      <h3>Tämän hetken status:</h3>
      <p>{status}</p>
    </div>

    <div class="placeholder-letter">
      <h3>{copy.dashboard.briefing_title}</h3>
      <p>{copy.dashboard.briefing_placeholder}</p>
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
  .status-box {
    background: #eef;
    border: 1px solid #cce;
    border-radius: 4px;
    padding: 1rem;
    margin: 1.5rem 0;
  }
  .placeholder-letter {
    border: 2px dashed #ccc;
    padding: 1rem;
    margin: 1.5rem 0;
    text-align: center;
    color: #777;
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
</style>
