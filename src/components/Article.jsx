"use client"
import React, {useState} from "react";

// component
import CodeHighlighter from "./CodeHighlighter";

// next
import Link from "next/link";

// icons
import { GoLinkExternal } from "react-icons/go";

// custom
import PopUpImageBox from "./PopUpImageBox";
import TopScrollButton from "./TopScrollButton";
import ImageRender from "./ImageRender";
import VideoRender from "./VideoRender";
import ProductDetailCard from "./Cards/ProductDetailCard";

/**
 * @param props `data=[]` || `layer` -> {title, desc, headers, date, content, images, videos, audio} -> json text values data,
 * `data format` [{layer1...}, {layer2...}, {layer3...}, ...]
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
        <div key={"Article"} className="flex w-full flex-col justify-start items-start">
            {
                _data.content.map((data) => {
                    // console.log(data);
                    return <>
                        {
                            data.title ? <h2 className="text-2xl text-slate-800 font-semibold mt-3 mb-3 selection:text-blue-500">{data.title}</h2> : null
                        }
                        {
                            data.points ? data.points.map((point) => {
                                if(point.match(/.+:.+/)){
                                    let p = point.split(":");
                                    return <li><span className="text-slate-800 font-bold">{p[0]}:</span>{p[1]}</li>
                                }else {
                                    return point ? <li>{point}</li> : null
                                }
                                // return point ? <li>{point}</li> : null
                            }) : null
                        }
                        {
                            data.link ? <a href={data.link} target="_blank" className="cursor-pointer text-center text-blue-600 font-semibold text-sm sm:text-lg">{data.link}</a> : null
                        }
                        {
                            data.code ? <CodeHighlighter type="python" array={data.code} /> : null
                        }
                        {
                            data.image ? <ImageRender image={data.image.image} width={data.image.width} height={data.image.height} onClick={() => {
                                // console.log(data.image);
                                setPopUpImage(true);
                                try{
                                    setImageData({
                                        image: data.image.image,
                                        width: data.image.width,
                                        height: data.image.height
                                    })
                                }catch(err){}
                            }} /> : null
                        }
                        {
                            data.audio ? <audio src={data.audio} className="w-full sm:w-1/2 border border-solid border-slate-50 rounded-md shadow-md hover:bg-slate-100 shadow-slate-600 bg-slate-100" controls></audio> : null
                        }
                        {
                            data.video ? <VideoRender video={data.video.video} loop={data.video.loop} />: null
                        }
                        {
                            data.desc ? <p className="text-lg mt-1 mb-1">{data.desc}</p> : null
                        }
                        {
                            data.para ? <p className="text-lg mt-1 mb-1">{data.para}</p> : null
                        }
                        {
                            data.b ? <p className="text-lg mt-1 mb-1 font-bold text-slate-800">{data.b}</p> : null
                        }
                        {
                            data.redirect ? <Link href={data.redirect.href ? data.redirect.href: null} target={data.redirect.target ? data.redirect.target: null} className="text-purple-600 underline underline-offset-2 flex justify-center items-center hover:text-blue-700">
                                {data.redirect.text}
                                <GoLinkExternal size={"14px"} className="ml-1" />
                            </Link>: null
                        }
                        {
                            data.html ? <iframe srcDoc={data.html} title="Embedded Content" width="100%" height={"300px"} className="border border-solid border-slate-800 rounded-md p-2"></iframe>: null
                        }
                        {
                            data.product ? <ProductDetailCard data={{
                                title: data.product.title,
                                by: data.product.by,
                                score: data.product.score,
                                href: data.product.href,
                                image: data.product.image
                            }} />: null
                        }
                    </>
                })
            }
        </div>
    </>
}

export default Article;