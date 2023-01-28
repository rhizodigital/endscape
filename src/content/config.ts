import { z, defineCollection } from 'astro:content';
import { AUTHORS } from '../consts';


const blog = defineCollection({
    schema: z.object({
        title: z.string().max(70, "For optimal SEO, please provide a title of 70 chars or less."),
        description: z.string().max(160, "For optimal SEO, please provide a description of 160 chars or less."),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        heroImage: z.string().optional(),
        tags: z.array(z.string()),
        authors: z.array(z.enum(AUTHORS)),
    })
});

const authors = defineCollection({
    schema: z.object({
        name: z.string(z.enum(AUTHORS)),
        image: z.string(),
    })
})

export const collections = { blog, authors };