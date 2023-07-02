import { octokit } from './octokit'
import { GITHUB_OWNER, GIT_REPO } from './constants'

class FileContentError extends Error {
  override message = 'Cannot retrieve file content'

  constructor(cause: unknown) {
    super()
    this.cause = cause
  }
}

export async function getFileContent(path: string): Promise<string> {
  try {
    const res = await octokit.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GIT_REPO,
      path,
    })

    if ('content' in res.data) {
      return Buffer.from(res.data.content, 'base64').toString()
    }

    throw new Error('file not found')
  } catch (err) {
    throw new FileContentError(err)
  }
}
