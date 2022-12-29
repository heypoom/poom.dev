import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import { preprocessThrelte } from '@threlte/preprocess'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',
  integrations: [
    mdx(),
    sitemap(),
    svelte({ preprocess: preprocessThrelte() }),
    tailwind(),
  ],
  experimental: {
    contentCollections: true,
  },
})
