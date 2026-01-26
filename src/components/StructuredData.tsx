export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "PT Mutu Cipta Utama",
        "alternateName": "Mutu Cipta Utama",
        "description": "Konsultan lingkungan profesional yang menyediakan layanan AMDAL, UKL-UPL, PERTEK, pengelolaan limbah B3, audit lingkungan, dan CSR",
        "url": "https://www.mutuciptautama.id",
        "logo": "https://www.mutuciptautama.id/mutu-cipta-utama-logo.png",
        "image": "https://www.mutuciptautama.id/og-image.jpg",
        "telephone": "+62-xxx-xxxx-xxxx",
        "email": "info@mutuciptautama.id",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID",
            "addressLocality": "Indonesia"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Indonesia"
        },
        "serviceType": [
            "Konsultan Lingkungan",
            "AMDAL",
            "UKL-UPL",
            "PERTEK",
            "Pengelolaan Limbah B3",
            "Audit Lingkungan",
            "CSR"
        ],
        "knowsAbout": [
            "Environmental Impact Assessment",
            "Environmental Consulting",
            "Hazardous Waste Management",
            "Environmental Compliance",
            "Corporate Social Responsibility",
            "Environmental Engineering"
        ],
        "slogan": "Mitra Strategis Bisnis Berkelanjutan",
        "foundingDate": "2010",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "50"
        },
        "sameAs": [
            "https://www.facebook.com/mutuciptautama",
            "https://www.instagram.com/mutuciptautama",
            "https://www.linkedin.com/company/mutuciptautama"
        ]
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Service",
                "name": "AMDAL (Analisis Mengenai Dampak Lingkungan)",
                "description": "Penyusunan dokumen AMDAL untuk proyek yang berdampak penting terhadap lingkungan. Mencakup kajian komprehensif dampak lingkungan, sosial, dan ekonomi.",
                "serviceType": "Environmental Impact Assessment",
                "provider": {
                    "@type": "Organization",
                    "name": "PT Mutu Cipta Utama"
                },
                "areaServed": "Indonesia",
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Perusahaan dengan proyek berdampak penting"
                }
            },
            {
                "@type": "Service",
                "name": "UKL-UPL",
                "description": "Penyusunan dokumen Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan untuk kegiatan yang tidak berdampak penting",
                "serviceType": "Environmental Management Plan",
                "provider": {
                    "@type": "Organization",
                    "name": "PT Mutu Cipta Utama"
                },
                "areaServed": "Indonesia"
            },
            {
                "@type": "Service",
                "name": "PERTEK (Persetujuan Teknis)",
                "description": "Pengurusan persetujuan teknis untuk instalasi pengolahan limbah cair, emisi udara, dan limbah B3 sesuai regulasi KLHK",
                "serviceType": "Technical Approval Services",
                "provider": {
                    "@type": "Organization",
                    "name": "PT Mutu Cipta Utama"
                },
                "areaServed": "Indonesia"
            },
            {
                "@type": "Service",
                "name": "Pengelolaan Limbah B3",
                "description": "Konsultasi dan pendampingan pengelolaan limbah bahan berbahaya dan beracun, termasuk penyimpanan, pengangkutan, dan pemusnahan",
                "serviceType": "Hazardous Waste Management",
                "provider": {
                    "@type": "Organization",
                    "name": "PT Mutu Cipta Utama"
                },
                "areaServed": "Indonesia"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
        </>
    );
}
