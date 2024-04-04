"use client"
import React, { useEffect, useRef, useState } from "react";

// icons
import { RxCross2 } from "react-icons/rx";

// component
import FourCardChildEditor from "./FourCardChildEdit";
import Button from "@/components/Button";

const FourCardEditor = ({ data = null, value = function () { } }) => {
    const [Layer1, setLayer1] = useState({});
    const [Layer2, setLayer2] = useState({});
    const [Layer3, setLayer3] = useState({});
    const [Layer4, setLayer4] = useState({});

    const [Method, setMethod] = useState(false);
    const [UID, setUID] = useState(null);

    // useRef
    const titleRef = useRef(null);

    useEffect(() => {
        // console.log(_array);
        try {
            if (data !== null) {
                let dt = data.data;
                titleRef.current.value = dt.title;
                setLayer1(dt.data[0]);
                setLayer2(dt.data[1]);
                setLayer3(dt.data[2]);
                setLayer4(dt.data[3]);
                setMethod("edit");
                setUID(data._id);
            }
        } catch (err) { }
    }, [data]);

    // function
    const RemoveTextValue = () => {
        titleRef.current.value = "";
    }

    return <>
        <div className="flex flex-col w-full justify-center items-start">
            <div className="m-3 border flex flex-col bg-white justify-center flex-wrap w-full items-center border-solid rounded-md p-4">
                <div className="w-full flex justify-between items-center border border-solid border-slate-100 rounded-md">
                    <label htmlFor={"FourCardTitleabc"} className="h-full p-4 pt-2 pb-2 bg-slate-100 text-lg font-normal text-slate-800 cursor-pointer">Title</label>
                    <input ref={titleRef} type="text" id={"FourCardTitleabc"} name={"FourCardTitleabc"} placeholder="Card Title..." className="bg-transparent transition-all ml-2 w-full h-full outline-none" autoComplete="off" />
                    <button className="h-full p-4 pt-2 pb-2 bg-slate-100 cursor-pointer" onClick={RemoveTextValue}>
                        <RxCross2 size={"25px"} className="hover:text-red-600" />
                    </button>
                </div>
                <h2 className="text-lg text-slate-800 font-semibold mt-2 mb-2">Layer 1</h2>
                <FourCardChildEditor defaultValue={Layer1} UUID="FourCarda1" value={(e) => { setLayer1(e) }} />
                <h2 className="text-lg text-slate-800 font-semibold mt-2 mb-2">Layer 2</h2>
                <FourCardChildEditor defaultValue={Layer2} UUID="FourCardb2" value={(e) => { setLayer2(e) }} />
                <h2 className="text-lg text-slate-800 font-semibold mt-2 mb-2">Layer 3</h2>
                <FourCardChildEditor defaultValue={Layer3} UUID="FourCardc3" value={(e) => { setLayer3(e) }} />
                <h2 className="text-lg text-slate-800 font-semibold mt-2 mb-2">Layer 4</h2>
                <FourCardChildEditor defaultValue={Layer4} UUID="FourCardd4" value={(e) => { setLayer4(e) }} />
            </div>

            <div className="flex justify-start items-center w-full mt-3 mb-3">
                <Button color="purple" className="ml-2" onClick={() => { value({ data: { title: titleRef.current.value, data: [Layer1, Layer2, Layer3, Layer4] }, method: Method ? Method : "add", submit: true, id: UID }) }}>Submit</Button>

                <Button color="blue" className="ml-2" onClick={() => { value({ data: { title: titleRef.current.value, data: [Layer1, Layer2, Layer3, Layer4] }, overview: true }) }}>OverView</Button>
            </div>
        </div>
    </>
}

export default FourCardEditor