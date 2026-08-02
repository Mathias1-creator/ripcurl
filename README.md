# Ripcurl — Website Source Code

This is the complete, editable source code for the Ripcurl website. It is a
standard **React + Vite** project with **Tailwind CSS**. Any web developer can
run, edit, and deploy it. There are no external account dependencies.

## Requirements
- [Node.js](https://nodejs.org/) version 18 or newer (includes `npm`)

## Getting Started
```bash
npm install      # install dependencies (run once)
npm run dev      # start local dev server (live preview while editing)
```
The dev server prints a local URL (usually http://localhost:5173). Edits to
files in `src/` update live.

## Editing
- `src/pages/`      — each page of the site
- `src/components/` — reusable pieces (header, footer, sections, etc.)
- `src/index.css`   — global styles
- `public/images/`  — all images used on the site

## Building & Deploying
```bash
npm run build    # generates the dist/ folder = the finished static site
```
Host the contents of `dist/` anywhere static — Netlify (drag the folder),
Vercel, Cloudflare Pages, GitHub Pages, etc. The file `public/_redirects`
(`/* /index.html 200`) is included so page routing works on Netlify — keep it.

## Notes
- All images are local to this project; nothing loads from an external account.
- `node_modules` and `dist` are not included on purpose — they are regenerated
  by the commands above. This keeps the download small.
