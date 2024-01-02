import omit from 'lodash/omit'
import { getImages, getLinks } from './links'

import type { NoteMeta } from './types'

import matter from 'gray-matter'
import { getTags } from './tags'

export async function extractMetadata(
  source: string,
): Promise<NoteMeta | null> {
  // Skip files without frontmatter, as we need to know if it's public or not.
  if (!/---/.test(source)) return null

  try {
    const meta = matter(source)?.data

    const isPublic = meta.public === true
    const isPublish = Array.isArray(meta.publish) && meta.publish.length > 0
    if (!isPublic && !isPublish) return null

    return {
      links: getLinks(source),
      images: getImages(source),
      tags: getTags(source),
      metadata: omit(meta, ['__content']),
    }
  } catch (err) {
    return null
  }
}
