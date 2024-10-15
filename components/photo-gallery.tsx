"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { Photo } from "@/types";

import { API_URL, MAX_COLUMNS } from "@lib/constants";

interface PhotoGalleryProps {
    initialPhotos: { id: string; url: string; title: string; author: string }[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ initialPhotos }) => {
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
            {/* Map over the columns (4 in total) and render each column */}
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
                (column, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                        {/* Map over the photos in each column and render each photo */}
                        {column.map((photo) => {
                            return (
                                <Link
                                    key={photo.id}
                                    href={`/photo/${photo.id}`}
                                    shallow
                                    className="after:content after:shadow-highlight group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                                >
                                    <Image
                                        alt={photo.title}
                                        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                        src={photo.url}
                                        loading="lazy"
                                        width={720}
                                        height={480}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                    />

                                    <h1 className="">
                                        By{" "}
                                        <span className="text-indigo-500">
                                            {photo.author}
                                        </span>
                                    </h1>
                                </Link>
                            );
                        })}
                    </div>
                ),
            )}
        </>
    );
};

export default PhotoGallery;
