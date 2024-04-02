"use client"
import React from "react";

// next
import ImageRender from "./ImageRender";

/** @param props - title: String desc(description): String | image: url or file or buffer | button: String */
const Card = ({image, title="", desc="", button="", height, width, href}, key="") => {
    return <>
        <div key={key} className="relative flex flex-col bg-clip-border rounded-xl ml-2 mr-2 bg-white text-gray-700 shadow-md mt-6  mb-6 w-96">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-gray-500 text-white shadow-blue-gray-500/40 shadow-lg -mt-6 relative">
                {/* <Image src={props.image} alt="card-image" width={1000} height={100} /> */}
                <ImageRender image={image} width={width ? width: 1000} height={height ? height: 100} className="w-full" />
            </div>
            <div className="p-6">
                <h2 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">{title}</h2>
                <p className="block antialiased font-sans text-base font-normal leading-relaxed text-inherit text-slate-800">{desc}</p>
            </div>
            <div className="p-6 pt-0">
                <a href={href ? href: null} target="_blank">
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button" onClick={()=>{
                    console.log({title: title, desc: desc, href: href, image: image});
                }}>{button}</button></a>
            </div>
        </div>
    </>
}

export default Card;