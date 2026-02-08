<script lang="ts">
	import { enhance } from '$app/forms';

	export let article: any = null;
	export let destinations: any[] = [];
	export let categories: any[] = [];
	export let form: any = null;

	let title = form?.title ?? article?.title ?? '';
	let slug = form?.slug ?? article?.slug ?? '';
	let content = form?.content ?? article?.content ?? '';
	let destinationId = form?.destinationId ?? article?.destination_id ?? '';
	let categoryId = form?.categoryId ?? article?.category_id ?? '';
	let published = article?.published ?? false;
	let loading = false;

	$: isEdit = !!article;
	$: errorMessage = form?.error ?? '';

	function generateSlug(text: string) {
		return text
			.toLowerCase()
			.replace(/ä/g, 'a')
			.replace(/ö/g, 'o')
			.replace(/å/g, 'a')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	function handleTitleChange() {
		if (!isEdit && !slug) {
			slug = generateSlug(title);
		}
	}

	function confirmDelete(event: Event) {
		if (!confirm('Are you sure you want to delete this article?')) {
			event.preventDefault();
		}
	}
</script>

<div class="form-container">
	<h2>{isEdit ? 'Edit Article' : 'New Article'}</h2>

	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}

	<form
		method="POST"
		action={isEdit ? '?/update' : ''}
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				loading = false;
				await update();
			};
		}}
	>
		<div class="field">
			<label for="title">Title *</label>
			<input
				id="title"
				name="title"
				type="text"
				bind:value={title}
				on:input={handleTitleChange}
				required
				maxlength="200"
			/>
		</div>

		<div class="field">
			<label for="slug">Slug *</label>
			<input
				id="slug"
				name="slug"
				type="text"
				bind:value={slug}
				required
				maxlength="200"
				pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
			/>
		</div>

		<div class="field">
			<label for="destination">Destination *</label>
			<select id="destination" name="destination_id" bind:value={destinationId} required>
				<option value="">Select destination</option>
				{#each destinations as dest}
					<option value={dest.id}>{dest.name}</option>
				{/each}
			</select>
		</div>

		<div class="field">
			<label for="category">Category</label>
			<select id="category" name="category_id" bind:value={categoryId}>
				<option value="">No category</option>
				{#each categories as cat}
					<option value={cat.id}>{cat.name}</option>
				{/each}
			</select>
		</div>

		<div class="field">
			<label for="content">Content</label>
			<textarea id="content" name="content" bind:value={content} rows="15" maxlength="50000"></textarea>
		</div>

		<div class="field checkbox">
			<label>
				<input type="checkbox" name="published" bind:checked={published} />
				Published
			</label>
		</div>

		<div class="actions">
			<button type="submit" disabled={loading}>
				{loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
			</button>
			<a href="/admin" class="cancel">Cancel</a>
		</div>
	</form>

	{#if isEdit}
		<form
			method="POST"
			action="?/delete"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					loading = false;
					await update();
				};
			}}
			on:submit={confirmDelete}
			class="delete-form"
		>
			<button type="submit" class="delete-btn" disabled={loading}>
				Delete Article
			</button>
		</form>
	{/if}
</div>

<style>
	.form-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h2 {
		margin-bottom: 1.5rem;
		color: #111827;
	}

	.error {
		background: #fef2f2;
		color: #b91c1c;
		padding: 0.75rem 1rem;
		border-radius: 6px;
		margin-bottom: 1rem;
		border: 1px solid #fecaca;
	}

	.field {
		margin-bottom: 1.25rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
		color: #374151;
	}

	input[type="text"],
	textarea,
	select {
		width: 100%;
		padding: 0.5rem 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		font-size: 1rem;
	}

	textarea {
		resize: vertical;
	}

	.checkbox label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}

	.checkbox input[type="checkbox"] {
		width: auto;
	}

	.actions {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-top: 1.5rem;
	}

	button[type="submit"] {
		padding: 0.5rem 1.5rem;
		background: #3b82f6;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-size: 1rem;
	}

	button[type="submit"]:hover {
		background: #2563eb;
	}

	button[type="submit"]:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.cancel {
		color: #6b7280;
		text-decoration: none;
	}

	.delete-form {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e7eb;
	}

	.delete-btn {
		background: #ef4444 !important;
	}

	.delete-btn:hover {
		background: #dc2626 !important;
	}
</style>
