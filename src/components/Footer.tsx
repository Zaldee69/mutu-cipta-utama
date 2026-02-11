import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/lib/services-data";

const footerLinks = {
    company: [
        { name: "Tentang Kami", href: "/tentang-kami" },
        { name: "Visi & Misi", href: "/tentang-kami#vision" },
        { name: "Blog", href: "/blog" },
        { name: "Portofolio", href: "/portofolio" },
    ],
    support: [
        { name: "Konsultasi Gratis", href: "https://wa.link/l6mph1" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-white">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/mutu-cipta-utama-logo.png"
                                alt="PT MUTU CIPTA UTAMA"
                                width={100}
                                height={100}
                            />
                        </Link>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            PT Mutu Cipta Utama adalah konsultan lingkungan modern yang menyediakan solusi perizinan, audit, dan pengelolaan lingkungan untuk berbagai industri di Indonesia.
                        </p>

                        {/* Contact Info */}
                        <address className="flex flex-col gap-3 not-italic">
                            <a href="tel:+6287860602997" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-primary transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="hover:text-primary transition-colors">+62 878‑6060‑2997</span>
                            </a>
                            <a href="mailto:info@mutuciptautama.id" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" />
                                <span className="hover:text-primary transition-colors">info@mutuciptautama.id</span>
                            </a>
                            <div className="flex items-start gap-3 text-sm text-zinc-400">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Company links">
                        <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services */}
                    <nav aria-label="Services links">
                        <h3 className="font-semibold text-white mb-4">Layanan</h3>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/layanan/${service.slug}`} className="text-sm text-zinc-400 hover:text-primary transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Support */}
                    <nav aria-label="Support links">
                        <h3 className="font-semibold text-white mb-4">Dukungan</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-sm text-zinc-400">
                            © {new Date().getFullYear()} PT MUTU CIPTA UTAMA. All rights reserved.
                        </p>

                        {/* Contact Info */}
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <a href="mailto:info@mutuciptautama.id" className="hover:text-primary transition-colors">
                                info@mutuciptautama.id
                            </a>
                            <span>|</span>
                            <a href="tel:+6287860602997" className="hover:text-primary transition-colors">
                                +62 878-6060-2997
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
