"use client"
import React, {useEffect, useState} from "react";

// component
import Blogposts from "../Blogposts";
import Loader from "../Loader";
import InputSearch from "../Search/InputSearch";

const DashBoardBlogPosts = ({value=function(){}}) => {
    // useState
    const [Editor, setEditor] = useState(false);
    const [EditorData, setEditorData] = useState(false);
    const [BlogApi, setBlogApi] = useState(false);
    const [BlogItemSearch, setBlogItemSearch] = useState("");

    const ClickEditor = () => {
        // setEditor(true);
        if(Editor){ 
            setEditorData(false);
            setEditor(false);
        }else{ setEditor(true); }
    }

    const ElementSelector = (e) => {
        try{
            let _title = e.target.querySelector("h2").innerText;
            let _desc = e.target.querySelector("p").innerText;
            // console.log(_title, _desc);
            setEditorData({title: _title, desc: _desc});
        }catch(err){}
    }

    // api
    const blogapi = async () => {
        const response = await fetch("http://localhost:3000/api/blogs");
        const data = await response.json();
        // console.log(data);
        setBlogApi(data);
    }

    useEffect(()=>{
        blogapi();
    }, []);

    return <>
        <div className="mt-4 mb-4 flex flex-col justify-center items-start">
            <section className="flex justify-between w-full items-center">
                <div className="text-lg cursor-pointer hover:text-purple-700">
                    <h2>Blogs ({BlogApi ? BlogApi.length: "0"})</h2>
                </div>
                <div className="flex justify-start items-start ml-2">
                    <button className="flex items-center justify-between text-white bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white mr-3" onClick={()=>{
                        value({editor: true});
                    }}>Add Blog</button>
                    {
                        Editor ? <>
                        <button className="flex items-center justify-between text-white bg-red-600 dark:bg-red-400 hover:bg-red-700 dark:hover:bg-red-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white" onClick={ClickEditor}>Apply</button>
                        </>: <>
                        <button className="flex items-center justify-between text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white" onClick={ClickEditor}>Editor</button></>
                    }
                    
                </div>
            </section>
            <section className="flex justify-start flex-col items-start w-full">
                {/* editor selection */}
                {
                    Editor ? <div className="flex flex-col justify-start items-start w-full border border-solid border-slate-50 rounded-lg shadow-md shadow-slate-200 mt-3 mb-3">
                        <div className="w-full bg-purple-600 p-3 text-white rounded-t-lg selection:text-blue-400">
                            <h2>Choose Blog</h2>
                        </div>
                        <div className="p-3 flex w-full flex-col justify-start items-start">
                            {
                                EditorData ? <div className="flex justify-start items-center pl-4 mt-4 mb-4">
                                    <InputSearch search={e => setBlogItemSearch(e)} caseType="lower" />
                                    {
                                        EditorData.length === 1 ? <div className="flex justify-start items-center w-full">
                                            <button className="flex items-center justify-between text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white" onClick={()=>{
                                                value(EditorData);
                                            }}>Edit</button>

                                            <button className="flex items-center justify-between text-white bg-red-600 dark:bg-red-400 hover:bg-red-700 dark:hover:bg-red-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white ml-3" onClick={()=>{
                                                value({Delete: true, data: EditorData});
                                            }}>Delete</button>
                                        </div>: null
                                    }
                                </div>: <>
                                    <h2 className="text-xl font-bold text-slate-700 w-full mt-3 mb-3 text-center" onClick={()=>{
                                        setEditorData(true);
                                    }}>Choose Blog Element!</h2>
                                </>
                            }
                            
                        </div>
                    </div>: null
                }
                {/* blogs */}
                {
                    BlogApi ? <Blogposts search={BlogItemSearch} value={(e)=>{
                        setEditorData(e);
                    }}  bloglist={BlogApi} />: <div className="flex w-full justify-center items-center mt-20 mb-20">
                        <Loader />
                    </div>
                }
            </section>
        </div>
    </>
}

export default DashBoardBlogPosts;