import 'dotenv/config'

export const { GITHUB_TOKEN } = process.env

/** GitHub username of the repository owner. */
export const GITHUB_OWNER = 'heypoom'

/** Name of the Git repository. */
export const GIT_REPO = 'notes'

/** Git remote for cloning the repository. */
export const GIT_REMOTE = `https://${GITHUB_TOKEN}@github.com/${GITHUB_OWNER}/${GIT_REPO}`

/** Where to clone the digital garden repository to. */
export const CLONE_DIR = 'data'
export const NOTES_DIR = `${CLONE_DIR}/notes`

// Name of your markdown index or home page.
export const HOME_NAME = 'Home'
