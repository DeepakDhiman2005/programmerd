"use client"
import React, { useRef } from "react";

// functions
import { ALPHAID } from "@/components/Functions/UNIQUEID";

// icons
import { RxCross2 } from "react-icons/rx";

const TutorialTitleInput = ({ defaultValue=null, className="", onChange=function(){} }) => {
    // useRef
    const TitleRef = useRef(null);
    let uniqueID = ALPHAID();

    const DeleteText = () => {
        TitleRef.current.value = "";
    }

    return <>
        <div className={"flex justify-center items-center text-white bg-red-600 border border-solid border-slate-100 rounded-md mt-3 mb-2 pl-2 pr-2 p-1 shadow-sm shadow-slate-300 w-full "+className}>
            <label htmlFor={"title" + uniqueID} className="cursor-pointer">Tutorial: </label>
            <input ref={TitleRef} defaultValue={defaultValue} type="text" id={"title" + uniqueID} name={"title" + uniqueID} placeholder="Tutorial Name..." className="outline-none ml-2 p-2 border border-solid text-black border-transparent w-full shadow-sm shadow-slate-100 rounded-sm" onChange={onChange} autoComplete="off" />
            <RxCross2 size={"23px"} className="ml-2 cursor-pointer text-white" onClick={DeleteText} />
        </div>
    </>
}

export default TutorialTitleInput;