"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import LanguageCard from "@/components/Cards/LanguageCard";
import TopLoader from "@/components/TopLoader";
import Loader from "@/components/Loader";

const Tutorial = () => {
    // useState
    const [IsLoading, setIsLoading] = useState(0);
    const [Display, setDisplay] = useState([]);

    const getLanguageCards = async () => {
        setIsLoading(45);
        const resp = await axios.get("/api/tutorials/", { cache: "no-store" });
        setIsLoading(95);
        setDisplay(resp.data);
        setIsLoading(100);

        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 500);
    }

    useEffect(()=>{
        getLanguageCards();       
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <h2 className="text-blue-600 text-center text-3xl font-bold mt-10 mb-10">Tutorials</h2>
        <div className="flex flex-wrap justify-center items-center pl-5 pr-5">
            {/* <LanguageCard title="Python Tutorial" image="/image/program/python.webp" path="python" />
            <LanguageCard title="C Tutorial" image="/image/program/c.webp" path="c" />
            <LanguageCard title="C++ Tutorial" image="/image/program/cpp.webp" path="cpp" />
            <LanguageCard title="JavaScript Tutorial" image="/image/program/js.webp" path="js" />
            <LanguageCard title="HTML Tutorial" image="/image/program/html.webp" path="html" />
            <LanguageCard title="CSS Tutorial" image="/image/program/css.webp" path="css" />
            <LanguageCard title="Reactjs Tutorial" image="/image/program/reactjs.webp" path="reactjs" /> */}
            {
                Display.length !== 0 ? Display.map(({title, image, path}, i)=>{
                    return <LanguageCard key={"languagecard"+i} title={title} image={image} path={path} />
                }): <div className="mt-14 mb-14 w-full flex justify-center items-center">
                    <Loader />
                </div>
            }
        </div>
    </>
}

export default Tutorial;