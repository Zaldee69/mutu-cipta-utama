import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    serviceName: string;
    faqs: FAQItem[];
}

/**
 * Service-specific FAQ component with Schema.org FAQPage markup
 * Optimized for SEO with rich snippets eligibility
 */
export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            {/* FAQ Schema for Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="py-16 bg-linear-to-br from-zinc-50 to-white">
                <div className="container max-w-4xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                            <HelpCircle className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                            Pertanyaan Umum tentang {serviceName}
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Temukan jawaban untuk pertanyaan yang sering diajukan seputar layanan {serviceName}
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white border border-zinc-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-5">
                                    <span className="font-semibold text-zinc-900 pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-600 leading-relaxed pb-5 pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Simple contact prompt - no aggressive CTA */}
                    <div className="mt-12 text-center p-6 bg-zinc-50 rounded-lg border border-zinc-200">
                        <p className="text-zinc-700 text-base">
                            Masih ada pertanyaan? <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Hubungi tim kami</a> untuk diskusi lebih lanjut.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
