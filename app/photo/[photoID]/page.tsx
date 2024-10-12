import React from "react";

interface PhotoDetailPageProps {
    params: {
        photoID: string;
    };
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({ params }) => {
    const { photoID } = params;

    return (
        <h1 className="text-lg font-bold">
            This page display the details of photo #{photoID}
        </h1>
    );
};

export default PhotoDetailPage;
