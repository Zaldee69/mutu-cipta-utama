/**
 * Service comparison data for decision-stage keywords
 * Captures "vs" and "perbedaan" queries
 */

export interface ComparisonItem {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    service1: {
        name: string;
        slug: string;
        definition: string;
        whenNeeded: string[];
        advantages: string[];
        disadvantages: string[];
        cost: string;
        timeline: string;
        suitableFor: string[];
    };
    service2: {
        name: string;
        slug: string;
        definition: string;
        whenNeeded: string[];
        advantages: string[];
        disadvantages: string[];
        cost: string;
        timeline: string;
        suitableFor: string[];
    };
    keyDifferences: {
        aspect: string;
        service1Value: string;
        service2Value: string;
    }[];
    decisionGuide: {
        scenario: string;
        recommendation: string;
        explanation: string;
    }[];
    keywords: string[];
}

export const comparisons: ComparisonItem[] = [
    {
        slug: "amdal-vs-ukl-upl",
        title: "AMDAL vs UKL-UPL",
        metaTitle: "AMDAL vs UKL-UPL: Perbedaan, Kapan Digunakan, dan Biaya 2026",
        metaDescription: "Panduan lengkap perbedaan AMDAL dan UKL-UPL: definisi, persyaratan, biaya, timeline. Pahami dokumen lingkungan mana yang Anda butuhkan untuk izin usaha.",
        service1: {
            name: "AMDAL",
            slug: "amdal-ukl-upl",
            definition: "Analisis Mengenai Dampak Lingkungan untuk kegiatan yang berdampak penting terhadap lingkungan",
            whenNeeded: [
                "Pertambangan skala besar",
                "Industri berat dan kimia",
                "Properti/pembangunan >25 Ha",
                "Infrastruktur strategis (jalan tol, bandara)",
                "PLTU dan pembangkit listrik besar",
                "Kegiatan tercantum dalam Lampiran PP 22/2021"
            ],
            advantages: [
                "Kajian dampak yang komprehensif",
                "Legitimasi tinggi di mata stakeholder",
                "Wajib untuk proyek strategis nasional",
                "Mencegah risiko lingkungan besar",
                "Termasuk konsultasi publik",
                "Basis RKL-RPL yang detail"
            ],
            disadvantages: [
                "Biaya lebih tinggi (Rp 200 juta - 2 miliar)",
                "Waktu lebih lama (4-8 bulan)",
                "Proses lebih kompleks",
                "Butuh konsultan bersertifikat KLH",
                "Harus melalui Komisi Penilai",
                "Konsultasi publik wajib"
            ],
            cost: "Rp 200 juta - Rp 2 miliar (tergantung skala proyek)",
            timeline: "4-8 bulan (termasuk sidang Komisi Penilai)",
            suitableFor: [
                "Perusahaan tambang",
                "Industri berat",
                "Developer properti besar",
                "Proyek infrastruktur",
                "Pembangkit listrik"
            ]
        },
        service2: {
            name: "UKL-UPL",
            slug: "amdal-ukl-upl",
            definition: "Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan untuk kegiatan yang dampaknya tidak penting",
            whenNeeded: [
                "Industri skala kecil-menengah",
                "Properti/perumahan <25 Ha",
                "Hotel dan komersial sedang",
                "Pabrik manufaktur non-B3",
                "Fasilitas pendidikan/kesehatan",
                "Kegiatan tidak tercantum di Lampiran AMDAL"
            ],
            advantages: [
                "Biaya lebih terjangkau (Rp 15-75 juta)",
                "Proses lebih cepat (1-2 bulan)",
                "Prosedur lebih sederhana",
                "Tanpa sidang Komisi Penilai",
                "Tidak butuh konsultasi publik",
                "Cukup untuk kebanyakan usaha"
            ],
            disadvantages: [
                "Kajian tidak sekomprehensif AMDAL",
                "Tidak cukup untuk proyek berdampak besar",
                "Legitimasi lebih rendah untuk proyek strategis",
                "RKL-RPL lebih sederhana",
                "Tidak bisa digunakan jika termasuk wajib AMDAL"
            ],
            cost: "Rp 15 juta - Rp 75 juta (tergantung kompleksitas)",
            timeline: "1-2 bulan (langsung ke Dinas LH)",
            suitableFor: [
                "UMKM dan industri kecil",
                "Developer perumahan sedang",
                "Hotel dan restoran",
                "Klinik dan rumah sakit kecil",
                "Pabrik non-kimia berbahaya"
            ]
        },
        keyDifferences: [
            {
                aspect: "Dasar Hukum",
                service1Value: "PP 22/2021, Permen LHK 4/2021",
                service2Value: "PP 22/2021, Permen LHK 4/2021"
            },
            {
                aspect: "Dokumen",
                service1Value: "KA-ANDAL, ANDAL, RKL-RPL (3 dokumen)",
                service2Value: "Formulir UKL-UPL (1 dokumen)"
            },
            {
                aspect: "Penilaian",
                service1Value: "Komisi Penilai AMDAL (Pusat/Provinsi/Kab-Kota)",
                service2Value: "Langsung oleh Dinas Lingkungan Hidup"
            },
            {
                aspect: "Konsultasi Publik",
                service1Value: "Wajib, dengan dokumentasi lengkap",
                service2Value: "Tidak wajib"
            },
            {
                aspect: "Tenaga Ahli",
                service1Value: "Harus bersertifikat KLH",
                service2Value: "Tidak wajib sertifikat (recommended)"
            },
            {
                aspect: "Biaya",
                service1Value: "Rp 200 juta - Rp 2 miliar",
                service2Value: "Rp 15 juta - Rp 75 juta"
            },
            {
                aspect: "Waktu Proses",
                service1Value: "4-8 bulan",
                service2Value: "1-2 bulan"
            },
            {
                aspect: "Output Izin",
                service1Value: "SKKLH (Surat Keputusan Kelayakan Lingkungan)",
                service2Value: "Surat Persetujuan Lingkungan"
            }
        ],
        decisionGuide: [
            {
                scenario: "Proyek pertambangan atau industri ekstraktif",
                recommendation: "AMDAL (Wajib)",
                explanation: "Semua kegiatan pertambangan termasuk dalam kategori wajib AMDAL sesuai Lampiran PP 22/2021, tidak ada opsi UKL-UPL."
            },
            {
                scenario: "Properti/perumahan luas lahan 30 hektar",
                recommendation: "AMDAL (Wajib)",
                explanation: "Pembangunan properti/real estate >25 Ha wajib AMDAL. Proyek Anda melebihi threshold sehingga harus menyusun AMDAL lengkap."
            },
            {
                scenario: "Pabrik garmen/tekstil skala menengah 5 hektar",
                recommendation: "UKL-UPL (Cukup)",
                explanation: "Industri tekstil skala kecil-menengah tanpa proses kimia berat cukup dengan UKL-UPL. Lebih cepat dan ekonomis."
            },
            {
                scenario: "Hotel 150 kamar di kawasan wisata",
                recommendation: "UKL-UPL atau AMDAL",
                explanation: "Tergantung lokasi: jika di area sensitif (pesisir, kawasan lindung) bisa wajib AMDAL. Konsultasikan dengan Dinas LH setempat untuk kepastian."
            },
            {
                scenario: "Pabrik makanan dengan limbah cair sedang",
                recommendation: "UKL-UPL (Cukup)",
                explanation: "Industri food & beverage umumnya cukup UKL-UPL selama tidak masuk kategori wajib AMDAL. Fokus pada pengelolaan limbah cair di UKL-UPL."
            }
        ],
        keywords: [
            "perbedaan AMDAL dan UKL-UPL",
            "AMDAL vs UKL-UPL",
            "kapan butuh AMDAL",
            "kapan cukup UKL-UPL",
            "biaya AMDAL vs UKL-UPL",
            "mana yang lebih baik AMDAL atau UKL-UPL"
        ]
    },
    {
        slug: "audit-lingkungan-wajib-vs-sukarela",
        title: "Audit Lingkungan Wajib vs Sukarela",
        metaTitle: "Audit Lingkungan Wajib vs Sukarela: Perbedaan dan Kapan Dibutuhkan",
        metaDescription: "Pahami perbedaan audit lingkungan wajib dan sukarela, kapan harus dilakukan, manfaat masing-masing, dan cara memilih yang sesuai untuk perusahaan Anda.",
        service1: {
            name: "Audit Lingkungan Wajib",
            slug: "audit-lingkungan-hidup",
            definition: "Audit lingkungan yang diperintahkan oleh KLH/Pemda untuk penegakan hukum atau compliance requirement",
            whenNeeded: [
                "Perintah KLH dalam rangka penegakan hukum",
                "Kegiatan berisiko tinggi terhadap lingkungan",
                "Kegiatan dengan potensi dampak serius",
                "Prasyarat perpanjangan izin lingkungan",
                "Pasca insiden pencemaran atau kecelakaan",
                "Evaluasi kinerja untuk PROPER tertentu"
            ],
            advantages: [
                "Memenuhi kewajiban regulasi",
                "Menghindari sanksi administratif/pidana",
                "Memperbaiki kinerja lingkungan terukur",
                "Basis untuk perpanjangan izin",
                "Dokumentasi compliance untuk otoritas",
                "Mencegah penutupan operasi paksa"
            ],
            disadvantages: [
                "Bersifat paksaan, bukan inisiatif sendiri",
                "Biaya ditanggung perusahaan yang diaudit",
                "Hasil audit dilaporkan ke KLH",
                "Temuan menjadi bagian dari record perusahaan",
                "Timeline ketat dari otoritas",
                "Risiko sanksi jika ditemukan pelanggaran berat"
            ],
            cost: "Rp 50 juta - Rp 300 juta (tergantung scope dan fasilitas)",
            timeline: "2-4 bulan (termasuk penyusunan laporan ke KLH)",
            suitableFor: [
                "Perusahaan dengan perintah audit KLH",
                "Industri berisiko tinggi yang diinspeksi",
                "Perusahaan perpanjangan izin",
                "Penyelesaian kasus lingkungan"
            ]
        },
        service2: {
            name: "Audit Lingkungan Sukarela",
            slug: "audit-lingkungan-hidup",
            definition: "Audit lingkungan atas inisiatif perusahaan untuk evaluasi internal dan peningkatan kinerja",
            whenNeeded: [
                "Persiapan sertifikasi ISO 14001",
                "Due diligence untuk M&A atau investasi",
                "Evaluasi kinerja internal berkala",
                "Persiapan penilaian PROPER",
                "Gap analysis kepatuhan regulasi",
                "Continuous improvement program",
                "Persiapan untuk ekspansi usaha"
            ],
            advantages: [
                "Fleksibel sesuai kebutuhan perusahaan",
                "Hasil audit bersifat confidential",
                "Fokus pada improvement, bukan hukuman",
                "Preventif untuk menghindari masalah",
                "Meningkatkan reputasi environmental stewardship",
                "Nilai tambah untuk investor dan stakeholder",
                "Persiapan PROPER Hijau/Emas"
            ],
            disadvantages: [
                "Biaya ditanggung sendiri tanpa kewajiban",
                "Butuh komitmen manajemen untuk tindak lanjut",
                "Temuan harus ditindaklanjuti untuk efektif",
                "Tidak menggantikan audit wajib jika diperintahkan"
            ],
            cost: "Rp 40 juta - Rp 200 juta (tergantung scope yang diminta)",
            timeline: "2-3 bulan (fleksibel sesuai kebutuhan)",
            suitableFor: [
                "Perusahaan target PROPER Hijau/Emas",
                "Calon target M&A",
                "Perusahaan dengan ESG commitment",
                "Persiapan sertifikasi ISO 14001",
                "Industri dengan compliance awareness tinggi"
            ]
        },
        keyDifferences: [
            {
                aspect: "Inisiatif",
                service1Value: "Perintah KLH/Pemda (mandatory)",
                service2Value: "Inisiatif perusahaan sendiri (voluntary)"
            },
            {
                aspect: "Tujuan Utama",
                service1Value: "Penegakan hukum dan compliance verification",
                service2Value: "Continuous improvement dan preventive"
            },
            {
                aspect: "Pelaporan",
                service1Value: "Wajib dilaporkan ke KLH/Pemda",
                service2Value: "Internal perusahaan (confidential)"
            },
            {
                aspect: "Konsekuensi Temuan",
                service1Value: "Bisa berujung sanksi jika pelanggaran berat",
                service2Value: "Corrective action plan internal"
            },
            {
                aspect: "Fleksibilitas Scope",
                service1Value: "Ditentukan oleh otoritas",
                service2Value: "Ditentukan oleh perusahaan"
            },
            {
                aspect: "Timeline",
                service1Value: "Deadline ketat dari otoritas",
                service2Value: "Fleksibel sesuai kebutuhan"
            },
            {
                aspect: "Auditor",
                service1Value: "Harus bersertifikat dan disetujui KLH",
                service2Value: "Internal atau eksternal bersertifikat"
            }
        ],
        decisionGuide: [
            {
                scenario: "Perusahaan menerima surat perintah audit dari KLH",
                recommendation: "Audit Wajib (Mandatory)",
                explanation: "Tidak ada pilihan, harus dilaksanakan sesuai timeline yang diberikan. Segera tunjuk auditor bersertifikat dan koordinasi dengan KLH."
            },
            {
                scenario: "Perusahaan sedang dalam proses akuisisi",
                recommendation: "Audit Sukarela (Due Diligence)",
                explanation: "Buyer membutuhkan environmental due diligence audit untuk risk assessment. Hasil audit mempengaruhi valuasi dan deal terms."
            },
            {
                scenario: "Target PROPER Hijau tahun depan",
                recommendation: "Audit Sukarela (Persiapan)",
                explanation: "Audit sukarela untuk gap analysis dan persiapan beyond compliance. Audit berkala menjadi poin tambahan untuk PROPER Hijau."
            },
            {
                scenario: "Perusahaan baru tanpa masalah compliance",
                recommendation: "Audit Sukarela (Preventive)",
                explanation: "Meskipun tidak wajib, audit sukarela 1-2 tahun sekali membantu maintain compliance dan mencegah masalah di masa depan."
            }
        ],
        keywords: [
            "perbedaan audit wajib dan sukarela",
            "audit lingkungan wajib vs sukarela",
            "kapan perlu audit lingkungan",
            "audit lingkungan KLH",
            "audit lingkungan untuk PROPER"
        ]
    }
];

export const getComparisonBySlug = (slug: string): ComparisonItem | undefined => {
    return comparisons.find(comp => comp.slug === slug);
};
