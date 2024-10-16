"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { Photo } from "@/types";

import { API_URL, PHOTOS_PER_PAGE, MAX_COLUMNS } from "@lib/constants";

import { Loader2 } from "lucide-react";

interface PhotoGalleryProps {
    initialPhotos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ initialPhotos }) => {
    const [photos, setPhotos] = useState(initialPhotos);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMorePhotos, setHasMorePhotos] = useState(true);

    const fetchMorePhotos = async () => {
        if (!hasMorePhotos) return;

        setLoading(true);
        try {
            const res = await axios.get(`${API_URL}/photos`, {
                params: {
                    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
                    per_page: PHOTOS_PER_PAGE,
                    page: page + 1,
                },
            });

            if (res.data.length === 0) {
                setHasMorePhotos(false);
                console.log("No more photos to fetch");

                return;
            }

            const newPhotos = res.data;

            setPhotos([...photos, ...newPhotos]);
            setPage(page + 1);

            console.log(`Fetched page ${page + 1}`);
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
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
    }, [photos, fetchMorePhotos]);

    /**
     * Filters the photos array to return a subset of photos that belong to a specific column.
     * The column is determined by the provided column index.
     *
     * @param colIndex - The index of the column to filter photos for.
     * @returns An array of photos that belong to the specified column.
     */
    const getColumns = (colIndex: number) => {
        return photos.filter((photo, idx) => idx % MAX_COLUMNS === colIndex);
    };

    return (
        <>
            {/* Photo grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                {/* Map over the columns (4 in total) and render each column */}
                {[
                    getColumns(0),
                    getColumns(1),
                    getColumns(2),
                    getColumns(3),
                ].map((column, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                        {/* Map over the photos in each column and render each photo */}
                        {column.map((photo) => {
                            return (
                                <div key={photo.id}>
                                    {/* Photo */}
                                    <Link
                                        href={`/photo/${photo.id}`}
                                        shallow
                                        className="after:content after:shadow-highlight group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                                    >
                                        <Image
                                            alt={photo.alt_description}
                                            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                            src={photo.urls.regular}
                                            loading="lazy"
                                            width={photo.width}
                                            height={photo.height}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                        />
                                    </Link>

                                    {/* Author */}
                                    <h1 className="text-center sm:text-left">
                                        By{" "}
                                        <span className="font-semibold text-indigo-500">
                                            <Link
                                                href={photo.user.links.html}
                                                target="_blank"
                                            >
                                                {photo.user.name}
                                            </Link>
                                        </span>
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Loading spinner */}
            {loading && (
                <div className="mt-10 flex items-center justify-center">
                    <Loader2 className="h-16 w-16 animate-spin text-indigo-500" />
                </div>
            )}

            {/* No more photos message */}
            {!hasMorePhotos && (
                <h1 className="text-center font-bold">
                    No more photos to load
                </h1>
            )}
        </>
    );
};

export default PhotoGallery;
