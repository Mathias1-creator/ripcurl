// Builds the site for GitHub Pages: a normal multi-file Vite build (real
// images, real Tally embed — unlike scripts/build-preview.mjs, nothing here
// needs to be inlined), just served from the /ripcurl/ subpath GitHub Pages
// project sites use instead of the domain root.
//
//   npm run build:pages   ->   dist-pages/
//
// This does not touch `npm run build`, which still produces the root-domain
// deploy (Netlify, etc.) with the original absolute "/images/..." paths.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES_BASE } from './pages-base.mjs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const run = (cmd, args) => execFileSync(cmd, args, { cwd: root, stdio: ['ignore', 'inherit', 'inherit'] });

run('npx', ['vite', 'build', '--config', 'vite.config.pages.js', '--outDir', 'dist-pages', '--emptyOutDir']);

const dist = path.join(root, 'dist-pages');

// Vite rewrites the asset URLs it manages (index.html's <script>/<link>
// tags) to the configured base automatically. It has no visibility into the
// "/images/xxx.jpg" string literals baked into component code though, so
// those get the same prefix here. public/images/* is copied to dist-pages
// verbatim regardless of base, so this is purely a URL rewrite.
let rewritten = 0;
const rewriteImagePaths = (file) => {
  const before = fs.readFileSync(file, 'utf8');
  const after = before.replaceAll('/images/', `${PAGES_BASE}images/`);
  if (after !== before) {
    fs.writeFileSync(file, after);
    rewritten += (after.match(new RegExp(`${PAGES_BASE}images/`, 'g')) || []).length;
  }
};
for (const dir of ['assets']) {
  const dirPath = path.join(dist, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const f of fs.readdirSync(dirPath)) {
    if (f.endsWith('.js') || f.endsWith('.css')) rewriteImagePaths(path.join(dirPath, f));
  }
}
if (!rewritten) throw new Error('expected to rewrite at least one /images/ reference');

// GitHub Pages has no server-side rewrite for a client-rendered SPA: a direct
// load of /ripcurl/portfolio would 404 without this. Serving the same
// document at 404.html means any unmatched path still loads the app, which
// then reads the real URL from the address bar and routes correctly.
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));

console.log(`\ndist-pages/  ready (${rewritten} image refs rewritten to ${PAGES_BASE}images/, 404.html added)`);
