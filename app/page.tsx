import Image from "next/image";
import Link from "next/link";

import Button from "@ui/button";

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
                <Image
                    className="dark:invert"
                    src="https://nextjs.org/icons/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />

                <h1 className="text-lg font-bold">Unsplash Photo Gallery</h1>

                <Link href="https:github.com/pdqdat/awp-ia02" target="_blank">
                    <Button>Github repo</Button>
                </Link>

                <h3>
                    By{" "}
                    <a
                        href="https:github.com/pdqdat"
                        target="_blank"
                        className="text-purple-500 duration-300 ease-in-out hover:text-purple-800"
                    >
                        Dat Phan - 20120268
                    </a>
                </h3>
            </main>
        </div>
    );
}
