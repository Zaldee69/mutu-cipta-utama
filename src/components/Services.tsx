"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck2, ShieldCheck, Users, Ruler, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { getServicesByGroup, serviceGroups, type Service } from "@/lib/services-data";

// Map groups to icons for the tabs
const groupIcons: Record<string, React.ElementType> = {
    "Persetujuan Lingkungan": FileCheck2,
    "Persetujuan Teknis (PERTEK)": ShieldCheck,
    "Limbah & CSR": Users,
    "Engineering & Survey": Ruler,
};

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            {/* Hover Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                    </p>
                </div>

                {/* Key Benefits Preview */}
                <div className="space-y-3 mb-8 flex-grow">
                    {service.manfaat && service.manfaat.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5" />
                            </div>
                            <span className="line-clamp-2">{benefit.split(":")[0]}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <Link href={`/layanan/${service.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <span>Detail Layanan</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-50/50">
            <div className="container">
                <header className="flex flex-col items-center text-center gap-4 mb-16">
                    <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-wider font-semibold text-xs">
                        Layanan Kami
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
                        Solusi Lingkungan Terintegrasi
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
                        Kami menyediakan layanan komprehensif mulai dari perizinan, teknis, hingga konsultasi strategis untuk keberlanjutan bisnis Anda.
                    </p>
                </header>

                <Tabs defaultValue={serviceGroups[0]} className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="inline-flex h-auto w-full max-w-4xl justify-start md:justify-center rounded-2xl bg-white p-2 gap-2 shadow-sm border border-zinc-200 overflow-x-auto scrollbar-hide">
                            {serviceGroups.map((group) => {
                                const Icon = groupIcons[group] || FileCheck2;
                                return (
                                    <TabsTrigger
                                        key={group}
                                        value={group}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md text-zinc-600 hover:bg-zinc-50 whitespace-nowrap"
                                    >
                                        <Icon className="w-4 h-4 hidden sm:block" />
                                        <span className="truncate">{group}</span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                    {serviceGroups.map((group) => (
                        <TabsContent key={group} value={group} className="mt-0 focus-visible:outline-none ring-offset-background">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {getServicesByGroup(group).map((service) => (
                                    <ServiceCard key={service.slug} service={service} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-16 text-center">
                    <Link href="/layanan/amdal-ukl-upl">
                        <Button size="lg" variant="ghost" className="text-zinc-500 hover:text-primary hover:bg-primary/5">
                            Lihat Semua Layanan <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
