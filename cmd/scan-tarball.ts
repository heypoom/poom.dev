import fs from 'fs/promises'

import {
  parseTarballFromBuffer,
  verifyReferences,
  timed as t,
  createSnapshot,
  syncNotesToDatabase,
} from '../src/prepare'

console.log('scanning tarball...')

const notes = await t('parse', async () => {
  const file = await fs.readFile('./tarball.tar')
  return parseTarballFromBuffer(file)
})

await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))
