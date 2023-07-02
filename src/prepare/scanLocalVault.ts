import fs from 'fs/promises'
import path from 'path'

import { NOTES_DIR } from './constants'

import type { Note } from './types'
import { extractMetadata } from './metadata'

export async function scanLocalVault(root: string): Promise<Note[]> {
  const files = await fs.readdir(root)

  const markdown = files.flatMap(async (fileName) => {
    if (fileName.startsWith('.')) return []

    const filePath = path.join(root, fileName)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      return scanLocalVault(filePath)
    }

    if (stat.isFile()) {
      const source = await fs.readFile(filePath, 'utf-8')
      const metadata = await extractMetadata(source)
      if (!metadata) return []

      const note: Note = {
        name: fileName.replace(/\.md$/, ''),
        path: filePath.replace(NOTES_DIR, '').replace('/', ''),
        source: source,
        size: stat.size,
        timestamp: stat.birthtime,
        ...metadata,
      }

      return [note]
    }

    return []
  })

  const tree = await Promise.all(markdown)

  return tree.flat()
}
