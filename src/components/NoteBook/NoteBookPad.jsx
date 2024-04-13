"use client"
import React, {useEffect, useRef} from "react";

const NoteBookPad = ({number=1, select=false, defaultValue=null, value=function(){}}) => {
    // useRef
    const TextArea = useRef(null);

    // function
    const Pointer = () => {
        try{
            TextArea.current.focus();
        }catch(err){}
    }

    useEffect(()=>{
        try{
            if(select){ Pointer() }
            if(defaultValue !== null){
                TextArea.current.value = defaultValue;
            }
        }catch(err){}
    }, [select, defaultValue]);

    return <>
        <div className="flex flex-col justify-center items-center w-[10%] bg-slate-100">
            <span className="p-1 pl-4 pr-4 w-full h-full cursor-pointer text-center" onClick={Pointer}>{number}</span>
        </div>
        
        <div className="flex flex-col justify-start items-start w-full bg-white">
            <input ref={TextArea} type="text" className="w-full outline-none border-b border-solid border-gray-50 pt-1 pb-1 pl-2"
             autoComplete="off" onKeyDown={(e)=>{
                if(e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Backspace"){
                    value({event: e.key, text: e.target.value, number: number});
                }
             }} onChange={(e)=>{
                value({event: '', text: e.target.value, number: number});
             }} />
        </div>
    </>
}

export default NoteBookPad;