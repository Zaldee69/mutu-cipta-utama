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
        "@type": ["BlogPosting", "Article"],
        "headline": post.title,
        "description": post.excerpt,
        "image": [
            {
                "@type": "ImageObject",
                "url": imageUrl,
                "width": 1200,
                "height": 630
            }
        ],
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role || "Environmental Consultant",
            "url": "slug" in post.author && post.author.slug?.current
                ? `https://www.mutuciptautama.id/author/${post.author.slug.current}/`
                : "https://www.mutuciptautama.id/tentang-kami/"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://www.mutuciptautama.id/#organization",
            "name": "PT Mutu Cipta Utama",
            "url": "https://www.mutuciptautama.id/",
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
        "url": `https://www.mutuciptautama.id/blog/${slug}/`,
        "keywords": post.tags ? post.tags.join(", ") : "",
        "articleSection": category,
        "inLanguage": "id-ID",
        "isPartOf": {
            "@type": "Blog",
            "@id": "https://www.mutuciptautama.id/blog/",
            "name": "Blog Konsultan Lingkungan",
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.mutuciptautama.id/#organization"
            }
        }
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://www.mutuciptautama.id/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.mutuciptautama.id/blog/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.mutuciptautama.id/blog/${slug}/`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
        </>
    );
}
