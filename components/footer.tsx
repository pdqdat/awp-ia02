import React from "react";

const Footer = () => {
    return (
        <footer className="p-6 text-center sm:p-12">
            Unsplash Photo Gallery | By{" "}
            <a
                href="https://github.com/pdqdat"
                target="_blank"
                className="font-semibold text-indigo-500 duration-300 ease-in-out hover:text-indigo-600"
                rel="noreferrer"
            >
                Dat Phan
            </a>{" "}
            | Built with Next.js, deployed on Vercel.
        </footer>
    );
};

export default Footer;
