# Architecture — Client Website

## System Overview

```
┌─────────────────────────────────────────────────────┐
│                     VERCEL (hosting)                │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │           NEXT.JS 15 APP                     │   │
│  │                                              │   │
│  │  Static Pages (SSG)    Dynamic Blog (ISR)   │   │
│  │  /  /about  /contact   /blog  /blog/[slug]  │   │
│  │                                              │   │
│  │  Sanity Studio (SSR)                        │   │
│  │  /studio                                    │   │
│  └──────────────────┬───────────────────────────┘   │
└─────────────────────┼───────────────────────────────┘
                      │ GROQ queries via
                      │ next-sanity + CDN API
                      ▼
         ┌────────────────────────┐
         │   SANITY.IO (CMS)      │
         │                        │
         │  - Blog posts          │
         │  - Authors             │
         │  - Categories          │
         │  - Site settings       │
         │  - Images (CDN)        │
         └────────────────────────┘
                      │
              Webhook on publish
                      │
                      ▼
         ┌────────────────────────┐
         │  /api/revalidate       │
         │  (ISR revalidation)    │
         └────────────────────────┘
```

---

## Page Rendering Strategy

| Page | Strategy | Revalidate |
|------|----------|------------|
| Home `/` | SSG | On Sanity publish |
| About `/about` | SSG | On Sanity publish |
| Contact `/contact` | SSG | Static |
| Blog list `/blog` | ISR | 60s + On publish |
| Blog post `/blog/[slug]` | ISR | On publish |
| Studio `/studio` | SSR (dynamic) | Never cached |

## Why this stack?

**Next.js 15**
- Best-in-class SEO (metadata API, sitemap, robots.txt built-in)
- React Server Components = zero JS for static content
- ISR = blog always fresh without full rebuild

**Sanity v3**
- Embedded Studio = admin dashboard lives inside your own domain at `/studio`
- No separate deployment needed
- Real-time preview in Studio
- Powerful GROQ query language
- Image CDN with auto-format/optimize

**Tailwind CSS v4**
- Utility-first = no unused CSS in production
- Design system via config tokens
- Great with Next.js

**Vercel**
- Zero-config Next.js deployment
- Edge CDN globally
- ISR works perfectly out of the box
- Free tier covers most client projects

---

## Data Models (Sanity Schemas)

### Post
```typescript
{
  _id: string
  _type: 'post'
  title: string
  slug: { current: string }
  excerpt: string              // For cards + meta description
  mainImage: SanityImage
  body: PortableText           // Rich text content
  author: Reference<Author>
  categories: Reference<Category>[]
  publishedAt: datetime
  seo: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImage
  }
}
```

### Author
```typescript
{
  _id: string
  _type: 'author'
  name: string
  slug: { current: string }
  image: SanityImage
  bio: PortableText
}
```

### Category
```typescript
{
  _id: string
  _type: 'category'
  title: string
  slug: { current: string }
  description?: string
}
```

### SiteSettings (singleton)
```typescript
{
  _id: 'siteSettings'
  _type: 'siteSettings'
  title: string
  description: string
  logo: SanityImage
  socialLinks: { platform: string; url: string }[]
}
```

---

## SEO Architecture

Every page generates metadata via Next.js `generateMetadata`:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Page Title | Brand',
    description: '...',
    openGraph: {
      title: '...',
      description: '...',
      images: [{ url: ogImageUrl }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '...',
      description: '...',
    },
    alternates: {
      canonical: `${SITE_URL}/page`,
    },
  }
}
```

Auto-generated at build time:
- `/sitemap.xml` — via `src/app/sitemap.ts`
- `/robots.txt` — via `src/app/robots.ts`

Blog posts also get JSON-LD structured data:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "image": "..."
}
```

---

## Revalidation Flow

When editor publishes/updates in Sanity Studio:

1. Sanity fires webhook → `POST /api/revalidate?secret=SECRET`
2. API route verifies secret
3. Calls `revalidatePath('/blog')` + `revalidatePath('/blog/[slug]')`
4. Next.js regenerates pages from Sanity CDN
5. New content live within seconds (no rebuild!)

---

## Key Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "sanity": "^3.0.0",
    "next-sanity": "^9.0.0",
    "@sanity/image-url": "^1.0.0",
    "@portabletext/react": "^3.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```
