"use client";

import { useState } from "react";
import { BlogCard, SanityBlogPost } from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface BlogListProps {
    posts: SanityBlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    // Extract unique categories from posts, filtering out empty ones
    const uniqueCategories = ["Semua", ...Array.from(new Set(posts.flatMap(post => post.categories || []).filter(Boolean)))];

    const filteredPosts = selectedCategory === "Semua"
        ? posts
        : posts.filter(post => post.categories && post.categories.includes(selectedCategory));

    return (
        <div className="min-h-screen bg-lienar-to-b from-zinc-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-primary/5 via-white to-primary/5 py-20 md:py-28 border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm mb-6">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Artikel & Insight
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                            Blog <span className="text-primary">Lingkungan</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                            Artikel, tips, dan update terbaru seputar regulasi lingkungan, studi kasus, dan panduan praktis dari para ahli.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-white border-b shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {uniqueCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post._id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-zinc-500 text-lg">Tidak ada artikel dalam kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
