"use client"
import React, {useEffect, useRef} from "react";

// icons
import { IoIosArrowForward } from "react-icons/io";

// next
import { useRouter } from "next/navigation";

// custom
import TopScrollButton from "../TopScrollButton";
import Article from "../Article";

/**
 * @param props = toConnection: boolean, value: function, datalist: [{}, ...], title: "String"
 */
const TutorialContent = (props) => {
    // useRef
    const RightContRef = useRef(null);
    const RightButton = useRef(null);

    // next
    const router = useRouter();

    let _data = props.datalist;

    useEffect(()=>{
        if(props.toConnection === "off"){
            RightButton.current.className = "mt-4 mb-4 flex justify-start lg:flex items-center";
        }
        if(router){
            RightContRef.current.scrollTo(0, -1);
        }

    }, [props.toConnection, router])

    // functions
    const GoNext = () => {
        // console.log("next")
        props.value("next");
        RightContRef.current.scrollTo(0, -1);
    }

    const GoPrevious = () => {
        props.value("previous");
    }

    return <>
        <div ref={RightContRef} className="h-screen scroll-smooth transition-all p-4 block overflow-y-scroll bg-slate-50 w-full right-0 top-16 bottom-0">

            <div ref={RightButton} className="mt-4 mb-4 flex justify-start lg:hidden items-center">
                <button className="bg-slate-700 border border-solid border-slate-700 rounded-md shadow-md shadow-slate-700 cursor-pointer p-1 text-slate-50 hover:bg-slate-800" onClick={()=>{
                    props.value("on");
                    RightButton.current.className = "mt-4 mb-4 hidden justify-start lg:hidden items-center";
                }}>
                    <IoIosArrowForward size={"25px"} />
                </button>
            </div>

            {/* layer top */}
            <div className="mt-4 mb-4 flex justify-between items-center">
                {
                    props.page ? <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-slate-600 cursor-not-allowed p-3 pt-2 pb-2 border border-solid border-slate-700 rounded-sm hover:shadow-lg">{"<<"} Previous</button> 
                    </>: <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={GoPrevious}>{"<<"} Previous</button>   
                    </>
                }

                {
                    props.pageEnd ? <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-slate-600 cursor-not-allowed p-3 pt-2 pb-2 border border-solid border-slate-700 rounded-sm hover:shadow-lg">Next {">>"}</button> 
                    </>: <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={GoNext}>Next {">>"}</button>
                    </>
                }
            </div>
            {/* layer middle */}
            <article className="flex flex-col items-start">
                {/* title */}
                <h2 className="text-3xl font-bold mb-4 selection:text-blue-700">{
                    _data.title !== "" ? _data.title : props.title.replace(props.title[0], props.title[0].toUpperCase())
                }</h2>

                {/* content */}
                <div className="flex flex-col items-start">
                    {
                        _data !== undefined || _data !== null ? <Article data={_data} />: <h2>Loading...</h2>
                    }
                </div>
            </article>

            {/* layer bottom */}
            <div className="mt-24 mb-24 flex justify-between items-center">
                {
                    props.page ? <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-slate-600 cursor-not-allowed p-3 pt-2 pb-2 border border-solid border-slate-700 rounded-sm hover:shadow-lg">{"<<"} Previous</button> 
                    </>: <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={GoPrevious}>{"<<"} Previous</button>   
                    </>
                }

                {
                    props.pageEnd ? <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-slate-600 cursor-not-allowed p-3 pt-2 pb-2 border border-solid border-slate-700 rounded-sm hover:shadow-lg">Next {">>"}</button> 
                    </>: <>
                        <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={GoNext}>Next {">>"}</button>
                    </>
                }
            </div>
            <TopScrollButton container={RightContRef} />
        </div>
    </>
}

export default TutorialContent;