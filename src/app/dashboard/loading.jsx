"use client"
import React, { useEffect, useState } from "react";
// import LoadingBar from "react-top-loading-bar";

// next
import Router from "next/router";
import TopLoader from "@/components/TopLoader";

// component

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

    return <TopLoader color="purple" progress={IsLoading} />
}