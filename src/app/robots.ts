import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.mutuciptautama.id'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/studio/', '/admin/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
