import { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons, getComparisonBySlug } from "@/lib/comparison-data";
import { Check, X, ArrowRight, Scale, DollarSign, Clock, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateStaticParams() {
    return comparisons.map((comp) => ({
        slug: comp.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const comparison = getComparisonBySlug(slug);

    if (!comparison) {
        return {
            title: "Perbandingan Tidak Ditemukan",
        };
    }

    return {
        title: comparison.metaTitle,
        description: comparison.metaDescription,
        keywords: comparison.keywords,
        alternates: {
            canonical: `https://www.mutuciptautama.id/perbandingan/${slug}/`,
        },
        openGraph: {
            title: comparison.metaTitle,
            description: comparison.metaDescription,
            url: `https://www.mutuciptautama.id/perbandingan/${slug}/`,
            siteName: "PT Mutu Cipta Utama",
            type: "article",
            locale: "id_ID",
        },
    };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = getComparisonBySlug(slug);

    if (!comparison) {
        notFound();
    }

    const breadcrumbItems = [
        { name: "Beranda", url: "https://www.mutuciptautama.id/" },
        { name: "Perbandingan", url: "https://www.mutuciptautama.id/perbandingan/" },
        { name: comparison.title, url: `https://www.mutuciptautama.id/perbandingan/${slug}/` }
    ];

    // Comparison Schema
    const comparisonSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": comparison.title,
        "description": comparison.metaDescription,
        "author": {
            "@type": "Organization",
            "@id": "https://www.mutuciptautama.id/#organization"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://www.mutuciptautama.id/#organization"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.mutuciptautama.id/perbandingan/${slug}/`
        },
        "about": [
            {
                "@type": "Service",
                "name": comparison.service1.name,
                "serviceType": comparison.service1.name
            },
            {
                "@type": "Service",
                "name": comparison.service2.name,
                "serviceType": comparison.service2.name
            }
        ]
    };

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-linear-to-br from-primary/10 via-primary/5 to-white py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                                <Scale className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-zinc-700">Panduan Perbandingan</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                                {comparison.title}: Perbedaan & Panduan Memilih
                            </h1>

                            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                                {comparison.metaDescription}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Comparison Table */}
                <section className="py-16 bg-zinc-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
                                Perbandingan Singkat
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-xl shadow-sm border border-zinc-200">
                                    <thead>
                                        <tr className="bg-zinc-100">
                                            <th className="px-6 py-4 text-left font-bold text-zinc-900">Aspek</th>
                                            <th className="px-6 py-4 text-left font-bold text-primary">{comparison.service1.name}</th>
                                            <th className="px-6 py-4 text-left font-bold text-primary">{comparison.service2.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparison.keyDifferences.map((diff, index) => (
                                            <tr key={index} className="border-t border-zinc-200">
                                                <td className="px-6 py-4 font-semibold text-zinc-900">{diff.aspect}</td>
                                                <td className="px-6 py-4 text-zinc-700">{diff.service1Value}</td>
                                                <td className="px-6 py-4 text-zinc-700">{diff.service2Value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Comparison */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
                                Penjelasan Detail
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Service 1 */}
                                <Card className="p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {comparison.service1.name}
                                        </h3>
                                        <p className="text-zinc-700 leading-relaxed">
                                            {comparison.service1.definition}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-primary" />
                                                Kapan Dibutuhkan
                                            </h4>
                                            <ul className="space-y-2">
                                                {comparison.service1.whenNeeded.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3">Kelebihan</h4>
                                            <ul className="space-y-2">
                                                {comparison.service1.advantages.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3">Kekurangan</h4>
                                            <ul className="space-y-2">
                                                {comparison.service1.disadvantages.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-zinc-200">
                                            <div className="flex items-center gap-2 mb-2">
                                                <DollarSign className="w-5 h-5 text-zinc-600" />
                                                <span className="font-bold text-zinc-900">Biaya:</span>
                                            </div>
                                            <p className="text-sm text-zinc-700 ml-7">{comparison.service1.cost}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Clock className="w-5 h-5 text-zinc-600" />
                                                <span className="font-bold text-zinc-900">Timeline:</span>
                                            </div>
                                            <p className="text-sm text-zinc-700 ml-7">{comparison.service1.timeline}</p>
                                        </div>

                                        <Link href={`/layanan/${comparison.service1.slug}`}>
                                            <Button className="w-full mt-4" variant="outline">
                                                Pelajari Lebih Lanjut
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>

                                {/* Service 2 */}
                                <Card className="p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {comparison.service2.name}
                                        </h3>
                                        <p className="text-zinc-700 leading-relaxed">
                                            {comparison.service2.definition}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-primary" />
                                                Kapan Dibutuhkan
                                            </h4>
                                            <ul className="space-y-2">
                                                {comparison.service2.whenNeeded.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3">Kelebihan</h4>
                                            <ul className="space-y-2">
                                                {comparison.service2.advantages.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-zinc-900 mb-3">Kekurangan</h4>
                                            <ul className="space-y-2">
                                                {comparison.service2.disadvantages.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-zinc-200">
                                            <div className="flex items-center gap-2 mb-2">
                                                <DollarSign className="w-5 h-5 text-zinc-600" />
                                                <span className="font-bold text-zinc-900">Biaya:</span>
                                            </div>
                                            <p className="text-sm text-zinc-700 ml-7">{comparison.service2.cost}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Clock className="w-5 h-5 text-zinc-600" />
                                                <span className="font-bold text-zinc-900">Timeline:</span>
                                            </div>
                                            <p className="text-sm text-zinc-700 ml-7">{comparison.service2.timeline}</p>
                                        </div>

                                        <Link href={`/layanan/${comparison.service2.slug}`}>
                                            <Button className="w-full mt-4" variant="outline">
                                                Pelajari Lebih Lanjut
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decision Guide */}
                <section className="py-16 bg-linear-to-br from-primary/5 to-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-center">
                                Panduan Memilih: Mana yang Anda Butuhkan?
                            </h2>
                            <p className="text-center text-zinc-600 mb-12">
                                Temukan rekomendasi berdasarkan skenario bisnis Anda
                            </p>

                            <div className="space-y-6">
                                {comparison.decisionGuide.map((guide, index) => (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-zinc-900 mb-2">
                                                    Skenario: {guide.scenario}
                                                </h3>
                                                <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full mb-3">
                                                    <Check className="w-4 h-4 text-green-600" />
                                                    <span className="text-sm font-semibold text-green-700">
                                                        {guide.recommendation}
                                                    </span>
                                                </div>
                                                <p className="text-zinc-700 leading-relaxed">
                                                    {guide.explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Masih Bingung Memilih?
                            </h2>
                            <p className="text-xl text-zinc-300 mb-8">
                                Konsultasikan kebutuhan Anda dengan tim ahli kami. Kami akan membantu menentukan 
                                solusi terbaik untuk bisnis Anda secara GRATIS!
                            </p>
                            <a href="https://wa.link/l6mph1" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                                    Konsultasi Gratis Sekarang
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
