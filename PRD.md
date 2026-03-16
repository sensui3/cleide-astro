# 📄 PRD: Site Cleide Sarkis - Psicanálise

Este documento detalha os requisitos, objetivos e estratégia técnica do site **Cleide Sarkis**, desenvolvido com **Astro 5**.

---

## 1. Visão Geral do Projeto
O projeto consiste na criação e evolução de uma presença digital premium para a psicanalista Cleide Sarkis. O foco principal é converter visitantes em pacientes através de autoridade, design emocional e otimização para motores de busca (SEO).

- **URL Principal:** `https://cleidesarkis.com.br`
- **Objetivo Primário:** Agendamento de consultas (Leads via WhatsApp).
- **Objetivo Secundário:** Educação sobre psicanálise e construção de autoridade (Blog).

---

## 2. Objetivos de Negócio & KPIs
| Objetivo | Métrica de Sucesso (KPI) |
| :--- | :--- |
| **Geração de Leads** | Cliques no botão flutuante de WhatsApp e formulário de contato. |
| **Visibilidade Local** | Ranking na primeira página do Google para termos como "Psicanalista Bela Vista" ou "Terapia Paraíso". |
| **Engajamento** | Tempo médio de permanência nas páginas do blog (> 2 minutos). |
| **Performance** | Core Web Vitals com "Pass": LCP < 2.5s, CLS < 0.1. |

---

## 3. Personas (Público-Alvo)
1. **Profissional do Setor Corporativo:** Busca terapia para lidar com estresse, ansiedade e síndrome de burnout. Valoriza discrição e ambiente profissional.
2. **Pais em Busca de Suporte:** Procuram orientação sobre dinâmica familiar, depressão pós-parto ou questões emocionais dos filhos.
3. **Pessoas em Transição de Vida:** Indivíduos enfrentando luto, divórcio ou transições de carreira.

---

## 4. Arquitetura de Informação
O site segue uma estrutura de **Silo SEO** para maximizar a autoridade temática.

### Estrutura de Páginas:
- **Home:** Hub central de autoridade com FAQ, depoimentos e visão geral dos serviços.
- **Sobre:** Perfil profissional, formação e abordagem (Psicanálise).
- **Tratamentos:** Hub de serviços (Ansiedade, Depressão, Relacionamentos, Traumas).
- **Páginas de Localização (SEO Local):**
  - `/psicanalise-bela-vista/`
  - `/psicanalise-paraiso/`
  - `/psicanalise-vila-mariana/`
  - `/psicanalise-sao-paulo/`
- **Blog:** Artigos educativos sob o path `/blog/`.
- **Primeira Sessão:** Landing page focada em explicar como funciona o início do processo terapêutico.
- **Contato:** Página com formulário e mapa.

---

## 5. Requisitos Funcionais

### 5.1 Landing & Conversão
- **Botão Flutuante (CTA):** Sempre visível no mobile e desktop para contato via WhatsApp.
- **FAQ Dinâmico:** Seção de perguntas frequentes para quebrar objeções de conversão.
- **Formulário de Contato:** Validação simples de campos e envio focado em conversão.

### 5.2 Conteúdo & Autoridade
- **Blog Dinâmico:** Gestão de conteúdo via Markdown (Astro Content Collections).
- **Tags e Categorias:** Organização temática para melhorar a navegabilidade.
- **Seção de Depoimentos:** Prova social estratégica (anonimizada conforme ética profissional).

---

## 6. Requisitos Não Funcionais (Técnicos)

### 6.1 Stack Tecnológica
- **Framework:** [Astro 5](https://astro.build/) (Modo estático por padrão).
- **Estilização:** [UnoCSS](https://unocss.dev/) (CSS-in-JS de alta performance).
- **SEO:** `astro-seo` e `sitemap-integration`.
- **Scripts:** `Partytown` para scripts de terceiros (Google Analytics) sem travar a main thread.

### 6.2 SEO & Dados Estruturados
Mapeamento de Schema.org para todos os tipos de conteúdo:
- **`Psychologist`:** Para a Cleide como profissional.
- **`MedicalClinic`:** Para o espaço físico.
- **`FAQPage`:** Para a seção de dúvidas.
- **`Article`:** Para os posts do blog.

### 6.3 Performance & UX
- **Mobile First:** Design totalmente responsivo.
- **Design Emocional:** Uso de cores que transmitem calma e confiança (Paleta de cores premium).
- **Acessibilidade:** Conformidade básica com WCAG 2.1 (Aria-labels, contraste de cores).

---

## 7. Estratégia de SEO Local
O projeto prioriza a captura de tráfego geolocalizado. As páginas de bairro utilizam palavras-chave específicas:
- H1: Psicanalista em [Bairro] - Atendimento Presencial e Online.
- Conteúdo: Menção a referências geográficas locais (Bela Vista, Av. Paulista, etc).
- Meta Tags: Descrições otimizadas para taxa de clique (CTR) em resultados locais.

---

## 8. Roadmap (Evolução)
- [x] **Fase 1:** Migração para Astro & UnoCSS.
- [x] **Fase 2:** Estruturação de Silo SEO e Localização.
- [x] **Fase 3:** Refinamento de Narrativa (FAQ, Authority Signals, Benefícios).
- [ ] **Fase 4:** Implementação de Programmatic SEO para mais bairros.
- [ ] **Fase 5:** Otimização Avançada de Performance (Service Workers, Edge Caching).

---
*Atualizado em: 04 de Março de 2026*
