import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 ring-offset-background duration-300 ease-in-out hover:scale-110 hover:bg-indigo-600 disabled:pointer-events-none disabled:opacity-50"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
