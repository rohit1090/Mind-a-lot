# Phase-Wise Build Guide — Client Website

## How to use this guide
- Work through phases in order — each phase builds on the last.
- Copy the Claude Code prompts exactly into your Claude Code terminal.
- After each phase, verify it works before moving to the next.
- Share your Figma link with Claude Code at the start of Phase 2.

---

## Phase 1 — Project Setup & Scaffold
**Goal**: Working Next.js + Sanity project with correct folder structure.

### Step 1.1 — Create the project
Open your terminal and run:
```bash
mkdir my-client-site && cd my-client-site
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 1.2 — Install dependencies
```bash
pnpm add sanity next-sanity @sanity/image-url @portabletext/react
pnpm add -D @tailwindcss/typography
```

### Step 1.3 — Copy the project files
Copy these files into your project root:
- `CLAUDE.md` → project root
- `docs/ARCHITECTURE.md` → `docs/` folder
- `docs/WORKFLOW.md` → `docs/` folder

### Step 1.4 — Claude Code prompt (scaffold)
Paste this into Claude Code:

```
Read CLAUDE.md and docs/ARCHITECTURE.md first.

Then scaffold the complete project structure as defined in CLAUDE.md:
1. Create all folders: src/app/(site), src/app/studio/[[...tool]], src/app/api/revalidate, src/components/ui, src/components/sections, src/components/blog, src/components/layout, src/sanity/schemaTypes, src/sanity/lib, src/lib, src/types
2. Create placeholder index.ts files in each folder with a comment describing what goes there
3. Create src/types/index.ts with base TypeScript types for Post, Author, Category, SiteSettings
4. Create .env.example with all required env vars (see CLAUDE.md)
5. Create src/lib/utils.ts with a cn() className utility using clsx
6. Do NOT install any new packages. Do NOT modify tailwind.config or next.config yet.
```

### Step 1.5 — Set up Sanity project
Go to sanity.io → create a new project → copy the Project ID.

Then create `sanity.cli.ts` in project root:
```typescript
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production'
  }
})
```

### Step 1.6 — Claude Code prompt (Sanity setup)
```
Read CLAUDE.md first.

Set up Sanity v3 in this Next.js project:

1. Create src/sanity/sanity.config.ts — Sanity Studio config with project ID from .env, dataset 'production', plugins: [structureTool(), visionTool()]
2. Create src/app/studio/[[...tool]]/page.tsx — embeds Sanity Studio at /studio route (use 'use client' + NextStudio from next-sanity/studio)
3. Create src/sanity/lib/client.ts — creates a typed Sanity client using createClient from next-sanity, reads from env vars, uses CDN for reads
4. Create src/sanity/lib/image.ts — image URL builder using @sanity/image-url
5. Create src/sanity/lib/queries.ts — empty file with a comment "// All GROQ queries go here"
6. Create src/sanity/schemaTypes/index.ts — exports empty schemaTypes array for now

Make sure the studio route has dynamic = 'force-dynamic' export.
```

### ✅ Phase 1 Complete Check
- `pnpm dev` starts without errors
- `localhost:3000` loads Next.js default page
- `localhost:3000/studio` loads Sanity Studio

---

## Phase 2 — Home Page (Figma → Code)
**Goal**: Pixel-perfect home page from Figma design.

### Step 2.1 — Share your Figma design
In your Figma file → click Share → copy the link. You'll paste this into Claude Code.

### Step 2.2 — Set up design tokens
```
Read CLAUDE.md first.

Extract all design tokens from this Figma file: [PASTE YOUR FIGMA LINK]

Then update tailwind.config.ts to add under theme.extend:
- colors: all brand colors from the design (name them descriptively e.g. 'brand-brown', 'cream', 'sage')
- fontFamily: all fonts used (use next/font in layout.tsx to load them)
- fontSize: any custom sizes used
- borderRadius: any custom radius values

Also update src/app/layout.tsx to:
- Load all fonts via next/font/google
- Apply fonts as CSS variables
- Set up the root HTML structure with proper lang attribute
```

### Step 2.3 — Build sections one by one
Build each section of the home page individually. Use this prompt pattern for each:

**For the Navbar/Header:**
```
Read CLAUDE.md first.

Looking at this Figma design: [PASTE FIGMA LINK]

