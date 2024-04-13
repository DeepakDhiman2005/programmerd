"use client"
import React, { useRef, useState } from "react";

// icons
import { MdDelete } from "react-icons/md"; // delete
import { MdEdit } from "react-icons/md"; // edit
import { MdOutlineDetails } from "react-icons/md"; // details
import { BiSolidHide } from "react-icons/bi"; // hide
import { IoEye } from "react-icons/io5"; // not hide

/**
 * @param redux data store
 */
const RightClickInfoIndex = ({ redux=null, children, className, value = function () { } }) => {
    // variable
    const OpenTime = "bg-white border border-solid border-slate-300 fixed z-30 shadow-md transition-all shadow-slate-300 w-3/12 overflow-hidden";
    const CloseTime = "bg-white fixed z-30 transition-all w-0 overflow-hidden";

    // useRef
    const popup = useRef(null);

    // useState
    const [Obj, setObj] = useState(null);

    // functions
    const ContextMenu = (e) => {
        try {
            let bool = e.target;
            if (bool) {
                let onetime = false;
                let valuetext = "";

                let obj = {
                    title: "",
                    desc: ""
                };

                if (bool.ariaValueText === "rightpopup") { }
                else {
                    for (let i = 0; i < 5; i++) {
                        if (onetime) {
                            if (valuetext.ariaValueText === "rightpopup") {
                                let _title = valuetext.querySelector("h2");
                                let _p = valuetext.querySelector("p");
                                obj.title = _title.innerText;
                                obj.desc = _p.innerText;
                                break;
                            } else {
                                valuetext = valuetext.parentNode;
                            }
                        } else {
                            valuetext = bool.parentNode;
                            onetime = true;
                        }

                    }
                }
                // console.log(obj)
                setObj(obj);
                // console.log(e.clientX, e.clientY)
                popup.current.className = OpenTime;
                popup.current.style.left = e.clientX + "px";
                popup.current.style.top = e.clientY + "px";

                e.target.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                })

                window.addEventListener("scroll", () => {
                    try{
                        popup.current.className = CloseTime;
                    }catch(err){}
                });

                window.addEventListener("click", () => {
                    try{
                        popup.current.className = CloseTime;
                    }catch(err){}
                });
            }
        } catch (err) { }
    }

    const Modes = (e) => {
        let _text = "";
        try {
            let _tag = e.target.tagName.toLowerCase();
            if (_tag === "h2" || _tag === "svg") {
                let after = e.target.parentNode;
                let text = after.querySelector("h2");
                _text = text.innerText;
            } else if (_tag === "div") {
                let text = e.target.querySelector("h2");
                _text = text.innerText;
            } else if (_tag === "path") {
                let after = e.target.parentNode.parentNode;
                let text = after.querySelector("h2");
                _text = text.innerText;
            }
            // console.log(_text)
            value({ type: _text, data: Obj, children: children, redux: redux });
        } catch (err) { }
    }

    return <>
        <div ref={popup} className={CloseTime} style={{ left: 0, top: 0 }} aria-valuetext="productcard">
            <div className="p-3 flex justify-between items-center cursor-pointer active:bg-slate-100 hover:bg-slate-50 border-b border-solid" onClick={Modes}>
                <h2 className="ml-3">Edit</h2>
                <MdEdit size={"18px"} className="mr-3 text-slate-700" />
            </div>

            <div className="p-3 flex justify-between items-center cursor-pointer active:bg-slate-100 hover:bg-slate-50 border-b border-solid" onClick={Modes}>
                <h2 className="ml-3">Delete</h2>
                <MdDelete size={"18px"} className="mr-3 text-slate-700" />
            </div>

            <div className="p-3 flex justify-between items-center cursor-pointer active:bg-slate-100 hover:bg-slate-50 border-b border-solid" onClick={Modes}>
                <h2 className="ml-3">Hide</h2>
                {
                    redux.method === "hide" ? <BiSolidHide size={"18px"} className="mr-3 text-slate-700" />:<IoEye size={"18px"} className="mr-3 text-slate-700" />
                }
            </div>

            <div className="p-3 flex justify-between items-center cursor-pointer active:bg-slate-100 hover:bg-slate-50 border-b border-solid" onClick={Modes}>
                <h2 className="ml-3">Details</h2>
                <MdOutlineDetails size={"18px"} className="mr-3 text-slate-700" />
            </div>
        </div>

        <div onContextMenu={ContextMenu} className={className} aria-valuetext="rightpopup">
            {children}
        </div>
    </>
}

export default RightClickInfoIndex;