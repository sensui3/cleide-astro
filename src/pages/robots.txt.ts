import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site?.href ?? 'https://cleidesarkis.com.br';

    const body = `# robots.txt para https://cleidesarkis.com.br
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /backend/
Disallow: /api/
Disallow: /private/
Disallow: /tmp/
Disallow: /temp/
Disallow: /*.php$
Disallow: /cgi-bin/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /xmlrpc.php
Disallow: /readme.html
Disallow: /license.txt
Disallow: /config/
Disallow: /.env
Disallow: /.git
Disallow: /.svn
Disallow: /*?session=
Disallow: /*?password=
Disallow: /*?admin=
Disallow: /search
Disallow: /cart
Disallow: /checkout
Disallow: /my-account
Disallow: /wp-content/plugins/
Disallow: /wp-includes/

# Permissão explícita para motores de busca e agentes de IA (GEO / AEO)
User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Cohere-ai
Allow: /

# Rate-limit para ferramentas de auditoria e scrapers conhecidos
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

# Bloqueio de scrapers agressivos e scanners de vulnerabilidade
User-agent: dotbot
Disallow: /

User-agent: seocheck
Disallow: /

User-agent: masscan
Disallow: /

User-agent: nmap
Disallow: /

User-agent: zgrab
Disallow: /

User-agent: go-http-client
Disallow: /

# Sitemaps
Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
`;

    return new Response(body.trimStart(), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
