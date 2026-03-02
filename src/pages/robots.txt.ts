import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site?.href ?? 'https://cleidesarkis.com.br';
    const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_astro/
Disallow: /_image/

Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
