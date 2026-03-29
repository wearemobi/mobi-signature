import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export const metadata: Metadata = {
    title: "MOBI Signature v1.0",
    description: "Professional Identity by M.O.B.I.™",
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${geistSans.variable}`}>
        <body className={`${geistSans.variable} font-sans min-h-screen selection:bg-black selection:text-white`}>
        {children}
        </body>
        </html>
    );
}
