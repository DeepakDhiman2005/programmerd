"use client"
import React from "react";

const HoverCircleButton = ({color="", className="", children, onClick=function(){}}) => {
    return <>
        {
            color === "white" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-white shadow-md shadow-slate-200 border border-slate-50 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>: 
            color === "blue" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-blue-600 shadow-md shadow-slate-200 border border-blue-500 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>:
            color === "red" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-red-600 shadow-md shadow-slate-200 border border-red-500 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>:
            color === "purple" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-purple-600 shadow-md shadow-slate-200 border border-purple-500 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>:
            color === "green" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-green-600 shadow-md shadow-slate-200 border border-green-500 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>:
            color === "black" ? <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-slate-800 shadow-md shadow-slate-200 border border-slate-500 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>:
            <div className={"flex justify-center items-center rounded-full p-1 cursor-pointer bg-white shadow-md shadow-slate-200 border border-slate-50 border-solid"+" "+className} onClick={onClick}>
                {children}
            </div>
        }
        
    </>
}

export default HoverCircleButton;