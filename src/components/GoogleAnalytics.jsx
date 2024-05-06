"use client"
import React from "react";

// next
import Script from "next/script";

const GoogleAnalytics = () => {
    return <>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5MM3ZSB7FM" />
        <Script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MM3ZSB7FM');`
        }} />
    </>
}

export default GoogleAnalytics;