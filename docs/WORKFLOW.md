# Development Workflow

## Daily Workflow

```
1. pnpm dev              → Start local dev server
2. Make changes          → Hot reload auto-updates
3. pnpm type-check       → Fix any TypeScript errors
4. pnpm lint             → Fix any lint warnings
5. pnpm build            → Verify production build passes
6. git commit & push     → Triggers Vercel auto-deploy
```

## How to Work with Claude Code

### The Golden Rule
**Always start your Claude Code prompt with:**
> "Read CLAUDE.md first, then..."

This ensures Claude Code follows project conventions every time.

### Prompt Templates by Task

**Adding a new page:**
```
Read CLAUDE.md first.

Create a new page at src/app/(site)/[page-name]/page.tsx:
- Server component
- [Describe the content/sections]
- Add complete metadata (title, description, openGraph, twitter, canonical)
- Import any existing section components from src/components/sections/
- Create new section components in src/components/sections/ if needed
```

**Fixing a bug:**
```
Read CLAUDE.md first.

There is a bug: [describe exact behavior]
Expected: [what should happen]
Steps to reproduce: [list steps]

Check [specific file if known] and fix the issue.
After fixing, explain what caused it.
```

**Adding a new Sanity field:**
```
Read CLAUDE.md and src/sanity/schemaTypes/post.ts first.

Add a new field to the Post schema:
- Field name: [name]
- Type: [string/text/image/etc]
- Required: yes/no
- Description for editors: "[helpful hint]"

After updating the schema, also:
1. Update the GROQ query in src/sanity/lib/queries.ts to include the new field
2. Update the TypeScript type in src/types/index.ts
3. Update the blog post page to display the new field
```

**Making something responsive:**
```
Read CLAUDE.md first.

The [component name] at [file path] is not responsive on mobile.
Current behavior at 375px: [describe problem]
Expected behavior: [describe desired layout]

Fix it using Tailwind responsive classes (mobile-first: base → md: → lg:).
Do not use inline styles or CSS modules.
```

**Performance optimization:**
```
Read CLAUDE.md first.

Optimize the [page/component] for performance:
1. Check all images use next/image with correct sizes prop
2. Check there are no unnecessary 'use client' directives
3. Check large components can be lazy loaded with next/dynamic
4. Ensure fonts are loaded via next/font (not Google Fonts CDN link)
```

---

## Content Workflow (For Client)

Once the site is live, the client manages content through Sanity Studio:

```
yourdomain.com/studio
```

### Writing a Blog Post
1. Go to `/studio`
2. Click "Posts" in the left sidebar
3. Click "+ New Post"
4. Fill in: Title, Slug (auto-generates), Excerpt, Main Image
5. Write content in the rich text editor (bold, headings, images all supported)
6. Set Author and Categories
7. Fill SEO tab: Custom meta title, description, OG image
8. Click "Publish"
9. Post appears on `/blog` within seconds automatically ✅

### Content Tips for Client
- Slug: keep it short and descriptive (`how-to-meditate` not `how-to-meditate-in-2024-guide`)
- Excerpt: 150-160 characters — this becomes the Google search description
- Main Image: use 1200×630px for best OG preview
- SEO Meta Title: if left blank, falls back to Post Title
- Categories help readers filter content

---

## Updating the Site Design

When the client wants design changes:

1. Make changes in Figma first
2. Give Claude Code the Figma link + specific change description
3. Claude Code updates the component
4. Review, approve, push

---

## Adding New Pages

1. Create route in `src/app/(site)/new-page/page.tsx`
2. Add to navigation in `src/components/layout/Header.tsx`
3. Add to `src/app/sitemap.ts`
4. Update Figma design to document the new page

---

## Environment Variables

Never share `.env.local`. If onboarding a new developer:
1. Share `.env.example` (already in repo)
2. They create their own `.env.local`
3. Give them the Sanity project ID + generate them a new API token in Sanity dashboard

## Sanity Tokens

There are two types:
- **Read token** (`SANITY_API_READ_TOKEN`): for fetching draft/unpublished content in preview mode. Keep secret.
- **Public CDN**: no token needed for published content (used in production by default).

Never expose the read token in client-side code (no `NEXT_PUBLIC_` prefix).
