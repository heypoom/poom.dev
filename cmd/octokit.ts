import { Octokit } from '@octokit/rest'

import 'dotenv/config'

// TODO: Importing a PAT like this is quite dangerous, especially if it leaks to the client!
export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})
