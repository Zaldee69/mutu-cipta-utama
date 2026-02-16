export default function FAQSchema() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Apa itu AMDAL dan kapan diperlukan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AMDAL (Analisis Mengenai Dampak Lingkungan) adalah kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup. AMDAL diperlukan untuk kegiatan yang berdampak penting terhadap lingkungan, seperti pembangunan pabrik, pertambangan, atau proyek infrastruktur besar."
                }
            },
            {
                "@type": "Question",
                "name": "Berapa lama proses penyusunan dokumen AMDAL?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Proses penyusunan dokumen AMDAL umumnya memakan waktu 3-6 bulan, tergantung kompleksitas proyek, kelengkapan data, dan proses konsultasi publik yang diperlukan."
                }
            },
            {
                "@type": "Question",
                "name": "Apa perbedaan AMDAL dan UKL-UPL?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AMDAL diperlukan untuk kegiatan yang berdampak penting terhadap lingkungan, sedangkan UKL-UPL (Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan) untuk kegiatan yang dampaknya tidak penting. UKL-UPL lebih sederhana dan prosesnya lebih cepat dibanding AMDAL."
                }
            },
            {
                "@type": "Question",
                "name": "Apa itu PERTEK dan siapa yang memerlukan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PERTEK (Persetujuan Teknis) adalah izin teknis yang diperlukan untuk instalasi pengolahan air limbah, emisi udara, atau pengelolaan limbah B3. Semua industri yang menghasilkan limbah wajib memiliki PERTEK sesuai regulasi Kementerian Lingkungan Hidup."
                }
            },
            {
                "@type": "Question",
                "name": "Bagaimana cara pengelolaan limbah B3 yang benar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pengelolaan limbah B3 harus dilakukan oleh pihak yang berizin, meliputi: (1) Penyimpanan sementara di tempat khusus, (2) Pengangkutan oleh transporter berizin, (3) Pengolahan/pemusnahan di fasilitas yang memiliki izin dari KLH. PT Mutu Cipta Utama dapat membantu proses pengelolaan limbah B3 sesuai regulasi."
                }
            },
            {
                "@type": "Question",
                "name": "Berapa biaya jasa konsultan lingkungan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Biaya jasa konsultan lingkungan bervariasi tergantung jenis layanan, kompleksitas proyek, dan lokasi. Untuk informasi lebih detail dan penawaran harga, silakan hubungi kami untuk konsultasi gratis."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah PT Mutu Cipta Utama melayani seluruh Indonesia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, PT Mutu Cipta Utama melayani klien di seluruh Indonesia dengan tim ahli berpengalaman dan jaringan luas untuk memastikan layanan berkualitas di berbagai wilayah."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
