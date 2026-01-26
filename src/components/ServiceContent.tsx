import { Service } from "@/lib/services-data";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceContentProps {
    service: Service;
}

export function ServiceContent({ service }: ServiceContentProps) {
    return (
        <div className="space-y-20">
            {/* Header / Intro Section */}
            <div className="space-y-8 border-b border-zinc-100 pb-12">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 mb-6 leading-tight tracking-tight">
                        Layanan {service.title}
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl">
                        {service.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="rounded-md px-8 h-12 text-base font-medium shadow-sm hover:translate-y-0 hover:shadow-md transition-all">
                            Mulai Konsultasi
                        </Button>
                    </a>
                </div>
            </div>

            {/* Manfaat Layanan Section */}
            <section>
                <h3 className="text-xl font-semibold text-zinc-900 mb-8 flex items-center gap-3">
                    Manfaat Layanan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {service.manfaat && service.manfaat.length > 0 ? (
                        service.manfaat.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Tahapan Proses */}
                <section>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-8">
                        Tahapan Proses
                    </h3>

                    <div className="relative space-y-0 border-l border-zinc-200 ml-3">
                        {service.tahapanProses.map((step, index) => (
                            <div key={index} className="relative pl-8 pb-10 last:pb-0">
                                <div className="absolute left-0 top-0 -translate-x-[5px] w-2.5 h-2.5 rounded-full border-2 border-white bg-zinc-300 ring-4 ring-white" />
                                <h4 className="text-base font-semibold text-zinc-900 mb-1">
                                    {typeof step === 'string' ? step : step.title}
                                </h4>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {typeof step === 'string' ? "Proses pelaksanaan standar." : step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ruang Lingkup */}
                <section>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-8">
                        Ruang Lingkup
                    </h3>

                    <ul className="space-y-4">
                        {service.ruangLingkup.map((item, index) => (
                            <li key={index} className="flex items-baseline gap-3 group">
                                <Check className="w-4 h-4 text-primary flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                                <span className="text-zinc-700 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Syarat & Ketentuan & Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                {/* Syarat */}
                {service.syaratKetentuan && service.syaratKetentuan.length > 0 && (
                    <section className="bg-zinc-50 rounded-lg p-8 border border-zinc-100">
                        <h3 className="font-semibold text-zinc-900 mb-6">
                            Persyaratan Administrasi & Teknis
                        </h3>
                        <ul className="space-y-3">
                            {service.syaratKetentuan.map((item, index) => (
                                <li key={index} className="text-sm text-zinc-600 flex gap-3">
                                    <span className="w-1 h-1 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Output */}
                {service.hasilKeluaran && service.hasilKeluaran.length > 0 && (
                    <section className="bg-white rounded-lg p-8 border border-zinc-200">
                        <h3 className="font-semibold text-zinc-900 mb-6">
                            Dokumen Keluaran (Deliverables)
                        </h3>
                        <ul className="space-y-3">
                            {service.hasilKeluaran.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-zinc-900">
                                    <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-xs text-zinc-500 flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            {/* CTA Section - Minimalist & Premium */}
            <section className="bg-zinc-900 rounded-lg p-12 text-center md:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                            Siap Memulai Proyek Anda?
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Dapatkan solusi lingkungan yang tepat dan sesuai regulasi. Tim ahli kami siap mendampingi setiap langkah Anda.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
                        <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                            <Button size="lg" className="w-full bg-white text-zinc-900 hover:bg-zinc-100 font-medium px-8 h-12">
                                Dapatkan Penawaran
                            </Button>
                        </a>
                        <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                            <Button variant="outline" size="lg" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white bg-transparent px-8 h-12">
                                Hubungi Kami
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
