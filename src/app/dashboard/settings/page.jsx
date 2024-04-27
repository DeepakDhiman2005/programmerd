"use client"
import React from "react";

// icons
import { MdChangeCircle } from "react-icons/md";

// components
import DashBoardBlobEditor from "@/components/DashBoard/Editors/DashBoardBlobEditor";

const DashBoardSettings = () => {
    return <>
        <DashBoardBlobEditor title="Images" />

        <div className="w-full ml-3 bg-white p-4 border border-solid border-slate-50 rounded-md shadow-md shadow-slate-300">
            <h2 className="font-semibold text-slate-800 mb-4 flex justify-between items-center text-2xl">Settings</h2>
            
            <div className="flex justify-between items-center cursor-pointer hover:bg-slate-50 active:bg-slate-100 bg-white border border-solid rounded-md shadow-sm shadow-slate-200 p-3">
                <h2>Set Images</h2>
                <MdChangeCircle size={"25px"} className="text-green-700" />
            </div>
        </div>
    </>
}

export default DashBoardSettings;