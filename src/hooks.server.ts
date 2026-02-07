import type { Handle } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/supabase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient(event.cookies);

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	event.locals.isAdmin = async () => {
		const session = await event.locals.getSession();
		if (!session?.user?.id) return false;

		const { data, error } = await event.locals.supabase
			.from('admin_users')
			.select('user_id')
			.eq('user_id', session.user.id)
			.single();

		if (error) return false;
		return !!data;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
