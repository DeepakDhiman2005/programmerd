"use client"
import React from "react";

const TopLoader = ({color="", progress=null}) => {
    return <>
        {
            <div className="fixed top-0 h-[3px] flex justify-start items-center left-0 w-full z-[500]">
                {
                    color === "purple" ? <span className={"bg-purple-700 h-full transition-all"} style={{width: (progress+"%")}}></span>: 
                    color === "red" ? <span className={"bg-red-700 h-full transition-all"} style={{width: (progress+"%")}}></span>:
                    color === "blue" ? <span className={"bg-green-700 h-full transition-all"} style={{width: (progress+"%")}}></span>:
                    color === "orange" ? <span className={"bg-orange-700 h-full transition-all"} style={{width: (progress+"%")}}></span>: 
                    <span className={"bg-purple-700 h-full transition-all"} style={{width: (progress+"%")}}></span>
                }
            </div>
        }
    </>
}

export default TopLoader;