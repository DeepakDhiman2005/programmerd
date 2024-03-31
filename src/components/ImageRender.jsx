"use client"
import React, { useEffect, useState } from "react";

// next
import Image from "next/image";

const ImageRender = ({ file = false, src = "/logo.svg", width = 0, height = 0, className = "", onClick = function () { }, value=function(){} }) => {
    // useState
    const [Img, setImg] = useState(false);

    useEffect(() => {
        try {
            if (file.size && file.name && file.type) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const imageUrl = event.target.result;
                    value(file);
                    setImg(imageUrl);
                }
                reader.readAsDataURL(file);
            }else if(file.type === "Buffer" && file.data){
                const uint8Array = new Uint8Array(file.data);
                // Create a Blob object from the Uint8Array
                const blob = new Blob([uint8Array], { type: 'image/*' }); 
                setImg(URL.createObjectURL(blob));
            }else {
                setImg(URL.createObjectURL(file));
            }
        } catch (err) { }
    }, [file]);

    return <>
        <Image src={Img ? Img: src} width={width} height={height} className={className ? className : "w-3/4 sm:w-1/2 h-auto rounded-md border border-solid border-slate-50 shadow-md shadow-slate-400 cursor-pointer mt-2 mb-3"} alt="image" onClick={onClick} />
    </>
}

export default ImageRender;