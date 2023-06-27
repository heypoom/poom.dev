import type { Content } from './types'

export function verifyReferences(contents: Content[]) {
  for (const content of contents) {
    for (const link of content.links) {
      const referenced = contents.find((c) => c.name === link)

      if (!referenced) {
        console.warn(`${content.name} -> ${link}: broken link!`)
      }
    }
  }
}
