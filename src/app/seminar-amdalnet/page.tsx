import type { Metadata } from "next";
import { Wifi, Calendar, Clock, Monitor, Users, Award, CheckCircle, ChevronRight, BookOpen, FileText, Scale } from "lucide-react";
import SeminarRegistrationForm from "@/components/SeminarRegistrationForm";

export const metadata: Metadata = {
    title: "Seminar Online AMDALNET | Training Perizinan Lingkungan",
    description:
        "Ikuti Seminar Online AMDALNET bersama PT Mutu Cipta Utama. Pelajari cara submit dokumen AMDAL/UKL-UPL di AMDALNET dan SIMPEL tanpa error. HTM Rp 200.000. Daftar sekarang!",
    keywords: [
        "seminar AMDALNET",
        "training AMDALNET",
        "submit AMDAL online",
        "pelatihan perizinan lingkungan",
        "seminar SIMPEL KLHK",
        "workshop AMDAL",
        "submit dokumen AMDAL",
        "troubleshoot AMDALNET",
        "seminar lingkungan online",
    ],
    openGraph: {
        title: "Seminar Online AMDALNET | PT Mutu Cipta Utama",
        description:
            "Pelajari cara submit dokumen AMDAL/UKL-UPL/PERTEK di sistem AMDALNET tanpa trial-error. Seminar online, HTM Rp 200.000.",
        url: "https://www.mutuciptautama.id/seminar-amdalnet",
        type: "website",
        images: ["/mutu-cipta-utama-logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Seminar Online AMDALNET | PT Mutu Cipta Utama",
        description:
            "Pelajari cara submit dokumen AMDAL di AMDALNET tanpa error. HTM Rp 200.000. Daftar sekarang!",
        images: ["/mutu-cipta-utama-logo.png"],
    },
    alternates: {
        canonical: "https://www.mutuciptautama.id/seminar-amdalnet",
    },
};

const agenda = [
    {
        time: "08.00 – 08.30",
        title: "Pembukaan & Perkenalan",
        desc: "Sambutan dan pengantar seminar oleh moderator",
    },
    {
        time: "08.30 – 10.00",
        title: "Pengenalan Sistem AMDALNET",
        desc: "Overview platform, update regulasi PP 22/2021, dan alur perizinan lingkungan terbaru",
    },
    {
        time: "10.00 – 10.15",
        title: "Break",
        desc: "Istirahat singkat",
    },
    {
        time: "10.15 – 12.00",
        title: "Panduan Step-by-Step Submit Dokumen",
        desc: "Demonstrasi live: registrasi akun, upload dokumen AMDAL/UKL-UPL/PERTEK, format file yang diterima",
    },
    {
        time: "12.00 – 13.00",
        title: "Ishoma",
        desc: "Istirahat, sholat, dan makan siang",
    },
    {
        time: "13.00 – 14.30",
        title: "Troubleshooting Error AMDALNET",
        desc: "Solusi untuk error umum: file rejected, akun terkunci, status pending, dan koordinasi helpdesk KLH",
    },
    {
        time: "14.30 – 15.30",
        title: "Sesi Tanya Jawab",
        desc: "Diskusi interaktif dengan narasumber. Tanyakan kasus spesifik proyek Anda",
    },
    {
        time: "15.30 – 16.00",
        title: "Penutupan & Sertifikat",
        desc: "Ringkasan materi, distribusi materi, dan sertifikat keikutsertaan digital",
    },
];

const benefits = [
    {
        icon: FileText,
        title: "Submit Tanpa Trial-Error",
        desc: "Kuasai teknik upload dokumen AMDAL, UKL-UPL, dan PERTEK yang diterima sistem",
    },
    {
        icon: Scale,
        title: "Update Regulasi Terbaru",
        desc: "Regulasi PP 22/2021 dan perubahan sistem AMDALNET yang perlu Anda ketahui",
    },
    {
        icon: BookOpen,
        title: "Materi & Rekaman",
        desc: "Dapatkan slide presentasi dan akses rekaman untuk review ulang kapanpun",
    },
    {
        icon: Award,
        title: "Sertifikat Digital",
        desc: "Sertifikat keikutsertaan yang dapat digunakan untuk portofolio profesional",
    },
    {
        icon: Users,
        title: "Komunitas Praktisi",
        desc: "Bergabung dengan grup diskusi peserta untuk berbagi pengalaman dan solusi",
    },
    {
        icon: CheckCircle,
        title: "Tanya Jawab Interaktif",
        desc: "Konsultasikan langsung kasus proyek Anda dengan narasumber ahli di sesi Q&A",
    },
];

const targetPeserta = [
    "Staf HSE & Lingkungan Hidup perusahaan",
    "Konsultan AMDAL & perizinan lingkungan",
    "Mahasiswa/fresh graduate Teknik Lingkungan",
    "Pemilik bisnis yang butuh izin lingkungan",
    "Aparatur sipil negara (ASN) bidang lingkungan",
    "Siapapun yang berurusan dengan AMDALNET/SIMPEL",
];

// ✅ Set ke `true` untuk menutup pendaftaran
const SEMINAR_CLOSED = false;

export default function SeminarAmdalnetPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-blue-50">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                <div className="container relative">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                            <Wifi className="w-4 h-4" />
                            Seminar Online · Batch 1
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                            Seminar Online{" "}
                            <span className="text-primary">AMDALNET</span>
                            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-zinc-600 font-semibold">
                                Submit Dokumen Perizinan Lingkungan dengan Tepat
                            </span>
                        </h1>
                        <div className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-600 text-xs font-semibold px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                            Batch 1
                        </div>

                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                            Kuasai cara submit dokumen AMDAL, UKL-UPL, dan PERTEK di sistem AMDALNET
                            tanpa trial-error. Dipandu langsung oleh praktisi berpengalaman.
                        </p>

                        {/* Event Info Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-zinc-100 text-sm font-medium text-zinc-700">
                                <Calendar className="w-4 h-4 text-primary" />
                                Segera Diumumkan
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-zinc-100 text-sm font-medium text-zinc-700">
                                <Clock className="w-4 h-4 text-primary" />
                                08.00 – 16.00 WIB
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-zinc-100 text-sm font-medium text-zinc-700">
                                <Monitor className="w-4 h-4 text-primary" />
                                Zoom
                            </div>
                            <div className="flex items-center gap-2 bg-primary rounded-full px-4 py-2 shadow-sm text-sm font-bold text-white">
                                HTM Rp 200.000
                            </div>
                        </div>

                        {SEMINAR_CLOSED ? (
                            <div className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-500 font-semibold px-8 py-3.5 rounded-lg text-base mt-2 cursor-not-allowed">
                                Pendaftaran Ditutup
                            </div>
                        ) : (
                            <a
                                href="#daftar"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base mt-2"
                            >
                                Daftar Sekarang
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-white border-y border-zinc-100">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            Apa yang Anda Dapatkan?
                        </h2>
                        <p className="text-zinc-600 max-w-xl mx-auto">
                            Seminar satu hari penuh yang padat, praktis, dan langsung aplikatif
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {benefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex gap-4 p-5 rounded-xl border border-zinc-100 hover:border-primary/20 hover:shadow-md transition-all bg-white"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-zinc-900 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Agenda & Form Side by Side */}
            <section className="py-20 bg-zinc-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
                        {/* Left: Agenda */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                                    Agenda Seminar
                                </h2>
                                <p className="text-zinc-500 text-sm">
                                    Jadwal disesuaikan dengan tanggal pelaksanaan. Materi dapat berubah.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-primary/15" />

                                <div className="space-y-4">
                                    {agenda.map((item, i) => (
                                        <div key={i} className="flex gap-4 relative">
                                            <div className="w-4 h-4 rounded-full border-2 border-primary bg-white flex-shrink-0 mt-1 z-10" />
                                            <div className={`flex-1 rounded-lg p-3 ${item.title === "Break" || item.title === "Ishoma" ? "bg-zinc-100 border border-zinc-200" : "bg-white border border-zinc-100 shadow-sm"}`}>
                                                <div className="flex items-start justify-between gap-2 flex-wrap">
                                                    <p className="font-semibold text-zinc-900 text-sm">{item.title}</p>
                                                    <span className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-0.5 rounded-full whitespace-nowrap">
                                                        {item.time}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Target Peserta */}
                            <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
                                <h3 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Peserta yang Cocok
                                </h3>
                                <ul className="space-y-2">
                                    {targetPeserta.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Registration Form */}
                        <div id="daftar" className="scroll-mt-24">
                            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-zinc-100 p-7">
                                {SEMINAR_CLOSED ? (
                                    <div className="text-center py-8 space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-zinc-900">Pendaftaran Ditutup</h2>
                                            <p className="text-sm text-zinc-500 mt-2 max-w-xs mx-auto">
                                                Pendaftaran Seminar AMDALNET Batch 1 telah ditutup. Pantau informasi Batch 2 melalui WhatsApp atau Instagram kami.
                                            </p>
                                        </div>
                                        <a
                                            href="https://wa.link/l6mph1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                                        >
                                            Info Batch Selanjutnya →
                                        </a>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
                                                    Pendaftaran Dibuka · Batch 1
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-zinc-900">
                                                Form Registrasi
                                            </h2>
                                            <p className="text-sm text-zinc-500 mt-1">
                                                Isi data dengan benar. Semua field (*) wajib diisi.
                                            </p>
                                        </div>
                                        <SeminarRegistrationForm />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">
                            Pertanyaan Umum
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Bagaimana cara pembayaran?",
                                    a: "Pembayaran dilakukan via transfer bank manual. Nomor rekening dan instruksi lengkap akan ditampilkan setelah mengisi form registrasi.",
                                },
                                {
                                    q: "Kapan saya mendapatkan link Zoom?",
                                    a: "Link akan dikirimkan ke WhatsApp Anda maksimal H-1 pelaksanaan setelah pembayaran dikonfirmasi.",
                                },
                                {
                                    q: "Apakah ada materi yang diberikan?",
                                    a: "Ya! Semua peserta mendapatkan slide presentasi dan akses rekaman seminar untuk review ulang.",
                                },
                                {
                                    q: "Apakah sertifikat diberikan?",
                                    a: "Ya, sertifikat keikutsertaan digital akan dikirimkan via WhatsApp setelah seminar selesai.",
                                },
                                {
                                    q: "Bagaimana jika ada pertanyaan tambahan?",
                                    a: "Hubungi kami via WhatsApp. Tim kami siap membantu Anda.",
                                },
                            ].map((faq, i) => (
                                <div key={i} className="p-5 rounded-xl border border-zinc-100 bg-zinc-50">
                                    <p className="font-semibold text-zinc-900 mb-1.5">Q: {faq.q}</p>
                                    <p className="text-sm text-zinc-600 leading-relaxed">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="https://wa.link/l6mph1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                Ada pertanyaan lain? Chat kami di WhatsApp →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
