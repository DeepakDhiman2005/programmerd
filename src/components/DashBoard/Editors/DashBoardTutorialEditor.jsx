"use client"
import React from "react";

// icons
import { CiCirclePlus } from "react-icons/ci";

// components
import TutorialTitleInput from "./tutorialEdit/TutorialTitleInput";
import TutorialPageEditBox from "./tutorialEdit/TutorialPageEditBox";

const DashBoardTutorialEditor = () => {
    return <>
        
        <div className="flex flex-col justify-start items-start">
            <TutorialTitleInput className="mt-3 mb-3" />

            <div className="w-full flex flex-col justify-start items-start">
                <TutorialPageEditBox />
            </div>

            <button className="bg-slate-50 border border-solid flex w-full mt-2 mb-2 justify-center items-center border-slate-500 rounded-md">
                <CiCirclePlus size={"45px"} className="mt-6 mb-6 text-slate-700" />
                <span className="ml-2 text-slate-800">Add Page</span>
            </button>
        </div>
    </>
}

export default DashBoardTutorialEditor;