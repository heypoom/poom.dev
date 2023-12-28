import type { APIRoute } from 'astro'

import { db } from '../prepare/db'
import { slugify } from '../prepare'

import { Sitegraph } from '../lib/sitegraph'

export const GET: APIRoute = async () => {
  const graph: Sitegraph = { nodes: {} }

  const notes$ = await db.notes()

  const notes = await notes$
    .find({}, { projection: { slug: 1, name: 1, timestamp: 1, links: true } })
    .toArray()

  for (const note of notes) {
    graph.nodes[note.slug ?? note.name] = {
      title: note.name,
      links: note.links.map((name) => {
        const slug = notes.find((n) => n.name === name)?.slug

        return { link: slug ?? slugify(name), displayText: name }
      }),
    }
  }

  await Sitegraph.parseAsync(graph)

  return new Response(JSON.stringify(graph))
}
