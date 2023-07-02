import { MongoClient, ServerApiVersion } from 'mongodb'

import { MONGO_URI, DEFAULT_MONGO_DATABASE } from './constants'

class MongoManager {
  private static _client: MongoClient | null = null

  static async get(): Promise<MongoClient> {
    if (MongoManager._client) return MongoManager._client!

    if (!MONGO_URI) throw new Error('MONGO_URI is not defined!')

    const client = new MongoClient(MONGO_URI, {
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
}

export const mongo = MongoManager
export const database = MongoManager.database
