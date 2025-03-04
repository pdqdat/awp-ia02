# IA02 - Unsplash photo gallery

This project is a photo gallery app that fetches and displays high-quality images from the Unsplash API. It features infinite scroll, detailed photo views, and intuitive URLs, aiming to provide a seamless user experience with smooth loading and well-organized code.

Built by **Phan Duong Quoc Dat - 20120268** for [IA02](/md/ia02.md) assessment of the **Advanced Web App Development** course at **HCMUS**.

FIT@HCMUS - October 16th, 2024.

## Tech stack

-   React
-   Next.js
-   Tailwind CSS
-   Unsplash API

## How to run

Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

Clone the repository:

```bash
git clone https://github.com/pdqdat/awad-ia02.git
```

Copy the `.env.development` file and rename it to `.env.development.local`, then add your Unsplash Access Key to the file. You can get an access key by creating an application on the [Unsplash Developer Portal](https://unsplash.com/developers).

```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="Your Unsplash Access Key"
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or vist the deployed version at [https://ia2photogallery.vercel.app](https://ia2photogallery.vercel.app)

## Self evaluation

Detailed version of the requirements can be found [here](/md/ia02.md).

<table>
    <thead>
        <tr>
            <th colspan=2>Requirements</th>
            <th>Pt.</th>
        </tr>
    </thead>
    <tbody >
        <tr>
            <td>Successfully fetches data from the Unsplash API, handles loading and error states well</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Displays photos in a responsive, well-styled grid/list with author info</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>Infinite scroll works smoothly, with seamless loading of new photos and clear loading indicators</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Displays full photo, title, author, and description. Provides a good user experience</td>
            <td>&check;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>URLs are intuitive and functional</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>App is well-designed, fully responsive across devices, with additional style considerations</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Code is well-organized, with comments, reusable components, and follows React best practices</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Upload to a public host</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td colspan=2 align=center><strong>Total</strong></td>
            <td align=center><strong>10</strong></td>
        </tr>
    </tbody>
</table>

## References

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Unsplash API Documentation](https://unsplash.com/documentation)
