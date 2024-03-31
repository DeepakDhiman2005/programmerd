"use client"
import React, { useEffect, useState, useRef } from "react";

// next
import Image from "next/image";

// icons
import { LuImagePlus } from "react-icons/lu";

/**
 * 
 * @param {*} param uniqueID: String, value: func, defaultValue: Object, ariaValueText: String
 * @returns image: File, ariaValueText: String
 */
const ImageSelectBox = ({ uniqueID = "", value = function () { }, defaultValue = {}, ariaValueText="", className="" }) => {
    // useState
    const [Img, setImg] = useState(false);

    // useRef
    const imgRef = useRef(null);

    useEffect(() => {
        try {
            if (defaultValue.type && defaultValue.name && defaultValue.size) {
                let imagePath = defaultValue;
                // console.log(imagePath);
                const reader = new FileReader();
                reader.onload = function (event) {
                    const imageUrl = event.target.result;
                    setImg(imageUrl);
                }
                reader.readAsDataURL(imagePath);
            } 
        } catch (err) { }
    }, [defaultValue]);

    // function
    let SelectImage = (e) => {
        try {
            let imagePath = e.target.files[0];
            value({image: imagePath, ariaValueText: ariaValueText});
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageUrl = event.target.result;
                setImg(imageUrl);
            }
            reader.readAsDataURL(imagePath)
        } catch (err) { }
    }

    return <>
        <label className={"flex justify-center items-center bg-slate-50 border border-dotted border-slate-100 rounded-md mt-3 mb-2 shadow-sm shadow-slate-300 w-full cursor-pointer"+className} htmlFor={"image" + uniqueID}>
            {
                Img ? <>
                    <Image src={Img ? Img : "/logo.svg"} width={1000} height={1000} className="rounded-md hover:shadow-md hover:shadow-slate-800" alt="image" />
                </> : <>
                    <LuImagePlus size={"26px"} className="mt-20 mb-20 text-slate-700 cursor-pointer" />
                </>
            }
        </label>
        <input ref={imgRef} accept="image" type="file" id={"image" + uniqueID} name={"image" + uniqueID} style={{ display: "none" }} onChange={SelectImage} aria-valuetext={ariaValueText} />
    </>
}

export default ImageSelectBox;