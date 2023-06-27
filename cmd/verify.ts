import { processMarkdownFiles } from './prepare/process'
import { verifyReferences } from './prepare/verify'

import { timed as t } from './prepare/timed'
import { NOTES_DIR } from './prepare/constants'

const contents = await t('process', () => processMarkdownFiles(NOTES_DIR))
t('verify', () => verifyReferences(contents))
