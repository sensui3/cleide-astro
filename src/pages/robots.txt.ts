import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site?.href ?? 'https://cleidesarkis.com.br';
    
    // Bots Permitidos (principais mecanismos de busca e ferramentas úteis)
    const allowedBots = [
        // Google
        'Googlebot',
        'Googlebot-Image',
        'Googlebot-News',
        'Googlebot-Video',
        'Mediapartners-Google',
        'AdsBot-Google',
        'Google-InspectionTool',
        'GoogleOther',
        // Bing/Microsoft
        'bingbot',
        'msnbot',
        'adidxbot',
        'bingpreview',
        // Yahoo
        'Slurp',
        // Yandex
        'YandexBot',
        'YandexImages',
        // DuckDuckGo
        'DuckDuckBot',
        'DuckDuckGo-Favicons-Bot',
        // Baidu
        'Baiduspider',
        // Facebook/Social Media
        'facebookexternalhit',
        'Facebot',
        'Twitterbot',
        'LinkedInBot',
        // Pinterest
        'Pinterestbot',
        // Reddit
        'Redditbot',
        // Apple
        'Applebot',
        // Alexa/Amazon
        'ia_archiver',
        // Ahrefs (SEO tool)
        'AhrefsBot',
        'AhrefsSiteAudit',
        // SEMrush
        'SemrushBot',
        'SemrushBot',
        //obot (Jeto SEO)
        'jetbot',
        // Majestic
        'MJ12bot',
        // Screaming Frog
        'Screaming Frog SEO Spider',
        // Sitebulb
        'Sitebulb',
        // SEO PowerSuite
        'NetcraftSurveyAgent',
        // Wget/curl (para debug)
        'Wget',
        'curl',
        // Validação Google
        'google-sitemap-generator',
        // Outros bots legítimos
        'BingWebAuth',
        'Google-Structured-Data-Testing-Tool',
    ].join('|');

    const body = `User-agent: *
Allow: /

# Regras específicas por bot
User-agent: ${allowedBots}
Allow: /

# Bloquear bots maliciosos/comuns
User-agent: *
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

# Bloquear bots de scrapers e agressivos (adicione mais conforme necessário)
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

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

# Bloquear bots de IA e treinamento
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# Sitemap
Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}

# Diretivas adicionais
Clean-param: ?utm_*&utm_source=*&utm_medium=*&utm_campaign=* /`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
