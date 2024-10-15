import React from "react";

import Link from "next/link";

import { Slash } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex justify-between p-6 text-lg sm:justify-around sm:p-12">
            <span className="font-bold duration-300 ease-in-out hover:scale-110">
                <Link href="/">Unsplash Photo Gallery</Link>
            </span>

            <div className="flex gap-6">
                <span className="hidden lg:block">
                    Built with Next.js, deployed on Vercel
                </span>

                <span className="hidden lg:block">
                    <Slash />
                </span>

                <span>
                    By{" "}
                    <a
                        href="https://github.com/pdqdat"
                        target="_blank"
                        className="font-semibold text-indigo-500 duration-300 ease-in-out hover:text-indigo-600"
                        rel="noreferrer"
                    >
                        Dat Phan
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
