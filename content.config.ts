import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.(md|json)'
    }),
    referenzen: defineCollection({
      type: "data",
      source: 'portfolio/*.json',
      schema: z.object({
        date: z.string(),
        title: z.string(),
        slug: z.string(),
        url: z.string().optional(),
        image: z.string(),
        active: z.boolean(),
        description: z.string(),
        tags: z.array(z.string()),
      })
    })
  }
})