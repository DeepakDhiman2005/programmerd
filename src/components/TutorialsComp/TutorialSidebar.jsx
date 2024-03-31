"use client"
import React, {useEffect, useRef} from "react";

// icons
import { PiReadCvLogoLight } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";

/**
 * 
 * @param props => value: function, datalist: [{}, ...], toConnection: boolean
 * @returns value: return function value
 */
const TutorialSidebar = (props) => {
    // useRef 
    const sidebarContRef = useRef(null);
    let _data = props.datalist;

    // let _data = [
    //     {
    //         key: "Introduction",
    //         points: ["Python Overview", "install python with vs code", "write first program in python", "python structure"]
    //     },
    //     {
    //         key: "python string",
    //         points: ["Python String", "Operation in String", "Methods of String", "Format String"]
    //     },
    //     {
    //         key: "python string",
    //         points: ["Python String", "Operation in String", "Methods of String", "Format String"]
    //     },
    //     {
    //         key: "python string",
    //         points: ["Python String", "Operation in String", "Methods of String", "Format String"]
    //     },
    //     {
    //         key: "python string",
    //         points: ["Python String", "Operation in String", "Methods of String", "Format String"]
    //     },
    //     {
    //         key: "python string",
    //         points: ["Python String", "Operation in String", "Methods of String", "Format String"]
    //     }
    // ]

    useEffect(()=>{
        if(props.toConnection){
            sidebarContRef.current.className = "h-screen w-1/4 transition-all p-4 bg-slate-800 overflow-y-scroll fixed left-0 top-16 bottom-0 pb-20";
        }
    }, [props.toConnection]);

    return <>
        {/* top-16 */}
        <div ref={sidebarContRef} className="h-screen w-1/4 transition-all p-4 bg-slate-800 overflow-y-scroll fixed left-0 top-16 bottom-0 pb-20">
            <div className="w-full flex justify-end items-center">
                <button className="bg-slate-700 border border-solid border-slate-700 rounded-md shadow-md shadow-slate-700 cursor-pointer p-1 text-slate-50 hover:bg-slate-800" onClick={()=>{
                    props.value(false);
                    sidebarContRef.current.className = "h-screen w-0 transition-opacity p-0 bg-slate-800 overflow-y-scroll fixed left-0 top-16 bottom-0 pb-0 overflow-hidden";
                }}>
                    <IoIosArrowBack size={"25px"} />
                </button>
            </div>
            {/* <h2>sidebar</h2> */}
            <div className="flex flex-col justify-center items-start">
                {
                    _data.map((data) => {
                        return <>
                            <h2 className="text-xl mt-2 mb-2 font-bold text-blue-500">{data.key.toUpperCase()}</h2>
                            {
                                data.points.map((point) => {
                                    return <div className="ml-4 flex justify-center items-center mt-2 mb-2">
                                        <PiReadCvLogoLight color="white" size={"18px"} />
                                        <h2 className="ml-2 cursor-pointer font-semibold text-white hover:underline" onClick={(e)=>{
                                            // console.log(e.target.innerText)
                                            props.value(e.target.innerText);
                                        }}>{point}</h2>
                                    </div>
                                })
                            }
                        </>
                    })
                }
            </div>
        </div>
    </>
}

export default TutorialSidebar;