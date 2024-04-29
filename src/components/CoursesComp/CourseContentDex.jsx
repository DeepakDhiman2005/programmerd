"use client"
import React, { useState } from "react";

const CourseContentDex = () => {
    // useState
    const [LineHighLight, setHighLight] = useState("overview");
    // const [IsLoading, setIsLoading] = useState(0);

    const onClickButton = (e) => {
        try{
            let key = e.target.tagName.toLowerCase();
            let text = "";
            if(key === "h2"){
                text = e.target.innerText;
            }else if(key === "span"){
                let _text = e.target.parentNode;
                text = _text.querySelector("h2").innerText;
            }else if(key === "li"){
                text = e.target.querySelector("h2").innerText;
            }
            // console.log(text)
            text = text.toLowerCase();
            setHighLight(text);
        }catch(err){}
    }

    return <>
        <div key={"coursevideokey"} className="flex flex-col justify-start mt-3 w-full items-start">
            <ul className="list-none flex justify-start ml-4 items-center">
                <li key={"SearchBarLiBlog"} className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800 text-sm sm:text-lg">OverView</h2>
                    {LineHighLight === "overview" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800 text-sm sm:text-lg">Comments</h2>
                    {LineHighLight === "comments" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800 text-sm sm:text-lg">Downloads</h2>
                    {LineHighLight === "downloads" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                </li>
            </ul>

            {/* results */}
            <div className="w-full flex justify-start items-start">
                <h2 className="mt-5 mb-5 w-full flex justify-center items-center text-xl text-slate-800 font-bold"><span className="w-[90%]">Result Not Available!</span></h2>
            </div>
        </div>
    </>
}

export default CourseContentDex;