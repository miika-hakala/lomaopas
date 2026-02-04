import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const baseUrl = 'https://lomaopas.vercel.app';

	let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

	const { data: destinations } = await locals.supabase
		.from('destinations')
		.select('id, slug, type, parent_id, updated_at')
		.eq('published', true);

	const { data: articles } = await locals.supabase
		.from('articles')
		.select('slug, updated_at, destination_id')
		.eq('published', true);

	if (destinations) {
		const destMap = new Map(destinations.map((d) => [d.id, d]));

		for (const dest of destinations) {
			if (dest.type === 'country') {
				sitemap += `
  <url>
    <loc>${baseUrl}/${dest.slug}</loc>
    <lastmod>${dest.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
			}
		}

		for (const dest of destinations) {
			if (dest.type === 'city' && dest.parent_id) {
				const parent = destMap.get(dest.parent_id);
				if (parent) {
					sitemap += `
  <url>
    <loc>${baseUrl}/${parent.slug}/${dest.slug}</loc>
    <lastmod>${dest.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
				}
			}
		}

		if (articles) {
			for (const article of articles) {
				const city = destMap.get(article.destination_id);
				if (city && city.parent_id) {
					const country = destMap.get(city.parent_id);
					if (country) {
						sitemap += `
  <url>
    <loc>${baseUrl}/${country.slug}/${city.slug}/${article.slug}</loc>
    <lastmod>${article.updated_at}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
					}
				}
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
