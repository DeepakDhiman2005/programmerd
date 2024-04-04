"use client"
import React, {useEffect, useState} from "react";

// component
import MyInput from "@/components/MyInput";
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";
import Dropdown from "@/components/Dropdown";

const PathSelectorBox = ({defaultValue="", ariaValueText="", uniqueID="", value=function(){}}) => {
    // useState
    const [ImageInputType, setImageInputeType] = useState("");
    
    useEffect(()=>{
        try{
            let defineType = defaultValue.match("http") || defaultValue.match("https");
            setImageInputeType(defineType ? "Image Link": "Select Image")
        }catch(err){}
    }, [defaultValue]);

    return <>
        <div className="flex flex-col justify-center items-center w-full">
            <Dropdown color={"blue"} title={"Select Image Type"} className="flex justify-center items-center" value={(e) => { setImageInputeType(e) }}>
                <li>Image Link</li>
                <li>Select Image</li>
            </Dropdown>
            {
                ImageInputType === "Image Link" ? <MyInput type="text" placeholder="Image Path..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" defaultValue={defaultValue} onChange={(e) => {
                    value({ value: e.target.value, ariaValueText: e.target.ariaValueText, type: "image" });
                }} ariaValueText={`${ariaValueText}`} /> :
                    ImageInputType === "Select Image" ? <ImageSelectBox uniqueID={`imageSelectCarousel${uniqueID}`} defaultValue={defaultValue} ariaValueText={`${ariaValueText}`} value={(e) => {
                        value({ value: e.image, ariaValueText: e.ariaValueText, type: "image" });
                    }} /> : null
            }
        </div>
    </>
}

export default PathSelectorBox;