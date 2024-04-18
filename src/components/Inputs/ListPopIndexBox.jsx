"use client"
import React, { useState } from "react";

// icons
import { CiCirclePlus } from "react-icons/ci";

const ListPopIndexBox = ({ text = "", children, value = function () { } }) => {
    // useState
    const [Display, setDisplay] = useState(false);

    // function
    const onSelect = (e) => {
        try {
            let text = e.target.innerText;
            value(text.toLowerCase());
            setDisplay(false);
        } catch (err) { }
    }

    const WrongSelector = (e) => {
        let _id = e.target.id;
        if(_id === "listpopindexbox"){
            setDisplay(false);
        }
    }

    return <>
        {
            Display ? <>
                <div className="fixed z-50 top-0 left-0 w-full h-screen">
                    <div className="w-full h-full flex justify-center items-center backdrop-brightness-50 backdrop-opacity-35" id="listpopindexbox" onClick={WrongSelector}>
                        <div className="bg-white rounded-md border border-solid list-none flex flex-col justify-start overflow-x-hidden overflow-y-scroll items-center w-3/4 h-1/2">
                            {
                                children.map((lists) => {
                                    return <li className="w-full p-3 text-lg text-slate-800 cursor-pointer hover:bg-slate-50 active:bg-slate-100" onClick={onSelect}>{lists}</li>
                                })
                            }
                        </div>
                    </div>
                </div>
            </>: null
        }

        <button className="bg-slate-50 border border-solid flex w-full mt-2 mb-2 justify-center items-center border-slate-500 rounded-md" onClick={()=> {
            setDisplay(true);
        }}>
            <CiCirclePlus size={"45px"} className="mt-6 mb-6 text-slate-700" />
            <span className="ml-2 text-slate-800">{text}</span>
        </button>
    </>
}

export default ListPopIndexBox;