# Hello Next.js 👋

A hands-on learning project covering Next.js App Router fundamentals.

## What's inside

| File | What it teaches |
|------|----------------|
| `app/layout.tsx` | Root layout, Geist font loading via `next/font`, fallback metadata |
| `app/page.tsx` | Page-level metadata override, CSS custom properties usage |
| `app/globals.css` | CSS variables, dark mode via `prefers-color-scheme` |
| `.github/workflows/deploy.yml` | CI/CD with GitHub Actions + Vercel |

## Getting started

```bash
npm install
npm run dev
# → open http://localhost:3000
```

## Deploy

1. Push this repo to GitHub
2. Import at [vercel.com](https://vercel.com) — auto-detects Next.js
3. Add 3 secrets to GitHub → Settings → Secrets:
   - `VERCEL_TOKEN` — from vercel.com/account/tokens
   - `VERCEL_ORG_ID` — from `.vercel/project.json` after running `vercel link`
   - `VERCEL_PROJECT_ID` — same file

Every push to `main` will auto-deploy to your `*.vercel.app` URL.

## Concepts covered

- **Fonts**: `next/font/google` → CSS custom properties (`--font-geist-sans`)
- **Metadata**: `export const metadata` per page, fallback in layout
- **Layouts**: `layout.tsx` wraps all routes, nestable per folder
- **CSS variables**: cascade from parent → child, dark mode via redefining on `:root`
- **CI/CD**: GitHub Actions → build → Vercel deploy
