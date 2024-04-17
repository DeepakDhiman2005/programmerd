"use client"
import React from "react";

// components
import VideoRender from "../VideoRender";

const CourseVideoDex = () => {
    return <div className="w-full flex justify-center items-center h-96 p-2">
        {/* side 1 */}
        <div className="w-[65%] h-full">
            <VideoRender video="https://www.youtube.com/embed/vunhMBRfhL8?si=Tt1T4-8VfWXO2AvS" className="w-full h-full" />
        </div>
        {/* side 2 */}
        <div className="w-[35%] h-full">
            <ul className="w-full overflow-y-scroll h-full flex flex-col justify-start items-center list-none">
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
                <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">What is Github? - Overview Completed!</li>
            </ul>
        </div>
    </div>
}

export default CourseVideoDex;