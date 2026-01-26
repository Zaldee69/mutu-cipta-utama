import type { Metadata } from "next";
import { Building2, Target, Eye, Award, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description: "PT Mutu Cipta Utama adalah konsultan lingkungan hidup modern yang didirikan tahun 2025, menyediakan solusi AMDAL, UKL-UPL, pengelolaan limbah B3, dan audit lingkungan dengan pendekatan inovatif untuk berbagai industri di Indonesia.",
};

const stats = [
    { icon: Building2, value: "50+", label: "Proyek Ditangani" },
    { icon: Award, value: "2025", label: "Tahun Berdiri" },
    { icon: Users, value: "30+", label: "Klien Aktif" },
    { icon: TrendingUp, value: "100%", label: "Komitmen Kualitas" },
];

const values = [
    {
        icon: Shield,
        title: "Integritas",
        description: "Kami berkomitmen pada kejujuran dan transparansi dalam setiap aspek layanan konsultasi lingkungan."
    },
    {
        icon: Award,
        title: "Profesionalisme",
        description: "Tim ahli bersertifikat dengan standar kerja tinggi dan kepatuhan terhadap regulasi terkini."
    },
    {
        icon: Lightbulb,
        title: "Inovasi",
        description: "Menggunakan teknologi dan metodologi terkini untuk solusi lingkungan yang efektif dan efisien."
    },
    {
        icon: Users,
        title: "Kolaborasi",
        description: "Bekerja sama dengan klien sebagai mitra untuk mencapai tujuan keberlanjutan bersama."
    },
];

const team = [
    {
        name: "Dr. Ahmad Hidayat, S.T., M.T.",
        role: "Direktur Utama & Lead Environmental Consultant",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
        credentials: "Ahli AMDAL Bersertifikat, Doktor Teknik Lingkungan"
    },
    {
        name: "Ir. Siti Rahmawati, M.Sc.",
        role: "Senior Environmental Engineer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        credentials: "Spesialis Pengelolaan Limbah B3, M.Sc. Environmental Engineering"
    },
    {
        name: "Budi Santoso, S.T., M.Eng.",
        role: "Technical Manager",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        credentials: "Ahli K3 & Audit Lingkungan Bersertifikat"
    },
];

export default function TentangKamiPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-zinc-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                            <Building2 className="w-4 h-4 mr-2" />
                            Tentang Kami
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                            Konsultan Lingkungan <span className="text-primary">Modern & Inovatif</span> untuk Masa Depan
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                            PT Mutu Cipta Utama adalah perusahaan konsultan lingkungan yang didirikan tahun 2025 dengan visi membawa pendekatan modern dan inovatif dalam memberikan solusi komprehensif untuk kebutuhan perizinan, audit, dan pengelolaan lingkungan hidup di Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-y border-zinc-100">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-zinc-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Company Profile */}
            <section className="py-20 bg-zinc-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                                Profil Perusahaan
                            </h2>
                            <div className="space-y-4 text-zinc-600 leading-relaxed">
                                <p>
                                    PT Mutu Cipta Utama didirikan pada awal tahun 2025 dengan semangat untuk membawa perubahan dalam industri konsultasi lingkungan di Indonesia. Kami hadir dengan pendekatan yang segar, memanfaatkan teknologi terkini dan metodologi modern untuk memberikan solusi yang lebih efisien dan efektif.
                                </p>
                                <p>
                                    Meskipun baru berdiri, tim kami terdiri dari profesional berpengalaman yang telah lama berkecimpung di bidang konsultasi lingkungan. Kami memahami bahwa setiap industri memiliki tantangan unik dalam memenuhi regulasi lingkungan yang terus berkembang, dan kami siap menjadi mitra terpercaya Anda.
                                </p>
                                <p>
                                    Komitmen kami adalah menyediakan layanan konsultasi yang tidak hanya memenuhi persyaratan regulasi, tetapi juga mendukung pertumbuhan bisnis klien melalui praktik-praktik ramah lingkungan yang efisien, terukur, dan berkelanjutan untuk masa depan yang lebih baik.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                                alt="PT Mutu Cipta Utama Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision" className="py-20 bg-white scroll-mt-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Visi</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Menjadi konsultan lingkungan pilihan utama di Indonesia yang dikenal dengan pendekatan inovatif, solusi berbasis teknologi, dan komitmen terhadap keberlanjutan lingkungan.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Misi</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Memberikan solusi konsultasi lingkungan yang profesional, inovatif, dan berkelanjutan dengan memanfaatkan teknologi terkini untuk mendukung pertumbuhan bisnis klien sambil menjaga kelestarian lingkungan hidup.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-zinc-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                            Nilai-Nilai Perusahaan
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="p-6 rounded-xl bg-white border border-zinc-100 hover:border-primary/20 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-20 bg-white scroll-mt-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                            Tim Ahli Kami
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Profesional bersertifikat dengan keahlian mendalam di bidang konsultasi lingkungan
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="group">
                                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-zinc-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-primary mb-2">
                                    {member.role}
                                </p>
                                <p className="text-sm text-zinc-600">
                                    {member.credentials}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center text-white space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Siap Berkonsultasi dengan Kami?
                        </h2>
                        <p className="text-lg text-white/90">
                            Hubungi tim ahli kami untuk mendapatkan solusi konsultasi lingkungan yang tepat untuk bisnis Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                    Konsultasi Gratis
                                </Button>
                            </a>
                            <Link href="/layanan/amdal-ukl-upl">
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                    Lihat Layanan Kami
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
