"use client"
import React, { useState } from "react";

// components
import DashBoardBlogPosts from "./DashBoardBlogPosts";
import DashBoardProducts from "./DashBoardProducts";

// editor components
import DashBoardBlogEditor from "./Editors/DashBoardBlogEditor";
import DashBoardProductEditor from "./Editors/DashBoardProductEditor";

// icons
import { RxCross2 } from "react-icons/rx";
import DashBoardHome from "./DashBoardHome";

const DashBoardMonitor = ({ slug }) => {
    const [Editor, setEditor] = useState({editor: false, data: null, type: ""});

    return <>
        <div className="w-3/4 ml-3 bg-white p-4 border border-solid border-slate-50 rounded-md shadow-md shadow-slate-300">
            <h2 className="font-semibold text-slate-800 flex justify-between items-center text-2xl">{slug === undefined ? "Dashboard" : slug.replace(slug[0], slug[0].toUpperCase())} 
                {
                    Editor.editor ? <RxCross2 size={"25px"} className="cursor-pointer" onClick={()=>{
                        if(Editor.editor){ setEditor({editor: false, data: null}); }
                    }} />: null
                }
            </h2>
            {
                slug === undefined || slug === "/" || slug === "dashboard" ? <>
                    <DashBoardHome />
                </>: null
            }
            {
                slug === "blogs" ? <>
                    {
                        Editor.editor ? <DashBoardBlogEditor data={Editor} sendblog={(e)=>{
                            setEditor(e)
                        }} /> : <DashBoardBlogPosts value={(e) => {
                            setEditor(e);
                        }} />
                    }
                </> : null
            }
            {
                slug === "affilates" ? <>
                    {
                        Editor.editor ? <DashBoardProductEditor data={Editor} value={(e)=>{
                            setEditor({editor: false, data: e});
                            // console.log(e);
                        }} />: <DashBoardProducts getData={Editor} value={(e)=>{
                            setEditor(e);
                        }} />
                    }
                </> : null
            }
        </div>
    </>
}

export default DashBoardMonitor;