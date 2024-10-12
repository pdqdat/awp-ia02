import React from "react";

import Link from "next/link";

interface HttpStatusPageProps {
    status: number;
    children: React.ReactNode;
}

const HttpStatusPage: React.FC<HttpStatusPageProps> = ({
    status,
    children,
}) => {
    return (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 sm:min-h-96">
            <h1 className="text-[100px] leading-none text-gray-800 sm:text-[120px] dark:text-gray-200">
                {status}
            </h1>

            <div className="flex flex-col gap-6 text-center">
                {children && (
                    <div className="pt-1 text-gray-800 dark:text-gray-200">
                        {children}
                    </div>
                )}

                <Link href="/" className="pt-4 font-bold">
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default HttpStatusPage;
