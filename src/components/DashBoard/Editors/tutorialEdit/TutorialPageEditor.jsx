"use Client"
import React, { useEffect } from "react";

// components
import Button from "@/components/Button";
import PagesEditor from "./PagesEditor";

const TutorialPageEditor = ({ display=false, title="", value=function(){} }) => {
    useEffect(()=>{
        if(display){
            window.document.body.style.overflow = "hidden";
        }else {
            window.document.body.style.overflow = "auto"; 
        }
    }, [display])

    const GoBack = () => {
        value({display: false});
    }

    return <>
        <div className="fixed top-0 left-0 w-full h-full z-50 transition-all bg-slate-50 flex flex-col justify-start items-start">
            <div className="w-full p-2 flex justify-end items-center">
                <Button color="red" onClick={GoBack}>Back</Button>
            </div>

            <div className="p-3 flex flex-col justify-start items-start">
                <h2 className="text-lg text-slate-800">{title}</h2>
            </div>

            <div className="flex flex-col w-full justify-start overflow-y-scroll h-full items-start">
                <PagesEditor />
            </div>
        </div>
    </>
}

export default TutorialPageEditor;