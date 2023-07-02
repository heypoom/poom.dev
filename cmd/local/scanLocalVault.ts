import fs from 'fs/promises'
import path from 'path'

import { extractMetadata, type Note } from '../../src/prepare'

export async function scanLocalVault(root: string): Promise<Note[]> {
  async function scan(dir: string): Promise<Note[]> {
    const files = await fs.readdir(dir)

    const markdown = files.flatMap(async (fileName) => {
      if (fileName.startsWith('.')) return []

      const filePath = path.join(dir, fileName)
      const stat = await fs.stat(filePath)

      if (stat.isDirectory()) return scan(filePath)

      if (stat.isFile()) {
        const source = await fs.readFile(filePath, 'utf-8')
        const metadata = await extractMetadata(source)
        if (!metadata) return []

        const note: Note = {
          name: fileName.replace(/\.md$/, ''),
          path: filePath.replace(root, '').replace('/', ''),
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

  return scan(root)
}
