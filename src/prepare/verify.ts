import ch from 'chalk'
import { warn } from 'console'

import { HOME_NAME } from './constants'

import type { Note } from './types'

type G = Map<string, Set<string>>

const diff = <T>(a: T[], b: T[]): T[] => [...a].filter((x) => !b.includes(x))

function scanOrphans(graph: G, rootId: string): string[] {
  const root = graph.get(rootId)
  if (!root) return []

  const visited = new Set<string>()

  const traverse = (node: Set<string>) => {
    for (const id of node.keys()) {
      if (visited.has(id)) continue
      visited.add(id)

      const child = graph.get(id)
      if (!child) continue

      traverse(child)
    }
  }

  traverse(root)

  // Find the orphan nodes that are disconnected from the root.
  // Usually, the root is the digital garden's home page.
  return diff([...graph.keys()], [...visited]).filter((x) => x !== rootId)
}

function addNode(graph: G, parent: string, child?: string) {
  if (!graph.has(parent)) graph.set(parent, new Set())
  if (!child) return

  graph.get(parent)?.add(child)
}

const brokenLinkWarning = (parent: string, child: string) =>
  `${ch.green(parent)} -> ${ch.red(child)} ${ch.bold('private or missing')}`

const orphanWarning = (orphan: string) =>
  `${ch.red(orphan)} is ${ch.bold('not discoverable from home')}`

export function verifyReferences(notes: Note[]) {
  const home = notes.find((c) => c.name === HOME_NAME)

  const graph: G = new Map()

  for (const parent of notes) {
    addNode(graph, parent.path)

    for (const link of parent.links) {
      // Does all links in the content exist?
      const child = notes.find((c) => c.name === link)

      if (!child) {
        warn(brokenLinkWarning(parent.path, link))
        continue
      }

      addNode(graph, parent.path, child.path)
    }
  }

  if (!home) return

  // Scan for notes that are not linked to the homepage.
  const orphans = scanOrphans(graph, home.path)

  for (const orphan of orphans) {
    warn(orphanWarning(orphan))
  }
}
