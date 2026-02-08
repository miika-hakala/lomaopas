<script lang="ts">
	import ArticleForm from '$lib/components/ArticleForm.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<ArticleForm article={data.article} destinations={data.destinations} categories={data.categories} {form} />
