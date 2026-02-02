import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/lib/services-data";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceContent } from "@/components/ServiceContent";
import { RelatedServices } from "@/components/RelatedServices";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { getFAQsForService, serviceHasFAQs } from "@/lib/service-faqs";
import { getServiceHeadings } from "@/lib/service-headings";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Layanan Tidak Ditemukan",
        };
    }

    // Keyword-optimized titles based on research clusters
    const titleMap: Record<string, string> = {
        "amdal-ukl-upl": "Konsultan AMDAL & UKL-UPL Profesional Berpengalaman | Mutu Cipta Utama",
        "audit-lingkungan-hidup": "Audit Lingkungan Perusahaan Wajib & Sukarela | Konsultan Audit Lingkungan",
        "pengelolaan-limbah-b3": "Pengelolaan Limbah B3 Terpercaya | TPS B3 & Transporter Bersertifikat",
        "pertek-emisi": "PERTEK Emisi Udara | Persetujuan Teknis Pengendalian Pencemaran Udara",
        "pertek-air-limbah": "PERTEK Air Limbah Industri | Persetujuan Teknis IPAL & Pembuangan",
        "pertek-pengelolaan-limbah-b3": "PERTEK Pengelolaan Limbah B3 | Izin Operasional TPS B3 Legal",
        "pertek-andalalin": "PERTEK ANDALALIN | Analisis Dampak Lalu Lintas untuk IMB/PBG",
        "advisor-hukum-lingkungan": "Konsultasi Hukum Lingkungan | Advisor Legal Compliance Lingkungan",
        "program-csr-lingkungan": "Program CSR Lingkungan Berkelanjutan | Desain & Implementasi CSR",
        "event-sosialisasi-lingkungan": "Event Sosialisasi Lingkungan | Workshop AMDAL & FGD Stakeholder",
        "pemetaan-peta-resolusi-tinggi": "Pemetaan Drone LiDAR | Survey Peta Resolusi Tinggi & GIS",
        "feasibility-study": "Feasibility Study Proyek | Studi Kelayakan Teknis & Finansial",
        "design-engineering": "Design Engineering FEED DED | Konsultan Engineering Profesional",
        "layanan-drone-pemetaan-dokumentasi": "Jasa Drone Pemetaan & Dokumentasi Udara | Survey UAV Profesional",
        "pengadaan-instalasi-rth": "Pengadaan Instalasi RTH | Taman Vertikal & Landscape Design"
    };

    // Enhanced keyword-rich descriptions based on research
    const descriptionMap: Record<string, string> = {
        "amdal-ukl-upl": "Jasa penyusunan AMDAL profesional & UKL-UPL terpercaya. Konsultan AMDAL berpengalaman untuk dokumen lingkungan lengkap, SKKLH, dan persetujuan Komisi Penilai. Proses cepat, hasil berkualitas.",
        "audit-lingkungan-hidup": "Layanan audit lingkungan wajib & sukarela untuk kepatuhan regulasi KLHK. Auditor lingkungan bersertifikat, audit PROPER, ISO 14001, evaluasi sistem manajemen lingkungan perusahaan.",
        "pengelolaan-limbah-b3": "Jasa pengelolaan limbah B3 terintegrasi: TPS B3 legal, transporter bersertifikat KLHK, pengolahan PPLI. Manifest elektronik SIMPEL, kepatuhan PP 22/2021, solusi limbah berbahaya terpercaya.",
        "pertek-emisi": "Penyusunan PERTEK emisi untuk SLO & kepatuhan baku mutu. Pengujian emisi cerobong, pemodelan dispersi AERMOD, evaluasi sistem pengendalian udara sesuai Permen LHK 13/2021.",
        "pertek-air-limbah": "PERTEK air limbah industri & domestik untuk izin pembuangan. Audit kinerja IPAL, pengujian efluen BOD COD TSS, kepatuhan baku mutu Permen LHK 68/2016, persetujuan Dinas Lingkungan Hidup.",
        "pertek-pengelolaan-limbah-b3": "PERTEK pengelolaan limbah B3 untuk legalitas TPS B3. Desain fasilitas penyimpanan, SOP pengelolaan, kepatuhan PP 22/2021 & Permen LHK 6/2021. Izin operasional limbah berbahaya.",
        "pertek-andalalin": "Penyusunan PERTEK ANDALALIN untuk IMB/PBG. Analisis dampak lalu lintas, perhitungan V/C ratio, bangkitan perjalanan, desain sirkulasi parkir sesuai regulasi Dinas Perhubungan.",
        "advisor-hukum-lingkungan": "Konsultasi hukum lingkungan profesional untuk compliance, uji tuntas, penyelesaian sengketa. Legal advisor spesialis UU PPLH, PP 22/2021, audit kepatuhan regulasi KLHK.",
        "program-csr-lingkungan": "Desain & implementasi program CSR lingkungan berkelanjutan. Konservasi biodiversitas, pemberdayaan masyarakat, PROPER Hijau/Emas, pelaporan keberlanjutan GRI Standards.",
        "event-sosialisasi-lingkungan": "Penyelenggaraan event lingkungan profesional: sosialisasi AMDAL, konsultasi publik, FGD stakeholder, workshop HSE, kampanye kesadaran lingkungan dengan dokumentasi lengkap.",
        "pemetaan-peta-resolusi-tinggi": "Jasa pemetaan drone LiDAR & survey topografi. Peta resolusi tinggi, DEM/DSM, orthophoto, analisis GIS, bathymetry. Akurasi tinggi sesuai standar BIG untuk AMDAL & engineering.",
        "feasibility-study": "Studi kelayakan komprehensif: analisis teknis, finansial (NPV IRR), pasar, lingkungan, sosial, hukum. Laporan bankable untuk keputusan investasi & pembiayaan proyek.",
        "design-engineering": "Jasa design engineering FEED DED lengkap. Perhitungan struktur, mekanikal, elektrikal, P&ID, pemodelan 3D BIM, RAB/BoQ, RKS sesuai SNI/ASTM untuk tender konstruksi.",
        "layanan-drone-pemetaan-dokumentasi": "Layanan drone UAV profesional untuk pemetaan udara, inspeksi infrastruktur, monitoring konstruksi, fotogrametri. Resolusi tinggi, efisien, data GIS terintegrasi.",
        "pengadaan-instalasi-rth": "Pengadaan & instalasi RTH untuk kepatuhan Perda 30%. Desain landscape, taman vertikal, sistem irigasi, program perawatan. Nursery bersertifikat, infrastruktur hijau berkelanjutan."
    };

    // Keywords based on service cluster from keyword research
    const keywordsMap: Record<string, string[]> = {
        "amdal-ukl-upl": ["konsultan AMDAL", "penyusunan AMDAL profesional", "UKL UPL", "dokumen lingkungan", "SKKLH", "jasa AMDAL", "konsultan lingkungan berpengalaman"],
        "audit-lingkungan-hidup": ["audit lingkungan", "audit lingkungan perusahaan", "auditor lingkungan bersertifikat", "audit PROPER", "ISO 14001", "kepatuhan lingkungan"],
        "pengelolaan-limbah-b3": ["pengelolaan limbah B3", "TPS limbah B3", "transporter limbah B3", "PPLI", "manifest SIMPEL", "limbah berbahaya"],
        "pertek-emisi": ["PERTEK emisi", "pengujian emisi cerobong", "pengendalian pencemaran udara", "baku mutu emisi", "SLO", "AERMOD"],
        "pertek-air-limbah": ["PERTEK air limbah", "IPAL industri", "pengujian efluen", "BOD COD TSS", "izin pembuangan", "baku mutu air limbah"],
        "pertek-pengelolaan-limbah-b3": ["PERTEK limbah B3", "TPS B3", "izin operasional limbah B3", "fasilitas penyimpanan B3", "SOP limbah B3"],
        "pertek-andalalin": ["PERTEK ANDALALIN", "analisis dampak lalu lintas", "ANDALALIN", "V/C ratio", "bangkitan perjalanan", "IMB PBG"],
        "advisor-hukum-lingkungan": ["konsultasi hukum lingkungan", "advisor hukum lingkungan", "compliance lingkungan", "UU PPLH", "legal lingkungan"],
        "program-csr-lingkungan": ["program CSR lingkungan", "CSR berkelanjutan", "PROPER Hijau Emas", "pelaporan keberlanjutan", "GRI Standards"],
        "event-sosialisasi-lingkungan": ["sosialisasi AMDAL", "konsultasi publik", "FGD lingkungan", "workshop HSE", "event lingkungan"],
        "pemetaan-peta-resolusi-tinggi": ["pemetaan drone", "LiDAR", "survey topografi", "peta resolusi tinggi", "GIS", "orthophoto"],
        "feasibility-study": ["feasibility study", "studi kelayakan", "analisis finansial", "NPV IRR", "laporan bankable"],
        "design-engineering": ["design engineering", "FEED DED", "perhitungan struktur", "RAB BoQ", "BIM 3D"],
        "layanan-drone-pemetaan-dokumentasi": ["jasa drone", "pemetaan udara", "survey UAV", "fotogrametri", "dokumentasi aerial"],
        "pengadaan-instalasi-rth": ["pengadaan RTH", "instalasi RTH", "taman vertikal", "landscape design", "ruang terbuka hijau"]
    };

    return {
        title: titleMap[slug] || `${service.title} | PT Mutu Cipta Utama`,
        description: descriptionMap[slug] || service.shortDescription,
        keywords: keywordsMap[slug] || [],
        alternates: {
            canonical: `https://www.mutuciptautama.id/layanan/${slug}/`,
        },
        openGraph: {
            title: titleMap[slug] || service.title,
            description: descriptionMap[slug] || service.shortDescription,
            url: `https://www.mutuciptautama.id/layanan/${slug}/`,
            siteName: "PT Mutu Cipta Utama",
            type: "website",
            images: [
                {
                    url: service.heroImage,
                    width: 1200,
                    height: 630,
                    alt: service.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: titleMap[slug] || service.title,
            description: descriptionMap[slug] || service.shortDescription,
            images: [service.heroImage]
        }
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const breadcrumbItems = [
        { name: "Beranda", url: "https://www.mutuciptautama.id/" },
        { name: "Layanan", url: "https://www.mutuciptautama.id/layanan/" },
        { name: service.title, url: `https://www.mutuciptautama.id/layanan/${slug}/` }
    ];

    const headings = getServiceHeadings(slug);

    return (
        <>
            <ServiceSchema service={service} />
            <BreadcrumbSchema items={breadcrumbItems} />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={service.title}
                    h1Title={headings.h1}
                    image={service.heroImage}
                />

                {/* Full-width content for better readability and conversion */}
                <div className="container max-w-5xl py-12">
                    <ServiceContent service={service} headings={headings} />
                </div>

            {/* FAQ Section with Schema */}
            {serviceHasFAQs(slug) && (
                <ServiceFAQ
                    serviceName={service.title}
                    faqs={getFAQsForService(slug)}
                />
            )}

            {/* Related Services for Internal Linking */}
            <RelatedServices currentSlug={service.slug} currentGroup={service.group} />
        </main>
    </>
    );
}
