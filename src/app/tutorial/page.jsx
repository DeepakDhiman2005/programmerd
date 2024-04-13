"use client"
import React, { useEffect, useState } from "react";

// components
import LanguageCard from "@/components/Cards/LanguageCard";
import TopLoader from "@/components/TopLoader";

const Tutorial = (props) => {
    // useState
    const [IsLoading, setIsLoading] = useState(0);

    useEffect(()=>{
        setIsLoading(100);
        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 500);
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <h2 className="text-blue-600 text-center text-3xl font-bold mt-10 mb-10">Tutorials</h2>
        <div className="flex flex-wrap justify-center items-center pl-5 pr-5">
            <LanguageCard title="Python Tutorial" image="/image/program/python.webp" path="python" />
            <LanguageCard title="C Tutorial" image="/image/program/c.webp" path="c" />
            <LanguageCard title="C++ Tutorial" image="/image/program/cpp.webp" path="cpp" />
            <LanguageCard title="JavaScript Tutorial" image="/image/program/js.webp" path="js" />
            <LanguageCard title="HTML Tutorial" image="/image/program/html.webp" path="html" />
            <LanguageCard title="CSS Tutorial" image="/image/program/css.webp" path="css" />
            <LanguageCard title="Reactjs Tutorial" image="/image/program/reactjs.webp" path="reactjs" />
        </div>
    </>
}

export default Tutorial;