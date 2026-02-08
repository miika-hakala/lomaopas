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

	const { data: articles, error: artError } = await locals.supabase
		.from('articles')
		.select('*, category:categories(*)')
		.eq('destination_id', destination.id)
		.eq('published', true)
		.order('title');

	if (artError) {
		console.error('Error fetching articles:', artError);
	}

	return {
		region,
		destination,
		articles: articles || []
	};
};
