import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the same build works from a GitHub Pages project
  // page (user.github.io/repo/) and from a user site (user.github.io/) without
  // hard-coding a repository name. The site is one page with hash anchors and
  // no router, so no further base configuration is needed.
  base: './',
})
