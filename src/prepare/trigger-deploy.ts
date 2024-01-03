import fetch from 'node-fetch'

import { VERCEL_DEPLOY_HOOK_URL } from './constants'

interface Config {
  verbose?: boolean
}

export async function triggerDeploy(config?: Config) {
  const { verbose = true } = config ?? {}

  if (!VERCEL_DEPLOY_HOOK_URL) {
    throw new Error('VERCEL_DEPLOY_HOOK_URL is not defined')
  }

  const res = await fetch(VERCEL_DEPLOY_HOOK_URL, { method: 'POST' })
  const data = await res.json()

  if (verbose) {
    console.log(`[+] deploy triggered:`, data)
  }
}
