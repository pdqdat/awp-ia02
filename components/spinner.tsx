import React from "react";

import { Loader2 } from "lucide-react";

interface SpinnerProps {
    size?: "small" | "big";
}

const Spinner: React.FC<SpinnerProps> = ({ size = "small" }) => {
    const spinnerSize = size === "small" ? 16 : 52;

    return (
        <Loader2
            className={`text-indigo-500 h-${spinnerSize} w-${spinnerSize} animate-spin`}
        />
    );
};

export default Spinner;
