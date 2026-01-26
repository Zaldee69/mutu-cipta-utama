import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-20 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <article className="grid lg:grid-cols-2 gap-12 items-center">
                    <header className="flex flex-col gap-8">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Solusi Lingkungan Terpercaya
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl leading-tight">
                            Mitra Strategis Bisnis{" "}
                            <span className="text-primary">
                                Berkelanjutan
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
                            Layanan satu atap untuk perizinan lingkungan (AMDAL/UKL-UPL), Persetujuan Teknis (PERTEK), pengelolaan limbah B3, hingga konsultasi CSR dan engineering.
                        </p>

                        <nav className="flex flex-col sm:flex-row gap-4 mt-2" aria-label="Primary actions">
                            <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto font-semibold px-8 h-12 text-base">
                                    Konsultasi Gratis
                                </Button>
                            </a>
                            <Link href="#services">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-zinc-200 text-zinc-900 hover:bg-zinc-50 bg-white/50 backdrop-blur-sm px-8 h-12 text-base">
                                    Jelajahi Layanan <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </nav>

                        <aside className="pt-8 border-t border-zinc-200 flex flex-wrap gap-8 text-zinc-600 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                Tim Ahli Bersertifikat
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                Jangkauan Nasional
                            </div>
                        </aside>
                    </header>

                    <figure className="flex justify-center md:justify-end hidden md:block">
                        <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-full border-4 border-white shadow-2xl">
                            <Image
                                src="/hero.jpeg"
                                alt="Engineers discussing project"
                                fill
                                className="object-cover object-left-center"
                                priority
                            />
                        </div>
                    </figure>
                </article>
            </div>
        </section>
    );
}
