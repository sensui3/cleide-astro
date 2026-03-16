# Cleide Sarkis - Site de Psicanálise

## Visão Geral do Projeto

Este é um site institucional de uma clínica de psicanálise construído com **Astro 5**, um framework static site generator focado em performance. O site apresenta informações sobre serviços de terapia, blog com artigos, e páginas de localização para diferentes bairros de São Paulo.

## Stack Tecnológico

- **Framework**: Astro 5.4.1
- **Estilização**: UnoCSS (com preset Wind4 e Typography)
- **SEO**: astro-seo + sitemap + schema.org (Person, Clinic, Article)
- **Scripts**: Partytown (Google Analytics)
- **Build**: astro-compress + sharp
- **Linguagem**: TypeScript

## Estrutura de Pastas

```
src/
├── assets/              # Imagens e SVGs
│   ├── blog/            # Imagens dos posts do blog
│   └── cleide-sarkis.webp, logo.svg, icon.ico
├── components/          # Componentes reutilizáveis
│   ├── Header.astro     # Navegação principal
│   ├── Footer.astro     # Rodapé
│   ├── Hero.astro       # Seção hero da homepage
│   ├── About.astro      # Sobre a profissional
│   ├── Services.astro   # Serviços oferecidos
│   ├── Process.astro   # Processo de atendimento
│   ├── Testimonials.astro
│   ├── FAQ.astro        # Perguntas frequentes
│   ├── Contact.astro    # Formulário de contato
│   ├── Problem.astro    # Seção "Quando procurar"
│   ├── FloatingCTA.astro # Botão flutuante WhatsApp
│   ├── SEO.astro        # Componente de SEO
│   ├── BlogPreview.astro
│   ├── SchemaClinic.astro # Schema.org para clínica
│   └── SchemaPerson.astro # Schema.org para profissional
├── content/             # Conteúdo do blog (Markdown)
│   └── blog/            # Artigos em .md
├── layouts/
│   ├── BaseLayout.astro # Layout base com Header/Footer
│   └── TratamentoLayout.astro # Layout para páginas de tratamento
├── pages/               # Rotas do site
│   ├── index.astro      # Homepage
│   ├── sobre.astro      # Sobre
│   ├── contato.astro    # Contato
│   ├── primeira-sessao.astro
│   ├── tratamentos.astro
│   ├── psicanalise.astro
│   ├── terapia-ansiedade.astro
│   ├── terapia-depressao.astro
│   ├── terapia-traumas.astro
│   ├── terapia-relacionamento.astro
│   ├── psicanalise-vila-mariana.astro
│   ├── psicanalise-paraiso.astro
│   ├── psicanalise-bela-vista.astro
│   ├── psicanalise-sao-paulo.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [id].astro
│   └── [id].astro       # Página dinâmica para artigos
├── scripts/
│   └── main.js          # Scripts client-side
└── styles/
    └── tokens.css       # Variáveis CSS customizadas
```

## Componentes Principais

### BaseLayout
Layout padrão que inclui:
- Header com navegação
- Footer
- Botão flutuante do WhatsApp
- SEO tags e schema.org
- Scripts globais
- Animações CSS (reveal, scroll animations)

### FloatingCTA
Botão flutuante do WhatsApp que aparece após scroll, usa o utils/whatsapp.ts para gerar links.

### SEO
Gerencia meta tags, Open Graph, Twitter Cards e Schema.org.

### Schema Components
- **SchemaPerson**: Dados da profissional (Cleide Sarkis)
- **SchemaClinic**: Dados da clínica (endereço, horário, etc)
- **ArticleSchema**: Para posts do blog

## Pages Principais

1. **Homepage** (`index.astro`): Hero, Sobre, Serviços, Quando Procurar, FAQ, Blog preview
2. **Sobre** (`sobre.astro`): História profissional, formação, abordagem
3. **Tratamentos**: Páginas específicas para ansiedade, depressão, traumas, relacionamento
4. **Localizações**: Páginas com SEO local para Vila Mariana, Paraiso, Bela Vista, São Paulo
5. **Blog**: Artigos sobre psicologia e psicanálise

## Utils

`src/utils/whatsapp.ts`: Gera URLs do WhatsApp com mensagem automática.

## Scripts de Desenvolvimento

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build   # Build de produção
npm run preview # Preview do build
```

## Features Técnicas

- **SEO Local**: Páginas com endereços específicos para bairros de SP
- **Schema.org**: Dados estruturados para Google
- **Performance**: Imagens otimizadas, CSS/JS comprimido
- **Animações**: CSS scroll-driven animations + fade-in reveal
- **Acessibilidade**: skip-link, focus indicators, semantic HTML
- **Transições**: Astro View Transitions (ClientRouter)

## Variáveis de Estilo (tokens.css)

Cores customizadas (brand), espaçamento, tipografia baseada no design system.