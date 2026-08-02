// Builds the site into ONE self-contained HTML file for the shareable preview.
//
// The published preview is served under an arbitrary path with a strict CSP
// that blocks every external request, so nothing may reference another file:
// JS, CSS, fonts and all 37 images are inlined. Routing switches to hashes via
// VITE_PREVIEW_BUILD (see src/App.jsx).
//
//   npm run build:preview   ->   preview/index.html
//
// This does not touch `npm run build`, which still produces the real deploy.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const run = (cmd, args) => execFileSync(cmd, args, { cwd: root, stdio: ['ignore', 'inherit', 'inherit'] });

run('python3', ['scripts/compress-images.py']);
run('npx', ['vite', 'build', '--config', 'vite.config.preview.js', '--outDir', 'dist-preview', '--emptyOutDir']);

const dist = path.join(root, 'dist-preview');
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const assetRef = (re) => {
  const file = html.match(re)?.[1];
  if (!file) throw new Error(`could not find asset matching ${re} in dist-preview/index.html`);
  return fs.readFileSync(path.join(dist, file), 'utf8');
};
let js = assetRef(/<script[^>]+src="\/([^"]+\.js)"/);
let css = assetRef(/<link[^>]+href="\/([^"]+\.css)"/);

// Google Fonts is an external host, so swap the @import for embedded woff2.
const fonts = fs.readFileSync(path.join(root, 'scripts', 'fonts-inline.css'), 'utf8');
// Minified form is `@import"https://…";` — the url() wrapper is gone by now.
// The URL itself contains semicolons (the `wght@0,300;0,400` axis list), so the
// match has to run to the closing quote rather than to the first `;`.
const fontImport = /@import\s*(?:url\(\s*)?(['"])https:\/\/fonts\.googleapis\.com[^'"]*\1\s*\)?\s*;/g;
const importCount = (css.match(fontImport) || []).length;
if (!importCount) throw new Error('expected a Google Fonts @import in the built CSS');
css = fonts + '\n' + css.replace(fontImport, '');
if (css.includes('fonts.googleapis.com')) throw new Error('a Google Fonts reference survived inlining');
if (!css.includes('--font-heading')) throw new Error('app CSS looks truncated: --font-heading is missing');

// Inline every /images/* reference. Several images are used on more than one
// page, so they go into a lookup table rather than being pasted per reference.
const cacheDir = path.join(root, '.preview-cache', 'images');
const dataUris = new Map(
  fs
    .readdirSync(cacheDir)
    .map((f) => [f.replace(/\.webp$/, ''), `data:image/webp;base64,${fs.readFileSync(path.join(cacheDir, f)).toString('base64')}`])
);

const used = new Map();
const missing = new Set();
let refs = 0;

// Every reference in the bundle is a plain quoted string literal in a value
// position (verified against the build), so swapping in a lookup is safe.
js = js.replace(/"\/images\/([A-Za-z0-9_.-]+)"/g, (match, name) => {
  const uri = dataUris.get(name);
  if (!uri) {
    missing.add(name);
    return match;
  }
  refs += 1;
  used.set(name, uri);
  return `__RCG_IMG[${JSON.stringify(name)}]`;
});

// CSS can't use the lookup, so any url() reference is inlined directly.
css = css.replace(/\/images\/([A-Za-z0-9_.-]+)/g, (match, name) => {
  const uri = dataUris.get(name);
  if (!uri) {
    missing.add(name);
    return match;
  }
  refs += 1;
  return uri;
});

if (missing.size) throw new Error(`no compressed image for: ${[...missing].join(', ')}`);
const leftover = js.match(/\/images\/[A-Za-z0-9_.-]+/g);
if (leftover) throw new Error(`unreplaced image references: ${[...new Set(leftover)].join(', ')}`);

const lookup = `const __RCG_IMG = ${JSON.stringify(Object.fromEntries(used))};\n`;
js = lookup + js;

// A literal </script> inside the bundle would close the inline tag early.
js = js.replace(/<\/script/gi, '<\\/script');

const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? 'Rip Curl Gardens';
const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';

const out = `<title>${title}</title>
<meta name="description" content="${description}" />
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`;

const outDir = path.join(root, 'preview');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'index.html');
fs.writeFileSync(outFile, out);

console.log(
  `\npreview/index.html  ${(Buffer.byteLength(out) / 1e6).toFixed(2)} MB` +
    `  (${used.size} images / ${refs} refs, ${importCount} font @import inlined)`
);
