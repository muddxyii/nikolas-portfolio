import { siteConfig } from '$lib/config';
import { getProjects } from '$lib/projects';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const projects = await getProjects();

	const pages = [
		{ url: siteConfig.url, priority: '1.0', changefreq: 'monthly', lastmod: null },
		{ url: `${siteConfig.url}/projects`, priority: '0.9', changefreq: 'weekly', lastmod: null },
		...projects.map((p) => ({
			url: `${siteConfig.url}/projects/${p.slug}`,
			priority: '0.8',
			changefreq: 'monthly',
			lastmod: p.date
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${p.url}</loc>${p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
