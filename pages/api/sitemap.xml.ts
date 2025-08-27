import type { NextApiRequest, NextApiResponse } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Main Pages -->
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     
     <!-- Add more pages here as needed -->
     <!-- 
     <url>
       <loc>${SITE_URL}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     -->
   </urlset>
 `;
}

export default function sitemap(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSiteMap();
  
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
}
