import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'

import svelte from '@astrojs/svelte'

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
    svelte(),
  ],
  output: 'hybrid',
  adapter: vercel(),
})
