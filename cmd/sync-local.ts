import path from 'path'
import { homedir } from 'os'

import {
  mongo,
  timed as t,
  verifyReferences,
  syncNotesToDatabase,
} from '../src/prepare'

import { uploadImages } from '../src/prepare/upload-images'
import { scanLocalVault } from './local/scanLocalVault'

const NOTES_PATH = path.resolve(homedir(), 'notes')
console.log('scanning local vault...')

const notes = await t('process', () => scanLocalVault(NOTES_PATH))
console.log(`${notes.length} notes found.`)

await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))
await t('images', () => uploadImages(notes))

mongo.close()
