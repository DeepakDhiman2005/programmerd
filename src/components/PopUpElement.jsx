"use client"
import React, { useEffect, useRef } from "react";

// component
import Button from "./Button";

const PopUpElement = ({ children, popup = false, value = function () { } }) => {
    // useRef
    const PopupRef = useRef(null);

    useEffect(() => {
        try {
            if (popup) {
                PopupRef.current.className = "w-full z-[200] h-full fixed top-0 transition-all left-0 bg-slate-50 overflow-hidden";
            } else {
                PopupRef.current.className = "w-0 z-[200] h-0 fixed top-0 transition-all left-0 overflow-hidden bg-slate-50";
            }
        } catch (er) { }
    }, [popup]);

    return <>
        <div ref={PopupRef} className="w-0 z-[200] h-0 fixed top-0 transition-all left-0 overflow-hidden bg-slate-50">
            {/* layer 1 */}
            <div className="flex w-full justify-end items-center p-3">
                <Button color="red" onClick={() => {
                    value(false);
                }}>Back</Button>
            </div>
            {/* layer 2 */}
            <div className="flex flex-col justify-center items-center pt-10 pb-10 w-full bg-slate-50">
                {children}
            </div>
        </div>
    </>
}

export default PopUpElement;