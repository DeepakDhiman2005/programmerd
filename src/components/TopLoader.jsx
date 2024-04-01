"use client"
import React from "react";

// next

const TopLoader = ({color="", width=false}) => {
    return <>
        {
            color === "purple" ? <span className={"w-full bg-purple-700 h-[4px] transition-all fixed top-0 left-0 z-[500] overflow-hidden"} style={{width: width ? width+"%": "100%"}}></span>: 
            color === "red" ? <span className={"w-full bg-red-700 h-[4px] transition-all fixed top-0 left-0 z-[500] overflow-hidden"} style={{width: width ? width+"%": "100%"}}></span>: 
            color === "green" ? <span className={"w-full bg-green-700 h-[4px] transition-all fixed top-0 left-0 z-[500] overflow-hidden"} style={{width: width ? width+"%": "100%"}}></span>:
            color === "blue" ? <span className={"w-full bg-blue-700 h-[4px] transition-all fixed top-0 left-0 z-[500] overflow-hidden"} style={{width: width ? width+"%": "100%"}}></span>: 
            <span className={"w-full bg-purple-700 h-[4px] transition-all fixed top-0 left-0 z-[500] overflow-hidden"} style={{width: width ? width+"%": "100%"}}></span>
        }
    </>
}

export default TopLoader;