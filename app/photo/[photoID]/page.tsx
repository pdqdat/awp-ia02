import React from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { Photo } from "@/types";

import { API_URL } from "@lib/constants";

import { Camera, Tag } from "lucide-react";

// Components
import Button from "@comp/button";
import Badge from "@comp/badge";

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
        // The page is divided into two columns on large screens
        <div className="gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            {/* First column */}
            <div className="md:col-span-7">
                {/* Photo box */}
                <div
                    className="relative overflow-hidden rounded-lg border-0 lg:border-2 border-slate-300"
                    style={{
                        minHeight:
                            photo.height > photo.width
                                ? "calc(100vh - 10rem)"
                                : "calc(100vh - 25rem)",
                    }}
                >
                    <Link href={photo.urls.raw} target="_blank">
                        <Image
                            src={photo.urls.full}
                            alt={photo.alt_description}
                            fill
                            loading="lazy"
                            className="cursor-zoom-in object-contain duration-300 ease-in-out hover:scale-105"
                        />
                    </Link>
                </div>
            </div>

            {/* Second column */}
            <div className="lg:border-border relative mt-2 border-transparent md:col-span-5 lg:mt-0">
                {/* Information box */}
                <div className="rounded-lg border-slate-300 p-4 pb-8 shadow-lg dark:border-none dark:bg-white/10">
                    <div>
                        <Link
                            href={photo.user.links.html}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-x-2 text-lg font-semibold duration-300 ease-in-out hover:text-indigo-500"
                        >
                            <Image
                                src={photo.user.profile_image.small}
                                alt={photo.user.name}
                                width={35}
                                height={35}
                                className="rounded-full"
                            />

                            <span>{photo.user.name}</span>
                        </Link>
                    </div>

                    <h2 className="mt-8 text-xl font-bold tracking-wider duration-300 ease-in-out hover:text-indigo-500">
                        {photo.alt_description}
                    </h2>

                    {photo.description ? (
                        <p className="mt-4 capitalize">{photo.description}</p>
                    ) : (
                        <p className="mt-4 italic text-gray-500">
                            No description available
                        </p>
                    )}

                    {photo.tags.length > 0 && (
                        <div className="mt-4">
                            {photo.tags.map((tag, idx) => (
                                <Badge key={idx}>
                                    <Tag className="mr-1" size={18} />

                                    {tag.title}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {photo.exif.make && (
                        <div className="mt-4">
                            <h3 className="item-center inline-flex justify-center text-lg font-semibold duration-300 ease-in-out hover:text-indigo-500">
                                <Camera className="mr-2" />
                                {photo.exif.make} {photo.exif.model}
                            </h3>

                            <ul className="mt-2 text-gray-500">
                                <li>
                                    <span className="font-semibold">
                                        Focal Length:
                                    </span>{" "}
                                    {photo.exif.focal_length}
                                </li>

                                <li>
                                    <span className="font-semibold">
                                        Aperture:
                                    </span>{" "}
                                    {photo.exif.aperture}
                                </li>

                                <li>
                                    <span className="font-semibold">
                                        Exposure Time:
                                    </span>{" "}
                                    {photo.exif.exposure_time}
                                </li>

                                <li>
                                    <span className="font-semibold">ISO:</span>{" "}
                                    {photo.exif.iso}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailPage;
