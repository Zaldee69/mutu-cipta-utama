"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://www.mutuciptautama.id"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://www.mutuciptautama.id${item.href}`
            }))
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" className="py-4">
                <ol className="flex items-center gap-2 text-sm text-zinc-600">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center hover:text-primary transition-colors"
                            aria-label="Beranda"
                        >
                            <Home className="w-4 h-4" />
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={item.href} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-zinc-400" />
                            {index === items.length - 1 ? (
                                <span className="font-medium text-zinc-900" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
