import {
  processMarkdownFiles,
  verifyReferences,
  timed as t,
  NOTES_DIR,
} from '../src/prepare'

const contents = await t('process', () => processMarkdownFiles(NOTES_DIR))
t('verify', () => verifyReferences(contents))
