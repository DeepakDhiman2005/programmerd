"use client"
import React, { useRef, useState } from 'react';

// functions
import { UNIQUEID } from '@/components/Functions/UNIQUEID';

// components
import Button from '@/components/Button';
import ImageRender from '@/components/ImageRender';
import ConfirmCard from '@/components/ConfirmCard';

const BlobItemEditor = ({ children, title="", value=function(){} }) => {
    const btnRef = useRef(null);
    const InpRef = useRef(null);

    // useState
    const [Img, setImg] = useState(null);
    const [ImgName, setImgName] = useState(title);
    const [ChangeValue, setChangeValue] = useState(false);
    const [ConfirmMessage, setConfirmMessage] = useState("");
    const [MessgDisplay, setMessgDisplay] = useState(false);
    const [ConfirmType, setConfirmType] = useState("");

    // function
    const onHover = () => {
        btnRef.current.className = "flex justify-between w-full items-start duration-500 h-full transition-all absolute m-2 top-0 right-0 left-0 overflow-hidden";
    }

    const outHover = () => {
        btnRef.current.className = "flex justify-between w-full items-start duration-500 h-0 transition-all absolute m-2 top-0 right-0 left-0 overflow-hidden";
    }

    const CopyImageName = async (e) => {
        try {
            let text = e.target.innerText;
            await navigator.clipboard.writeText(text);
            value({ title: title, file: Img, type: "copy" });
        } catch (er) { }
    }

    const ChangeEventClick = () => {
        try{
            InpRef.current.click();
        }catch(err){ }
    }
    
    const ChangeEvent = (e) => {
        try{
            let file = e.target.files[0];
            setImg(file);
            setConfirmMessage("Save change's in Image!");
            setChangeValue(true);
        }catch(err){}
    }

    const ConfirmEvent = (e) => {
        if(ConfirmType === "save"){
            if(e){
                value({ title: title, file: Img, type: "save" });
            }else{
                setImg(null);
                setImgName(title);
            }
            InpRef.current.value = '';
            setChangeValue(false);
        }
        else if(ConfirmType === "delete"){
            // console.log(e)
            if(e){ value({ file: title, type: "delete" }); }
        }
        setMessgDisplay(false);
    }

    return <>
        <ConfirmCard display={MessgDisplay} message={ConfirmMessage} value={(e)=>{ ConfirmEvent(e); }} />

        <div className='flex flex-col justify-center mt-2 mb-2 relative items-start transition-all border-solid border border-transparent hover:border-slate-300 rounded-sm w-full hover:cursor-pointer h-auto' onMouseEnter={onHover} onMouseLeave={outHover}>
            <div ref={btnRef} className='flex justify-between w-full bg-white opacity-25 items-center duration-700 h-0 transition-all absolute m-2 top-0 right-0 overflow-hidden'>
                <h2 className='text-slate-800 font-semibold active:text-green-700 hover:text-blue-700' title='copy' onClick={CopyImageName}>{ImgName}</h2>
                <div className='flex justify-center items-center mr-4'>
                    <Button color="purple" className="rounded-sm" onClick={ChangeEventClick}>Change</Button>
                    <input ref={InpRef} type="file" id="fileButton" onChange={ChangeEvent} className='hidden' />

                    {
                        ChangeValue ? <Button className="rounded-sm ml-2" color="blue" onClick={()=>{
                            setConfirmType("save");
                            setMessgDisplay(true);
                        }}>Save</Button>: 
                        <Button color="red" className="ml-2 rounded-sm" onClick={()=>{
                            setConfirmType("delete");
                            setConfirmMessage(`${title}: this is file delete?`);
                            setMessgDisplay(true);
                        }}>Delete</Button>
                    }
                </div>
            </div>
            <div className='ml-3 mt-6 p-3'>
                {
                    Img !== null ? <ImageRender image={Img} width={500} height={300} />: 
                    <>{children}</>
                }
            </div>
        </div>
    </>
}

export default BlobItemEditor;