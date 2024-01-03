import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-icon'

import nodePolyfills from 'rollup-plugin-node-polyfills'
import nodeGlobals from 'rollup-plugin-node-globals'

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
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [
      // Polyfills NodeJS APIs, when possible.
      // NOTE: Can be removed, especially if you're running into
      // weird complication errors from some of your dependencies.
      // nodePolyfills({
      //   crypto: true,
      // }),
      // Polyfills NodeJS global variables (e.g. process).
      // NOTE: Can be removed, especially if you're running into
      // weird complication errors from some of your dependencies.
      // nodeGlobals(),
    ],
  },
})
