import path from 'path'
import { homedir } from 'os'

import { scanLocalVault } from './local/scanLocalVault'

import {
  timed as t,
  verifyReferences,
  syncNotesToDatabase,
} from '../src/prepare'

console.log('scanning local vault...')
const dir = path.resolve(homedir(), 'notes')

const notes = await t('process', () => scanLocalVault(dir))
await t('verify', () => verifyReferences(notes))
await t('sync', () => syncNotesToDatabase(notes))
