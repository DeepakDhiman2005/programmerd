"use client"
import React, { useState } from "react";

// next
import { useRouter } from "next/navigation";

// component
import DashBoardSignup from "@/components/DashBoard/DashBoardSignup";
import TopLoader from "@/components/TopLoader";

const DashBoard = () => {
    // router
    const router = useRouter();
    const [IsLoading, setIsLoading] = useState(35);

    return <>
        <TopLoader progress={IsLoading} />
        <div className="flex justify-start items-start p-4 pt-6">
            {
                <DashBoardSignup auth={(e) => {
                    // console.log(e)
                    setIsLoading(100);
                    if(e){
                        router.push("/dashboard/visit/");
                    }
                }} />
            }
        </div>
    </>
}

export default DashBoard;