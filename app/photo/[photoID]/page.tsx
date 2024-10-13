import React from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import Button from "@comp/button";

import { API_URL } from "@lib/constants";

interface Photo {
    id: string;
    urls: {
        regular: string;
        full: string;
    };
    alt_description: string;
    user: {
        name: string;
    };
}

interface PhotoDetailPageProps {
    params: {
        photoID: string;
    };
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = async ({ params }) => {
    const { photoID } = params;

    let photo: Photo = {
        id: "",
        urls: {
            regular: "",
            full: "",
        },
        alt_description: "",
        user: {
            name: "",
        },
    };

    try {
        const res = await axios.get(`${API_URL}/photos/${photoID}`, {
            params: {
                client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
            },
        });

        photo = res.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="mt-8">
                <h2 className="text-2xl font-bold">{photo.alt_description}</h2>

                <p>
                    By{" "}
                    <span className="font-bold text-indigo-500">
                        {photo.user.name}
                    </span>
                </p>
            </div>

            <div className="mt-8">
                {!photo.urls.full ? (
                    <div>Loading image...</div>
                ) : (
                    <Image
                        src={photo.urls.full}
                        alt={photo.alt_description}
                        width={1280}
                        height={720}
                        loading="lazy"
                    />
                )}
            </div>

            <div className="mt-8">
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default PhotoDetailPage;
