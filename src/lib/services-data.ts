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
    blogTags?: string[];
}

export const services: Service[] = [
    {
        slug: "amdal-ukl-upl",
        title: "AMDAL / UKL-UPL",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Jasa penyusunan dokumen AMDAL, UKL-UPL, ANDAL, RKL-RPL sebagai persyaratan persetujuan lingkungan dan izin berusaha sesuai regulasi KLHK untuk berbagai sektor industri.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan konsultan AMDAL dan UKL-UPL profesional untuk penyusunan dokumen persetujuan lingkungan yang diwajibkan bagi kegiatan usaha berpotensi dampak penting. Mencakup ANDAL, RKL-RPL, KA-ANDAL, serta konsultasi publik sesuai UU 32/2009, PP 22/2021, dan Permen LHK 4/2021. Dokumen ini menjadi prasyarat penerbitan SKKLH, izin lingkungan, dan OSS untuk berbagai sektor: pertambangan, industri, properti, infrastruktur, energi, dan agribisnis.",
        manfaat: [
            "Kepatuhan Regulasi: Memenuhi kewajiban hukum UU PPLH, PP 22/2021, dan regulasi KLHK untuk izin berusaha.",
            "Mitigasi Dampak: Identifikasi dampak penting dan strategi mitigasi lingkungan sejak fase perencanaan proyek.",
            "Penerimaan Masyarakat: Konsultasi publik yang efektif untuk mendapatkan dukungan dan keterlibatan masyarakat.",
            "Kelancaran Operasional: Mencegah sanksi administratif, pidana lingkungan, penghentian operasi, dan sengketa.",
            "Nilai Tambah: Meningkatkan profil keberlanjutan perusahaan dan akses ke pembiayaan hijau."
        ],
        tahapanProses: [
            "Pelingkupan dan penyusunan KA-ANDAL untuk menentukan dampak penting yang akan dikaji",
            "Pengumpulan data rona lingkungan awal (fisik-kimia, biologi, sosial-ekonomi-budaya) dan analisis ANDAL",
            "Penyusunan RKL-RPL, konsultasi publik, finalisasi dokumen, dan pengajuan ke Komisi Penilai AMDAL"
        ],
        ruangLingkup: [
            "Penyusunan dokumen AMDAL lengkap: KA-ANDAL, ANDAL, RKL-RPL untuk proyek skala besar",
            "Penyusunan UKL-UPL untuk kegiatan usaha tidak wajib AMDAL",
            "SPPL untuk usaha mikro dan kecil",
            "Kajian Dampak Lingkungan sesuai standar internasional IFC, JICA, ADB",
            "Kajian rona lingkungan awal: kualitas udara, air, tanah, kebisingan, biota, dan sosial-ekonomi",
            "Analisis dampak: prakiraan dampak, evaluasi dampak penting, dan studi daya dukung lingkungan",
            "Konsultasi publik, keterlibatan pemangku kepentingan, dan FGD dengan masyarakat terdampak",
            "Pendampingan sidang Komisi Penilai AMDAL dan revisi dokumen",
            "Perolehan SKKLH dan integrasi dengan sistem OSS"
        ],
        syaratKetentuan: [
            "Kesesuaian jenis usaha dengan lampiran PP 22/2021 atau Permen LHK 4/2021 tentang daftar wajib AMDAL/UKL-UPL",
            "Legalitas perusahaan: akta pendirian, NPWP, NIB dari OSS",
            "Data teknis proyek: lokasi dengan koordinat GPS, layout, kapasitas produksi, dan proses operasional",
            "Izin lokasi atau rekomendasi tata ruang dari Pemda",
            "Ketersediaan data lingkungan atau kesediaan untuk survey lapangan"
        ],
        hasilKeluaran: [
            "Dokumen AMDAL atau UKL-UPL yang telah direview dan memenuhi standar Komisi Penilai",
            "SKKLH atau Persetujuan Lingkungan dari KLHK/Dinas Lingkungan Hidup",
            "Rekomendasi program pengelolaan dan pemantauan lingkungan",
            "Laporan konsultasi publik dan strategi komunikasi risiko",
            "Integrasi dengan sistem OSS untuk penerbitan izin berusaha"
        ],
        blogTags: ["AMDAL", "UKL-UPL", "Perizinan", "Regulasi"]
    },
    {
        slug: "audit-lingkungan-hidup",
        title: "Audit Lingkungan Hidup",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Jasa audit lingkungan hidup wajib dan sukarela untuk menilai kepatuhan regulasi KLHK, efektivitas sistem manajemen lingkungan ISO 14001, dan persiapan penilaian PROPER.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan audit lingkungan profesional untuk evaluasi kepatuhan terhadap peraturan lingkungan hidup, audit sistem manajemen ISO 14001, audit uji tuntas untuk merger dan akuisisi, audit PROPER untuk peringkat hijau/emas, dan analisis kesenjangan sesuai standar KLHK. Mencakup audit dokumen perizinan (AMDAL, UKL-UPL, PERTEK), audit operasional (limbah B3, air limbah, emisi udara), evaluasi IPAL dan TPS B3, serta rekomendasi perbaikan untuk meningkatkan kinerja lingkungan dan kepatuhan hukum.",
        manfaat: [
            "Jaminan Kepatuhan: Verifikasi kepatuhan terhadap UU PPLH, peraturan daerah, dan izin lingkungan untuk menghindari sanksi.",
            "Mitigasi Risiko: Identifikasi ketidaksesuaian, kewajiban lingkungan, dan kesenjangan untuk manajemen risiko yang proaktif.",
            "Keunggulan Operasional: Menemukan inefisiensi dalam pengelolaan limbah, energi, dan sumber daya untuk pengurangan biaya.",
            "Kesiapan PROPER: Persiapan penilaian PROPER KLHK untuk mencapai peringkat Hijau/Emas dan reputasi berkelanjutan.",
            "Dukungan Uji Tuntas: Audit lingkungan untuk transaksi merger dan akuisisi serta pembiayaan hijau.",
            "Sertifikasi ISO 14001: Mendukung sertifikasi dan audit sistem manajemen lingkungan ISO 14001:2015."
        ],
        tahapanProses: [
            "Desk review: Audit dokumen perizinan lingkungan (AMDAL, PERTEK, UKL-UPL), laporan pelaksanaan RKL-RPL, dan compliance history",
            "Site inspection: Inspeksi lapangan fasilitas IPAL, TPS B3, sumber emisi, monitoring berbasis checklist compliance, dan interview dengan HSE officer",
            "Gap analysis & reporting: Identifikasi temuan audit (non-compliance findings), root cause analysis, penyusunan corrective action plan, dan laporan audit sesuai standar ISO 19011"
        ],
        ruangLingkup: [
            "Audit kepatuhan regulasi: verifikasi terhadap UU 32/2009, PP 22/2021, Permen LHK, dan peraturan daerah",
            "Audit dokumen lingkungan: AMDAL, UKL-UPL, PERTEK, izin pembuangan limbah, dan laporan RKL-RPL",
            "Audit operasional: pengelolaan limbah B3, air limbah (IPAL), emisi udara (cerobong), limbah padat (TPA), dan kebisingan",
            "Evaluasi sistem manajemen lingkungan: kesesuaian dengan ISO 14001, OHSAS 18001, atau SMK3",
            "Audit PROPER: penilaian kriteria penataan, efisiensi energi, pengembangan masyarakat, dan melampaui kepatuhan",
            "Uji tuntas lingkungan: penilaian lokasi, investigasi lahan terkontaminasi, dan evaluasi kewajiban untuk merger dan akuisisi",
            "Audit energi dan penilaian jejak karbon untuk target nol emisi bersih",
            "Pengujian parameter laboratorium: air limbah, emisi udara, limbah B3 sesuai SNI dan metode standar",
            "Tindakan korektif dan preventif: rekomendasi perbaikan sistem dan pemantauan rencana perbaikan"
        ],
        syaratKetentuan: [
            "Kelengkapan dokumen perizinan lingkungan: AMDAL/UKL-UPL, PERTEK, izin limbah yang masih berlaku",
            "Akses penuh ke fasilitas operasional: IPAL, TPS B3, area produksi, dan area penyimpanan bahan kimia",
            "Ketersediaan personel kunci: Manajer HSE, Petugas Lingkungan, dan operator fasilitas lingkungan",
            "Data historis: laporan pemantauan RKL-RPL, hasil uji lab, dan laporan insiden (jika ada)",
            "Komitmen manajemen untuk transparansi dan tindak lanjut tindakan perbaikan"
        ],
        hasilKeluaran: [
            "Laporan audit lingkungan hidup komprehensif dengan ringkasan eksekutif dan temuan terperinci",
            "Daftar periksa audit kepatuhan berdasarkan regulasi KLHK dan standar ISO 14001",
            "Laporan analisis kesenjangan: identifikasi ketidaksesuaian, observasi, dan peluang perbaikan",
            "Rencana Tindakan Perbaikan dengan timeline, penanggung jawab, dan indikator kinerja untuk pemantauan",
            "Sertifikat penyelesaian audit dan peringkat kepatuhan (jika berlaku)",
            "Rekomendasi untuk penilaian PROPER dan peningkatan keberlanjutan"
        ],
        blogTags: ["Audit", "Lingkungan", "PROPER", "Kepatuhan"]
    },
    {
        slug: "pengelolaan-limbah-b3",
        title: "Pengelolaan Limbah B3",
        group: "Limbah & CSR",
        category: "sipa",
        shortDescription: "Jasa pengelolaan limbah B3 terintegrasi mulai dari identifikasi, klasifikasi, penyimpanan TPS B3, pengangkutan dengan transporter berizin, hingga pengolahan akhir di fasilitas PPLI atau incinerator sesuai PP 22/2021.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan konsultan dan pengelolaan limbah B3 secara komprehensif mencakup identifikasi, pelabelan, pengemasan, penyimpanan sementara di TPS B3, pengangkutan dengan transporter bersertifikat KLHK, hingga pengolahan akhir di fasilitas PPLI, incinerator, atau pusat daur ulang sesuai PP 22/2021, PP 101/2014, dan Permen LHK 6/2021. Melayani berbagai jenis limbah B3: oli bekas, lumpur IPAL, kemasan bekas B3, aki bekas, lampu TL/mercury, limbah medis, limbah elektronik, pelarut, lumpur logam berat, asbestos, dan limbah konstruksi B3. Dilengkapi dengan sistem manifest elektronik SIMPEL, pelaporan triwulanan, dan dokumentasi kepatuhan untuk audit PROPER.",
        manfaat: [
            "Keamanan K3LH: Mencegah kecelakaan kerja, paparan toksis, bahaya kebakaran, dan dampak kesehatan akibat kontak dengan limbah B3.",
            "Kepatuhan Hukum: Pengelolaan oleh transporter dan PPLI berizin resmi KLHK untuk menghindari sanksi pidana UU 32/2009.",
            "Perlindungan Lingkungan: Mencegah pencemaran tanah, pencemaran air tanah, dan kerusakan ekosistem akibat pembuangan tidak tepat.",
            "Optimasi Biaya: Solusi pengolahan efisien sesuai karakteristik limbah (pemulihan, daur ulang, pembuangan) dengan harga kompetitif.",
            "Kepatuhan PROPER: Memenuhi kriteria ketaatan PROPER dan mendukung kategori melampaui kepatuhan untuk peringkat hijau/emas.",
            "Sistem Penelusuran: Pelacakan manifest limbah dari awal hingga akhir untuk jejak audit yang transparan."
        ],
        tahapanProses: [
            "Penilaian limbah: Identifikasi karakteristik B3 (mudah terbakar, beracun, korosif, reaktif), klasifikasi kode limbah PP 101/2014, dan analisis laboratorium (uji TCLP)",
            "Penanganan dan penyimpanan: pengemasan limbah sesuai standar UN, pelabelan dan penandaan, penyimpanan di TPS B3 dengan penampungan sekunder dan peralatan tumpahan",
            "Transportasi dan pengolahan: koordinasi transporter bersertifikat, penerbitan manifest elektronik SIMPEL, pengangkutan ke PPLI/incinerator, dan sertifikat pembuangan"
        ],
        ruangLingkup: [
            "Karakterisasi dan klasifikasi limbah B3 sesuai PP 101/2014 (kode limbah seri A dan B)",
            "Desain dan konsultasi TPS B3: area berpagar, sistem pemadam kebakaran, ventilasi, rencana tanggap darurat",
            "Koordinasi dengan transporter bersertifikat dan PPLI/incinerator berizin KLHK untuk pembuangan",
            "Penanganan berbagai jenis: oli bekas, lumpur berminyak, limbah elektronik, limbah medis, asbestos, aki bekas, limbah pelarut, lumpur logam berat",
            "Minimisasi limbah dan program 3R: pengurangan limbah, penggunaan kembali, daur ulang untuk ekonomi sirkular",
            "Manifest elektronik dan pelaporan SIMPEL: penerbitan manifest elektronik dan pelaporan triwulanan ke KLHK",
            "Pelatihan petugas: pelatihan Penanggung Jawab Operasional Limbah B3 dan operator TPS B3",
            "Tanggap darurat bahan berbahaya: konsultasi tanggap darurat tumpahan B3 dan prosedur penanganan tumpahan"
        ],
        syaratKetentuan: [
            "Data limbah: jenis, volume, karakteristik fisik-kimia, kode limbah, dan MSDS (Material Safety Data Sheet)",
            "Hasil uji laboratorium: TCLP (Toxicity Characteristic Leaching Procedure), flash point, pH sesuai Permen LHK",
            "Dokumen perizinan: izin lingkungan, PERTEK pengelolaan limbah B3, atau rencana TPS B3 (jika ada)",
            "Sertifikasi kompetensi: Penanggung Jawab Operasional Limbah B3 dan petugas K3 Limbah B3 sesuai Permen LHK No. 6/2021",
            "Akses ke area penyimpanan limbah dan koordinasi dengan HSE department perusahaan"
        ],
        hasilKeluaran: [
            "Manifest limbah B3 (elektronik dan hardcopy) untuk setiap batch pengangkutan",
            "Sertifikat pengolahan/pembuangan dari PPLI atau incinerator sebagai bukti pengelolaan final",
            "Laporan triwulanan SIMPEL untuk pelaporan kepatuhan ke KLHK",
            "Dokumentasi jejak audit limbah: foto, timbangan, dan rekaman rantai pengamanan",
            "Rekomendasi minimisasi limbah dan strategi pengurangan biaya"
        ],
        blogTags: ["Limbah B3", "Pengelolaan Limbah", "B3", "Lingkungan"]
    },
    {
        slug: "pertek-emisi",
        title: "PERTEK Emisi",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Jasa penyusunan PERTEK Emisi untuk pengendalian pencemaran udara dari cerobong, genset, boiler, incinerator: pengujian emisi cerobong, evaluasi sistem pengendalian polusi udara, pemodelan dispersi, kepatuhan baku mutu emisi sesuai Permen LHK untuk SLO.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyusunan PERTEK Emisi untuk pengendalian pencemaran udara dari sumber tidak bergerak sesuai PP 22/2021 dan Permen LHK 13/2021. Mencakup pengujian emisi cerobong, pemantauan udara ambien, pemodelan dispersi AERMOD, evaluasi sistem pengendalian polusi udara (scrubber, baghouse, ESP, cyclone), dan dokumentasi teknis untuk persetujuan Dinas Lingkungan Hidup. Melayani sumber emisi: boiler, genset, furnace, incinerator, kiln, hot mix plant. Wajib untuk SLO (Sertifikat Laik Operasi) dan kepatuhan PROPER.",
        manfaat: [
            "Kepatuhan Hukum: Memenuhi kewajiban PERTEK Emisi PP 22/2021 dan Permen LHK 13/2021 untuk izin operasional dan SLO.",
            "Pengendalian Kualitas Udara: Memastikan emisi cerobong (SO₂, NOx, partikulat, CO, opasitas) memenuhi baku mutu untuk kesehatan publik.",
            "Optimasi Sistem: Evaluasi kinerja sistem pengendalian polusi udara untuk efisiensi penyisihan maksimal.",
            "Persyaratan SLO: Syarat wajib Sertifikat Laik Operasi dari Dinas Perindag dan izin operasional dari Pemda."
        ],
        tahapanProses: [
            "Survey sumber emisi: identifikasi sumber (cerobong, genset, boiler), dimensi stack, konsumsi bahan bakar, jam operasional",
            "Pengujian emisi dan pemodelan: pengambilan sampel isokinetik sesuai SNI, pemantauan udara ambien, pemodelan dispersi AERMOD untuk penilaian dampak",
            "Dokumentasi teknis: penyusunan dokumen PERTEK (alur proses, desain sistem pengendalian udara, perhitungan emisi), pengajuan ke Dinas Lingkungan Hidup untuk persetujuan"
        ],
        ruangLingkup: [
            "Pengujian emisi cerobong (pengambilan sampel isokinetik): SO₂, NOx, CO, partikulat (TSP/PM10), opasitas, VOC, H₂S, HCl, logam berat",
            "Pemantauan kualitas udara ambient: PM10, PM2.5, SO₂, NO₂, CO, O₃, HC sesuai PP 22/2021 dan Indeks Standar Pencemar Udara",
            "Evaluasi sistem pengendalian udara: scrubber (basah/kering), filter baghouse, separator cyclone, ESP, adsorpsi karbon, biofilter",
            "Pemodelan dispersi: AERMOD, ISCST3, CALPUFF untuk prediksi konsentrasi di permukaan tanah dan radius dampak",
            "Kepatuhan baku mutu: verifikasi terhadap Permen LHK atau standar sektor-spesifik (tekstil, sawit, semen, pulp)",
            "Dokumentasi PERTEK: laporan teknis, inventarisasi emisi, rencana pencegahan, pengajuan ke Dinas Lingkungan Hidup"
        ],
        syaratKetentuan: [
            "Data sumber emisi: jenis cerobong/genset, kapasitas (kW/ton), bahan bakar (solar/gas/batubara), tinggi stack, diameter, laju alir",
            "Hasil uji emisi terbaru (jika ada): laporan pengujian stack dengan parameter sesuai Permen LHK dari lab terakreditasi KAN",
            "Dokumen sistem pengendalian udara: gambar desain, spesifikasi teknis scrubber/baghouse/ESP, dan manual operasional",
            "Tata letak lokasi dan GPS: koordinat lokasi cerobong, titik pemantauan ambient, reseptor terdekat (pemukiman, sekolah)"
        ],
        hasilKeluaran: [
            "Dokumen PERTEK Emisi lengkap: laporan teknis, data emisi, evaluasi sistem pengendalian udara, pernyataan kepatuhan",
            "Persetujuan Teknis Emisi dari Dinas Lingkungan Hidup atau KLHK (untuk skala nasional/strategis)",
            "Laporan pengujian emisi stack dengan CoA dari laboratorium terakreditasi KAN/ISO 17025",
            "Output pemodelan dispersi: kontur sebaran polutan, peta konsentrasi di permukaan tanah, penilaian dampak"
        ],
        blogTags: ["Emisi", "Udara", "Pencemaran", "Lingkungan"]
    },
    {
        slug: "pertek-air-limbah",
        title: "PERTEK Air Limbah",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Jasa penyusunan PERTEK Air Limbah untuk IPAL industri/domestik: pengujian kualitas efluen, evaluasi kinerja IPAL, kepatuhan baku mutu BOD COD TSS, izin pembuangan ke badan air atau sistem daur ulang air.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyusunan PERTEK Air Limbah untuk legalitas pembuangan efluen IPAL ke badan air (sungai, laut, drainase) atau sistem daur ulang sesuai PP 22/2021, Permen LHK 68/2016, dan baku mutu sektor-spesifik. Mencakup pengujian efluen, audit kinerja IPAL (activated sludge, anaerobic, MBR, SBR, biofilter, RO), perhitungan waktu retensi, neraca massa, dan dokumentasi teknis untuk persetujuan Dinas Lingkungan Hidup. Melayani air limbah: domestik, industri (tekstil, sawit, pulp, pengolahan makanan, electroplating), rumah sakit. Wajib untuk izin pembuangan, SLO, PROPER.",
        manfaat: [
            "Izin Pembuangan: Izin resmi membuang air limbah ke badan air atau sistem drainase kota sesuai regulasi.",
            "Kepatuhan Baku Mutu: Memastikan efluen IPAL memenuhi standar BOD, COD, TSS, pH, ammonia, minyak-lemak, logam berat.",
            "Optimasi IPAL: Evaluasi efisiensi penyisihan, perbaikan masalah operasional, dan rekomendasi peningkat an sistem.",
            "Dukungan Daur Ulang Air: Mendukung daur ulang air, pembuangan cairan nol, dan konservasi air untuk keberlanjutan.",
        ],
        tahapanProses: [
            "Karakterisasi air limbah: pengambilan sampel inlet dan outlet IPAL, analisis parameter baku mutu (BOD, COD, TSS, pH, NH₃-N, minyak-lemak, logam berat), perhitungan beban limbah",
            "Audit kinerja IPAL: evaluasi teknologi (pengolahan primer, sekunder, tersier), perhitungan waktu retensi dan usia lumpur, neraca massa, pemecahan masalah operasional",
            "Dokumentasi PERTEK: penyusunan laporan teknis (diagram alir, kriteria desain, matriks kepatuhan), penilaian dampak, pengajuan ke Dinas Lingkungan Hidup"
        ],
        ruangLingkup: [
            "Pengujian kualitas efluen: BOD, COD, TSS, TDS, pH, ammonia, nitrat, fosfat, sulfida, minyak dan lemak, fenol, logam berat (Cr, Pb, Cu, Zn), coliform",
            "Evaluasi kinerja IPAL: activated sludge, extended aeration, UASB, ABR, biofilter aerobik, SBR, MBR, RO, ozonasi",
            "Kepatuhan baku mutu: sektor industri (Permen LHK 68/2016 atau sektor-spesifik), domestik (PP 22/2021), rumah sakit",
            "Tinjauan desain hidrolik: waktu detensi, rasio F/M, MLSS, DO, SVI, usia lumpur, dan kriteria desain IPAL",
            "Dampak terhadap badan air penerima: perhitungan pengenceran, kapasitas asimilasi, dampak terhadap kualitas air badan penerima",
            "Laporan teknis PERTEK: diagram alir, neraca massa, proses pengolahan, koordinat titik pembuangan, rencana mitigasi",
            "Kelayakan daur ulang air: daur ulang untuk menara pendingin, hidran kebakaran, irigasi landscape, proses industri (ekonomi sirkular)",
            "Rencana pengelolaan lumpur: dehidrasi, pengomposan, pembuangan ke TPA, atau pengolahan bersama untuk pembuangan lumpur IPAL"
        ],
        syaratKetentuan: [
            "Data IPAL: kapasitas (m³/hari), teknologi pengolahan, diagram alir, gambar desain (as-built atau rencana induk)",
            "Hasil uji lab terbaru: laporan pengujian efluen dengan CoA dari laboratorium terakreditasi KAN (jika ada)",
            "Karakteristik air limbah: debit harian, beban COD/BOD, variasi aliran (puncak/rata-rata), sumber limbah (proses, domestik, pendinginan)",
            "Titik pembuangan: koordinat GPS outlet, nama badan air penerima (sungai/laut), atau sistem drainase/IPAL komunal",
            "Izin lingkungan: AMDAL/UKL-UPL sebagai dasar penerbitan PERTEK"
        ],
        hasilKeluaran: [
            "Dokumen PERTEK Air Limbah: laporan teknis, desain IPAL, data efluen, evaluasi kepatuhan, dampak  badan air penerima",
            "Persetujuan Teknis Pembuangan Air Limbah dari Dinas Lingkungan Hidup atau KLHK (sesuai kewenangan)",
            "Laporan pengujian efluen dengan CoA dari laboratorium lingkungan terakreditasi KAN/ISO 17025",
            "Laporan kinerja IPAL: temuan pemecahan masalah, perhitungan efisiensi, rekomendasi perbaikan",
            "SOP: pemantauan efluen, teknik pengambilan sampel, operasi dan perawatan IPAL, tanggap darurat"
        ],
        blogTags: ["Air Limbah", "IPAL", "Lingkungan", "Pencemaran"]
    },
    {
        slug: "pertek-pengelolaan-limbah-b3",
        title: "PERTEK Pengelolaan Limbah B3",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Jasa penyusunan PERTEK Pengelolaan Limbah B3 untuk izin operasional TPS B3: desain fasilitas penyimpanan, area berpagar, sistem pemadam kebakaran, rambu keselamatan, SOP pengelolaan, sesuai Permen LHK untuk legalitas penyimpanan limbah berbahaya.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyusunan PERTEK Pengelolaan Limbah B3 untuk legalitas operasional TPS B3 sesuai PP 22/2021 dan Permen LHK 6/2021. Mencakup desain teknis fasilitas TPS B3 (area berpagar, penampung tumpahan, sistem pemadam kebakaran, ventilasi, rambu keselamatan), penyusunan SOP pengelolaan dan tanggap darurat, penilaian kompatibilitas limbah, dan pengajuan ke KLHK/Dinas Lingkungan Hidup untuk persetujuan. Dokumen ini wajib untuk perusahaan yang menyimpan limbah B3 sebelum diserahkan ke transporter/PPLI, mendukung kepatuhan PROPER dan audit lingkungan.",
        manfaat: [
            "Izin Penyimpanan Resmi: Legalitas untuk menyimpan limbah B3 di TPS perusahaan sesuai PP 22/2021 dan menghindari sanksi penyimpanan ilegal.",
            "Kepatuhan Keselamatan: Memastikan fasilitas TPS B3 memenuhi standar keselamatan K3 (penampung tumpahan, perlindungan kebakaran, peralatan darurat, APD).",
            "Kepatuhan Regulasi: Menghindari sanksi administratif dan pidana akibat pengelolaan limbah B3 tanpa PERTEK yang sah.",
            "Sistem Pengelolaan Terstruktur: SOP pengelolaan limbah B3 yang jelas, rencana tanggap darurat, dan pencatatan untuk penelusuran.",
            "Dukungan PROPER: Memenuhi kriteria ketaatan pengelolaan limbah B3 untuk penilaian PROPER biru/hijau/emas."
        ],
        tahapanProses: [
            {
                title: "Site Assessment",
                description: "Peninjauan lokasi rencana atau eksisting TPS B3: site layout, drainage, akses emergency, jarak ke bangunan, water source untuk fire hydrant."
            },
            {
                title: "Desain TPS B3",
                description: "Perancangan fasilitas sesuai karakteristik limbah (flammable, toxic, corrosive, reactive): bunded area, secondary containment, roof/enclosed area, ventilation, fire suppression, safety shower, eye wash."
            },
            {
                title: "SOP Pengelolaan",
                description: "Penyusunan Standard Operating Procedure: waste segregation, labeling & marking, FIFO system, transfer ke transporter, emergency spill response, PPE requirement."
            },
            {
                title: "Penyusunan Dokumen Teknis",
                description: "Dokumentasi technical specification: site plan, floor plan, drainage system, fire protection layout, material compatibility chart, MSDS, capacity calculation."
            },
            {
                title: "Verifikasi Lapangan",
                description: "Pendampingan saat site inspection dan verifikasi lapangan oleh petugas DLH/KLHK untuk compliance check dan approval."
            },
            {
                title: "Penerbitan PERTEK",
                description: "Submission dokumen dan follow-up proses administrasi untuk penerbitan PERTEK Pengelolaan Limbah B3 dari KLHK atau Dinas Lingkungan Hidup."
            }
        ],
        ruangLingkup: [
            "Desain teknis bangunan TPS B3: rencana lokasi, denah lantai, desain area berpagar, penampungan sekunder, struktur beratap/tertutup",
            "Sistem proteksi kebakaran: sistem pemadam (sprinkler/foam), alat pemadam kebakaran, hidran, sistem alarm, jalur evakuasi darurat",
            "Peralatan keselamatan dan rambu: shower keselamatan, stasiun pencuci mata, peralatan tumpahan, stasiun APD, rambu peringatan, tampilan MSDS",
            "Penilaian kompatibilitas limbah: rencana pemisahan untuk limbah tidak kompatibel (mudah terbakar vs korosif, pengoksidasi vs organik)",
            "Perhitungan kapasitas dan tata letak: kapasitas penyimpanan sesuai volume limbah, sistem rak, penumpukan drum/kontainer, jarak gang",
            "SOP pengelolaan limbah B3: prosedur pelabelan dan penandaan, sistem FIFO, pencatatan limbah masuk/keluar, pelacakan manifest",
            "Rencana tanggap darurat: prosedur penanganan tumpahan, penanganan insiden bahan berbahaya, rute evakuasi, daftar kontak darurat",
            "Sistem drainase dan penampungan: lantai kedap air, pompa sumur, tangki penampungan untuk penampungan tumpahan",
            "Sistem ventilasi dan pembuangan: ventilasi mekanis untuk uap beracun/mudah terbakar (jika diperlukan)",
            "Rencana pelatihan: pelatihan Penanggung Jawab Operasional Limbah B3 dan operator TPS sesuai Permen LHK No. 6/2021",
            "Proses pengajuan dan persetujuan: pendampingan pengajuan PERTEK ke KLHK atau Dinas Lingkungan Hidup dan verifikasi lokasi"
        ]
    },
    {
        slug: "pertek-andalalin",
        title: "PERTEK ANDALALIN",
        group: "Persetujuan Teknis (PERTEK)",
        category: "sipa",
        shortDescription: "Jasa penyusunan PERTEK ANDALALIN untuk menilai dampak lalu lintas, perhitungan volume lalu lintas, analisis V/C ratio, bangkitan perjalanan, desain sirkulasi parkir, rencana manajemen lalu lintas sesuai Permen Perhubungan untuk IMB/PBG.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyusunan PERTEK ANDALALIN untuk menilai dan mitigasi dampak lalu lintas akibat pembangunan atau operasional gedung, kawasan, mall, apartemen, perkantoran, kawasan industri. Mencakup perhitungan lalu lintas (volume, kecepatan, kepadatan), analisis bangkitan-tarikan perjalanan, kinerja simpang (V/C ratio, tundaan, panjang antrian), desain sirkulasi internal dan akses, analisis kebutuhan parkir, rencana manajemen lalu lintas (rambu, marka, traffic light), dan rekomendasi Dinas Perhubungan. Wajib untuk Persetujuan Bangunan Gedung, IMB, izin operasional mall/properti sesuai UU Lalu Lintas dan Angkutan Jalan.",
        manfaat: [
            "Kelancaran Akses: Menjamin akses keluar-masuk lokasi tidak mengganggu arus lalu lintas eksisting dan keselamat an operasional.",
            "Keselamatan Publik: Mencegah kecelakaan lalu lintas, kemacetan, dan konflik pergerakan kendaraan-pejalan kaki.",
            "Izin Bangunan: Syarat wajib untuk penerbitan PBG/IMB gedung fungsi tertentu (mall, apartemen, perkantoran, industri) sesuai regulasi.",
            "Traffic Management Optimization: Rekayasa lalu lintas yang efektif (sirkulasi, parkir, traffic signage) untuk kelancaran operasional."
        ],
        tahapanProses: [
            {
                title: "Survey Lalu Lintas",
                description: "Perhitungan lalu lintas pada jam puncak (pagi, siang, sore): volume kendaraan, kecepatan, komposisi kendaraan (kendaraan ringan, berat, sepeda motor)."
            },
            {
                title: "Inventarisasi Jalan",
                description: "Pengukuran geometrik jalan (lebar jalan, lebar bahu, median), kondisi perkerasan, fasilitas perlengkapan jalan eksisting (rambu, marka, penyeberangan zebra, lampu lalu lintas)."
            },
            {
                title: "Analisis dan Simulasi Kinerja",
                description: "Analisis bangkitan perjalanan, distribusi, rasio V/C, tundaan, panjang antrian kondisi eksisting, kondisi tanpa tindakan, dan skenario dengan tindakan."
            },
            {
                title: "Rekomendasi Manajemen Lalu Lintas",
                description: "Perancangan sirkulasi internal (titik masuk-keluar), tata letak parkir, rambu lalu lintas, marka jalan, fasilitas pejalan kaki, penyeberangan, lampu lalu lintas (jika diperlukan)."
            },
            {
                title: "Sidang Dinas Perhubungan",
                description: "Pemaparan hasil kajian ANDALALIN di hadapan tim evaluasi Dinas Perhubungan dan pemangku kepentingan terkait untuk verifikasi dan persetujuan."
            },
            {
                title: "Penerbitan PERTEK",
                description: "Rekomendasi teknis ANDALALIN dari Dishub sebagai syarat penerbitan izin mendirikan bangunan dan izin operasional."
            }
        ],
        ruangLingkup: [
            "Survey perhitungan lalu lintas: volume, kecepatan, kepadatan pada jam puncak (hari kerja dan akhir pekan) untuk kondisi dasar",
            "Bangkitan dan tarikan perjalanan: prediksi jumlah kendaraan keluar-masuk berdasarkan fungsi gedung dan luas area",
            "Analisis kinerja simpang: rasio V/C, tingkat layanan, tundaan, panjang antrian (kondisi eksisting, tanpa tindakan, dengan tindakan)",
            "Analisis kebutuhan parkir: kebutuhan parkir berdasarkan standar Permen PU, tata letak parkir (paralel, tegak lurus, miring), pola sirkulasi",
            "Desain sirkulasi internal-eksternal: gerbang masuk/keluar, radius putar, titik konflik, area antrian untuk antrian keluar-masuk",
            "Desain manajemen lalu lintas: rambu lalu lintas (pengarah, pengatur, peringatan), marka jalan (marka lajur, penyeberangan zebra, garis berhenti), lampu lalu lintas (jika ada konflik persimpangan)",
            "Keselamatan pejalan kaki: trotoar, penyeberangan pejalan kaki (zebra, pelican crossing), jembatan/terowongan pejalan kaki (untuk jalan volume tinggi)",
            "Zone bongkar muat: area bongkar muat, jalan layanan, area pengambilan sampah yang tidak mengganggu aliran lalu lintas",
            "Simulasi perangkat lunak: PTV Vissim, MKJI (Manual Kapasitas Jalan Indonesia), HCS untuk penilaian dampak",
            "Pendampingan sidang Dishub: presentasi di forum evaluasi ANDALALIN dan revisi dokumen berdasarkan masukan"
        ]
    },
    {
        slug: "advisor-hukum-lingkungan",
        title: "Advisor Hukum Lingkungan",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Jasa konsultan dan penasihat hukum lingkungan untuk kepatuhan hukum, uji tuntas lingkungan, penyelesaian sengketa, opini hukum, pendampingan sengketa lingkungan, audit kepatuhan UU PPLH, dan strategi manajemen risiko regulasi.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan konsultan hukum lingkungan profesional untuk penasihat hukum lingkungan, audit kepatuhan terhadap UU PPLH, PP, Permen LHK, opini hukum untuk uji tuntas merger dan akuisisi, pendampingan penyelesaian sengketa lingkungan (mediasi, arbitrase, litigasi), penilaian risiko hukum, perizinan terintegrasi OSS, dan pemantauan pembaruan regulasi. Mendukung perusahaan memenuhi kewajiban hukum lingkungan, mencegah sanksi administratif/pidana UU 32/2009, dan mengelola kewajiban lingkungan dalam transaksi bisnis atau operasional. Melayani berbagai sektor: pertambangan, manufaktur, properti, infrastruktur, energi, dengan fokus pada kepastian hukum dan kepatuhan regulasi.",
        manfaat: [
            "Kepastian Hukum: Memahami kewajiban hukum lingkungan yang dinamis dan kompleks (UU PPLH, PP 22/2021, omnibus law) untuk kepatuhan operasional.",
            "Mitigasi Risiko: Mencegah sanksi administratif (denda, pembekuan izin), pidana lingkungan, atau gugatan perdata dari masyarakat.",
            "Dukungan Uji Tuntas: Uji tuntas lingkungan untuk merger dan akuisisi serta penilaian investasi dengan opini hukum yang komprehensif.",
            "Penyelesaian Sengketa: Strategi penyelesaian sengketa lingkungan (mediasi, arbitrase, litigasi) yang efektif dan efisien biaya.",
            "Intelijen Regulasi: Pembaruan regulasi terbaru, analisis kebijakan, dan strategi hukum antisipatif untuk kelangsungan bisnis.",
            "Optimasi Izin: Efisiensi perizinan lingkungan (AMDAL, PERTEK, OSS) untuk persetujuan yang lebih cepat dan efisiensi regulasi."
        ],
        tahapanProses: [
            {
                title: "Audit Hukum",
                description: "Audit hukum lingkungan: pemeriksaan dokumen perizinan (AMDAL, PERTEK, izin lingkungan), kontrak, SOP, riwayat insiden, dan kepatuhan terhadap UU PPLH, PP, Permen LHK."
            },
            {
                title: "Analisis Kesenjangan",
                description: "Identifikasi kesenjangan antara kondisi aktual operasional dengan kewajiban regulasi, penilaian kewajiban lingkungan, dan peringkat risiko."
            },
            {
                title: "Pendapat dan Nasihat Hukum",
                description: "Pemberian pendapat hukum, interpretasi regulasi, rekomendasi strategis untuk peningkatan kepatuhan, pengajuan izin, atau penataan transaksi."
            },
            {
                title: "Pendampingan dan Representasi",
                description: "Representasi hukum dalam mediasi dengan pemangku kepentingan, pendampingan pengawasan KLHK/Pemda, atau dukungan litigasi untuk sengketa lingkungan."
            },
            {
                title: "Pembaruan Regulasi dan Pelatihan",
                description: "Pemantauan perubahan regulasi lingkungan, briefing kebijakan, dan pelatihan hukum lingkungan untuk tim legal/HSE internal perusahaan."
            },
            {
                title: "Dokumentasi dan Pelaporan",
                description: "Penyusunan memorandum hukum, sertifikat kepatuhan, laporan uji tuntas, atau pengajuan regulasi untuk otoritas atau pemangku kepentingan."
            }
        ],
        ruangLingkup: [
            "Pendapat hukum lingkungan: interpretasi UU 32/2009, PP 22/2021, Permen LHK, peraturan daerah lingkungan, dan nasihat kepatuhan",
            "Audit kepatuhan hukum: verifikasi kepatuhan terhadap hukum lingkungan, identifikasi kesenjangan hukum, penilaian risiko regulasi",
            "Uji tuntas lingkungan: penilaian lokasi, tinjauan izin, investigasi lahan terkontaminasi, penilaian kewajiban untuk merger dan akuisisi atau pembiayaan",
            "Penyelesaian sengketa dan litigasi: mediasi sengketa dengan masyarakat, arbitrase, atau dukungan litigasi untuk gugatan lingkungan",
            "Nasihat izin dan perizinan: konsultasi perizinan berusaha terintegrasi (OSS), AMDAL/UKL-UPL, PERTEK, izin lingkungan, optimasi jalur regulasi",
            "Analisis kebijakan dan regulasi: penilaian dampak terhadap undang-undang omnibus, regulasi baru, advokasi kebijakan, dan perencanaan regulasi strategis",
            "Tinjauan kontrak: klausul lingkungan dalam kontrak, jaminan pelaksanaan, asuransi lingkungan, ketentuan ganti rugi",
            "Tata kelola lingkungan perusahaan: kerangka hukum CSR, strategi kepatuhan PROPER, pelaporan keberlanjutan (POJK, standar GRI)",
            "Pembelaan pidana dan administratif: pendampingan investigasi PPNS KLHK, banding sanksi administratif, atau pembelaan pidana untuk pelanggaran lingkungan",
            "Pelatihan dan pengembangan kapasitas: pelatihan internal UU PPLH, workshop kepatuhan regulasi, program kesadaran hukum untuk manajemen"
        ]
    },
    {
        slug: "program-csr-lingkungan",
        title: "Program CSR Lingkungan",
        group: "Limbah & CSR",
        category: "amdal",
        shortDescription: "Jasa perencanaan dan pelaksanaan program CSR lingkungan berkelanjutan: pengembangan masyarakat, konservasi keanekaragaman hayati, edukasi lingkungan, infrastruktur hijau, program Kampung Iklim, pelaporan keberlanjutan, dan kategori melampaui kepatuhan untuk PROPER Hijau/Emas.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan perencanaan dan implementasi program CSR berbasis lingkungan yang berkelanjutan dan berdampak. Mencakup pemetaan sosial, penilaian kebutuhan, desain program (konservasi kean ekaragaman hayati, reforestasi, pengelolaan limbah masyarakat, edukasi lingkungan, program desa hijau), keterlibatan pemangku kepentingan, pemantauan dan evaluasi, serta pelaporan keberlanjutan sesuai GRI Standards, POJK 51/2017, atau ISO 26000. Mendukung kategori melampaui kepatuhan untuk PROPER Hijau/Emas, izin sosial untuk beroperasi, peningkatan peringkat keberlanjutan, dan penciptaan nilai bersama dengan masyarakat sekitar. Melayani berbagai sektor: pertambangan, perkebunan, manufaktur, infrastruktur, energi dengan fokus pada pemberdayaan masyarakat dan konservasi lingkungan.",
        manfaat: [
            "Reputasi Perusahaan: Meningkatkan citra sebagai entitas peduli lingkungan dan juara keberlanjutan.",
            "Hubungan Masyarakat: Mempererat hubungan harmonis (izin sosial untuk beroperasi) dengan masyarakat sekitar dan mengurangi konflik sosial.",
            "Melampaui Kepatuhan PROPER: Mendukung penilaian PROPER Hijau/Emas dari KLHK melalui program pengembangan masyarakat dan konservasi lingkungan.",
            "Keberlanjutan: Meningkatkan profil keberlanjutan dan akses ke pembiayaan hijau atau investasi bertanggung jawab.",
            "Dampak Jangka Panjang: Memberikan manfaat jangka panjang bagi ekosistem (konservasi keanekaragaman hayati) dan kesejahteraan sosial (peningkatan penghidupan).",
            "Kepatuhan dan Pelaporan: Memenuhi kewajiban CSR UU 40/2007, POJK 51/2017, dan persyaratan pengungkapan keberlanjutan."
        ],
        tahapanProses: [
            {
                title: "Pemetaan Sosial dan Penilaian Kebutuhan",
                description: "Pemetaan kondisi sosial-ekonomi masyarakat, identifikasi kebutuhan, analisis pemangku kepentingan, dan studi kondisi lingkungan dasar."
            },
            {
                title: "Desain dan Perencanaan Program",
                description: "Merancang program CSR yang relevan, terukur (KPI), dapat dicapai, dan berdampak: konservasi, pemberdayaan, edukasi, infrastruktur hijau dengan kerangka teori perubahan."
            },
            {
                title: "Keterlibatan Pemangku Kepentingan",
                description: "Konsultasi dan perencanaan partisipatif dengan masyarakat, pemerintah daerah, LSM, dan tokoh masyarakat untuk kepemilikan dan keberlanjutan program."
            },
            {
                title: "Implementasi dan Pengembangan Kapasitas",
                description: "Pelaksanaan program bersama mitra komunitas, pelatihan pengembangan kapasitas, transfer pengetahuan, dan penguatan kelembagaan untuk keberlanjutan jangka panjang."
            },
            {
                title: "Pemantauan, Evaluasi, dan Pembelajaran",
                description: "Pemantauan berkala dengan indikator kuantitatif dan kualitatif, penilaian dampak, dokumentasi pembelajaran, dan manajemen adaptif."
            },
            {
                title: "Pelaporan Keberlanjutan",
                description: "Penyusunan laporan CSR/Keberlanjutan sesuai standar GRI, pelaporan terintegrasi, pengungkapan ESG, dan strategi komunikasi untuk pemangku kepentingan."
            }
        ],
        ruangLingkup: [
            "Pemetaan sosial dan studi baseline: demografi, mata pencaharian, modal sosial, penilaian kondisi lingkungan",
            "Program konservasi keanekaragaman hayati: pembibitan, reforestasi, restorasi mangrove, konservasi satwa liar, perlindungan spesies endemik",
            "Pemberdayaan masyarakat: pelatihan pertanian organik, manajemen bank sampah, kewirausahaan hijau, program mata pencaharian alternatif",
            "Edukasi lingkungan: program sekolah ramah lingkungan, kampanye lingkungan, kader konservasi pemuda, workshop peningkatan kesadaran",
            "Infrastruktur hijau: energi terbarukan (biogas, panel surya), fasilitas air bersih, sanitasi ramah lingkungan, pusat kompos, fasilitas daur ulang",
            "Program Kampung Iklim: program desa iklim, adaptasi dan mitigasi perubahan iklim, pengurangan risiko bencana, masyarakat tangguh",
            "Keterlibatan pemangku kepentingan: FGD, konsultasi publik, penilaian pedesaan partisipatif, perencanaan berbasis masyarakat",
            "Pemantauan dan evaluasi: penilaian dampak, pengembalian investasi sosial, evaluasi teori perubahan, survei kepuasan penerima manfaat",
            "Pelaporan keberlanjutan: kepatuhan standar GRI, POJK 51/2017, pedoman ISO 26000, pengungkapan ESG, kerangka pelaporan terintegrasi",
            "Melampaui kepatuhan PROPER: program pengembangan masyarakat, inisiatif konservasi lingkungan untuk peringkat Hijau/Emas"
        ]
    },
    {
        slug: "event-sosialisasi-lingkungan",
        title: "Event & Sosialisasi Lingkungan",
        group: "Limbah & CSR",
        category: "amdal",
        shortDescription: "Jasa penyelenggaraan event lingkungan profesional: sosialisasi AMDAL, konsultasi publik, FGD pemangku kepentingan, workshop HSE, kampanye kesadaran lingkungan, seminar keberlanjutan, expo teknologi hijau dengan dokumentasi lengkap.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan penyelenggaraan event, sosialisasi, dan forum diskusi terkait isu lingkungan hidup secara profesional. Mencakup konsultasi publik untuk AMDAL (persyaratan wajib Komisi Penilai), FGD keterlibatan pemangku kepentingan, workshop pelatihan HSE/K3LH, kampanye kesadaran lingkungan, seminar keberlanjutan dan ESG, expo teknologi hijau, dan konferensi pers topik lingkungan. Melayani kebutuhan perusahaan untuk kepatuhan (sosialisasi AMDAL), hubungan pemangku kepentingan, peningkatan kapasitas tim internal, dan kesadaran publik dengan manajemen acara lengkap: konsep acara, logistik, narasumber ahli, moderator, dokumentasi (foto/video), dan laporan pelaksanaan.",
        manfaat: [
            "Kepatuhan AMDAL: Memenuhi kewajiban sosialisasi dan konsultasi publik untuk persetujuan dokumen AMDAL (persyaratan Komisi Penilai).",
            "Keterlibatan Pemangku Kepentingan: Forum komunikasi efektif dengan masyarakat, pemerintah, NGO, dan pemangku kepentingan untuk izin sosial beroperasi.",
            "Peningkatan Kapasitas: Meningkatkan pemahaman dan kompetensi tim internal (HSE, produksi, manajemen) tentang kepatuhan dan praktik terbaik lingkungan.",
            "Kesadaran Publik: Edukasi dan kampanye publik untuk meningkatkan kesadaran lingkungan dan reputasi merek perusahaan.",
            "Dokumentasi dan Bukti: Bukti dokumentasi lengkap (notulensi, foto, video, daftar hadir) untuk kepatuhan regulasi dan bukti audit."
        ],
        tahapanProses: [
            {
                title: "Konsep Acara dan Perencanaan",
                description: "Perumusan tema, objektif, target peserta, materi/topik, format acara (seminar, workshop, FGD, expo), rundown, dan penganggaran."
            },
            {
                title: "Persiapan Teknis dan Logistik",
                description: "Pemesanan tempat, koordinasi narasumber/pembicara ahli, persiapan undangan pemangku kepentingan, perizinan acara, peralatan teknis (sound, LCD, backdrop), publikasi."
            },
            {
                title: "Pelaksanaan Event",
                description: "Manajemen acara hari-H: meja registrasi, MC/moderator, fasilitasi diskusi/tanya-jawab, manajemen waktu, hospitality, troubleshooting teknis."
            },
            {
                title: "Dokumentasi dan Perekaman",
                description: "Foto profesional, perekaman video, notulensi diskusi/tanya-jawab, daftar hadir peserta (dengan tanda tangan), dan pengumpulan materi."
            },
            {
                title: "Evaluasi dan Pelaporan",
                description: "Umpan balik peserta (survei kepuasan), evaluasi pelaksanaan, pembelajaran, dan penyusunan laporan event lengkap dengan lampiran dokumentasi."
            }
        ],
        ruangLingkup: [
            "Konsultasi publik AMDAL: sosialisasi dokumen KA-ANDAL/ANDAL kepada masyarakat terdampak, FGD dengan pemangku kepentingan, dokumentasi pernyataan dan aspirasi",
            "Workshop dan pelatihan HSE/K3LH: pelatihan internal kepatuhan lingkungan, SOP pengelolaan limbah, simulasi tanggap darurat, kesadaran ISO 14001",
            "FGD keterlibatan pemangku kepentingan: diskusi kelompok terfokus dengan komunitas, pemerintah, LSM untuk dialog, resolusi konflik, atau pembangunan kemitraan",
            "Kampanye kesadaran lingkungan: kampanye publik hari lingkungan hidup, car free day, pembersihan pantai, acara penanaman pohon dengan liputan media",
            "Seminar dan konferensi keberlanjutan: seminar ESG, aksi iklim, ekonomi sirkular, expo teknologi hijau dengan pembicara utama dan diskusi panel",
            "Briefing media dan konferensi pers: komunikasi publik untuk pencapaian lingkungan, peluncuran program CSR, pengumuman pencapaian keberlanjutan",
            "Manajemen event: konsep acara, tempat, logistik, dukungan teknis, publikasi, MC/moderator, dokumentasi foto/video, laporan pelaksanaan lengkap"
        ]
    },
    {
        slug: "pemetaan-peta-resolusi-tinggi",
        title: "Pemetaan & Peta Resolusi Tinggi",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Jasa pemetaan topografi dan peta resolusi tinggi: survey GPS geodetik, pemetaan udara drone, peta kontur, DEM/DSM, peta penggunaan lahan, pengembangan WebGIS, analisis spasial GIS, survey bathymetry untuk perizinan dan perencanaan teknis.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan pemetaan dan penyediaan peta resolusi tinggi untuk perencanaan, perizinan, dan kajian teknis. Mencakup survey GPS geodetik RTK/PPK, pemetaan udara drone UAV, pengolahan fotogrametri, peta topografi dan kontur, model elevasi digital DEM/DSM, peta penggunaan lahan, analisis spasial GIS, survey bathymetry, dan pengembangan WebGIS. Output dalam berbagai format: shapefile, GeoTIFF, DWG/DXF, KML, PDF untuk keperluan AMDAL, masterplan, design engineering, studi kelayakan, pengadaan lahan, atau manajemen aset. Akurasi tinggi sesuai standar BIG dan kepatuhan dengan toleransi yang ditentukan untuk pengajuan regulasi.",
        manfaat: [
            "Akurasi Data Spasial: Peta resolusi tinggi (hingga 1-2 cm GSD) memberikan data spasial yang presisi untuk pengambilan keputusan.",
            "Perencanaan Efektif: Peta dasar untuk desain tata letak, pengembangan masterplan, dan optimasi area.",
            "Analisis GIS Lanjutan: Analisis tumpang susun, pemodelan kesesuaian, analisis kedekatan, analisis terrain untuk dukungan perencanaan.",
            "Kepatuhan Regulasi: Peta sesuai standar BIG untuk kelengkapan dokumen AMDAL, IMB, sertifikat lahan, atau studi kelayakan.",
            "Efisiensi Biaya dan Waktu: Teknologi drone/GIS mengurangi waktu dan biaya survey terestris konvensional hingga 70%.",
            "Siap Integrasi: Output dalam berbagai format GIS untuk integrasi dengan CAD, database, atau sistem GIS perusahaan."
        ],
        tahapanProses: [
            {
                title: "Perencanaan Survey",
                description: "Penentuan Area of Interest (AOI), survey design, koordinasi GCP (Ground Control Points), perizinan terbang drone (jika diperlukan)."
            },
            {
                title: "Akuisisi Data Lapangan",
                description: "Pengambilan data: foto udara menggunakan UAV/drone, pengukuran GPS geodetik RTK/PPK untuk GCP, atau bathymetry survey dengan echosounder."
            },
            {
                title: "Pengolahan & Processing",
                description: "Fotogrametri processing (Agisoft, Pix4D), mosaic orthophoto, orthorectification, DEM/DSM generation, point cloud creation."
            },
            {
                title: "Digitasi & Kartografi",
                description: "Penggambaran fitur peta (building, road, river, vegetation), topographic mapping, contouring, annotation, dan cartographic design sesuai standar BIG."
            },
            {
                title: "Analisis Spasial GIS",
                description: "Analisis lanjutan: cut & fill calculation, slope analysis, watershed delineation, land suitability, atau overlay dengan peta tematik."
            },
            {
                title: "Deliverables & Presentation",
                description: "Peta final dalam format digital (SHP, GeoTIFF, DWG, KML) dan/atau cetak, WebGIS portal, laporan survey,metadata sesuai SNI 19-6502."
            }
        ],
        ruangLingkup: [
            "Aerial mapping drone UAV: pemotretan udara dengan fixed-wing atau multicopter drone untuk large area coverage",
            "Survey GPS geodetik: RTK (Real-Time Kinematic), PPK (Post-Processed Kinematic), static GPS untuk control point dan boundary survey",
            "Peta topografi & kontur: topographic map, contour lines, elevation profile, cross-section untuk design engineering",
            "DEM & DSM generation: Digital Elevation Model (bare earth), Digital Surface Model (with vegetation/building) untuk terrain analysis",
            "Peta penggunaan lahan (land use map): klasifikasi area (forest, agriculture, urban, water body) untuk spatial planning",
            "Bathymetry survey: pengukuran kedalaman sungai, danau, reservoir, coastal area dengan echosounder/sonar untuk dredging atau water resource management",
            "Analisis GIS spasial: buffer analysis, overlay, proximity, suitability modeling, viewshed, watershed delineation menggunakan ArcGIS/QGIS",
            "WebGIS development: platform online GIS untuk data sharing, visualization, query, dan collaborative spatial planning",
            "Volume calculation: cut & fill analysis, stockpile volume (mining, quarry) menggunakan drone photogrammetry",
            "3D modeling & terrain visualization: 3D city model, terrain rendering, fly-through animation untuk presentation dan stakeholder communication"
        ]
    },
    {
        slug: "feasibility-study",
        title: "Feasibility Study",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Jasa studi kelayakan komprehensif: kajian kelayakan teknis, finansial (NPV, IRR, periode pengembalian), analisis pasar, dampak lingkungan dan sosial, kepatuhan hukum, penilaian risiko untuk keputusan investasi dan pembiayaan bank.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan studi kelayakan untuk menilai viabilitas proyek dari berbagai aspek: teknis, finansial, pasar, lingkungan, sosial, hukum, dan penilaian risiko. Mencakup analisis finansial detil (IRR, NPV, periode pengembalian, BCR, analisis sensitivitas), studi pasar (permintaan-penawaran, analisis kompetitif), penilaian teknis (pemilihan teknologi, perencanaan kapasitas, kesesuaian lokasi), penilaian awal dampak lingkungan dan sosial, tinjauan kepatuhan hukum, dan strategi mitigasi risiko. Output berupa laporan kelayakan komprehensif dengan rekomendasi lanjut/tidak untuk komite investasi, pengajuan pembiayaan bank, atau presentasi investor. Melayani berbagai sektor: pertambangan, manufaktur, properti, energi terbarukan, infrastruktur dengan fokus pada kelayakan yang dapat dibiayai untuk eligibilitas pembiayaan.",
        manfaat: [
            "Dukungan Keputusan Investasi: Analisis kelayakan menyeluruh untuk keputusan investasi berdasarkan informasi dan data lengkap.",
            "Identifikasi Risiko: Identifikasi hambatan, tantangan teknis, risiko pasar, dan kendala lingkungan sejak tahap perencanaan.",
            "Estimasi Biaya Akurat: Proyeksi CAPEX, OPEX, dan RAB yang akurat untuk perencanaan finansial dan alokasi anggaran.",
            "Strategi Pembiayaan: Dokumen studi kelayakan yang dapat dibiayai untuk pengajuan pinjaman ke bank, investor, atau lembaga pembiayaan.",
            "Optimasi Proyek: Rekomendasi teknologi, kapasitas, lokasi, dan strategi eksekusi yang optimal untuk keberhasilan proyek.",
            "Kepatuhan Regulasi: Analisis kesenjangan  terhadap perizinan, persyaratan AMDAL, jalur regulasi untuk proses persetujuan yang lebih lancar."
        ],
        tahapanProses: [
            {
                title: "Pengumpulan Data dan Studi Meja",
                description: "Pengumpulan data sekunder: studi literatur, regulasi, data regional/nasional, data historis, studi benchmark untuk pemahaman awal."
            },
            {
                title: "Kunjungan Lokasi dan Data Primer",
                description: "Survey lapangan untuk validasi kondisi lokasi: aksesibilitas, utilitas, topografi, kondisi sosial-lingkungan, dan konsultasi pemangku kepentingan."
            },
            {
                title: "Analisis Pasar dan Permintaan",
                description: "Analisis pasar: proyeksi penawaran-permintaan, estimasi ukuran pasar, strategi penetapan harga, lanskap kompetitif, dan prakiraan penjualan."
            },
            {
                title: "Kelayakan Teknis",
                description: "Kajian kelayakan teknis: pemilihan teknologi, desain proses, perencanaan kapasitas, spesifikasi peralatan, tata letak lokasi, dan penilaian risiko teknis."
            },
            {
                title: "Penilaian Lingkungan dan Sosial",
                description: "Penilaian dampak awal: pemetaan kendala lingkungan, penerimaan sosial, analisis pemangku kepentingan, dan tinjauan kepatuhan regulasi (pengecekan persyaratan AMDAL)."
            },
            {
                title: "Analisis Keuangan",
                description: "Analisis keuangan detail: proyeksi CAPEX/OPEX, prakiraan arus kas, IRR, NPV, periode pengembalian, perhitungan BCR, analisis sensitivitas dan skenario, analisis titik impas."
            },
            {
                title: "Penilaian Risiko dan Rekomendasi",
                description: "Identifikasi risiko (teknis, pasar, keuangan, regulasi, lingkungan), strategi mitigasi risiko, dan rekomendasi final (lanjut/tidak lanjut/lanjut bersyarat) dengan ringkasan eksekutif."
            }
        ],
        ruangLingkup: [
            "Analisis pasar dan permintaan: ukuran pasar, proyeksi permintaan, analisis kompetitif, strategi penetapan harga, segmentasi pelanggan",
            "Kelayakan teknis: penilaian teknologi, desain proses, penentuan kapasitas, studi pemilihan lokasi, spesifikasi peralatan",
            "Analisis keuangan: estimasi CAPEX/OPEX, proyeksi arus kas, IRR, NPV, periode pengembalian, BCR, analisis sensitivitas, titik impas",
            "Tinjauan hukum dan regulasi: pengecekan persyaratan perizinan (AMDAL, IMB, izin operasional), jalur regulasi, analisis kesenjangan kepatuhan",
            "Dampak lingkungan dan sosial: penyaringan lingkungan awal, penilaian penerimaan sosial, pemetaan pemangku kepentingan, persyaratan CSR",
            "Penilaian risiko: risiko teknis, risiko pasar, risiko keuangan, risiko regulasi, force majeure, dan strategi mitigasi",
            "Studi kesesuaian lokasi: akses, utilitas (listrik, air, telekomunikasi), topografi, geoteknik, kedekatan dengan bahan baku/pasar",
            "Perencanaan organisasi dan tenaga kerja: struktur organisasi, kebutuhan tenaga kerja, kebutuhan pelatihan, kesiapan operasional",
            "Jadwal implementasi: timeline proyek, perencanaan milestone, analisis jalur kritis, perencanaan alokasi sumber daya",
            "Laporan yang dapat dibiayai: ringkasan eksekutif, model keuangan, register risiko untuk pengajuan ke bank, investor, atau dewan direksi"
        ]
    },
    {
        slug: "design-engineering",
        title: "Design Engineering",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Jasa design engineering profesional: FEED, DED, gambar untuk konstruksi, RAB/BoQ, RKS, perhitungan struktur, mekanikal, elektrikal, sipil, P&ID, pemodelan 3D sesuai SNI/ASTM untuk tender konstruksi.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan design engineering komprehensif untuk pengembangan desain teknis dari konsep hingga dokumen tender/konstruksi. Mencakup FEED, DED, perhitungan struktur (analisis struktur, desain pondasi), mekanikal (HVAC, perpipaan, peralatan), elektrikal (distribusi daya, pencahayaan, instrumentasi), pekerjaan sipil (persiapan lokasi, drainase, perkerasan), process engineering (P&ID, PFD, neraca massa), pemodelan 3D dan BIM, RAB/BoQ, RKS, dan as-built drawing. Output memenuhi standar SNI, ASTM, ASME, API, atau kode internasional untuk pengajuan tender, izin bangunan (IMB/PBG), atau implementasi proyek. Melayani berbagai proyek: pabrik industri, IPAL, bangunan/infrastruktur, fasilitas minyak dan gas, power plant, dengan fokus pada kemudahan konstruksi, optimasi biaya, dan kepatuhan.",
        manfaat: [
            "Desain Optimal: Sistem yang efisien, hemat biaya, aman, handal dengan pendekatan rekayasa nilai dan desain untuk kemudahan konstruksi.",
            "Siap Konstruksi: Gambar kerja detail (shop drawing, fabrication drawing) sebagai acuan kontraktor untuk eksekusi tanpa ambiguitas.",
            "Penetapan Biaya Akurat: Bill of Quantities yang presisi untuk penetapan harga tender, kontrol anggaran, dan perencanaan pengadaan.",
            "Kepatuhan dan Persetujuan: Desain sesuai SNI, peraturan bangunan, standar keselamatan untuk persetujuan IMB/PBG dan kepatuhan regulasi.",
            "Mitigasi Risiko: Tinjauan desain, deteksi bentrokan BIM, safety-in-design untuk meminimalkan pengerjaan ulang dan risiko konstruksi.",
            "Visualisasi 3D: Pemodelan BIM 3D untuk komunikasi pemangku kepentingan, deteksi bentrokan, dan otomasi perhitungan volume."
        ],
        tahapanProses: [
            {
                title: "Konsep Design & Basis of Design",
                description: "Pengembangan alternatif konsep desain, design criteria, performance requirement, code & standard selection, dan client requirement validation."
            },
            {
                title: "FEED (Front-End Engineering Design)",
                description: "Basic engineering: PFD (Process Flow Diagram), P&ID, equipment sizing, material balance, utility requirement, plot plan, cost estimation."
            },
            {
                title: "DED (Detail Engineering Design)",
                description: "Detail design: shop drawing, fabrication drawing, structural calculation, equipment specification, material specification, electrical single line diagram."
            },
            {
                title: "RAB & BoQ",
                description: "Penyusunan Rencana Anggaran Biaya (RAB), Bill of Quantities (BoQ), material take-off, cost breakdown, unit price analysis."
            },
            {
                title: "RKS & Technical Specification",
                description: "Penyusunan RKS (Rencana Kerja & Syarat), technical specification, quality standard, testing requirement, construction method."
            },
            {
                title: "Design Review & Approval",
                description: "Internal QA/QC review, clash detection (BIM), design verification, client review, authority approval (untuk IMB/regulatory submission)."
            },
            {
                title: "Tender Package & IFC Drawing",
                description: "Paket dokumen tender lengkap (drawing, specification, BoQ, contract), Issued for Construction (IFC) drawing untuk implementation."
            }
        ],
        ruangLingkup: [
            "Civil & structural design: foundation design, structural calculation (SAP2000, ETABS), reinforcement detail, road & drainage design",
            "Mechanical engineering: HVAC system design, piping design (isometric, P&ID), equipment layout, pump & compressor sizing",
            "Electrical engineering: power distribution, transformer sizing, cable sizing, lighting design, earthing & lightning protection",
            "Process engineering: PFD, P&ID, mass & energy balance, equipment sizing (reactor, separator, heat exchanger), process simulation",
            "IPAL/WWTP design: treatment process selection, hydraulic calculation, equipment specification, automation & control philosophy",
            "3D modeling & BIM: Autodesk Revit, Navisworks untuk clash detection, quantity take-off, 4D simulation untuk construction sequencing",
            "RAB & BoQ: material take-off, quantity calculation, unit price analysis, cost estimation untuk tender budgeting",
            "RKS & specification: technical specification, quality standard (SNI, ASTM, ASME, API), testing & commissioning requirement",
            "As-built drawing: documentation of actual construction, redline drawing, record drawing untuk handover dan O&M reference",
            "Tender document: complete package (drawing, BoQ, RKS, contract document) untuk procurement/construction tender"
        ]
    },
    {
        slug: "layanan-drone-pemetaan-dokumentasi",
        title: "Layanan Drone untuk Pemetaan & Dokumentasi Udara",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Jasa drone UAV profesional untuk pemetaan udara, inspeksi infrastruktur, monitoring proyek konstruksi, fotogrametri, dan dokumentasi fotografi udara dengan teknologi resolusi tinggi.",
        heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan drone UAV profesional untuk berbagai kebutuhan pemetaan udara, inspeksi infrastruktur, monitoring operasional, survey topografi, fotogrametri, dokumentasi proyek konstruksi, LiDAR, orthophoto, hingga keperluan komersial seperti fotografi udara, videografi udara untuk event, real estate, pariwisata, dan promosi perusahaan. Teknologi drone mapping memungkinkan akuisisi data spasial resolusi tinggi yang efisien, hemat biaya, dan lebih cepat dibanding metode survey terestris tradisional. Output berupa peta orthomosaic, model 3D, DEM, DSM, serta data GIS terintegrasi untuk analisis spasial lanjutan seperti perhitungan volume, kontur, cut and fill, dan pemetaan penggunaan lahan.",
        manfaat: [
            "Efisiensi Waktu dan Biaya: Survey drone 10x lebih cepat dibanding survey manual dengan biaya operasional kompetitif.",
            "Data Akurat dan Presisi: Resolusi tinggi (hingga 1-2 cm/pixel) untuk analisis detail, pemetaan presisi, dan fotogrametri profesional.",
            "Jangkauan Luas dan Fleksibel: Mampu menjangkau area terpencil, sulit akses, lahan luas, terrain berbahaya, dan kawasan offshore.",
            "Monitoring Real-time dan Periodik: Pemantauan progress projekt, time-lapse construction, stockpile inventory, dan dokumentasi berkala yang efektif.",
            "Teknologi Canggih: Dilengkapi RGB camera, multispectral sensor, thermal imaging, dan LiDAR untuk berbagai aplikasi industri."
        ],
        tahapanProses: [
            "Perencanaan misi: Penetapan area target, rencana penerbangan, ketinggian, tumpang tindih, titik kontrol tanah, dan perizinan terbang",
            "Akuisisi data udara: Penerbangan drone dengan kamera RGB/multispektral/thermal/sensor LiDAR sesuai kebutuhan proyek",
            "Pengolahan dan analisis data: pemrosesan orthomosaic, pemodelan 3D, fotogrametri, digitasi, interpretasi citra, dan penyusunan laporan/visualisasi GIS"
        ],
        ruangLingkup: [
            "Pemetaan topografi dan kontur: pemetaan topografis, garis kontur, DTM/DSM",
            "Survey udara untuk AMDAL, UKL-UPL, studi kelayakan, dan rencana induk",
            "Inspeksi infrastruktur: jalan, jembatan, gedung tinggi, menara telekomunikasi, jaringan listrik",
            "Pemantauan pertambangan: perhitungan volume timbunan, perkembangan lubang tambang, dan area reklamasi",
            "Pemantauan perkebunan dan pertanian: analisis NDVI, pemantauan kesehatan tanaman, pertanian presisi",
            "Dokumentasi progres konstruksi: time-lapse konstruksi, pemantauan lokasi, dan dokumentasi as-built",
            "Foto dan video udara: liputan acara, pemasaran real estate, promosi pariwisata, dan profil perusahaan",
            "Survey batimetri untuk sungai, danau, dan area pantai",
            "Inspeksi termal untuk panel surya, audit energi bangunan, dan fasilitas industri",
            "Pemetaan LiDAR untuk kepadatan vegetasi, inventarisasi hutan, dan pemodelan terrain",
            "Pembuatan peta orthophoto dan orthomosaic dengan georeferensi akurat",
            "Perhitungan volume (analisis galian dan timbunan) untuk tambang, penambangan, dan pekerjaan tanah",
            "Pemetaan penggunaan lahan dan analisis deteksi perubahan",
            "Pemodelan dan visualisasi 3D untuk arsitektur dan perencanaan kota"
        ],
        syaratKetentuan: [
            "Izin terbang drone sesuai regulasi DGCA dan kepatuhan zona larangan terbang",
            "Koordinasi area penerbangan, ketinggian maksimal, waktu operasi, dan titik koordinat GCP bersama klien",
            "Kepatuhan terhadap UU privasi, keselamatan publik, dan peraturan lingkungan",
            "Akses lokasi yang aman untuk stasiun pangkalan, zona lepas landas/pendaratan, dan fasilitas pengisian",
            "Data cuaca yang mendukung: kecepatan angin < 30 km/jam, visibilitas baik"
        ],
        hasilKeluaran: [
            "Foto udara dan video aerial resolusi tinggi (4K/6K) dalam format JPG/RAW/MP4",
            "Peta orthomosaic dan orthophoto dengan GSD tinggi",
            "Model 3D (mesh/awan titik) untuk visualisasi dan analisis volumetrik",
            "Model Elevasi Digital dan Model Permukaan Digital",
            "Peta kontur topografi dengan interval sesuai kebutuhan",
            "Laporan analisis teknis: perhitungan volume, deteksi perubahan, atau interpretasi citra",
            "File GIS: Shapefile, GeoTIFF, KML/KMZ, DWG/DXF, atau format digital lainnya",
            "Hasil kerja dalam platform WebGIS untuk akses online dan berbagi"
        ]
    },
    {
        slug: "pengadaan-instalasi-rth",
        title: "Pengadaan Instalasi RTH",
        group: "Engineering & Survey",
        category: "amdal",
        shortDescription: "Jasa pengadaan dan instalasi RTH: desain landscape, taman vertikal, taman atap, pasokan nursery, instalasi hardscape, sistem irigasi, program perawatan untuk kepatuhan Perda RTH 30% kawasan perkotaan.",
        heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2232&auto=format&fit=crop",
        description: "Layanan pengadaan dan instalasi RTH untuk memenuhi kewajiban regulasi RTH 30% kawasan perkotaan (sesuai UU 26/2007 tentang Penataan Ruang dan Perda setempat), serta menciptakan infrastruktur hijau untuk kawasan industri, perkantoran, perumahan, dan ruang publik. Mencakup desain dan perencanaan landscape, taman vertikal/dinding hijau, taman atap, taman hujan, bioswale, pasokan tanaman dari nursery bersertifikat, instalasi hardscape (paving, deck, pergola, furniture), sistem irigasi (tetes, sprinkler, irigasi pintar), dan program perawatan (penyiraman, pemupukan, pemangkasan, pengendalian hama). Manfaat: kepatuhan persyaratan RTH, penyerapan karbon, mitigasi pulau panas perkotaan, manajemen air hujan, peningkatan estetika, dan ruang kesejahteraan untuk komunitas. Tim ahli dengan hortikulturis dan arsitek landscape untuk desain ruang hijau berkelanjutan.",
        manfaat: [
            "Kepatuhan Regulasi: Memenuhi kewajiban penyediaan RTH 30% sesuai UU 26/2007, Perda, dan persyaratan untuk IMB/izin lingkungan.",
            "Manfaat Lingkungan: Penyerapan karbon, produksi oksigen, mitigasi pulau panas perkotaan, peningkatan kualitas udara, dan pengurangan kebisingan.",
            "Manajemen Air Hujan: Meningkatkan infiltrasi air hujan, mengurangi limpasan, mencegah banjir dengan taman hujan/bioswale/permukaan tembus air.",
            "Estetika dan Nilai Properti: Meningkatkan daya tarik visual, nilai properti, dan menciptakan ruang amenitas hijau untuk kesejahteraan tenant/komunitas.",
            "Keanekaragaman Hayati dan Ekologi: Penciptaan habitat untuk burung, penyerbuk (kupu-kupu, lebah), dan mendukung layanan ekosistem perkotaan.",
            "Citra Perusahaan dan ESG: Demonstrasi komitmen lingkungan, inisiatif ESG, dukungan sertifikasi bangunan hijau (Greenship, LEED)."
        ],
        tahapanProses: [
            "Survey dan analisis lokasi: pengukuran lokasi, topografi, uji tanah (pH, tekstur, nutrisi), analisis cahaya matahari, ketersediaan air, penilaian mikroklimat",
            "Desain dan perencanaan landscape: desain konseptual, pemilihan palet tanaman (prioritas spesies lokal), tata letak hardscape, jalur sirkulasi, rencana irigasi, visualisasi 3D",
            "Pengadaan tanaman dan material: pengadaan tanaman dari nursery bersertifikat (pohon, semak, penutup tanah, rumput), pembenah tanah, mulsa, material hardscape, komponen irigasi",
            "Persiapan dan instalasi lokasi: pembersihan lahan, perataan tanah, perbaikan tanah, penanaman (teknik yang tepat), instalasi hardscape, pemasangan sistem irigasi, penyelesaian",
            "Penetapan dan perawatan: penetapan awal (6-12 bulan): penyiraman intensif, pemupukan, penyiangan, mulsa, pengendalian hama/penyakit untuk kelangsungan dan pertumbuhan tanaman",
            "Program perawatan jangka panjang: kontrak perawatan rutin (pemangkasan rumput, pemangkasan, pemupukan, manajemen irigasi, pengendalian hama, penanaman ulang, penyesuaian musiman)"
        ],
        ruangLingkup: [
            "Arsitektur dan desain landscape: analisis lokasi, desain konseptual, desain penanaman, tata letak hardscape, rendering 3D untuk perencanaan ruang hijau",
            "Pasokan tanaman dan nursery: pohon (pohon peneduh, pohon berbunga), semak, pagar tanaman, penutup tanah, rumput, tanaman air dari nursery bersertifikat",
            "Taman vertikal dan dinding hijau: sistem modular, hidroponik/aeroponik, panel tanaman, irigasi otomatis untuk penghijauan fasad atau desain biofilik interior",
            "Taman atap: waterproofing, lapisan drainase, media tanam, pemilihan tanaman (tahan kekeringan, tahan angin), hardscape ringan",
            "Taman hujan dan bioswale: desain LID untuk manajemen air hujan, spesies tanaman lokal, campuran tanah terdesain",
            "Instalasi hardscape: paving (tembus air/tidak tembus air), dek kayu, gazebo, pergola, furniture outdoor, jalur, dinding penahan",
            "Sistem irigasi: irigasi tetes, sistem sprinkler, pengontrol irigasi pintar (berbasis cuaca, sensor kelembaban tanah), sistem fertigasi",
            "Kehutanan perkotaan: penanaman pohon jalanan, pengembangan kanopi urban, desain lubang pohon, penghalang akar, kisi pohon untuk penghijauan area pejalan kaki",
            "Spesies lokal dan endemik: prioritas spesies tanaman lokal untuk keanekaragaman hayati, perawatan rendah, adaptasi iklim, mendukung satwa liar lokal",
            "Program perawatan: kontrak perawatan (bulanan, kuartalan, tahunan) meliputi pemangkasan rumput, pemangkasan, pemupukan, pengendalian hama, manajemen irigasi, penggantian tanaman"
        ],
        syaratKetentuan: [
            "Area lahan yang layak untuk instalasi RTH dengan topografi sesuai dan akses utilitas (air, listrik)",
            "Hasil uji tanah untuk rekomendasi perbaikan tanah (penyesuaian pH, peningkatan nutrisi, modifikasi tekstur)",
            "Koordinasi konsep desain: preferensi gaya (formal/informal), preferensi tanaman, kendala anggaran, tingkat perawatan yang diinginkan",
            "Kepatuhan dengan Perda RTH setempat: minimum 30% cakupan ruang hijau untuk kawasan perkotaan atau kawasan industri",
            "Perizinan lokasi penempatan (jika di area publik/lahan pemerintah) dan koordinasi dengan pemangku kepentingan terkait"
        ],
        hasilKeluaran: [
            "Ruang Terbuka Hijau terinstalasi dan sepenuhnya ditanami sesuai rencana desain dengan penetapan tanaman yang sehat",
            "Dokumen desain landscape: rencana lokasi, rencana penanaman, rencana hardscape, tata letak irigasi, visualisasi 3D",
            "Inventaris tanaman: daftar spesies tanaman (nama ilmiah, nama umum), kuantitas, ukuran/kaliber, lokasi",
            "Manual operasi dan perawatan: jadwal penyiraman, program pemupukan, panduan pemangkasan, SOP pengendalian hama",
            "Laporan as-built: dokumentasi instalasi aktual (dokumentasi foto), survey final, dan sertifikat serah terima",
            "Sertifikat kepatuhan: bukti persentase RTH sesuai Perda untuk pengajuan ke otoritas atau persyaratan izin bangunan"
        ]
    },
    {
        slug: "submit-dokumen-amdalnet-simpel",
        title: "Solusi Submit Dokumen & Troubleshoot Amdalnet/SIMPEL Anti Error",
        group: "Persetujuan Lingkungan",
        category: "amdal",
        shortDescription: "Hindari error upload dan penolakan dokumen! Jasa pendampingan profesional submit perizinan online ke Amdalnet & SIMPEL: registrasi akun, upload dokumen AMDAL/UKL-UPL/PERTEK tanpa trial-error, troubleshooting sistem, tracking status real-time, koordinasi helpdesk KLHK. Proses cepat, tanpa ribet!",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Layanan pendampingan profesional untuk submit dokumen perizinan lingkungan melalui sistem online pemerintah: Amdalnet (terintegrasi OSS-RBA) untuk dokumen AMDAL, UKL-UPL, PERTEK, dan SIMPEL (Sistem Informasi Pengelolaan Limbah B3) untuk manifest dan pelaporan limbah B3. Mencakup registrasi akun perusahaan, persiapan dokumen digital sesuai format sistem, upload dan submit dokumen, troubleshooting error teknis (format file, validasi data, koneksi sistem), tracking status verifikasi dan persetujuan, koordinasi dengan helpdesk KLHK/OSS, serta pendampingan revisi dokumen jika diperlukan. Mempercepat proses perizinan dengan menghindari kesalahan teknis dan administratif yang sering menyebabkan penolakan atau delay approval.",
        manfaat: [
            "Efisiensi Waktu: Menghindari trial-error upload dokumen dengan guidance expert yang memahami requirement sistem Amdalnet dan SIMPEL.",
            "Mitigasi Error Teknis: Troubleshooting profesional untuk error umum: format file tidak sesuai, ukuran file melebihi limit, validasi NIB gagal, error koordinat lokasi.",
            "Kelancaran Approval: Memastikan dokumen lengkap dan sesuai checklist sistem untuk mempercepat verifikasi dan approval dari KLHK/Dinas LH.",
            "Tracking Real-time: Monitoring status dokumen (draft, submitted, under review, approved, rejected) dan notifikasi untuk follow-up yang tepat waktu.",
            "Kepatuhan Administratif: Memastikan kepatuhan terhadap prosedur perizinan online OSS-RBA dan requirement dokumentasi sistem pemerintah.",
            "Support Helpdesk: Koordinasi langsung dengan helpdesk KLHK/OSS untuk eskalasi kendala teknis atau klarifikasi requirement dokumen."
        ],
        tahapanProses: [
            {
                title: "Registrasi & Persiapan Akun",
                description: "Pendampingan registrasi akun perusahaan di Amdalnet/OSS dan SIMPEL: verifikasi NIB, aktivasi akun, setting user role dan authorization, konfigurasi profil perusahaan."
            },
            {
                title: "Persiapan Dokumen Digital",
                description: "Review dan konversi dokumen ke format yang sesuai (PDF, koordinat GPS format yang benar, metadata file), quality check kelengkapan dokumen sesuai checklist sistem."
            },
            {
                title: "Upload & Submit Dokumen",
                description: "Proses upload dokumen step-by-step: pengisian form data teknis, attach file dokumen, input koordinat lokasi, validasi data input, dan submit ke sistem untuk verifikasi."
            },
            {
                title: "Troubleshooting & Error Handling",
                description: "Diagnosis dan resolusi error teknis: format file rejected, ukuran file exceed limit, error validasi NIB/koordinat, timeout koneksi, bug sistem, dengan koordinasi helpdesk KLHK jika diperlukan."
            },
            {
                title: "Tracking & Monitoring Status",
                description: "Pemantauan status dokumen secara berkala: draft, submitted, under verification, approved, atau rejected dengan notifikasi untuk action yang diperlukan."
            },
            {
                title: "Revisi & Resubmit (Jika Diperlukan)",
                description: "Pendampingan revisi dokumen jika ada feedback dari verifikator KLHK/Dinas LH: perbaikan dokumen sesuai catatan reviewer, re-upload, dan resubmit hingga approved."
            },
            {
                title: "Download Persetujuan & Closure",
                description: "Download surat persetujuan (SKKLH, Persetujuan Teknis, manifest SIMPEL) dalam format digital resmi untuk dokumentasi dan integrasi dengan sistem OSS."
            }
        ],
        ruangLingkup: [
            "Registrasi dan aktivasi akun Amdalnet untuk akses submit dokumen AMDAL/UKL-UPL",
            "Submit dokumen AMDAL (KA-ANDAL, ANDAL, RKL-RPL) ke Amdalnet untuk review Komisi Penilai",
            "Submit dokumen UKL-UPL dan SPPL ke sistem OSS-RBA untuk persetujuan lingkungan",
            "Upload dokumen PERTEK (Emisi, Air Limbah, Limbah B3) ke Amdalnet untuk approval Dinas LH/KLHK",
            "Registrasi akun SIMPEL untuk penghasil limbah B3, transporter, dan PPLI",
            "Submit manifest elektronik limbah B3 di sistem SIMPEL untuk setiap pengangkutan",
            "Pelaporan triwulanan limbah B3 melalui SIMPEL sesuai kewajiban PP 22/2021",
            "Troubleshooting error teknis: format file PDF tidak sesuai, ukuran file melebihi 10MB, error validasi NIB/NPWP, koordinat GPS format salah, timeout submit",
            "Tracking status verifikasi dokumen: monitoring dashboard, notifikasi perubahan status, reminder untuk action",
            "Koordinasi dengan helpdesk KLHK/OSS untuk eskalasi masalah sistem atau klarifikasi requirement",
            "Pendampingan revisi dokumen jika ditolak verifikator: analisis catatan reviewer, perbaikan dokumen, resubmit hingga approved",
            "Download dan arsip persetujuan digital: SKKLH, Persetujuan UKL-UPL, Persetujuan PERTEK, manifest SIMPEL, laporan SIMPEL"
        ],
        syaratKetentuan: [
            "Legalitas perusahaan: NIB (Nomor Induk Berusaha) aktif dari OSS, NPWP perusahaan yang valid",
            "Akses akun OSS: username dan password OSS yang aktif untuk integrasi dengan Amdalnet",
            "Dokumen perizinan siap digital: file PDF dokumen AMDAL/UKL-UPL/PERTEK yang sudah final dan lengkap",
            "Data teknis proyek: koordinat GPS lokasi (format Decimal Degree atau DMS), data kapasitas, layout lokasi",
            "Akses internet stabil: koneksi internet yang reliable untuk upload file besar (hingga 10-50 MB)",
            "Email aktif dan phone number: untuk verifikasi akun dan notifikasi dari sistem KLHK/OSS",
            "Untuk SIMPEL: data limbah B3 (jenis, kode limbah, volume, karakteristik) dan izin lingkungan yang berlaku"
        ],
        hasilKeluaran: [
            "Akun Amdalnet dan SIMPEL yang aktif dan terverifikasi untuk perusahaan",
            "Dokumen perizinan lingkungan (AMDAL, UKL-UPL, PERTEK) yang ter-submit ke sistem Amdalnet dengan nomor registrasi",
            "Manifest elektronik limbah B3 yang ter-submit di SIMPEL dengan nomor manifest resmi",
            "Tracking report status dokumen: timeline submit, under review, revision request, atau approved",
            "Surat Persetujuan digital: SKKLH dari KLHK, Rekomendasi UKL-UPL, atau Persetujuan Teknis dari Dinas LH (jika sudah approved)",
            "Laporan troubleshooting: dokumentasi error yang ditemukan, solusi yang diterapkan, dan kontak helpdesk untuk referensi",
            "SOP submit dokumen: panduan internal untuk perusahaan agar bisa submit dokumen secara mandiri di masa mendatang",
            "Arsip digital lengkap: backup semua dokumen yang di-upload dan persetujuan yang di-download untuk audit trail"
        ],
        blogTags: ["Amdalnet", "SIMPEL", "OSS", "Perizinan Digital", "AMDAL", "UKL-UPL", "Limbah B3"]
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
