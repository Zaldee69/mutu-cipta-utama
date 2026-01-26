import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="py-20 bg-primary">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Butuh Pendampingan Lingkungan yang Profesional & Terpercaya?
                        </h2>
                        <p className="text-base text-white/90 max-w-3xl">
                            PT MUTU CIPTA UTAMA siap membantu perusahaan Anda dalam perizinan, audit, pengelolaan limbah,
                            hingga program keberlanjutan sesuai regulasi yang berlaku.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12 font-semibold"
                            >
                                Konsultasi Sekarang
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
