"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.link/l6mph1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Pulse animation ring */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />

                {/* Main button */}
                <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MessageCircle className="w-7 h-7 text-white" fill="white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    <div className="bg-zinc-900 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
                        Chat dengan Kami
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-zinc-900" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
