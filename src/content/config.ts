import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
    schema: ({ image }: { image: any }) => z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
        image: image().optional(),
        alt: z.string().optional(),
        category: z.string().default('Psicanálise'),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
