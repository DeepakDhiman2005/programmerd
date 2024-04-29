"use client"
import React from "react";

const Button = ({children, color=false, className=false, onClick=function(){}, title=null, value="" , ariaValueText=""}) => {
    return <>
        {
            color === "green" ? <>
                <button className={"p-2 text-white bg-green-600 cursor-pointer border border-solid border-green-600 rounded-md shadow-md shadow-slate-50 hover:bg-green-700"+" "+className} title={title} onClick={onClick} value={value} aria-valuetext={ariaValueText}>{children}</button>
            </>:
            color === "red" ? <>
                <button className={"p-2 text-white bg-red-600 cursor-pointer border border-solid border-red-600 rounded-md shadow-md shadow-slate-50 hover:bg-red-700"+" "+className} title={title} onClick={onClick} value={value} aria-valuetext={ariaValueText}>{children}</button>
            </>:
            color === "blue" ? <>
                <button className={"p-2 text-white bg-blue-600 cursor-pointer border border-solid border-blue-600 rounded-md shadow-md shadow-slate-50 hover:bg-blue-700"+" "+className} title={title} onClick={onClick} value={value} aria-valuetext={ariaValueText}>{children}</button>
            </>:
            color === "white" ? <>
                <button className={"p-2 text-slate-700 bg-transparent cursor-pointer hover:text-slate-800"+" "+className} onClick={onClick} value={value} title={title} aria-valuetext={ariaValueText}>{children}</button>
            </>: <>
                <button className={"p-2 text-white bg-purple-600 cursor-pointer border border-solid border-purple-600 rounded-md shadow-md shadow-slate-50 hover:bg-purple-700"+" "+className} title={title} onClick={onClick} value={value} aria-valuetext={ariaValueText}>{children}</button>
            </>
        }
    </>
}

export default Button;