"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { Photo } from "@/types";

import { API_URL } from "@lib/constants";

interface InfiniteScrollPhotosProps {
    initialPhotos: { id: string; url: string; title: string; author: string }[];
}

const InfiniteScrollPhotos: React.FC<InfiniteScrollPhotosProps> = ({
    initialPhotos,
}) => {
    const [photos, setPhotos] = useState(initialPhotos);
    const [page, setPage] = useState(1);

    const fetchMorePhotos = async () => {
        try {
            const res = await axios.get(`${API_URL}/photos`, {
                params: {
                    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
                    page: page + 1,
                },
            });

            const newPhotos = res.data.map((photo: Photo) => ({
                id: photo.id,
                url: photo.urls.regular,
                title: photo.alt_description,
                author: photo.user.name,
            }));

            setPhotos([...photos, ...newPhotos]);
            // setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
            setPage(page + 1);

            console.log(`Fetched page ${page + 1}`);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    useEffect(() => {
        /**
         * The condition checks if the sum of the viewport height and the vertical scroll position
         * is greater than or equal to the total height of the document minus 500 pixels.
         * If true, it means the user is within 500 pixels of the bottom of the page.
         */
        const handleScroll = () => {
            //
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500
            ) {
                fetchMorePhotos();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [photos]);

    return (
        <>
            {photos.map(
                (
                    {
                        id,
                        url,
                        title,
                        author,
                    }: {
                        id: string;
                        url: string;
                        title: string;
                        author: string;
                    },
                    index,
                ) => {
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
                                src={url}
                                loading="lazy"
                                width={720}
                                height={480}
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                            />
                            <h1 className="font-bold">{index}</h1>
                        </Link>
                    );
                },
            )}

            {/* Loading spinner */}
            <div className="mt-10 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500" />
            </div>
        </>
    );
};

export default InfiniteScrollPhotos;
