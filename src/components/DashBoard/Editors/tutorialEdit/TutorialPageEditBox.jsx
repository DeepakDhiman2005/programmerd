"use client"
import React, { useRef, useState } from "react";

// components
import Button from "@/components/Button";
import TutorialPageEditor from "./TutorialPageEditor";

const TutorialPageEditBox = ({ value=function(){} }) => {
    // useRef
    const boxRef = useRef(null);
    const InputRef = useRef(null);

    // useState
    const [EditorDisplay, setEditorDisplay] = useState(false);

    const onFocusBox = () => {
        try{
            boxRef.current.className = "w-full flex justify-between items-center p-2 border border-solid rounded-md border-green-600";
            window.addEventListener("focusout", ()=>{
                boxRef.current.className = "w-full flex justify-between items-center p-2 border border-solid rounded-md";
            })
        }catch(err){}
    }

    const onClickEvent = (type) => {
        if(type === "edit"){
            setEditorDisplay({editor: true, title: InputRef.current.value});
            value({ type: "edit", title: InputRef.current.value });
        }
    }

    return <>
        {
            EditorDisplay.editor ? <TutorialPageEditor title={EditorDisplay.title} display={EditorDisplay.editor} value={(e)=>{
                if(!e.display){ setEditorDisplay({editor: false, title: InputRef.current.value}); }
            }} />: null
        }

        <div ref={boxRef} className="w-full flex justify-between items-center p-2 border border-solid rounded-md">
            <input ref={InputRef} type="text" placeholder="Title..." className="outline-none mr-2" onFocus={onFocusBox} />
            <div className="flex justify-center items-center">
                <Button className="mr-2" onClick={()=>{ onClickEvent("edit") }}>Edit Page</Button>
                <Button color="red" onClick={()=>{ onClickEvent("delete") }}>Delete</Button>
            </div>
        </div>
    </>
}

export default TutorialPageEditBox;