import { Octokit } from '@octokit/rest'

import { GITHUB_OWNER, GIT_REPO, GITHUB_TOKEN } from './constants'

// TODO: Importing a PAT like this is quite dangerous, especially if it leaks to the client.
export const octokit = new Octokit({ auth: GITHUB_TOKEN })

export async function getTarballBuffer(): Promise<Buffer> {
  const response = await octokit.rest.repos.downloadTarballArchive({
    owner: GITHUB_OWNER,
    repo: GIT_REPO,
    ref: 'main',
  })

  return Buffer.from(response.data as ArrayBuffer)
}
