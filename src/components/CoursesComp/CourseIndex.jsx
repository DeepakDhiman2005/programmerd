"use client"
import React from "react";

// components
import CourseVideoDex from "./CourseVideoDex";
import CourseContentDex from "./CourseContentDex";

const CourseIndex = ({slug}) => {
    return <>
        <div className="w-full flex flex-col justify-center items-center">
            <CourseVideoDex />
            <CourseContentDex/>
        </div>
    </>
}

export default CourseIndex;