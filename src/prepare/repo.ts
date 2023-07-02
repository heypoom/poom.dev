import tar from 'tar'
import { Readable } from 'stream'
import fs from 'fs/promises'

import { octokit } from './octokit'

import { GITHUB_OWNER, GIT_REPO } from './constants'

import type { Content } from './types'
import { extractMetadata } from './metadata'

export async function getTarballBuffer(): Promise<Buffer> {
  const res = await octokit.rest.repos.downloadTarballArchive({
    owner: GITHUB_OWNER,
    repo: GIT_REPO,
    ref: 'main',
  })

  return Buffer.from(res.data as ArrayBuffer)
}

const getPath = (path: string) => path.replace(/^.+?\//, '')
const getName = (path: string) => path.match(/.*\/(.*)\.md/)?.[1]

export function parseTarballFromBuffer(buffer: Buffer): Promise<Content[]> {
  return new Promise((resolve, reject) => {
    const contents: Content[] = []

    const parser = new tar.Parse({
      filter: (path) => !/^(Archives|Journal|Resource)/.test(getPath(path)),

      async onentry(entry) {
        const chunks = await entry.collect()
        const path = getPath(entry.path)

        console.log('>', path)

        if (entry.type === 'File') {
          const name = getName(path)

          const source = Buffer.concat(chunks).toString('utf-8')
          const metadata = await extractMetadata(source)

          if (name && metadata) {
            const content: Content = {
              name,
              path,
              size: entry.size ?? 0,
              createdAt: new Date(entry.mtime ?? 0),
              ...metadata,
            }

            contents.push(content)
          }
        }
      },
    })

    const s = Readable.from(buffer).pipe(parser)
    s.on('end', () => console.log('END'))
    s.on('close', () => console.log('CLOSED'))

    setTimeout(() => {
      resolve(contents)
    }, 3000)
  })
}

// await parseTarballFromBuffer(await getTarballBuffer())
await parseTarballFromBuffer(await fs.readFile('./tarball.tar'))

// fs.writeFile('./tarball.tar', await getTarballBuffer())
