"use client"
import React, {useEffect, useRef} from "react";

// functions
import { ALPHAID } from "@/components/Functions/UNIQUEID";

const DescriptionBoxTag = ({ defaultValue=null, onChange=function(){} }) => {
    // useRef
    const DescRef = useRef(null);
    let uniqueID = ALPHAID();

    useEffect(()=>{
        if(defaultValue !== null){
            DescRef.current.value = defaultValue;
        }
    }, [defaultValue]);

    return <>
        <div className="flex flex-col justify-start items-start mb-3 mt-2 w-full">
            <label htmlFor={"message" + uniqueID} className="font-semibold mr-3 text-lg cursor-pointer">Description: </label>
            <textarea ref={DescRef} id={"message" + uniqueID} rows="4" name={"message" + uniqueID} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Your Description..." onChange={onChange}></textarea>
        </div>
    </>
}

export default DescriptionBoxTag;