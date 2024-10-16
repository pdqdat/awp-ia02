import axios from "axios";

import { Photo } from "@/types";

import { API_URL, PHOTOS_PER_PAGE } from "@lib/constants";

import PhotoGallery from "@/components/photo-gallery";

const Home = async () => {
    let photos: Photo[] = [];

    try {
        // Fetch photos from Unsplash API
        const res = await axios.get(`${API_URL}/photos`, {
            params: {
                client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
                per_page: PHOTOS_PER_PAGE,
            },
        });

        photos = res.data;
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

    return <PhotoGallery initialPhotos={photos} />;
};

export default Home;
