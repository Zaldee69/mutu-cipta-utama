/**
 * City-specific data for local SEO landing pages
 * Based on keyword research geographic focus
 */

export interface CityData {
    slug: string;
    name: string;
    province: string;
    description: string;
    metaDescription: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    serviceAreas: string[]; // Nearby areas served
    keywords: string[];
}

export const cities: CityData[] = [
    {
        slug: "jakarta",
        name: "Jakarta",
        province: "DKI Jakarta",
        description: "PT Mutu Cipta Utama melayani konsultasi lingkungan profesional di Jakarta dan sekitarnya termasuk Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Utara, Jakarta Timur, dan Kepulauan Seribu.",
        metaDescription: "Konsultan lingkungan terpercaya di Jakarta. Layanan AMDAL, UKL-UPL, audit lingkungan, pengelolaan limbah B3, PERTEK untuk perusahaan di DKI Jakarta. Hubungi kami!",
        coordinates: {
            lat: -6.2088,
            lng: 106.8456
        },
        serviceAreas: [
            "Jakarta Pusat",
            "Jakarta Selatan",
            "Jakarta Barat",
            "Jakarta Utara",
            "Jakarta Timur",
            "Tangerang",
            "Tangerang Selatan",
            "Bekasi",
            "Depok",
            "Bogor"
        ],
        keywords: [
            "konsultan lingkungan Jakarta",
            "AMDAL Jakarta",
            "audit lingkungan Jakarta",
            "pengelolaan limbah B3 Jakarta",
            "konsultan AMDAL Jakarta Selatan",
            "jasa lingkungan DKI Jakarta"
        ]
    },
    {
        slug: "surabaya",
        name: "Surabaya",
        province: "Jawa Timur",
        description: "Layanan konsultan lingkungan profesional untuk perusahaan di Surabaya dan wilayah Jawa Timur. Kami melayani Surabaya Pusat, Surabaya Utara, Surabaya Selatan, Surabaya Barat, Surabaya Timur, Sidoarjo, Gresik, Mojokerto, dan sekitarnya.",
        metaDescription: "Konsultan lingkungan berpengalaman di Surabaya. Jasa AMDAL, UKL-UPL, audit lingkungan, PERTEK, pengelolaan limbah B3 untuk industri di Jawa Timur. Konsultasi gratis!",
        coordinates: {
            lat: -7.2575,
            lng: 112.7521
        },
        serviceAreas: [
            "Surabaya Pusat",
            "Surabaya Utara",
            "Surabaya Selatan",
            "Surabaya Barat",
            "Surabaya Timur",
            "Sidoarjo",
            "Gresik",
            "Mojokerto",
            "Pasuruan",
            "Lamongan"
        ],
        keywords: [
            "konsultan lingkungan Surabaya",
            "AMDAL Surabaya",
            "audit lingkungan Jawa Timur",
            "pengelolaan limbah B3 Surabaya",
            "konsultan AMDAL Sidoarjo",
            "jasa lingkungan Surabaya"
        ]
    },
    {
        slug: "bandung",
        name: "Bandung",
        province: "Jawa Barat",
        description: "PT Mutu Cipta Utama menyediakan layanan konsultasi lingkungan terpercaya di Bandung dan Jawa Barat. Melayani Bandung Kota, Bandung Barat, Cimahi, Cianjur, Purwakarta, Karawang, dan wilayah Jawa Barat lainnya.",
        metaDescription: "Konsultan lingkungan terbaik di Bandung. Layanan AMDAL, UKL-UPL, audit lingkungan, pengelolaan limbah B3, PERTEK untuk perusahaan di Jawa Barat. Berpengalaman & terpercaya!",
        coordinates: {
            lat: -6.9175,
            lng: 107.6191
        },
        serviceAreas: [
            "Bandung Kota",
            "Bandung Barat",
            "Cimahi",
            "Cileunyi",
            "Soreang",
            "Cianjur",
            "Purwakarta",
            "Karawang",
            "Subang",
            "Sumedang"
        ],
        keywords: [
            "konsultan lingkungan Bandung",
            "AMDAL Bandung",
            "audit lingkungan Jawa Barat",
            "pengelolaan limbah B3 Bandung",
            "konsultan AMDAL Cimahi",
            "jasa lingkungan Bandung"
        ]
    }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
    return cities.find(city => city.slug === slug);
};
