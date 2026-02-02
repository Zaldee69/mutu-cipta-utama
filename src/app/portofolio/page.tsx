import { Portfolio } from "@/components/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portofolio Proyek | PT Mutu Cipta Utama",
    description: "Lihat portofolio proyek konsultan lingkungan kami di berbagai sektor industri di seluruh Indonesia.",
    alternates: {
        canonical: "https://www.mutuciptautama.id/portofolio/"
    }
};

export default function PortfolioPage() {
    return <Portfolio />;
}
