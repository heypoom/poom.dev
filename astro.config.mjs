import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'hybrid',
  adapter: vercel(),
})
