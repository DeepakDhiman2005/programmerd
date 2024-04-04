"use client"
import React, { useEffect, useRef, useState } from "react";

// icons
import { RxCross2 } from "react-icons/rx";

// component
import Button from "@/components/Button";
import NoteBook from "@/components/NoteBook/NoteBook";
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";
import VideoSelectBox from "@/components/SelectorBox/VideoSelectBox";
import Dropdown from "@/components/Dropdown";

const DashBoardBlogContent = ({ type, uniqueID = "", defaultValue = null, value = function () { }, id = "", DeleteValue = function () { } }) => {
    // useRef 
    const TitleRef = useRef(null);
    const DescRef = useRef(null);
    const ImageRef = useRef(null);


    // useState
    const [ImgType, setImgType] = useState(false);

    // function
    const Inputs = (e) => {
        let val = null;
        try {
            if (type === "points" || type === "code") {
                val = e;
            }
            else if (type === "title" || type === "description") {
                val = e.target.value;
            }
            else if (type === "image") {
                if (!e.image) {
                    val = e.target.value;
                } else {
                    val = e.image;
                }
            } else if (type === "video") {
                val = e;
            }
        } catch (err) { }
        value({ type: type, data: val, id: id });
    }

    const DeleteText = () => {
        type === "title" ? TitleRef.current.value = "" : null;
        type === "description" ? DescRef.current.value = "" : null;
        type === "image" ? ImageRef.current.value = "" : null;
        value({ type: type, data: "", id: id });
    }

    useEffect(() => {
        try {
            if (defaultValue !== null) {
                if (type === "image") {
                    if (defaultValue.match("http") || defaultValue.match("https")) {
                        setImgType("Image Link");
                    } else {
                        setImgType("Image Selector");
                    }
                }
            }
        } catch (err) { }
    }, [defaultValue]);

    return <div className="flex justify-start items-center w-full">
        {/* title */}
        {
            type === "title" ? <>
                <div className="flex justify-center items-center bg-slate-50 border border-solid border-slate-100 rounded-md mt-3 mb-2 pl-2 pr-2 p-1 shadow-sm shadow-slate-300 w-full">
                    <label htmlFor={"title" + uniqueID} className="cursor-pointer">Title: </label>
                    <input ref={TitleRef} defaultValue={defaultValue} type="text" id={"title" + uniqueID} name={"title" + uniqueID} placeholder="Title..." className="outline-none ml-2 p-2 border border-solid border-transparent w-full shadow-sm shadow-slate-100 rounded-sm" onChange={Inputs} autoComplete="off" />
                    <RxCross2 size={"23px"} className="ml-2 cursor-pointer text-slate-800" onClick={DeleteText} />
                </div>
            </> : null
        }
        {/* description */}
        {
            type === "description" ? <>
                <div className="flex flex-col justify-start items-start mb-3 mt-2 w-full">
                    <label htmlFor={"message" + uniqueID} className="font-semibold mr-3 text-lg cursor-pointer">Description: </label>
                    <textarea ref={DescRef} defaultValue={defaultValue} id={"message" + uniqueID} rows="4" name={"message" + uniqueID} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Your Description..." onChange={Inputs}></textarea>
                </div>
            </> : null
        }
        {/* code */}
        {
            type === "code" ? <>
                <NoteBook unique={"code"} data={defaultValue} value={Inputs} />
            </> : null
        }
        {/* points */}
        {
            type === "points" ? <>
                <NoteBook unique={"points"} data={defaultValue} value={Inputs} />
            </> : null
        }
        {/* images */}
        {
            type === "image" ? <>
                <div className="border border-solid rounded-md flex flex-col w-full justify-start items-start">
                    <Dropdown title={"Image Type"} className="flex justify-center items-center w-full" value={(e) => { setImgType(e) }}>
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
                        </> : <ImageSelectBox value={Inputs} defaultValue={defaultValue} uniqueID={Date.now() + Math.random() * 1000} />
                    }
                </div>
            </> : null
        }
        {/* video */}
        {
            type === "video" ? <>
                <VideoSelectBox value={Inputs} defaultValue={defaultValue} uniqueID={Date.now() + Math.random() * 1000} />
            </> : null
        }
        <Button color="red" className="ml-3" onClick={() => {
            DeleteValue({ delete: true, id: id });
        }}>Delete</Button>
    </div>
}

export default DashBoardBlogContent;