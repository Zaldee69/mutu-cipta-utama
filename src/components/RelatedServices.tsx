import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/lib/services-data";

interface RelatedServicesProps {
    currentSlug: string;
    currentGroup?: Service["group"];
}

export function RelatedServices({ currentSlug, currentGroup }: RelatedServicesProps) {
    // Get related services - prioritize same group, then others
    const relatedServices = services
        .filter(s => s.slug !== currentSlug)
        .sort((a, b) => {
            // Prioritize services in the same group
            if (currentGroup) {
                if (a.group === currentGroup && b.group !== currentGroup) return -1;
                if (a.group !== currentGroup && b.group === currentGroup) return 1;
            }
            return 0;
        })
        .slice(0, 3);

    if (relatedServices.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-zinc-50">
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                            Layanan Terkait Lainnya
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Eksplorasi layanan konsultan lingkungan kami yang dapat mendukung kebutuhan bisnis Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/layanan/${service.slug}`}
                                className="group"
                            >
                                <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary/20">
                                    <div className="mb-3">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                            {service.group}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                                        {service.shortDescription}
                                    </p>
                                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                                        Pelajari lebih lanjut
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/layanan/amdal-ukl-upl">
                            <Button size="lg" variant="outline" className="gap-2">
                                Lihat Semua Layanan
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
