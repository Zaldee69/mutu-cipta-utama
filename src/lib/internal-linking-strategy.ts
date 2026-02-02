/**
 * Internal Linking Strategy based on Keyword Research
 * This file defines semantic relationships between services for optimal internal linking
 * Based on keyword clusters and user intent flows
 */

export interface InternalLink {
    slug: string;
    anchorText: string;
    context: string; // Why this link is relevant
    priority: 'high' | 'medium' | 'low';
}

export interface ServiceLinkingStrategy {
    [serviceSlug: string]: {
        primaryLinks: InternalLink[]; // Most relevant services (same cluster)
        secondaryLinks: InternalLink[]; // Related services (different cluster but common user journey)
        contextualKeywords: string[]; // Keywords to use in content for this service
    };
}

export const internalLinkingStrategy: ServiceLinkingStrategy = {
    "amdal-ukl-upl": {
        primaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit Lingkungan Perusahaan",
                context: "Post-AMDAL compliance verification",
                priority: "high"
            },
            {
                slug: "pertek-emisi",
                anchorText: "PERTEK Emisi",
                context: "Required technical permit after AMDAL approval",
                priority: "high"
            },
            {
                slug: "pertek-air-limbah",
                anchorText: "PERTEK Air Limbah",
                context: "Required technical permit after AMDAL approval",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "advisor-hukum-lingkungan",
                anchorText: "Konsultasi Hukum Lingkungan",
                context: "Legal compliance review for AMDAL process",
                priority: "medium"
            },
            {
                slug: "pemetaan-peta-resolusi-tinggi",
                anchorText: "Pemetaan Drone untuk AMDAL",
                context: "Geospatial data collection for AMDAL baseline studies",
                priority: "medium"
            },
            {
                slug: "feasibility-study",
                anchorText: "Studi Kelayakan",
                context: "Pre-AMDAL feasibility assessment",
                priority: "low"
            }
        ],
        contextualKeywords: [
            "Konsultan AMDAL Berpengalaman",
            "Penyusunan AMDAL Profesional",
            "Dokumen Lingkungan Lengkap",
            "SKKLH",
            "Komisi Penilai AMDAL"
        ]
    },
    "audit-lingkungan-hidup": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "Penyusunan AMDAL",
                context: "Audit compliance against AMDAL commitments",
                priority: "high"
            },
            {
                slug: "pertek-emisi",
                anchorText: "PERTEK Emisi Udara",
                context: "Audit of emission control compliance",
                priority: "high"
            },
            {
                slug: "pengelolaan-limbah-b3",
                anchorText: "Pengelolaan Limbah B3",
                context: "Audit of hazardous waste management practices",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "advisor-hukum-lingkungan",
                anchorText: "Legal Compliance Lingkungan",
                context: "Legal review of audit findings",
                priority: "medium"
            },
            {
                slug: "program-csr-lingkungan",
                anchorText: "Program CSR Lingkungan",
                context: "PROPER beyond compliance initiatives",
                priority: "medium"
            }   
        ],
        contextualKeywords: [
            "audit lingkungan wajib",
            "auditor lingkungan bersertifikat",
            "kepatuhan regulasi KLHK",
            "audit PROPER",
            "ISO 14001"
        ]
    },
    "pengelolaan-limbah-b3": {
        primaryLinks: [
            {
                slug: "pertek-pengelolaan-limbah-b3",
                anchorText: "PERTEK pengelolaan limbah B3",
                context: "Technical permit for B3 waste storage facility",
                priority: "high"
            },
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit Lingkungan Limbah B3",
                context: "Compliance audit of B3 waste management",
                priority: "high"
            },
            {
                slug: "pertek-air-limbah",
                anchorText: "PERTEK Air Limbah",
                context: "Wastewater permit for B3 facility",
                priority: "medium"
            }
        ],
        secondaryLinks: [
            {
                slug: "advisor-hukum-lingkungan",
                anchorText: "Advisor Hukum Lingkungan Limbah B3",
                context: "Legal compliance for B3 waste regulations",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "TPS Limbah B3 terpercaya",
            "transporter Limbah B3 bersertifikat",
            "manifest elektronik SIMPEL",
            "pengolahan PPLI Limbah B3",
            "kepatuhan PP 22/2021"
        ]
    },
    "pertek-emisi": {
        primaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit Kepatuhan Emisi",
                context: "Verification of emission compliance",
                priority: "high"
            },
            {
                slug: "amdal-ukl-upl",
                anchorText: "AMDAL untuk Industri",
                context: "AMDAL requirement includes emission assessment",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "pertek-air-limbah",
                anchorText: "PERTEK Air Limbah",
                context: "Comprehensive environmental permit package",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Pengujian Emisi Cerobong",
            "pemodelan dispersi AERMOD",
            "baku mutu emisi",
            "SLO (Sertifikat Laik Operasi)",
            "Pengendalian Pencemaran Udara"
        ]
    },
    "pertek-air-limbah": {
        primaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit IPAL untuk PERTEK",
                context: "Performance audit of wastewater treatment",
                priority: "high"
            },
            {
                slug: "amdal-ukl-upl",
                anchorText: "Dokumen AMDAL untuk PERTEK",
                context: "AMDAL includes wastewater impact assessment",
                priority: "high"
            },
            {
                slug: "design-engineering",
                anchorText: "Design Engineering IPAL untuk PERTEK",
                context: "IPAL design for PERTEK submission",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "pertek-emisi",
                anchorText: "PERTEK Emisi",
                context: "Complete environmental permit suite",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Pengujian Efluen BOD COD TSS",
            "audit kinerja IPAL",
            "Baku Mutu Air Limbah",
            "Izin Pembuangan",
            "Permen LHK 68/2016"
        ]
    },
    "pertek-pengelolaan-limbah-b3": {
        primaryLinks: [
            {
                slug: "pengelolaan-limbah-b3",
                anchorText: "Jasa Pengelolaan Limbah B3",
                context: "Operational B3 waste management services",
                priority: "high"
            },
            {
                slug: "design-engineering",
                anchorText: "Design TPS B3",
                context: "Engineering design for B3 storage facility",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit Compliance B3",
                context: "Compliance verification of B3 facility",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Izin Operasional TPS B3",
            "Desain Fasilitas Penyimpanan B3",
            "SOP Pengelolaan Limbah B3",
            "Kepatuhan Permen LHK 6/2021"
        ]
    },
    "pertek-andalalin": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "AMDAL untuk properti",
                context: "AMDAL and ANDALALIN both required for development projects",
                priority: "high"
            },
            {
                slug: "pemetaan-peta-resolusi-tinggi",
                anchorText: "Pemetaan Lokasi Proyek",
                context: "Site mapping for ANDALALIN study",
                priority: "medium"
            }
        ],
        secondaryLinks: [
            {
                slug: "feasibility-study",
                anchorText: "Studi Kelayakan Proyek",
                context: "Pre-development feasibility includes traffic analysis",
                priority: "low"
            }
        ],
        contextualKeywords: [
            "Analisis Dampak Lalu Lintas",
            "perhitungan V/C ratio",
            "Bangkitan Perjalanan",
            "IMB/PBG requirement",
            "Sirkulasi Parkir"
        ]
    },
    "advisor-hukum-lingkungan": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "Kepatuhan AMDAL",
                context: "Legal review of AMDAL compliance",
                priority: "high"
            },
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit Kepatuhan Hukum",
                context: "Legal compliance audit",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "pengelolaan-limbah-b3",
                anchorText: "Regulasi Limbah B3 untuk Legal",
                context: "Legal consultation on B3 regulations",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "UU PPLH",
            "PP 22/2021",
            "Compliance Lingkungan",
            "Penyelesaian Sengketa Lingkungan",
            "Uji Tuntas Lingkungan"
        ]
    },
    "program-csr-lingkungan": {
        primaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Audit PROPER untuk CSR",
                context: "CSR programs for PROPER beyond compliance",
                priority: "high"
            },
            {
                slug: "event-sosialisasi-lingkungan",
                anchorText: "Sosialisasi Program CSR untuk PROPER",
                context: "Community engagement for CSR implementation",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "pengadaan-instalasi-rth",
                anchorText: "Instalasi RTH untuk CSR PROPER",
                context: "Green space as CSR initiative",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "PROPER Hijau Emas",
            "CSR Berkelanjutan",
            "Pemberdayaan Masyarakat",
            "Konservasi Biodiversitas",
            "Pelaporan GRI Standards"
        ]
    },
    "event-sosialisasi-lingkungan": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "Sosialisasi AMDAL untuk CSR",
                context: "Public consultation for AMDAL process",
                priority: "high"
            },
            {
                slug: "program-csr-lingkungan",
                anchorText: "Kampanye CSR Lingkungan untuk PROPER",
                context: "Community awareness campaigns for CSR",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "audit-lingkungan-hidup",
                anchorText: "Workshop Audit Lingkungan untuk CSR",
                context: "Training events for environmental compliance",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Konsultasi Publik AMDAL",
            "FGD Stakeholder",
            "Workshop HSE",
            "Kampanye Kesadaran Lingkungan"
        ]
    },
    "pemetaan-peta-resolusi-tinggi": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "Pemetaan untuk AMDAL",
                context: "Baseline geospatial data for AMDAL",
                priority: "high"
            },
            {
                slug: "layanan-drone-pemetaan-dokumentasi",
                anchorText: "Survey Drone untuk Pemetaan",
                context: "Drone technology for mapping services",
                priority: "high"
            },
            {
                slug: "feasibility-study",
                anchorText: "Pemetaan Studi Kelayakan",
                context: "Site mapping for feasibility studies",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "design-engineering",
                anchorText: "Pemetaan untuk Engineering",
                context: "Topographic data for engineering design",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Pemetaan Drone LiDAR",
            "Survey Topografi",
            "Peta Resolusi Tinggi",
            "DEM DSM",
            "Analisis GIS"
        ]
    },
    "feasibility-study": {
        primaryLinks: [
            {
                slug: "amdal-ukl-upl",
                anchorText: "AMDAL Setelah Feasibility Study",
                context: "AMDAL follows feasibility assessment",
                priority: "high"
            },
            {
                slug: "pemetaan-peta-resolusi-tinggi",
                anchorText: "Pemetaan Lokasi Proyek",
                context: "Site mapping for feasibility analysis",
                priority: "high"
            },
            {
                slug: "design-engineering",
                anchorText: "Engineering Design",
                context: "Detailed engineering follows feasibility",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "advisor-hukum-lingkungan",
                anchorText: "Legal Review Feasibility",
                context: "Legal compliance assessment in feasibility",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Analisis Finansial NPV IRR",
            "studi kelayakan teknis",
            "analisis pasar",
            "laporan bankable",
            "risk assessment"
        ]
    },
    "design-engineering": {
        primaryLinks: [
            {
                slug: "pertek-air-limbah",
                anchorText: "PERTEK untuk IPAL",
                context: "PERTEK submission requires engineering design",
                priority: "high"
            },
            {
                slug: "pertek-pengelolaan-limbah-b3",
                anchorText: "Design TPS B3",
                context: "B3 facility design for PERTEK",
                priority: "high"
            },
            {
                slug: "feasibility-study",
                anchorText: "Preliminary Engineering Design",
                context: "Feasibility includes preliminary design",
                priority: "medium"
            }
        ],
        secondaryLinks: [
            {
                slug: "pemetaan-peta-resolusi-tinggi",
                anchorText: "Survey Topografi",
                context: "Topographic survey for design engineering",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "FEED DED",
            "Perhitungan Struktur",
            "RAB BoQ",
            "BIM 3D Modeling",
            "Design Sesuai SNI"
        ]
    },
    "layanan-drone-pemetaan-dokumentasi": {
        primaryLinks: [
            {
                slug: "pemetaan-peta-resolusi-tinggi",
                anchorText: "Pemetaan Resolusi Tinggi",
                context: "High-resolution mapping using drone technology",
                priority: "high"
            },
            {
                slug: "amdal-ukl-upl",
                anchorText: "dokumentasi area AMDAL",
                context: "Aerial documentation for AMDAL baseline",
                priority: "high"
            }
        ],
        secondaryLinks: [
            {
                slug: "design-engineering",
                anchorText: "Survey untuk Engineering",
                context: "Aerial survey for engineering projects",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Jasa Drone UAV",
            "fotogrametri",
            "Inspeksi Infrastruktur",
            "Monitoring Konstruksi",
            "Orthophoto"
        ]
    },
    "pengadaan-instalasi-rth": {
        primaryLinks: [
            {
                slug: "program-csr-lingkungan",
                anchorText: "Program CSR Penghijauan",
                context: "Green space as CSR environmental initiative",
                priority: "high"
            },
            {
                slug: "amdal-ukl-upl",
                anchorText: "RTH Requirement AMDAL",
                context: "RTH provision as AMDAL mitigation",
                priority: "medium"
            }
        ],
        secondaryLinks: [
            {
                slug: "design-engineering",
                anchorText: "Landscape Design",
                context: "Engineering design for RTH infrastructure",
                priority: "medium"
            }
        ],
        contextualKeywords: [
            "Instalasi Ruang Terbuka Hijau",
            "Taman Vertikal",
            "Landscape Design",
            "Kepatuhan Perda RTH 30%",
            "Infrastruktur Hijau"
        ]
    }
};

/**
 * Get related services based on internal linking strategy
 */
export const getRelatedServicesForSEO = (currentSlug: string, limit: number = 3): InternalLink[] => {
    const strategy = internalLinkingStrategy[currentSlug];
    
    if (!strategy) {
        return [];
    }

    // Combine primary and secondary links, prioritize by priority
    const allLinks = [...strategy.primaryLinks, ...strategy.secondaryLinks];
    
    return allLinks
        .sort((a, b) => {
            const priorityWeight = { high: 3, medium: 2, low: 1 };
            return priorityWeight[b.priority] - priorityWeight[a.priority];
        })
        .slice(0, limit);
};

/**
 * Get contextual keywords for a service page
 */
export const getContextualKeywords = (serviceSlug: string): string[] => {
    const strategy = internalLinkingStrategy[serviceSlug];
    return strategy?.contextualKeywords || [];
};
