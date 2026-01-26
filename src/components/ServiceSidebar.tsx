"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServicesByGroup, serviceGroups, type Service } from "@/lib/services-data";
import { ArrowRight, Phone, LayoutGrid } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ServiceSidebarProps {
    currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
    const router = useRouter();

    const ServiceLink = ({ service }: { service: Service }) => {
        const isActive = currentSlug === service.slug;
        return (
            <li>
                <Link
                    href={`/layanan/${service.slug}`}
                    className={`group flex items-center justify-between py-2 pl-4 pr-3 text-sm transition-all duration-200 border-l-2 ${isActive
                        ? "border-primary text-primary font-medium bg-primary/5"
                        : "border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                        }`}
                >
                    <span>{service.title}</span>
                    {isActive && <ArrowRight className="w-4 h-4" />}
                </Link>
            </li>
        );
    };

    const currentService = serviceGroups
        .flatMap(group => getServicesByGroup(group))
        .find(s => s.slug === currentSlug);

    return (
        <div className="space-y-8 sticky top-24">
            {/* Mobile Navigation (Dropdown) */}
            <div className="block md:hidden mb-6">
                <div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                    <label className="text-sm font-semibold text-zinc-900 mb-3 block flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-primary" />
                        Menu Layanan
                    </label>
                    <Select
                        defaultValue={currentSlug}
                        onValueChange={(value) => router.push(`/layanan/${value}`)}
                    >
                        <SelectTrigger className="w-full h-11 bg-zinc-50 border-zinc-200 focus:bg-white text-zinc-700 font-medium">
                            <SelectValue placeholder="Pilih Layanan" />
                        </SelectTrigger>
                        <SelectContent>
                            {serviceGroups.map((group) => {
                                const groupServices = getServicesByGroup(group);
                                if (groupServices.length === 0) return null;

                                return (
                                    <SelectGroup key={group}>
                                        <SelectLabel className="pl-2 py-2 text-xs font-bold text-primary uppercase tracking-wider">{group}</SelectLabel>
                                        {groupServices.map((service) => (
                                            <SelectItem key={service.slug} value={service.slug} className="text-zinc-600 focus:text-primary focus:bg-primary/5 pl-4">
                                                {service.title}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:block space-y-8">
                <nav className="bg-white rounded-lg border border-zinc-100 shadow-sm overflow-hidden">
                    <div className="p-4 bg-zinc-50 border-b border-zinc-100">
                        <h3 className="font-semibold text-zinc-900">Menu Layanan</h3>
                    </div>

                    <div className="py-2 divide-y divide-gray-100">
                        {serviceGroups.map((group) => {
                            const groupServices = getServicesByGroup(group);
                            if (groupServices.length === 0) return null;

                            return (
                                <div key={group} className="py-2">
                                    <div className="px-4 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                        {group}
                                    </div>
                                    <ul className="mb-2">
                                        {groupServices.map((service) => (
                                            <ServiceLink key={service.slug} service={service} />
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </nav>

                {/* Contact Card - Refined */}
                <div className="bg-zinc-900 rounded-lg p-6 text-white shadow-lg relative overflow-hidden group">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />

                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                            <Phone className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Butuh Bantuan?</h3>
                        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Tim ahli kami siap membantu kebutuhan perizinan Anda.
                        </p>
                        <Link
                            href="#contact"
                            className="block w-full text-center bg-white text-zinc-900 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
