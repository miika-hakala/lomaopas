<script lang="ts">
  import { onMount } from 'svelte';
  import { getLomasihteeriStatus, type LomaProfile } from '$lib/lomasihteeri/time';

  let profile: LomaProfile | null = null;
  let status: string = 'Ladataan profiilia...';

  onMount(() => {
    const profileData = localStorage.getItem('lomasihteeri_profile');
    if (profileData) {
      profile = JSON.parse(profileData);
      status = getLomasihteeriStatus(profile);
    } else {
      status = 'LomaSihteeriä ei ole aktivoitu. Ota se käyttöön kaupunkisivulta!';
    }
  });

  function clearProfile() {
    localStorage.removeItem('lomasihteeri_profile');
    profile = null;
    status = 'Profiili poistettu. Voit aktivoida palvelun uudelleen milloin tahansa.';
  }
</script>

<svelte:head>
  <title>Oma LomaSihteeri – Fuengirola</title>
</svelte:head>

<h1>Oma LomaSihteeri</h1>

<div class="profile-card">
  {#if profile}
    <h2>Matkasi tiedot</h2>
    <p><strong>Kaupunki:</strong> {profile.city_slug}</p>
    <p><strong>Loma alkaa:</strong> {profile.start_date}</p>
    <p><strong>Loma päättyy:</strong> {profile.end_date}</p>
    <p><strong>Kiinnostuksen kohteet:</strong> {profile.interests.join(', ') || 'Ei valittu'}</p>

    <div class="status-box">
      <h3>Tämän hetken status:</h3>
      <p>{status}</p>
    </div>
    
    <div class="placeholder-letter">
        <h3>Päivän kirje</h3>
        <p>Päivän kirje generoidaan myöhemmin tähän näkymään, kun loma on aktiivinen.</p>
    </div>

    <button on:click={clearProfile}>Nollaa ja poista profiili</button>

  {:else}
    <p>{status}</p>
  {/if}
</div>

<p><a href="/espanja/fuengirola">← Takaisin Fuengirolan oppaaseen</a></p>

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
