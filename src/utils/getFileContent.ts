import { Octokit } from '@octokit/rest'

import 'dotenv/config'

class FileContentError extends Error {
  override message = 'Cannot retrieve file content'

  constructor(cause: unknown) {
    super()
    this.cause = cause
  }
}

export async function getFileContent(path: string): Promise<string> {
  try {
    const octokit = new Octokit({
      auth: process.env.OCTOKIT_ACCESS_TOKEN,
    })

    const res = await octokit.repos.getContent({
      owner: 'heypoom',
      repo: 'notes',
      path,
    })

    if ('content' in res.data) {
      const content = Buffer.from(res.data.content, 'base64').toString()

      return content
    }

    throw new Error('file not found')
  } catch (err) {
    throw new FileContentError(err)
  }
}
