"use client"
import React from "react";

// component
import DashBoardMonitor from "@/components/DashBoard/DashBoardMonitor";
import TopScrollButton from "@/components/TopScrollButton";


const DashBoardSlug = ({ params }) => {
    return <>
        <DashBoardMonitor slug={params.slug === "visit" ? "dashboard" : params.slug} />
        {/* top button */}
        <TopScrollButton />
    </>
}

export default DashBoardSlug;