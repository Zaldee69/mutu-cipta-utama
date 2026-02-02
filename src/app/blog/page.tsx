import { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";


export const metadata: Metadata = {
    title: "Blog | PT Mutu Cipta Utama",
    description: "Artikel, tips, dan update terbaru seputar regulasi lingkungan, studi kasus, dan panduan praktis dari para ahli konsultan lingkungan.",
    alternates: {
        canonical: "https://www.mutuciptautama.id/blog/"
    }
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await client.fetch(postsQuery);

    return <BlogList posts={posts} />;
}
