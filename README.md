# Amirahmad Shafiee — Personal Site

Personal portfolio + knowledge site for Amirahmad Shafiee (AI Researcher & Computer Science Student at Sharif University of Technology), built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Supabase** for public discussion.

## Sections

- **Home** — hero + overview
- **About** — bio + skills
- **Research** — publications list + per-paper pages
- **Projects** — open-source work + per-project pages
- **Domains of Interest** — a living knowledge map. Each domain contains what you've **studied**; each study holds **findings**, **notes**, **borrowings**, and **ideas**, each with a **public chat** thread where people can comment and you can discuss.
- **Contact** — mailto contact form

## Tech

- Next.js 14 (static export → GitHub Pages)
- TypeScript
- Tailwind CSS with the "Research-Grade AI" design system (midnight indigo + indigo→violet gradient + warm amber/coral accents; Space Grotesk / Inter / JetBrains Mono; dark-first with light mode)
- Supabase for the public chat/comment backend

## Setup

```bash
npm install
npm run dev        # local dev
npm run build      # static export to ./out
```

### Supabase (public chat)

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
3. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor to create the `chat_messages` table with public read/insert policies.

The chat threads are keyed per note/idea (e.g. `domain-slug/study-id/note-id`), so each finding/note/borrowing/idea gets its own public discussion.

### Content

Content lives in `content/`:

- `content/projects.ts` — open-source projects
- `content/research.ts` — papers/publications
- `content/domains.ts` — domains of interest, each with nested `studied[]` items, each with `notes[]` of kind `finding | note | borrowing | idea`

Currently content is placeholder — replace it with real material (e.g. from your PDFs).

## Deployment (GitHub Pages)

The repo builds a static export to `out/` and deploys it to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. On push to `main` (or manual dispatch), it builds and deploys.

To make the public chat work in production, add the Supabase keys as GitHub Actions secrets:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The site's canonical URL is `https://aahmads.github.io/`.
