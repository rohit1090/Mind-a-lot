// All GROQ queries go here

export const ALL_POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...20] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{ name, image },
  "categories": categories[]->{ title, slug }
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  seo {
    metaTitle,
    metaDescription,
    ogImage
  },
  "author": author->{ name, image, bio },
  "categories": categories[]->{ title, slug }
}`;

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)] {
  slug { current }
}`;

export const FEATURED_POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{ name, image },
  "categories": categories[]->{ title, slug }
}`;

export const ALL_CATEGORIES_QUERY = `*[_type == "category"] {
  _id,
  title,
  slug
}`;
