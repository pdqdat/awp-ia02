import axios from "axios";

import { Photo } from "@/types";

import { API_URL, PHOTOS_PER_PAGE } from "@lib/constants";

// Components
import PhotoGallery from "@/components/photo-gallery";
import Spinner from "@comp/spinner";

const Home = async () => {
    let photos: {
        id: string;
        url: string;
        alt_description: string;
        description?: string;
        author: string;
        width: number;
        height: number;
        blur_hash: string;
    }[] = [];

    try {
        // Fetch photos from Unsplash API
        const res = await axios.get(`${API_URL}/photos`, {
            params: {
                client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
                per_page: PHOTOS_PER_PAGE,
            },
        });

        // Map the response data to a more readable format
        photos = res.data.map((photo: Photo) => ({
            id: photo.id,
            url: photo.urls.regular,
            alt_description: photo.alt_description,
            description: photo.description,
            author: photo.user.name,
            width: photo.width,
            height: photo.height,
            blur_hash: photo.blur_hash,
        }));
    } catch (error) {
        console.error("Error fetching photos:", error);

        return (
            <div className="flex min-h-72 flex-col items-center justify-center sm:min-h-96">
                <h1 className="text-3xl font-bold text-red-500">
                    Error loading photos
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Please come back later.
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Photo gallery */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <PhotoGallery initialPhotos={photos} />
            </div>

            {/* Loading spinner */}
            <div className="mt-10 flex items-center justify-center">
                <Spinner />
            </div>
        </>
    );
};

export default Home;
