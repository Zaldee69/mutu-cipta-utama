import { BlogPost } from "@/lib/blog-data";
import { SanityBlogPost } from "@/components/BlogCard";
import { urlFor } from "@/sanity/lib/image";

interface BlogJSONLDProps {
    post: BlogPost | SanityBlogPost;
}

export function BlogJSONLD({ post }: BlogJSONLDProps) {
    const getImageUrl = () => {
        if ('mainImage' in post && post.mainImage) {
            return urlFor(post.mainImage).url();
        }
        if ('coverImage' in post && post.coverImage) {
            return post.coverImage;
        }
        return "https://www.mutuciptautama.id/opengraph-image.png";
    };

    const getSlug = () => {
        if (typeof post.slug === 'object' && post.slug !== null && 'current' in post.slug) {
            return post.slug.current;
        }
        return post.slug as string;
    };

    const getCategory = () => {
        if ('categories' in post && Array.isArray(post.categories) && post.categories.length > 0) {
            return post.categories[0];
        }
        if ('category' in post) {
            return post.category;
        }
        return "Umum";
    };

    const imageUrl = getImageUrl();
    const slug = getSlug();
    const category = getCategory();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": {
            "@type": "ImageObject",
            "url": imageUrl,
            "width": 1200,
            "height": 630
        },
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role
        },
        "publisher": {
            "@type": "Organization",
            "name": "PT Mutu Cipta Utama",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.mutuciptautama.id/mutu-cipta-utama-logo.png",
                "width": 500,
                "height": 500
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.mutuciptautama.id/blog/${slug}/`
        },
        "keywords": post.tags ? post.tags.join(", ") : "",
        "articleSection": category
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
