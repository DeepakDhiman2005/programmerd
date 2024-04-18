"use client"
import React, {useEffect, useRef} from "react";

// functions
import { ALPHAID } from "@/components/Functions/UNIQUEID";

// icons
import { RxCross2 } from "react-icons/rx";

const InputBoxTag = ({ defaultValue=null, className="", title="", onChange=function(){} }) => {
    // useRef
    const TitleRef = useRef(null);
    let uniqueID = ALPHAID();

    const DeleteText = () => {
        TitleRef.current.value = "";
    }

    useEffect(()=>{
        if(defaultValue !== null){
            TitleRef.current.value = defaultValue;
        }
    }, [defaultValue]);

    return <>
        <div className={"flex justify-center items-center border border-solid border-slate-100 bg-slate-50 rounded-md mt-3 mb-2 pl-2 pr-2 p-1 shadow-sm shadow-slate-300 w-full " + className}>
            <label htmlFor={"title" + uniqueID} className="cursor-pointer">{title}: </label>
            <input ref={TitleRef} type="text" id={"title" + uniqueID} name={"title" + uniqueID} placeholder={title+"..."} className="outline-none ml-2 p-2 border border-solid border-transparent w-full shadow-sm shadow-slate-100 rounded-sm" onChange={onChange} autoComplete="off" />
            <RxCross2 size={"23px"} className="ml-2 cursor-pointer" onClick={DeleteText} />
        </div>
    </>
}

export default InputBoxTag;