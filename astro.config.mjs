import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown()
  ],
  output: 'hybrid',
  adapter: vercel()
})

