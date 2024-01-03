import path from 'path'
import { homedir } from 'os'

import { scanLocalVault } from './local/scanLocalVault'

import { timed as t, syncNotesToDatabase } from '../src/prepare'

const NOTES_PATH = path.resolve(homedir(), 'notes')

const notes = await t('scan', () => scanLocalVault(NOTES_PATH))
await t('push', () => syncNotesToDatabase(notes, { verbose: false }))
