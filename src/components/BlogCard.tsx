import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export interface SanityBlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage?: any;
    author: {
        name: string;
        role: string;
        image?: any;
    };
    publishedAt: string;
    categories: string[];
    readingTime: number;
    tags?: string[];
    body?: any;
}

interface BlogCardProps {
    post: SanityBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const category = post.categories && post.categories.length > 0 ? post.categories[0] : "Umum";
    const slug = post.slug.current;

    return (
        <article className="group flex flex-col rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            {/* Card Header with Image */}
            <div className="h-48 relative overflow-hidden bg-zinc-100">
                {post.mainImage ? (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent">
                        <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent" />
                    </div>
                )}

                <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-white/90 text-primary border-primary/20 backdrop-blur-sm">
                        {category}
                    </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-900 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col grow">
                {/* Title */}
                <Link href={`/blog/${slug}`}>
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-4 grow">
                    {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author?.name || 'Admin'}</span>
                    </div>
                    {post.readingTime && (
                        <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readingTime} menit</span>
                        </div>
                    )}
                </div>

                {/* Read More Button */}
                <Link href={`/blog/${slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </article>
    );
}
