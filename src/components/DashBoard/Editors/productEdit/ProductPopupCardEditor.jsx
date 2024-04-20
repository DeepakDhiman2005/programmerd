"use client"
import React, { useEffect, useRef, useState } from "react";

// icons
import { IoMdHeart } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

// next
import Image from "next/image";

// components
import Button from "@/components/Button";
import PopUpElement from "@/components/PopUpElement";
import ImageTypeSelector from "@/components/Inputs/ImageTypeSelector";

const ProductPopupCardEditor = ({ data={}, value=function(){} }) => {

    // useRef
    const TitleRef = useRef(null);
    const ScoreRef = useRef(null);
    const SourceRef = useRef(null);
    const HrefRef = useRef(null);
    const ImgRef = useRef(null);

    // useState
    const [PopupDisplay, setPopupDisplay] = useState(false);
    const [Img, setImg] = useState("");

    useEffect(()=>{
        try{
            TitleRef.current.value = data.title ? data.title: null;
            ScoreRef.current.value = data.score ? data.score: null;
            SourceRef.current.value = data.source ? data.source: null;
            HrefRef.current.value = data.href ? data.href : null;
            if(data.image){
                if(typeof data.image === "string"){
                    setImg(data.image);
                }else {
                    let url = URL.createObjectURL(e);
                    setImg(url);
                }
                ImgRef.current = data.image;
            }
        }catch(err){
            console.log(err)
        }
    }, [data]);

    return <>
        <PopUpElement popup={PopupDisplay} value={()=>{setPopupDisplay(false)}}>
            <div className="w-3/4">
                <ImageTypeSelector value={(e)=>{
                    if(typeof e === "string"){
                        setImg(e);
                    }else {
                        let url = URL.createObjectURL(e);
                        setImg(url);
                    }
                    ImgRef.current = e;
                }} />
            </div>
        </PopUpElement>

        <div className="flex justify-center items-center fixed z-50 top-0 left-0 w-full h-full">
            <div className="w-full flex justify-center items-center h-full backdrop-brightness-90 backdrop-opacity-25">
                <div className="w-3/4 h-auto flex flex-col justify-center items-center bg-white rounded-md p-3 border border-solid">
                    <div className="w-full flex justify-between items-center">
                        <Button color="purple" onClick={()=>{
                            value({edit: true, id: data.id, data: {
                                title: TitleRef.current.value,
                                score: ScoreRef.current.value,
                                source: SourceRef.current.value,
                                href: HrefRef.current.value,
                                image: ImgRef.current
                            }});
                        }}>Save</Button>

                        <div className="flex justify-end items-center" onClick={()=>{
                            value({edit: false});
                        }}>
                            <RxCross2 size={"25px"} className="cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-3 cursor-pointer mt-3 mb-3 bg-white hover:shadow-md hover:shadow-slate-200 w-1/2">
                        <div className="w-full flex justify-end items-center p-4">
                            <IoMdHeart size={"20px"} className="text-slate-600" />
                        </div>

                        <div target="_blank" className="w-full flex justify-center pt-4 pb-4 items-center mb-2 mt-2" onClick={()=>{setPopupDisplay(true)}}>
                            <Image src={Img !== "" ? Img : "/logo.svg"} alt="image" width={200} height={100} />
                        </div>

                        <div className="flex flex-col justify-center items-center mt-4 mb-2">
                            <input ref={TitleRef} type="text" placeholder="Title..." className="outline-none bg-transparent" />
                        </div>

                        <div className="mt-2 mb-2 flex justify-start items-center">
                            <div className="bg-green-700 p-1 pl-3 pr-3 flex text-sm justify-center items-center text-white rounded-sm">
                                <span>
                                    <input ref={ScoreRef} type="text" placeholder="Score..." defaultValue={"0.0"} className="outline-none w-7 bg-transparent" />
                                </span>
                                <IoIosStar size={"12px"} className="ml-2" />
                            </div>
                            <h2 className="text-lg text-slate-600 ml-2 flex justify-center items-center">(by 
                                <input ref={SourceRef} type="text" placeholder="Source..." className="ml-1 outline-none w-full bg-transparent" />
                            )</h2>
                        </div>

                        <a href={null} target="_blank" className="w-full">
                            <Button color="purple" className="rounded-sm w-full flex justify-center items-center">
                                <span>View of Product</span>
                                <GoLinkExternal size={"17px"} className="ml-2" />
                            </Button>
                        </a>
                    </div>

                    <div className="flex justify-center items-center">
                        <input ref={HrefRef} type="text" placeholder="Href..." className="outline-none bg-transparent" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductPopupCardEditor;