/**
 * SEO-optimized headings for service pages
 * H1 and H2 variants with primary keywords integrated
 */

export interface ServiceHeadings {
  h1: string; // Primary heading for hero
  h2Intro: string; // Introduction section heading
  h2Benefits: string; // Benefits section heading
  h2Process: string; // Process section heading
  h2Scope: string; // Scope section heading
}

export const serviceHeadings: Record<string, ServiceHeadings> = {
  "amdal-ukl-upl": {
    h1: "Konsultan AMDAL & UKL-UPL Profesional Berpengalaman",
    h2Intro: "Jasa Penyusunan AMDAL Lengkap dan UKL-UPL Terpercaya",
    h2Benefits: "Manfaat Menggunakan Konsultan AMDAL Profesional",
    h2Process: "Tahapan Proses Penyusunan Dokumen AMDAL",
    h2Scope: "Ruang Lingkup Layanan Penyusunan Dokumen Lingkungan",
  },
  "audit-lingkungan-hidup": {
    h1: "Jasa Audit Lingkungan Perusahaan",
    h2Intro: "Audit Kepatuhan Lingkungan oleh Auditor Bersertifikat",
    h2Benefits: "Manfaat Audit Lingkungan untuk Kepatuhan Regulasi",
    h2Process: "Tahapan Proses Audit Lingkungan Perusahaan",
    h2Scope: "Ruang Lingkup Audit Kepatuhan dan Evaluasi Kinerja",
  },
  "pengelolaan-limbah-b3": {
    h1: "Pengelolaan Limbah B3 Terpercaya & Bersertifikat",
    h2Intro: "Jasa Pengelolaan Limbah B3 Terintegrasi dari TPS hingga PPLI",
    h2Benefits: "Manfaat Pengelolaan Limbah B3 yang Legal dan Aman",
    h2Process: "Tahapan Pengelolaan Limbah Berbahaya dan Beracun",
    h2Scope: "Ruang Lingkup Layanan TPS B3 dan Transporter Bersertifikat",
  },
  "pertek-emisi": {
    h1: "PERTEK Emisi Udara untuk Pengendalian Pencemaran",
    h2Intro: "Penyusunan PERTEK Emisi untuk SLO dan Kepatuhan Baku Mutu",
    h2Benefits: "Manfaat PERTEK Emisi untuk Legalitas Operasional",
    h2Process: "Tahapan Proses Pengujian Emisi dan Persetujuan Teknis",
    h2Scope: "Ruang Lingkup Pengujian Emisi Cerobong dan Pemodelan Dispersi",
  },
  "pertek-air-limbah": {
    h1: "PERTEK Air Limbah Industri untuk Izin Pembuangan",
    h2Intro: "Persetujuan Teknis IPAL dan Evaluasi Kinerja Air Limbah",
    h2Benefits: "Manfaat PERTEK Air Limbah untuk Kepatuhan Baku Mutu",
    h2Process: "Tahapan Proses Audit IPAL dan Pengujian Efluen",
    h2Scope: "Ruang Lingkup Pengujian BOD COD TSS dan Persetujuan Pembuangan",
  },
  "pertek-pengelolaan-limbah-b3": {
    h1: "PERTEK Pengelolaan Limbah B3 untuk TPS Legal",
    h2Intro: "Izin Operasional TPS B3 dan Persetujuan Teknis Penyimpanan",
    h2Benefits: "Manfaat PERTEK B3 untuk Legalitas Fasilitas Penyimpanan",
    h2Process: "Tahapan Desain TPS B3 dan Penyusunan Dokumen Teknis",
    h2Scope: "Ruang Lingkup Desain Fasilitas dan SOP Pengelolaan Limbah B3",
  },
  "pertek-andalalin": {
    h1: "PERTEK ANDALALIN untuk Analisis Dampak Lalu Lintas",
    h2Intro: "Penyusunan ANDALALIN untuk IMB dan Izin Operasional",
    h2Benefits: "Manfaat Analisis Dampak Lalu Lintas untuk Proyek",
    h2Process: "Tahapan Survey Lalu Lintas dan Perhitungan V/C Ratio",
    h2Scope:
      "Ruang Lingkup Analisis Bangkitan Perjalanan dan Manajemen Lalu Lintas",
  },
  "advisor-hukum-lingkungan": {
    h1: "Konsultasi Hukum Lingkungan",
    h2Intro: "Advisor Hukum Lingkungan untuk Kepatuhan Regulasi KLHK",
    h2Benefits: "Manfaat Legal Advisor untuk Mitigasi Risiko Hukum",
    h2Process: "Tahapan Audit Hukum dan Pendampingan Legal",
    h2Scope: "Ruang Lingkup Konsultasi Compliance dan Penyelesaian Sengketa",
  },
  "program-csr-lingkungan": {
    h1: "Program CSR Lingkungan Berkelanjutan untuk PROPER",
    h2Intro: "Desain dan Implementasi CSR untuk Melampaui Kepatuhan",
    h2Benefits: "Manfaat Program CSR Lingkungan untuk Peringkat Hijau Emas",
    h2Process: "Tahapan Pemetaan Sosial dan Pelaksanaan Program CSR",
    h2Scope:
      "Ruang Lingkup Konservasi Biodiversitas dan Pemberdayaan Masyarakat",
  },
  "event-sosialisasi-lingkungan": {
    h1: "Event Sosialisasi Lingkungan dan Workshop HSE",
    h2Intro: "Penyelenggaraan Konsultasi Publik AMDAL dan FGD Stakeholder",
    h2Benefits: "Manfaat Sosialisasi untuk Keterlibatan Pemangku Kepentingan",
    h2Process: "Tahapan Perencanaan Event dan Pelaksanaan Workshop",
    h2Scope:
      "Ruang Lingkup Sosialisasi AMDAL dan Kampanye Kesadaran Lingkungan",
  },
  "pemetaan-peta-resolusi-tinggi": {
    h1: "Pemetaan Drone LiDAR dan Survey Topografi",
    h2Intro: "Jasa Pemetaan Resolusi Tinggi untuk AMDAL dan Engineering",
    h2Benefits: "Manfaat Peta Akurat untuk Perencanaan Proyek",
    h2Process: "Tahapan Survey GPS dan Processing Data Geospasial",
    h2Scope: "Ruang Lingkup Pemetaan Udara dan Analisis GIS Spasial",
  },
  "feasibility-study": {
    h1: "Feasibility Study",
    h2Intro: "Analisis Kelayakan Teknis dan Finansial Komprehensif",
    h2Benefits: "Manfaat Studi Kelayakan untuk Keputusan Investasi",
    h2Process: "Tahapan Analisis Pasar dan Penilaian Risiko Proyek",
    h2Scope: "Ruang Lingkup Analisis NPV IRR dan Laporan Bankable",
  },
  "design-engineering": {
    h1: "Design Engineering FEED DED untuk Konstruksi",
    h2Intro: "Jasa Design Engineering Profesional untuk Tender",
    h2Benefits: "Manfaat Design Optimal untuk Efisiensi Biaya",
    h2Process: "Tahapan Konsep Design hingga Dokumen Tender",
    h2Scope: "Ruang Lingkup Perhitungan Struktur dan RAB BoQ",
  },
  "layanan-drone-pemetaan-dokumentasi": {
    h1: "Jasa Drone UAV untuk Pemetaan dan Dokumentasi Udara",
    h2Intro: "Layanan Drone Profesional untuk Survey dan Inspeksi",
    h2Benefits: "Manfaat Teknologi Drone untuk Efisiensi Survey",
    h2Process: "Tahapan Perencanaan Misi hingga Deliverables GIS",
    h2Scope: "Ruang Lingkup Pemetaan Topografi dan Fotogrametri Aerial",
  },
  "pengadaan-instalasi-rth": {
    h1: "Pengadaan dan Instalasi RTH",
    h2Intro: "Jasa Instalasi Ruang Terbuka Hijau dan Landscape Design",
    h2Benefits: "Manfaat RTH untuk Compliance dan Kualitas Lingkungan",
    h2Process: "Tahapan Survey Lokasi hingga Program Perawatan",
    h2Scope: "Ruang Lingkup Taman Vertikal dan Infrastruktur Hijau",
  },
};

/**
 * Get SEO-optimized headings for a service
 */
export const getServiceHeadings = (serviceSlug: string): ServiceHeadings => {
  return (
    serviceHeadings[serviceSlug] || {
      h1: "",
      h2Intro: "",
      h2Benefits: "Manfaat Layanan",
      h2Process: "Tahapan Proses",
      h2Scope: "Ruang Lingkup",
    }
  );
};
