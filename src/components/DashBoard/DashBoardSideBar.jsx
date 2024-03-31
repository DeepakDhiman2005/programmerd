"use client"
import React from "react";

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

const DashBoardSideBar = (props) => {
    // function
   const DashClick = (e) => {
        try{
         let tagName = e.target.tagName;
         if(tagName.toLowerCase() === "li"){
            let get_h2 = e.target.querySelector('h2').innerText;
            props.value(get_h2);
            // DashTitle !== "" ? props.value(get_h2): null;
         }
         else if(tagName.toLowerCase() === "h2"){
            let get_h2 = e.target.innerText;
            props.value(get_h2);
         }
         else if(tagName.toLowerCase() === "svg"){
            let get_h2 = e.target.parentNode.querySelector('h2').innerText;
            props.value(get_h2);
         }
        }catch(err){ }
      // console.log(DashTitle)
   }

    return <>
        <div className="bg-white border border-solid w-3/12 border-slate-50 rounded-md shadow-md shadow-slate-400 list-none">
            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <MdSpaceDashboard size={"25px"} className="text-slate-800 mr-4" />
               <h2>DashBoard</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <FaBlog size={"25px"} className="text-slate-800 mr-4" />
               <h2>Blogs</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <MdVideoLibrary size={"25px"} className="text-slate-800 mr-4" />
               <h2>Video's</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <FaBuysellads size={"25px"} className="text-slate-800 mr-4" />
               <h2>Affilates</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <FaBook size={"25px"} className="text-slate-800 mr-4" />
               <h2>Courses</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <IoFileTrayStacked size={"25px"} className="text-slate-800 mr-4" />
               <h2>Tutorials</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <FaDatabase size={"25px"} className="text-slate-800 mr-4" />
               <h2>DataBase</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500" onClick={DashClick}>
               <IoMdSettings size={"25px"} className="text-slate-800 mr-4" />
               <h2>Settings</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500">
               <FaYoutube size={"25px"} className="text-red-600 mr-4" />
               <h2>Youtube</h2>
            </li>

            <li className="flex justify-state items-center cursor-pointer w-full active:bg-slate-50 rounded-md p-4 selection:text-blue-500">
               <MdOutlinePlaylistAdd size={"25px"} className="text-slate-800 mr-4" />
               <h2>Video's PlayList</h2>
            </li>
        </div>
    </>
}

export default DashBoardSideBar;