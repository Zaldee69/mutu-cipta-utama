"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";

import { services, serviceGroups, getServicesByGroup } from "@/lib/services-data";

const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full py-4 border-b bg-white backdrop-blur-md">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/mutu-cipta-utama-logo.png"
                        alt="PT Mutu Cipta Utama Logo"
                        width={280}
                        height={160}
                        className="h-20 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.name}>
                                    <NavigationMenuLink asChild>
                                        <Link href={link.href} className={navigationMenuTriggerStyle()}>
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}

                            {/* Layanan Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[600px] p-4">
                                        <div className="grid grid-cols-2 gap-6">
                                            {serviceGroups.map((group) => {
                                                const groupServices = getServicesByGroup(group);
                                                if (groupServices.length === 0) return null;

                                                return (
                                                    <div key={group}>
                                                        <h4 className="mb-3 text-xs font-bold text-primary uppercase tracking-wider">
                                                            {group}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {groupServices.map((service) => (
                                                                <li key={service.slug}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={`/layanan/${service.slug}`}
                                                                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                        >
                                                                            <div className="text-sm font-medium text-zinc-900">{service.title}</div>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Divider */}
                    <div className="h-8 w-px bg-zinc-200" />

                    {/* Contact Button */}
                    <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 cursor-pointer">
                            Kontak Kami
                        </Button>
                    </a>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[540px]">
                        <SheetHeader className="border-b pb-4 mb-4">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <SheetDescription className="sr-only">Navigasi Utama</SheetDescription>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/mutu-cipta-utama-logo.png"
                                    alt="PT Mutu Cipta Utama"
                                    width={140}
                                    height={80}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        </SheetHeader>
                        <div className="flex flex-col gap-1 overflow-y-auto h-full pb-6">
                            {navLinks.map((link) => (
                                <SheetClose key={link.name} asChild>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-zinc-900 py-3 px-2 rounded-md hover:bg-zinc-100 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))}

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="services" className="border-none">
                                    <AccordionTrigger className="text-lg font-medium text-zinc-900 py-3 px-2 hover:no-underline hover:bg-zinc-100 rounded-md">
                                        Layanan
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-1 pl-4 pt-2">
                                            {services.map((service) => (
                                                <SheetClose key={service.slug} asChild>
                                                    <Link
                                                        href={`/layanan/${service.slug}`}
                                                        className="text-base text-zinc-600 py-2 px-2 rounded-md hover:text-primary hover:bg-primary/5 transition-colors block"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-6 pt-6 border-t">
                                <SheetClose asChild>
                                    <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer" className="block">
                                        <Button size="lg" className="w-full text-base">
                                            Kontak Kami
                                        </Button>
                                    </a>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
