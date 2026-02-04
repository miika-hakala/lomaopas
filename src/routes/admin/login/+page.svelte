<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	let email = '';
	let password = '';
	let loading = false;
	let error = '';

	async function handleLogin() {
		try {
			loading = true;
			error = '';

			const { error: signInError } = await data.supabase.auth.signInWithPassword({
				email,
				password
			});

			if (signInError) throw signInError;

			goto('/admin');
		} catch (err: any) {
			error = err.message;
		} finally {
			loading = false;
		}
	}
</script>

<div class="container">
	<h1>Admin Login</h1>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<form on:submit|preventDefault={handleLogin}>
		<div>
			<label for="email">Email:</label>
			<input id="email" type="email" bind:value={email} required disabled={loading} />
		</div>

		<div>
			<label for="password">Password:</label>
			<input id="password" type="password" bind:value={password} required disabled={loading} />
		</div>

		<button type="submit" disabled={loading}>
			{loading ? 'Logging in...' : 'Login'}
		</button>
	</form>
</div>

<style>
	.container {
		max-width: 400px;
		margin: 2rem auto;
		padding: 2rem;
	}

	form > div {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		background: #3b82f6;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error {
		color: red;
		margin-bottom: 1rem;
	}
</style>
