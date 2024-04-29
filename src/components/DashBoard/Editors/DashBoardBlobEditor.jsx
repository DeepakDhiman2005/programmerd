"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// icons
import { FiUploadCloud } from "react-icons/fi";
import { TbMaximize } from "react-icons/tb";
import { FaRegSquareMinus } from "react-icons/fa6";

// components
import BlobItemEditor from './BlobItemEditor';
import { UNIQUEID } from '@/components/Functions/UNIQUEID';
import ImageRender from '@/components/ImageRender';

const getBlob = async () => {
    const blob = await axios.get("/api/blob/");
    return blob.data;
}

const DashBoardBlobEditor = ({title="", type="image", display=false, value=function(){}}) => {
    // useRef
    const inpRef = useRef(null);
    const EditorBox = useRef(null);
    const BlobBoxEditorRef = useRef(null);

    // useState
    const [FileArray, setFileArray] = useState([]);
    const [DisplaySize, setDisplaySize] = useState(false);

    // functions 
    const FileEvent = async (e) => {
        try{
            let file = e.target.files[0];
            let id = UNIQUEID(file.name);
            // console.log(id);
            // console.log(file);
            inpRef.current.value = "";

            const formData = new FormData();
            formData.append("name", id);
            formData.append("file", file);
            formData.append("type", type.toLowerCase());

            const resp = await axios.post("/api/blob/", formData);
            // console.log(resp.data);

            setFileArray([...FileArray, {title: id, file: file}]);
        }catch(err){}
    }

    const ChangeSize = () => {
        if(DisplaySize){
            EditorBox.current.className = 'bg-white flex justify-start items-start flex-col w-3/4 h-1/2 border border-solid border-slate-50 shadow-md shadow-slate-50 rounded-md p-3 overflow-y-scroll transition-all';
            setDisplaySize(false);
        }else {
            EditorBox.current.className = 'bg-white flex justify-start items-start flex-col transition-all border border-solid border-slate-50 shadow-md shadow-slate-50 rounded-md p-3 w-full h-full overflow-y-scroll';
            setDisplaySize(true);
        }
    }

    const BlobApi = async () => {
        const blob = await getBlob();
        // console.log(blob);
        if(blob.length !== 0){
            let array = [];
            blob.file.map((data)=>{
                array.push({title: data, file: `/uploads/image/${data}`});
            });
            setFileArray([...array]);
        }
    }

    const CloseDisplay = (e) => {
        let _id = e.target.id;
        if(_id === "DashBoardBlobEditor"){
            // console.log(e.target);
            value(false);
        }
    }

    const ItemChange = async (e) => {
        if(e.type === "delete"){
            let data = {file: e.file};
            const resp = await axios.delete("/api/blob/", {data});
            // console.log(resp.data);
            let blob = resp.data.data;
            let array = [];
            blob.map((data)=>{
                array.push({title: data, file: `/uploads/image/${data}`});
            });
            setFileArray([...array]);
        }
        else if(e.type === "save"){
            // console.log(e);
            const formData = new FormData();
            formData.append("name", e.title);
            formData.append("file", e.file);
            formData.append("type", type.toLowerCase());

            const resp = await axios.put("/api/blob/", formData);
            // console.log(resp.data);
            let blob = resp.data.data;
            let array = [];
            blob.map((data)=>{
                array.push({title: data, file: `/uploads/image/${data}`});
            });
            setFileArray([...array]);
        }
        else if(e.type === "copy"){
            console.log(true)
            value(e.title);
        }
    }

    useEffect(()=>{
        BlobApi();
        if(display){
            BlobBoxEditorRef.current.className = "fixed top-0 left-0 z-50 transition-all w-full h-full";
        }else {
            BlobBoxEditorRef.current.className = "fixed top-0 left-0 z-50 transition-all w-0 h-0";
        }
    }, [display]);

    return <>
        <div ref={BlobBoxEditorRef} className='fixed top-0 left-0 z-50 w-0 h-0'>
            <div className='w-full h-full flex justify-center items-center backdrop-brightness-75 backdrop-opacity-25' id='DashBoardBlobEditor' onClick={CloseDisplay}>
                <div ref={EditorBox} className='bg-white flex justify-start items-start flex-col w-3/4 h-1/2 border border-solid border-slate-50 shadow-md shadow-slate-50 rounded-md p-3 overflow-y-scroll'>

                    <div className='flex justify-between items-start w-full'>
                        <h2 className="font-semibold text-slate-800 mb-4 text-2xl">{title}</h2>
                        {
                            DisplaySize ? <FaRegSquareMinus size={"25px"} className='cursor-pointer' onClick={ChangeSize} />:
                            <TbMaximize size={"25px"} className='cursor-pointer' onClick={ChangeSize} />
                        }
                    </div>
                    
                    <div className='flex flex-col justify-start items-start'>
                        {
                            FileArray.length !== 0 ? FileArray.map(({title, file}, i)=>{
                                return <BlobItemEditor key={title+i} title={title} value={ItemChange}>
                                    <ImageRender image={file} width={500} height={100} />
                                </BlobItemEditor>
                            }): null
                        }
                    </div>

                    <div className='flex justify-center mt-3 items-center text-white bg-purple-700 border border-solid border-slate-50 cursor-pointer w-full p-3 hover:bg-purple-800' onClick={()=>{ inpRef.current.click() }}>
                        <FiUploadCloud size={"25px"} />
                        <span className='ml-3 font-semibold'>upload file</span>
                    </div>
                    <input ref={inpRef} type="file" className='hidden' onChange={FileEvent} />
                </div>
            </div>
        </div>
    </>
}

export default DashBoardBlobEditor;