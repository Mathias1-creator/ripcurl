// Shared by vite.config.pages.js and scripts/build-pages.mjs, so both agree
// on the GitHub Pages subpath without either having to import the other's
// Vite config (which pulls in vite.config.js in a way plain Node can't run).
export const PAGES_BASE = '/ripcurl/';
