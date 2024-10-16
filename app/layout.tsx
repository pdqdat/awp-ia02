import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

import Header from "@comp/header";
import Footer from "@comp/footer";

export const metadata: Metadata = {
    title: "Unsplash Photo Gallery | 20120268",
    description: "A photo gallery using Unsplash API by Dat Phan - 20120268",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />

                <main className="mx-auto max-w-[1960px] p-4">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
