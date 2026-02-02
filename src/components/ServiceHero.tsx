import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    h1Title?: string; // SEO-optimized H1 (optional, falls back to title)
    image: string;
}

export function ServiceHero({ title, h1Title, image }: ServiceHeroProps) {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={h1Title || title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-900/60" />
            </div>

            {/* Title */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
                        {h1Title || title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
