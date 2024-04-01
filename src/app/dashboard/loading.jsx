"use client"
import React, { useEffect, useState } from "react";

// next
import Router from "next/router";
import TopLoader from "@/components/TopLoader";

// component

export default function Loading(){
    // useState
    const [IsLoading, setIsLoading] = useState(0);

    useEffect(()=>{
        Router.events.on("routeChangeStart", ()=>{
            setIsLoading(45);
        });
        Router.events.on("routeChangeComplete", ()=>{
            let delay = setInterval(() => {
                setIsLoading(80);
                clearInterval(delay)
                setIsLoading(100);
            }, 1200);
        });
    }, [Router]);

    return <TopLoader width={IsLoading} />
}