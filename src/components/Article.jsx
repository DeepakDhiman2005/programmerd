"use client"
import React, {useState} from "react";

// component
import CodeHighlighter from "./CodeHighlighter";

// custom
import PopUpImageBox from "./PopUpImageBox";
import TopScrollButton from "./TopScrollButton";
import ImageRender from "./ImageRender";
import VideoRender from "./VideoRender";

/**
 * @param props {title, desc, headers, date, content, images, videos, audio}
 * @returns Component format value
 */
const Article = (props) => {
    let _data = props.data;

    // useState 
    const [PopUpImage, setPopUpImage] = useState(false);
    const [ImageData, setImageData] = useState({
        src: "",
        width: 0,
        height: 0
    });

    return <>
        {/* popup image window */}
        <PopUpImageBox popup={PopUpImage} imageData={ImageData} value={(e)=>{
            setPopUpImage(e);
        }} />

        <TopScrollButton />
        <div className="flex flex-col items-start">
            {
                _data.content.map((data) => {
                    // console.log(data);
                    return <>
                        {
                            data.title ? <h2 className="text-2xl text-slate-800 font-semibold mt-3 mb-3 selection:text-blue-500">{data.title}</h2> : null
                        }
                        {
                            data.points ? data.points.map((point) => {
                                return point ? <li>{point}</li> : null
                            }) : null
                        }
                        {
                            data.code ? <CodeHighlighter type="python" array={data.code} /> : null
                        }
                        {
                            data.image ? <ImageRender file={data.image.file} src={data.image.src ? data.image.src: "/logo.svg"} width={data.image.width} height={data.image.height} onClick={() => {
                                // console.log(data.image);
                                setPopUpImage(true);
                                try{
                                    if(data.image.file){
                                        setImageData({
                                            file: data.image.file,
                                            width: data.image.width,
                                            height: data.image.height
                                        })
                                    }else{
                                        setImageData({
                                            src: data.image.src,
                                            width: data.image.width,
                                            height: data.image.height
                                        });
                                    }
                                }catch(err){}
                            }} /> : null
                        }
                        {
                            data.audio ? <audio src={data.audio} className="w-full sm:w-1/2 border border-solid border-slate-50 rounded-md shadow-md hover:bg-slate-100 shadow-slate-600 bg-slate-100" controls></audio> : null
                        }
                        {
                            // data.video ? <video src={data.video.src} loop={data.video.loop ? data.video.loop : false} className="w-full sm:w-3/4 h-auto mt-4 mb-4 border border-solid border-slate-500 rounded-md shadow-lg shadow-slate-600 cursor-pointer" controls></video> : null
                            data.video ? <VideoRender file={data.video.file} src={data.video.src} loop={data.video.loop} />: null
                        }
                        {
                            data.desc ? <p className="text-lg mt-1 mb-1">{data.desc}</p> : null
                        }
                    </>
                })
            }
        </div>
    </>
}

export default Article;