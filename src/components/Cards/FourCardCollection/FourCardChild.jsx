"use client"
import React from "react";
// next
import Image from "next/image";

const FourCardChild = ({image="", href=null, title="", desc=""}) => {
    return <>
        <div className="flex flex-col w-[45%] justify-center border border-solid rounded-md p-2 items-start">
            <a href={href} target="_blank" className="mb-3 h-72 flex items-center justify-center w-full">
                <Image src={image !== "" ? image: "/logo.svg"} alt="image" width={200} height={200} className="cursor-pointer hover:scale-90" />
            </a>
            <h2 className="text-xl ml-1 font-semibold text-slate-800">{title}</h2>
            <h2 className="text-lg ml-1  text-green-700">{desc}</h2>
        </div>
    </>
}

export default FourCardChild;