"use client"
import React, { useEffect, useRef, useState } from "react";

// functions
import { ALPHAID } from "@/components/Functions/UNIQUEID";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Dropdown from "../Dropdown";
import ImageSelectBox from "../SelectorBox/ImageSelectBox";

const ImageTypeSelector = ({ defaultValue = null, value=function(){} }) => {
    const ImageRef = useRef(null);

    let uniqueID = ALPHAID();

    const [ImgType, setImgType] = useState(false);

    const Inputs = (e) => {
        let val = null;
        if (!e.image) {
            val = e.target.value;
        } else {
            val = e.image;
        }
        value(val);
    }

    const DeleteText = () => {
        ImageRef.current.value = "";
        value("");
    }

    useEffect(() => {
        try{
            if (defaultValue !== null) {
                if (defaultValue.match("http") || defaultValue.match("https") || typeof defaultValue === "string") {
                    setImgType("Image Link");
                } else {
                    setImgType("Image Selector");
                }
            }
        }catch(err){}
    }, [defaultValue]);

    return <>
        <div className="border border-solid rounded-md flex flex-col w-full justify-start items-start">
            <Dropdown key={"Dropdown"+uniqueID} title={"Image Type"} className="flex justify-center items-center w-full" value={(e) => { setImgType(e) }}>
                <li>Image Link</li>
                <li>Image Selector</li>
            </Dropdown>
            {
                ImgType === "Image Link" ? <>
                    <div className="flex justify-center items-center bg-slate-50 border border-solid border-slate-100 rounded-md mt-3 mb-2 pl-2 pr-2 p-1 shadow-sm shadow-slate-300 w-full">
                        <label htmlFor={"ImageLink" + uniqueID} className="cursor-pointer">Image: </label>
                        <input ref={ImageRef} defaultValue={defaultValue} type="text" id={"ImageLink" + uniqueID} name={"ImageLink" + uniqueID} placeholder="Image Link..." className="outline-none ml-2 p-2 border border-solid border-transparent w-full shadow-sm shadow-slate-100 rounded-sm" onChange={Inputs} autoComplete="off" />
                        <RxCross2 size={"23px"} className="ml-2 cursor-pointer text-slate-800" onClick={DeleteText} />
                    </div>
                </> : <ImageSelectBox value={Inputs} defaultValue={defaultValue} uniqueID={uniqueID} />
            }
        </div>
    </>
}

export default ImageTypeSelector;