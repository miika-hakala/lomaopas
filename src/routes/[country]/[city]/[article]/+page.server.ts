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

	if (countryError || !country || country.slug !== params.country) {
		throw error(404, 'Country not found');
	}

	const { data: article, error: articleError } = await locals.supabase
		.from('articles')
		.select('*, category:categories(*)')
		.eq('slug', params.article)
		.eq('destination_id', city.id)
		.eq('published', true)
		.single();

	if (articleError || !article) {
		throw error(404, 'Article not found');
	}

	return {
		article,
		city,
		country
	};
};
