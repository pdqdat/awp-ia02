import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-purple-500 px-4 py-2 font-medium ring-offset-background transition-colors hover:bg-purple-600 disabled:pointer-events-none disabled:opacity-50"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
