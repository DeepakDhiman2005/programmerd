"use client"
import React, {useEffect, useRef} from "react";

const NoteInputField = ({id, defaultValue=false, value=function(){}}) => {
    // useRef
    const noteTextRef = useRef(null);

    useEffect(()=>{
        noteTextRef.current.value = defaultValue;
    }, [defaultValue]);

    return <>
        <input ref={noteTextRef} type="text" className="w-[90%] outline-none border-b border-solid border-gray-50 mt-1 mb-1 ml-2" name={id} id={id} onKeyUp={value} autoComplete="off" />
    </>
}

export default NoteInputField;