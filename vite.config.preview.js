// Config for the single-file preview build (see scripts/build-preview.mjs).
// Identical to the deploy config except that it hard-codes the preview flag,
// which flips the app to hash routing.
import { defineConfig, mergeConfig } from 'vite'
import base from './vite.config.js'

export default defineConfig(
  mergeConfig(base, {
    define: {
      'import.meta.env.VITE_PREVIEW_BUILD': JSON.stringify('1'),
    },
  })
)
