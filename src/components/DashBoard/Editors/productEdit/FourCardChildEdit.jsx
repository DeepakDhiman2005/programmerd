"use client"
import React, { useEffect, useRef, useState } from "react"

// icons
import { RxCross2 } from "react-icons/rx";

// component
import Dropdown from "@/components/Dropdown";
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";

const FourCardChildEditor = ({defaultValue=null, UUID="", value=function(){}}) => {
    // useState
    const [TypeSelect, setTypeSelect] = useState(false);
    const [Img, setImg] = useState(null);

    // useRef
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const hrefRef = useRef(null);

    // function
    const RemoveTextValue = (e) => {
        try{
            let outside = e.target.parentNode;
            if(outside.tagName.toLowerCase() === "button"){
                outside = outside.parentNode;
            }
            else if(outside.tagName.toLowerCase() === "svg"){
                outside = outside.parentNode.parentNode;
            }
            // console.log(outside);
            let inp = outside.querySelector("input");
            // console.log(inp.value)
            inp.value = "";
            if(inp.id === "FourCardChildImage"+UUID){
                setImg("");
                ChangeValue("");
            }else {
                ChangeValue();
            }
        }catch(err){}
    }

    const ChangeValue = (e=null) => {
        let obj = {
            title: titleRef.current.value,
            desc: descRef.current.value,
            href: hrefRef.current.value,
            image: e !== null ? e: Img
        }

        // console.log(obj)
        value(obj);
    }

    useEffect(()=>{
        try{
            if(defaultValue !== null){
                titleRef.current.value = defaultValue.title;
                descRef.current.value = defaultValue.desc;
                hrefRef.current.value = defaultValue.href;
                let definetype = defaultValue.image.match("http") || defaultValue.image.match("https");
                setTypeSelect(definetype ? "Image Link": "Image Select")
                setImg(defaultValue.image);
            }
        }catch(err){}
    }, [defaultValue]);

    return <>
        <div className="flex flex-col justify-center w-full items-start p-4 m-3 border border-solid rounded-md">
            {/* title */}
            <div className="w-full mt-2 mb-2 flex justify-between items-center border border-solid border-slate-100 rounded-md">
                <label htmlFor={"FourCardChildTitle"+UUID} className="h-full p-4 pt-2 pb-2 bg-slate-100 text-lg font-normal text-slate-800 cursor-pointer">Title</label>
                <input ref={titleRef} type="text" id={"FourCardChildTitle"+UUID} name={"FourCardChildTitle"+UUID} placeholder="Title..." className="bg-transparent transition-all ml-2 w-full h-full outline-none" onChange={ChangeValue} autoComplete="off" />
                <button className="h-full p-4 pt-2 pb-2 bg-slate-100 cursor-pointer" onClick={RemoveTextValue}>
                    <RxCross2 size={"25px"} className="hover:text-red-600" />
                </button>
            </div>
            {/* desc */}
            <div className="w-full mt-2 mb-2 flex justify-between items-center border border-solid border-slate-100 rounded-md">
                <label htmlFor={"FourCardChildDesc"+UUID} className="h-full p-4 pt-2 pb-2 bg-slate-100 text-lg font-normal text-slate-800 cursor-pointer">Desc</label>
                <input ref={descRef} type="text" id={"FourCardChildDesc"+UUID} name={"FourCardChildDesc"+UUID} placeholder="Desc..." className="bg-transparent transition-all ml-2 w-full h-full outline-none" onChange={ChangeValue} autoComplete="off" />
                <button className="h-full p-4 pt-2 pb-2 bg-slate-100 cursor-pointer" onClick={RemoveTextValue}>
                    <RxCross2 size={"25px"} className="hover:text-red-600" />
                </button>
            </div>
            {/* href */}
            <div className="w-full mt-2 mb-2 flex justify-between items-center border border-solid border-slate-100 rounded-md">
                <label htmlFor={"FourCardChildHref"+UUID} className="h-full p-4 pt-2 pb-2 bg-slate-100 text-lg font-normal text-slate-800 cursor-pointer">Link</label>
                <input ref={hrefRef} type="text" id={"FourCardChildHref"+UUID} name={"FourCardChildHref"+UUID} placeholder="Affilate Link..." className="bg-transparent transition-all ml-2 h-full w-full outline-none" onChange={ChangeValue} autoComplete="off" />
                <button className="h-full p-4 pt-2 pb-2 bg-slate-100 cursor-pointer" onClick={RemoveTextValue}>
                    <RxCross2 size={"25px"} className="hover:text-red-600" />
                </button>
            </div>
            {/* image */}
            <div className="w-full mt-2 mb-2 flex flex-col justify-start items-start border border-solid border-slate-100 rounded-md">
                <Dropdown title={"Image Type"} className="flex justify-center items-center" value={(e)=>{
                    setTypeSelect(e);
                }}>
                    <li>Image Link</li>
                    <li>Image Select</li>
                </Dropdown>
                <div className="mt-3 w-full">
                    {
                        TypeSelect === "Image Link" ? <>
                            <div className="w-full mt-2 mb-2 flex justify-between items-center border border-solid border-slate-100 rounded-md">
                                <label htmlFor={"FourCardChildImage"+UUID} className="h-full p-4 pt-2 pb-2 bg-slate-100 text-lg font-normal text-slate-800 cursor-pointer">Image</label>
                                <input type="text" id={"FourCardChildImage"+UUID} name={"FourCardChildImage"+UUID} placeholder="Image Link..." className="bg-transparent transition-all w-full ml-2 h-full outline-none" defaultValue={Img} onChange={(e)=>{
                                    setImg(e.target.value);
                                    ChangeValue(e.target.value);
                                }} autoComplete="off" />
                                <button className="h-full p-4 pt-2 pb-2 bg-slate-100 cursor-pointer" onClick={RemoveTextValue}>
                                    <RxCross2 size={"25px"} className="hover:text-red-600" />
                                </button>
                            </div>
                        </>: <>
                            <ImageSelectBox uniqueID={"FourCardChildImageSelectBox"+UUID} defaultValue={Img} value={(e)=>{
                                setImg(e.image);
                                ChangeValue(e.image);
                            }} />
                        </>
                    }
                </div>
            </div>
        </div>
    </>
}

export default FourCardChildEditor;