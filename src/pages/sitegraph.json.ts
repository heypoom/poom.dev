import type { APIRoute } from 'astro'

import { slugify } from '../prepare/slug'
import { type Note } from '../prepare/types'

import { Sitegraph } from '../lib/sitegraph'

export const GET: APIRoute = async () => {
  const graph: Sitegraph = { nodes: {} }

  // const notes = await notes$
  //   .find({}, { projection: { slug: 1, name: 1, timestamp: 1, links: true } })
  //   .toArray()

  const notes: Note[] = []

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
