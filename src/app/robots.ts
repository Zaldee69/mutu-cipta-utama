import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/studio/', '/admin/', '/api/', '/_next/'],
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
                disallow: ['/studio/', '/admin/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/studio/', '/admin/', '/api/', '/_next/'],
                crawlDelay: 1,
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/studio/', '/admin/', '/private/', '/api/', '/_next/'],
                crawlDelay: 2,
            }
        ],
        sitemap: 'https://www.mutuciptautama.id/sitemap.xml',
    }
}
