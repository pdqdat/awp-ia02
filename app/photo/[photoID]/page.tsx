import React from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import Button from "@comp/button";

import { Photo } from "@/types";

import { API_URL } from "@lib/constants";

interface PhotoDetailPageProps {
    params: {
        photoID: string;
    };
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = async ({ params }) => {
    const { photoID } = params;

    let photo: Photo;

    try {
        const res = await axios.get(`${API_URL}/photos/${photoID}`, {
            params: {
                client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
            },
        });

        photo = res.data;
    } catch (error) {
        console.error("Error fetching photos:", error);

        return (
            <div className="flex min-h-72 flex-col items-center justify-center sm:min-h-96">
                <h1 className="text-3xl font-bold text-red-500">
                    Error loading photo
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Please try again later.
                </p>

                <div className="mt-8">
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="md:col-span-7">
                <div
                    className={`relative ${photo.width > photo.height ? "aspect-video" : "aspect-[5/3]"}`}
                >
                    <Image
                        src={photo.urls.full}
                        alt={photo.alt_description}
                        fill
                        loading="lazy"
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="lg:border-border relative mt-2 overflow-hidden border-transparent md:col-span-5 lg:mt-0">
                <h2 className="text-2xl font-bold">{photo.alt_description}</h2>

                <h3>
                    By{" "}
                    <span className="font-bold text-indigo-500">
                        {photo.user.name}
                    </span>
                </h3>

                {photo.description ?? (
                    <p className="capitalize">{photo.description}</p>
                )}
            </div>
        </div>
    );
};

export default PhotoDetailPage;
