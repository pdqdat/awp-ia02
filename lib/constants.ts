/**
 * Generates an array of image objects with unique IDs, random heights, and placeholder URLs.
 *
 * Each image object contains:
 * - `id`: A unique identifier for the image.
 * - `url`: A URL pointing to a placeholder image with a random height between 400 and 700 pixels.
 * - `title`: A static title "Placeholder photo".
 */
export const images = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    url: `https://placehold.co/720x${Math.floor(Math.random() * (700 - 400 + 1) + 400)}.png`,
    title: "Placeholder photo",
}));

/**
 * The base URL for the Unsplash API.
 */
export const API_URL = "https://api.unsplash.com";

/**
 * The number of posts to display per page.
 * This constant is used to paginate the posts in the application.
 */
export const POSTS_PER_PAGE = 10;

/**
 * The maximum number of columns to display in the photo gallery.
 */
export const MAX_COLUMNS = 4;
