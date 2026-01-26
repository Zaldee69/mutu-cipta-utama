import {
    PortableText as PortableTextComponent,
    PortableTextComponents,
} from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            return (
                <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog Image"}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-12 mb-6 leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-10 mb-5 leading-tight">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mt-8 mb-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg md:text-xl font-semibold text-zinc-900 mt-6 mb-3">
                {children}
            </h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/30 pl-6 py-2 my-6 italic text-zinc-600 bg-zinc-50 rounded-r">
                {children}
            </blockquote>
        ),
        normal: ({ children }) => (
            <p className="mb-6 text-base md:text-lg leading-relaxed text-zinc-700">
                {children}
            </p>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="mb-6 ml-6 space-y-2 list-disc text-zinc-700">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="mb-6 ml-6 space-y-2 list-decimal text-zinc-700">{children}</ol>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-primary underline hover:text-primary/80 transition-colors"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="bg-zinc-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
    },
};

export function PortableText({ value }: { value: any }) {
    return <PortableTextComponent value={value} components={components} />;
}
