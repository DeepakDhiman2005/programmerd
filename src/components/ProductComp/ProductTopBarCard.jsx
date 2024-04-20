"use client"
import React from "react";

// next
import Image  from "next/image";
import { useRouter } from "next/navigation";

const ProductTopBarCard = ({image="", title=""}) => {
    // useRouter
    const router = useRouter();

    return <>
        <div className=" p-2 pl-3 pr-3 flex flex-col h-28 justify-end ml-2 mr-2 items-center cursor-pointer" onClick={()=>{
            router.push("/products/" + title.toLowerCase());
        }}>
            <Image src={image !== "" ? image: "/logo.svg"} className="hover:scale-105" alt="image" height={50} width={50} />
            <h2 className="mt-2 text-slate-800 font-semibold">{title}</h2>
        </div>
    </>
}

export default ProductTopBarCard;