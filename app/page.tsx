import axios from "axios";

import { Photo } from "@/types";

import { API_URL } from "@lib/constants";

// Components
import PhotoGallery from "@/components/photo-gallery";
import Spinner from "@comp/spinner";

const Home = async () => {
    let photos: {
        id: string;
        url: string;
        title: string;
        author: string;
    }[] = [];

    try {
        // Fetch photos from Unsplash API
        const res = await axios.get(`${API_URL}/photos`, {
            params: {
                client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
            },
        });

        // Map the response data to a more readable format
        photos = res.data.map((photo: Photo) => ({
            id: photo.id,
            url: photo.urls.regular,
            title: photo.alt_description,
            author: photo.user.name,
        }));
    } catch (error) {
        console.error("Error fetching photos:", error);
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
