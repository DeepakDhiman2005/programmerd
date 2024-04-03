"use client"
import React, { useEffect, useState } from "react";

// icons
import { TbDetails } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const PopupDetailsCard = ({ display = false, list = false, CloseDetails=function(){}}) => {
    const [Display, setDisplay] = useState(false);

    const CloseDisplay = () => {
        try{
            if (Display) {
                CloseDetails(false);
            }
        }catch(err){}
    }

    useEffect(()=>{
        setDisplay(display);
    }, [display]);

    return <>
        {
            Display ? <>
                <div className="fixed flex justify-center overflow-hidden transition-all items-center h-full w-full top-0 left-0 z-30">
                    {/* Detail Card */}
                    <div className="w-full h-full flex justify-center items-center backdrop-brightness-75">
                        <div className="bg-white rounded-md w-3/4 h-auto border border-solid border-slate-50 shadow-sm shadow-slate-50">
                            <h2 className="w-full bg-blue-700 text-white p-4 rounded-t-md text-xl font-light flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <span className="text-white selection:text-purple-200">Product Card Details</span>
                                    <TbDetails size={"20px"} className="ml-3 text-yellow-300" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="flex justify-center items-center cursor-pointer" onClick={CloseDisplay}>
                                        <RxCross2 size={"25px"} className="text-slate-200 hover:text-red-500" />
                                    </button>
                                </div>
                            </h2>
                            {/* details */}
                            <div className="flex flex-col justify-center items-start list-none w-full">
                                {
                                    list ? list.map(({ key, value }, i) => {
                                        return <>
                                            <li className="p-4 border-b border-solid w-full" key={"DetailsBox" + i}>
                                                <span className="text-slate-800 font-semibold">{key}:</span>&nbsp;
                                                <span className="text-slate-700">{value}</span>
                                            </li>
                                        </>
                                    }) : <>
                                        <h2 className="m-4 flex justify-center items-center w-full">Loading...</h2>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </> : null
        }
    </>
}

export default PopupDetailsCard;