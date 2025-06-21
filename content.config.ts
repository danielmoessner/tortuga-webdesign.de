import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    referenzen: defineCollection({
      type: "page",
      source: "portfolio/*.json",
      schema: z.object({
        date: z.string(),
        title: z.string(),
        slug: z.string(),
        url: z.string().optional(),
        image: z.string(),
        active: z.boolean(),
        description: z.string(),
        tags: z.array(z.string()),
      }),
    }),
    seiten: defineCollection({
      type: "page",
      source: "page/*.(md|json)",
      schema: z.object({
        meta: z.record(z.string(), z.any()),
      }),
    }),
    artikel: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        date: z.string(),
        image: z.string(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        author: z.object({
          name: z.string(),
          image: z.string().optional(),
        }),
      }),
    }),
    angebote: defineCollection({
      type: "page",
      source: "packages/*.(md|json)",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        price: z.number(),
        features: z.array(z.string()),
      }),
    }),
    leistungen: defineCollection({
      type: "page",
      source: "service/*.md",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        subtitle: z.string(),
        srOnlyTitle: z.string(),
        metaDescription: z.string(),
      }),
    }),
  },
});
