"use client"
import React, { useEffect, useState } from "react";

// next
import Router from "next/router";

// component
import TopLoader from "@/components/TopLoader";

export default function Loading(){
    // useState
    const [IsLoading, setIsLoading] = useState(0);

    useEffect(()=>{
        Router.events.on("routeChangeStart", ()=>{
            setIsLoading(40);
        });
        Router.events.on("routeChangeComplete", ()=>{
            setIsLoading(100);
        });
    }, [Router]);

    // return <LoadingBar height={500} className="bg-purple-700 text-purple-700 z-[500]" color="purple" progress={IsLoading} onLoaderFinished={()=>{
    //     setIsLoading(0);
    // }} />
    return <TopLoader progress={IsLoading} />
}