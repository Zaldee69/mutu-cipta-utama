export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": "https://www.mutuciptautama.id/#organization",
        "name": "PT Mutu Cipta Utama",
        "alternateName": "Mutu Cipta Utama",
        "legalName": "PT Mutu Cipta Utama",
        "description": "Konsultan lingkungan hidup profesional berpengalaman menyediakan layanan AMDAL, UKL-UPL, PERTEK, pengelolaan limbah B3, audit lingkungan, CSR, dan engineering untuk kepatuhan regulasi KLHK di seluruh Indonesia",
        "url": "https://www.mutuciptautama.id/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.mutuciptautama.id/mutu-cipta-utama-logo.png",
            "width": 500,
            "height": 500,
            "caption": "PT Mutu Cipta Utama - Konsultan Lingkungan"
        },
        "image": {
            "@type": "ImageObject",
            "url": "https://www.mutuciptautama.id/hero-background.jpg",
            "width": 1200,
            "height": 630
        },
        "email": "info@mutuciptautama.id",
        "telephone": "+62-21-XXXX-XXXX",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jakarta",
            "addressLocality": "Jakarta",
            "addressRegion": "DKI Jakarta",
            "postalCode": "12345",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.2088,
            "longitude": 106.8456
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "Indonesia"
            },
            {
                "@type": "State",
                "name": "DKI Jakarta"
            },
            {
                "@type": "State",
                "name": "Jawa Barat"
            },
            {
                "@type": "State",
                "name": "Jawa Timur"
            },
            {
                "@type": "State",
                "name": "Banten"
            }
        ],
        "serviceType": [
            "Konsultan Lingkungan",
            "Penyusunan AMDAL",
            "UKL-UPL",
            "PERTEK Emisi",
            "PERTEK Air Limbah",
            "PERTEK Limbah B3",
            "Pengelolaan Limbah B3",
            "Audit Lingkungan",
            "Program CSR Lingkungan",
            "Konsultasi Hukum Lingkungan",
            "Pemetaan Drone LiDAR",
            "Design Engineering"
        ],
        "knowsAbout": [
            "AMDAL (Analisis Mengenai Dampak Lingkungan)",
            "UKL-UPL (Upaya Pengelolaan Lingkungan)",
            "Environmental Impact Assessment",
            "Environmental Consulting",
            "Hazardous Waste Management",
            "Environmental Compliance",
            "Corporate Social Responsibility",
            "Environmental Engineering",
            "PERTEK (Persetujuan Teknis)",
            "Environmental Audit",
            "ISO 14001",
            "PROPER KLHK"
        ],
        "slogan": "Mitra Strategis Bisnis Berkelanjutan",
        "foundingDate": "2025",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "50"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "sameAs": [
            "https://www.facebook.com/mutuciptautama",
            "https://www.instagram.com/mutuciptautama",
            "https://www.linkedin.com/company/mutuciptautama"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Layanan Konsultan Lingkungan",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Persetujuan Lingkungan",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AMDAL / UKL-UPL",
                                "url": "https://www.mutuciptautama.id/layanan/amdal-ukl-upl/"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Audit Lingkungan Hidup",
                                "url": "https://www.mutuciptautama.id/layanan/audit-lingkungan-hidup/"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Persetujuan Teknis (PERTEK)",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "PERTEK Emisi",
                                "url": "https://www.mutuciptautama.id/layanan/pertek-emisi/"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "PERTEK Air Limbah",
                                "url": "https://www.mutuciptautama.id/layanan/pertek-air-limbah/"
                            }
                        }
                    ]
                }
            ]
        }
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Layanan Konsultan Lingkungan PT Mutu Cipta Utama",
        "description": "Layanan lengkap konsultasi lingkungan untuk kepatuhan regulasi KLHK",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/amdal-ukl-upl/",
                    "name": "AMDAL / UKL-UPL",
                    "description": "Jasa penyusunan AMDAL profesional dan UKL-UPL untuk dokumen persetujuan lingkungan. Konsultan AMDAL berpengalaman, proses SKKLH, konsultasi publik sesuai PP 22/2021.",
                    "serviceType": "Environmental Impact Assessment",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/amdal-ukl-upl/"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/audit-lingkungan-hidup/",
                    "name": "Audit Lingkungan Hidup",
                    "description": "Audit lingkungan perusahaan wajib dan sukarela untuk kepatuhan regulasi KLHK, PROPER, ISO 14001. Auditor bersertifikat, evaluasi sistem manajemen lingkungan.",
                    "serviceType": "Environmental Audit",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/audit-lingkungan-hidup/"
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pengelolaan-limbah-b3/",
                    "name": "Pengelolaan Limbah B3",
                    "description": "Layanan pengelolaan limbah B3 terintegrasi: TPS B3 legal, transporter bersertifikat, pengolahan PPLI. Manifest SIMPEL, kepatuhan PP 22/2021, solusi limbah berbahaya.",
                    "serviceType": "Hazardous Waste Management",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pengelolaan-limbah-b3/"
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pertek-emisi/",
                    "name": "PERTEK Emisi",
                    "description": "Penyusunan PERTEK emisi udara untuk pengendalian pencemaran dari cerobong, genset, boiler. Pengujian emisi, pemodelan dispersi, kepatuhan baku mutu untuk SLO.",
                    "serviceType": "Technical Approval - Air Emission",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pertek-emisi/"
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pertek-air-limbah/",
                    "name": "PERTEK Air Limbah",
                    "description": "PERTEK air limbah untuk IPAL industri/domestik. Pengujian efluen BOD COD TSS, evaluasi kinerja IPAL, izin pembuangan ke badan air sesuai Permen LHK 68/2016.",
                    "serviceType": "Technical Approval - Wastewater",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pertek-air-limbah/"
                }
            },
            {
                "@type": "ListItem",
                "position": 6,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pertek-pengelolaan-limbah-b3/",
                    "name": "PERTEK Pengelolaan Limbah B3",
                    "description": "PERTEK pengelolaan limbah B3 untuk izin operasional TPS B3. Desain fasilitas, SOP pengelolaan, kepatuhan Permen LHK 6/2021, legalitas penyimpanan limbah berbahaya.",
                    "serviceType": "Technical Approval - Hazardous Waste",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pertek-pengelolaan-limbah-b3/"
                }
            },
            {
                "@type": "ListItem",
                "position": 7,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pertek-andalalin/",
                    "name": "PERTEK ANDALALIN",
                    "description": "Penyusunan PERTEK ANDALALIN untuk analisis dampak lalu lintas. Perhitungan V/C ratio, bangkitan perjalanan, desain sirkulasi parkir untuk IMB/PBG.",
                    "serviceType": "Traffic Impact Analysis",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pertek-andalalin/"
                }
            },
            {
                "@type": "ListItem",
                "position": 8,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/advisor-hukum-lingkungan/",
                    "name": "Advisor Hukum Lingkungan",
                    "description": "Konsultasi hukum lingkungan untuk compliance, uji tuntas, penyelesaian sengketa. Legal advisor spesialis UU PPLH, audit kepatuhan regulasi KLHK.",
                    "serviceType": "Environmental Legal Consulting",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/advisor-hukum-lingkungan/"
                }
            },
            {
                "@type": "ListItem",
                "position": 9,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/program-csr-lingkungan/",
                    "name": "Program CSR Lingkungan",
                    "description": "Perencanaan dan implementasi program CSR lingkungan berkelanjutan. Konservasi biodiversitas, pemberdayaan masyarakat, PROPER Hijau/Emas, pelaporan GRI.",
                    "serviceType": "Corporate Social Responsibility",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/program-csr-lingkungan/"
                }
            },
            {
                "@type": "ListItem",
                "position": 10,
                "item": {
                    "@type": "Service",
                    "@id": "https://www.mutuciptautama.id/layanan/pemetaan-peta-resolusi-tinggi/",
                    "name": "Pemetaan & Peta Resolusi Tinggi",
                    "description": "Jasa pemetaan drone LiDAR dan survey topografi. Peta resolusi tinggi, DEM/DSM, GIS, bathymetry. Akurasi sesuai standar BIG untuk AMDAL dan engineering.",
                    "serviceType": "Geospatial Mapping & Survey",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.mutuciptautama.id/#organization"
                    },
                    "areaServed": "Indonesia",
                    "url": "https://www.mutuciptautama.id/layanan/pemetaan-peta-resolusi-tinggi/"
                }
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
