/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Hanken Grotesk'],
      mono: ['IBM Plex Mono'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
