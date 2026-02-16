export interface BlogAuthor {
    name: string;
    role: string;
    avatar?: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: BlogAuthor;
    publishedAt: string;
    category: string;
    tags: string[];
    coverImage?: string;
    readingTime: number;
}

export const blogCategories = [
    "Semua",
    "Regulasi Lingkungan",
    "Studi Kasus",
    "Tips & Panduan",
    "Berita Industri"
];

// Mock blog posts data
export const blogPosts: BlogPost[] = [
    {
        slug: "panduan-lengkap-amdal-2024",
        title: "Panduan Lengkap AMDAL 2024: Persyaratan dan Prosedur Terbaru",
        excerpt: "Memahami persyaratan dan prosedur terbaru AMDAL sesuai regulasi 2024. Pelajari langkah-langkah penting dalam penyusunan dokumen AMDAL yang sesuai standar.",
        content: `
# Panduan Lengkap AMDAL 2024

AMDAL (Analisis Mengenai Dampak Lingkungan) merupakan kajian penting yang wajib dilakukan untuk kegiatan yang berdampak signifikan terhadap lingkungan.

## Apa itu AMDAL?

AMDAL adalah kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup yang diperlukan bagi proses pengambilan keputusan tentang penyelenggaraan usaha dan/atau kegiatan.

## Persyaratan AMDAL 2024

1. **Kegiatan Wajib AMDAL**
   - Pembangunan infrastruktur besar
   - Industri dengan dampak tinggi
   - Pertambangan dan energi
   - Kawasan strategis nasional

2. **Dokumen yang Diperlukan**
   - KA-ANDAL (Kerangka Acuan)
   - ANDAL (Analisis Dampak Lingkungan)
   - RKL (Rencana Pengelolaan Lingkungan)
   - RPL (Rencana Pemantauan Lingkungan)

## Prosedur Penyusunan

Proses penyusunan AMDAL melibatkan beberapa tahapan penting yang harus dilakukan secara sistematis.

### Tahap 1: Penapisan (Screening)
Menentukan apakah kegiatan wajib AMDAL atau cukup UKL-UPL.

### Tahap 2: Pengumuman dan Konsultasi Publik
Melibatkan masyarakat dalam proses penyusunan AMDAL.

### Tahap 3: Penyusunan Dokumen
Menyusun dokumen AMDAL sesuai pedoman teknis.

## Kesimpulan

AMDAL adalah instrumen penting dalam pengelolaan lingkungan hidup. Pastikan Anda bekerja dengan konsultan berpengalaman untuk proses yang lancar.
        `,
        author: {
            name: "Dr. Budi Santoso",
            role: "Environmental Consultant",
            avatar: undefined
        },
        publishedAt: "2024-01-15T10:00:00Z",
        category: "Regulasi Lingkungan",
        tags: ["AMDAL", "Regulasi", "Lingkungan"],
        coverImage: undefined,
        readingTime: 8
    },
    {
        slug: "studi-kasus-pengelolaan-limbah-b3",
        title: "Studi Kasus: Pengelolaan Limbah B3 di Industri Manufaktur",
        excerpt: "Pelajari bagaimana perusahaan manufaktur berhasil mengelola limbah B3 dengan efektif dan sesuai regulasi. Studi kasus nyata dengan solusi praktis.",
        content: `
# Studi Kasus: Pengelolaan Limbah B3

Pengelolaan limbah B3 yang tepat adalah kunci keberhasilan operasional industri yang berkelanjutan.

## Latar Belakang

PT XYZ Manufacturing menghadapi tantangan dalam pengelolaan limbah B3 dari proses produksi mereka.

## Solusi yang Diterapkan

1. Sistem penyimpanan sementara yang aman
2. Kerjasama dengan transporter berizin
3. Dokumentasi lengkap sesuai regulasi

## Hasil

Perusahaan berhasil mencapai compliance 100% dan mengurangi biaya pengelolaan limbah sebesar 30%.
        `,
        author: {
            name: "Ir. Siti Rahayu",
            role: "Waste Management Specialist"
        },
        publishedAt: "2024-01-10T14:30:00Z",
        category: "Studi Kasus",
        tags: ["Limbah B3", "Manufaktur", "Compliance"],
        readingTime: 6
    },
    {
        slug: "tips-audit-lingkungan-efektif",
        title: "5 Tips Melakukan Audit Lingkungan yang Efektif",
        excerpt: "Audit lingkungan yang efektif membantu perusahaan mengidentifikasi risiko dan peluang perbaikan. Simak tips praktis dari para ahli.",
        content: `
# 5 Tips Audit Lingkungan yang Efektif

Audit lingkungan adalah alat penting untuk memastikan compliance dan meningkatkan kinerja lingkungan.

## 1. Persiapan yang Matang

Siapkan dokumen dan data yang diperlukan sebelum audit dimulai.

## 2. Libatkan Semua Stakeholder

Pastikan semua departemen terlibat dalam proses audit.

## 3. Gunakan Checklist Komprehensif

Checklist membantu memastikan tidak ada aspek yang terlewat.

## 4. Dokumentasi yang Baik

Catat semua temuan dengan detail dan foto pendukung.

## 5. Follow-up Tindakan Korektif

Pastikan semua temuan ditindaklanjuti dengan action plan yang jelas.
        `,
        author: {
            name: "Ahmad Hidayat, M.Sc",
            role: "Lead Auditor"
        },
        publishedAt: "2024-01-05T09:00:00Z",
        category: "Tips & Panduan",
        tags: ["Audit", "Best Practices", "Compliance"],
        readingTime: 5
    },
    {
        slug: "perubahan-regulasi-KLH-2024",
        title: "Perubahan Regulasi KLH 2024 yang Perlu Anda Ketahui",
        excerpt: "Update terbaru regulasi dari Kementerian Lingkungan Hidup dan Kehutanan yang berdampak pada industri. Pastikan bisnis Anda tetap compliant.",
        content: `
# Perubahan Regulasi KLH 2024

Kementerian Lingkungan Hidup dan Kehutanan mengeluarkan beberapa regulasi baru di tahun 2024.

## Regulasi Utama

1. **Permen LHK tentang PROPER**
   - Kriteria penilaian baru
   - Sistem pelaporan digital

2. **Peraturan Limbah B3**
   - Kategori limbah B3 yang diperbarui
   - Persyaratan perizinan baru

3. **AMDAL dan UKL-UPL**
   - Simplifikasi prosedur
   - Integrasi dengan OSS

## Dampak bagi Industri

Perusahaan perlu menyesuaikan sistem manajemen lingkungan mereka dengan regulasi terbaru.

## Langkah yang Perlu Diambil

- Review compliance status
- Update dokumen perizinan
- Pelatihan karyawan
        `,
        author: {
            name: "Dr. Budi Santoso",
            role: "Environmental Consultant"
        },
        publishedAt: "2024-01-20T11:00:00Z",
        category: "Berita Industri",
        tags: ["Regulasi", "KLH", "Update"],
        readingTime: 7
    },
    {
        slug: "implementasi-csr-lingkungan",
        title: "Implementasi Program CSR Lingkungan yang Berdampak",
        excerpt: "Program CSR lingkungan yang efektif tidak hanya memenuhi kewajiban, tapi juga memberikan dampak positif nyata bagi masyarakat dan lingkungan.",
        content: `
# Implementasi Program CSR Lingkungan

CSR lingkungan adalah investasi jangka panjang untuk keberlanjutan bisnis dan masyarakat.

## Prinsip CSR Lingkungan

1. Relevansi dengan bisnis
2. Partisipasi masyarakat
3. Keberlanjutan program
4. Pengukuran dampak

## Contoh Program Sukses

- Reboisasi dan konservasi
- Pengelolaan sampah komunitas
- Edukasi lingkungan
- Clean water access

## Mengukur Keberhasilan

Gunakan indikator yang jelas dan terukur untuk mengevaluasi dampak program CSR.
        `,
        author: {
            name: "Ir. Siti Rahayu",
            role: "Waste Management Specialist"
        },
        publishedAt: "2023-12-28T13:00:00Z",
        category: "Tips & Panduan",
        tags: ["CSR", "Sustainability", "Community"],
        readingTime: 6
    },
    {
        slug: "teknologi-pengolahan-limbah-terkini",
        title: "Teknologi Pengolahan Limbah Terkini untuk Industri",
        excerpt: "Inovasi teknologi pengolahan limbah membantu industri mencapai zero waste dan meningkatkan efisiensi operasional.",
        content: `
# Teknologi Pengolahan Limbah Terkini

Teknologi pengolahan limbah terus berkembang untuk memenuhi standar lingkungan yang semakin ketat.

## Teknologi Terbaru

1. **Membrane Bioreactor (MBR)**
   - Efisiensi tinggi
   - Kualitas output superior

2. **Advanced Oxidation Process (AOP)**
   - Menghilangkan kontaminan sulit
   - Ramah lingkungan

3. **Waste to Energy**
   - Mengubah limbah jadi energi
   - Mengurangi volume limbah

## Pemilihan Teknologi

Pertimbangkan karakteristik limbah, budget, dan regulasi dalam memilih teknologi.
        `,
        author: {
            name: "Ahmad Hidayat, M.Sc",
            role: "Lead Auditor"
        },
        publishedAt: "2023-12-20T10:30:00Z",
        category: "Berita Industri",
        tags: ["Teknologi", "Inovasi", "Waste Treatment"],
        readingTime: 8
    }
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    if (category === "Semua") {
        return blogPosts;
    }
    return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const currentPost = getBlogPostBySlug(currentSlug);
    if (!currentPost) return [];

    return blogPosts
        .filter(post =>
            post.slug !== currentSlug &&
            (post.category === currentPost.category ||
                post.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .slice(0, limit);
}
