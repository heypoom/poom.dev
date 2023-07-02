import { db } from './db'
import { createSnapshot, diffSnapshot } from './snapshot'

import type { Note, SnapshotRecord } from './types'

export async function syncNotesToDatabase(notes: Note[]) {
  try {
    const notes$ = await db.notes()
    const snapshots$ = await db.snapshots()

    const newSnapshot = createSnapshot(notes)
    const existingRecord = await snapshots$.findOne({ latest: { $eq: true } })

    // TODO: write unit test for cases where there is no existing snapshot.
    const oldSnapshot = existingRecord?.snapshot ?? {}

    // Diff the current and incoming snapshots.
    const diffs = diffSnapshot(oldSnapshot, newSnapshot)
    console.log('diffs:', diffs)

    // Insert the notes to insert.
    const notesToInsert = notes.filter((n) => diffs.added.includes(n.path))
    await notes$.insertMany(notesToInsert)

    // Delete the notes to delete.
    await notes$.deleteMany({ path: { $in: diffs.removed } })

    // Update the notes to update.
    const notesToUpdate = notes
      .filter((n) => diffs.updated.includes(n.path))
      .map((n) => notes$.updateOne({ path: n.path }, { $set: n }))

    await Promise.all(notesToUpdate)

    // Save the current notes' snapshot to database.
    const snapshotRecord: SnapshotRecord = {
      snapshot: newSnapshot,
      updatedAt: new Date(),
      latest: true,
    }

    snapshots$.updateOne(
      { latest: { $eq: true } },
      { $set: snapshotRecord },
      { upsert: true }
    )
  } catch (err) {
    console.warn('Cannot sync notes to database:', err)
  }
}
