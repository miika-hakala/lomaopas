import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.getSession();

	if (!session) {
		throw redirect(303, '/admin/login');
	}

	const isAdmin = await locals.isAdmin();
	if (!isAdmin) {
		throw error(403, 'Forbidden');
	}

	const { data: articles, error } = await locals.supabase
		.from('articles')
		.select(
			`
      id,
      slug,
      title,
      published,
      updated_at,
      destination:destinations(name, slug),
      category:categories(name, slug)
    `
		)
		.order('updated_at', { ascending: false });

	if (error) {
		console.error('Error fetching articles:', error);
		return { articles: [], session };
	}

	return {
		articles: articles || [],
		session,
		isAdmin
	};
};
