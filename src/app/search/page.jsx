"use client"
import React, { useState } from "react";

// next
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
    const searchparams = useSearchParams();
    // console.log(searchparams.get("query"))

    // useState
    const [LineHighLight, setHighLight] = useState("blogs")

    // function
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
            text = text.split(" ")[0].toLowerCase();
            setHighLight(text);
        }catch(err){}
    }

    return <>
        <h2 className="text-center mt-7 mb-7 font-bold text-2xl text-slate-900">Result for query: <span className="text-purple-700 font-semibold">{searchparams.get("query")}</span></h2>

        <div className="flex flex-col justify-center items-center">
            <ul className="list-none flex justify-start w-[90%] items-center">
                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Blogs (0)</h2>
                    { LineHighLight === "blogs" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Videos (0)</h2>
                    { LineHighLight === "videos" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Products (0)</h2>
                    { LineHighLight === "products" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Courses (0)</h2>
                    { LineHighLight === "courses" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>
            </ul>

            {/* results */}
            <div className="flex flex-col justify-start items-start w-[95%] mt-4 shadow-md shadow-slate-300 rounded-md">
                <h2 className="w-full bg-blue-600 text-white p-4 rounded-t-md selection:text-slate-300">On {LineHighLight.replace(LineHighLight[0], LineHighLight[0].toUpperCase())} Found Result (0)</h2>

                {
                    false ? <>
                        <div className="flex flex-col justify-start items-start w-full bg-white list-none rounded-b-md">
                            <li className="cursor-pointer p-4 w-full hover:bg-blue-100 active:bg-slate-100">How to Learn Html css and javascript.</li>
                            <li className="cursor-pointer p-4 w-full hover:bg-blue-100 active:bg-slate-100">What is vs code editor in window 10.</li>
                            <li className="cursor-pointer p-4 w-full hover:bg-blue-100 active:bg-slate-100">How to compile cpp code?</li>
                        </div>
                    </>: <>
                        <h2 className="p-4 text-xl font-bold ml-1">No Data</h2>
                    </>
                }
            </div>
        </div>
    </>
}

export default SearchPage;