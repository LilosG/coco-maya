import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    eventCTA: z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string().optional(),
        secondaryHref: z.string().optional(),
        formLabel: z.string(),
        formSubtitle: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
