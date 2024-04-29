"use client"
import React, { useEffect, useState } from "react";

// next
import Image from "next/image";

/**
 * 
 * @param image = src | file | buffer 
 * width = 0, height = 0, className = "", onClick = function, value = function(){ ... }
 * @return value = function(){ ... }
 */
const ImageRender = ({ image="", width = 0, height = 0, className = "", onClick = function () { }, value=function(){} }, key=null) => {
    // useState
    const [Img, setImg] = useState("/logo.svg");

    useEffect(() => {
        try {
            if(typeof image === "string"){
                if(image !== ""){
                    // console.log(image);
                    setImg(image);
                }else {
                    setImg("/logo.svg");
                }
            }else {
                if (image.size && image.name && image.type) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const imageUrl = event.target.result;
                        value(image);
                        setImg(imageUrl);
                    }
                    reader.readAsDataURL(image);
                }else if(image.type === "Buffer" && image.data){
                    const uint8Array = new Uint8Array(image.data);
                    // Create a Blob object from the Uint8Array
                    const blob = new Blob([uint8Array], { type: 'image/*' }); 
                    setImg(URL.createObjectURL(blob));
                } else {
                    setImg("/logo.svg")
                }
            }
        } catch (err) { }
    }, [image]);

    return <>
        <Image src={Img} key={key} width={width} height={height} className={className ? className : "rounded-md border border-solid border-slate-50 shadow-md shadow-slate-400 cursor-pointer mt-2 mb-3"} alt="image" onClick={onClick} />
    </>
}

export default ImageRender;