import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { cities } from '@/lib/city-data'
import { comparisons } from '@/lib/comparison-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.mutuciptautama.id'

    // Static pages
    const staticPages = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date('2025-01-15'), // Website launch date
            changeFrequency: 'weekly' as const,
            priority: 1,
            images: [
                {
                    url: `${baseUrl}/mutu-cipta-utama-logo.png`,
                    title: 'PT Mutu Cipta Utama - Konsultan Lingkungan Terpercaya',
                    caption: 'Konsultan lingkungan profesional untuk AMDAL, UKL-UPL, PERTEK, dan pengelolaan limbah B3',
                },
                {
                    url: `${baseUrl}/hero.jpeg`,
                    title: 'PT Mutu Cipta Utama - Environmental Consulting',
                    caption: 'Layanan konsultan lingkungan hidup terpercaya di Indonesia',
                },
            ],
        },
        {
            url: `${baseUrl}/tentang-kami/`,
            lastModified: new Date('2025-01-15'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            images: [
                {
                    url: `${baseUrl}/mutu-cipta-utama-logo.png`,
                    title: 'Tentang PT Mutu Cipta Utama',
                    caption: 'Profil perusahaan konsultan lingkungan PT Mutu Cipta Utama',
                },
            ],
        },
        {
            url: `${baseUrl}/blog/`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portofolio/`,
            lastModified: new Date('2025-01-15'),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    // Dynamic service pages with priority based on keyword research tiers
    const tier1Services = [
        'amdal-ukl-upl',
        'audit-lingkungan-hidup',
        'pengelolaan-limbah-b3',
        'advisor-hukum-lingkungan',
        'pertek-emisi',
        'pertek-air-limbah',
        'program-csr-lingkungan'
    ];

    const tier2Services = [
        'pertek-pengelolaan-limbah-b3',
        'pertek-andalalin',
        'pemetaan-peta-resolusi-tinggi',
        'feasibility-study'
    ];

    const servicePages = services.map((service) => {
        let priority = 0.6; // Tier 3 default
        let changeFrequency: 'weekly' | 'monthly' = 'monthly';

        if (tier1Services.includes(service.slug)) {
            priority = 0.9; // High priority - Tier 1 keywords
            changeFrequency = 'weekly';
        } else if (tier2Services.includes(service.slug)) {
            priority = 0.8; // Medium-high priority - Tier 2 keywords
            changeFrequency = 'monthly';
        }

        return {
            url: `${baseUrl}/layanan/${service.slug}/`,
            lastModified: new Date(),
            changeFrequency,
            priority,
            images: [
                {
                    url: service.heroImage,
                    title: service.title,
                    caption: service.shortDescription,
                },
            ],
        };
    })

    // Dynamic city pages for local SEO
    const cityPages = cities.map((city) => ({
        url: `${baseUrl}/lokasi/${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8, // High priority for local SEO
    }))

    // Dynamic comparison pages
    const comparisonPages = comparisons.map((comp) => ({
        url: `${baseUrl}/perbandingan/${comp.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7, // High value for decision-stage keywords
    }))

    // Fetch blog posts from Sanity
    const posts = await client.fetch(postsQuery);

    // Dynamic blog posts
    const blogEntries = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug.current}/`,
        lastModified: new Date(post._updatedAt || post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        ...(post.mainImage?.asset?.url && {
            images: [
                {
                    url: post.mainImage.asset.url,
                    title: post.title,
                    caption: post.excerpt || post.title,
                },
            ],
        }),
    }))

    return [...staticPages, ...servicePages, ...cityPages, ...comparisonPages, ...blogEntries]
}
