"use client"
import React, { useEffect, useState } from "react";

// components
import CourseVideoDex from "./CourseVideoDex";
import CourseContentDex from "./CourseContentDex";

const CourseIndex = ({slug}) => {
    let course = {};

    // useState
    const [CourseVideo, setCourseVideo] = useState(null);
    const [CourseVideoList, setCourseVideoList] = useState([]);

    useEffect(()=>{
        console.log(slug)
        if(slug === "tailwindcss"){
            setCourseVideo("https://www.youtube.com/embed/ZWZoIQMvoEY?si=66IZsVhKPFfPA-EF");
            setCourseVideoList(["How to setup tailwindcss step by step for beginners full video."]);
        }
        else if(slug === "chatgpt"){
            setCourseVideo("https://www.youtube.com/embed/aflEOw1pkbU?si=OQ9nTWVXwhS-ygMg");
            setCourseVideoList(["How to create website using for chatGPT with tailwindcss? | Learn ChatGpt (open AI)"])
        }
        else if(slug === "c"){
            setCourseVideo("https://www.youtube.com/embed/zQdkOQ-2erE?si=V31qFb1WSXg1xkaO");
            setCourseVideoList(["How to learn c language? || C language tutorial"])
        }
    }, []);

    return <>
        <div className="w-full flex flex-col justify-center items-center">
            <CourseVideoDex video={CourseVideo} vidoelist={CourseVideoList} />
            <CourseContentDex/>
        </div>
    </>
}

export default CourseIndex;