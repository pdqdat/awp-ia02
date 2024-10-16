import React from "react";

import { Loader2 } from "lucide-react";

interface SpinnerProps {
    big?: boolean;
}

const Spinner: React.FC<SpinnerProps> = () => {
    // big spinner: 52
    // small spinner: 16

    return <Loader2 className={`h-52 w-52 animate-spin text-indigo-500`} />;
};

export default Spinner;
