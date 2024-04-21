import React from "react";

// next
import Script from "next/script";

const Ads = () => {
    return <>
       <Script
        async
        src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2256609026395082"}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        />
    </>
}

export default Ads;