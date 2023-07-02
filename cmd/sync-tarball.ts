import fs from 'fs/promises'

import {
  mongo,
  timed as t,
  verifyReferences,
  syncNotesToDatabase,
  parseTarballFromBuffer,
} from '../src/prepare'

console.log('scanning tarball...')

const notes = await t('parse', async () => {
  return parseTarballFromBuffer(await fs.readFile('./tarball.tar'))
})

await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))

mongo.close()
