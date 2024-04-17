"use client"
import React, { useEffect, useState } from "react";


const VideoRender = ({ video="", loop=false, className="" }, key=null) => {
    // useState
    const [Vid, setVid] = useState("/videos/pdbackplay.mp4");
    const [FrameType, setFrameType] = useState("videos/pdbackplay.mp4");

    useEffect(() => {
        try {
            if(typeof video === "string"){
                if(video !== ""){
                    if(video.match("http") || video.match("https")){
                        setFrameType(true);
                    }else {
                        setFrameType(false);
                    }
                    setVid(video);
                }else {
                    setVid("/videos/pdbackplay.mp4");
                }
            } else {
                setFrameType(false);
                if (video.size && video.name && video.type) {
                    setVid(URL.createObjectURL(video));
                } else{
                    setVid("/videos/pdbackplay.mp4");
                }
            }
        } catch (err) { }
    }, [video]);

    return <>
        {
            !FrameType ? <video src={Vid} key={key} loop={loop ? loop : false} className={"w-full sm:w-3/4 h-auto mt-4 mb-4 border border-solid border-slate-500 rounded-md shadow-lg shadow-slate-600 cursor-pointer " + className} controls></video>:

            <iframe width="560" height="315" src={Vid} key={key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className={"w-3/4 h-80 rounded-md border border-solid "+className} allowFullScreen></iframe>
        }
    </>
}

export default VideoRender;