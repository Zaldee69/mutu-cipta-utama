import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { BlogCard, SanityBlogPost } from "@/components/BlogCard";
import { PortableText } from "@/components/PortableText";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// Query to get author details
const authorQuery = groq`*[_type == "author" && slug.current == $slug][0] {
  name,
  role,
  image,
  bio
}`;

// Query to get posts by author
const authorPostsQuery = groq`*[_type == "post" && author->slug.current == $slug] | order(publishedAt desc) {
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

// Query to get all author slugs for static generation
const authorsPathsQuery = groq`*[_type == "author" && defined(slug.current)][].slug.current`;

interface AuthorPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
    const slugs = await client.fetch(authorsPathsQuery);
    return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
    const { slug } = await params;
    const author = await client.fetch(authorQuery, { slug });

    if (!author) {
        return {
            title: "Author Not Found",
        };
    }

    return {
        title: `${author.name} - ${author.role || 'Author'} | PT Mutu Cipta Utama`,
        description: `Profil ${author.name}, ${author.role || 'penulis'} di PT Mutu Cipta Utama.`,
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `${author.name} | PT Mutu Cipta Utama`,
            description: `Profil dan artikel oleh ${author.name}`,
            images: author.image ? [urlFor(author.image).width(1200).height(630).url()] : [],
            type: "profile",
        }
    };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
    const { slug } = await params;

    // Parallel fetch
    const [author, posts] = await Promise.all([
        client.fetch(authorQuery, { slug }),
        client.fetch(authorPostsQuery, { slug })
    ]);

    if (!author) {
        notFound();
    }

    // ProfilePage Schema
    const profileSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.role,
            "image": author.image ? urlFor(author.image).url() : undefined,
            "description": `Author at PT Mutu Cipta Utama`,
            "worksFor": {
                "@type": "Organization",
                "name": "PT Mutu Cipta Utama",
                "url": "https://www.mutuciptautama.id/"
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Beranda", url: "https://www.mutuciptautama.id/" },
                    { name: "Tim Kami", url: "https://www.mutuciptautama.id/tentang-kami/" },
                    { name: author.name, url: `https://www.mutuciptautama.id/author/${slug}/` }
                ]}
            />

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                {/* Author Profile Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-100 shadow-lg flex-shrink-0">
                            {author.image ? (
                                <Image
                                    src={urlFor(author.image).url()}
                                    alt={author.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-4xl font-bold">
                                    {author.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                                {author.name}
                            </h1>
                            <p className="text-xl text-primary font-medium mb-6">
                                {author.role}
                            </p>

                            {author.bio && (
                                <div className="prose prose-zinc max-w-none text-zinc-600">
                                    <PortableText value={author.bio} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Author's Posts */}
                {posts.length > 0 && (
                    <div className="max-w-6xl mx-auto border-t pt-16">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center md:text-left">
                            Artikel oleh {author.name} ({posts.length})
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post: SanityBlogPost) => (
                                <BlogCard key={post._id} post={post} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
