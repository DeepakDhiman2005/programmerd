"use client"
import React, { useState, useRef } from "react";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// components
import VideoRender from "../VideoRender";

const CourseVideoDex = ({video, vidoelist=[]}) => {
    // useState
    const [ShowList, setShowList] = useState(true);

    // useRef
    const ListRef = useRef(null);

    // functions
    const ShowListEvent = () => {
        if(ShowList){
            ListRef.current.className="w-full overflow-y-scroll h-0 transition-all duration-400 md:h-full flex flex-col justify-start items-center list-none";
            setShowList(false);
        }else {
            ListRef.current.className="w-full overflow-y-scroll h-64 transition-all duration-400 md:h-full flex flex-col justify-start items-center list-none";
            setShowList(true);
        }
    }

    return <div className="w-full flex flex-col md:flex-row justify-center items-center md:h-96 p-2">
        {/* side 1 */}
        <div className="md:w-[65%] w-full mb-3 h-52 md:h-full">
            <VideoRender video={video} className="w-full h-full" />
        </div>
        {/* side 2 */}
        <div className="md:w-[35%] w-full h-full">
            <div className="flex justify-start w-full md:hidden items-center p-3" onClick={ShowListEvent}>
                <span className="font-semibold">Show Course Content</span>
                {
                    ShowList ? <IoIosArrowDown size={"20px"} className="ml-1 transition-all" />:
                    <IoIosArrowUp size={"20px"} className="ml-1 transition-all" />
                }
            </div>
            <ul ref={ListRef} className="w-full overflow-y-scroll h-64 md:h-full transition-all flex flex-col justify-start items-center list-none">
                {
                    vidoelist.length !==0 ? vidoelist.map((point)=>{
                        return <li className="mt-3 mb-3 w-4/5 border border-solid rounded-md shadow-md shadow-slate-300 cursor-pointer p-4">{point}</li>
                    }): <h2 className="flex justify-center items-center w-4/5 mt-3 mb-3">Loading...</h2>
                }
            </ul>
        </div>
    </div>
}

export default CourseVideoDex;