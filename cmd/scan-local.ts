import {
  scanLocalVault,
  verifyReferences,
  timed as t,
  NOTES_DIR,
} from '../src/prepare'

console.log('scanning local vault...')

const contents = await t('process', () => scanLocalVault(NOTES_DIR))
t('verify', () => verifyReferences(contents))
