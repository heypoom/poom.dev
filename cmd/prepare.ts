import { existsSync } from 'fs'

import { cloneRepository } from './prepare/clone'
import { processMarkdownFiles } from './prepare/process'
import { verifyBacklinks } from './prepare/verify'

import { NOTES_DIR } from './prepare/constants'
import { timed as t } from './prepare/timed'

export async function prepareMarkdownSource() {
  if (!existsSync(NOTES_DIR)) {
    t('clone', cloneRepository)
  }

  const contents = await t('process', () => processMarkdownFiles(NOTES_DIR))
  console.log(contents)

  t('verify', () => verifyBacklinks(contents))
}

prepareMarkdownSource()
