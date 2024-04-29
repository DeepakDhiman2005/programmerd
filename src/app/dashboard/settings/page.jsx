"use client"
import React, { useState } from "react";

// icons
import { MdChangeCircle } from "react-icons/md";

// components
import DashBoardBlobEditor from "@/components/DashBoard/Editors/DashBoardBlobEditor";

const DashBoardSettings = () => {
    // useState
    const [BlobPopupDisplay, setBlobPopupDisplay] = useState(false);

    return <>
        <DashBoardBlobEditor title="Images" display={BlobPopupDisplay} value={() => { setBlobPopupDisplay(false); }} />

        <h2 className="font-semibold text-slate-800 mb-4 flex justify-between items-center text-2xl">Settings</h2>

        <div className="flex justify-between items-center cursor-pointer hover:bg-slate-50 active:bg-slate-100 bg-white border border-solid rounded-md shadow-sm shadow-slate-200 p-3" onClick={() => { setBlobPopupDisplay(true) }}>
            <h2>Set Images</h2>
            <MdChangeCircle size={"25px"} className="text-green-700" />
        </div>
    </>
}

export default DashBoardSettings;