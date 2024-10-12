import React from "react";

interface PhotoDetailPageProps {
    params: {
        photoID: string;
    };
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({ params }) => {
    const { photoID } = params;

    return (
        <h1 className="text-lg">
            This page display the details of photo{" "}
            <span className="font-bold text-indigo-500 duration-300 ease-in-out hover:text-indigo-600">
                {photoID}
            </span>
        </h1>
    );
};

export default PhotoDetailPage;
