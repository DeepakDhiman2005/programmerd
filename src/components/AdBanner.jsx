"use client"
import React, { useEffect } from "react";

const AdBanner = () => {
    useEffect(()=>{
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }catch(err){}
    }, []);

    return <>
        <ins className="adsbygoogle"
            style={{display: "block"}}
            data-ad-client="ca-pub-2256609026395082"
            data-ad-slot="9162336199"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    </>
}

export default AdBanner;