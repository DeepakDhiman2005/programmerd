"use client"
import React from "react";

// components
import InputBoxTag from "@/components/Inputs/InputBoxTag";
import DescriptionBoxTag from "@/components/Inputs/DescriptionBoxTag";
import ImageTypeSelector from "@/components/Inputs/ImageTypeSelector";
import NoteBook from "@/components/NoteBook/NoteBook";
import Button from "@/components/Button";

const HostingCardEditor = () => {
    return <>
        <div className="flex flex-col justify-start items-start">
            <InputBoxTag title="Title" />
            <DescriptionBoxTag />
            <InputBoxTag title="Href" />
            <ImageTypeSelector />
            <h2 className="mt-2 text-slate-800 font-semibold">Points:</h2>
            <NoteBook range={4} />
        </div>

        <div className="flex justify-start mt-3 items-center">
            <Button color="purple">Submit</Button>
            <Button color="blue" className="ml-2">Overview</Button>
        </div>
    </>
}

export default HostingCardEditor;