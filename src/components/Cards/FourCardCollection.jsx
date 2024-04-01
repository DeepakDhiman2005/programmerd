"use client"
import React, { useEffect, useState } from "react";

// next
import ImageRender from "../ImageRender";

/**
 * @param data data = [{ title: "", desc: "", image:src|file }, ...], or title = ""
 */
const FourCardCollection = ({ title = "", data = false }) => {
    // useState
    const [Data, setData] = useState([{}, {}, {}, {}]);

    useEffect(() => {
        if(data){
            setData(data);
        }
    }, [data]);

    return <>
        <div className="flex flex-col justify-center items-start p-3 bg-white border border-solid rounded-md m-3">
            <h2 className="font-bold text-xl mb-8 mt-4">{title}</h2>

            {
                Data ? <>
                    <div className="flex justify-center items-center mb-3 mt-3">
                        <a href={Data[0].href ? Data[0].href: null} target="_blank">
                            <div className="bg-white border border-solid border-gray-300 flex flex-col justify-center items-center w-auto h-auto cursor-pointer rounded-sm p-2 m-2">
                                <div className="flex justify-center items-center w-full">
                                    <ImageRender image={Data[0].image} width={180} height={180} alt="image" className="hover:scale-90" />
                                </div>
                                <div className="flex flex-col justify-start items-start mt-3 w-full ml-3">
                                    <h2 className="text-slate-700 text-xl">{Data[0].title}</h2>
                                    <h2 className="font-bold text-lg text-green-700">{Data[0].desc}</h2>
                                </div>
                            </div>
                        </a>

                        <a href={Data[1].href ? Data[1].href: null} target="_blank">
                            <div className="bg-white border border-solid border-gray-300 flex flex-col justify-center items-center w-auto h-auto cursor-pointer rounded-sm p-2 m-2">
                                <div className="flex justify-center items-center w-full">
                                    <ImageRender image={Data[1].image} width={180} height={180} alt="image" className="hover:scale-90" />
                                </div>
                                <div className="flex flex-col justify-start items-start mt-3 w-full ml-3">
                                    <h2 className="text-slate-700 text-xl">{Data[1].title}</h2>
                                    <h2 className="font-bold text-lg text-green-700">{Data[1].desc}</h2>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center items-center mb-3 mt-3">
                        <a href={Data[2].href ? Data[2].href: null} target="_blank">
                            <div className="bg-white border border-solid border-gray-300 flex flex-col justify-center items-center w-auto h-auto cursor-pointer rounded-sm p-2 m-2">
                                <div className="flex justify-center items-center w-full">
                                    <ImageRender image={Data[2].image} width={180} height={180} alt="image" className="hover:scale-90" />
                                </div>
                                <div className="flex flex-col justify-start items-start mt-3 w-full ml-3">
                                    <h2 className="text-slate-700 text-xl">{Data[2].title}</h2>
                                    <h2 className="font-bold text-lg text-green-700">{Data[2].desc}</h2>
                                </div>
                            </div>
                        </a>

                        <a href={Data[3].href ? Data[3].href: null} target="_blank">
                            <div className="bg-white border border-solid border-gray-300 flex flex-col justify-center items-center w-auto h-auto cursor-pointer rounded-sm p-2 m-2">
                                <div className="flex justify-center items-center w-full">
                                    <ImageRender image={Data[3].image} width={180} height={180} alt="image" className="hover:scale-90" />
                                </div>
                                <div className="flex flex-col justify-start items-start mt-3 w-full ml-3">
                                    <h2 className="text-slate-700 text-xl">{Data[3].title}</h2>
                                    <h2 className="font-bold text-lg text-green-700">{Data[3].desc}</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </>: <>
                    <h2 className="w-full h-full flex justify-center items-center mt-10 mb-10 text-xl">Not Found <span className="text-blue-600">&nbsp;Cards</span></h2>
                </>
            }
        </div>
    </>
}

export default FourCardCollection;