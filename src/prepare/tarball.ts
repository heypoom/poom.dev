import tar from 'tar'
import { Minipass } from 'minipass'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'

import { slugify } from './slug'
import { extractMetadata } from './metadata'

import type { Note } from './types'

const getPath = (path: string) => path.replace(/^.+?\//, '')
const getName = (path: string) => path.match(/.*\/(.*)\.md/)?.[1]

export async function scanTarball(buffer: Buffer): Promise<Note[]> {
  const reader = new Minipass<tar.ReadEntry>({ objectMode: true })

  const parser = new tar.Parse({
    filter: (path) => !/^(Archives|Journal|Resource)/.test(getPath(path)),
    onentry: (entry) => reader.write(entry),
  })

  const task = pipeline(Readable.from(buffer), parser).then(() => reader.end())

  const notes: Note[] = []

  for await (const entry of reader) {
    const path = getPath(entry.path)
    const name = getName(path)

    if (entry.type !== 'File' || entry.ignore || entry.meta || !name) {
      entry.resume()
      continue
    }

    const chunks = await entry.collect()
    const source = Buffer.concat(chunks).toString('utf-8')

    const meta = await extractMetadata(source)

    if (name && meta) {
      const note: Note = {
        name,
        path,
        slug: slugify(name, meta.metadata),
        size: entry.size ?? 0,
        source,
        timestamp: new Date(entry.mtime ?? 0),
        ...meta,
      }

      notes.push(note)
    }

    entry.resume()
  }

  await task

  return notes
}
