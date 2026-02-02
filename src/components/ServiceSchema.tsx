import { Service } from "@/lib/services-data";

interface ServiceSchemaProps {
    service: Service;
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
    // Map service groups to primary keywords from research
    const getKeywordsForService = (slug: string) => {
        const keywordMap: Record<string, string[]> = {
            "amdal-ukl-upl": [
                "konsultan AMDAL berpengalaman",
                "penyusunan AMDAL profesional",
                "AMDAL lengkap",
                "UKL UPL konsultan terpercaya",
                "dokumen lingkungan",
                "jasa AMDAL",
                "konsultasi AMDAL"
            ],
            "audit-lingkungan-hidup": [
                "audit lingkungan perusahaan",
                "audit lingkungan wajib",
                "environmental audit Indonesia",
                "audit kepatuhan lingkungan",
                "auditor lingkungan bersertifikat"
            ],
            "pengelolaan-limbah-b3": [
                "pengelolaan limbah B3",
                "limbah B3 perusahaan",
                "jasa pengelolaan limbah B3",
                "TPS limbah B3",
                "transporter limbah B3 bersertifikat"
            ],
            "pertek-emisi": [
                "PERTEK emisi",
                "PERTEK emisi udara",
                "persetujuan teknis emisi",
                "pengendalian pencemaran udara"
            ],
            "pertek-air-limbah": [
                "PERTEK air limbah",
                "PERTEK air limbah industri",
                "persetujuan teknis air limbah",
                "izin pembuangan air limbah"
            ],
            "pertek-pengelolaan-limbah-b3": [
                "PERTEK pengelolaan limbah B3",
                "PERTEK limbah B3",
                "izin operasional TPS B3",
                "persetujuan teknis limbah B3"
            ],
            "pertek-andalalin": [
                "PERTEK ANDALALIN",
                "ANDALALIN analisis dampak lalu lintas",
                "analisis dampak lalu lintas",
                "konsultan ANDALALIN profesional"
            ],
            "advisor-hukum-lingkungan": [
                "konsultasi hukum lingkungan",
                "advisor hukum lingkungan",
                "lawyer spesialis lingkungan",
                "konsultan hukum lingkungan"
            ],
            "program-csr-lingkungan": [
                "program CSR lingkungan",
                "desain program CSR",
                "CSR perusahaan berkelanjutan",
                "konsultan CSR lingkungan"
            ],
            "event-sosialisasi-lingkungan": [
                "workshop lingkungan",
                "sosialisasi AMDAL",
                "FGD lingkungan",
                "seminar lingkungan"
            ],
            "pemetaan-peta-resolusi-tinggi": [
                "pemetaan drone LiDAR",
                "survey pemetaan proyek",
                "peta resolusi tinggi",
                "jasa pemetaan topografi"
            ],
            "feasibility-study": [
                "feasibility study proyek",
                "studi kelayakan teknis",
                "studi kelayakan finansial",
                "konsultan feasibility study"
            ],
            "design-engineering": [
                "design engineering profesional",
                "FEED DED",
                "jasa design engineering",
                "konsultan engineering"
            ],
            "layanan-drone-pemetaan-dokumentasi": [
                "jasa drone pemetaan",
                "pemetaan udara drone",
                "survey drone UAV",
                "dokumentasi aerial drone"
            ],
            "pengadaan-instalasi-rth": [
                "pengadaan RTH",
                "instalasi ruang terbuka hijau",
                "taman vertikal",
                "landscape design"
            ]
        };

        return keywordMap[slug] || [];
    };

    const getServiceCategory = (group: Service["group"]) => {
        const categoryMap = {
            "Persetujuan Lingkungan": "Environmental Compliance & Assessment",
            "Persetujuan Teknis (PERTEK)": "Technical Permit & Authorization",
            "Limbah & CSR": "Waste Management & Corporate Social Responsibility",
            "Engineering & Survey": "Engineering Design & Geospatial Survey"
        };
        return categoryMap[group];
    };

    const keywords = getKeywordsForService(service.slug);

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": getServiceCategory(service.group),
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "@id": "https://www.mutuciptautama.id/#organization",
            "name": "PT Mutu Cipta Utama",
            "url": "https://www.mutuciptautama.id/"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Indonesia"
        },
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://www.mutuciptautama.id/layanan/${service.slug}/`,
            "serviceType": service.title
        },
        ...(keywords.length > 0 && {
            "keywords": keywords.join(", ")
        }),
        ...(service.manfaat && {
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `Manfaat ${service.title}`,
                "itemListElement": service.manfaat.map((benefit, index) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": benefit.split(":")[0].trim(),
                        "description": benefit
                    },
                    "position": index + 1
                }))
            }
        }),
        "audience": {
            "@type": "Audience",
            "audienceType": "B2B Companies: Construction, Mining, Energy, Manufacturing, Infrastructure"
        }
    };

    // Add HowTo schema for services with clear process steps
    const hasDetailedProcess = service.tahapanProses.some(step => typeof step === 'object');
    
    const howToSchema = hasDetailedProcess ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `Cara Mendapatkan ${service.title}`,
        "description": `Tahapan proses untuk mendapatkan layanan ${service.title} dari PT Mutu Cipta Utama`,
        "step": service.tahapanProses.map((step, index) => {
            if (typeof step === 'object') {
                return {
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.title,
                    "text": step.description
                };
            }
            return {
                "@type": "HowToStep",
                "position": index + 1,
                "text": step
            };
        })
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}
        </>
    );
}
