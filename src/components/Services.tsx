"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck2, ShieldCheck, Users, Ruler, ArrowRight, Check, Layers } from "lucide-react";
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
    <div className="group flex flex-col rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Card Header with Gradient - Similar to Portfolio */}
      <div className="h-32 bg-linear-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-primary border-primary/20 backdrop-blur-sm">
            {service.group}
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription}
        </p>

        {/* Key Benefits */}
        <div className="space-y-2 mb-6 grow">
          {service.manfaat &&
            service.manfaat.slice(0, 3).map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-zinc-600"
              >
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="line-clamp-1">{benefit.split(":")[0]}</span>
              </div>
            ))}
        </div>

        {/* Button */}
        <Link href={`/layanan/${service.slug}`} className="mt-auto">
          <Button
            variant="outline"
            className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
          >
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
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Layers className="w-4 h-4 mr-2" />
            Layanan Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl leading-tight">
            Jasa <span className="text-primary">AMDAL, UKL-UPL, Limbah B3</span> & Audit Lingkungan
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Kami menyediakan layanan komprehensif mulai dari perizinan lingkungan hidup, pengelolaan limbah B3, hingga konsultasi strategis untuk memastikan kepatuhan dan keberlanjutan operasional perusahaan Anda.
          </p>
        </div>

        <Tabs defaultValue={serviceGroups[0]} className="w-full">
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 scrollbar-hide">
            <TabsList className="inline-flex h-auto p-1 bg-zinc-100 rounded-lg whitespace-nowrap">
              {serviceGroups.map((group) => {
                const Icon = groupIcons[group] || FileCheck2;
                return (
                  <TabsTrigger
                    key={group}
                    value={group}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all"
                  >
                    <Icon className="w-4 h-4 hidden sm:block" />
                    <span>{group}</span>
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
