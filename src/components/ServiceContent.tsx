import { Service } from "@/lib/services-data";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContextualLinks } from "@/components/ContextualLinks";
import { ServiceHeadings } from "@/lib/service-headings";
import { ServiceIntro } from "@/components/ServiceIntro";
import { getServiceIntroduction } from "@/lib/service-introductions";

interface ServiceContentProps {
    service: Service;
    headings?: ServiceHeadings;
}

export function ServiceContent({ service, headings }: ServiceContentProps) {
    const introduction = getServiceIntroduction(service.slug);
    return (
        <div className="space-y-20">
            {/* 1. AWARENESS: Introduction - What is this service? */}
            <div className="space-y-6 pb-12 border-b border-zinc-100">
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 leading-tight">
                        {headings?.h2Intro || `Layanan ${service.title}`}
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Keyword-Rich Context (Why choose us, Industries) */}
            {introduction && <ServiceIntro introduction={introduction} />}

            {/* 2. INTEREST: Benefits - Why you need this */}
            <section>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">
                    {headings?.h2Benefits || "Manfaat Layanan"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {service.manfaat && service.manfaat.length > 0 ? (
                        service.manfaat.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-zinc-900 mb-2">{benefit.split(":")[0]}</h4>
                                    <p className="text-zinc-600 leading-relaxed text-sm">
                                        {benefit.split(":")[1] || "Memberikan nilai tambah yang signifikan bagi keberlangsungan bisnis Anda."}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-zinc-500">Informasi manfaat layanan belum tersedia.</p>
                    )}
                </div>
            </section>

            {/* 3. DESIRE: What You Get (Deliverables) + Scope */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Output/Deliverables - Show value first */}
                {service.hasilKeluaran && service.hasilKeluaran.length > 0 && (
                    <section className="bg-linear-to-br from-primary/5 to-white rounded-xl p-8 border border-primary/20">
                        <h3 className="text-xl font-bold text-zinc-900 mb-6">
                            Dokumen yang Anda Dapatkan
                        </h3>
                        <ul className="space-y-4">
                            {service.hasilKeluaran.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-zinc-900">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Ruang Lingkup - What's included */}
                <section className="bg-white rounded-xl p-8 border border-zinc-200">
                    <h3 className="text-xl font-bold text-zinc-900 mb-6">
                        {headings?.h2Scope || "Ruang Lingkup Layanan"}
                    </h3>
                    <ul className="space-y-4">
                        {service.ruangLingkup.map((item, index) => (
                            <li key={index} className="flex items-baseline gap-3 group">
                                <Check className="w-4 h-4 text-primary shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                                <span className="text-zinc-700 leading-relaxed text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* 4. UNDERSTANDING: How It Works (Process) */}
            <section className="pt-8 border-t border-zinc-100">
                <h2 className="text-2xl font-bold text-zinc-900 mb-10 text-center">
                    {headings?.h2Process || "Tahapan Proses"}
                </h2>
                <div className="max-w-3xl mx-auto">
                    <div className="relative space-y-0 border-l-2 border-primary/20 ml-6">
                        {service.tahapanProses.map((step, index) => (
                            <div key={index} className="relative pl-10 pb-12 last:pb-0">
                                <div className="absolute left-0 top-0 -translate-x-[13px] w-6 h-6 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                    {index + 1}
                                </div>
                                <h4 className="text-base font-semibold text-zinc-900 mb-2">
                                    {typeof step === 'string' ? step : step.title}
                                </h4>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {typeof step === 'string' ? "Proses pelaksanaan standar dengan tim profesional." : step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PREPARATION: Requirements (What you need to prepare) */}
            {service.syaratKetentuan && service.syaratKetentuan.length > 0 && (
                <section className="bg-zinc-50 rounded-xl p-8 md:p-10 border border-zinc-200">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">
                        Persyaratan & Dokumen yang Diperlukan
                    </h3>
                    <p className="text-center text-zinc-600 mb-8">
                        Siapkan dokumen berikut untuk memulai proses
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {service.syaratKetentuan.map((item, index) => (
                            <li key={index} className="text-sm text-zinc-700 flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* 6. ACTION: Primary CTA */}
            <section className="bg-linear-to-br from-primary/5 to-primary/10 rounded-xl p-8 md:p-10 border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                            Siap Memulai Proyek Anda?
                        </h3>
                        <p className="text-zinc-600 leading-relaxed">
                            Konsultasikan kebutuhan perizinan dan compliance lingkungan dengan tim ahli kami
                        </p>
                    </div>
                    <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <Button size="lg" className="px-8 h-12 text-base font-medium shadow-sm">
                            Konsultasi Gratis
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* 7. EXPLORATION: Related Content (for SEO and engagement) */}
            <ContextualLinks currentSlug={service.slug} />
        </div>
    );
}
