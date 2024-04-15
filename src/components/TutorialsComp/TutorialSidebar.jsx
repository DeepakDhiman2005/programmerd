"use client"
import React, {useEffect, useRef} from "react";

// icons
import { PiReadCvLogoLight } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";

// next
import { useRouter } from "next/navigation";

/**
 * 
 * @param props => value: function, datalist: [{}, ...], toConnection: boolean
 * @returns value: return function value
 */
const TutorialSidebar = (props) => {
    // useRef 
    const sidebarContRef = useRef(null);
    let _data = props.datalist;

    // router
    const router = useRouter();

    // variables
    const onOpen = "h-screen w-full p-4 lg:w-1/3 lg:p-4 left-0 fixed lg:relative transition-all bg-slate-800 overflow-y-scroll pb-20";
    const onClose = "h-screen w-0 p-0 lg:w-0 lg:p-0 left-0 fixed lg:relative transition-all bg-slate-800 overflow-y-scroll pb-20";

    // let _data = [
    //     {
    //         key: "Introduction",
    //         points: ["Python Overview", "install python with vs code", "write first program in python", "python structure"]
    //     },
    // ]

    useEffect(()=>{
        if(props.toConnection === "on"){
            sidebarContRef.current.className = onOpen;
        }
    }, [props.toConnection]);

    return <>
        {/* top-16 */}
        <div ref={sidebarContRef} className="h-screen w-0 p-0 lg:w-1/3 lg:p-4 left-0 fixed lg:relative transition-all bg-slate-800 overflow-y-scroll pb-20">
            
            <div className="w-full flex justify-end items-center">
                <button className="bg-slate-700 border border-solid border-slate-700 rounded-md shadow-md shadow-slate-700 cursor-pointer p-1 text-slate-50 hover:bg-slate-800" onClick={()=>{
                    props.value("off");
                    sidebarContRef.current.className = onClose;
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
                                    let title = props.title.match("%20") ? props.title.replaceAll("%20", " "): props.title;
                                    let color = (point === title ? "text-slate-400": "text-white");

                                    return <div className="ml-4 flex justify-center items-center mt-2 mb-2">
                                        <PiReadCvLogoLight color="white" size={"18px"} />
                                        <h2 className={"ml-2 cursor-pointer font-semibold hover:underline "+color} onClick={(e)=>{
                                            let text = e.target.innerText;

                                            props.value("off");
                                            sidebarContRef.current.className = onClose;

                                            router.push("/tutorial/"+text);
                                        }}>{point}</h2>
                                    </div>
                                })
                            }
                        </>
                    })
                }
            </div>
            <h2 className="mt-24 mb-24"></h2>
        </div>
    </>
}

export default TutorialSidebar;