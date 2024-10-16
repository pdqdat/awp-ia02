export interface Photo {
    id: string;
    urls: {
        regular: string;
        full: string;
    };
    alt_description: string;
    description?: string;
    user: {
        name: string;
    };
    width: number;
    height: number;
    blur_hash: string;
}
