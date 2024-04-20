"use client"
import React, { useRef, useState } from "react";

// icons
import { MdSpaceDashboard } from "react-icons/md"; // dashboard
import { FaBlog } from "react-icons/fa"; // blog
import { MdVideoLibrary } from "react-icons/md"; // video
import { FaBuysellads } from "react-icons/fa6"; // affiliate
import { FaBook } from "react-icons/fa6"; // course
import { IoFileTrayStacked } from "react-icons/io5"; // tutorial
import { FaDatabase } from "react-icons/fa6"; // database
import { IoMdSettings } from "react-icons/io"; // settings

import { FaYoutube } from "react-icons/fa"; // youtube
import { MdOutlinePlaylistAdd } from "react-icons/md"; // playlist

import { FaArrowLeft } from "react-icons/fa6"; // left
import { FaArrowRight } from "react-icons/fa6"; // right

// next
import { useRouter } from "next/navigation";

const DashBoardSideBar = (props) => {
   // router
   const router = useRouter();

   // useRef
   const sideRef = useRef(null);

   // useState
   const [ShowText, setShowText] = useState(true);

   // function
   const DashClick = (e) => {
        try{
         let tagName = e.target.tagName;
         let valuetext = "";
         if(tagName.toLowerCase() === "li"){
            valuetext = e.target.ariaValueText;
         }
         else if(tagName.toLowerCase() === "h2"){
            valuetext = e.target.parentNode.ariaValueText;
         }
         else if(tagName.toLowerCase() === "svg"){
            valuetext = e.target.parentNode.ariaValueText;
         }
         else if(tagName.toLowerCase() === "path"){
            valuetext = e.target.parentNode.parentNode.ariaValueText;
         }
         // console.log(valuetext)
         router.push("/dashboard/visit/"+valuetext);
        }catch(err){ }
   }

   const MiniMizeEvent = () => {
      sideRef.current.className = "bg-white border border-solid w-auto transition-all border-slate-50 rounded-md shadow-md shadow-slate-400 list-none";
      setShowText(false);
   }

   const MaximizeEvent = () => {
      sideRef.current.className = "bg-white border border-solid w-3/12 transition-all border-slate-50 rounded-md shadow-md shadow-slate-400 list-none";
      setShowText(true);
   }

   return <>
        <div ref={sideRef} className="bg-white border border-solid w-3/12 transition-all border-slate-50 rounded-md shadow-md shadow-slate-400 list-none">
            <li className="flex justify-start items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500">
               {
                  ShowText ? <FaArrowLeft size={"20px"} className="text-slate-800" onClick={MiniMizeEvent} />:
                  <FaArrowRight size={"20px"} className="text-slate-800" onClick={MaximizeEvent} />
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="dashboard">
               <MdSpaceDashboard size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">DashBoard</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="blogs">
               <FaBlog size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Blogs</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="video's">
               <MdVideoLibrary size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Video's</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="affiliates">
               <FaBuysellads size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Affiliates</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="courses">
               <FaBook size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Courses</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="tutorials">
               <IoFileTrayStacked size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Tutorials</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="database">
               <FaDatabase size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">DataBase</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick} aria-valuetext="settings">
               <IoMdSettings size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Settings</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500">
               <FaYoutube size={"25px"} className="text-red-600" />
               {
                  ShowText ? <h2 className="ml-4">Youtube</h2>: null
               }
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500">
               <MdOutlinePlaylistAdd size={"25px"} className="text-slate-800" />
               {
                  ShowText ? <h2 className="ml-4">Video's PlayList</h2>: null
               }
            </li>
        </div>
    </>
}

export default DashBoardSideBar;