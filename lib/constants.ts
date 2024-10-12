export const images = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    url: `https://placehold.co/720x${Math.floor(Math.random() * (700 - 400 + 1) + 400)}.png`,
    title: "Placeholder photo",
}));
