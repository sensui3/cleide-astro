import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURAÇÕES ---
const XML_FILE = path.join(__dirname, '..', 'cleidesarkispsicologa.WordPress.2026-03-02-posts.xml');
const POSTS_OUT = path.join(__dirname, '..', 'src', 'content', 'blog');
const IMAGES_OUT = path.join(__dirname, '..', 'public', 'assets', 'blog');

// Função para limpar nomes de arquivos
const sanitizeFilename = (name) => name.toLowerCase().replace(/[^a-z0-9.]/g, '-').replace(/-+/g, '-');

async function downloadImage(url) {
    if (!url || !url.startsWith('http')) return null;

    // Remove query params
    const cleanUrl = url.split('?')[0];
    const originalName = path.basename(new URL(cleanUrl).pathname);
    const ext = path.extname(originalName) || '.jpg';
    const baseName = sanitizeFilename(path.basename(originalName, ext));
    const newName = `${baseName}${ext}`;
    const localPath = path.join(IMAGES_OUT, newName);

    if (fs.existsSync(localPath)) return `/assets/blog/${newName}`;

    if (!fs.existsSync(IMAGES_OUT)) fs.mkdirSync(IMAGES_OUT, { recursive: true });

    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const stream = fs.createWriteStream(localPath);
                res.pipe(stream);
                stream.on('finish', () => {
                    console.log(`✓ Imagem salva: ${newName}`);
                    resolve(`/assets/blog/${newName}`);
                });
            } else {
                console.error(`✗ Erro ao baixar ${url}: Status ${res.statusCode}`);
                resolve(null);
            }
        }).on('error', (err) => {
            console.error(`✗ Erro ao baixar ${url}: ${err.message}`);
            resolve(null);
        });
    });
}

const getTagContent = (xml, tag) => {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    const match = xml.match(regex);
    if (!match) return '';
    let content = match[1].trim();
    if (content.startsWith('<![CDATA[')) {
        content = content.substring(9, content.length - 3);
    }
    return content;
};

const getPostMeta = (xml, key) => {
    // Escapa a chave para uso em regex
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`<wp:postmeta>\\s*<wp:meta_key><!\\[CDATA\\[${escapedKey}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>\\s*<\\/wp:postmeta>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].trim() : '';
};

async function migrate() {
    console.log('🚀 Iniciando Migração Organizada...');
    if (!fs.existsSync(POSTS_OUT)) fs.mkdirSync(POSTS_OUT, { recursive: true });

    const data = fs.readFileSync(XML_FILE, 'utf-8');
    const items = data.split('<item>').slice(1);

    // 1. MAPEAMENTO DE ATTACHMENTS (ID -> URL)
    const attachments = {};
    console.log('--- Mapeando anexos ---');
    for (const item of items) {
        const type = getTagContent(item, 'wp:post_type');
        if (type === 'attachment') {
            const id = getTagContent(item, 'wp:post_id');
            const url = getTagContent(item, 'wp:attachment_url');
            if (id && url) attachments[id] = url;
        }
    }

    // 2. PROCESSAMENTO DE POSTS
    for (const item of items) {
        const type = getTagContent(item, 'wp:post_type');
        const status = getTagContent(item, 'wp:status');

        if (type === 'post' && status === 'publish') {
            const title = getTagContent(item, 'title');
            const slug = getTagContent(item, 'wp:post_name');
            const date = getTagContent(item, 'pubDate');
            let content = getTagContent(item, 'content:encoded');

            console.log(`\n/--- Processando: ${title} ---/`);

            // Extrair e baixar imagens do corpo do texto (WordPress API style URL)
            const imgRegex = /src="([^"]+)"/g;
            let match;
            while ((match = imgRegex.exec(content)) !== null) {
                const oldUrl = match[1];
                if (oldUrl.includes('/wp-content/uploads/')) {
                    const newLocalUrl = await downloadImage(oldUrl);
                    if (newLocalUrl) {
                        content = content.replaceAll(oldUrl, newLocalUrl);
                    }
                }
            }

            // Featured Image (Thumbnail)
            const thumbId = getPostMeta(item, '_thumbnail_id');
            let featuredImage = '';
            if (thumbId && attachments[thumbId]) {
                const thumbUrl = attachments[thumbId];
                featuredImage = await downloadImage(thumbUrl);
            }

            // SEO Desc
            const metaDesc = getPostMeta(item, 'rank_math_description') || title;

            // Categories (just take the first one or default)
            const categoriesRegex = /<category domain="category" nicename="([^"]+)"><!\[CDATA\[(.*?)\]\]><\/category>/g;
            const catMatches = [...item.matchAll(categoriesRegex)];
            const category = catMatches.length > 0 ? catMatches[0][2] : 'Psicóloga';

            const cleanContent = content.replaceAll('https://cleidesarkis.com.br/', '/');

            const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${metaDesc.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
publishedAt: ${new Date(date).toISOString()}
image: "${featuredImage || ''}"
category: "${category}"
draft: false
---

${cleanContent}`;

            fs.writeFileSync(path.join(POSTS_OUT, `${slug}.md`), markdown);
            console.log(`✅ Post "${slug}.md" criado.`);
        }
    }
    console.log('\n✨ Migração finalizada! Todas as imagens estão em /public/assets/blog/');
}

migrate();
