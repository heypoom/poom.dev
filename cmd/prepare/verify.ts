import type { Content } from './types'

export function verifyBacklinks(contents: Content[]) {
  const missing: [string, string][] = []

  for (const content of contents) {
    for (const link of content.links) {
      const referenced = contents.find((c) => c.name === link)

      if (!referenced) {
        console.log(`${content.name} -> ${link}: broken link!`)
      }
    }
  }
}
