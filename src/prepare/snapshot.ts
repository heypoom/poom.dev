import type { Note, Snapshot } from './types'

export function createSnapshot(notes: Note[]): Snapshot {
  const map: Snapshot = {}

  for (const note of notes) {
    map[note.path] = { size: note.size, timestamp: note.timestamp }
  }

  return map
}

export function diffSnapshot(current: Snapshot, next: Snapshot) {
  const added: string[] = []
  const removed: string[] = []
  const updated: string[] = []

  for (const path of Object.keys(current)) {
    if (!next[path]) {
      removed.push(path)
      continue
    }

    if (current[path]?.size !== next[path]?.size) {
      updated.push(path)
    }

    if (current[path]?.timestamp !== next[path]?.timestamp) {
      updated.push(path)
    }
  }

  for (const path of Object.keys(next)) {
    if (!current[path]) added.push(path)
  }

  return { added, removed, updated }
}
