import matter from 'gray-matter'

import { getImages, getLinks } from './links'
import { getTags } from './tags'

import type { NoteMeta } from './types'

export async function extractMetadata(
  source: string,
): Promise<NoteMeta | null> {
  // Skip files without frontmatter, as we need to know if it's public or not.
  if (!/---/.test(source)) return null

  try {
    const { data: meta } = matter(source)

    const isPublic = meta.public === true
    const isPublish = Array.isArray(meta.publish) && meta.publish.length > 0
    if (!isPublic && !isPublish) return null

    return {
      links: getLinks(source),
      images: getImages(source),
      tags: getTags(source),
      metadata: meta,
    }
  } catch (err) {
    return null
  }
}
