import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/city-data";
import { services } from "@/lib/services-data";
import { MapPin, Phone, Mail, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return {
            title: "Lokasi Tidak Ditemukan",
        };
    }

    return {
        title: `Konsultan Lingkungan ${city.name} | Jasa AMDAL & Audit Lingkungan`,
        description: city.metaDescription,
        keywords: city.keywords,
        alternates: {
            canonical: `https://www.mutuciptautama.id/lokasi/${citySlug}/`,
        },
        openGraph: {
            title: `Konsultan Lingkungan Terpercaya di ${city.name}`,
            description: city.metaDescription,
            url: `https://www.mutuciptautama.id/lokasi/${citySlug}/`,
            siteName: "PT Mutu Cipta Utama",
            type: "website",
            locale: "id_ID",
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const breadcrumbItems = [
        { name: "Beranda", url: "https://www.mutuciptautama.id/" },
        { name: "Lokasi", url: "https://www.mutuciptautama.id/lokasi/" },
        { name: city.name, url: `https://www.mutuciptautama.id/lokasi/${citySlug}/` }
    ];

    // LocalBusiness Schema for this location
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://www.mutuciptautama.id/lokasi/${citySlug}/#localbusiness`,
        "name": `PT Mutu Cipta Utama - ${city.name}`,
        "description": `Konsultan lingkungan profesional di ${city.name}, ${city.province}. Layanan AMDAL, UKL-UPL, audit lingkungan, pengelolaan limbah B3, dan PERTEK.`,
        "url": `https://www.mutuciptautama.id/lokasi/${citySlug}/`,
        "telephone": "+62-21-XXXX-XXXX",
        "email": "info@mutuciptautama.id",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": city.province,
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "areaServed": city.serviceAreas.map(area => ({
            "@type": "City",
            "name": area
        })),
        "priceRange": "$$",
        "serviceType": [
            "Konsultan Lingkungan",
            "Penyusunan AMDAL",
            "Audit Lingkungan",
            "Pengelolaan Limbah B3",
            "PERTEK"
        ]
    };

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-linear-to-br from-primary/10 via-primary/5 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-zinc-700">
                                    Melayani {city.name} dan sekitarnya
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                                Konsultan Lingkungan Terpercaya di {city.name}
                            </h1>

                            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                                {city.description}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="gap-2">
                                        <Phone className="w-5 h-5" />
                                        Hubungi Kami
                                    </Button>
                                </a>
                                <Link href="#layanan">
                                    <Button size="lg" variant="outline">
                                        Lihat Layanan
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="py-16 bg-zinc-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                                    Wilayah Layanan di {city.province}
                                </h2>
                                <p className="text-lg text-zinc-600">
                                    Kami melayani konsultasi lingkungan di berbagai wilayah
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {city.serviceAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-lg border border-zinc-200 hover:border-primary hover:shadow-md transition-all text-center"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto mb-2" />
                                        <p className="text-sm font-medium text-zinc-900">{area}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="layanan" className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                                    Layanan Konsultan Lingkungan di {city.name}
                                </h2>
                                <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                                    Kami menyediakan layanan konsultasi lingkungan lengkap untuk perusahaan di {city.name} dan {city.province}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {services.slice(0, 9).map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/layanan/${service.slug}`}
                                        className="group"
                                    >
                                        <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-primary/30">
                                            <div className="mb-3">
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                                    {service.group}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-zinc-600 line-clamp-3">
                                                {service.shortDescription}
                                            </p>
                                        </Card>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center mt-10">
                                <Link href="/layanan/amdal-ukl-upl">
                                    <Button size="lg" variant="outline">
                                        Lihat Semua Layanan
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Siap Berkonsultasi dengan Ahli Lingkungan?
                            </h2>
                            <p className="text-xl text-zinc-300 mb-8">
                                Dapatkan solusi lingkungan yang tepat untuk bisnis Anda di {city.name}. 
                                Konsultasi gratis dengan tim ahli kami sekarang!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                                        <Phone className="w-5 h-5 mr-2" />
                                        WhatsApp Kami
                                    </Button>
                                </a>
                                <a href="mailto:info@mutuciptautama.id">
                                    <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email Kami
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
