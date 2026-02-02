/**
 * Keyword-rich introduction paragraphs for service pages
 * Optimized for SEO with natural keyword integration (2-3% density)
 */

export interface ServiceIntroduction {
    opening: string; // Opening paragraph with primary keywords
    whyChooseUs: string; // Why choose us paragraph
    industries: string; // Industries served
}

export const serviceIntroductions: Record<string, ServiceIntroduction> = {
    "amdal-ukl-upl": {
        opening: "PT Mutu Cipta Utama adalah konsultan AMDAL berpengalaman yang menyediakan jasa penyusunan AMDAL profesional dan UKL-UPL terpercaya di seluruh Indonesia. Tim kami terdiri dari tenaga ahli bersertifikat KLHK dengan pengalaman lebih dari 10 tahun dalam menyusun dokumen lingkungan lengkap untuk berbagai sektor industri. Kami memahami bahwa proses AMDAL dan UKL-UPL memerlukan ketelitian tinggi, konsultasi publik yang efektif, dan dokumentasi yang memenuhi standar Komisi Penilai AMDAL untuk mendapatkan SKKLH (Surat Keputusan Kelayakan Lingkungan Hidup).",
        whyChooseUs: "Sebagai konsultan AMDAL profesional, kami menjamin dokumen AMDAL lengkap yang disusun sesuai PP 22/2021 dan Permen LHK 4/2021. Layanan penyusunan AMDAL kami mencakup kajian komprehensif dampak lingkungan, sosial, dan ekonomi, dilengkapi dengan konsultasi publik yang terstruktur, serta pendampingan dalam sidang Komisi Penilai. Dengan track record keberhasilan tinggi dalam mendapatkan persetujuan lingkungan, kami adalah mitra terpercaya untuk kepatuhan regulasi KLHK.",
        industries: "Kami melayani penyusunan dokumen AMDAL dan UKL-UPL untuk berbagai sektor: pertambangan, industri manufaktur, properti dan real estate, infrastruktur (jalan tol, bandara, pelabuhan), energi (PLTU, PLTA, pembangkit listrik tenaga surya), pariwisata (hotel, resort), perkebunan (sawit, karet), pengolahan makanan dan minuman, serta proyek-proyek strategis nasional yang memerlukan persetujuan lingkungan."
    },
    "audit-lingkungan-hidup": {
        opening: "Audit lingkungan perusahaan adalah evaluasi sistematis untuk memastikan kepatuhan terhadap regulasi lingkungan KLHK dan efektivitas sistem manajemen lingkungan. PT Mutu Cipta Utama menyediakan layanan audit lingkungan wajib dan sukarela dengan tim auditor lingkungan bersertifikat yang berpengalaman dalam audit kepatuhan lingkungan, audit ISO 14001, dan audit PROPER untuk peringkat Hijau dan Emas. Audit lingkungan kami dirancang untuk mengidentifikasi risiko, meningkatkan kinerja operasional, dan mempersiapkan perusahaan untuk penilaian PROPER KLHK.",
        whyChooseUs: "Tim auditor lingkungan bersertifikat kami memiliki kompetensi dalam audit compliance terhadap UU PPLH, PP 22/2021, dan berbagai Permen LHK terkait pengelolaan limbah, emisi, dan air limbah. Kami menggunakan metodologi audit standar ISO 19011 dengan pendekatan risk-based thinking untuk memberikan rekomendasi yang actionable dan value-added. Laporan audit lingkungan kami dilengkapi dengan gap analysis, corrective action plan, dan dukungan implementasi perbaikan untuk meningkatkan kepatuhan regulasi dan kinerja lingkungan perusahaan.",
        industries: "Layanan audit kepatuhan lingkungan kami melayani berbagai industri: manufaktur (tekstil, kimia, farmasi, elektronik), pertambangan dan mineral, perkebunan kelapa sawit, pulp and paper, pengolahan makanan, perhotelan dan pariwisata, rumah sakit dan healthcare, serta kawasan industri. Kami juga melakukan audit lingkungan untuk due diligence dalam merger dan akuisisi serta persiapan sertifikasi ISO 14001."
    },
    "pengelolaan-limbah-b3": {
        opening: "Pengelolaan limbah B3 (Bahan Berbahaya dan Beracun) yang legal dan aman adalah kewajiban setiap perusahaan yang menghasilkan limbah berbahaya sesuai PP 22/2021 dan PP 101/2014. PT Mutu Cipta Utama menyediakan jasa pengelolaan limbah B3 terintegrasi mulai dari identifikasi dan klasifikasi limbah, penyimpanan di TPS limbah B3 yang memenuhi standar, hingga pengangkutan oleh transporter limbah B3 bersertifikat KLHK dan pengolahan akhir di PPLI (Pengolah dan Pemanfaat Limbah B3) berizin. Kami memastikan seluruh proses pengelolaan terdokumentasi melalui manifest elektronik SIMPEL untuk kepatuhan penuh terhadap regulasi KLHK.",
        whyChooseUs: "Sebagai penyedia layanan pengelolaan limbah B3 terpercaya, kami bekerja sama dengan transporter bersertifikat dan PPLI berizin KLHK untuk memastikan pengelolaan limbah berbahaya yang legal dan dapat dipertanggungjawabkan. Setiap batch pengangkutan limbah B3 dilengkapi dengan manifest elektronik, sertifikat pembuangan, dan dokumentasi lengkap untuk keperluan audit PROPER dan compliance. Kami menangani berbagai jenis limbah B3: oli bekas, lumpur IPAL, kemasan bekas B3, aki bekas, limbah medis, limbah elektronik, dan limbah industri lainnya dengan SOP yang ketat dan sistem tracking yang transparan.",
        industries: "Layanan pengelolaan limbah B3 kami melayani industri manufaktur, kimia, farmasi, otomotif, elektronik, rumah sakit dan fasilitas kesehatan, laboratorium, pertambangan, perkebunan, pengolahan makanan, dan berbagai sektor yang menghasilkan limbah B3. Kami juga menyediakan konsultasi desain TPS limbah B3, pelatihan Penanggung Jawab Operasional Limbah B3, dan audit kepatuhan pengelolaan limbah berbahaya."
    },
    "pertek-emisi": {
        opening: "PERTEK emisi udara adalah persetujuan teknis yang diterbitkan oleh KLHK atau Dinas Lingkungan Hidup untuk pengendalian pencemaran udara dari sumber tidak bergerak seperti cerobong, genset, boiler, dan incinerator. PT Mutu Cipta Utama menyediakan layanan penyusunan PERTEK emisi lengkap meliputi pengujian emisi cerobong dengan metode isokinetik, pemodelan dispersi AERMOD, evaluasi sistem pengendalian polusi udara (scrubber, baghouse, ESP), dan penyusunan dokumen teknis untuk persetujuan dari otoritas lingkungan. PERTEK emisi merupakan persyaratan wajib untuk SLO (Sertifikat Laik Operasi) dan kepatuhan terhadap baku mutu emisi sesuai Permen LHK 13/2021.",
        whyChooseUs: "Tim konsultan PERTEK emisi kami memiliki expertise dalam pengujian stack emission, pemodelan dispersi atmosferik, dan evaluasi teknologi pengendalian udara. Kami bekerja sama dengan laboratorium terakreditasi KAN untuk pengujian parameter SO₂, NOx, CO, partikulat, opasitas, dan VOC sesuai SNI dan metode standar EPA. Laporan PERTEK emisi kami dilengkapi dengan analisis kepatuhan baku mutu, rekomendasi sistem pengendalian yang cost-effective, dan strategi untuk memenuhi persyaratan SLO dan PROPER.",
        industries: "Layanan PERTEK emisi udara kami melayani berbagai sumber emisi: boiler industri (batubara, gas, biomassa), genset dan diesel engine, furnace dan kiln (semen, keramik), incinerator limbah medis dan B3, hot mix plant (aspal), PLTU dan pembangkit listrik, industri tekstil, pulp and paper, dan pabrik pengolahan makanan. Kami juga melakukan monitoring rutin emisi dan perpanjangan PERTEK sesuai regulasi."
    },
    "pertek-air-limbah": {
        opening: "PERTEK air limbah adalah persetujuan teknis untuk pembuangan air limbah dari IPAL (Instalasi Pengolahan Air Limbah) ke badan air atau sistem drainase. PT Mutu Cipta Utama menyediakan jasa penyusunan PERTEK air limbah industri dan domestik meliputi pengujian kualitas efluen (BOD, COD, TSS, pH, ammonia, logam berat), audit kinerja IPAL, evaluasi sistem pengolahan, dan penyusunan dokumen teknis untuk persetujuan Dinas Lingkungan Hidup. PERTEK air limbah wajib dimiliki setiap fasilitas yang membuang air limbah untuk memastikan kepatuhan terhadap baku mutu air limbah sesuai Permen LHK 68/2016 atau baku mutu sektor-spesifik.",
        whyChooseUs: "Tim konsultan PERTEK air limbah kami berpengalaman dalam audit IPAL berbagai teknologi: activated sludge, extended aeration, UASB, MBR (Membrane Bioreactor), SBR (Sequencing Batch Reactor), dan sistem pengolahan lanjutan (ozonasi, RO). Kami melakukan evaluasi kinerja IPAL secara komprehensif meliputi perhitungan waktu retensi, efisiensi penyisihan, neraca massa, dan troubleshooting masalah operasional. Dokumen PERTEK air limbah kami dilengkapi dengan diagram alir, spesifikasi teknis, analisis dampak terhadap badan air penerima, dan rekomendasi optimasi sistem untuk memenuhi baku mutu pembuangan.",
        industries: "Layanan PERTEK air limbah kami melayani industri manufaktur (tekstil, pulp, pengolahan makanan, electroplating), perkebunan kelapa sawit, rumah sakit, hotel dan pariwisata, kawasan industri, mall dan commercial building, serta fasilitas domestik. Kami juga menyediakan konsultasi daur ulang air limbah (water reuse) untuk konservasi air dan penghematan biaya operasional."
    }
};

/**
 * Get keyword-rich introduction for a service
 */
export const getServiceIntroduction = (serviceSlug: string): ServiceIntroduction | null => {
    return serviceIntroductions[serviceSlug] || null;
};
