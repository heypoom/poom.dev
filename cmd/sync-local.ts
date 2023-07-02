import path from 'path'
import { homedir } from 'os'

import { scanLocalVault } from './local/scanLocalVault'

import {
  mongo,
  timed as t,
  verifyReferences,
  syncNotesToDatabase,
} from '../src/prepare'

const dir = path.resolve(homedir(), 'notes')
console.log('scanning local vault...')

const notes = await t('process', () => scanLocalVault(dir))
console.log('notes:', notes.length)

await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))

mongo.close()
