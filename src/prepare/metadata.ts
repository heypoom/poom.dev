import omit from 'lodash/omit'
import { getLinks } from './links'

import type { FileMeta } from './types'

import { default as Front } from 'yaml-front-matter'

export async function extractMetadata(
  content: string
): Promise<FileMeta | null> {
  // Skip files without frontmatter, as we need to know if it's public or not.
  if (!/---/.test(content)) return null

  try {
    const meta = Front.loadFront(content)
    if (meta.public !== true && meta.Public !== true) return null

    return { metadata: omit(meta, ['__content']), links: getLinks(content) }
  } catch (err) {
    return null
  }
}
