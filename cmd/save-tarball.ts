import fs from 'fs/promises'

import { timed as t, getTarballBuffer } from '../src/prepare'

t('tarball', async () => {
  fs.writeFile('./tarball.tar', await getTarballBuffer())
})
