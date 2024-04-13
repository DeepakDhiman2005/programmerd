"use client"
import React from "react";

// component
import DashBoardMonitor from "@/components/DashBoard/DashBoardMonitor";
import TopScrollButton from "@/components/TopScrollButton";


const DashBoardVisitPage = ({ params }) => {
    return <>
        <div className="w-full">
            <DashBoardMonitor slug={params.slug === "/" ? "dashboard" : params.slug} />
            {/* top button */}
            <TopScrollButton />
        </div>
    </>
}

export default DashBoardVisitPage;