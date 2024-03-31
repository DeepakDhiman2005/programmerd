"use client"
import React, {useRef} from "react";

// icons
import { RiArrowLeftSLine } from "react-icons/ri"; // left
import { RiArrowRightSLine } from "react-icons/ri"; // right

const CardCarousel = ({children}) => {
    // useRef
    const SectionRef = useRef(null);

    // functions
    const LeftClick = () => {
        try{
            SectionRef.current.scrollBy(-5, 0);
        }catch(err){}
    }

    const RightClick = () => {
        try{
            SectionRef.current.scrollBy(5, 0);
        }catch(err){}
    }

    return <>
        <div className="flex flex-col justify-center items-between bg-white w-full">
            <div className="flex justify-between items-center ml-4">
                <h2 className="ml-4 font-bold text-slate-900 text-xl">Best Computers</h2>
            </div>
            <div className="flex justify-start items-center p-2">
                {/* left */}
                <div className="bg-white p-2 pt-7 pb-7 cursor-pointer border border-solid border-slate-200 rounded-md shadow-md shadow-slate-200 active:bg-slate-100" onClick={LeftClick}>
                    <RiArrowLeftSLine size={"25px"} />
                </div>

                {/* middle */}
                <div ref={SectionRef} className="scroll-0 overflow-x-scroll flex flex-row justify-start items-center">
                    {children}
                </div>

                {/* right */}
                <div className="bg-white p-2 pt-7 pb-7 cursor-pointer border border-solid border-slate-200 rounded-md shadow-md shadow-slate-200 active:bg-slate-100" onClick={RightClick}>
                    <RiArrowRightSLine size={"25px"} />
                </div>
            </div>
        </div>
    </>
}

export default CardCarousel;