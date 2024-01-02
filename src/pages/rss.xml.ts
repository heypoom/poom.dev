import rss from '@astrojs/rss'

import { db } from '../prepare/db'

export const prerender = false

export async function GET(context) {
  const notes$ = await db.notes()

  const writings = await notes$
    .find(
      { slug: { $exists: true }, 'metadata.publish': { $in: ['poom.blogs'] } },
      { projection: { slug: 1, name: 1, timestamp: 1 } },
    )
    .sort({ timestamp: -1 })
    .toArray()

  return rss({
    title: 'Phoomparin Mano',
    description: "Poom's Blog",
    site: context.site,
    items: writings
      .map((note) => ({
        title: note.name,
        pubDate: note.timestamp,
        description: '',
        link: `/${note.slug}`,
      }))
      .filter((note) => note.link && note.title),
  })
}
