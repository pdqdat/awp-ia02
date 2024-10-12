import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@comp/button";

import { ArrowUpRight } from "lucide-react";

import { images } from "@lib/constants";

export default function Home() {
    return (
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {/* Information box */}
            <div className="mb-5 flex h-[429px] flex-col items-center justify-end gap-8 overflow-hidden rounded-lg border-2 border-slate-300 px-6 pb-16 pt-64 text-center shadow-lg dark:border-none dark:bg-white/10">
            {/* <div className="mb-5 flex h-[629px] flex-col items-center justify-end gap-8 overflow-hidden rounded-lg border-2 border-slate-300 px-6 pb-16 pt-64 text-center shadow-lg dark:border-none dark:bg-white/10"> */}
                <h1 className="mb-4 mt-8 text-xl font-bold uppercase tracking-widest">
                    Unsplash Photo Gallery
                </h1>

                <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                    My IA02 assessment for Advanced Web App Programming course
                    at HCMUS.
                </p>

                <Link href="https://github.com/pdqdat/awp-ia02" target="_blank">
                    <Button>
                        Github repo
                        <ArrowUpRight className="ml-1" />
                    </Button>
                </Link>

                <h3>
                    By{" "}
                    <Link
                        href="https://github.com/pdqdat"
                        target="_blank"
                        className="text-indigo-500 duration-300 ease-in-out hover:text-indigo-600"
                    >
                        Dat Phan - 20120268
                    </Link>
                </h3>
            </div>

            {/* Image mapping area */}
            {images.map(({ id, url, title }) => {
                return (
                    <Link
                        key={id}
                        href={`/photo/${id}`}
                        shallow
                        className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                    >
                        <Image
                            alt={title}
                            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                            style={{ transform: "translate3d(0, 0, 0)" }}
                            src={url}
                            width={720}
                            height={480}
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                        />
                    </Link>
                );
            })}
        </div>
    );
}
