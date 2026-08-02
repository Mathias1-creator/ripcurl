// Downloads the Google Fonts used by the site and writes a self-contained
// stylesheet with the woff2 files embedded as data URIs.
// Output: scripts/fonts-inline.css  (committed, so preview builds are offline-safe)
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:wght@300;400;700;900&display=swap';

// Only the subsets the site actually needs. Google emits one @font-face per
// subset per weight; cyrillic/greek/vietnamese would triple the payload.
const KEEP_SUBSETS = ['latin'];

// ...and only the weights/styles the components actually reference, so the
// embedded payload stays a few hundred KB instead of a megabyte.
const KEEP_FACES = {
  'Cormorant Garamond': { normal: [300, 400, 500, 600], italic: [300, 400] },
  Lato: { normal: [300, 400, 700], italic: [] },
};

function wanted(face) {
  const family = face.match(/font-family:\s*'([^']+)'/)?.[1];
  const style = face.match(/font-style:\s*(\w+)/)?.[1] ?? 'normal';
  const weight = Number(face.match(/font-weight:\s*(\d+)/)?.[1] ?? 400);
  return KEEP_FACES[family]?.[style]?.includes(weight) ?? false;
}

const css = await fetch(CSS_URL, { headers: { 'User-Agent': UA } }).then((r) => r.text());

// Blocks look like: /* latin */\n@font-face {...}
const blocks = css.split(/\/\* ([\w-]+) \*\//).slice(1);
const out = [];
let bytes = 0;

for (let i = 0; i < blocks.length; i += 2) {
  const subset = blocks[i];
  const face = blocks[i + 1];
  if (!KEEP_SUBSETS.includes(subset) || !wanted(face)) continue;

  const url = face.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
  if (!url) continue;

  const buf = Buffer.from(await fetch(url, { headers: { 'User-Agent': UA } }).then((r) => r.arrayBuffer()));
  bytes += buf.length;
  out.push(face.replace(/url\(https:[^)]+\.woff2\)/, `url(data:font/woff2;base64,${buf.toString('base64')})`).trim());
}

const dest = path.join(__dirname, 'fonts-inline.css');
await fs.writeFile(dest, out.join('\n') + '\n');
console.log(`fonts-inline.css: ${out.length} faces, ${(bytes / 1024).toFixed(0)} KB of woff2`);
