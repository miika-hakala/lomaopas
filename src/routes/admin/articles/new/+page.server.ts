import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const [destinationsRes, categoriesRes] = await Promise.all([
		locals.supabase.from('destinations').select('id, name, slug').order('name'),
		locals.supabase.from('categories').select('id, name, slug').order('name')
	]);

	return {
		destinations: destinationsRes.data || [],
		categories: categoriesRes.data || []
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const title = formData.get('title')?.toString()?.trim() || '';
		const slug = formData.get('slug')?.toString()?.trim() || '';
		const content = formData.get('content')?.toString()?.trim() || '';
		const destinationId = formData.get('destination_id')?.toString() || '';
		const categoryId = formData.get('category_id')?.toString() || null;
		const published = formData.get('published') === 'on';

		if (!title || title.length > 200) {
			return fail(400, { error: 'Title is required (max 200 characters)', title, slug, content, destinationId, categoryId });
		}

		if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) {
			return fail(400, { error: 'Valid slug is required (lowercase, hyphens, max 200 characters)', title, slug, content, destinationId, categoryId });
		}

		if (!destinationId) {
			return fail(400, { error: 'Destination is required', title, slug, content, destinationId, categoryId });
		}

		if (content.length > 50000) {
			return fail(400, { error: 'Content is too long (max 50000 characters)', title, slug, content, destinationId, categoryId });
		}

		const { error: insertError } = await locals.supabase
			.from('articles')
			.insert({
				title,
				slug,
				content,
				destination_id: destinationId,
				category_id: categoryId,
				published
			});

		if (insertError) {
			return fail(500, { error: insertError.message, title, slug, content, destinationId, categoryId });
		}

		throw redirect(303, '/admin');
	}
};
