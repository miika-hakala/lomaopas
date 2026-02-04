import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const { data: destinations } = await locals.supabase
		.from('destinations')
		.select('slug, type, updated_at, parent:destinations!parent_id(slug)')
		.eq('published', true);

	const { data: articles } = await locals.supabase
		.from('articles')
		.select(
			'slug, updated_at, destination:destinations!destination_id(slug, parent:destinations!parent_id(slug))'
		)
		.eq('published', true);

	const baseUrl = 'https://lomaopas.vercel.app';

	let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

	if (destinations) {
		for (const dest of destinations) {
			if (dest.type === 'country') {
				sitemap += `
  <url>
    <loc>${baseUrl}/${dest.slug}</loc>
    <lastmod>${dest.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
			} else if (dest.type === 'city' && dest.parent) {
				sitemap += `
  <url>
    <loc>${baseUrl}/${dest.parent.slug}/${dest.slug}</loc>
    <lastmod>${dest.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
			}
		}
	}

	if (articles) {
		for (const article of articles) {
			if (article.destination?.parent) {
				sitemap += `
  <url>
    <loc>${baseUrl}/${article.destination.parent.slug}/${article.destination.slug}/${article.slug}</loc>
    <lastmod>${article.updated_at}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
			}
		}
	}

	sitemap += `
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
