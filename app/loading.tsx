import React from "react";

import Spinner from "@comp/spinner";

const LoadingPage = () => {
    return (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 sm:min-h-96">
            <div className="animate-bounce">
                <Spinner size="big" />
            </div>
        </div>
    );
};

export default LoadingPage;
