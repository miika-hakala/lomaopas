import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { data: destination, error: destError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('slug', params.country)
		.eq('type', 'country')
		.eq('published', true)
		.single();

	if (destError || !destination) {
		throw error(404, 'Destination not found');
	}

	const { data: cities, error: citiesError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('parent_id', destination.id)
		.eq('type', 'city')
		.eq('published', true)
		.order('name');

	if (citiesError) {
		console.error('Error fetching cities:', citiesError);
	}

	return {
		destination,
		cities: cities || []
	};
};
