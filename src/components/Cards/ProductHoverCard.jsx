"use client"
import React from "react";

// next
import Image from "next/image";

/**
 * @param {*} title="String", desc="String"
 */
const ProductHoverCard = ({title="", desc=""}) => {
    return <>
        <div className="bg-white border border-solid border-gray-300 flex flex-col justify-center items-center w-full h-auto cursor-pointer rounded-sm p-2 m-2">
            <div className="flex justify-center items-center w-full">
                <Image src={"/logo.svg"} width={300} height={100} alt="image" className="hover:scale-90" />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 w-full">
                <h2 className="text-slate-700">{title}</h2>
                <h2 className="text-slate-900 font-bold">{desc}</h2>
            </div>
        </div>
    </>
}

export default ProductHoverCard;