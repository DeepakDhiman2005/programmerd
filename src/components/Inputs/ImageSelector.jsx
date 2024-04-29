"use client"
import React, { useEffect, useRef, useState } from 'react';

// next
import Image from 'next/image';

// icons
import { BiImageAdd } from "react-icons/bi";

// components
import DashBoardBlobEditor from '../DashBoard/Editors/DashBoardBlobEditor';

const ImageSelector = ({ defaultValue = null, value = function () { } }) => {
    // useState
    const [Display, setDisplay] = useState(false);
    const [ImgRender, setImgRender] = useState(null);

    // useRef
    const heightRef = useRef(300);
    const widthRef = useRef(500);

    useEffect(() => {
        try {
            if (defaultValue !== null) {
                setImgRender(defaultValue.image);
                widthRef.current.value = defaultValue.width !== "" ? defaultValue.width: 500;
                heightRef.current.value = defaultValue.height !== "" ? defaultValue.height: 300;
            }
        } catch (er) { }
    }, [defaultValue]);

    // functions
    const ImageSelectEvent = (e) => {
        try {
            let tag = e.target.tagName.toLowerCase();
            if (tag !== "input") {
                setDisplay(true);
            }
        } catch (err) { }
    }

    const WidthChange = (e) => {
        let text = e.target.value;
        let h = heightRef.current.value.match(/[0-9]+/) ? parseInt(heightRef.current.value) : heightRef.current.value;
        let w = text.match(/[0-9]+/) ? parseInt(text) : text;
        let image = {
            image: ImgRender,
            height: h,
            width: w
        }
        value(image);
    }

    const HeightChange = (e) => {
        let text = e.target.value;
        let h = text.match(/[0-9]+/) ? parseInt(text) : text;
        let w = widthRef.current.value.match(/[0-9]+/) ? parseInt(widthRef.current.value) : widthRef.current.value;
        let image = {
            image: ImgRender,
            height: h,
            width: w
        }
        value(image);
    }

    return <>
        <DashBoardBlobEditor display={Display} title='image' value={(e) => {
            // console.log(e);
            if (e !== false) {
                setImgRender("/uploads/image/" + e);
                let h = heightRef.current.value.match(/[0-9]+/) ? parseInt(heightRef.current.value) : heightRef.current.value;
                let w = widthRef.current.value.match(/[0-9]+/) ? parseInt(widthRef.current.value) : widthRef.current.value;
                let image = {
                    image: "/uploads/image/" + e,
                    height: h,
                    width: w
                }
                value(image);
            }
            setDisplay(false);
        }} />

        <div className='w-full flex justify-center mt-2 mb-2 items-center bg-slate-50 rounded-md border border-solid text-slate-800 cursor-pointer relative' onClick={ImageSelectEvent}>
            <div className='absolute flex justify-end items-center top-0 right-0'>
                <input ref={widthRef} onChange={WidthChange} defaultValue={500} type="text" placeholder='width' className='outline-none border border-solid w-[20%]' />
                <input ref={heightRef} onChange={HeightChange} defaultValue={300} type="text" placeholder='height' className='outline-none border border-solid w-[20%]' />
            </div>
            {
                ImgRender !== null ? <>
                    <Image src={ImgRender !== null ? ImgRender : "/logo.svg"} alt='image' width={200} height={200} />
                </> :
                    <BiImageAdd size={"30px"} className='mt-10 mb-10 text-slate-700' />
            }
        </div>
    </>
}

export default ImageSelector;