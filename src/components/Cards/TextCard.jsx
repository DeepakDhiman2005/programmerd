"use client"
import React from "react"

/** @param props - title: "String", desc: "String" */
const TextCard = (props) => {
    return <>
        <a href={props.href} target="_blank" className="w-3/4 mt-5 mb-5 sm:w-[45%] h-auto block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-5 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p className="font-normal text-start text-lg text-gray-700 dark:text-gray-400">{props.desc}</p>
        </a>
    </>
}

export default TextCard