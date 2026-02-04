<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	async function handleLogout() {
		await data.supabase.auth.signOut();
		window.location.href = '/admin/login';
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('fi-FI');
	}
</script>

<div class="container">
	<header>
		<h1>Admin Dashboard</h1>
		<div class="header-actions">
			<span>Logged in as: {data.session?.user?.email}</span>
			<button on:click={handleLogout} class="btn-secondary">Logout</button>
		</div>
	</header>

	<section class="articles-section">
		<div class="section-header">
			<h2>Articles ({data.articles.length})</h2>
			<a href="/admin/articles/new" class="btn-primary">New Article</a>
		</div>

		{#if data.articles.length === 0}
			<p class="empty-state">No articles yet. Create your first article!</p>
		{:else}
			<div class="table-container">
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Destination</th>
							<th>Category</th>
							<th>Status</th>
							<th>Updated</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each data.articles as article}
							<tr>
								<td class="title-col">
									<strong>{article.title}</strong>
									<br />
									<small class="slug">/{article.destination?.slug}/{article.slug}</small>
								</td>
								<td>{article.destination?.name || '-'}</td>
								<td>{article.category?.name || '-'}</td>
								<td>
									<span class="status" class:published={article.published}>
										{article.published ? 'Published' : 'Draft'}
									</span>
								</td>
								<td>{formatDate(article.updated_at)}</td>
								<td class="actions-col">
									<a href="/admin/articles/{article.id}" class="btn-sm">Edit</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</section>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid #e5e7eb;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.table-container {
		overflow-x: auto;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead {
		background: #f9fafb;
	}

	th {
		text-align: left;
		padding: 1rem;
		font-weight: 600;
		border-bottom: 2px solid #e5e7eb;
	}

	td {
		padding: 1rem;
		border-bottom: 1px solid #e5e7eb;
	}

	tbody tr:hover {
		background: #f9fafb;
	}

	.title-col {
		min-width: 300px;
	}

	.slug {
		color: #6b7280;
	}

	.status {
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.status:not(.published) {
		background: #fef3c7;
		color: #92400e;
	}

	.status.published {
		background: #d1fae5;
		color: #065f46;
	}

	.actions-col {
		white-space: nowrap;
	}

	.btn-primary,
	.btn-secondary,
	.btn-sm {
		padding: 0.5rem 1rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		cursor: pointer;
		border: none;
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

	.btn-sm {
		padding: 0.375rem 0.75rem;
		font-size: 0.875rem;
		background: #f3f4f6;
		color: #374151;
	}

	.btn-primary:hover {
		background: #2563eb;
	}

	.btn-secondary:hover {
		background: #4b5563;
	}

	.btn-sm:hover {
		background: #e5e7eb;
	}

	.empty-state {
		text-align: center;
		padding: 3rem;
		color: #6b7280;
	}
</style>
