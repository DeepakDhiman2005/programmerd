"use client"
import React, {useEffect, useRef, useState} from "react";

// component
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";

const CardEditor = ({ data=null, value=function(){}}) => {
    // useRef
    const titleRef = useRef({value: ""});
    const linkRef = useRef({value: ""});
    const descRef = useRef({value: ""});

    // useState
    const [Img, setImg] = useState(false);
    const [ImageInputType, setImageInputeType] = useState("");
    const [uniqueID, setuniqueID] = useState(false);

    useEffect(()=>{
        if(data !== null){
            const {title, href, desc, image} = data.data;
            titleRef.current.value = title;
            linkRef.current.value = href;
            descRef.current.value  = desc;
            setImg(image)
            setuniqueID(data._id);
            let defineType = image.match("http") || image.match("https");
            setImageInputeType(defineType ? "Image Link": "Select Image")
        }
    }, [data]);

    return <>
        <div className="flex flex-col justify-center items-start">
            <input ref={titleRef} type="text" placeholder="Title..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" />

            <input ref={linkRef} type="text" placeholder="Affilate Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" />

            <textarea ref={descRef} cols="30" rows="10" placeholder="Description..." className="outline-none w-3/4 border border-solid p-2 border-slate-800 active:border-purple-700 rounded-sm"></textarea>

            <h2 className="mb-1 text-slate-900 font-bold mt-3 text-xl">Image</h2>
            <div className="flex flex-col w-full justify-center items-start">
                <Dropdown color={"blue"} className="flex justify-center items-center" value={(e) => { setImageInputeType(e) }}>
                    <li>Image Link</li>
                    <li>Select Image</li>
                </Dropdown>
                {
                    ImageInputType === "Image Link" ? <input defaultValue={typeof Img === "string" ? Img: ""} type="text" placeholder="Image Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" onChange={(e) => { setImg(e.target.value) }} /> :
                        ImageInputType === "Select Image" ? <ImageSelectBox defaultValue={Img} uniqueID={"imageSelect"} value={(e) => { setImg(e.image) }} /> : null
                }

            </div>

            <div className="flex justify-start items-center mt-4">
                <Button onClick={() => { value({submit: true, data: {
                    title: titleRef.current.value,
                    desc: descRef.current.value,
                    href: linkRef.current.value,
                    image: Img
                }, type: data !== null ? "edit": "add", id: uniqueID}) }}>Submit</Button>
                <Button color="red" className="ml-2" onClick={() => { value({overview: true, data: {
                    title: titleRef.current.value,
                    desc: descRef.current.value,
                    href: linkRef.current.value,
                    image: Img
                }}) }}>OverView</Button>
            </div>
        </div>
    </>
}

export default CardEditor;