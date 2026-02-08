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

	const { data: destinations, error: destError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('parent_id', region.id)
		.in('type', ['city', 'island'])
		.eq('published', true)
		.order('name');

	if (destError) {
		console.error('Error fetching destinations:', destError);
	}

	// Get parent country for breadcrumbs
	const { data: country } = await locals.supabase
		.from('destinations')
		.select('slug, name')
		.eq('id', region.parent_id)
		.single();

	return {
		region,
		destinations: destinations || [],
		country: country || null
	};
};
