import { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";


export const metadata: Metadata = {
    metadataBase: new URL('https://www.mutuciptautama.id'),
    title: "Blog | PT Mutu Cipta Utama",
    description: "Artikel, tips, dan update terbaru seputar regulasi lingkungan, studi kasus, dan panduan praktis dari para ahli konsultan lingkungan.",
    alternates: {
        canonical: "https://www.mutuciptautama.id/blog/"
    },
    openGraph: {
        title: "Blog Konsultan Lingkungan | PT Mutu Cipta Utama",
        description: "Artikel, tips, dan update terbaru seputar regulasi lingkungan, studi kasus, dan panduan praktis dari para ahli konsultan lingkungan.",
        url: "https://www.mutuciptautama.id/blog/",
        siteName: "PT Mutu Cipta Utama",
        type: "website",
        locale: "id_ID",
        images: [
            {
                url: "/mutu-cipta-utama-logo.png",
                width: 1200,
                height: 630,
                alt: "PT Mutu Cipta Utama - Blog Konsultan Lingkungan"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog Konsultan Lingkungan | PT Mutu Cipta Utama",
        description: "Artikel, tips, dan update terbaru seputar regulasi lingkungan, studi kasus, dan panduan praktis dari para ahli konsultan lingkungan.",
        images: ["/mutu-cipta-utama-logo.png"]
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
        }
    }
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await client.fetch(postsQuery);

    return <BlogList posts={posts} />;
}
