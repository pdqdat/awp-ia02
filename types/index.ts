export interface Photo {
    id: string;
    width: number;
    height: number;
    blur_hash: string;
    description?: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        thumb: string;
    };
    links: {
        html: string;
        download: string;
        download_location: string;
    };
    user: {
        name: string;
        location: string;
        links: {
            html: string;
        };
        profile_image: {
            small: string;
        };
    };
    exif: {
        make: string;
        model: string;
        name: string;
        exposure_time: string;
        aperture: string;
        focal_length: string;
        iso: number;
    };
    tags: {
        type: string;
        title: string;
    }[];
}
