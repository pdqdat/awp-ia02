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
                <main className="mx-auto max-w-[1960px] p-4">{children}</main>

                <footer className="p-6 text-center sm:p-12">
                    Built by{" "}
                    <a
                        href="https://github.com/pdqdat"
                        target="_blank"
                        className="font-semibold text-indigo-500 duration-300 ease-in-out hover:text-indigo-600"
                        rel="noreferrer"
                    >
                        Dat Phan
                    </a>{" "}
                    with Next.js, deployed on Vercel.
                </footer>
            </body>
        </html>
    );
}
