import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { data: article, error: articleError } = await locals.supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single();

  if (articleError || !article) {
    throw error(404, 'Article not found');
  }

  const [destinationsRes, categoriesRes] = await Promise.all([
    locals.supabase.from('destinations').select('id, name, slug').order('name'),
    locals.supabase.from('categories').select('id, name, slug').order('name')
  ]);

  return {
    article,
    destinations: destinationsRes.data || [],
    categories: categoriesRes.data || []
  };
};
