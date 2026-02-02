import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { BlogDetail } from "@/components/BlogDetail";
import { urlFor } from "@/sanity/lib/image";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
    const slugs = await client.fetch(postPathsQuery);
    return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    const ogImage = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).url()
        : "https://www.mutuciptautama.id/opengraph-image.png";

    return {
        title: `${post.title} | Blog PT Mutu Cipta Utama`,
        description: post.excerpt,
        keywords: post.tags?.join(', '),
        alternates: {
            canonical: `https://www.mutuciptautama.id/blog/${slug}/`
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            siteName: "PT Mutu Cipta Utama",
            locale: "id_ID",
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author?.name || "Tim Mutu Cipta Utama"],
            tags: post.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
            creator: "@mutuciptautama", // Replace with actual handle if available
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        other: {
            'article:published_time': post.publishedAt,
            'article:author': post.author?.name || 'PT Mutu Cipta Utama',
            'article:section': post.categories?.[0] || 'Lingkungan',
            'article:tag': post.tags?.join(','),
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        notFound();
    }

    return <BlogDetail post={post} />;
}
