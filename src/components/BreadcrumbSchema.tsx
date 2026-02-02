import { BlogBreadcrumbProps } from "@/types/seo";

interface StructuredDataProps {
    breadcrumb: BlogBreadcrumbProps;
}

export function BreadcrumbSchema({ breadcrumb }: StructuredDataProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.items.map((item, index) => {
            let itemUrl = item.url;
            if (itemUrl && !itemUrl.endsWith('/')) {
                itemUrl = `${itemUrl}/`;
            }
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": item.title,
                "item": itemUrl ? `https://www.mutuciptautama.id${itemUrl}` : undefined
            };
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
