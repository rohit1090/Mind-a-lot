import type { PortableTextBlock } from "@portabletext/react";

export interface Slug {
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
  };
  alt?: string;
}

export interface Category {
  _id: string;
  _type: "category";
  title: string;
  slug: Slug;
  description?: string;
}

export interface Author {
  _id: string;
  _type: "author";
  name: string;
  slug: Slug;
  image?: SanityImage;
  bio?: PortableTextBlock[];
}

export interface PostSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

// Category shape as dereferenced by ALL_POSTS_QUERY / POST_BY_SLUG_QUERY / FEATURED_POSTS_QUERY
export type PostCategory = Pick<Category, "title" | "slug">;

// Author shape as dereferenced by ALL_POSTS_QUERY / FEATURED_POSTS_QUERY (listing cards)
export type PostAuthorPreview = Pick<Author, "name" | "image">;

// Author shape as dereferenced by POST_BY_SLUG_QUERY (full post page)
export type PostAuthorFull = Pick<Author, "name" | "image" | "bio">;

// Lighter post shape for blog listing cards — no body, no seo (ALL_POSTS_QUERY / FEATURED_POSTS_QUERY)
export interface PostPreview {
  _id: string;
  _type: "post";
  title: string;
  slug: Slug;
  excerpt: string;
  mainImage: SanityImage;
  publishedAt: string;
  author: PostAuthorPreview;
  categories?: PostCategory[];
}

// Full post shape, matching the schema exactly (POST_BY_SLUG_QUERY)
export interface Post extends Omit<PostPreview, "author"> {
  author: PostAuthorFull;
  body: PortableTextBlock[];
  seo?: PostSeo;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  title?: string;
  description?: string;
  logo?: SanityImage;
}
