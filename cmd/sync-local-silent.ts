import path from 'path'
import { homedir } from 'os'

import { scanLocalVault } from './local/scanLocalVault'

import { mongo, timed as t, syncNotesToDatabase } from '../src/prepare'
import { triggerDeploy } from '../src/prepare/trigger-deploy'
import { uploadImages } from '../src/prepare/upload-images'

const NOTES_PATH = path.resolve(homedir(), 'notes')
const verbose = false

const notes = await t('scan', () => scanLocalVault(NOTES_PATH))
await t('push', () => syncNotesToDatabase(notes, { verbose }))
await t('images', () => uploadImages(notes, { verbose }))
await t('deploy', () => triggerDeploy({ verbose }))

mongo.close()
