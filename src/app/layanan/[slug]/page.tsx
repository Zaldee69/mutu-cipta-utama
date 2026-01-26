import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services-data";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceContent } from "@/components/ServiceContent";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero title={service.title} image={service.heroImage} />

            <div className="container py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <ServiceSidebar currentSlug={service.slug} />
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <ServiceContent service={service} />
                    </div>
                </div>
            </div>
        </main>
    );
}
