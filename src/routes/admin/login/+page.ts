import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { session, isAdmin } = await parent();

	if (session && isAdmin) {
		throw redirect(303, '/admin');
	}

	return {};
};
