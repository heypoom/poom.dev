import { z, defineCollection } from 'astro:content'
import { parse } from 'date-fns'

const talks = defineCollection({
  schema: {
    title: z.string(),
    tags: z.array(z.string()).default([]),
    language: z.enum(['en', 'th']).default('en'),
    slides: z.string().optional().describe(`Links to the slide deck`),
    event: z
      .string()
      .optional()
      .describe('Which conference or meetup was the talk given at?'),
    date: z
      .string()
      .optional()
      .transform((str) => {
        if (!str) return null

        return parse(str ?? '', 'MMMM d, yyyy', new Date())
      }),
    video: z
      .string()
      .optional()
      .describe(
        'Links to videos or recordings of the talk; e.g. YouTube, Twitch, Facebook Live'
      ),
  },
})

const events = defineCollection({
  schema: {
    title: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().describe('Link to the Creatorsgarten event page.'),
    image: z.string().optional(),
    date: z
      .string()
      .optional()
      .describe('When was the event organized?')
      .transform((str) => {
        if (!str) return null

        return parse(str ?? '', 'MMMM d, yyyy', new Date())
      }),
  },
})

export const collections = { talks, events }
