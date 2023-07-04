import { z } from 'zod'

export const Sitegraph = z.object({
  nodes: z
    .record(
      z.object({
        title: z.string().optional().describe('The title of the page.'),
        links: z
          .array(
            z.object({
              link: z.string().describe('Target of the link.'),
              displayText: z
                .string()
                .optional()
                .describe('The display text of the link.'),
            })
          )
          .describe('Outgoing links from this page.'),
      })
    )
    .describe(
      'A node in the sitegraph, like a page. The key should be a URL path.'
    ),
})

export type Sitegraph = z.infer<typeof Sitegraph>
export type SitegraphNode = Sitegraph['nodes'][string]
export type SitegraphLink = SitegraphNode['links'][number]
