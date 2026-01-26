import { UserCheck, ShieldCheck, Layers, Handshake, Target, FileCheck2 } from "lucide-react";

const advantages = [
    {
        title: "Ahli & Terpercaya",
        description: "Didukung oleh tenaga profesional di bidang lingkungan, hukum, dan teknik dengan pengalaman dalam berbagai proyek industri.",
        icon: UserCheck,
    },
    {
        title: "Standar Regulasi",
        description: "Seluruh layanan kami disusun dan dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku serta standar Kementerian Lingkungan Hidup.",
        icon: ShieldCheck,
    },
    {
        title: "Layanan Terpadu",
        description: "Kami menyediakan solusi menyeluruh dalam satu sistem layanan, mulai dari perizinan lingkungan, audit, pengelolaan limbah, hingga pendampingan teknis dan legal.",
        icon: Layers,
    },
    {
        title: "Mitra Resmi",
        description: "PT MUTU CIPTA UTAMA bekerja sama dengan transporter dan pengolah limbah B3 yang memiliki izin resmi, memastikan proses pengelolaan berjalan aman dan sesuai standar nasional.",
        icon: Handshake,
    },
    {
        title: "Tepat & Efisien",
        description: "Kami mengutamakan ketepatan waktu, efisiensi proses, serta solusi yang aplikatif untuk mendukung kelancaran operasional dan kepatuhan lingkungan klien.",
        icon: Target,
    },
    {
        title: "Dokumentasi Resmi",
        description: "Setiap laporan, kajian, dan dokumen teknis disusun secara sistematis, profesional, dan siap digunakan untuk keperluan audit, perizinan, maupun kebutuhan hukum perusahaan.",
        icon: FileCheck2,
    },
];

export function Advantages() {
    return (
        <section id="about" className="py-16 bg-gradient-to-b from-white via-zinc-50/30 to-white">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        Keunggulan Kami
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage) => (
                        <div
                            key={advantage.title}
                            className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <advantage.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                                {advantage.title}
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
