import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { data: city, error: cityError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('slug', params.city)
		.eq('type', 'city')
		.eq('published', true)
		.single();

	if (cityError || !city) {
		throw error(404, 'City not found');
	}

	const { data: country, error: countryError } = await locals.supabase
		.from('destinations')
		.select('*')
		.eq('id', city.parent_id)
		.single();

	if (countryError || !country) {
		throw error(404, 'Country not found');
	}

	if (country.slug !== params.country) {
		throw error(404, 'City not found in this country');
	}

	const { data: articles, error: articlesError } = await locals.supabase
		.from('articles')
		.select('*, category:categories(*)')
		.eq('destination_id', city.id)
		.eq('published', true)
		.order('title');

	if (articlesError) {
		console.error('Error fetching articles:', articlesError);
	}

	return {
		city,
		country,
		articles: articles || []
	};
};
