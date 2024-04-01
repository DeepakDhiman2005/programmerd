"use client"
import React, {useState, useRef} from "react";

// icons
import { MdKeyboardArrowUp } from "react-icons/md"; // up
import { MdKeyboardArrowDown } from "react-icons/md"; // down
import Button from "./Button";

/**
 * 
 * @param {*} children {<li>, <li>, ...} tags <Dropdown> ... </Dropdown>
 * @returns value = value(e){ ... }
 */
const Dropdown = ({children, title="", color="", className="", value=function(){}}) => {
    // useState
    const [ShowArrow, setShowArrow] = useState(false);

    // useRef
    const DropListRef = useRef(null);

    // function
    const onDropDown = () =>{
        if(ShowArrow){
            DropListRef.current.className="flex flex-col justify-center bg-white border border-none border-slate-100 rounded-sm shadow-md shadow-slate-400 items-start list-none w-full mt-1 overflow-hidden h-0 transition-all";
            setShowArrow(false);
        }else{
            DropListRef.current.className="flex flex-col justify-center bg-white border border-solid border-slate-100 rounded-sm shadow-md shadow-slate-400 items-start list-none w-full mt-1 overflow-hidden h-full transition-all";
            setShowArrow(true);
        }
    }

    const onClickDropList = (e) => {
        try{
            value(e.target.innerText);
            DropListRef.current.className="flex flex-col justify-center bg-white border border-none border-slate-100 rounded-sm shadow-md shadow-slate-400 items-start list-none w-full mt-1 overflow-hidden h-0 transition-all";
            setShowArrow(false);
        }catch(err){}
    }

    return <>
        <div className="flex flex-col justify-center items-center">
            <Button color={color} className={className} onClick={onDropDown}>
                <h2>{title !== "" ? title: "Types"}</h2>
                {
                    ShowArrow ? <MdKeyboardArrowUp size={"25px"} className="mt-1 ml-1" />: <MdKeyboardArrowDown size={"25px"} className="mt-1 ml-1" />
                }
            </Button>
            {/* drop list */}
            <ul ref={DropListRef} className="flex flex-col justify-center bg-white border border-none border-slate-100 rounded-sm shadow-md shadow-slate-400 items-start list-none w-full mt-1 overflow-hidden h-0 transition-all">
                {
                    children.length ? <>
                        {
                            children.map((data)=>{
                                return <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-200 active:text-slate-700 active:transition-all hover:bg-slate-100" onClick={onClickDropList}>{data.props.children}</li>
                            })
                        }
                    </>: <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-200 active:text-slate-700 active:transition-all hover:bg-slate-100" onClick={onClickDropList}>{children.props.children}</li>
                }
                {/* <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-200 active:text-slate-700 active:transition-all hover:bg-slate-100">Title</li>

                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Description</li>
                
                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Code</li>

                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Points</li>

                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Image</li>

                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Video</li>

                <li className="p-3 text-lg font-semibold text-slate-800 cursor-pointer border-b border-solid border-slate-100 w-full active:bg-slate-100 active:text-slate-700 active:transition-all">Audio</li> */}
            </ul>
        </div>
    </>
}

export default Dropdown;