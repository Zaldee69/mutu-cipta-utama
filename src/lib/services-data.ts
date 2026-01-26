export interface Service {
    slug: string;
    title: string;
    group: "Persetujuan Lingkungan" | "Persetujuan Teknis (PERTEK)" | "Limbah & CSR" | "Engineering & Survey";
    category: "sipa" | "amdal"; // Deprecated but kept for compatibility if needed elsewhere
    shortDescription: string;
    heroImage: string;
    description: string;
    manfaat?: string[];
    tahapanProses: (string | {
        title: string;
        description: string;
    })[];
    ruangLingkup: string[];
    syaratKetentuan?: string[];
    hasilKeluaran?: string[];
}

export const services: Service[] = [
    {
        slug: "amdal-ukl-upl",
        title: "AMDAL / UKL-UPL",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Penyusunan dokumen AMDAL dan UKL-UPL sebagai persyaratan persetujuan lingkungan sesuai ketentuan peraturan yang berlaku.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyusunan dokumen AMDAL atau UKL-UPL sebagai bagian dari persetujuan lingkungan yang diwajibkan bagi kegiatan usaha yang berpotensi berdampak penting terhadap lingkungan. Dokumen ini menjadi dasar persetujuan lingkungan sebelum penerbitan izin berusaha sesuai dengan UU Nomor 32 Tahun 2009 dan PP Nomor 22 Tahun 2021.",
        manfaat: [
            "Kepatuhan Hukum: Memastikan proyek Anda memenuhi seluruh regulasi lingkungan hidup yang berlaku.",
            "Mitigasi Risiko: Mengidentifikasi dan meminimalkan potensi dampak negatif terhadap lingkungan sejak dini.",
            "Penerimaan Masyarakat: Meningkatkan kepercayaan dan penerimaan masyarakat sekitar terhadap proyek.",
            "Kelancaran Operasional: Mencegah sengketa dan penghentian operasional akibat masalah lingkungan."
        ],
        tahapanProses: [
            "Identifikasi kegiatan dan potensi dampak lingkungan",
            "Pengumpulan data dan analisis komprehensif (ANDAL/RKL/RPL)",
            "Konsultasi publik, finalisasi dokumen, dan pengajuan persetujuan"
        ],
        ruangLingkup: [
            "Kajian dampak lingkungan (ANDAL)",
            "Upaya pengelolaan lingkungan (RKL)",
            "Upaya pemantauan lingkungan (RPL)",
            "Konsultasi publik",
            "Pendampingan dalam proses persetujuan lingkungan"
        ],
        syaratKetentuan: [
            "Kesesuaian kegiatan atau usaha dengan daftar wajib AMDAL menurut Permen LHK No. 4 Tahun 2021",
            "Legalitas usaha/akta dan NIB",
            "Data teknis lokasi kegiatan",
            "Ketersediaan data baseline lingkungan"
        ],
        hasilKeluaran: [
            "Dokumen AMDAL atau UKL-UPL yang lengkap dan sesuai standar pemerintahan",
            "Persetujuan lingkungan (SKKLH/IZIN LINGKUNGAN)",
            "Rekomendasi pengelolaan dan pemantauan lingkungan"
        ]
    },
    {
        slug: "audit-lingkungan-hidup",
        title: "Audit Lingkungan Hidup",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Pelaksanaan audit lingkungan hidup untuk menilai tingkat kepatuhan perusahaan terhadap peraturan lingkungan.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Pelaksanaan audit lingkungan hidup untuk mengevaluasi kepatuhan perusahaan terhadap ketentuan peraturan lingkungan hidup, memberikan rekomendasi perbaikan, dan mendukung keterpenuhan kewajiban pelaporan sesuai standar pemerintah.",
        manfaat: [
            "Evaluasi Kepatuhan: Mengetahui tingkat ketaatan perusahaan terhadap peraturan perundang-undangan.",
            "Identifikasi Perbaikan: Menemukan celah dan peluang perbaikan dalam sistem manajemen lingkungan.",
            "Efisiensi Sumber Daya: Mengoptimalkan penggunaan sumber daya dan meminimalkan limbah.",
            "Manajemen Risiko: Mengurangi risiko tuntutan hukum dan pencemaran nama baik perusahaan."
        ],
        tahapanProses: [
            "Review dokumen dan sistem pengelolaan lingkungan",
            "Inspeksi lapangan dan verifikasi kepatuhan",
            "Penyusunan laporan audit lengkap"
        ],
        ruangLingkup: [
            "Audit dokumen lingkungan",
            "Audit operasional terkait limbah, emisi, dan air limbah",
            "Evaluasi sistem pengelolaan lingkungan",
            "Rekomendasi perbaikan dan tindak lanjut"
        ],
        syaratKetentuan: [
            "Dokumen legal lingkungan tersedia",
            "Akses fasilitas audit dan personel terkait",
            "Koordinasi PIC dari perusahaan"
        ],
        hasilKeluaran: [
            "Laporan audit lingkungan hidup",
            "Rekomendasi perbaikan",
            "Dokumentasi audit formal"
        ]
    },
    {
        slug: "pengelolaan-limbah-b3",
        title: "Pengelolaan Limbah B3",
        group: "Limbah & CSR",
        category: "sipa",
        shortDescription: "Layanan pengelolaan limbah B3 secara terintegrasi melalui kerja sama dengan transporter dan pengolah limbah berizin resmi.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Pengelolaan limbah B3 secara lengkap — mulai dari identifikasi, penanganan, pengangkutan oleh transporter berizin, hingga pengolahan akhir sesuai Peraturan Menteri LHK tentang Tata Cara Pengelolaan Limbah B3.",
        manfaat: [
            "Keamanan & K3: Mencegah kecelakaan kerja dan dampak kesehatan akibat paparan B3.",
            "Legalitas Terjamin: Pengelolaan dilakukan oleh pihak berizin resmi sesuai KLHK.",
            "Perlindungan Lingkungan: Mencegah pencemaran tanah dan air akibat limbah B3.",
            "Efisiensi Biaya: Solusi pengelolaan yang efektif dan efisien sesuai karakteristik limbah."
        ],
        tahapanProses: [
            "Identifikasi jenis dan volume limbah B3",
            "Penentuan metode penanganan dan pengangkutan resmi",
            "Pengolahan/B3 akhir dan pelaporan kepatuhan"
        ],
        ruangLingkup: [
            "Identifikasi & klasifikasi limbah B3",
            "Koordinasi dengan transporter dan TPB3 berizin",
            "Penanganan limbah sesuai standar",
            "Pelaporan & dokumentasi pengelolaan limbah"
        ],
        syaratKetentuan: [
            "Informasi jenis limbah, jumlah, dan karakteristiknya",
            "Perizinan/B3 management plan perusahaan",
            "Sertifikasi kompetensi tenaga kerja (sesuai Permen LHK)"
        ],
        hasilKeluaran: [
            "Dokumen manifest limbah B3",
            "Bukti pengolahan limbah berizin",
            "Laporan berkala sesuai kewajiban regulator"
        ]
    },
    {
        slug: "pertek-emisi",
        title: "PERTEK Emisi",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Penyusunan Persetujuan Teknis (PERTEK) emisi sebagai bagian dari pemenuhan perizinan lingkungan.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyusunan Persetujuan Teknis Emisi sesuai standar kualitas udara yang ditetapkan pemerintah untuk kegiatan usaha yang menghasilkan emisi dari sumber tetap dan/atau tidak tetap.",
        manfaat: [
            "Kepatuhan Regulasi: Memenuhi Persetujuan Teknis Pembuangan Emisi sesuai PermenLHK.",
            "Kontrol Polusi: Memastikan emisi yang dibuang memenuhi Baku Mutu Emisi.",
            "Efisiensi Energi: Evaluasi kinerja alat pengendali pencemaran udara.",
            "Izin Berusaha: Syarat mutlak untuk penerbitan Sertifikat Laik Operasi (SLO)."
        ],
        tahapanProses: [
            "Pengumpulan data sumber emisi",
            "Analisis teknis terhadap parameter emisi",
            "Penyusunan dan pengajuan dokumen PERTEK"
        ],
        ruangLingkup: [
            "Pemantauan sumber emisi",
            "Analisis baku mutu udara sesuai standar pemerintahan",
            "Dokumen teknis PERTEK"
        ],
        syaratKetentuan: [
            "Data operasional sumber emisi",
            "Peta lokasi sumber emisi",
            "Hasil uji emisi (jika tersedia)"
        ],
        hasilKeluaran: [
            "Dokumen PERTEK Emisi",
            "Persetujuan teknis emisi",
            "Dokumen pendukung pengelolaan udara"
        ]
    },
    {
        slug: "pertek-air-limbah",
        title: "PERTEK Air Limbah",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Penyusunan PERTEK air limbah untuk memastikan sistem pengelolaan sesuai baku mutu lingkungan.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyusunan Persetujuan Teknis Air Limbah untuk memastikan pengelolaan dan pembuangan limbah cair mematuhi baku mutu limbah sesuai peraturan lingkungan yang berlaku.",
        manfaat: [
            "Legalitas Pembuangan: Izin resmi membuang air limbah ke badan air atau pemanfaatan ke tanah.",
            "Kualitas Air Terjaga: Memastikan outlet IPAL memenuhi baku mutu yang ditetapkan.",
            "Optimasi IPAL: Evaluasi efektivitas kinerja Instalasi Pengolahan Air Limbah.",
            "Keberlanjutan: Mendukung daur ulang air dan konservasi sumber daya air."
        ],
        tahapanProses: [
            "Analisis kualitas air limbah",
            "Evaluasi sistem IPAL",
            "Penyusunan dan pengajuan PERTEK"
        ],
        ruangLingkup: [
            "Sampling & uji laboratorium air limbah",
            "Evaluasi teknologi pengolahan air limbah",
            "Dokumen teknis PERTEK"
        ],
        syaratKetentuan: [
            "Data IPAL dan hasil sampling",
            "Dokumen legalitas perusahaan",
            "Rencana pengolahan air limbah"
        ],
        hasilKeluaran: [
            "Dokumen PERTEK Air Limbah",
            "Persetujuan teknis",
            "Laporan teknis pendukung"
        ]
    },
    {
        slug: "pertek-pengelolaan-limbah-b3",
        title: "PERTEK Pengelolaan Limbah B3",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Penyusunan PERTEK pengelolaan limbah B3 sesuai sistem dan standar pengelolaan pemerintah.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyusunan PERTEK pengelolaan limbah B3 sesuai standar teknis dan sistem pengelolaan yang ditetapkan pemerintah.",
        manfaat: [
            "Izin Penyimpanan: Legalitas untuk menyimpan limbah B3 di TPS perusahaan.",
            "Standar Keselamatan: Memastikan fasilitas penyimpanan memenuhi standar teknis.",
            "Kepatuhan: Menghindari sanksi akibat pengelolaan limbah B3 ilegal.",
            "Sistem Terintegrasi: SOP pengelolaan limbah B3 yang jelas dan terekam."
        ],
        tahapanProses: [
            {
                title: "Site Assessment",
                description: "Peninjauan lokasi rencana atau eksisting TPS Limbah B3."
            },
            {
                title: "Desain TPS",
                description: "Perancangan bangunan TPS sesuai karakteristik limbah (flammable, korosif, dll)."
            },
            {
                title: "SOP Pengelolaan",
                description: "Penyusunan Standar Operasional Prosedur tanggap darurat dan penyimpanan."
            },
            {
                title: "Penyusunan Rincian Teknis",
                description: "Dokumentasi spesifikasi teknis bangunan dan peralatan pendukung."
            },
            {
                title: "Verifikasi Lapangan",
                description: "Pendampingan saat verifikasi lapangan oleh petugas DLH/KLHK."
            },
            {
                title: "Penerbitan Izin",
                description: "Penerbitan Persetujuan Teknis Pengelolaan Limbah B3."
            }
        ],
        ruangLingkup: [
            "Rincian Teknis Penyimpanan B3",
            "Desain Bangunan TPS B3",
            "SOP Tanggap Darurat",
            "Sill Log dan Tata Letak",
            "Persyaratan Pemanfaatan B3",
            "Pengurusan Validasi/Surat Layak"
        ]
    },
    {
        slug: "pertek-andalalin",
        title: "PERTEK ANDALALIN",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Penyusunan PERTEK ANDALALIN untuk mengelola dampak lalu lintas akibat kegiatan usaha.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyusunan PERTEK ANDALALIN untuk menilai dan mengelola dampak lalu lintas akibat kegiatan usaha atau pembangunan proyek.",
        manfaat: [
            "Kelancaran Akses: Menjamin akses keluar-masuk lokasi usaha tidak terganggu.",
            "Keselamatan Publik: Mencegah kecelakaan lalu lintas di sekitar lokasi kegiatan.",
            "Izin Pembangunan: Syarat wajib untuk penerbitan IMB/PBG gedung fungsi tertentu.",
            "Manajemen Lalu Lintas: Rekayasa lalu lintas yang efektif untuk operasional."
        ],
        tahapanProses: [
            {
                title: "Survey Lalu Lintas",
                description: "Traffic counting pada jam puncak pagi, siang, dan sore."
            },
            {
                title: "Inventarisasi Jalan",
                description: "Pengukuran geometrik jalan dan fasilitas perlengkapan jalan eksisting."
            },
            {
                title: "Simulasi kinerja",
                description: "Analisis V/C Ratio dan tundaan simpang kondisi eksisting dan masa depan."
            },
            {
                title: "Rekomendasi Manajemen",
                description: "Perancangan rambu, marka, dan manajemen sirkulasi internal-eksternal."
            },
            {
                title: "Sidang Dinas Perhubungan",
                description: "Pemaparan hasil kajian di hadapan tim evaluasi Dishub."
            },
            {
                title: "Penerbitan Dokumen",
                description: "Rekomendasi teknis ANDALALIN sebagai syarat PBG/Perizinan."
            }
        ],
        ruangLingkup: [
            "Survey Traffic Counting",
            "Analisis Bangkitan Perjalanan",
            "Simulasi Kinerja Simpang",
            "Desain Sirkulasi & Parkir",
            "Perencanaan Rambu & Marka",
            "Pengurusan Rekomendasi Dishub"
        ]
    },
    {
        slug: "advisor-hukum-lingkungan",
        title: "Advisor Hukum Lingkungan",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Layanan konsultasi dan pendampingan hukum lingkungan untuk memastikan kegiatan usaha sesuai peraturan perundang-undangan.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan konsultasi dan pendampingan hukum lingkungan untuk memastikan kepatuhan perusahaan serta meminimalkan risiko hukum.",
        manfaat: [
            "Kepastian Hukum: Memahami kewajiban hukum lingkungan yang dinamis dan kompleks.",
            "Mitigasi Sanksi: Mencegah sanksi administrasi, pidana, atau perdata lingkungan.",
            "Due Diligence: Pemeriksaan ketaatan lingkungan untuk merger/akuisisi.",
            "Strategi Penyelesaian: Solusi hukum tepat untuk sengketa lingkungan."
        ],
        tahapanProses: [
            {
                title: "Legal Audit",
                description: "Pemeriksaan dokumen dan kepatuhan hukum lingkungan perusahaan."
            },
            {
                title: "Analisis Gap",
                description: "Identifikasi kesenjangan antara kondisi riil dengan kewajiban regulasi."
            },
            {
                title: "Pemberian Nasihat",
                description: "Memberikan legal opinion dan strategi pemenuhan kepatuhan."
            },
            {
                title: "Pendampingan",
                description: "Mendampingi perusahaan dalam penyelesaian sengketa atau pengawasan."
            },
            {
                title: "Update Regulasi",
                description: "Memberikan informasi terbaru terkait perubahan peraturan lingkungan."
            },
            {
                title: "Pelatihan Hukum",
                description: "Memberikan pemahaman hukum lingkungan kepada manajemen internal."
            }
        ],
        ruangLingkup: [
            "Legal Opinion Lingkungan",
            "Audit Kepatuhan Hukum",
            "Pendampingan Sengketa Lingkungan",
            "Perizinan Berusaha Terintegrasi",
            "Analisis Kebijakan Lingkungan",
            "Due Diligence Proyek"
        ]
    },
    {
        slug: "program-csr-lingkungan",
        title: "Program CSR Lingkungan",
        group: "Limbah & CSR",
        category: "amdal",
        shortDescription: "Perencanaan dan pelaksanaan program CSR berbasis lingkungan yang berkelanjutan dan berdampak nyata.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Perencanaan dan pelaksanaan program CSR berbasis lingkungan yang berkelanjutan dan berdampak sosial positif.",
        manfaat: [
            "Citra Positif: Meningkatkan reputasi perusahaan sebagai entitas peduli lingkungan.",
            "Hubungan Masyarakat: Mempererat hubungan harmonis dengan masyarakat sekitar.",
            "PROPER Hijau/Emas: Mendukung penilaian PROPER Kementerian Lingkungan Hidup.",
            "Dampak Berkelanjutan: Memberikan manfaat jangka panjang bagi ekosistem dan sosial."
        ],
        tahapanProses: [
            {
                title: "Social Mapping",
                description: "Pemetaan kondisi sosial masyarakat dan kebutuhan lingkungan sekitar."
            },
            {
                title: "Perencanaan Program",
                description: "Merancang program CSR yang relevan, terukur, dan berdampak."
            },
            {
                title: "Pelaksanaan",
                description: "Implementasi kegiatan bersama masyarakat dan pemangku kepentingan."
            },
            {
                title: "Monitoring",
                description: "Pemantauan berkala jalannya program sesuai indikator keberhasilan."
            },
            {
                title: "Evaluasi Dampak",
                description: "Mengukur dampak sosial dan lingkungan dari program yang dijalankan."
            },
            {
                title: "Pelaporan Keberlanjutan",
                description: "Penyusunan laporan CSR/Sustainability Report."
            }
        ],
        ruangLingkup: [
            "Pemetaan Sosial (Social Mapping)",
            "Perencanaan Strategis CSR",
            "Pemberdayaan Masyarakat",
            "Konservasi Keanekaragaman Hayati",
            "Program Kampung Iklim",
            "Penyusunan Sustainability Report"
        ]
    },
    {
        slug: "event-sosialisasi-lingkungan",
        title: "Event & Sosialisasi Lingkungan",
        group: "Limbah & CSR",
        category: "amdal",
        shortDescription: "Penyelenggaraan event, sosialisasi, dan FGD terkait AMDAL, limbah, CSR, dan audit lingkungan secara profesional.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyelenggaraan event perusahaan, sosialisasi, dan FGD terkait isu lingkungan seperti AMDAL, limbah, CSR, dan audit lingkungan.",
        manfaat: [
            "Peningkatan Kapasitas: Meningkatkan pemahaman tim internal tentang isu lingkungan.",
            "Stakeholder Engagement: Wadah komunikasi efektif dengan para pemangku kepentingan.",
            "Kepatuhan Informasi: Memenuhi kewajiban sosialisasi rencana kegiatan ke masyarakat.",
            "Brand Awareness: Mengenalkan komitmen lingkungan perusahaan ke publik."
        ],
        tahapanProses: [
            {
                title: "Konsep Acara",
                description: "Perumusan tema, materi, dan target audiens kegiatan."
            },
            {
                title: "Persiapan Teknis",
                description: "Persiapan logistik, narasumber, undangan, dan perizinan acara."
            },
            {
                title: "Pelaksanaan Event",
                description: "Kordinasi hari-H, fasilitator diskusi, dan manajemen acara."
            },
            {
                title: "Dokumentasi",
                description: "Foto, video, dan notulensi kegiatan sebagai arsip dan bukti."
            },
            {
                title: "Evaluasi",
                description: "Umpan balik peserta dan laporan pelaksanaan kegiatan."
            },
            {
                title: "Publikasi",
                description: "Penyebaran hasil kegiatan melalui media internal atau eksternal."
            }
        ],
        ruangLingkup: [
            "Konsultasi Publik AMDAL",
            "Sosialisasi K3 Lingkungan",
            "Workshop Pengelolaan Limbah",
            "FGD Stakeholder Lingkungan",
            "Event Hari Lingkungan Hidup",
            "Dokumentasi & Prosiding"
        ]
    },
    {
        slug: "pemetaan-peta-resolusi-tinggi",
        title: "Pemetaan & Peta Resolusi Tinggi",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Penyediaan jasa pemetaan dan peta resolusi tinggi untuk kebutuhan perizinan dan perencanaan teknis.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyediaan jasa pemetaan dan peta resolusi tinggi untuk kebutuhan perizinan, perencanaan, dan kajian teknis.",
        manfaat: [
            "Akurasi Data: Peta resolusi tinggi memberikan data spasial yang presisi.",
            "Perencanaan Efektif: Dasar pengambilan keputusan layout dan pengembangan wilayah.",
            "Analisis Spasial: Memungkinkan analisis tumpang susun (overlay) dengan peta tematik lain.",
            "Efisiensi Survey: Mengurangi waktu survey terestris dengan teknologi drone/satelit."
        ],
        tahapanProses: [
            {
                title: "Perencanaan Jalur Terbang",
                description: "Menentukan area of interest (AOI) dan rencana jalur terbang drone."
            },
            {
                title: "Akuisisi Data",
                description: "Pengambilan foto udara menggunakan UAV/Drone atau pengukuran GPS Geodetik."
            },
            {
                title: "Pengolahan Data",
                description: "Proses mozaik foto, orthorectification, dan pembentukan DEM/DTM."
            },
            {
                title: "Digitasi & Kartografi",
                description: "Penggambaran fitur-fitur peta dan layouting sesuai standar kartografi."
            },
            {
                title: "Analisis Spasial",
                description: "Analisis lanjutan seperti cut & fill, kemiringan lereng, atau penggunaan lahan."
            },
            {
                title: "Penyajian Peta",
                description: "Peta digital dan cetak dalam format yang dibutuhkan (SHP, DWG, PDF)."
            }
        ],
        ruangLingkup: [
            "Foto Udara (UAV/Drone)",
            "Peta Topografi & Kontur",
            "Peta Penggunaan Lahan",
            "WebGIS Development",
            "Analisis GIS",
            "Pengukuran Bathimetri"
        ]
    },
    {
        slug: "feasibility-study",
        title: "Feasibility Study",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Studi kelayakan untuk menilai aspek teknis, lingkungan, dan operasional suatu rencana proyek.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Studi kelayakan untuk menilai aspek teknis, lingkungan, dan operasional suatu rencana proyek sebagai dasar pengambilan keputusan.",
        manfaat: [
            "Keputusan Investasi: Memberikan gambaran jelas layak/tidaknya proyek dijalankan.",
            "Identifikasi Hambatan: Mengetahui tantangan teknis dan lingkungan sejak awal.",
            "Estimasi Biaya: Prakiraan anggaran biaya (RAB/CAPEX/OPEX) yang lebih akurat.",
            "Strategi Pendanaan: Dokumen pendukung untuk pengajuan pendanaan ke bank/investor."
        ],
        tahapanProses: [
            {
                title: "Pengumpulan Data Sekunder",
                description: "Studi literatur, regulasi, dan data regional terkait."
            },
            {
                title: "Survey Pendahuluan",
                description: "Kunjungan lapangan untuk validasi data awal dan kondisi lokasi."
            },
            {
                title: "Aspek Pasar & Teknis",
                description: "Analisis permintaan pasar dan kelayakan teknis teknologi yang digunakan."
            },
            {
                title: "Aspek Lingkungan & Sosial",
                description: "Analisis dampak lingkungan dan sosial awal."
            },
            {
                title: "Analisis Finansial",
                description: "Perhitungan IRR, NPV, Payback Period, dan analisis sensitivitas."
            },
            {
                title: "Laporan Akhir",
                description: "Rekomendasi kelayakan proyek secara menyeluruh."
            }
        ],
        ruangLingkup: [
            "Kajian Kelayakan Teknis",
            "Kajian Kelayakan Ekonomi",
            "Kajian Aspek Lingkungan",
            "Kajian Aspek Legal",
            "Analisis Risiko Proyek",
            "Rekomendasi Strategis"
        ]
    },
    {
        slug: "design-engineering",
        title: "Design Engineering",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Penyusunan desain engineering dan dokumen teknis untuk mendukung perencanaan dan implementasi proyek.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Penyusunan desain engineering dan dokumen teknis untuk mendukung perencanaan dan implementasi proyek.",
        manfaat: [
            "Optimasi Desain: Merancang sistem yang efisien, aman, dan dapat diandalkan.",
            "Dokumen Konstruksi: Gambar kerja detil sebagai acuan kontraktor di lapangan.",
            "Akurasi Biaya: Menghitung Bill of Quantities (BoQ) untuk tender yang presisi.",
            "Standar Teknis: Memastikan desain sesuai SNI dan standar internasional (ASTM/ASME)."
        ],
        tahapanProses: [
            {
                title: "Konsep Desain",
                description: "Pengembangan alternatif konsep desain sesuai kebutuhan klien."
            },
            {
                title: "Basic Design (FEED)",
                description: "Front End Engineering Design mencakup diagram alir dan spesifikasi utama."
            },
            {
                title: "Detail Engineering (DED)",
                description: "Gambar teknis detail, perhitungan struktur, dan spesifikasi material."
            },
            {
                title: "RAB & RKS",
                description: "Penyusunan Rencana Anggaran Biaya dan Rencana Kerja Syarat."
            },
            {
                title: "Review Desain",
                description: "Pembahasan dan revisi desain bersama klien dan tenaga ahli."
            },
            {
                title: "Dokumen Tender",
                description: "Paket dokumen siap untuk proses pelelangan konstruksi."
            }
        ],
        ruangLingkup: [
            "Detail Engineering Design (DED)",
            "Penyusunan RAB (Bill of Quantities)",
            "Gambar For Construction",
            "Spesifikasi Teknis (RKS)",
            "Perhitungan Struktur/Mekalikal",
            "As-Built Drawing"
        ]
    },
    {
        slug: "layanan-drone-pemetaan-dokumentasi",
        title: "Layanan Drone untuk Pemetaan & Dokumentasi Udara",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Layanan drone profesional untuk pemetaan, inspeksi, monitoring, dan dokumentasi udara dengan data resolusi tinggi.",
        heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan drone profesional untuk berbagai kebutuhan pemetaan, inspeksi infrastruktur, monitoring operasional, dokumentasi proyek, hingga keperluan komersial seperti event, pariwisata, dan promosi. Teknologi drone memungkinkan akuisisi data spasial resolusi tinggi yang efisien dan cepat dibanding metode tradisional, serta dapat diintegrasikan dengan GIS untuk analisis lanjutan.",
        manfaat: [
            "Efisiensi Waktu & Biaya: Lebih cepat dibanding survey manual dengan biaya kompetitif.",
            "Data Akurat: Resolusi tinggi untuk analisis detail dan pemetaan presisi.",
            "Jangkauan Luas: Mampu menjangkau area sulit akses dan berbahaya.",
            "Monitoring Real-time: Pemantauan progress proyek yang efektif dan terdokumentasi."
        ],
        tahapanProses: [
            "Perencanaan misi dan penentuan area penerbangan",
            "Pengambilan data udara dengan kamera/sensor yang sesuai",
            "Pengolahan & analisis data untuk laporan/visualisasi"
        ],
        ruangLingkup: [
            "Pemetaan area proyek, lahan, dan topografi",
            "Inspeksi infrastruktur (jalan, jembatan, gedung, tower)",
            "Monitoring pertambangan, perkebunan, dan industri",
            "Dokumentasi progress konstruksi",
            "Foto & video udara untuk event, pariwisata, dan promosi",
            "Survey dan analisis GIS lanjutan"
        ],
        syaratKetentuan: [
            "Izin lokasi dan ketinggian terbang sesuai aturan drone di Indonesia",
            "Koordinasi waktu dan titik koordinat terbang bersama klien",
            "Kepatuhan terhadap privasi dan keselamatan publik",
            "Akses lokasi yang aman untuk persiapan take off/landing"
        ],
        hasilKeluaran: [
            "Foto udara resolusi tinggi",
            "Peta orthomosaic & model 3D (opsional)",
            "Laporan analisis atau interpretasi data",
            "File GIS/geoTIFF atau format digital sesuai kebutuhan"
        ]
    },
    {
        slug: "pengadaan-instalasi-rth",
        title: "Pengadaan Instalasi RTH",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Perancangan dan instalasi Ruang Terbuka Hijau (RTH) konvensional maupun modern untuk kawasan industri dan publik.",
        heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2232&auto=format&fit=crop",
        description: "Layanan perancangan dan instalasi ruang terbuka hijau (RTH) baik secara konvensional maupun berbasis hidroponik/terrarium untuk kebutuhan lanskap perusahaan, kawasan industri, fasilitas publik, maupun area komersial. RTH penting untuk mikroklimat, estetika lingkungan, mitigasi efek panas, dan peningkatan kualitas udara di kawasan perkotaan.",
        manfaat: [
            "Estetika Lingkungan: Memperindah kawasan dan meningkatkan citra perusahaan.",
            "Mikroklimat: Menurunkan suhu sekitar dan meningkatkan kualitas udara (O2).",
            "Kepatuhan Regulasi: Memenuhi persentase RTH wajib (min 30% kawasan).",
            "Kesehatan & Kenyamanan: Menciptakan lingkungan kerja yang sehat dan asri."
        ],
        tahapanProses: [
            "Survey lokasi dan analisis kondisi lahan",
            "Perancangan konsep RTH sesuai kebutuhan estetika & lingkungan",
            "Instalasi tanaman, sistem hidroponik/terrarium, dan finishing"
        ],
        ruangLingkup: [
            "Ruang terbuka hijau konvensional",
            "Hidroponik untuk taman/area komersial",
            "Terrarium atau taman terpadu",
            "Sistem irigasi & drainase RTH",
            "Perawatan awal pasca-instalasi"
        ],
        syaratKetentuan: [
            "Area lahan yang layak untuk instalasi RTH",
            "Akses air dan sumber daya yang memadai",
            "Klarifikasi konsep akhir dengan klien",
            "Izin lokasi penempatan bila di area publik"
        ],
        hasilKeluaran: [
            "Ruang Terbuka Hijau terinstalasi & siap digunakan",
            "Dokumen desain lanskap dan layout",
            "Jadwal perawatan awal",
            "Laporan teknis instalasi"
        ]
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(group: Service["group"]): Service[] {
    return services.filter((service) => service.group === group);
}

export const serviceGroups: Service["group"][] = [
    "Persetujuan Lingkungan",
    "Persetujuan Teknis (PERTEK)",
    "Limbah & CSR",
    "Engineering & Survey"
];
