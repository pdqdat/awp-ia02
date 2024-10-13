# HCMUS Advanced Web App Programming

## IA02 - Unsplash photo gallery

20120268 - Phan Duong Quoc Dat

## How to run the project

Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

Clone the repository:

```bash
git clone https://github.com/pdqdat/awp-ia02.git
```

Create a `.env.development.local` file in the root directory and add the following line:

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

Detailed version of the requirements can be found [here](https://docs.google.com/document/d/1jxr3Eg1oELl_M7IfWUfXFyGBTM1gkZlIQEY4z2IhOjA/edit).

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
            <td>&cross;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Displays photos in a responsive, well-styled grid/list with author info</td>
            <td>&cross;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>Infinite scroll works smoothly, with seamless loading of new photos and clear loading indicators</td>
            <td>&cross;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>Displays full photo, title, author, and description. Provides a good user experience</td>
            <td>&cross;</td>
            <td align=center>2</td>
        </tr>
        <tr>
            <td>URLs are intuitive and functional</td>
            <td>&check;</td>
            <td align=center>1</td>
        </tr>
        <tr>
            <td>App is well-designed, fully responsive across devices, with additional style considerations</td>
            <td>&cross;</td>
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
            <td align=center><strong>3</strong></td>
        </tr>
    </tbody>
</table>

## References

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Unsplash API Documentation](https://unsplash.com/documentation)
