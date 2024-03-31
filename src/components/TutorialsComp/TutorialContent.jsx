"use client"
import React, {useEffect, useRef, useState} from "react";
import CodeHighlighter from "../CodeHighlighter";

// icons
import { IoIosArrowForward } from "react-icons/io";

// next
import Image from "next/image";

// custom
import PopUpImageBox from "../PopUpImageBox";
import TopScrollButton from "../TopScrollButton";

/**
 * @param props = toConnection: boolean, value: function, datalist: [{}, ...], title: "String"
 */
const TutorialContent = (props) => {
    // useRef
    const RightContRef = useRef(null);

    // useState 
    const [ButtonDisplay, setButtonDisplay] = useState("none");
    const [PopUpImage, setPopUpImage] = useState(false);
    const [ImageData, setImageData] = useState({
        src: "",
        width: 0,
        height: 0
    })

    let _data = props.datalist;

    useEffect(()=>{
        if(props.toConnection){
            RightContRef.current.className = "w-3/4 scroll-smooth transition-all p-4 overflow-y-scroll bg-slate-50 fixed right-0 top-16 bottom-0";
        }
        else{
            RightContRef.current.className = "w-full scroll-smooth p-4 transition-all overflow-y-scroll bg-slate-50 fixed right-0 top-16 bottom-0";
            setButtonDisplay("block");
        }
    }, [props.toConnection])

    return <>
        {/* popup image window */}
        <PopUpImageBox popup={PopUpImage} imageData={ImageData} value={(e)=>{
            setPopUpImage(e);
        }} />

        <div ref={RightContRef} className="w-3/4 scroll-smooth transition-all p-4 overflow-y-scroll bg-slate-50 fixed right-0 top-16 bottom-0">
            <div className="mt-4 mb-4 flex justify-start items-center" style={{display: ButtonDisplay}}>
                <button className="bg-slate-700 border border-solid border-slate-700 rounded-md shadow-md shadow-slate-700 cursor-pointer p-1 text-slate-50 hover:bg-slate-800" onClick={()=>{
                    props.value(true);
                    RightContRef.current.className = "w-3/4 scroll-smooth transition-all p-4 overflow-y-scroll bg-slate-50 fixed right-0 top-16 bottom-0";
                    setButtonDisplay("none");
                }}>
                    <IoIosArrowForward size={"25px"} />
                </button>
            </div>
            {/* layer top */}
            <div className="mt-4 mb-4 flex justify-between items-center">
                <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white">{"<<"} Previous</button>

                <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white">Next {">>"}</button>
            </div>
            {/* layer middle */}
            <article className="flex flex-col items-start">
                {/* title */}
                <h2 className="text-3xl font-bold mb-4 selection:text-blue-700">{
                props.title.match("%20") ? props.title.replaceAll("%20", " "): props.title
                }</h2>

                {/* content */}
                <div className="flex flex-col items-start">
                    {
                        _data.map((cont)=>{
                            return cont.content.map((data)=>{ return <>
                                {
                                    data.title ? <h2 className="text-2xl font-semibold mt-4 mb-4">{data.title}</h2>: null
                                }
                                {
                                    data.points ? data.points.map((point)=>{
                                        return point ? <li>{point}</li>: null
                                    }): null
                                }
                                {
                                    data.code ? <CodeHighlighter type="python" array={data.code} />: null
                                }
                                {
                                    data.image ? <Image src={data.image.src} width={data.image.width} height={data.image.height} className={data.image.className ? data.image.className: "w-auto h-auto rounded-md border border-solid border-slate-50 shadow-md shadow-slate-400 cursor-pointer mt-2 mb-2"} alt="image" onClick={()=>{
                                        // console.log(data.image);
                                        setPopUpImage(true);
                                        setImageData({
                                            src: data.image.src,
                                            width: data.image.width+100,
                                            height: data.image.height+100
                                        });
                                    }} />: null
                                }
                                {
                                    data.audio ? <audio src={data.audio} className="w-full sm:w-1/2 border border-solid border-slate-50 rounded-md shadow-md hover:bg-slate-100 shadow-slate-600 bg-slate-100" controls></audio>: null
                                }
                                {
                                    data.video ? <video src={data.video.src} loop={data.video.loop ? data.video.loop: false} className="w-full sm:w-3/4 h-auto mt-4 mb-4 border border-solid border-slate-500 rounded-md shadow-lg shadow-slate-600 cursor-pointer" controls></video>: null
                                }
                            </>
                            });
                        })
                    }
                </div>
                {/* <CodeHighlighter type="python" >
                    <li>print("Hello world!"); # this is print function</li>
                    <li># comment</li>
                    <li>console.log("Hello world!");</li>
                    <li>n = 1; console.log(n);</li>
                </CodeHighlighter> */}
            </article>

            {/* layer bottom */}
            <div className="mt-24 mb-4 flex justify-between items-center">
                <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white">{"<<"} Previous</button>

                <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-3 pt-2 pb-2 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white">Next {">>"}</button>
            </div>
            <TopScrollButton container={RightContRef} />
        </div>
    </>
}

export default TutorialContent;