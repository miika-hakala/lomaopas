import type { PageServerLoad } from './$types';

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
