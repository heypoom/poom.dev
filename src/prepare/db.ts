import { MongoClient, ServerApiVersion, type Document } from 'mongodb'

import { MONGODB_URI, DEFAULT_MONGO_DATABASE } from './constants'

import type { SnapshotRecord, Note } from './types'

class MongoManager {
  private static _client: MongoClient | null = null

  static async get(): Promise<MongoClient> {
    if (MongoManager._client) return MongoManager._client!

    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined!')

    const client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })

    try {
      MongoManager._client = await client.connect()

      return MongoManager._client
    } catch (err) {
      await client.close()
      throw new Error('Cannot connect to MongoDB!', { cause: err })
    }
  }

  static async database() {
    const client = await MongoManager.get()

    return client.db(DEFAULT_MONGO_DATABASE)
  }

  static collection<T extends Document>(key: string) {
    return async () => {
      const db = await MongoManager.database()

      return db.collection<T>(key)
    }
  }

  static close() {
    setTimeout(async () => {
      this._client!.close()
    }, 500)
  }
}

export const mongo = MongoManager
export const database = MongoManager.database
export const collection = MongoManager.collection

export const db = {
  notes: collection<Note>('notes'),
  snapshots: collection<SnapshotRecord>('snapshots'),
}
