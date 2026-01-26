import { Star, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Ahmad Hidayat",
        position: "Environmental Manager",
        company: "PT Industri Manufaktur",
        rating: 5,
        text: "PT MUTU CIPTA UTAMA membantu kami dalam penyusunan AMDAL untuk proyek perluasan pabrik. Prosesnya sangat profesional dan sesuai jadwal yang dijanjikan.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
        name: "Siti Rahmawati",
        position: "Compliance Officer",
        company: "PT Energi Bersih Indonesia",
        rating: 5,
        text: "Layanan audit lingkungan yang sangat detail dan komprehensif. Tim konsultan sangat memahami regulasi terkini dan memberikan rekomendasi yang aplikatif.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
        name: "Budi Santoso",
        position: "HSE Manager",
        company: "PT Kimia Sejahtera",
        rating: 5,
        text: "Pengelolaan limbah B3 kami menjadi lebih tertib dan terdokumentasi dengan baik. Sangat puas dengan pendampingan tim ahli PT MUTU CIPTA UTAMA.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                        <MessageSquareQuote className="w-4 h-4 mr-2" />
                        Apa Kata Mereka
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl leading-tight">
                        Kepercayaan Klien adalah <span className="text-primary">Prioritas Utama</span> Kami
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Pengalaman terbaik dari berbagai perusahaan yang telah mempercayakan kebutuhan konsultasi lingkungan mereka kepada PT Mutu Cipta Utama.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Avatar */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                                    <p className="text-sm text-zinc-600">{testimonial.position}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Company */}
                            <p className="text-xs text-zinc-500 font-medium">
                                {testimonial.company}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
