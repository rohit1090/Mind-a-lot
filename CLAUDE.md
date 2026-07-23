# CLAUDE.md — Project Rules for Claude Code

> This file defines the architecture, conventions, and rules for this project.
> Claude Code must read and follow this file before making any changes.

---

## Project Overview

**Client Website** — A SEO-optimised marketing site with a dynamic blog powered by a headless CMS admin dashboard.

- **Framework**: Next.js 15 (App Router)
- **CMS / Admin**: Sanity v3 (Sanity Studio embedded at `/studio`)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)
- **Deployment**: Vercel
- **Package Manager**: pnpm

---

## Directory Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (site)/             # Public site route group
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx    # Blog listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx # Blog post
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── studio/             # Sanity Studio (admin)
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── revalidate/
│   │   │       └── route.ts    # Webhook revalidation
│   │   ├── layout.tsx          # Root layout
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # robots.txt
│   ├── components/
│   │   ├── ui/                 # Reusable primitives (Button, Card, etc.)
│   │   ├── sections/           # Page sections (Hero, Features, etc.)
│   │   ├── blog/               # Blog-specific components
│   │   └── layout/             # Header, Footer, Nav
│   ├── sanity/
│   │   ├── schemaTypes/        # Sanity schemas (blog post, author, etc.)
│   │   ├── lib/
│   │   │   ├── client.ts       # Sanity client
│   │   │   ├── queries.ts      # GROQ queries
│   │   │   └── image.ts        # Image URL builder
│   │   └── sanity.config.ts    # Sanity Studio config
│   ├── lib/
│   │   ├── metadata.ts         # Shared metadata helpers
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── index.ts            # Shared TypeScript types
├── public/
│   └── images/
├── .env.local                  # Local env vars (never commit)
├── .env.example                # Env var template (commit this)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── sanity.cli.ts
└── CLAUDE.md                   # ← You are here
```

---

## Coding Rules

### General
- Always use **TypeScript** with strict mode. No `any` types — use `unknown` and type narrow.
- Use **named exports** for components, not default exports (except page.tsx files which must be default).
- Every component file = one component. No multi-component files.
- Use `async/await`, never `.then()` chains.
- No `console.log` in production code — use comments instead.

### Next.js Specific
- All data fetching happens in **Server Components** (no `useEffect` for data).
- Use `generateStaticParams` for dynamic blog routes (SSG).
- Use `revalidate` or `revalidatePath` for ISR — never `no-store` on blog pages.
- All images use `next/image` with explicit `width`, `height`, and `alt`.
- All links use `next/link`.
- Metadata: every page must export a `generateMetadata` function or a `metadata` object.
- Use `loading.tsx` and `error.tsx` in every route segment.

### Components
- Components live in `src/components/`. Always check here before creating a new one.
- Use Tailwind utility classes only — no inline `style` props, no CSS modules.
- Mobile-first responsive design: write mobile styles first, then `md:` and `lg:` breakpoints.
- All interactive elements must have `aria-label` or visible text for accessibility.

### Sanity / CMS
- All Sanity schemas go in `src/sanity/schemaTypes/`.
- All GROQ queries go in `src/sanity/lib/queries.ts` — never write queries inline in components.
- Use the `sanity` typed client from `src/sanity/lib/client.ts`.
- Always use `next-sanity` for data fetching from Sanity in Next.js.

### SEO Rules
- Every page **must** have: `title`, `description`, `openGraph`, `twitter` metadata.
- Blog posts **must** have: `publishedTime`, `authors`, `tags` in OpenGraph.
- Use semantic HTML: one `<h1>` per page, proper heading hierarchy.
- Structured data (JSON-LD) on blog posts and home page.

### Styling Conventions
- Design tokens (colors, fonts) defined in `tailwind.config.ts` under `theme.extend`.
- No hardcoded hex values in JSX — always use Tailwind classes.
- Spacing scale: use Tailwind spacing (`p-4`, `mt-8`, etc.), not arbitrary values.
- Font: define in `layout.tsx` via `next/font`.

---

## Environment Variables

Required in `.env.local`:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=

# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Git Conventions

- Branch naming: `feat/feature-name`, `fix/bug-name`, `chore/task-name`
- Commit format: `feat: add hero section` / `fix: mobile nav overflow` / `chore: update deps`
- Never commit `.env.local` or any secrets.

---

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint check
pnpm type-check   # TypeScript check (tsc --noEmit)
pnpm sanity dev   # Start Sanity Studio standalone
```

---

## When Making Changes

1. Read `CLAUDE.md` first (this file).
2. Check `docs/ARCHITECTURE.md` for system design.
3. Check existing components in `src/components/` before creating new ones.
4. Run `pnpm type-check` after every change.
5. Ensure every new page has complete metadata.
6. Test mobile layout at 375px width.
