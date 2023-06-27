import 'dotenv/config'

export const { GITHUB_TOKEN } = process.env

// Your github repository.
export const GITHUB_REPO = 'heypoom/notes'

// Where to clone the digital garden repository to.
export const CLONE_DIR = 'data'
export const NOTES_DIR = `${CLONE_DIR}/notes`

// Name of your markdown index or home page.
export const HOME_NAME = 'Home'
