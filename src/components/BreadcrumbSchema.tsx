import { BlogBreadcrumbProps } from "@/types/seo";

interface StructuredDataProps {
    breadcrumb: BlogBreadcrumbProps;
}

export function BreadcrumbSchema({ breadcrumb }: StructuredDataProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "item": item.url ? `https://www.mutuciptautama.id${item.url}` : undefined
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
