// Config for the GitHub Pages build (see scripts/build-pages.mjs).
// Identical to the deploy config except for the base path: GitHub Pages
// serves this project at /ripcurl/, not the domain root, so every asset URL
// Vite manages (JS, CSS, the favicon/manifest links in index.html) needs
// that prefix. The /images/* references baked into components are literal
// strings vite doesn't see — those get the same prefix in a post-build pass.
import { defineConfig, mergeConfig } from 'vite'
import base from './vite.config.js'
import { PAGES_BASE } from './scripts/pages-base.mjs'

export default defineConfig(
  mergeConfig(base, {
    base: PAGES_BASE,
    define: {
      // No trailing slash: react-router's `basename` prop expects "/ripcurl".
      'import.meta.env.VITE_BASE_PATH': JSON.stringify(PAGES_BASE.replace(/\/$/, '')),
    },
  })
)
