"use client"
import React from "react";

// next
import { useRouter } from "next/navigation";

// component
import DashBoardSideBar from "@/components/DashBoard/DashBoardSideBar";
import DashBoardMonitor from "@/components/DashBoard/DashBoardMonitor";
import TopScrollButton from "@/components/TopScrollButton";

const DashBoard = ({slug}) => {
    // router
    const router = useRouter();

    return <>
        <div className="flex justify-start items-start p-4 pt-6">
            {/* sidebar */}
            <DashBoardSideBar value={(e)=>{
                // console.log(e);
                router.push("/dashboard/"+(e.toLowerCase() === "dashboard" ? "/": e.toLowerCase()));
            }} />
            {/* monitor */}
            <DashBoardMonitor slug={slug} />
            {/* top button */}
            <TopScrollButton />
        </div>
    </>
}

export default DashBoard;