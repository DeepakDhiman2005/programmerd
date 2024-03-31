import React from "react";

// components
import LanguageCard from "@/components/Cards/LanguageCard";

const Tutorial = () => {
    return <>
        <h2 className="text-blue-600 text-center text-3xl font-bold mt-10 mb-10">Tutorials</h2>
        <div className="flex flex-wrap justify-center items-center pl-5 pr-5">
            <LanguageCard title="Python Tutorial" image="/images/program/python.webp" path="python" />
            <LanguageCard title="C Tutorial" image="/images/program/c.webp" path="c" />
            <LanguageCard title="C++ Tutorial" image="/images/program/cpp.webp" path="cpp" />
            <LanguageCard title="JavaScript Tutorial" image="/images/program/js.webp" path="js" />
            <LanguageCard title="HTML Tutorial" image="/images/program/html.webp" path="html" />
            <LanguageCard title="CSS Tutorial" image="/images/program/css.webp" path="css" />
            <LanguageCard title="Reactjs Tutorial" image="/images/program/reactjs.webp" path="reactjs" />
        </div>
    </>
}

export default Tutorial;