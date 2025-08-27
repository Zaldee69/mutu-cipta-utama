import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
}

const defaultMeta = {
  title: 'PT Mutu Cipta Utama - Konsultan Manajemen & Teknologi Profesional',
  description: 'PT Mutu Cipta Utama menyediakan layanan konsultasi manajemen, teknologi informasi, pengembangan e-commerce, dan jasa keinsinyuran profesional. NIB: 1003250034417',
  keywords: 'konsultan manajemen, teknologi informasi, e-commerce, keinsinyuran, arsitektur, konsultasi transportasi, Jakarta, PT Mutu Cipta Utama',
  image: '/mock.png',
  type: 'website' as const,
  author: 'PT Mutu Cipta Utama'
}

export const SEO = ({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url,
  type = defaultMeta.type,
  author = defaultMeta.author
}: SEOProps) => {
  const router = useRouter()
  const currentUrl = url || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'}${router.asPath}`
  const pageTitle = title ? `${title} | PT Mutu Cipta Utama` : defaultMeta.title

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="PT Mutu Cipta Utama" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}
