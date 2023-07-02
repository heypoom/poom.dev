import { database } from './db'
import { createSnapshot, diffSnapshot } from './snapshot'

import type { Note, Snapshot } from './types'

interface SnapshotRecord {
  updatedAt: Date
  snapshot: Snapshot
  latest: boolean
}

async function Snapshots() {
  const db = await database()

  return db.collection<SnapshotRecord>('snapshot')
}

export async function syncNotesToDatabase(notes: Note[]) {
  const snapshots$ = await Snapshots()

  const newSnapshot = createSnapshot(notes)

  const currentRecord = await snapshots$.findOne({ latest: { $eq: true } })
  const oldSnapshot = currentRecord?.snapshot
  if (!oldSnapshot) return

  const diffs = diffSnapshot(oldSnapshot, newSnapshot)
  console.log(diffs)

  // await saveSnapshotToDatabase(notes)
}

export async function saveSnapshotToDatabase(notes: Note[]) {
  const snapshots$ = await Snapshots()

  const value = {
    snapshot: createSnapshot(notes),
    updatedAt: new Date(),
    latest: true,
  }

  snapshots$.updateOne(
    { latest: { $eq: true } },
    { $set: value },
    { upsert: true }
  )
}
