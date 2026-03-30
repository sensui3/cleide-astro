# Cleide Sarkis - Astro Site Agent Instructions

Site de psicanálise com Astro 5 + UnoCSS + Partytown para Google Analytics.

## Scripts

```bash
pnpm dev        # Development server em localhost:4321
pnpm build      # Build para produção (gera /dist)
pnpm preview    # Preview do build
pnpm astro      # CLI do Astro
```

Para analisar o build: `ANALYZE=true pnpm build` (gera `stats.html`).

## Estrutura do Projeto

```
src/
├── components/     # Componentes Astro (.astro)
├── layouts/        # Layouts base (BaseLayout.astro)
├── pages/          # Rotas (index, blog, tratamentos, etc.)
├── content/        # Blog posts em Markdown
├── scripts/        # JavaScript client-side
├── styles/         # CSS (tokens.css)
├── assets/         # Imagens, SVGs, fontes
└── utils/          # Funções utilitárias
```

## Convenções de Código

### Astro Components
- Frontmatter (---) no topo com imports organizados
- Props tipadas com interface explícita
- Props opcionais com valores default
- Uso de `<slot />` para conteúdo children
- `<script>` tag no final para JavaScript client-side

### Imports
```astro
---
import { getWhatsappUrl } from '../utils/whatsapp';
import { Image } from 'astro:assets';
import logo from '../assets/logo.svg';
---
```

### HTML/JSX
- Atributos em múltiplas linhas quando > 2
- camelCase para props React-like em Astro
- use `class` (não `className`)
- Always include `aria-*` attributes for accessibility

### CSS (UnoCSS)
- Utility classes via UnoCSS (Tailwind-like)
- Custom colors via `brand-*` (brand-500, brand-700, etc.)
- Custom fonts via `font-display`, `font-body`
- CSS custom properties em `src/styles/tokens.css`

### TypeScript
- Interfaces para Props de componentes
- `type` para tipos utilitários
- Tipos para content collections quando necessário

### Naming Conventions
- Componentes: PascalCase (`Header.astro`, `BlogPreview.astro`)
- Utilitários: camelCase (`getWhatsappUrl`)
- Arquivos de página: kebab-case (`contato.astro`, `sobre.astro`)
- Pastas: kebab-case

### SEO/Performance
- Sempre incluir `<SEO>` component com title, description
- Structured data para páginas importantes (ArticleSchema, SchemaPerson, SchemaClinic)
- Imagens com `width`, `height`, `alt`, `loading`, `fetchpriority`
- Preload para assets críticos (fonts, hero image)

### Redirects
Configurados em `astro.config.mjs`:
```js
redirects: {
  '/old-url/': '/new-url/',
}
```

### Content Collections
Blog posts em `src/content/blog/*.md` com frontmatter para metadata.

## Configurações Importantes

### astro.config.mjs
- `site`: URL base do site
- `trailingSlash: 'always'`: Todas URLs com trailing slash
- `output: 'static'`: Geração estática
- Integrações: sitemap, compress, partytown, UnoCSS

### Partytown (Google Analytics)
- Analytics carrega apenas em produção (`import.meta.env.PROD`)
- Forward configurado: `['gtag', 'dataLayer.push']`
- Componente em `src/components/Analytics.astro`

## Build Output
- `dist/`: Arquivos estáticos para deploy
- `stats.html`: Análise do bundle (quando ANALYZE=true)

## Tech Stack
- Astro 5.x (static site generator)
- UnoCSS (CSS utilities - preset-wind4)
- Partytown (Google Analytics off-main-thread)
- astro-compress (build compression)
- @astrojs/sitemap (SEO sitemap)
- Sharp (image optimization)
- TypeScript (tipagem)
