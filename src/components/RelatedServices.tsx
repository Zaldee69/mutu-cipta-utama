import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import { services, type Service, getServiceBySlug } from "@/lib/services-data";
import { getRelatedServicesForSEO } from "@/lib/internal-linking-strategy";

interface RelatedServicesProps {
    currentSlug: string;
    currentGroup?: Service["group"];
}

export function RelatedServices({ currentSlug, currentGroup }: RelatedServicesProps) {
    // Get SEO-optimized related services based on keyword research and internal linking strategy
    const seoLinks = getRelatedServicesForSEO(currentSlug, 3);
    
    const relatedServices = seoLinks
        .map(link => {
            const service = getServiceBySlug(link.slug);
            return service ? { service, link } : null;
        })
        .filter((item): item is { service: Service; link: typeof seoLinks[0] } => item !== null);

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
                        {relatedServices.map(({ service, link }) => (
                            <Link
                                key={service.slug}
                                href={`/layanan/${service.slug}`}
                                className="group"
                                title={`${link.anchorText} - ${service.title}`}
                            >
                                <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary/20">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                            {service.group}
                                        </span>
                                        {link.priority === 'high' && (
                                            <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                                                <Link2 className="w-3 h-3" />
                                                Relevan
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-zinc-500 mb-3 font-medium">
                                        <span className="text-primary">{link.anchorText}</span>
                                    </p>
                                    <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
                                        {service.shortDescription}
                                    </p>
                                    <p className="text-xs text-zinc-500 mb-4 italic">
                                        {link.context}
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
