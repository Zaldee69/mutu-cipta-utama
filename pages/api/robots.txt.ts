import type { NextApiRequest, NextApiResponse } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export default function robots(req: NextApiRequest, res: NextApiResponse) {
  const robotsTxt = `# Robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/api/sitemap.xml

# Block admin and private pages if any
# Disallow: /admin
# Disallow: /api/
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(robotsTxt);
  res.end();
}
