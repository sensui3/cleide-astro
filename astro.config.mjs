import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  site: 'https://cleidesarkis.com.br',
  output: 'static',
  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'auto',
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        if (item.url.includes('/tratamentos/') || item.url.includes('/psicanalise-sao-paulo/')) {
          item.priority = 0.9;
        }
        if (item.url === 'https://cleidesarkis.com.br/') {
          item.priority = 1.0;
        }
        return item;
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: true,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    plugins: [
      ...(process.env.ANALYZE === 'true' ? [visualizer({
        filename: 'stats.html',
        gzipSize: true,
        brotliSize: true
      })] : [])
    ]
  }
});
