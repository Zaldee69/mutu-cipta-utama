import { FAQItem } from "@/components/ServiceFAQ";

/**
 * Service-specific FAQs optimized for SEO
 * Based on keyword research and common user queries
 */

export interface ServiceFAQData {
    [serviceSlug: string]: FAQItem[];
}

export const serviceFAQs: ServiceFAQData = {
    "amdal-ukl-upl": [
        {
            question: "Apa itu AMDAL dan kapan dokumen AMDAL diperlukan?",
            answer: "AMDAL (Analisis Mengenai Dampak Lingkungan) adalah kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup. AMDAL diperlukan untuk kegiatan yang berdampak penting terhadap lingkungan seperti pertambangan, industri skala besar, pembangunan infrastruktur, properti besar, dan proyek yang tercantum dalam lampiran PP 22/2021."
        },
        {
            question: "Berapa lama proses penyusunan AMDAL profesional?",
            answer: "Proses penyusunan dokumen AMDAL biasanya memakan waktu 3-6 bulan tergantung kompleksitas proyek, kelengkapan data, dan proses konsultasi publik. Tim konsultan AMDAL berpengalaman kami akan membantu mempercepat proses dengan persiapan dokumen yang lengkap dan akurat sejak awal."
        },
        {
            question: "Apa perbedaan AMDAL dan UKL-UPL?",
            answer: "AMDAL diperlukan untuk kegiatan yang berdampak penting terhadap lingkungan, sedangkan UKL-UPL (Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan) untuk kegiatan yang dampaknya tidak penting. UKL-UPL lebih sederhana, prosesnya lebih cepat (1-2 bulan), dan biayanya lebih terjangkau dibanding AMDAL."
        },
        {
            question: "Berapa biaya penyusunan AMDAL lengkap?",
            answer: "Biaya penyusunan AMDAL bervariasi tergantung skala proyek, kompleksitas kajian, lokasi, dan jumlah pemangku kepentingan yang terlibat. Untuk estimasi biaya yang akurat untuk proyek Anda, silakan hubungi konsultan AMDAL kami untuk konsultasi gratis dan penawaran yang disesuaikan dengan kebutuhan spesifik proyek."
        },
        {
            question: "Apa saja dokumen yang termasuk dalam AMDAL lengkap?",
            answer: "AMDAL lengkap terdiri dari tiga dokumen utama: (1) KA-ANDAL (Kerangka Acuan Analisis Dampak Lingkungan) untuk pelingkupan dampak penting, (2) ANDAL (Analisis Dampak Lingkungan) berisi kajian komprehensif dampak, dan (3) RKL-RPL (Rencana Pengelolaan Lingkungan dan Rencana Pemantauan Lingkungan) untuk mitigasi dan monitoring dampak."
        },
        {
            question: "Apakah konsultan AMDAL harus bersertifikat?",
            answer: "Ya, penyusun AMDAL harus memiliki sertifikat kompetensi penyusun AMDAL dari KLH sesuai Permen LHK No. 7/2021. Tim konsultan AMDAL berpengalaman kami terdiri dari tenaga ahli bersertifikat di bidang lingkungan, teknik, sosial ekonomi, dan kesehatan masyarakat untuk memastikan kualitas dokumen yang diakui Komisi Penilai AMDAL."
        },
        {
            question: "Apa yang dimaksud dengan SKKLH dalam proses AMDAL?",
            answer: "SKKLH (Surat Keputusan Kelayakan Lingkungan Hidup) adalah persetujuan lingkungan yang diterbitkan oleh Menteri, Gubernur, atau Bupati/Walikota setelah dokumen AMDAL disetujui oleh Komisi Penilai AMDAL. SKKLH merupakan persyaratan wajib untuk mendapatkan izin berusaha dan menjadi dasar pelaksanaan RKL-RPL."
        },
        {
            question: "Berapa lama masa berlaku dokumen AMDAL?",
            answer: "Dokumen AMDAL berlaku selama umur proyek atau kegiatan yang tercantum dalam dokumen. Namun, jika terjadi perubahan signifikan pada rencana kegiatan, lokasi, atau teknologi yang digunakan, maka dokumen AMDAL perlu diperbaharui atau dilakukan addendum sesuai regulasi KLH."
        }
    ],
    "audit-lingkungan-hidup": [
        {
            question: "Apa itu audit lingkungan dan mengapa diperlukan?",
            answer: "Audit lingkungan adalah evaluasi sistematis untuk menilai kepatuhan perusahaan terhadap peraturan lingkungan hidup, efektivitas sistem manajemen lingkungan, dan kinerja lingkungan. Audit lingkungan diperlukan untuk memastikan kepatuhan regulasi KLH, menghindari sanksi, mempersiapkan PROPER, dan meningkatkan kinerja lingkungan perusahaan."
        },
        {
            question: "Kapan audit lingkungan wajib dilakukan?",
            answer: "Audit lingkungan wajib dilakukan sesuai Permen LHK No. 3/2013 untuk: (1) usaha yang berisiko tinggi terhadap lingkungan, (2) usaha dengan potensi dampak serius, (3) dalam rangka penegakan hukum lingkungan, (4) untuk merger dan akuisisi (due diligence), dan (5) persiapan penilaian PROPER untuk kategori melampaui kepatuhan."
        },
        {
            question: "Berapa lama proses audit lingkungan perusahaan?",
            answer: "Proses audit lingkungan perusahaan biasanya memakan waktu 2-4 minggu tergantung skala fasilitas, kompleksitas operasi, dan kelengkapan dokumentasi. Tahapan meliputi: desk review dokumen (3-5 hari), site inspection dan interview (2-3 hari), analisis dan penyusunan laporan (7-14 hari), dan presentasi hasil audit dengan manajemen."
        },
        {
            question: "Apa perbedaan audit lingkungan wajib dan sukarela?",
            answer: "Audit lingkungan wajib dilakukan atas perintah KLH/Pemda untuk memenuhi kewajiban regulasi atau penegakan hukum. Audit lingkungan sukarela dilakukan atas inisiatif perusahaan untuk evaluasi internal, persiapan sertifikasi ISO 14001, due diligence M&A, atau persiapan PROPER. Keduanya menggunakan metodologi serupa namun audit sukarela lebih fleksibel sesuai kebutuhan perusahaan."
        },
        {
            question: "Apakah auditor lingkungan harus bersertifikat?",
            answer: "Ya, auditor lingkungan harus memiliki sertifikat kompetensi auditor lingkungan hidup dari KLH atau BNSP sesuai Permen LHK No. 3/2013. Tim auditor lingkungan bersertifikat kami memiliki kompetensi di bidang audit compliance, ISO 14001, PROPER, dan audit uji tuntas untuk memastikan hasil audit yang kredibel dan diakui otoritas."
        },
        {
            question: "Apa hubungan audit lingkungan dengan PROPER KLH?",
            answer: "Audit lingkungan merupakan salah satu kriteria penilaian PROPER untuk kategori melampaui kepatuhan (Hijau dan Emas). Perusahaan yang melakukan audit lingkungan sukarela secara berkala, menindaklanjuti temuan audit, dan melaporkan hasilnya kepada KLH dapat memperoleh poin tambahan dalam penilaian PROPER untuk mencapai peringkat Hijau atau Emas."
        },
        {
            question: "Apa saja yang diaudit dalam audit kepatuhan lingkungan?",
            answer: "Audit kepatuhan lingkungan mencakup: (1) verifikasi dokumen perizinan (AMDAL/UKL-UPL, PERTEK, izin limbah), (2) kepatuhan operasional (pengelolaan limbah B3, air limbah, emisi udara, limbah padat), (3) pelaksanaan RKL-RPL, (4) sistem manajemen lingkungan (SOP, pelatihan, dokumentasi), dan (5) identifikasi risiko dan peluang peningkatan kinerja."
        },
        {
            question: "Berapa biaya audit lingkungan untuk perusahaan?",
            answer: "Biaya audit lingkungan bervariasi tergantung skala perusahaan, kompleksitas operasi, lokasi fasilitas, dan ruang lingkup audit. Untuk estimasi biaya yang akurat, hubungi tim auditor lingkungan bersertifikat kami untuk konsultasi gratis dan penawaran yang disesuaikan dengan kebutuhan audit perusahaan Anda."
        }
    ],
    "pengelolaan-limbah-b3": [
        {
            question: "Apa itu limbah B3 dan bagaimana karakteristiknya?",
            answer: "Limbah B3 (Bahan Berbahaya dan Beracun) adalah sisa suatu usaha atau kegiatan yang mengandung bahan berbahaya dan/atau beracun yang dapat mencemarkan lingkungan atau membahayakan kesehatan. Karakteristik limbah B3 meliputi: mudah meledak, mudah terbakar, reaktif, beracun, korosif, atau infeksius sesuai PP 101/2014."
        },
        {
            question: "Bagaimana cara pengelolaan limbah B3 yang benar?",
            answer: "Pengelolaan limbah B3 yang benar meliputi: (1) identifikasi dan klasifikasi limbah B3, (2) penyimpanan sementara di TPS B3 yang memenuhi standar, (3) pelabelan dan pengemasan sesuai UN Package, (4) pengangkutan oleh transporter bersertifikat KLH, (5) pengolahan/pemusnahan di PPLI berizin, dan (6) pelaporan manifest elektronik SIMPEL ke KLH. Semua tahapan harus dilakukan oleh pihak berizin sesuai PP 22/2021."
        },
        {
            question: "Apa itu TPS limbah B3 dan persyaratannya?",
            answer: "TPS (Tempat Penyimpanan Sementara) limbah B3 adalah fasilitas penyimpanan limbah B3 di lokasi penghasil sebelum diserahkan ke transporter/PPLI. Persyaratan TPS B3 meliputi: area berpagar dengan akses terbatas, lantai kedap air, sistem penampungan sekunder, atap/tertutup, ventilasi, sistem pemadam kebakaran, rambu peringatan, dan PERTEK dari KLH/Dinas Lingkungan Hidup."
        },
        {
            question: "Apa itu transporter limbah B3 dan bagaimana memilih yang terpercaya?",
            answer: "Transporter limbah B3 adalah perusahaan jasa pengangkutan limbah B3 yang memiliki izin dari KLH. Untuk memilih transporter limbah B3 bersertifikat yang terpercaya, pastikan: (1) memiliki izin operasional dari KLH yang masih berlaku, (2) kendaraan dilengkapi label dan simbol B3, (3) memiliki asuransi pengangkutan, (4) terdaftar di sistem SIMPEL, dan (5) menyediakan manifest elektronik dan sertifikat pembuangan dari PPLI."
        },
        {
            question: "Apa itu SIMPEL dan bagaimana cara pelaporannya?",
            answer: "SIMPEL (Sistem Informasi Pengelolaan Limbah B3) adalah platform online KLH untuk pelaporan manifest elektronik limbah B3. Penghasil limbah B3 wajib melaporkan setiap pengangkutan limbah B3 melalui SIMPEL dengan data: jenis limbah, kode limbah, jumlah, transporter, dan tujuan pengolahan. Pelaporan dilakukan secara real-time saat penyerahan limbah dan laporan triwulanan disampaikan ke KLH."
        },
        {
            question: "Berapa lama limbah B3 boleh disimpan di TPS?",
            answer: "Sesuai Permen LHK No. 6/2021, limbah B3 boleh disimpan di TPS maksimal 90 hari sejak dihasilkan. Jika limbah B3 disimpan lebih dari 90 hari tanpa alasan yang dapat dipertanggungjawabkan, penghasil dapat dikenakan sanksi administratif. Oleh karena itu, pengangkutan limbah B3 harus dijadwalkan rutin sebelum periode 90 hari berakhir."
        },
        {
            question: "Apa sanksi jika pengelolaan limbah B3 tidak sesuai regulasi?",
            answer: "Sanksi pengelolaan limbah B3 ilegal meliputi: (1) sanksi administratif berupa teguran tertulis, paksaan pemerintah, pembekuan izin, atau pencabutan izin, (2) sanksi pidana penjara 1-15 tahun dan denda Rp 1 miliar - Rp 15 miliar sesuai UU 32/2009, (3) kewajiban pemulihan lingkungan, dan (4) tanggung jawab perdata atas kerugian pihak lain. Pastikan pengelolaan limbah B3 Anda legal dan terdokumentasi dengan baik."
        },
        {
            question: "Berapa biaya pengelolaan limbah B3 per kilogram?",
            answer: "Biaya pengolahan limbah B3 bervariasi tergantung jenis limbah, karakteristik, volume, dan metode pengolahan (incinerator, landfill, recovery, recycling). Kisaran biaya umumnya Rp 3.000 - Rp 50.000 per kg tergantung kompleksitas pengolahan. Untuk perhitungan biaya yang akurat untuk jenis limbah B3 Anda, hubungi tim pengelolaan limbah B3 kami untuk konsultasi dan penawaran."
        }
    ],
    "pertek-emisi": [
        {
            question: "Apa itu PERTEK emisi dan siapa yang wajib memiliki?",
            answer: "PERTEK (Persetujuan Teknis) emisi adalah izin teknis dari KLH/Dinas Lingkungan Hidup untuk pengendalian pencemaran udara dari sumber tidak bergerak seperti cerobong, genset, boiler, furnace, dan incinerator. PERTEK emisi wajib dimiliki oleh semua usaha yang menghasilkan emisi udara sesuai PP 22/2021 dan Permen LHK 13/2021 sebagai persyaratan SLO (Sertifikat Laik Operasi)."
        },
        {
            question: "Apa saja parameter yang diuji dalam PERTEK emisi udara?",
            answer: "Parameter pengujian emisi cerobong meliputi: partikulat (TSP/PM10), sulfur dioksida (SO₂), nitrogen oksida (NOx), karbon monoksida (CO), opasitas, hidrokarbon (HC), H₂S, HCl, dan logam berat (Pb, Hg) tergantung jenis sumber emisi dan baku mutu yang berlaku. Pengujian dilakukan dengan metode isokinetik sesuai SNI dan harus dilaksanakan oleh laboratorium terakreditasi KAN."
        },
        {
            question: "Berapa lama proses pengurusan PERTEK emisi?",
            answer: "Proses penyusunan dan persetujuan PERTEK emisi umumnya memakan waktu 2-3 bulan, meliputi: (1) survey sumber emisi dan pengujian stack (1-2 minggu), (2) pemodelan dispersi AERMOD (1 minggu), (3) penyusunan dokumen teknis (2 minggu), (4) pengajuan ke Dinas Lingkungan Hidup (1-2 bulan untuk review dan persetujuan). Waktu dapat dipercepat dengan kelengkapan dokumen dan data teknis yang memadai."
        },
        {
            question: "Apa itu SLO dan hubungannya dengan PERTEK emisi?",
            answer: "SLO (Sertifikat Laik Operasi) adalah sertifikat yang diterbitkan oleh Dinas Perindag atau instansi teknis terkait yang menyatakan bahwa mesin/peralatan produksi layak dan aman dioperasikan. PERTEK emisi merupakan salah satu persyaratan wajib untuk mendapatkan SLO, bersama dengan izin lingkungan, PERTEK air limbah, dan inspeksi keselamatan peralatan."
        },
        {
            question: "Apa yang dimaksud dengan pemodelan dispersi AERMOD?",
            answer: "AERMOD (American Meteorological Society/Environmental Protection Agency Regulatory Model) adalah model dispersi polutan udara yang digunakan untuk memprediksi konsentrasi pencemar di permukaan tanah akibat emisi dari cerobong. Pemodelan dispersi AERMOD wajib dilampirkan dalam dokumen PERTEK emisi untuk menunjukkan bahwa emisi tidak melebihi baku mutu udara ambien di pemukiman terdekat."
        },
        {
            question: "Berapa lama masa berlaku PERTEK emisi?",
            answer: "Masa berlaku PERTEK emisi umumnya 5 tahun atau sesuai dengan masa berlaku izin lingkungan (AMDAL/UKL-UPL) perusahaan. Setelah masa berlaku berakhir, perusahaan wajib melakukan perpanjangan PERTEK dengan pengujian emisi terbaru dan evaluasi sistem pengendalian udara. Jika ada perubahan signifikan pada sumber emisi atau teknologi, PERTEK harus diperbaharui sebelum masa berlaku berakhir."
        },
        {
            question: "Apa sistem pengendalian polusi udara yang direkomendasikan?",
            answer: "Sistem pengendalian polusi udara yang umum digunakan meliputi: (1) Scrubber (wet/dry) untuk gas asam, (2) Baghouse/fabric filter untuk partikulat, (3) Cyclone separator untuk partikulat kasar, (4) ESP (Electrostatic Precipitator) untuk partikulat halus, (5) Activated carbon adsorption untuk VOC, dan (6) Biofilter untuk bau. Pemilihan sistem tergantung karakteristik emisi, efisiensi removal yang dibutuhkan, dan baku mutu yang berlaku."
        }
    ],
    // Continue for other services...
    "pertek-air-limbah": [
        {
            question: "Apa itu PERTEK air limbah dan siapa yang wajib memiliki?",
            answer: "PERTEK (Persetujuan Teknis) air limbah adalah izin teknis untuk pembuangan air limbah dari IPAL ke badan air (sungai, laut) atau sistem drainase. Semua industri dan fasilitas yang menghasilkan air limbah wajib memiliki PERTEK sesuai PP 22/2021 dan Permen LHK 68/2016 sebagai dasar legalitas pembuangan dan persyaratan izin operasional."
        },
        {
            question: "Apa saja parameter yang diuji untuk PERTEK air limbah industri?",
            answer: "Parameter pengujian efluen IPAL meliputi: BOD (Biochemical Oxygen Demand), COD (Chemical Oxygen Demand), TSS (Total Suspended Solids), pH, ammonia (NH₃-N), minyak dan lemak, sulfida, fenol, logam berat (Cr, Pb, Cu, Zn, Cd, Hg), dan coliform. Parameter spesifik tergantung jenis industri dan baku mutu sektor yang berlaku (tekstil, sawit, pulp, makanan, electroplating)."
        },
        {
            question: "Bagaimana cara audit kinerja IPAL untuk PERTEK?",
            answer: "Audit kinerja IPAL meliputi evaluasi: (1) teknologi pengolahan (primer, sekunder, tersier), (2) efisiensi penyisihan BOD/COD/TSS, (3) perhitungan waktu retensi hidrolik, (4) analisis usia lumpur dan MLSS, (5) kapasitas hidraulik vs debit aktual, (6) kondisi peralatan dan sistem aerasi, dan (7) SOP operasional dan perawatan. Hasil audit digunakan untuk rekomendasi perbaikan sistem sebelum pengajuan PERTEK."
        },
        {
            question: "Berapa lama proses pengurusan PERTEK air limbah?",
            answer: "Proses penyusunan dan persetujuan PERTEK air limbah umumnya 2-3 bulan meliputi: (1) karakterisasi air limbah dan pengujian efluen (1-2 minggu), (2) audit kinerja IPAL (1 minggu), (3) penyusunan dokumen teknis dengan diagram alir dan perhitungan (2 minggu), (4) pengajuan ke Dinas Lingkungan Hidup (1-2 bulan untuk review dan persetujuan). Kelengkapan data teknis dan hasil uji lab mempercepat proses."
        },
        {
            question: "Apa yang dimaksud dengan baku mutu air limbah?",
            answer: "Baku mutu air limbah adalah ukuran batas atau kadar polutan yang diperbolehkan dalam air limbah yang dibuang ke badan air atau lingkungan. Baku mutu ditetapkan dalam Permen LHK 68/2016 (baku mutu umum) dan peraturan sektor-spesifik untuk industri tertentu (tekstil, sawit, pulp, rumah sakit). Efluen IPAL harus memenuhi baku mutu sebelum dapat dibuang secara legal."
        },
        {
            question: "Apakah IPAL wajib untuk semua usaha?",
            answer: "Ya, semua usaha yang menghasilkan air limbah wajib memiliki IPAL sesuai UU 32/2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup. Jenis IPAL disesuaikan dengan karakteristik dan volume air limbah: IPAL komunal untuk kawasan industri, IPAL individual untuk pabrik mandiri, atau IPAL domestik untuk limbah sanitasi. Pembuangan air limbah tanpa IPAL atau tanpa PERTEK dapat dikenakan sanksi pidana dan administratif."
        },
        {
            question: "Apa perbedaan PERTEK pembuangan ke badan air vs sistem daur ulang?",
            answer: "PERTEK pembuangan ke badan air diajukan jika efluen IPAL dibuang ke sungai/laut/drainase dan harus memenuhi baku mutu pembuangan. PERTEK sistem daur ulang diajukan jika air olahan IPAL digunakan kembali untuk proses industri, pendinginan, atau irigasi landscape. Daur ulang air mendapat insentif regulasi dan dukungan PROPER karena mengurangi beban pencemaran dan menghemat sumber daya air."
        }
    ],
    "pertek-pengelolaan-limbah-b3": [
        {
            question: "Apa itu PERTEK pengelolaan limbah B3?",
            answer: "PERTEK pengelolaan limbah B3 adalah izin teknis untuk operasional fasilitas penyimpanan sementara (TPS), pengumpulan, pengangkutan, pemanfaatan, dan/atau pengolahan limbah B3 sesuai PP 22/2021. Dokumen PERTEK mencakup desain fasilitas, SOP operasional, rencana tanggap darurat, dan sistem pelaporan manifest."
        },
        {
            question: "Siapa yang wajib memiliki PERTEK limbah B3?",
            answer: "Wajib dimiliki oleh: (1) Penghasil limbah B3 yang memiliki TPS B3 di lokasi, (2) Pengumpul limbah B3 berizin, (3) Transporter/pengangkut limbah B3, (4) PPLI (Pengolah dan Pemanfaat Limbah B3), dan (5) Fasilitas penyimpanan sementara limbah B3 bersama (komunal). Setiap entitas yang menangani limbah B3 harus memiliki PERTEK sesuai jenis kegiatan."
        },
        {
            question: "Apa saja persyaratan TPS limbah B3 untuk PERTEK?",
            answer: "Persyaratan TPS B3 meliputi: (1) Lokasi di area aman dengan akses terbatas dan berpagar, (2) Lantai kedap air dengan sistem penampungan sekunder, (3) Atap atau penutup untuk perlindungan dari hujan, (4) Ventilasi yang memadai, (5) Sistem pemadam kebakaran, (6) Rambu peringatan dan label B3, (7) APAR dan emergency kit, (8) Log book pencatatan keluar-masuk limbah, (9) SOP operasional dan tanggap darurat."
        },
        {
            question: "Berapa lama proses pengurusan PERTEK limbah B3?",
            answer: "Proses penyusunan dan persetujuan PERTEK limbah B3 umumnya 2-3 bulan meliputi: (1) Survey dan desain TPS B3 (2-3 minggu), (2) Penyusunan dokumen teknis dan SOP (2 minggu), (3) Perhitungan kapasitas dan neraca massa (1 minggu), (4) Pengajuan ke Dinas Lingkungan Hidup/KLH (1-2 bulan untuk review dan persetujuan). Waktu dapat dipercepat dengan kelengkapan dokumen dan konsultasi yang baik dengan otoritas."
        },
        {
            question: "Apa yang dimaksud dengan manifest limbah B3 elektronik?",
            answer: "Manifest elektronik adalah dokumen digital yang mencatat pergerakan limbah B3 dari penghasil ke transporter hingga PPLI melalui sistem SIMPEL (Sistem Informasi Pengelolaan Limbah B3) KLH. Manifest berisi: jenis limbah, kode limbah B3, jumlah, karakteristik, tanggal penyerahan, pihak yang menerima, dan tujuan pengolahan. Setiap perpindahan custody harus tercatat untuk traceability dan compliance."
        },
        {
            question: "Apakah PERTEK limbah B3 berbeda dengan izin lingkungan?",
            answer: "Ya, PERTEK limbah B3 adalah izin teknis operasional fasilitas pengelolaan, sedangkan izin lingkungan (AMDAL/UKL-UPL) adalah izin untuk dampak lingkungan dari keseluruhan kegiatan usaha. Perusahaan memerlukan KEDUANYA: izin lingkungan untuk operasional bisnis secara umum, dan PERTEK B3 khusus untuk fasilitas penyimpanan atau pengelolaan limbah B3. PERTEK merupakan turunan dari izin lingkungan."
        },
        {
            question: "Apa sanksi jika TPS B3 beroperasi tanpa PERTEK?",
            answer: "Sanksi operasional TPS B3 tanpa PERTEK meliputi: (1) Teguran tertulis dari KLH/Pemda, (2) Paksaan pemerintah untuk menghentikan operasi TPS, (3) Denda administratif hingga ratusan juta rupiah, (4) Pencabutan izin usaha, (5) Sanksi pidana penjara 1-3 tahun dan denda Rp 1-3 miliar sesuai UU PPLH, (6) Kewajiban remediasi jika terjadi pencemaran. Pastikan TPS B3 Anda legal dengan PERTEK yang sah."
        }
    ],
    "pertek-andalalin": [
        {
            question: "Apa itu ANDALALIN dan siapa yang wajib membuat?",
            answer: "ANDALALIN (Analisis Dampak Lalu Lintas) adalah kajian dampak pembangunan terhadap kinerja lalu lintas di sekitar lokasi proyek. Wajib dibuat untuk: (1) Pembangunan properti/gedung >5.000 m², (2) Kawasan komersial/mall/supermarket, (3) Sekolah/universitas, (4) Rumah sakit, (5) Pabrik/industri, (6) Hotel >100 kamar, (7) Apartemen/perumahan, (8) Terminal/stasiun transportasi. ANDALALIN diperlukan untuk mendapatkan IMB dan izin operasional."
        },
        {
            question: "Apa saja yang dianalisis dalam ANDALALIN?",
            answer: "Analisis ANDALALIN meliputi: (1) Survey traffic counting untuk volume lalu lintas existing, (2) Bangkitan dan tarikan perjalanan dari proyek, (3) Distribusi perjalanan ke jaringan jalan, (4) Pembebanan lalu lintas (traffic assignment), (5) Analisis kapasitas dan tingkat pelayanan jalan (V/C ratio), (6) Analisis dampak ke persimpangan, (7) Kebutuhan manajemen lalu lintas (rambu, marka, traffic light), (8) Rekomendasi perbaikan infrastruktur jalan jika diperlukan."
        },
        {
            question: "Berapa lama proses penyusunan dokumen ANDALALIN?",
            answer: "Proses penyusunan ANDALALIN umumnya 1-2 bulan meliputi: (1) Survey traffic counting selama 3-7 hari kerja, (2) Survey wawancara origin-destination (jika diperlukan) 2-3 hari, (3) Analisis dan pemodelan lalu lintas 1-2 minggu, (4) Penyusunan laporan dan rekomendasi 1 minggu, (5) Konsultasi dengan Dinas Perhubungan dan revisi 2-4 minggu. Waktu tergantung kompleksitas proyek dan lokasi."
        },
        {
            question: "Apa perbedaan ANDALALIN dan PERTEK ANDALALIN?",
            answer: "ANDALALIN adalah dokumen kajian dampak lalu lintas yang disusun konsultan dan diajukan ke Dinas Perhubungan. PERTEK (Persetujuan Teknis) ANDALALIN adalah izin/persetujuan yang diterbitkan oleh Dinas Perhubungan setelah dokumen ANDALALIN disetujui. Jadi ANDALALIN adalah dokumen kajian, sedangkan PERTEK ANDALALIN adalah surat izin yang keluar setelah kajian disetujui."
        },
        {
            question: "Apa yang dimaksud dengan V/C ratio dalam ANDALALIN?",
            answer: "V/C ratio (Volume/Capacity ratio) adalah rasio volume lalu lintas terhadap kapasitas jalan yang menunjukkan tingkat pelayanan jalan. V/C <0.75 = Lancar, 0.75-0.85 = Stabil, >0.85 = Mulai Padat, >1.0 = Macet. Jika proyek menyebabkan V/C ratio >0.85, diperlukan rekomendasi perbaikan seperti pelebaran jalan, penambahan traffic light, atau rekayasa lalu lintas untuk menjaga kelancaran."
        },
        {
            question: "Apakah ANDALALIN harus dibuat oleh konsultan bersertifikat?",
            answer: "Ya, dokumen ANDALALIN harus disusun oleh konsultan yang memiliki: (1) Sertifikat Badan Usaha (SBU) bidang Jasa Konsultansi Transportasi, (2) Tenaga ahli bersertifikat ANDALALIN dari Kementerian Perhubungan atau Asosiasi, (3) Pengalaman penyusunan ANDALALIN yang dapat dibuktikan. Dinas Perhubungan hanya menerima dokumen dari konsultan yang memenuhi kualifikasi ini untuk menjamin kualitas kajian."
        },
        {
            question: "Berapa biaya penyusunan ANDALALIN?",
            answer: "Biaya ANDALALIN bervariasi tergantung: (1) Skala proyek dan luas lahan (properti kecil vs kawasan besar), (2) Kompleksitas lokasi (jalan lokal vs jalan arteri/protokol), (3) Jumlah titik survey traffic counting, (4) Durasi survey (3 hari vs 7 hari), (5) Kebutuhan pemodelan mikrosimulasi. Kisaran umum Rp 15 juta - Rp 75 juta. Untuk estimasi yang akurat untuk proyek Anda, hubungi konsultan ANDALALIN kami untuk konsultasi gratis."
        }
    ],
    "advisor-hukum-lingkungan": [
        {
            question: "Apa peran legal advisor lingkungan untuk perusahaan?",
            answer: "Legal advisor lingkungan membantu perusahaan dalam: (1) Audit kepatuhan regulasi KLH dan Pemda, (2) Review kontrak dengan vendor lingkungan (PPLI, transporter, konsultan), (3) Pendampingan dalam proses penegakan hukum atau sengketa, (4) Advokasi perizinan dan persetujuan lingkungan, (5) Due diligence lingkungan untuk M&A, (6) Penyusunan kebijakan internal environmental compliance, (7) Pelatihan awareness hukum lingkungan untuk manajemen."
        },
        {
            question: "Kapan perusahaan membutuhkan konsultasi hukum lingkungan?",
            answer: "Perusahaan memerlukan legal advisor lingkungan saat: (1) Menghadapi teguran atau sanksi dari KLH/Pemda, (2) Proses merger atau akuisisi (due diligence lingkungan), (3) Sengketa dengan masyarakat atau LSM, (4) Pengurusan perizinan yang kompleks atau bermasalah, (5) Perubahan regulasi yang berdampak signifikan, (6) Kasus pencemaran atau insiden lingkungan, (7) Audit legal compliance untuk investor atau lembaga keuangan."
        },
        {
            question: "Apa yang dimaksud dengan environmental due diligence?",
            answer: "Environmental due diligence adalah kajian hukum dan teknis lingkungan dalam transaksi M&A untuk mengidentifikasi: (1) Risiko legal (kasus hukum, pelanggaran, potensi sanksi), (2) Liabilitas lingkungan (pencemaran lama, kontaminasi tanah/air), (3) Kelengkapan perizinan (AMDAL, PERTEK, izin limbah), (4) Kepatuhan operasional (pengelolaan limbah, emisi, air limbah), (5) Contingent liabilities (klaim potensial, biaya remediasi). Hasil kajian menentukan valuasi dan term & condition transaksi."
        },
        {
            question: "Apa sanksi hukum pelanggaran lingkungan yang bisa dihadapi perusahaan?",
            answer: "Sanksi pelanggaran lingkungan terdiri dari 3 jenis: (1) ADMINISTRATIF: teguran, paksaan pemerintah, pembekuan/pencabutan izin, denda hingga miliaran rupiah, (2) PERDATA: ganti rugi kepada pihak yang dirugikan, biaya pemulihan lingkungan, strict liability (tanggung jawab mutlak), (3) PIDANA: penjara 1-15 tahun dan denda Rp 1-15 miliar sesuai UU 32/2009. Direktur dan manajemen bisa dijerat pidana atas nama korporasi."
        },
        {
            question: "Bagaimana proses penyelesaian sengketa lingkungan di Indonesia?",
            answer: "Penyelesaian sengketa lingkungan dapat melalui: (1) MEDIASI: fasilitasi oleh KLH/Pemda atau mediator independen (win-win solution), (2) ARBITRASE: penyelesaian oleh arbiter yang ditunjuk para pihak (binding decision), (3) PENGADILAN NEGERI: gugatan perdata untuk ganti rugi (class action dimungkinkan), (4) PENGADILAN TATA USAHA NEGARA: gugatan terhadap keputusan pejabat/izin, (5) PENGADILAN PIDANA: penuntutan atas tindak pidana lingkungan. Mediasi adalah opsi tercepat dan paling cost-effective."
        },
        {
            question: "Apa itu strict liability dalam hukum lingkungan?",
            answer: "Strict liability adalah prinsip pertanggungjawaban mutlak dalam hukum lingkungan, di mana pencemar wajib bertanggung jawab dan membayar ganti rugi TANPA PERLU DIBUKTIKAN ADANYA KESALAHAN. Ini berlaku untuk: (1) Usaha yang berdampak besar dan penting (AMDAL), (2) Kegiatan berisiko tinggi (B3, pertambangan, kimia berbahaya), (3) Insiden pencemaran atau kerusakan lingkungan. Perusahaan wajib bayar biaya pemulihan dan ganti rugi meskipun sudah comply dengan regulasi."
        }
    ],
    "program-csr-lingkungan": [
        {
            question: "Apa itu program CSR lingkungan dan mengapa penting untuk PROPER?",
            answer: "Program CSR (Corporate Social Responsibility) lingkungan adalah kegiatan sukarela perusahaan untuk melampaui kepatuhan (beyond compliance) dalam pengelolaan lingkungan dan pemberdayaan masyarakat. CSR lingkungan penting untuk PROPER karena menjadi salah satu kriteria penilaian peringkat Hijau dan Emas. Program CSR yang terstruktur dan berdampak nyata dapat menambah poin signifikan dalam penilaian PROPER KLH."
        },
        {
            question: "Apa saja contoh program CSR lingkungan yang efektif?",
            answer: "Program CSR lingkungan efektif meliputi: (1) Konservasi biodiversitas (reforestasi, perlindungan habitat), (2) Pengelolaan DAS dan watershed management, (3) Program 3R (Reduce, Reuse, Recycle) untuk masyarakat, (4) Bank sampah dan circular economy, (5) Green technology adoption (energi terbarukan), (6) Kampanye kesadaran lingkungan dan edukasi sekolah, (7) Pemberdayaan ekonomi hijau (ekowisata, produk organik), (8) Clean water access untuk komunitas."
        },
        {
            question: "Bagaimana merancang program CSR lingkungan yang berkelanjutan?",
            answer: "Merancang CSR berkelanjutan meliputi tahapan: (1) Pemetaan stakeholder dan kebutuhan komunitas (social mapping), (2) Identifikasi isu lingkungan prioritas di wilayah operasi, (3) Alignment dengan core business dan kompetensi perusahaan, (4) Penetapan tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound), (5) Kemitraan dengan LSM, pemerintah, atau akademisi, (6) Sistem monitoring dan evaluasi dampak, (7) Pelaporan transparan dan komunikasi dengan stakeholder."
        },
        {
            question: "Berapa anggaran yang ideal untuk program CSR lingkungan?",
            answer: "Anggaran CSR lingkungan bervariasi, namun praktik terbaik: (1) UU 40/2007 mengamanatkan 2-3% dari laba bersih untuk sektor tertentu (tambang, SDA), (2) Untuk PROPER Hijau: minimal 5-10% dari biaya operasional lingkungan untuk kegiatan beyond compliance, (3) Untuk PROPER Emas: program CSR yang komprehensif dan berdampak luas (investasi lebih besar). Penting: fokus pada kualitas dan dampak program, bukan hanya nominal anggaran."
        },
        {
            question: "Bagaimana cara mengukur dampak program CSR lingkungan?",
            answer: "Pengukuran dampak CSR lingkungan menggunakan: (1) Indikator output: jumlah pohon ditanam, volume sampah dikelola, jumlah peserta terlatih, (2) Indikator outcome: luas hutan terehabilitasi, pengurangan emisi CO2, peningkatan income masyarakat, (3) Indikator impact: perbaikan kualitas udara/air, biodiversity index, resiliensi ekonomi komunitas, (4) Baseline dan endline survey untuk perbandingan, (5) Third-party verification untuk kredibilitas, (6) SDGs alignment tracking."
        },
        {
            question: "Apa perbedaan CSR, CSV, dan ESG?",
            answer: "CSR (Corporate Social Responsibility) adalah kegiatan filantropi dan community development yang bersifat sukarela. CSV (Creating Shared Value) mengintegrasikan sustainability ke dalam model bisnis untuk menciptakan nilai ekonomi dan sosial simultan. ESG (Environmental, Social, Governance) adalah framework investasi yang menilai kinerja non-finansial perusahaan untuk keputusan investor. CSR = giving back, CSV = business strategy, ESG = performance metrics untuk investor."
        }
    ],
    "pemetaan-peta-resolusi-tinggi": [
        {
            question: "Apa kegunaan pemetaan resolusi tinggi untuk dokumen AMDAL?",
            answer: "Pemetaan resolusi tinggi dalam AMDAL digunakan untuk: (1) Baseline study kondisi existing area proyek, (2) Identifikasi komponen lingkungan (flora, fauna, sungai, pemukiman), (3) Analisis tata guna lahan dan land cover, (4) Pemodelan dispersi dampak (udara, kebisingan, visual), (5) Perencanaan tata letak fasilitas yang minim dampak, (6) Monitoring perubahan lingkungan selama konstruksi, (7) Dokumentasi visual untuk presentasi stakeholder. Peta akurat meningkatkan kualitas kajian AMDAL."
        },
        {
            question: "Apa perbedaan pemetaan drone dan LiDAR?",
            answer: "Pemetaan drone (fotogrametri) menggunakan kamera untuk foto udara yang diolah menjadi orthophoto dan DSM (Digital Surface Model). LiDAR (Light Detection and Ranging) menggunakan laser scanner untuk menghasilkan point cloud 3D dengan akurasi tinggi dan dapat menembus kanopi vegetasi untuk DTM (Digital Terrain Model). Drone lebih ekonomis untuk area <500 ha dan resolusi visual. LiDAR lebih akurat untuk topografi detail, area vegetasi lebat, dan proyek engineering yang butuh presisi tinggi."
        },
        {
            question: "Berapa akurasi pemetaan drone untuk kebutuhan engineering?",
            answer: "Akurasi pemetaan drone untuk engineering tergantung metode: (1) Pemetaan dengan GCP (Ground Control Point): akurasi horizontal ±3-5 cm, vertikal ±5-10 cm, (2) Pemetaan dengan RTK/PPK drone: akurasi horizontal ±2-3 cm, vertikal ±3-5 cm, (3) LiDAR drone: akurasi vertikal ±5 cm, horizontal ±10 cm. Untuk design engineering (FEED, DED), kami rekomendasikan GCP yang cukup (1 GCP per 5 ha) untuk akurasi optimal memenuhi standar SNI pemetaan skala 1:1000."
        },
        {
            question: "Apa saja deliverables dari jasa pemetaan drone?",
            answer: "Deliverables pemetaan drone meliputi: (1) Orthophoto/mosaic foto udara beresolusi tinggi (5-10 cm/pixel), (2) DSM (Digital Surface Model) atau DTM (Digital Terrain Model), (3) Kontur interval 0.5-1 meter, (4) Volume cut & fill calculation, (5) Peta CAD (DWG/DXF) dengan koordinat, (6) File GIS (Shapefile, GeoTIFF) untuk analisis spasial, (7) Model 3D mesh untuk visualisasi, (8) Laporan teknis termasuk metode, akurasi, dan spesifikasi. Format disesuaikan kebutuhan AMDAL/engineering."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk pemetaan drone?",
            answer: "Timeline pemetaan drone: (1) Perencanaan misi dan perizinan FOCA (2-5 hari), (2) Instalasi GCP di lapangan (1-2 hari untuk area 100 ha), (3) Akuisisi data terbang drone (1-3 hari tergantung cuaca dan luas), (4) Processing data dan georeferencing (3-7 hari), (5) Quality control dan penyusunan deliverables (2-3 hari). Total: 2-3 minggu untuk area <500 ha. Untuk proyek urgent, kami bisa fast-track dengan additional resource."
        },
        {
            question: "Apakah diperlukan izin untuk operasional drone pemetaan?",
            answer: "Ya, operasional drone komersial memerlukan: (1) Sertifikat pilot drone dari FOCA (Flight Operation Certificate of Airworthiness), (2) Izin terbang per misi dari Kemenhub/AirNav Indonesia, (3) Koordinasi dengan Lanud terdekat jika area restricted airspace, (4) Izin lokasi dari pemilik lahan atau pemerintah setempat. Tim pemetaan drone kami sudah memiliki pilot bersertifikat dan mengurus seluruh perizinan untuk memastikan operasional legal dan aman."
        }
    ],
    "feasibility-study": [
        {
            question: "Apa itu feasibility study dan mengapa penting sebelum investasi?",
            answer: "Feasibility study (studi kelayakan) adalah analisis komprehensif untuk menilai viabilitas teknis, finansial, ekonomi, dan lingkungan suatu proyek sebelum investasi besar dilakukan. Penting karena: (1) Mengidentifikasi risiko dan opportunity sebelum commit capital, (2) Memberikan data untuk keputusan go/no-go, (3) Menghitung proyeksi ROI, NPV, IRR untuk bankability, (4) Basis untuk mendapatkan pembiayaan dari bank/investor, (5) Menghindari kerugian akibat proyek yang tidak feasible. FS yang baik menghemat biaya dan waktu jangka panjang."
        },
        {
            question: "Apa saja komponen dalam feasibility study lengkap?",
            answer: "Komponen feasibility study lengkap meliputi: (1) Market study: analisis demand-supply, target market, kompetitor, (2) Technical study: teknologi, layout, kapasitas, spesifikasi engineering, (3) Environmental study: AMDAL/UKL-UPL, compliance regulasi lingkungan, (4) Financial analysis: CAPEX, OPEX, cashflow projection, (5) Economic analysis: NPV, IRR, Payback Period, Profitability Index, (6) Risk assessment: identifikasi risk dan mitigation strategy, (7) Legal & regulatory: perizinan, struktur kepemilikan, compliance."
        },
        {
            question: "Berapa lama waktu penyusunan feasibility study?",
            answer: "Durasi penyusunan feasibility study bervariasi: (1) Pre-FS atau preliminary study: 1-2 bulan untuk screening awal, (2) Feasibility study (FS) standard: 3-4 bulan untuk proyek skala menengah, (3) Detailed FS atau bankable FS: 4-6 bulan untuk proyek besar/kompleks yang butuh pembiayaan eksternal. Waktu tergantung kompleksitas proyek, ketersediaan data, jumlah stakeholder interview, dan requirement dari investor/bank yang akan didekati."
        },
        {
            question: "Apa perbedaan Pre-FS, FS, dan FEED?",
            answer: "Pre-FS (Preliminary Feasibility Study) adalah studi awal untuk screening konsep proyek, akurasi ±30-40%. FS (Feasibility Study) adalah kajian komprehensif untuk keputusan investasi, akurasi ±20-30%, menghasilkan laporan bankable untuk pembiayaan. FEED (Front End Engineering Design) adalah tahap engineering detail setelah FS approved, menghasilkan spesifikasi teknis, P&ID, equipment list, dan estimate biaya akurat ±10-15% untuk tender konstruksi. Urutan: Pre-FS → FS → FEED → Detail Engineering → Construction."
        },
        {
            question: "Bagaimana cara menghitung NPV dan IRR dalam feasibility study?",
            answer: "NPV (Net Present Value) menghitung nilai sekarang dari cashflow masa depan dikurangi investasi awal. Formula: NPV = Σ (CFt / (1+r)^t) - Initial Investment. Jika NPV > 0, proyek layak. IRR (Internal Rate of Return) adalah discount rate di mana NPV = 0, menunjukkan tingkat return investasi. Jika IRR > WACC (Weighted Average Cost of Capital), proyek menguntungkan. Dalam FS, kami menggunakan DCF (Discounted Cash Flow) model dengan skenario best/base/worst case untuk sensitivity analysis."
        },
        {
            question: "Apakah feasibility study diperlukan untuk pengajuan pinjaman bank?",
            answer: "Ya, untuk project financing atau corporate loan >Rp 50 miliar, bank komersial dan lembaga pembiayaan (IFC, ADB, JICA) mewajibkan bankable feasibility study sebagai bagian dari loan application. FS bankable harus mencakup: (1) Independent market study, (2) Technical specification dan CAPEX estimate yang reasonable, (3) Financial model 10-20 tahun dengan sensitivity, (4) Risk assessment dan mitigation, (5) Compliance legal dan lingkungan (AMDAL), (6) Third-party review atau certification untuk kredibilitas tinggi."
        }
    ]
};

/**
 * Get FAQs for a specific service
 */
export const getFAQsForService = (serviceSlug: string): FAQItem[] => {
    return serviceFAQs[serviceSlug] || [];
};

/**
 * Check if service has FAQs
 */
export const serviceHasFAQs = (serviceSlug: string): boolean => {
    const faqs = serviceFAQs[serviceSlug];
    return faqs !== undefined && faqs.length > 0;
};
