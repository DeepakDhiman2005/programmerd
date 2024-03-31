"use client"
import React, { useEffect, useState, useRef } from "react";

// icons
import { MdVideoLibrary } from "react-icons/md";

const VideoSelectBox = ({ uniqueID = "", defaultValue = {}, value = function () { } }) => {
    // useState
    const [Vid, setVid] = useState(false);

    // useRef
    const VidRef = useRef(null);

    useEffect(() => {
        try {
            if (defaultValue.type && defaultValue.name && defaultValue.size) {
                setVid(URL.createObjectURL(defaultValue));
            }
        } catch (err) { }
    }, [defaultValue]);

    // function
    let SelectVideo = (e) => {
        // console.log(e);
        try {
            let videoPath = e.target.files[0];
            setVid(URL.createObjectURL(videoPath))
            value(videoPath);
        } catch (err) { }
    }
    return <>
        <label className="flex justify-center items-center bg-slate-50 border border-dotted border-slate-100 rounded-md mt-3 mb-2 shadow-sm shadow-slate-300 w-full cursor-pointer" htmlFor={"video" + uniqueID}>
            {
                Vid ? <>
                    <video src={Vid} className="rounded-md w-full h-auto hover:shadow-md hover:shadow-slate-800" alt="video" controls />
                </> : <>
                    <MdVideoLibrary size={"26px"} className="mt-20 mb-20 text-slate-700 cursor-pointer" />
                </>
            }
        </label>
        <input ref={VidRef} accept="video" type="file" id={"video" + uniqueID} name={"video" + uniqueID} style={{ display: "none" }} onChange={SelectVideo} />
    </>
}

export default VideoSelectBox;