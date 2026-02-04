<script lang="ts">
	import { goto } from '$app/navigation';
	import type { SupabaseClient } from '@supabase/supabase-js';

	export let supabase: SupabaseClient;
	export let article: any = null;
	export let destinations: any[] = [];
	export let categories: any[] = [];

	let title = article?.title || '';
	let slug = article?.slug || '';
	let content = article?.content || '';
	let destinationId = article?.destination_id || '';
	let categoryId = article?.category_id || '';
	let published = article?.published || false;
	let loading = false;
	let error = '';

	$: isEdit = !!article;

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

	async function handleSubmit() {
		try {
			loading = true;
			error = '';

			if (!title || !slug || !destinationId) {
				error = 'Please fill in all required fields';
				return;
			}

			const articleData = {
				title,
				slug,
				content,
				destination_id: destinationId,
				category_id: categoryId || null,
				published
			};

			if (isEdit) {
				const { error: updateError } = await supabase
					.from('articles')
					.update(articleData)
					.eq('id', article.id);

				if (updateError) throw updateError;

				alert('Article updated successfully!');
			} else {
				const { error: insertError } = await supabase.from('articles').insert(articleData);

				if (insertError) throw insertError;

				alert('Article created successfully!');
			}

			goto('/admin');
		} catch (err: any) {
			error = err.message;
		} finally {
			loading = false;
		}
	}

	async function handleDelete() {
		if (!confirm('Are you sure you want to delete this article?')) return;

		try {
			loading = true;
			const { error: deleteError } = await supabase
				.from('articles')
				.delete()
				.eq('id', article.id);

			if (deleteError) throw deleteError;

			alert('Article deleted!');
			goto('/admin');
		} catch (err: any) {
			error = err.message;
		} finally {
			loading = false;
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="article-form">
	<h2>{isEdit ? 'Edit Article' : 'New Article'}</h2>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<div class="form-group">
		<label for="title">Title *</label>
		<input
			id="title"
			type="text"
			bind:value={title}
			on:input={handleTitleChange}
			required
			disabled={loading}
		/>
	</div>

	<div class="form-group">
		<label for="slug">Slug *</label>
		<input id="slug" type="text" bind:value={slug} required disabled={loading} />
		<small>URL-friendly identifier (auto-generated from title)</small>
	</div>

	<div class="form-group">
		<label for="destination">Destination *</label>
		<select id="destination" bind:value={destinationId} required disabled={loading}>
			<option value="">Select destination...</option>
			{#each destinations as dest}
				<option value={dest.id}>{dest.name}</option>
			{/each}
		</select>
	</div>

	<div class="form-group">
		<label for="category">Category</label>
		<select id="category" bind:value={categoryId} disabled={loading}>
			<option value="">Select category...</option>
			{#each categories as cat}
				<option value={cat.id}>{cat.name}</option>
			{/each}
		</select>
	</div>

	<div class="form-group">
		<label for="content">Content</label>
		<textarea id="content" bind:value={content} rows="10" disabled={loading}></textarea>
	</div>

	<div class="form-group checkbox-group">
		<label>
			<input type="checkbox" bind:checked={published} disabled={loading} />
			Published
		</label>
	</div>

	<div class="form-actions">
		<button type="submit" class="btn-primary" disabled={loading}>
			{loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
		</button>
		<a href="/admin" class="btn-secondary">Cancel</a>
		{#if isEdit}
			<button type="button" class="btn-danger" on:click={handleDelete} disabled={loading}>
				Delete
			</button>
		{/if}
	</div>
</form>

<style>
	.article-form {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	input[type='text'],
	select,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		font-family: inherit;
	}

	textarea {
		resize: vertical;
	}

	small {
		color: #6b7280;
		font-size: 0.875rem;
	}

	.checkbox-group label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.form-actions {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}

	.btn-primary,
	.btn-secondary,
	.btn-danger {
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		font-weight: 500;
		cursor: pointer;
		border: none;
		text-decoration: none;
		display: inline-block;
	}

	.btn-primary {
		background: #3b82f6;
		color: white;
	}

	.btn-secondary {
		background: #6b7280;
		color: white;
	}

	.btn-danger {
		background: #ef4444;
		color: white;
		margin-left: auto;
	}

	.btn-primary:hover {
		background: #2563eb;
	}

	.btn-secondary:hover {
		background: #4b5563;
	}

	.btn-danger:hover {
		background: #dc2626;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error {
		background: #fee2e2;
		color: #991b1b;
		padding: 1rem;
		border-radius: 6px;
		margin-bottom: 1rem;
	}
</style>
