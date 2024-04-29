"use client"
import React from "react";

// components
import InputBoxTag from "../Inputs/InputBoxTag";
import DescriptionBoxTag from "../Inputs/DescriptionBoxTag";
import NoteBook from "../NoteBook/NoteBook";
import ImageTypeSelector from "../Inputs/ImageTypeSelector";
import VideoTypeSelector from "../Inputs/VideoTypeSelector";

import Button from "../Button";
import ImageSelector from "../Inputs/ImageSelector";

const ContentEditor = ({type="", defaultValue=null, id=1, value=function(){}, onDelete=function(){}}) => {
    const Inputs = (data) => {
        // console.log(data);
        value({type: type, data: data, id: id});
    }

    const DeleteEvent = () => {
        onDelete({type: type, delete: true, data: defaultValue, id: id});
    }

    return <div className="flex justify-start items-center w-full">
        {
            type === "title" ? <InputBoxTag defaultValue={defaultValue} title="Title" onChange={(e)=> {Inputs({type: "title", data: e.target.value})}} />: null
        }
        {
            type === "description" ? <DescriptionBoxTag defaultValue={defaultValue} onChange={(e)=> {Inputs({type: "desc", data: e.target.value})}} />: null
        }
        {
            type === "link" ? <InputBoxTag defaultValue={defaultValue} title="Link" onChange={(e)=> {Inputs({type: "link", data: e.target.value})}} />: null
        }
        {
            type === "redirect" ? <InputBoxTag defaultValue={defaultValue} title="Redirect" onChange={(e)=>{Inputs({type: "redirect", data: e.target.value})}} />: null
        }
        {
            type === "code" ? <>
                <h2 className="mr-1">Code</h2>
                <NoteBook data={defaultValue} value={(e)=> {Inputs({type: "code", data: e})}} />
            </> : null
        }
        {
            type === "points" ? <>
                <h2 className="mr-1">Points</h2>
                <NoteBook data={defaultValue} value={(e)=> {Inputs({type: "points", data: e})}} />
            </> : null
        }
        {
            type === "image" ? <ImageSelector defaultValue={defaultValue} value={(e)=>{ Inputs({type: "image", data: e}) }} />: null
        }
        {
            type === "video" ? <VideoTypeSelector defaultValue={defaultValue} value={(e)=> {Inputs({type: "video", data: e})}} />: null
        }
        <Button color="red" className="ml-3" onClick={DeleteEvent}>Delete</Button>
    </div>
}

export default ContentEditor;