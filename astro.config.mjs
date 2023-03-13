import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import { preprocessThrelte } from '@threlte/preprocess'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://poom.dev',

  vite: {
    build: {
      rollupOptions: {
        treeshake: {
          moduleSideEffects: false,
        },
        output: {
          manualChunks(id) {
            if (/threlte|troika/.test(id)) return 'threlte'
            if (/three\/examples\/jsm/.test(id)) return 'three-extras'
            if (/three/.test(id)) return 'three'
            if (/node_modules/.test(id)) return 'vendor'

            return 'main'
          },
        },
      },
    },
  },

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
