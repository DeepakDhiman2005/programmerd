"use client"
import React from "react";

// next
import Image from "next/image";

// react icons
import { GoLinkExternal } from "react-icons/go";

/**
 * @params data - {href=null, image="", title="", desc="", details={key: "", value: ""}}
 */
const AdsInsertCard = ({ data={} }, key=null) => {
    let href = data.href ? data.href: null;
    let image = data.image ? data.image: "/logo.svg";
    let title = data.title ? data.title: "";
    let desc = data.desc ? data.desc: "";
    let details = data.details ? data.details: {key: "", value: ""};

    return <>
        <div key={key} className="flex mt-3 mb-3 bg-slate-50 shadow-md shadow-slate-200 justify-around flex-col sm:flex-row p-4 items-center border border-solid rounded-md w-full">
            {/* <h2>Hello world!</h2> */}
            <div className="flex justify-center w-[90%] sm:w-1/2 items-center">
                <a href={href} target="_blank">
                    <Image src={image !== "" ? image: "/logo.svg"} height={200} width={500} alt="image" className="rounded-md" />
                </a>
            </div>
            <div className="flex flex-col w-[90%] sm:w-2/5 justify-center mt-5 sm:m-0 items-start">
                <a href={href} className="text-blue-600 flex hover:underline hover:underline-offset-4 justify-center items-center cursor-pointer" target="_blank">
                    {title}
                    <GoLinkExternal size={"15px"} className="ml-1" />
                </a>
                <p className="text-slate-700 mt-3 font-semibold">{desc}</p>
                <div className="flex justify-center items-center mt-1">
                    <h2 className="text-slate-600 font-bold">{details.key} <span className="text-purple-600 ml-1">{details.value}</span></h2>
                </div>
            </div>
        </div>
    </>
}

export default AdsInsertCard;