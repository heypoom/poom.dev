import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import partytown from '@astrojs/partytown'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
    partytown(),
    icon(),
  ],
  output: 'hybrid',
  adapter: vercel(),
})
