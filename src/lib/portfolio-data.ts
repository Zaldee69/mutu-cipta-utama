export interface PortfolioProject {
    id: string;
    title: string;
    client: string;
    category: string;
    year: number;
    location: string;
    description: string;
    image?: string;
    tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
    {
        id: "1",
        title: "Studi AMDAL Pembangunan Pabrik Semen",
        client: "PT Semen Nusantara",
        category: "AMDAL",
        year: 2023,
        location: "Jawa Timur",
        description: "Penyusunan dokumen AMDAL untuk pembangunan pabrik semen dengan kapasitas 3 juta ton per tahun, mencakup analisis dampak lingkungan dan sosial.",
        tags: ["AMDAL", "Industri", "Manufaktur"],
    },
    {
        id: "2",
        title: "UKL-UPL Perluasan Area Pertambangan",
        client: "PT Mineral Indonesia",
        category: "UKL-UPL",
        year: 2023,
        location: "Kalimantan Timur",
        description: "Penyusunan dokumen UKL-UPL untuk perluasan area pertambangan batubara seluas 500 hektar dengan fokus pada pengelolaan lingkungan berkelanjutan.",
        tags: ["UKL-UPL", "Pertambangan", "Batubara"],
    },
    {
        id: "3",
        title: "Pengelolaan Limbah B3 Rumah Sakit",
        client: "RS Harapan Sehat",
        category: "Limbah B3",
        year: 2024,
        location: "Jakarta",
        description: "Implementasi sistem pengelolaan limbah B3 medis yang terintegrasi, termasuk penyimpanan, pengangkutan, dan pemusnahan sesuai regulasi.",
        tags: ["Limbah B3", "Kesehatan", "Medis"],
    },
    {
        id: "4",
        title: "PERTEK Air Limbah Industri Tekstil",
        client: "PT Tekstil Jaya",
        category: "PERTEK",
        year: 2023,
        location: "Jawa Barat",
        description: "Persetujuan teknis instalasi pengolahan air limbah (IPAL) untuk industri tekstil dengan kapasitas 500 m³/hari.",
        tags: ["PERTEK", "Air Limbah", "Tekstil"],
    },
    {
        id: "5",
        title: "AMDAL Pembangunan Kawasan Industri",
        client: "PT Kawasan Industri Terpadu",
        category: "AMDAL",
        year: 2022,
        location: "Banten",
        description: "Studi kelayakan lingkungan untuk pembangunan kawasan industri seluas 200 hektar dengan berbagai jenis industri manufaktur.",
        tags: ["AMDAL", "Kawasan Industri", "Manufaktur"],
    },
    {
        id: "6",
        title: "Program CSR Penghijauan",
        client: "PT Energy Nusantara",
        category: "CSR",
        year: 2024,
        location: "Sumatera Selatan",
        description: "Konsultasi dan implementasi program CSR penghijauan dengan penanaman 50,000 pohon di area bekas tambang.",
        tags: ["CSR", "Penghijauan", "Rehabilitasi"],
    },
    {
        id: "7",
        title: "UKL-UPL Pembangunan Hotel & Resort",
        client: "PT Hospitality Indonesia",
        category: "UKL-UPL",
        year: 2023,
        location: "Bali",
        description: "Penyusunan dokumen UKL-UPL untuk pembangunan hotel dan resort bintang 5 dengan fokus pada pengelolaan air limbah dan sampah.",
        tags: ["UKL-UPL", "Pariwisata", "Hospitality"],
    },
    {
        id: "8",
        title: "Audit Lingkungan Pabrik Kimia",
        client: "PT Kimia Sejahtera",
        category: "Audit Lingkungan",
        year: 2024,
        location: "Jawa Tengah",
        description: "Audit lingkungan menyeluruh untuk pabrik kimia, mencakup evaluasi kepatuhan terhadap regulasi dan rekomendasi perbaikan.",
        tags: ["Audit", "Kimia", "Kepatuhan"],
    },
    {
        id: "9",
        title: "PERTEK Emisi Udara Pembangkit Listrik",
        client: "PT Power Generation",
        category: "PERTEK",
        year: 2023,
        location: "Sumatera Utara",
        description: "Persetujuan teknis sistem pengendalian emisi udara untuk pembangkit listrik tenaga uap 100 MW.",
        tags: ["PERTEK", "Emisi", "Energi"],
    },
];

export const portfolioCategories = [
    "Semua",
    "AMDAL",
    "UKL-UPL",
    "Limbah B3",
    "PERTEK",
    "CSR",
    "Audit Lingkungan",
];

export function getProjectsByCategory(category: string): PortfolioProject[] {
    if (category === "Semua") {
        return portfolioProjects;
    }
    return portfolioProjects.filter((project) => project.category === category);
}
