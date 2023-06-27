import fs from 'fs/promises'
import path from 'path'
import omit from 'lodash/omit'

import { default as Front } from 'yaml-front-matter'

import { NOTES_DIR } from './constants'

type Content = FileMeta & {
  name: string
  path: string
  createdAt: Date
}

interface FileMeta {
  metadata: Record<string, any>
}

export async function processMarkdownFiles(root: string): Promise<Content[]> {
  const files = await fs.readdir(root)

  const markdown = files.flatMap(async (fileName) => {
    if (fileName.startsWith('.')) return []

    const filePath = path.join(root, fileName)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      return processMarkdownFiles(filePath)
    }

    if (stat.isFile()) {
      const meta = await processFile(filePath)
      if (!meta) return []

      const content: Content = {
        name: fileName,
        path: filePath.replace(NOTES_DIR, '').replace('/', ''),
        createdAt: stat.birthtime,
        ...meta,
      }

      return [content]
    }

    return []
  })

  const tree = await Promise.all(markdown)

  return tree.flat()
}

async function processFile(path: string): Promise<FileMeta | null> {
  const content = await fs.readFile(path, 'utf-8')

  // Skip files without frontmatter, as we need to know if it's public or not.
  if (!/---/.test(content)) return null

  try {
    const meta = Front.loadFront(content)
    if (meta.public !== true && meta.Public !== true) return null

    return { metadata: omit(meta, ['__content']) }
  } catch (err) {
    return null
  }
}
