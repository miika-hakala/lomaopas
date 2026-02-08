import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  // Login-sivu on julkinen
  if (url.pathname === '/admin/login') {
    const session = await locals.getSession();
    if (session) {
      const isAdmin = await locals.isAdmin();
      if (isAdmin) throw redirect(303, '/admin');
    }
    return {};
  }

  const session = await locals.getSession();
  if (!session) {
    throw redirect(303, '/admin/login');
  }

  const isAdmin = await locals.isAdmin();
  if (!isAdmin) {
    throw error(403, 'Forbidden');
  }

  return {
    session,
    isAdmin
  };
};
