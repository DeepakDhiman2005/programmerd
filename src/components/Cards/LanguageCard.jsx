"use client"
import React from "react";

// next 
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * @param props title: "string", image: "path", path="language_name"
 */
const LanguageCard = ({title="", image="", path=""}) => {
    // next
    const router = useRouter();

    return <>
        <div className="bg-white pt-5 pb-5 m-5 w-full sm:w-2/5 border border-solid border-slate-200 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
            <Image src={image} alt="image" width={100} height={100} />

            <h2 className="mt-3 mb-3 font-bold text-xl">{title}</h2>

            <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-2 pt-1 pb-1 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={()=>{
                router.push("/tutorial/"+path);
            }}>Start Learning</button>
        </div>
    </>
}

export default LanguageCard;