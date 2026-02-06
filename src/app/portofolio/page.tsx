import { Portfolio } from "@/components/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://www.mutuciptautama.id'),
    title: "Portofolio Proyek | PT Mutu Cipta Utama",
    description: "Lihat portofolio proyek konsultan lingkungan kami di berbagai sektor industri di seluruh Indonesia.",
    alternates: {
        canonical: "https://www.mutuciptautama.id/portofolio/"
    },
    openGraph: {
        title: "Portofolio Proyek Konsultan Lingkungan | PT Mutu Cipta Utama",
        description: "Lihat portofolio proyek konsultan lingkungan kami di berbagai sektor industri di seluruh Indonesia.",
        url: "https://www.mutuciptautama.id/portofolio/",
        siteName: "PT Mutu Cipta Utama",
        type: "website",
        locale: "id_ID",
        images: [
            {
                url: "/mutu-cipta-utama-logo.png",
                width: 1200,
                height: 630,
                alt: "PT Mutu Cipta Utama - Portofolio Proyek Konsultan Lingkungan"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Portofolio Proyek Konsultan Lingkungan | PT Mutu Cipta Utama",
        description: "Lihat portofolio proyek konsultan lingkungan kami di berbagai sektor industri di seluruh Indonesia.",
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
        }
    }
};

export default function PortfolioPage() {
    return <Portfolio />;
}
