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

	const [destinationsRes, categoriesRes] = await Promise.all([
		locals.supabase.from('destinations').select('id, name, slug').order('name'),
		locals.supabase.from('categories').select('id, name, slug').order('name')
	]);

	return {
		destinations: destinationsRes.data || [],
		categories: categoriesRes.data || [],
		session,
		isAdmin
	};
};
