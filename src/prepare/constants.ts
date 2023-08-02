import 'dotenv/config'

export const { GITHUB_TOKEN, MONGODB_URI } = process.env

/** GitHub username of the repository owner. */
export const GITHUB_OWNER = 'heypoom'

/** Name of the Git repository. */
export const GIT_REPO = 'notes'

/** Name of your markdown index or home page. */
export const HOME_NAME = 'Home'

/** Default MongoDB database to use. */
export const DEFAULT_MONGO_DATABASE = 'poom'
