"use client";

import { usePathname } from "next/navigation";

import HttpStatusPage from "@comp/http-status-page";

export default function NotFound() {
    const pathname = usePathname();

    return (
        <HttpStatusPage status={404}>
            <span className="cursor-not-allowed underline decoration-dotted underline-offset-2">
                {pathname}
            </span>{" "}
            could not be found
        </HttpStatusPage>
    );
}
