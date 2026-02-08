import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { data: region, error: regionError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('slug', params.region)
		.eq('type', 'region')
		.eq('published', true)
		.single();

	if (regionError || !region) {
		throw error(404, 'Region not found');
	}

	const { data: destination, error: destError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('slug', params.destination)
		.eq('parent_id', region.id)
		.in('type', ['city', 'island'])
		.eq('published', true)
		.single();

	if (destError || !destination) {
		throw error(404, 'Destination not found');
	}

	const { data: article, error: articleError } = await locals.supabase
		.from('articles')
		.select('*, category:categories(*)')
		.eq('slug', params.article)
		.eq('destination_id', destination.id)
		.eq('published', true)
		.single();

	if (articleError || !article) {
		throw error(404, 'Article not found');
	}

	return {
		article,
		destination,
		region
	};
};
