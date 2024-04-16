"use client"
import React, { useEffect, useRef } from "react";

const FaLeftAnimation = ({className="", children}) => {
    // variables
    const onClose = "w-full h-full flex justify-center items-center top-0 transition-all left-0 duration-700 absolute";
    const CloseShadow = "w-0 h-0 bottom-0 transition-all absolute flex justify-start items-center top-0 duration-700 left-0";

    // useRef
    const cardRef = useRef(null);
    const shadowRef = useRef(null);

    useEffect(()=>{
        // console.log("fa left animation!")
        try{
            const observer = new IntersectionObserver((entires)=>{
                // console.log(entires)
                entires.forEach((entire)=>{
                    if (entire.isIntersecting){
                        // console.log("intersecting of fa left animation!");
                        let onetime = setInterval(() => {
                            clearInterval(onetime);
                            cardRef.current.className = onClose;
                            shadowRef.current.className = CloseShadow;
                        }, 100);
                    }
                })
            });
            let element = document.querySelector(".FaLeftAnimation");
            observer.observe(element);
        }catch(err){}
    }, []);

    return <>
        <div className={"FaLeftAnimation relative overflow-hidden h-96 "+className}>
            <div ref={cardRef} className="w-full h-full flex justify-center items-center top-0 transition-all duration-700 -left-60 absolute">
                {children}
            </div>
            <div ref={shadowRef} className="w-full h-full bottom-0 transition-all absolute flex justify-start items-center duration-700 top-0 left-0">
                <div className="h-3/4 w-full bg-white opacity-60 brightness-90 blur-lg shadow-md shadow-slate-200"></div>
            </div>
        </div>
    </>
}

export default FaLeftAnimation;