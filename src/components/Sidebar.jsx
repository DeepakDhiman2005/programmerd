"use client"
import React, { useRef, useState } from "react";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

// Redux
import { useSelector } from "react-redux";

// next
import { useRouter } from "next/navigation";

// components
import SideBarProduct from "./SideBarComp/SideBarProduct";
import SideBarBlogs from "./SideBarComp/SideBarBlogs";
import SideBarCourses from "./SideBarComp/SideBarCourses";

const Sidebar = () => {
    const RightRef = useRef(null);
    const [Title, setTitle] = useState('');

    // useRouter
    const router = useRouter();

    // redux
    const SidebarEvent = useSelector(state => state.events.sidebar);

    // functions
    const GetName = (e) => {
        let tagName = e.target.tagName;
        if(tagName.toLowerCase() === "div"){
            try{
                let get_h2 = e.target.querySelector('h2').innerText;
                setTitle(get_h2);
            }catch(err){}
        }
        else if(tagName.toLowerCase() === "h2"){
            try{
                let get_h2 = e.target.innerText;
                setTitle(get_h2);
            }catch(err){}
        }
        else if(tagName.toLowerCase() === "svg"){
            try{
                let get_h2 = e.target.parentNode.querySelector('h2').innerText;
                setTitle(get_h2);
            }catch(err){}
        }
        const getValue = RightRef.current.classList.value;
        RightRef.current.classList.value = getValue.replace('w-0', 'w-full');
    }

    try{
        if(!SidebarEvent){
            const getValue = RightRef.current.classList.value;
            RightRef.current.classList.value = getValue.replace('w-full', 'w-0');
        }    
    }catch(err){}

    const GoToRight = () => {
        const getValue = RightRef.current.classList.value;
        // console.log(getValue)
        RightRef.current.classList.value = getValue.replace('w-full', 'w-0');
    }

    return <>
        <div key={"GlobalSideBar"} className="flex flex-col justify-start items-start fixed left-0 w-0 bg-white h-screen overflow-hidden z-50" id="sidebar" style={{transition: '0.5s', width: SidebarEvent ? '100%': '0px'}}>
            <div className="flex justify-between w-full items-center p-5 cursor-pointer active:bg-slate-100" onClick={GetName}>
                <h2 className="text-xl text-slate-700 cursor-pointer">Courses</h2>
                <MdKeyboardArrowRight className="text-black" size={"25px"} />
            </div>
            <div className="flex justify-between w-full items-center p-5 cursor-pointer active:bg-slate-100" onClick={GetName}>
                <h2 className="text-xl text-slate-700 cursor-pointer">Blog</h2>
                <MdKeyboardArrowRight className="text-black" size={"25px"} />
            </div>
            <div className="flex justify-between w-full items-center p-5 cursor-pointer active:bg-slate-100" onClick={GetName}>
                <h2 className="text-xl text-slate-700 cursor-pointer">Video's</h2>
                <MdKeyboardArrowRight className="text-black" size={"25px"} />
            </div>
            <div className="flex justify-between w-full items-center p-5 cursor-pointer active:bg-slate-100" onClick={GetName}>
                <h2 className="text-xl text-slate-700 cursor-pointer">Affilates</h2>
                <MdKeyboardArrowRight className="text-black" size={"25px"} />
            </div>
            <div className="flex flex-col justify-start items-start p-5 w-full">
                <div className="flex justify-start items-center">
                    <h2 className="text-xl text-slate-700 mr-2 select-none">YouTube</h2>
                    <span className="bg-blue-600 p-1 pl-2 pr-2 text-white rounded-sm border border-solid text-[12px] select-none">Go to YouTube Channel</span>
                </div>
                <div className="flex flex-col justify-between items-start w-full mt-3">
                    <a href="https://www.youtube.com/@ProgrammerD7" target="_blank" className="w-full border border-solid border-slate-600 flex justify-between items-center cursor-pointer p-4">
                        <div className="flex justify-center items-center">
                            <FaYoutube size={"25px"} className="text-red-600" />
                            <h2 className="ml-2">Programmer D</h2>
                        </div>
                        <MdKeyboardArrowRight className="text-black" size={"25px"} />
                    </a>
                    <a href="https://www.youtube.com/@ProgrammerD7/playlists" target="_blank" className="w-full mt-3 border border-solid border-slate-600 flex justify-between items-center cursor-pointer p-4">
                        <div className="flex justify-center items-center">
                            <MdOutlinePlaylistAdd size={"25px"} className="text-black" />
                            <h2 className="ml-2">Video's PlayList</h2>
                        </div>
                        <MdKeyboardArrowRight className="text-black" size={"25px"} />
                    </a>
                </div>
            </div>

            {/* po-pop left sidebar */}
            <div ref={RightRef} key={"SideBarLeftPopWindow"} className="flex flex-col w-0 bg-slate-50 h-full fixed z-50 right-0 overflow-hidden" style={{transition: "0.5s"}}>
                {/* top view */}
                <div key={"SideBarLeftPopWindowTop"} className="w-full flex justify-start items-center pl-2 bg-white border-b border-solid border-slate-200 pt-4 pb-4">
                    <FaArrowLeftLong size={"18px"} className="text-slate-600 ml-3 cursor-pointer" onClick={GoToRight} />
                    <h2 className="text-xl ml-3 text-slate-700">{Title}</h2>
                </div>
                {/* Content */}
                <div key={"SideBarLeftPopWindowBottom"} className="flex overflow-y-scroll">
                    {
                        Title === "Blog" ? (
                            <>
                                <SideBarBlogs />
                            </>
                        ): Title === "Courses" ? (
                            <>
                                <SideBarCourses />
                            </>
                        ): Title === "Affilates" ? (
                            <>
                                <SideBarProduct />
                            </>
                        ):(
                            "All Courses"
                        )
                    }
                </div>
            </div>
        </div>
    </>
}

export default Sidebar;