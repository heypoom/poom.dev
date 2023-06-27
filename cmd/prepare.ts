import { existsSync } from 'fs'

import { cloneRepository } from './prepare/clone'
import { processMarkdownFiles } from './prepare/process'
import { verifyReferences } from './prepare/verify'

import { NOTES_DIR } from './prepare/constants'
import { timed as t } from './prepare/timed'

if (!existsSync(NOTES_DIR)) {
  t('clone', cloneRepository)
}

const contents = await t('process', () => processMarkdownFiles(NOTES_DIR))
t('verify', () => verifyReferences(contents))
