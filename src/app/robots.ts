import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/studio/', '/admin/', '/private/'],
        },
        sitemap: 'https://www.mutuciptautama.id/sitemap.xml',
    }
}
