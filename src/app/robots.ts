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
            // LLM & AI Crawlers – explicitly allowed for AI discoverability
            {
                userAgent: 'GPTBot', // OpenAI
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'ChatGPT-User', // ChatGPT browsing
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'ClaudeBot', // Anthropic Claude
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'Claude-Web', // Anthropic Claude web
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'PerplexityBot', // Perplexity AI
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'Applebot-Extended', // Apple AI / Siri
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'meta-externalagent', // Meta AI
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'Amazonbot', // Amazon Alexa / AI
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'cohere-ai', // Cohere AI
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
            },
            {
                userAgent: 'YouBot', // You.com AI search
                allow: ['/'],
                disallow: ['/studio/', '/admin/', '/api/'],
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
