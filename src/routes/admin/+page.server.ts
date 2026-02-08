import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent }) => {
  const { session } = await parent();

  const { data: articles, error: articlesError } = await locals.supabase
    .from('articles')
    .select(`
      id,
      slug,
      title,
      published,
      updated_at,
      destination:destinations(name, slug),
      category:categories(name, slug)
    `)
    .order('updated_at', { ascending: false });

  if (articlesError) {
    console.error('Error fetching articles:', articlesError);
    return { articles: [] };
  }

  return {
    articles: articles || []
  };
};
