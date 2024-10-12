"use client";

import HttpStatusPage from "@comp/http-status-page";

export default function Error() {
    return <HttpStatusPage status={500}>Something went wrong</HttpStatusPage>;
}
