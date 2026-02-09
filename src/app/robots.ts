import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/', '/_next/image/', '/_next/static/', '/favicon.ico'],
                disallow: ['/studio/', '/admin/', '/api/'],
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: ['/', '/_next/image/', '/_next/static/', '/favicon.ico'],
                disallow: ['/studio/', '/admin/'],
            },
            {
                userAgent: 'Bingbot',
                allow: ['/', '/_next/image/', '/_next/static/', '/favicon.ico'],
                disallow: ['/studio/', '/admin/', '/api/'],
                crawlDelay: 1,
            },
            {
                userAgent: '*',
                allow: ['/', '/_next/image/', '/_next/static/', '/favicon.ico'],
                disallow: ['/studio/', '/admin/', '/private/', '/api/'],
                crawlDelay: 2,
            }
        ],
        sitemap: 'https://www.mutuciptautama.id/sitemap.xml',
    }
}
