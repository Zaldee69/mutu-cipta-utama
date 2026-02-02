import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedServicesForSEO } from "@/lib/internal-linking-strategy";
import { getServiceBySlug } from "@/lib/services-data";

interface ContextualLinksProps {
    currentSlug: string;
}

/**
 * Contextual internal links component for SEO
 * Displays keyword-rich internal links within content
 */
export function ContextualLinks({ currentSlug }: ContextualLinksProps) {
    const seoLinks = getRelatedServicesForSEO(currentSlug, 4);
    
    const links = seoLinks
        .map(link => {
            const service = getServiceBySlug(link.slug);
            return service ? { service, link } : null;
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);

    if (links.length === 0) {
        return null;
    }

    return (
        <div className="my-8 p-6 bg-linear-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded"></span>
                Layanan Terkait untuk Kepatuhan Lengkap
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
                {links.map(({ service, link }) => (
                    <Link
                        key={service.slug}
                        href={`/layanan/${service.slug}`}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all"
                        title={`${link.anchorText} - ${service.title}`}
                    >
                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <div className="flex-1">
                            <div className="font-semibold text-zinc-900 group-hover:text-primary transition-colors mb-1">
                                {link.anchorText}
                            </div>
                            <p className="text-xs text-zinc-600">
                                {link.context}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
