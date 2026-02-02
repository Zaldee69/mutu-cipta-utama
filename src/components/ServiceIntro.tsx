import { Building2, CheckCircle2, Users } from "lucide-react";
import { ServiceIntroduction } from "@/lib/service-introductions";

interface ServiceIntroProps {
    introduction: ServiceIntroduction;
}

/**
 * Keyword-rich introduction section for SEO
 * Displays opening statement, value proposition, and industries served
 */
export function ServiceIntro({ introduction }: ServiceIntroProps) {
    return (
        <div className="space-y-8 py-12 border-b border-zinc-100">
            {/* Opening Paragraph */}
            <div className="prose prose-lg max-w-none">
                <p className="text-zinc-700 leading-relaxed">
                    {introduction.opening}
                </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
                <div className="flex items-start gap-4">
                    <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-3">
                            Mengapa Memilih Kami?
                        </h3>
                        <p className="text-zinc-700 leading-relaxed">
                            {introduction.whyChooseUs}
                        </p>
                    </div>
                </div>
            </div>

            {/* Industries Served */}
            <div className="bg-zinc-50 rounded-xl p-8 border border-zinc-200">
                <div className="flex items-start gap-4">
                    <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-zinc-700" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-3">
                            Industri yang Kami Layani
                        </h3>
                        <p className="text-zinc-700 leading-relaxed">
                            {introduction.industries}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
