import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Images */}
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                                alt="Konsultasi konsultan lingkungan profesional"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mt-12">
                            <Image
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                                alt="Kepatuhan regulasi lingkungan hidup perusahaan"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
                            Jasa Konsultan Lingkungan Berbasis Regulasi Terkini
                        </h2>
                        <p className="text-base text-zinc-600 leading-relaxed">
                            Kami membantu bisnis Anda berjalan aman dan patuh terhadap regulasi
                            lingkungan, sekaligus mendukung citra perusahaan melalui program CSR,
                            sosialisasi lingkungan, dan solusi teknis berkelanjutan.
                        </p>
                        <div>
                            <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="text-base px-8 h-12">
                                    Konsultasi Sekarang
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
