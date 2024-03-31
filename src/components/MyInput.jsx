"use client"
import React, {useEffect, useRef} from "react";

const MyInput = ({placeholder="", ariaValueText="", type="text", className="", name="", id="", defaultValue=false, onChange=function(){}, onKeyDown=function(){}, onKeyUp=function(){}}) => {
    const inpRef = useRef(null);

    useEffect(()=>{
        if(defaultValue){
            inpRef.current.value = defaultValue;
        }
    }, [defaultValue]);

    return <>
        <input ref={inpRef} type={type} placeholder={placeholder} name={name} id={id} aria-valuetext={ariaValueText} onChange={onChange} onKeyDown={onKeyDown} onKeyUp={onKeyUp} className={className} />
    </>
}

export default MyInput;