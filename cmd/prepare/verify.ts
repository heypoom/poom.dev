import { HOME_NAME } from './constants'

import type { Content } from './types'

export function verifyReferences(contents: Content[]) {
  const graph = new Map<string, Set<string>>()

  for (const parent of contents) {
    for (const link of parent.links) {
      // Does all links in the content exist?
      const child = contents.find((c) => c.name === link)

      if (!child) {
        console.warn(`${parent.name} -> ${link}: inaccessible!`)
        continue
      }

      // Track the reference in the graph.
      if (graph.has(parent.path)) {
        graph.get(parent.path)?.add(child.path)
      } else {
        graph.set(parent.path, new Set([child.path]))
      }
    }
  }

  console.log(graph)

  // for (const content of contents) {
  //   console.warn(`${content.name}: never referenced!`)
  // }
}
