import omit from 'lodash/omit'
import { getLinks } from './links'

import type { NoteMeta } from './types'

import { default as Front } from 'yaml-front-matter'

export async function extractMetadata(
  source: string
): Promise<NoteMeta | null> {
  // Skip files without frontmatter, as we need to know if it's public or not.
  if (!/---/.test(source)) return null

  try {
    const meta = Front.loadFront(source)
    if (meta.public !== true && meta.Public !== true) return null

    return { metadata: omit(meta, ['__content']), links: getLinks(source) }
  } catch (err) {
    return null
  }
}
