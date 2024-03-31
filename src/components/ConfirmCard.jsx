"use client"
import React from "react";

// component
import Button from "./Button";

/**
 * @param data = display={boolean}, message="", value=(){ return ... }
 * @returns boolean value true or false -> Yes or No
 */
const ConfirmCard = ({ display = false, message = "", value = function () { } }) => {
    return <>
        {
            display ? <>
                <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-30 transition-all overflow-hidden">
                    <div className="w-full flex justify-center items-center h-full backdrop-brightness-75 bottom-0 overflow-hidden">
                        <div className="w-3/4 md:w-1/2 bg-white border border-solid border-slate-500 rounded-md shadow-md shadow-slate-500 p-3">
                            <h2 className="mt-1 mb-1 font-bold text-2xl text-slate-800">Confirm:</h2>
                            <p className="mt-1 mb-1 font-semibold text-lg text-slate-700">{message}</p>

                            <div className="w-full flex justify-end items-center mt-3">
                                <Button color="green" className="mr-2" onClick={() => { value(true) }}><span className="ml-2 mr-2">Yes</span></Button>
                                <Button color="red" className="mr-2" onClick={() => { value(false) }}><span className="ml-2 mr-2">No</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>: null
        }
    </>
}

export default ConfirmCard;