"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Client logos from public folder
const clients = [
    { name: "Google", logo: "/google.png" },
    { name: "Pinterest", logo: "/pinterest.png" },
    { name: "Reddit", logo: "/reddit.png" },
    { name: "Spotify", logo: "/spotify.png" },
    { name: "Stripe", logo: "/stripe.png" },
];

export function Clients() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Klien Kami
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {clients.map((client, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="flex items-center justify-center h-24 p-4">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
