"use client"
import React, { useRef, useState } from "react";

// icons
import { RiArrowLeftSLine } from "react-icons/ri"; // left
import { RiArrowRightSLine } from "react-icons/ri"; // right

const DisplayCarousel = ({ children, unique = "" }, key="") => {
    // variables
    const btngray = "bg-slate-600 border-slate-600 border border-solid rounded-full ml-1 mr-1 shadow-sm shadow-slate-600 w-2 h-2 cursor-pointer";
    const btnorg = "bg-white border border-solid rounded-full ml-1 mr-1 shadow-sm shadow-slate-100 w-2 h-2 cursor-pointer";
    const leftgo = "h-full bg-slate-200 absolute flex justify-center items-center left-0 w-full transition-all";
    const rightgo = "h-full bg-slate-200 absolute flex justify-center items-center right-0 w-full transition-all";
    const normalgo = "h-full bg-slate-200 absolute flex justify-center items-center right-0 w-0";

    // useState
    const [CardNum, setCardNum] = useState(0);

    // useRef
    const btnRef = useRef(null);
    const layer = useRef(null);

    // functions
    const onRight = () => {
        // console.log(btnRef.current);
        try {
            if (children.length && children.length > 1) {
                if (CardNum !== children.length - 1) {
                    layer.current.className = leftgo;
                    setCardNum(CardNum + 1);
                    layer.current.className = normalgo;
                    // let onetime = setInterval(() => {
                    //     layer.current.className = normalgo;
                    //     clearInterval(onetime);
                    //     setCardNum(CardNum+1);
                    // }, 600);

                    const btn = btnRef.current;
                    const allbtn = btn.querySelectorAll("button");

                    let onetime2 = false;
                    allbtn.forEach((e, i) => {
                        if (e.className === btngray) {
                            e.className = btnorg;
                            onetime2 = true;
                        } else {
                            if (onetime2) {
                                e.className = btngray;
                                onetime2 = false;
                            }
                        }
                    })
                }
            }
        } catch (err) { }
    }

    const onLeft = () => {
        try {
            if (children.length && children.length > 1) {
                if (CardNum !== 0) {
                    layer.current.className = rightgo;
                    setCardNum(CardNum - 1);
                    layer.current.className = normalgo;
                    // let onetime = setInterval(() => {
                    //     layer.current.className = normalgo;
                    //     clearInterval(onetime);
                    //     setCardNum(CardNum-1);
                    // }, 600);

                    const btn = btnRef.current;
                    const allbtn = btn.querySelectorAll("button");

                    allbtn.forEach((e, i) => {
                        if (allbtn[i + 1].className === btngray) {
                            allbtn[i + 1].className = btnorg;
                            e.className = btngray;
                        } else {
                            e.className = btnorg;
                        }
                    })
                }
            }
        } catch (err) { }
    }

    return <>
        <div key={key} className="w-full flex justify-between items-center mt-4 mb-4 relative">
            {/* left */}
            <div className="bg-white p-2 pt-7 pb-7 cursor-pointer border border-solid border-slate-200 rounded-md shadow-md shadow-slate-200 active:bg-slate-100 ml-3 absolute left-0 z-10" onClick={onLeft}>
                <RiArrowLeftSLine size={"25px"} />
            </div>

            {/* middle */}
            <div className="flex flex-col-reverse justify-between items-center w-full">
                <div className="w-full flex justify-center items-center bg-slate-600 brightness-75 z-0 scroll-0 overflow-x-scroll overflow-y-hidden h-96 relative">
                    {/* layer1 */}
                    <div className="w-full h-full bg-slate-200 flex justify-center items-center absolute right-0">
                        {children[CardNum]}
                    </div>
                    {/* layer2 */}
                    <div ref={layer} className="h-full bg-slate-200 flex justify-center items-center absolute right-0 w-0">
                        {children[CardNum === children.length - 1 ? CardNum - 1 : CardNum + 1]}
                    </div>
                </div>
                {/* total */}
                <div ref={btnRef} className="absolute mb-10 z-10">
                    {
                        children.length ? children.map((data, i) => {
                            return <button key={"DisplayCarouselButtonsKey"+i} className={i === 0 ? btngray : btnorg} id={"carousel-button-" + unique + i}></button>
                        }) : null
                    }
                </div>
            </div>

            {/* right */}
            <div className="bg-white p-2 pt-7 pb-7 cursor-pointer border border-solid border-slate-200 rounded-md shadow-md shadow-slate-200 active:bg-slate-100 mr-3 absolute right-0 z-10" onClick={onRight}>
                <RiArrowRightSLine size={"25px"} />
            </div>
        </div>
    </>
}

export default DisplayCarousel;