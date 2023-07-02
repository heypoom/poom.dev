import {
  mongo,
  timed as t,
  verifyReferences,
  syncNotesToDatabase,
  parseTarballFromBuffer,
  getTarballBuffer,
} from '../src/prepare'

console.log('fetching tarball from GitHub...')
const buffer = await t('load', getTarballBuffer)

console.log('parsing tarball...')
const notes = await t('parse', () => parseTarballFromBuffer(buffer))

await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))

mongo.close()
