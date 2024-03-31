"use client"
import React, { useEffect, useState } from "react";


const VideoRender = ({ file = false, src = "", loop=false}) => {
    // useState
    const [Vid, setVid] = useState(false);

    useEffect(() => {
        try {
            if (file.size && file.name && file.type) {
                setVid(URL.createObjectURL(file));
            }
        } catch (err) { }
    }, [file]);

    return <>
        <video src={Vid ? Vid: src} loop={loop ? loop : false} className={"w-full sm:w-3/4 h-auto mt-4 mb-4 border border-solid border-slate-500 rounded-md shadow-lg shadow-slate-600 cursor-pointer"} controls></video>
    </>
}

export default VideoRender;