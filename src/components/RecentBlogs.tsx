import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { SanityBlogPost } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

// Query to get 3 latest posts
const recentPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
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

export default async function RecentBlogs() {
    // Ensuring Sanity environment variables are present before fetching to avoid runtime errors on build if not set
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        return null;
    }

    const posts: SanityBlogPost[] = await client.fetch(recentPostsQuery);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm mb-6">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Artikel Terbaru
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl mb-4">
                            Artikel & Panduan <span className="text-primary">Lingkungan Hidup</span>
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Simak update terbaru seputar regulasi, teknologi, dan panduan pengelolaan lingkungan hidup.
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button size="lg" variant="outline" className="group">
                            Lihat Semua Artikel
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
