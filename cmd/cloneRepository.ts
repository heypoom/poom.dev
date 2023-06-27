import { outputHandler, simpleGit } from 'simple-git'

import 'dotenv/config'

const GITHUB_REPO = 'heypoom/notes'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const GIT_REMOTE = `https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}`

const h: outputHandler = (_, stdout, stderr) => {
  stdout.pipe(process.stdout)
  stderr.pipe(process.stderr)
}

// TODO: this is horribly inefficient, will optimize later.
export async function cloneRepository() {
  console.time('clone')

  const git = simpleGit({ baseDir: './data' }).outputHandler(h)
  await git.clone(GIT_REMOTE)

  console.timeEnd('clone')
}
