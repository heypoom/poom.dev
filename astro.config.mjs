import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node';

import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
    partytown()
  ],
  output: 'hybrid',
  adapter: node({mode: 'standalone'}),
})

