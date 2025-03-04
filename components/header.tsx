import React from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import Button from "@comp/button";

const Header = () => {
    return (
        <header className="mx-auto mb-8 flex max-w-[1960px] items-center justify-between p-4">
            <div className="text-lg font-bold tracking-wider sm:text-xl sm:tracking-widest md:text-2xl">
                <Link href="/">Unsplash Photo Gallery</Link>
            </div>

            <Link
                href="https://github.com/pdqdat/awad-ia02"
                target="_blank"
                className="font-medium sm:font-semibold"
            >
                <Button>
                    Github
                    <ArrowUpRight className="ml-0.5 sm:ml-1" />
                </Button>
            </Link>
        </header>
    );
};

export default Header;
