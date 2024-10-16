import React from "react";

interface BadgeProps {
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
    return (
        <div
            className="mr-2 inline-flex items-center rounded-full bg-foreground px-2.5 py-0.5 text-sm font-semibold text-background text-white transition-colors"
            {...props}
        >
            {children}
        </div>
    );
};

export default Badge;
