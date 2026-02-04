<script lang="ts">
	import ArticleForm from '$lib/components/ArticleForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ArticleForm
	supabase={data.supabase}
	article={data.article}
	destinations={data.destinations}
	categories={data.categories}
/>
