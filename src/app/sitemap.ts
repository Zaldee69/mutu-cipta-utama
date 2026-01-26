import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.mutuciptautama.id'

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/portofolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    // Dynamic service pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/layanan/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...servicePages]
}
