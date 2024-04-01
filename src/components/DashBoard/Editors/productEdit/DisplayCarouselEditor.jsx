"use client"
import React, {useState} from "react";

// component
import Button from "@/components/Button";
import MyInput from "@/components/MyInput";

// icons
import { CiCirclePlus } from "react-icons/ci";
import PathSelectorBox from "./PathSelectorBox";

const DisplayCarouselEidtor = ({ data, value=function(){} }) => {
    // useState
    const [DisplayCarouselArray, setDisplayCarsouelArray] = useState([]);

    // onAdd
    const onDisplayCarouselArray = () => {
        // console.log(true)
        setDisplayCarsouelArray([...DisplayCarouselArray, {image: "", href: "", id: DisplayCarouselArray.length+1}]);
    }

    // onchange
    const ChangeDisplayCarouselArray = ({value, ariaValueText, type}) => {
        let valuetext = parseInt(ariaValueText);

        // console.log(value, valuetext)
        let _array = [];
        DisplayCarouselArray.map((data)=>{
            if(data.id === valuetext){
                if(type === "href"){
                    _array.push({image: data.image, href: value, id: data.id});
                }else {
                    _array.push({image: value, href: data.href, id: data.id});
                }
            }else {
                _array.push(data);
            }
        })
        // console.log(_array);
        setDisplayCarsouelArray([..._array]);
    }

    // onDelete
    const onDeleteDisplayCarouselArray = (e) => {
        let id = parseInt(e.target.ariaValueText);
        let _array = [];
        let onetime = false;
        DisplayCarouselArray.map((data)=>{
            if(data.id === id){ onetime=true; }
            else {
                if(onetime){
                    _array.push({image: data.image, href: data.href, id: data.id-1});
                }else{
                    _array.push(data);
                }
            }
        })
        // console.log(_array)
        setDisplayCarsouelArray([..._array]);
    }

    return <>
        <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl text-slate-800 font-semibold mt-3 mb-3">Display Carousel</h2>

            <div className="border flex flex-col justify-center items-center border-solid border-slate-100 rounded-md shadow-md shadow-slate-200 w-full">
                <div className="w-[90%]">
                    {
                        DisplayCarouselArray.map(({ image, href }, i) => {
                            return <div className="flex flex-col justify-center items-center w-full mb-2 mt-2">
                                <div className="flex justify-center items-center w-full">
                                    <MyInput type="text" placeholder="Write Affilate Link..." className="outline-none border-b border-solid w-full border-slate-800 mb-2 mt-2" defaultValue={href} onChange={(e) => {
                                        ChangeDisplayCarouselArray({ value: e.target.value, ariaValueText: e.target.ariaValueText, type: "href" });
                                    }} ariaValueText={i + 1} />
                                    <Button color="red" className="ml-2" ariaValueText={i + 1} onClick={onDeleteDisplayCarouselArray}>Delete</Button>
                                </div>

                                <div className="w-full">
                                    <PathSelectorBox uniqueID={i+1} defaultValue={image} ariaValueText={i + 1} value={(e)=>{
                                        ChangeDisplayCarouselArray(e);
                                    }} />
                                </div>
                            </div>
                        })
                    }
                </div>

                <button className="bg-slate-50 border border-solid flex w-[96%] mt-2 mb-2 justify-center items-center border-slate-500 rounded-md" onClick={onDisplayCarouselArray}>
                    <CiCirclePlus size={"45px"} className="mt-10 mb-10 text-slate-700" />
                </button>

                <div className="flex justify-start items-center w-full mt-3 mb-3">
                    <Button color="purple" className="ml-2" onClick={() => { value({data: DisplayCarouselArray, submit: true}) }}>Submit</Button>
                    <Button color="blue" className="ml-2" onClick={() => { value({data: DisplayCarouselArray, overview: true}) }}>OverView</Button>
                </div>
            </div>
        </div>
    </>
}

export default DisplayCarouselEidtor;