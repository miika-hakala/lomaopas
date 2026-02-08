import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { data: regions, error: regionsError } = await locals.supabase
		.from('destinations')
		.select('slug, name')
		.eq('type', 'region')
		.eq('published', true)
		.order('name');

	if (regionsError) {
		console.error('Error fetching regions:', regionsError);
	}

	return {
		regions: regions || []
	};
};
