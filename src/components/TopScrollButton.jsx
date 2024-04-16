"use client"
import React, { useEffect, useState } from "react";

// icons
import { FaArrowUp } from "react-icons/fa";

/** @param button = show `scrollY` >= `10` */
const TopScrollButton = ({container}) => {
    // console.log(container.current)
    // useState
    const [TopButton, setTopButton] = useState(false);

    useEffect(()=>{
        try{
            if(container){
                container.current.addEventListener("scroll", (e)=>{
                    // console.log(e.target.scrollTop);
                    if(e.target.scrollTop >= 10){
                        setTopButton(true);
                    }else{
                        setTopButton(false);
                    }
                })
            }else{
                window.addEventListener("scroll", ()=>{
                    if(window.scrollY >= 10){
                        setTopButton(true);
                    }else{
                        setTopButton(false);
                    }
                })
            }
        }catch(err){ }
    }, []);

    return <>
        <div className="text-slate-800 bg-slate-50 border border-solid border-slate-100 rounded-full p-4 cursor-pointer shadow-md shadow-slate-400 w-auto fixed z-[200] bottom-16 right-16 flex justify-center items-center active:bg-slate-100 active:shadow-slate-600 active:transition-shadow animate-bounce" style={{display: TopButton ? "flex": "none"}} onClick={()=>{
            try{
                if(container){
                    container.current.scrollTo(0, -1)
                }else{
                    window.scrollTo(0, -1)
                }
            }catch(err){ }
        }}>
            <FaArrowUp size={"23px"} className="text-slate-700" />
        </div>
    </>
}

export default TopScrollButton;