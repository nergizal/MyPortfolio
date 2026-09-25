# Nergiz Alıcı — Portfolio

Personal site for **Nergiz Alıcı**: software engineering student, full-stack mobile developer, AI/ML — Istanbul, Türkiye.

Stack: Next.js (App Router) · TypeScript · Tailwind CSS · shadcn-style UI · Motion · next-themes · Resend.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Add your PDF resume at `public/Nergiz_Alici_CV.pdf` (a placeholder file is already there so the Download CV button does not 404).

## Edit content (no component surgery)

All copy that should change over time lives in typed files:

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, email, GitHub, LinkedIn, pitch, location |
| `src/data/projects.ts` | Projects, case studies, GitHub/demo URLs, experiments |
| `src/data/experience.ts` | Jobs, education, achievements |
| `src/data/skills.ts` | Skill groups + marquee tech |
| `src/i18n/dictionaries.ts` | EN / TR UI chrome |

To add a GitHub or live demo link, set `github` / `demo` on a project. Empty fields are hidden automatically.

To replace Flutter mockup screens, drop screenshots into `public/screenshots/` and point `PhoneMockup` or project covers at them. Placeholder screens are styled UI you can swap later.

Case-study gaps are marked as `[ADD: …]` so you can fill in specifics without inventing metrics.

## Environment variables

See `.env.example`:

- `RESEND_API_KEY` — from [Resend](https://resend.com)
- `CONTACT_TO_EMAIL` — where form messages land
- `CONTACT_FROM_EMAIL` — must be a verified Resend sender in production
- `NEXT_PUBLIC_SITE_URL` — canonical URL for sitemap, OG, JSON-LD

Without `RESEND_API_KEY`, `npm run build` still works; the contact form returns an error until the key is set.

## Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com): **Add New… → Project** and import the repo.
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. Add the env vars from `.env.example`.
5. Deploy.
6. Optional: Project → Settings → Domains → add a custom domain.

Analytics and Speed Insights are already wired via `@vercel/analytics` and `@vercel/speed-insights`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Command palette: `Cmd/Ctrl + K`.
