"use client"
import React, { useState, useRef, useEffect } from "react";

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setBlogPost } from "@/app/redux/features/GlobalStore";

// components
import ListPopIndexBox from "@/components/Inputs/ListPopIndexBox";
import ContentEditor from "@/components/ContentEditor/ContentEditor";
import Button from "@/components/Button";

import getCurrentDate from "@/components/Functions/getCurrentDate";

const DashBoardBlogEditor = () => {
    // useState
    const [ContentList, setContentList] = useState([]);

    // useRef
    const titleRef = useRef(null);
    const descRef = useRef(null);

    // next
    const router = useRouter();

    // redux
    const dispatch = useDispatch();
    const selector = useSelector(state => state.store.blog);

    // functions
    const AddContent = (type) => {
        setContentList([...ContentList, {type: type, defaultValue: null, id: ContentList.length+1}]);
    }

    const Inputs = (e) => {
        let array = [];
        ContentList.map((data)=>{
            if(data.id === e.id){
                array.push({type: data.type, defaultValue: e.data.data, id: data.id});
            }else {
                array.push(data);
            }
        });
        // console.log(array);
        setContentList([...array]);
    }

    const onDelete = (e) => {
        let array = [];
        let onetime = false;
        ContentList.map((data, i)=>{
            if(data.id !== e.id){
                if(onetime){
                    array.push({type: data.type, defaultValue: data.defaultValue, id: data.id-1});
                }else {
                    array.push(data);
                }
            }else { onetime = true; }
        })
        // console.log(array);
        setContentList([...array]);
    }

    const MakeBlog = () => {
        let makecontent = [];
        ContentList.map((data, i)=>{
            makecontent[i] = {}
            // console.log(data.defaultValue)
            if(data.type === "points" || data.type === "code"){
                let array = [];
                data.defaultValue.map((point)=>{
                    array.push(point.text);
                });
                makecontent[i][data.type] = array;
            }else {
                makecontent[i][data.type] = data.defaultValue;
            }
        });

        let makearticle = {};
        makearticle.title = titleRef.current.value;
        makearticle.desc = descRef.current.value;
        makearticle.content = makecontent;
        makearticle.date = getCurrentDate();
        makearticle.comment = [];

        let makeblog = {method: "add", date: getCurrentDate(), data: makearticle, type: "blog"};
        // setBlogStore(makeblog);
        dispatch(setBlogPost(makeblog));

        // console.log(makeblog);
        router.push("/dashboard/blogs/editor/blogpost")
    }

    useEffect(()=>{
        try{
            if(selector.method && selector.data && selector.type === "blog"){
                let data = selector.data;
                titleRef.current.value = data.title;
                descRef.current.value = data.desc;
                
                let content = data.content;
                let array = [];
                content.map((data)=>{
                    for(let x in data){
                        array.push({type: x, defaultValue: data[x], id: array.length+1});
                    }
                })

                // console.log(array);
                setContentList([...array]);
            }
        }catch(err){}
    }, [selector]);

    return <>
        <h2 className="font-semibold text-slate-800 mb-4 flex justify-between items-center text-2xl">Blog Editor</h2>

        <div className="flex flex-col w-full justify-center mt-3 mb-3 items-center">
            <input ref={titleRef} type="text" placeholder="title..." className="outline-none text-xl w-full text-center font-semibold text-slate-800" />
            <div className="flex justify-center items-center mt-2 mb-2">
                <Image src="/logo.svg" alt="logo" width={30} height={30} />
                <span className="ml-1"> - {getCurrentDate()}</span>
            </div>
            <textarea ref={descRef} id={"description"} rows="4" name={"description"} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Your Description..."></textarea>
        </div>
        
        <div className="flex flex-col w-full justify-start items-start">
            {
                ContentList.map(({type, defaultValue}, i)=> {
                    return <ContentEditor type={type} id={i+1} key={type+i} defaultValue={defaultValue} value={Inputs} onDelete={onDelete} />
                })
            }
        </div>

        <ListPopIndexBox text={"Add Content Type"} value={AddContent}>
            <li>Title</li>
            <li>Description</li>
            <li>Link</li>
            <li>Redirect</li>
            <li>Points</li>
            <li>Code</li>
            <li>Image</li>
            <li>Video</li>
            <li>Audio</li>
        </ListPopIndexBox>

        <div className="mt-3 flex justify-start items-center">
            <Button onClick={()=>{
                MakeBlog();
            }}>Overview</Button>
        </div>
    </>
}

export default DashBoardBlogEditor;