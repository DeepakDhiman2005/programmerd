"use client"
import React from "react";

// components
import InputBoxTag from "@/components/Inputs/InputBoxTag";
import PageBuilder from "./PageBuilder";

const PagesEditor = () => {
    return <>
        <div className="w-full p-4 flex flex-col justify-start items-start">
            <InputBoxTag title="Title" />
            <PageBuilder />
        </div>
    </>
}

export default PagesEditor;