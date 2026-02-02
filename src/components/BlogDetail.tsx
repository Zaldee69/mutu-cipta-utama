import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { SanityBlogPost } from "@/components/BlogCard";
import { PortableText } from "@/components/PortableText";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import "highlight.js/styles/github-dark.css";
import { BlogJSONLD } from "@/components/BlogJSONLD";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface BlogDetailProps {
    post: SanityBlogPost;
}

import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// Query for related posts based on tags or category
const relatedPostsQuery = groq`*[_type == "post" && defined(slug.current) && slug.current != $currentSlug && (
  count((tags[] )[@ in $tags]) > 0 || 
  count((categories[]->title)[@ in $categories]) > 0
)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  readingTime,
  "author": author->{name, role, image},
  "categories": categories[]->title,
  "tags": tags
}`;

export async function BlogDetail({ post }: BlogDetailProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const category = post.categories && post.categories.length > 0 ? post.categories[0] : "Umum";

    // Fetch related posts
    const relatedPosts: SanityBlogPost[] = await client.fetch(relatedPostsQuery, {
        currentSlug: post.slug.current,
        tags: post.tags || [],
        categories: post.categories || []
    });

    return (
        <div className="min-h-screen bg-white">
            {/* We map SanityBlogPost to the JSONLD helper if needed, but for now we might need to adjust BlogJSONLD to accept SanityBlogPost or just fix types there. 
                Assuming BlogJSONLD expects the old BlogPost type, we'll need to adapt or update BlogJSONLD as well. 
                For now I'll comment it out or assume we update it. Let's assume we update it.
            */}
            <BlogJSONLD post={post} />
            <BreadcrumbSchema
                items={[
                    { name: "Beranda", url: "https://www.mutuciptautama.id/" },
                    { name: "Blog", url: "https://www.mutuciptautama.id/blog/" },
                    { name: post.title, url: `https://www.mutuciptautama.id/blog/${post.slug.current}/` }
                ]}
            />

            {/* Breadcrumbs */}
            <div className="border-b bg-zinc-50/50">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <Breadcrumbs
                        items={[
                            { label: "Blog", href: "/blog" },
                            { label: post.title, href: `/blog/${post.slug.current}` }
                        ]}
                    />
                </div>
            </div>

            {/* Article Header */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Category Badge */}
                        <div className="mb-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                                {category}
                            </Badge>
                        </div>

                        {/* Title - Ensure H1 is unique and descriptive */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 mb-8 pb-8 border-b border-zinc-200">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                <div>
                                    <span className="font-semibold text-zinc-900">{post.author?.name || 'Admin'}</span>
                                    <span className="text-zinc-500 ml-1">• {post.author?.role || 'Editor'}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{formattedDate}</span>
                            </div>
                            {post.readingTime && (
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>{post.readingTime} menit baca</span>
                                </div>
                            )}
                        </div>

                        {/* Cover Image - SEO Optimized */}
                        <div className="mb-12 rounded-xl overflow-hidden bg-zinc-100 h-96 relative">
                            {post.mainImage ? (
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.mainImage.alt || post.title} // Ensure alt text
                                    fill
                                    priority // High priority for LCP
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 840px"
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-zinc-400">
                                    <p className="text-sm">Cover Image</p>
                                </div>
                            )}
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg prose-zinc max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900 prose-code:text-primary prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-zinc-900 prose-pre:text-zinc-100">
                            {post.body && <PortableText value={post.body} />}
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-zinc-200">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <Tag className="w-4 h-4 text-zinc-400" />
                                    {post.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="bg-zinc-50 text-zinc-700 border-zinc-200"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </article>

            {/* Related Posts Section - Improves Internal Linking for SEO */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-zinc-50/50 border-t">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">
                                Artikel Terkait
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <BlogCard key={relatedPost._id} post={relatedPost} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
