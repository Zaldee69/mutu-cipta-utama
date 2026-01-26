import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    image: string;
}

export function ServiceHero({ title, image }: ServiceHeroProps) {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-900/60" />
            </div>

            {/* Title */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
