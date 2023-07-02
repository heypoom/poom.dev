import type { Note, Snapshot, SnapshotDiff } from './types'

export function createSnapshot(notes: Note[]): Snapshot {
  const map: Snapshot = {}

  for (const note of notes) {
    map[note.path] = { size: note.size, timestamp: note.timestamp }
  }

  return map
}

export function diffSnapshot(current: Snapshot, next: Snapshot): SnapshotDiff {
  const added: string[] = []
  const removed: string[] = []
  const updated: string[] = []

  for (const path of Object.keys(current)) {
    const A = current[path]
    const B = next[path]

    if (!B) {
      removed.push(path)
      continue
    }

    if (A?.size !== B?.size) {
      updated.push(path)
      continue
    }

    if (A?.timestamp?.valueOf() !== B?.timestamp?.valueOf()) {
      updated.push(path)
    }
  }

  for (const path of Object.keys(next)) {
    if (!current[path]) added.push(path)
  }

  return { added, removed, updated }
}
