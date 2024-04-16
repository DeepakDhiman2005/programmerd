"use client"
import React, { useEffect, useRef } from 'react';

const FastLeftDownAnimation = ({className="", children }) => {
    // animation 
    const AnimRef = useRef(null);
    const MainRef = useRef(null);

    useEffect(()=>{
        AnimRef.current.className = "absolute w-full top-0 transition-all duration-700 left-0";
        let onetime = setInterval(() => {
            clearInterval(onetime);
            MainRef.current.className = ("w-full flex justify-center transition-all duration-700 relative items-center " + className);
            AnimRef.current.className = "w-full top-0 transition-all duration-700 left-0";
        }, 700);
    });

    return <>
        <div ref={MainRef} className={'w-full flex justify-center overflow-hidden h-96 transition-all duration-700 relative items-center ' + className}>
            <div ref={AnimRef} className="absolute w-full top-0 transition-all duration-700 -left-full">
                {children}
            </div>
        </div>
    </>
}

export default FastLeftDownAnimation;