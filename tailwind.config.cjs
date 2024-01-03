/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Hanken Grotesk', 'Noto Sans Thai Looped', 'sans-serif'],
      mono: ['IBM Plex Mono', 'Noto Sans Thai Looped', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
