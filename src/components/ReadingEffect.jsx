"use client"
import React, {useEffect, useRef} from "react";

/** @param props = text: "String" 
 * className: "write class like: {text-blue-600 text-xl}"
 * textcase: "upper" & "lower"
 * toNewText: "Add next text"
 * toClass: "write new text class"
*/
const ReadingEffect = ({text, className, textcase, toNewText="", toClass=""}) => {
    // logic
    if(textcase === "upper"){
        text = text.toUpperCase();
    }else if(textcase === "lower"){
        text = text.toLowerCase();
    }

    // useRef
    const typingRef = useRef(null);

    useEffect(()=>{
        let _onetime = false;
        window.addEventListener("scroll", ()=>{
            // console.log(scrollY);
            if(scrollY >= 2000 && !_onetime){
                let i = 0;
                let typingInterval = setInterval(() => {
                    if(i == text.length-1 && toNewText !== ""){
                        // console.log(text.substring(0, i))
                        try{
                            typingRef.current.innerHTML = text.substring(0, i += 1);
                            typingRef.current.innerHTML += `<span class=${toClass}>${toNewText}</span>`;
                        }catch(err){ }
                        clearInterval(typingInterval);
                    }else{
                        try{
                            typingRef.current.innerHTML = text.substring(0, i += 1);
                        }catch(err){ }
                    }
        
                    if(i >= text.length){
                        // console.log("clear");
                        clearInterval(typingInterval);
                    }
                }, 50);
                _onetime = true;
            }
          });
    }, []);

    return <>
     {/* <h2 className="w-2/4 text-center mt-20 mb-20 text-2xl sm:text-5xl lg:text-6xl text-slate-50 select-none">PROGRAMMER <span className="text-blue-400">D</span></h2> */}
        <h2 ref={typingRef} className={className}>
            {/* {text}
            {
                toNewText !== "" ? <span className={toClass}>{toNewText}</span>: null
            } */}
        </h2>
    </>
}

export default ReadingEffect;