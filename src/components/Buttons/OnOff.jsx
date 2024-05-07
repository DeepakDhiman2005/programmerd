"use client"
import React, {useEffect, useRef, useState} from "react";

const OnOff = ({value=function(){}, defaultValue=false}) => {
    // useRef
    const onoffRef = useRef(null);

    // useState
    const [OnOffValue, setOnOffValue] = useState(defaultValue);

    // functions
    const ClickEvent = () => {
        try{
            if(OnOffValue){
                onoffRef.current.className = "border border-solid rounded-full w-10 cursor-pointer transition-all h-6 flex p-0.5 justify-start items-center bg-white shadow-sm shadow-slate-200";
                value(false);
                setOnOffValue(false);
            }else {
                onoffRef.current.className = "border border-solid rounded-full w-10 cursor-pointer transition-all h-6 flex p-0.5 justify-end items-center bg-white shadow-sm shadow-slate-200";
                value(true);
                setOnOffValue(true);
            }
        }catch(err){}
    }

    useEffect(()=>{
        if(defaultValue){
            setOnOffValue(true);
            onoffRef.current.className = "border border-solid rounded-full w-10 cursor-pointer transition-all h-6 flex p-0.5 justify-end items-center bg-white shadow-sm shadow-slate-200";
        }else{
            setOnOffValue(false);
            onoffRef.current.className = "border border-solid rounded-full w-10 cursor-pointer transition-all h-6 flex p-0.5 justify-start items-center bg-white shadow-sm shadow-slate-200";
        }
    }, [defaultValue]);

    return <>
        <div ref={onoffRef} className="border border-solid rounded-full w-10 cursor-pointer transition-all h-6 flex p-0.5 justify-start items-center bg-white shadow-sm shadow-slate-200" onClick={ClickEvent}>
            <div className="w-1/2 bg-blue-600 rounded-full h-[95%]"></div>
        </div>
    </>
}

export default OnOff;