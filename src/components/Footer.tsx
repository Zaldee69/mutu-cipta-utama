import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { services } from "@/lib/services-data";

const footerLinks = {
    company: [
        { name: "Tentang Kami", href: "/#about" },
        { name: "Visi & Misi", href: "#vision" },
        { name: "Tim Ahli", href: "#team" },
        { name: "Blog", href: "/blog" },
        { name: "Karir", href: "#career" },
    ],
    support: [
        { name: "FAQ", href: "#faq" },
        { name: "Kebijakan Privasi", href: "#privacy" },
        { name: "Syarat & Ketentuan", href: "#terms" },
        { name: "Kontak", href: "#contact" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
];

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
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Konsultan lingkungan terpercaya yang menyediakan solusi komprehensif untuk perizinan,
                            audit, pengelolaan limbah, dan keberlanjutan bisnis sesuai regulasi.
                        </p>

                        {/* Contact Info */}
                        <address className="flex flex-col gap-3 not-italic">
                            <a href="tel:+62123456789" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-primary transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="hover:text-primary transition-colors">+62 123 456 789</span>
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
                            {services.slice(0, 6).map((service) => (
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
                                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
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

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
