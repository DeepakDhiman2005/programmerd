"use client"
import React, { Suspense, useState } from "react";

// next
import { useRouter } from "next/navigation";

// component
import DashBoardSideBar from "@/components/DashBoard/DashBoardSideBar";
import DashBoardMonitor from "@/components/DashBoard/DashBoardMonitor";
import TopScrollButton from "@/components/TopScrollButton";
import TopLoader from "@/components/TopLoader";
import DashBoardSignup from "@/components/DashBoard/DashBoardSignup";

const DashBoard = ({slug}) => {
    // router
    const router = useRouter();
    const [Visit, setVisit] = useState(false);

    return <Suspense fallback={<TopLoader/>}>
        <div className="flex justify-start items-start p-4 pt-6">
            {
                Visit ? <>
                    {/* sidebar */}
                    <DashBoardSideBar value={(e)=>{
                        // console.log(e);
                        router.push("/dashboard/"+(e.toLowerCase() === "dashboard" ? "/": e.toLowerCase()));
                    }} />
                    {/* monitor */}
                    <DashBoardMonitor slug={slug} />
                    {/* top button */}
                    <TopScrollButton />
                </>: <>
                    <DashBoardSignup auth={(e)=>{
                        // console.log(e)
                        setVisit(e.bool);
                    }} />
                </>
            }
        </div>
    </Suspense>
}

export default DashBoard;