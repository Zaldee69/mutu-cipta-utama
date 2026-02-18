import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  readingTime,
  "author": author->{name, role, image, slug},
  "categories": categories[]->title,
  "tags": tags
}`;

// Get a single post by slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  readingTime,
  body,
  "author": author->{name, role, image},
  "categories": categories[]->title,
  "tags": tags
}`;

// Get all slugs for static paths
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
