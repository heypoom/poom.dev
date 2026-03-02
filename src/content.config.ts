import { defineCollection, z } from 'astro:content'

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string().optional(),
    date: z.coerce.date().optional(),
    url: z.string().optional(),
  }),
})

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    image: z.string().optional(),
  }),
})

export const collections = { talks, events }
