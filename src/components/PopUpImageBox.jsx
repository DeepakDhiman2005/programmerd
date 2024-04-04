"use client"
import React, {useEffect, useRef, useState} from "react";

// icons
import { RxCross2 } from "react-icons/rx";

// next
import ImageRender from "./ImageRender";

/**
 * 
 * @param {*} param popup=false, value: function, imageData={src: "", width: 0, height: 0, className: ""}
 * @returns 
 */
const PopUpImageBox = ({popup=false, value=function(){}, imageData={image: null, width: 0, height: 0, className: ""}}) => {
    let file = imageData.file;
    // useState
    const [Img, setImg] = useState(false);

    // useRef
    const PopUpDisplay = useRef(null);

    const ImagePopUpOff = () => {
        PopUpDisplay.current.className = "fixed w-full top-0 z-[1000] transition-all overflow-hidden left-0 bg-white h-screen hidden justify-center items-start";
        value(false);
    }

    useEffect(()=>{
        try{
            if(file){
                if (file.size && file.name && file.type) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const imageUrl = event.target.result;
                        setImg(imageUrl);
                    }
                    reader.readAsDataURL(file);
                }
            }
            if(popup){
                PopUpDisplay.current.className = "fixed w-full top-0 z-[1000] transition-all overflow-hidden left-0 bg-white h-screen flex justify-center items-start";            
            }
        }catch(er){}
    }, [popup, file]);

    return <>
        <div ref={PopUpDisplay} className="fixed w-full top-0 z-[1000] transition-all overflow-hidden left-0 bg-white h-screen hidden justify-center items-start">
            <div className="flex flex-col justify-between items-between w-full h-full">
                <div className="flex justify-end items-center p-4 text-slate-800 h-[10%]">
                    <button className="text-slate-800 bg-white p-2 border border-solid border-slate-100 rounded-lg shadow-md shadow-slate-500 active:bg-slate-200 hover:bg-slate-100 active:text-slate-600 transition-all hover:shadow-lg" onClick={ImagePopUpOff}>
                        <RxCross2 size={"35px"} className="cursor-pointer" />
                    </button>
                </div>
                <div className="flex w-full justify-center items-center transition-all delay-700 h-[90%]">
                    <ImageRender image={imageData.image} width={imageData.width} height={imageData.height} className={imageData.className ? imageData.className: "border w-[90%] h-[65%] border-solid border-slate-50 rounded-md shadow-md shadow-slate-400 transition-all delay-700"} />
                </div>
            </div>
        </div>
    </>
}

export default PopUpImageBox;