Build the site Header component at src/components/layout/Header.tsx:
- Extract exact colors, fonts, spacing from the Figma design
- Navigation links: [list your nav items]
- Logo: [describe logo or mention it's an SVG]
- CTA button in top right: [button text]
- Mobile: hamburger menu that opens a full-width dropdown
- Use Tailwind classes only, no inline styles
- Use next/link for all links
- Make it sticky with a subtle shadow on scroll (use a small useEffect + useState for scroll detection)
- Export as named export HeaderComponent

After creating, import it into src/app/layout.tsx
```

**For the Hero Section:**
```
Read CLAUDE.md first.

Looking at this Figma design: [PASTE FIGMA LINK]

Build the Hero section at src/components/sections/HeroSection.tsx:
- This is a Server Component (no 'use client')
- Extract exact: headline text, subtext, button labels, background color, any decorative elements
- Headline: [copy exact text from design]
- Two CTA buttons: primary [text] and secondary [text]
- [Describe any illustrations, images, or decorative elements]
- Make it responsive: stacked on mobile, side-by-side on desktop (lg:)
- All decorative SVGs should be inline SVG elements
- Social proof row at bottom: [describe it]

Export as named export HeroSection
```

**Repeat this pattern for each section** (Features, Testimonials, CTA, Footer etc.)

### Step 2.4 — Assemble the home page
```
Read CLAUDE.md first.

Assemble the home page at src/app/(site)/page.tsx:
1. Import all section components: HeroSection, FeaturesSection, [etc.]
2. Add proper metadata export with title, description, openGraph, twitter card
3. Add JSON-LD structured data for the Organization schema
4. Page should be a Server Component
5. Add a canonical URL using NEXT_PUBLIC_SITE_URL env var

Also create src/app/(site)/layout.tsx that wraps all (site) pages with the Header and Footer.
```

### ✅ Phase 2 Complete Check
- Home page matches Figma design
- Mobile responsive (check at 375px)
- View source → confirm meta tags are in `<head>`
- Lighthouse score ≥ 90

---

## Phase 3 — Blog System (Sanity CMS)
**Goal**: Working blog with Sanity content, admin dashboard at /studio.

### Step 3.1 — Create Sanity schemas
```
Read CLAUDE.md and docs/ARCHITECTURE.md first.

Create all Sanity schemas as defined in ARCHITECTURE.md:

1. src/sanity/schemaTypes/post.ts — Post schema with all fields from ARCHITECTURE.md. Add a 'seo' object field with metaTitle, metaDescription, ogImage.
2. src/sanity/schemaTypes/author.ts — Author schema
3. src/sanity/schemaTypes/category.ts — Category schema  
4. src/sanity/schemaTypes/siteSettings.ts — Singleton settings schema

5. Update src/sanity/schemaTypes/index.ts to export all schemas in the schemaTypes array
6. Update src/sanity/sanity.config.ts to import and register all schemas

Use defineType and defineField from 'sanity' for all schemas.
```

### Step 3.2 — Write GROQ queries
```
Read CLAUDE.md and src/sanity/schemaTypes/ files first.

Write all GROQ queries in src/sanity/lib/queries.ts:

1. ALL_POSTS_QUERY — fetch all posts for blog listing: _id, title, slug, excerpt, mainImage, author->{name,image}, categories[]->{title,slug}, publishedAt. Order by publishedAt desc. Limit 20.

2. POST_BY_SLUG_QUERY — fetch single post by slug: all fields including body (full portable text), author with bio, categories, seo fields

3. POST_SLUGS_QUERY — fetch all post slugs only (for generateStaticParams): slug.current

4. FEATURED_POSTS_QUERY — fetch 3 latest posts (for home page if needed)

5. ALL_CATEGORIES_QUERY — fetch all categories

Export all as typed constants. Also export TypeScript types for each return shape.
```

### Step 3.3 — Build blog pages
```
Read CLAUDE.md and src/sanity/lib/queries.ts first.

Build the complete blog system:

1. src/app/(site)/blog/page.tsx
   - Server component
   - Fetch ALL_POSTS_QUERY using Sanity client
   - Display posts as a grid of cards
   - Each card: thumbnail, category badge, title, excerpt, author avatar + name, date
   - Add metadata: title "Blog | [Site Name]", description, openGraph

2. src/components/blog/PostCard.tsx
   - Reusable post card component
   - Props: post (typed from ARCHITECTURE types)
   - Use next/image for thumbnail with proper sizes
   - Link wraps entire card using next/link

3. src/app/(site)/blog/[slug]/page.tsx
   - Use generateStaticParams with POST_SLUGS_QUERY
   - Use generateMetadata — use post.seo.metaTitle if available, else post.title
   - Server component, fetch full post by slug
   - Render: hero image, title, author + date, body via @portabletext/react
   - Add Article JSON-LD structured data
   - Add revalidate = false (rely on webhook revalidation)
   - Add notFound() if post not found

4. src/components/blog/PortableTextRenderer.tsx
   - Renders Sanity Portable Text
   - Custom components for: images (use next/image), code blocks, links
   - Apply @tailwindcss/typography prose classes
```

### Step 3.4 — Set up ISR revalidation webhook
```
Read CLAUDE.md first.

Create src/app/api/revalidate/route.ts:
- POST handler only
- Verify request has correct secret: compare req URL searchParam 'secret' with process.env.SANITY_REVALIDATE_SECRET
- If secret wrong, return 401
- Parse body to get the document type and slug
- Call revalidatePath('/blog') always
- If document type is 'post' and slug exists, also call revalidatePath('/blog/' + slug)
- Return JSON success response
- Handle errors gracefully

Add SANITY_REVALIDATE_SECRET to .env.example
```

**Then in Sanity Dashboard:**
- Settings → API → Webhooks → Add webhook
- URL: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
- Trigger on: Create, Update, Delete

### ✅ Phase 3 Complete Check
- Go to `/studio`, create a test blog post
- `/blog` shows the post card
- `/blog/your-post-slug` shows full post
- Update post in Studio → page refreshes within seconds

---

## Phase 4 — Remaining Pages
**Goal**: Build all static pages (About, Contact).

```
Read CLAUDE.md first.

Build the About page at src/app/(site)/about/page.tsx:
- Server component
- Add complete metadata
- Sections: [describe sections from your Figma or brief]
- Match the design language of the home page (same fonts, colors from Tailwind config)

Build the Contact page at src/app/(site)/contact/page.tsx:
- Server component for the layout/metadata
- Contact form as a Client Component (src/components/sections/ContactForm.tsx)
- Form fields: Name, Email, Message, Submit button
- Use native HTML form with action pointing to a simple API route
- Create src/app/api/contact/route.ts that sends email via fetch to a service like Resend or just logs for now
- Show success/error state after submit
```

---

## Phase 5 — SEO Polish
**Goal**: Perfect Lighthouse score, sitemap, structured data.

```
Read CLAUDE.md and docs/ARCHITECTURE.md first.

Complete all SEO setup:

1. src/app/sitemap.ts
   - Fetch all post slugs from Sanity
   - Return array of: home, about, contact, blog index, all blog posts
   - Set lastModified, changeFrequency, priority for each

2. src/app/robots.ts
   - Allow all crawlers
   - Disallow /studio (don't index admin)
   - Add sitemap URL using NEXT_PUBLIC_SITE_URL

3. Audit every page — make sure each has:
   - Unique title (50-60 chars)
   - Unique description (150-160 chars)
   - openGraph with image
   - twitter card
   - canonical URL

4. Add OG Image generation:
   - src/app/blog/[slug]/opengraph-image.tsx using ImageResponse
   - Dynamic OG image with post title, author, site name

5. Check src/app/layout.tsx has:
   - <html lang="en">
   - viewport meta
   - theme-color meta
   - Verification tags if needed (Google Search Console)
```

---

## Phase 6 — Deployment
**Goal**: Live on Vercel with custom domain.

### Step 6.1 — Vercel setup
```
Read CLAUDE.md first.

Prepare the project for Vercel deployment:
1. Ensure next.config.ts has images.domains or remotePatterns for cdn.sanity.io
2. Check all env vars are in .env.example
3. Make sure there are no TypeScript errors: run the type-check
4. Make sure pnpm build succeeds locally
5. Check for any hardcoded localhost URLs — replace with NEXT_PUBLIC_SITE_URL
```

### Step 6.2 — Deploy
1. Push code to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Add all environment variables from `.env.local`
4. Deploy!
5. In Sanity → API → CORS origins → Add your Vercel domain
6. Update Sanity webhook URL to your Vercel domain

### ✅ Final Checks
- [ ] All pages load on production URL
- [ ] `/studio` loads and you can create posts
- [ ] New post publishes → appears on `/blog` within seconds
- [ ] Google Search Console → submit sitemap
- [ ] Lighthouse score ≥ 90 on all pages
- [ ] Mobile tested on real device

---

## Figma to Code — Best Practices

When giving Claude Code your Figma design, always do this:

1. **Share the exact Figma link** (not a screenshot) — Claude can read Figma files directly if you have the Figma MCP connected.

2. **Build section by section** — never ask for the whole page at once. Do: Navbar → Hero → Section 1 → Section 2 → Footer.

3. **Mention exact details**:
   - "The background is #F5F0EB, save it as `cream` in Tailwind config"
   - "The headline uses Inter 700, 56px desktop / 36px mobile"
   - "There's a 24px gap between the two cards"

4. **After each section**, screenshot your browser and say: "Compare with Figma, fix any spacing/color differences"

5. **For complex illustrations or SVGs**: export them from Figma as SVG → paste the SVG code directly into the prompt and say "inline this as a React SVG component"
