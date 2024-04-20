"use client"
import React, { useEffect, useState } from "react";

const PagesTopBar = ({children, value=function(){}}) => {
    // useState
    const [Display, setDisplay] = useState(children);
    const [SelectEle, setSelectEle] = useState(1);

    // function
    const onClick = (e) => {
        try{
            let textvalue = e.target.ariaValueText;
            value(e.target.innerText);
            setSelectEle(parseInt(textvalue));
            setDisplay([...Display]);
        }catch(err){}
    }

    useEffect(()=>{
        try{
            if(children !== null || children !== undefined){
                setDisplay(children)
            }
        }catch(err){}
    }, [children]);

    return <>
        <div className="w-full list-none flex justify-start items-center">
            {
                Display.map((listval, i)=>{
                    let text = listval.props.children;
                    let border_b = "border-b-transparent";
                    if(SelectEle === i+1){ border_b = "border-b-purple-800"; }

                    return <li key={i+1} className={"ml-3 cursor-pointer text-lg text-slate-800 font-bold border-b-2  border-solid hover:border-b-purple-800 "+border_b} aria-valuetext={i+1} onClick={onClick}>{text}</li>
                })
            }
        </div>
    </>
}

export default PagesTopBar;