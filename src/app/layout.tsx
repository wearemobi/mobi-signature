import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export const metadata: Metadata = {
    title: "M.O.B.I.™ Signature | Professional Digital Identity Engine",
    description: "Professional Identity by M.O.B.I.™",
    icons: {
        icon: [{ url: '/icon-light.svg', type: 'image/svg+xml' }],
        apple: [{ url: '/icon-light.svg', type: 'image/svg+xml' }]
    },
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${geistSans.variable}`}>
        <body className={`${geistSans.variable} font-sans min-h-screen selection:bg-black selection:text-white`}>
        {children}
        <Analytics />
        </body>
        </html>
    );
}
