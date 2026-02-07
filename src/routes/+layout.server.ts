import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		session: await locals.getSession(),
		isAdmin: await locals.isAdmin()
	};
};
