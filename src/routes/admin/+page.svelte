<script lang="ts">
	export let data;

	async function handleLogout() {
		await data.supabase.auth.signOut();
		window.location.href = '/admin/login';
	}
</script>

<h1>Admin Dashboard</h1>
<p>Welcome! You are logged in.</p>
<button on:click={handleLogout}>Logout</button>
