# TrustedOps Website (MVP)

Code-first marketing site using:
- Next.js (App Router) + TypeScript
- TailwindCSS (+ Typography)
- Local MDX content (in-repo) for Resources

## Prereqs
- Node.js 20.9+ recommended for recent Next.js versions
- npm, pnpm, or yarn

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Content editing
- Add MDX files in: `content/resources/*.mdx`
- Each file needs frontmatter: `title`, `description`, `date` (ISO), optional `tags`

## Deploy
- Vercel: push to GitHub and import
- Cloudflare Pages / Netlify: run `npm run build` (or add `next export` if you later choose static export)

---
Brand tokens live in:
- `tailwind.config.ts` (`brand.navy`, `brand.teal`)
- `components/Logo.tsx` + `public/brand/*` (placeholders)
