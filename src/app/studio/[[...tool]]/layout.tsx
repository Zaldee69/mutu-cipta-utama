import type { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
    title: 'Sanity Studio',
    description: 'Mutu Cipta Utama Content Management System',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
