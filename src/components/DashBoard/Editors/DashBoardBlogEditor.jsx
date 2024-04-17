"use client"
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

// next
import Image from "next/image";

// function
import getCurrentDate from "@/components/Functions/getCurrentDate";

// components
import Dropdown from "@/components/Dropdown";
import DashBoardBlogContent from "./DashBoardBlogContent";
import Button from "@/components/Button";
import Article from "@/components/Article";
import CommentBox from "@/components/CommentBox";
import MessageEmit from "@/components/MessageEmit";
import ConfirmCard from "@/components/ConfirmCard";

const DashBoardBlogEditor = ({ data=null, sendblog=function(){} }) => {
    // useState
    const [Blog, setBlog] = useState({
        title: "title",
        desc: "Description",
        date: "MM-DD-YY",
        content: [],
        comments: []
    });
    const [MultiContentCall, setMultiContentCall] = useState(0);
    const [ContentArray, setContentArray] = useState([]);
    const [MessageDisplay, setMessageDisplay] = useState(false);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [UID, setUID] = useState(false);
    const [Method, setMethod] = useState(false);

    // useRef
    const filedTitle = useRef(null);
    const filedDate = useRef(null);
    const filedDesc = useRef(null);
    const filedContent = useRef(null);
    const PopupRef = useRef(null);

    useEffect(()=>{
        try{
            if(data !== null){
                // console.log(data)
                let blog = data.data;
                let content = blog.data;
                filedTitle.current.value = content.title;
                filedDate.current.value = content.date;
                filedDesc.current.value = content.desc;
                DataAssign(content.content);
                // console.log(blog)
                setUID(blog._id);
                setMethod("edit");
            }
        }catch(err){}
    }, [data])

    // function
    const onSubmit = async (type="") => {
        try {
            let _title = filedTitle.current.value;
            let _desc = filedDesc.current.value;
            let _date = filedDate.current.value;

            // console.log(ContentArray);
            let content = [];

            ContentArray.map((data, i) => {
                // console.log(data);
                content[i] = {};
                if (data.type === "title") {
                    content[i].title = data.data;
                } else if (data.type === "description") {
                    content[i].desc = data.data;
                } else if (data.type === "link") {
                    content[i].link = data.data;
                } else if (data.type === "code") {
                    content[i].code = [];
                    data.data.map((data) => {
                        content[i].code.push(data.text);
                    })
                } else if (data.type === "points") {
                    content[i].points = [];
                    data.data.map((data) => {
                        content[i].points.push(data.text);
                    })
                } else if(data.type === "image") {
                    content[i].image = {
                        image: data.data,
                        width: 500,
                        height: 200
                    }
                } else if(data.type === "video"){
                    content[i].video = {
                        video: data.data
                    };
                }
            })

              // console.log(content);
            let blog = {
                title: _title,
                desc: _desc,
                date: _date,
                content: content,
                comment: []
            }

            // console.log(ContentArray)
            // console.log(blog)
            let BlobAccess = false;
            if(type === "overview"){
                setBlog(blog);
            }else {
                let _array = [];
                let ImgContent = [];
                blog.content.map((data)=>{
                    // console.log(data)
                    if(data.image){
                        if(typeof data.image.image === "string"){
                            _array.push(data);
                        }else {
                            // console.log(data.image)
                            BlobAccess = true;
                            let unqiueName =  Date.now() + "-" + Math.random()*1000 + "-" + data.image.image.name;
                            _array.push({image: {
                                image: "/uploads/blogs/"+unqiueName,
                                width: data.image.width,
                                height: data.image.height
                            }});
                            ImgContent.push({name: unqiueName, image: data.image.image});
                        }
                    }else if(data.video){
                        if(typeof data.video.video === "string"){
                            _array.push(data);
                        }else {
                            BlobAccess = true;
                            let unqiueName =  Date.now() + "-" + Math.random()*1000 + "-" + data.video.video.name;
                            _array.push({video: {
                                video: "/uploads/blogs/"+unqiueName,
                            }});
                            ImgContent.push({name: unqiueName, video: data.video.video});
                        }
                    }else {
                        _array.push(data);
                    }
                })
                blog.content = _array;
                // console.log(ImgContent);

                let article = { method: Method ? Method: "add", data: blog, date: getCurrentDate(), type: "blog", id: UID };
                // console.log(article)

                let resp = await axios.post("/api/blogupload/", article);  
                // let resp = await fetch("/api/blogupload/", {
                //     mathod: "POST",
                //     body: JSON.stringify(article)
                // });
                // let dt = await resp.json();
                // console.log(dt);
                // console.log(resp.data);
                if(BlobAccess){
                    let blobresp = await axios.postForm("/api/blob/", ImgContent);
                    // let formData = new FormData();
                    // ImgContent.filter((dt, i)=>{
                    //     formData.append(dt.name, (dt.image || dt.video));
                    // })
                    // let blobresp = await fetch("/api/blob/", {
                    //     method: "POST",
                    //     body: formData
                    // });
                    // let resv = await blobresp.json();
                }
                if(resp){
                    const audio = new Audio("/sound/send.mp3");
                    window.scrollTo(0, 0);
                    audio.play();
                    setMessageDisplay(true);
            
                    let onetime = setInterval(() => {
                        sendblog({editor: false, data: article});
                        clearInterval(onetime);
                    }, 1500);
                }
            }
        } catch (err) {
            // console.log(err)
        }
        // console.log(_title, _desc, _date)
    }

    const onDropDown = (e) => {
        let _text = e.toLowerCase();
        setMultiContentCall(MultiContentCall + 1);
        if (_text === "title" || _text === "description" || _text === "link") {
            setContentArray([...ContentArray, { type: _text, data: "", id: MultiContentCall + 1 }]);
        }
        else if (_text === "points" || _text === "code") {
            setContentArray([...ContentArray, { type: _text, data: [{ number: 1, text: "" }], id: MultiContentCall + 1 }]);
        }
        else if(_text === "image" || _text === "video"){
            setContentArray([...ContentArray, { type: _text, data: {src: ""}, id: MultiContentCall + 1 }]);
        }
    }

    // Data Assign
    const DataAssign = (content) => {
        let _array = [];
        for(let i=0; i < content.length; i++){
            // console.log(content[i])
            if(content[i].title){
                _array.push({ type: "title", data: content[i].title, id: i + 1 });
            }else if(content[i].desc){
                _array.push({ type: "desc", data: content[i].desc, id: i + 1 });
            }else if(content[i].link){
                _array.push({ type: "link", data: content[i].link, id: i + 1 });
            }else if(content[i].points){
                _array.push({ type: "points", data: content[i].points.map((point, i)=>{ return {number: i+1, text: point} }), id: i + 1 });
            }else if(content[i].code){
                _array.push({ type: "code", data: content[i].code.map((point, i)=>{ return {number: i+1, text: point} }), id: i + 1 });
            }else if(content[i].image){
                _array.push({ type: "image", data: content[i].image.image, id: i + 1 })
            }else if(content[i].video){
                _array.push({ type: "video", data: content[i].video.video, id: i + 1 })
            }
        }
        setMultiContentCall(_array.length);
        // console.log(_array);
        setContentArray([..._array])
    }

    // recall value
    const AssignValue = (e) => {
        // console.log(e)
        let _array = [];
        ContentArray.map((data) => {
            if (data.id === e.id) {
                _array.push({ type: e.type, data: e.data, id: e.id });
            } else {
                _array.push(data);
            }
        })
        // console.log(_array);
        // console.log(ContentArray)
        setContentArray([..._array]);
    }

    // delete element
    const DeleteContentItem = (e) => {
        // console.log(e)
        let _array = [];
        let onetime = 0;
        ContentArray.map((data, i)=>{
            if(data.id === e.id){
                // console.log(data);
                onetime += 1;
                setMultiContentCall(ContentArray.length-1);
            }else{
                _array.push({type: data.type, data: data.data, id: i+1-onetime});
            }
        })
        // console.log(_array);
        if(_array.length === 0){
            // console.log(true);
            setMultiContentCall(0);
        }
        setContentArray([..._array]);
    }

    const PopUpOverViewPage = (bool) => {
        try {
            if (bool) {
                document.body.style.overflow = "hidden";
                PopupRef.current.className = "w-full z-[200] h-full fixed top-0 transition-all left-0 overflow-y-scroll bg-slate-50";
            } else {
                document.body.style.overflow = "scroll";
                PopupRef.current.className = "w-0 z-[200] h-0 fixed top-0 transition-all left-0 overflow-hidden bg-slate-50";
            }
        } catch (er) { }
    }

    return <>
        <div ref={PopupRef} className="w-0 z-[200] h-0 fixed top-0 transition-all left-0 overflow-hidden bg-slate-50">
            {/* layer 1 */}
            <div className="flex w-full justify-end items-center p-3">
                <Button color="red" onClick={() => PopUpOverViewPage(false)}>Back</Button>
            </div>
            {/* layer 2 */}
            <div className="flex flex-col justify-center items-center pt-10 pb-10 w-full bg-slate-50">
                {/* main article */}
                <article className="bg-transparent shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-center">
                    {/* title */}
                    <h2 className="mb-2 mt-2 ml-3 w-full text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                        {Blog.title}
                    </h2>
                    {/* date */}
                    <div className="flex justify-center w-full items-center mt-4">
                        <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" />
                        <p className="ml-1 text-sm"> - {Blog.date ? Blog.date : "MM:DD:YY"}</p>
                    </div>
                    {/* main content */}
                    <div className="mt-10 mb-10 w-full text-lg text-start font-semibold tracking-tight text-gray-700 dark:text-white">
                        {
                            Blog ? <Article data={Blog} /> : <p>Loading...</p>
                        }
                    </div>
                </article>
                {/* comment box */}
                <CommentBox />
            </div>
        </div>

        <ConfirmCard display={ConfirmDisplay} message="Your Blog-Post Submit:" value={(e)=>{
            if(e){ onSubmit("submit"); }
            setConfirmDisplay(false);
        }} />

        <MessageEmit success={true} display={MessageDisplay} message="Data submit Successfully!" position={"center"} value={(e)=>{ setMessageDisplay(e); }} />

        <section className="flex flex-col justify-start items-start mt-6 mb-6">
            <div className="relative z-0 w-full mb-5 group">
                <input ref={filedTitle} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" required />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-purple-600 text-lg">Title</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input ref={filedDate} type="text" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" required />
                <label htmlFor="floating_date" className="peer-focus:font-medium absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-purple-600 text-lg">Date</label>
            </div>

            <div className="flex flex-col justify-start items-start mb-3 w-full">
                <label htmlFor="message" className="font-semibold mr-3 text-lg">Description: </label>
                <textarea ref={filedDesc} id="message" rows="4" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Your Description..."></textarea>
            </div>

            <section className="flex flex-col relative justify-start items-start w-full">
                <h2 className="mt-3 mb-3 font-bold text-slate-800 text-xl">Content:</h2>
                <div className="flex justify-between items-start w-full p-3">
                    {/* layers */}
                    <div ref={filedContent} className="flex flex-col justify-center items-start w-full">
                        {
                            ContentArray.map((data, i) => {
                                return <DashBoardBlogContent type={data.type} uniqueID={i} defaultValue={data.data} id={i + 1} DeleteValue={DeleteContentItem} value={AssignValue} />
                            })
                        }
                        {/* <DashBoardBlogContent type={"title"} id={"1"} value={(e)=>{ console.log(e); }} /> */}
                    </div>
                    {/* buttons */}
                    <div className="mt-3 flex items-center absolute right-0 top-0 justify-between">
                        <Dropdown value={onDropDown} className="flex justify-center items-center">
                            <li>Title</li>
                            <li>Description</li>
                            <li>Link</li>
                            <li>Code</li>
                            <li>Points</li>
                            <li>Image</li>
                            <li>Video</li>
                            <li>Audio</li>
                        </Dropdown>
                    </div>
                </div>
            </section>
            {/* bottom layer */}
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center">
                    <button className="flex items-center justify-between text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white" onClick={()=>{ setConfirmDisplay(true) }}>Submit</button>

                    <Button color="blue" className="ml-3" onClick={() => {
                        onSubmit("overview");
                        PopUpOverViewPage(true)
                    }}>OverView</Button>
                </div>

                <div className="flex pt-2 items-center justify-end">
                    <h2 className="text-gray-500 select-none">Editor by</h2>
                    <Image src={"/logo.svg"} width={26} height={26} className="ml-3 mr-3 select-none" alt="logo" />
                </div>
            </div>
        </section>
    </>
}

export default DashBoardBlogEditor;