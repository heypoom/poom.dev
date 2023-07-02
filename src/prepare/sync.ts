import { database } from './db'
import { createSnapshot } from './snapshot'

import type { Note } from './types'

export async function syncNotesToDatabase(notes: Note[]) {
  await saveSnapshotToDatabase(notes)
}

export async function saveSnapshotToDatabase(notes: Note[]) {
  const db = await database()

  const value = {
    snapshot: createSnapshot(notes),
    updatedAt: new Date(),
    latest: true,
  }

  db.collection('snapshot').updateOne(
    { latest: { $eq: true } },
    { $set: value },
    { upsert: true }
  )
}
