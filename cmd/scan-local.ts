import path from 'path'
import { homedir } from 'os'

import { scanLocalVault } from './local/scanLocalVault'

import { verifyReferences, timed as t } from '../src/prepare'

console.log('scanning local vault...')

// Replace it with your notes directory.
const dir = path.resolve(homedir(), 'notes')

const notes = await t('process', () => scanLocalVault(dir))
t('verify', () => verifyReferences(notes))
