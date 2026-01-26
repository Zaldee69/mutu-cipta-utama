import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000'
  ],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: "PT Mutu Cipta Utama - Konsultan Lingkungan Terpercaya",
    template: "%s | PT Mutu Cipta Utama"
  },
  description: "Jasa konsultan lingkungan profesional untuk AMDAL, UKL-UPL, PERTEK, pengelolaan limbah B3, audit lingkungan, dan CSR. Solusi terpadu untuk kepatuhan lingkungan bisnis Anda.",
  keywords: ["konsultan lingkungan", "AMDAL", "UKL-UPL", "PERTEK", "limbah B3", "audit lingkungan", "CSR", "konsultan lingkungan Indonesia", "jasa AMDAL", "perizinan lingkungan"],
  authors: [{ name: "PT Mutu Cipta Utama" }],
  creator: "PT Mutu Cipta Utama",
  publisher: "PT Mutu Cipta Utama",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.mutuciptautama.id",
    siteName: "PT Mutu Cipta Utama",
    title: "PT Mutu Cipta Utama - Konsultan Lingkungan Terpercaya",
    description: "Jasa konsultan lingkungan profesional untuk AMDAL, UKL-UPL, PERTEK, pengelolaan limbah B3, audit lingkungan, dan CSR.",
    images: [
      {
        url: "/mutu-cipta-utama-logo.png",
        width: 1200,
        height: 630,
        alt: "PT Mutu Cipta Utama - Konsultan Lingkungan"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Mutu Cipta Utama - Konsultan Lingkungan Terpercaya",
    description: "Jasa konsultan lingkungan profesional untuk AMDAL, UKL-UPL, PERTEK, pengelolaan limbah B3, audit lingkungan, dan CSR.",
    images: ["/mutu-cipta-utama-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'abstract': 'PT Mutu Cipta Utama adalah konsultan lingkungan terpercaya yang menyediakan layanan AMDAL, UKL-UPL, PERTEK, dan pengelolaan limbah B3 di seluruh Indonesia sejak 2010.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#0066cc" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.mutuciptautama.id" />
      </head>
      <body
        className={`${dmSans.variable} ${dmSans.className} antialiased`}
      >
        <StructuredData />
        <FAQSchema />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
