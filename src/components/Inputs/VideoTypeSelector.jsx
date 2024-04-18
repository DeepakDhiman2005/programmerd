"use client"
import React, { useEffect, useRef, useState } from "react";

// functions
import { ALPHAID } from "@/components/Functions/UNIQUEID";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Dropdown from "../Dropdown";
import VideoSelectBox from "../SelectorBox/VideoSelectBox";

const VideoTypeSelector = ({ defaultValue=null, value=function(){} }) => {
    const VideoRef = useRef(null);
    let uniqueID = ALPHAID("video");
    const [VidType, setVidType] = useState(false);

    const Inputs = (e) => {
        let val = null;
        if (e.target) {
            val = e.target.value;
        } else {
            val = e;
        }
        value(val);
    }

    const DeleteText = () => {
        VideoRef.current.value = "";
        value("");
    }

    useEffect(()=>{
        try{
            if(defaultValue !== null){
                if (defaultValue.match("http") || defaultValue.match("https") || typeof defaultValue === "string") {
                    setVidType("Video Link");
                } else {
                    setVidType("Video Selector");
                }
            }
        }catch(err){}
    }, [defaultValue]);

    return <>
        <div className="border border-solid rounded-md flex flex-col w-full justify-start items-start">
            <Dropdown title={"Video Type"} className="flex justify-center items-center w-full" value={(e) => { setVidType(e) }}>
                <li>Video Link</li>
                <li>Video Selector</li>
            </Dropdown>
            {
                VidType === "Video Link" ? <>
                    <div className="flex justify-center items-center bg-slate-50 border border-solid border-slate-100 rounded-md mt-3 mb-2 pl-2 pr-2 p-1 shadow-sm shadow-slate-300 w-full">
                        <label htmlFor={"VideoLink" + uniqueID} className="cursor-pointer">Video: </label>
                        <input ref={VideoRef} defaultValue={defaultValue} type="text" id={"VideoLink" + uniqueID} name={"VideoLink" + uniqueID} placeholder="Video Link..." className="outline-none ml-2 p-2 border border-solid border-transparent w-full shadow-sm shadow-slate-100 rounded-sm" onChange={Inputs} autoComplete="off" />
                        <RxCross2 size={"23px"} className="ml-2 cursor-pointer text-slate-800" onClick={DeleteText} />
                    </div>
                </> : <VideoSelectBox value={Inputs} defaultValue={defaultValue} uniqueID={uniqueID} />
            }
        </div>
    </>
}

export default VideoTypeSelector;