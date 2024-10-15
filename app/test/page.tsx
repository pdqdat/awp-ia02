/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import Spinner from "@comp/spinner";
import LoadingPage from "../loading";
import Button from "@comp/button";
import Link from "next/link";

const TestPage = () => {
    return (
        <div className="flex min-h-72 flex-col items-center justify-center sm:min-h-96">
            <h1 className="text-3xl font-bold text-red-500">
                Error loading photo
            </h1>
            <p className="mt-4 text-lg text-gray-700">
                Please try again later.
            </p>

            <div className="mt-8">
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default TestPage;
