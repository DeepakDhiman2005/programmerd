"use client"
import React, { useRef, useState } from "react";

// component
import Button from "@/components/Button";
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";
import Dropdown from "@/components/Dropdown";

const FourCardCollectionEditor = ({ uniqueID = "", value=function(){} }) => {
    // uuID
    const UUID1 = `FourCardCollectionEdit1${uniqueID}`;
    const UUID2 = `FourCardCollectionEdit2${uniqueID}`;
    const UUID3 = `FourCardCollectionEdit3${uniqueID}`;
    const UUID4 = `FourCardCollectionEdit4${uniqueID}`;

    // useState
    const [ImageInputType1, setImageInputType1] = useState("");
    const [ImageInputType2, setImageInputType2] = useState("");
    const [ImageInputType3, setImageInputType3] = useState("");
    const [ImageInputType4, setImageInputType4] = useState("");

    // useRef
    const Layer1 = useRef({title: "", href: "", desc: "", image: null});
    const Layer2 = useRef({title: "", href: "", desc: "", image: null});
    const Layer3 = useRef({title: "", href: "", desc: "", image: null});
    const Layer4 = useRef({title: "", href: "", desc: "", image: null});
    const cardtitle = useRef(null);

    const onCreate = ({overview, submit}) => {
        let fourcard = [Layer1.current, Layer2.current, Layer3.current, Layer4.current];
        let onetime = false;
        for(let i=0; i<fourcard.length; i++){
            if(fourcard[i].title !== ""){ } else { onetime = true; break; }
            if(fourcard[i].desc !== ""){ } else { onetime = true; break; }
            if(fourcard[i].href !== ""){ } else { onetime = true; break; }
            if(fourcard[i].image !== null || fourcard[i].image !== ""){ } else { onetime = true; break; }
        }
        if(onetime){
            alert("data not fillup!")
        }else{
            if(overview){
                value({data: fourcard, title: cardtitle.current.value, overview: true});
            } else if(submit){
                value({data: fourcard, title: cardtitle.current.value, submit: true});
            }
        }
    }

    return <>
        <div className="w-[90%] flex flex-col bg-white p-3 border border-solid border-slate-100 shadow-md shadow-slate-200 justify-center items-center mt-3 mb-3">
            <div className="flex justify-start items-center w-full mb-4">
                <input ref={cardtitle} type="text" placeholder="Title..." className="outline-none pb-1 border-b border-solid border-b-purple-700 w-1/2" />
            </div>

            <div className="flex justify-between items-center w-full">
                {/* layer 1 */}
                <div className="flex flex-col justify-start items-start w-1/2 bg-slate-50 p-2 border border-solid rounded-md">
                    <div className="flex justify-center mb-2 items-center">
                        <label className="text-red-700 cursor-pointer" htmlFor={UUID1}>Title:</label>
                        <input placeholder="Title..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID1} id={UUID1} onChange={(e)=>{Layer1.current.title = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID1}>Href:</label>
                        <input placeholder="Write Affilate Link..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID1} id={UUID1} onChange={(e)=>{Layer1.current.href = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-blue-700 cursor-pointer" htmlFor={UUID1}>Desc:</label>
                        <input placeholder="Desc..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID1} id={UUID1} onChange={(e)=>{Layer1.current.desc = e.target.value; }}  />
                    </div>

                    <div className="flex flex-col w-full justify-center items-start">
                        <Dropdown color={"blue"} className="flex justify-start ml-0 items-center" value={(e) => { setImageInputType1(e) }}>
                            <li>Image Link</li>
                            <li>Select Image</li>
                        </Dropdown>
                        {
                            ImageInputType1 === "Image Link" ? <input type="text" placeholder="Image Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" onChange={(e) => { Layer1.current.image = e.target.value; }} /> :
                                ImageInputType1 === "Select Image" ? <ImageSelectBox uniqueID={UUID1} value={(e)=>{Layer1.current.image = e.image}} /> : null
                        }
                    </div>
                    {/* <ImageSelectBox uniqueID={UUID1} value={(e)=>{Layer1.current.image = e.image}} /> */}
                </div>

                {/* layer 2 */}
                <div className="flex flex-col justify-start items-start ml-3 w-1/2 bg-slate-50 p-2 border border-solid rounded-md">
                    <div className="flex justify-center mb-2 items-center">
                        <label className="text-red-700 cursor-pointer" htmlFor={UUID2}>Title:</label>
                        <input placeholder="Title..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID2} id={UUID2} onChange={(e)=>{Layer2.current.title = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID2}>Href:</label>
                        <input placeholder="Write Affilate Link..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID2} id={UUID2} onChange={(e)=>{Layer2.current.href = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-blue-700 cursor-pointer" htmlFor={UUID2}>Desc:</label>
                        <input placeholder="Desc..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID2} id={UUID2} onChange={(e)=>{Layer2.current.desc = e.target.value; }}  />
                    </div>

                    <div className="flex flex-col w-full justify-center items-start">
                        <Dropdown color={"blue"} className="flex justify-start ml-0 items-center" value={(e) => { setImageInputType2(e) }}>
                            <li>Image Link</li>
                            <li>Select Image</li>
                        </Dropdown>
                        {
                            ImageInputType2 === "Image Link" ? <input type="text" placeholder="Image Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" onChange={(e) => { Layer2.current.image = e.target.value; }} /> :
                                ImageInputType2 === "Select Image" ? <ImageSelectBox uniqueID={UUID2} value={(e)=>{Layer2.current.image = e.image}} /> : null
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center w-full mt-4">
                {/* layer 3 */}
                <div className="flex flex-col justify-start items-start w-1/2 bg-slate-50 p-2 border border-solid rounded-md">
                    <div className="flex justify-center mb-2 items-center">
                        <label className="text-red-700 cursor-pointer" htmlFor={UUID3}>Title:</label>
                        <input placeholder="Title..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID3} id={UUID3} onChange={(e)=>{Layer3.current.title = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID3}>Href:</label>
                        <input placeholder="Write Affilate Link..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID3} id={UUID3} onChange={(e)=>{Layer3.current.href = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID3}>Desc:</label>
                        <input placeholder="Desc..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID3} id={UUID3} onChange={(e)=>{Layer3.current.desc = e.target.value; }}  />
                    </div>

                    <div className="flex flex-col w-full justify-center items-start">
                        <Dropdown color={"blue"} className="flex justify-start ml-0 items-center" value={(e) => { setImageInputType3(e) }}>
                            <li>Image Link</li>
                            <li>Select Image</li>
                        </Dropdown>
                        {
                            ImageInputType3 === "Image Link" ? <input type="text" placeholder="Image Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" onChange={(e) => { Layer3.current.image = e.target.value; }} /> :
                                ImageInputType3 === "Select Image" ? <ImageSelectBox uniqueID={UUID3} value={(e)=>{Layer3.current.image = e.image}} /> : null
                        }
                    </div>
                </div>

                {/* layer 4 */}
                <div className="flex flex-col justify-start items-start ml-3 w-1/2 bg-slate-50 p-2 border border-solid rounded-md">
                    <div className="flex justify-center mb-2 items-center">
                        <label className="text-red-700 cursor-pointer" htmlFor={UUID4}>Title:</label>
                        <input placeholder="Title..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID4} id={UUID4} onChange={(e)=>{Layer4.current.title = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID4}>Href:</label>
                        <input placeholder="Write Affilate Link..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID4} id={UUID4} onChange={(e)=>{Layer4.current.href = e.target.value; }}  />
                    </div>

                    <div className="flex justify-center items-center">
                        <label className="text-purple-700 cursor-pointer" htmlFor={UUID4}>Desc:</label>
                        <input placeholder="Desc..." className="outline-none selection:text-blue-700 ml-2" autoComplete="off" name={UUID4} id={UUID4} onChange={(e)=>{Layer4.current.desc = e.target.value; }}  />
                    </div>

                    <div className="flex flex-col w-full justify-center items-start">
                        <Dropdown color={"blue"} className="flex justify-start ml-0 items-center" value={(e) => { setImageInputType4(e) }}>
                            <li>Image Link</li>
                            <li>Select Image</li>
                        </Dropdown>
                        {
                            ImageInputType4 === "Image Link" ? <input type="text" placeholder="Image Link..." className="outline-none cursor-pointer mt-5 mb-5 border-b border-solid border-slate-600 active:border-b-purple-600 w-3/4" onChange={(e) => { Layer4.current.image = e.target.value; }} /> :
                                ImageInputType4 === "Select Image" ? <ImageSelectBox uniqueID={UUID4} value={(e)=>{Layer4.current.image = e.image}} /> : null
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-start w-full mb-3 mt-3 items-center">
                <Button color="purple" className="ml-2" onClick={()=> {onCreate({submit: true})} }>Submit</Button>
                <Button color="blue" className="ml-2" onClick={() => {onCreate({overview: true})}}>OverView</Button>
            </div>
        </div>
    </>
}

export default FourCardCollectionEditor;