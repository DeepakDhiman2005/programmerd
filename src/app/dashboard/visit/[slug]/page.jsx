// "use client"
// import React from "react";

// component
import DashBoardMonitor from "@/components/DashBoard/DashBoardMonitor";
import TopScrollButton from "@/components/TopScrollButton";

export async function generateStaticParams(){
    return [{slug: "/"}, {slug: "blogs"}, {slug: "video's"}, 
    {slug: "affilates"}, {slug: "courses"}, {slug: "tutorials"}, 
    {slug: "database"}, {slug: "settings"}]
}

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