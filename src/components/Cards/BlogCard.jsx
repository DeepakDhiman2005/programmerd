"use client"
import React from "react";

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

/** @param props - title: "String", desc: "String", date: "November 20, 2024" */
const BlogCard = ({title="", desc="", date=""}, key="") => {
    // router
    const router = useRouter();

    // function
    const GetCardData = () => {
        // console.log(props);
        router.push("/blogs/"+title);
    }

    return <>
        <div key={key} className="flex mt-5 mb-5 flex-col shadow-lg items-start bg-white border border-solid border-slate-100 rounded-lg p-4 w-full md:w-2/3">
            <h2 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white selection:text-blue-600">{title}</h2>
            <p className="font-normal text-start text-lg text-gray-900 dark:text-gray-800">{desc}</p>
            {/* bottom */}
            <div className="flex justify-between items-center w-full">
                <button className="flex items-center justify-between mt-4 text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white" onClick={GetCardData}>Read more</button>

                <div className="flex justify-center items-center mt-4">
                    <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" onClick={()=>{
                        router.push("/");
                    }} />
                    <p className="ml-1 text-sm"> - {date}</p>
                </div>
            </div>
        </div>
    </>
}

export default BlogCard;