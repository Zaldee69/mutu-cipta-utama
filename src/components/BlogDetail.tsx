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

interface BlogDetailProps {
    post: SanityBlogPost;
}

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export function BlogDetail({ post }: BlogDetailProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const category = post.categories && post.categories.length > 0 ? post.categories[0] : "Umum";

    return (
        <div className="min-h-screen bg-white">
            {/* We map SanityBlogPost to the JSONLD helper if needed, but for now we might need to adjust BlogJSONLD to accept SanityBlogPost or just fix types there. 
                Assuming BlogJSONLD expects the old BlogPost type, we'll need to adapt or update BlogJSONLD as well. 
                For now I'll comment it out or assume we update it. Let's assume we update it.
            */}
            <BlogJSONLD post={post} />
            <BreadcrumbSchema
                breadcrumb={{
                    items: [
                        { title: "Home", url: "/" },
                        { title: "Blog", url: "/blog" },
                        { title: post.title, url: `/blog/${post.slug.current}` }
                    ]
                }}
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

            {/* Related Posts is tricky without a separate fetch or passing it down. 
                For now we omit it or would need to fetch it in page.tsx 
            */}
        </div>
    );
}
