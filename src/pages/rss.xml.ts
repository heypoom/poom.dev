import rss from '@astrojs/rss'

import type { Note } from '../prepare/types'

export async function GET(context: any) {
  // const writings = await notes$
  //   .find(
  //     { slug: { $exists: true }, 'metadata.publish': { $in: ['poom.blogs'] } },
  //     { projection: { slug: 1, name: 1, timestamp: 1 } },
  //   )
  //   .sort({ timestamp: -1 })
  //   .toArray()

  const writings: Note[] = []

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
