"use client"
import React, { useState, useEffect } from "react";
// import axios from "axios";

// next
import Image from "next/image";

// component
import Card from "../Card";
import RightClickInfoIndex from "./Editors/RightClickInfoIndex";
import ConfirmCard from "../ConfirmCard";
import Loader from "../Loader";
import DisplayCarousel from "../Carousels/DisplayCarousel";
import PopupDetailsCard from "../PopUpElements/PopupDetailsCard";
import FourCard from "../Cards/FourCardCollection/FourCard";

import TopLoader from "../TopLoader";

const DashBoardProducts = ({ getData, value = function () { } }) => {
    // useState
    const [Data, setData] = useState(false);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [ConfirmMessage, setConfirmMessage] = useState("");
    const [LineHighLight, setHighLight] = useState("card");

    const [CardCount, setCardCount] = useState(0);
    const [FourCardCount, setFourCardCount] = useState(0);
    const [DisplayCarouselCount, setDisplayCarouselCount] = useState(0);

    const [PopUpDetailsDisplay, setPopUpDetailsDisplay] = useState(false);
    const [DetailsMenu, setDetailsMenu] = useState([]);
    const [ReduxValue, setReduxValue] = useState(null);

    const [IsLoading, setIsLoading] = useState(0);

    // function
    const func = async () => {
        // console.log(LineHighLight);
        setIsLoading(45);
        const response = await fetch("/api/products");
        setIsLoading(65);
        const data = await response.json();
        setIsLoading(85);
        // console.log(data);
        setData(data);
        setIsLoading(100);
        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 500);
    }

    const HideEvent = async (e) => {
        let data = e;
        if(data.method === "hide"){
            data.method = "edit";
        }else {
            data.method = "hide";
        }
        // const resp = await axios.post("/api/producthideordel/", data);
        // console.log(resp.data);
        const resp = await fetch("/api/producthideordel/", {
            method: "POST",
            body: JSON.stringify(data)
        });
        const resv = await resp.json();
        // console.log(resv);
    }

    const DeleteEvent = async (e)  => {
        let data = e;
        data.method = "delete";
        // const resp = await axios.post("/api/producthideordel/", data);
        // console.log(resp.data);
        const resp = await fetch("/api/producthideordel/", {
            method: "POST",
            body: JSON.stringify(data)
        });
        const resv = await resp.json();
        // console.log(resv);
    }

    const RightClick = (e) => {
        let type = e.type.toLowerCase();
        if (type === "edit") {
            value({ editor: true, data: e.redux, type: e.children.type.name });
        } else if (type === "delete") {
            // console.log("delete");
            setConfirmMessage("Are You Sure? - Delete");
            setConfirmDisplay(true);
        } else if (type === "hide") {
            if (e.redux.method === "hide") {
                setConfirmMessage("Are You Sure? - Not Hide");
            } else {
                setConfirmMessage("Are You Sure? - Hide");
            }
            setConfirmDisplay(true);
        } else if (type === "details") {
            setPopUpDetailsDisplay(true);
            setDetailsMenu([
                { key: "Date", value: e.redux.date },
                { key: "Type", value: e.redux.type },
                { key: "Method", value: e.redux.method },
                { key: "ID", value: e.redux._id }
            ])
            // console.log({ data: e.children, type: e.children.type.name });
        }
        setReduxValue(e.redux);
    }

    const onClickButton = (e) => {
        try {
            let key = e.target.tagName.toLowerCase();
            let text = "";
            if (key === "h2") {
                text = e.target.innerText;
            } else if (key === "span") {
                let _text = e.target.parentNode;
                text = _text.querySelector("h2").innerText;
            } else if (key === "li") {
                text = e.target.querySelector("h2").innerText;
            }
            text = text.split(" ")[0].toLowerCase();
            setHighLight(text);
        } catch (err) { }
    }

    useEffect(() => {
        if (Data) {
            let data = Data;
            let card = 0;
            let four = 0;
            let carousel = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === "Card") {
                    card += 1;
                } else if (data[i].type === "DisplayCarousel") {
                    carousel += 1;
                } else if (data[i].type === "FourCard") {
                    four += 1;
                }
            }
            setCardCount(card);
            setFourCardCount(four);
            setDisplayCarouselCount(carousel);
        } else {
            func();
        }
    }, [Data]);

    return <>
        <TopLoader progress={IsLoading} />
        <ConfirmCard display={ConfirmDisplay} message={ConfirmMessage} value={(e) => {
            // console.log(e);
            setConfirmDisplay(false);
            if(e){
                if (ConfirmMessage.match(/Hide/)) {
                    HideEvent(ReduxValue);
                }
                else if(ConfirmMessage.match(/Delete/)){
                    DeleteEvent(ReduxValue);
                }
            }
        }} />

        <PopupDetailsCard display={PopUpDetailsDisplay} list={DetailsMenu} CloseDetails={(e) => {
            setPopUpDetailsDisplay(false);
        }} />

        <div className="flex flex-col justify-center items-center">
            <section className="flex justify-between w-full items-center mb-10">
                <div className="text-lg cursor-pointer hover:text-purple-700">
                    <h2>Products ({Data ? Data.length : "0"})</h2>
                </div>
                <div className="flex justify-start items-start ml-2">
                    <button className="flex items-center justify-between text-white bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white mr-3" onClick={() => {
                        value({ editor: true });
                    }}>Add Product</button>
                </div>
            </section>

            <div className="flex flex-wrap justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center w-full">
                    <ul className="list-none flex justify-start w-[90%] items-center">
                        <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                            <h2 className="mb-2 hover:text-purple-800">Card ({CardCount})</h2>
                            {LineHighLight === "card" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                        </li>

                        <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                            <h2 className="mb-2 hover:text-purple-800">DisplayCarousel ({DisplayCarouselCount})</h2>
                            {LineHighLight === "displaycarousel" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                        </li>

                        <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                            <h2 className="mb-2 hover:text-purple-800">FourCard ({FourCardCount})</h2>
                            {LineHighLight === "fourcard" ? <span className="bg-purple-700 w-full h-[2px]"></span> : null}
                        </li>
                    </ul>

                    {/* results */}
                    <div className="flex flex-col justify-start items-start w-[95%] mt-4 shadow-md shadow-slate-300 rounded-md">
                        <h2 className="w-full bg-blue-600 text-white p-4 rounded-t-md selection:text-slate-300">In {LineHighLight.replace(LineHighLight[0], LineHighLight[0].toUpperCase())} Total Product (0)</h2>

                        {
                            Data ? <>
                                <div className="flex flex-col justify-start items-center w-full bg-white list-none rounded-b-md flex-wrap mt-20 mb-20">
                                    {
                                        LineHighLight === "card" ? <>
                                            {
                                                Data.map((_data) => {
                                                    // console.log(CardData)
                                                    let data = _data.data;
                                                    return _data.type === "Card" ? <>
                                                        <RightClickInfoIndex redux={_data} value={(e) => { RightClick(e) }}>
                                                            <Card key={data.id} title={data.title} desc={data.desc} button={"View"} image={data.image.match(new RegExp("http://")) || data.image.match(new RegExp("https://")) ? data.image : `/uploads/products/${data.image}`} href={data.href} />
                                                        </RightClickInfoIndex>
                                                    </> : null
                                                })
                                            }
                                        </> :
                                            LineHighLight === "displaycarousel" ? <>
                                                {
                                                    Data.map((_data, i) => {
                                                        let data = _data.data;
                                                        return _data.type === "DisplayCarousel" ? <RightClickInfoIndex className={"w-full"} redux={_data} value={(e) => { RightClick(e) }}>
                                                            <DisplayCarousel unique={`displaycarouselfetch${i + 1}`}>
                                                                {
                                                                    data.map(({ href, id, image }) => {
                                                                        return <a href={href} target="_blank" className="w-full h-full">
                                                                            <Image src={image ? image.replace("./public", "") : "/logo.svg"} alt="image" width={1000} height={1000} className="cursor-pointer w-full h-full" />
                                                                        </a>
                                                                    })
                                                                }
                                                            </DisplayCarousel>
                                                        </RightClickInfoIndex> : null
                                                    })
                                                }
                                            </> :
                                                LineHighLight === "fourcard" ? <>
                                                    {
                                                        Data.map((_data, i) => {
                                                            let data = _data.data;
                                                            return _data.type === "FourCard" ? <>
                                                                <RightClickInfoIndex redux={_data} value={(e) => { RightClick(e) }}>
                                                                    <FourCard key={"ProductFourCard" + i} title={data.title} data={data.data} />
                                                                </RightClickInfoIndex>
                                                            </> : null
                                                        })
                                                    }
                                                </> : <div className="flex justify-center items-center w-full mt-10 mb-10">
                                                    <h2 className="text-xl font-bold">No Data</h2>
                                                </div>
                                    }
                                </div>
                            </> : <>
                                <div className="flex justify-center items-center w-full mt-10 mb-10">
                                    <Loader />
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {/* <RightClickInfoIndex value={(e) => { RightClick(e) }}>
                <Card title={"Basic Info Index"} desc={"Product card in dashboard!"} button={"View"} src={"/logo.svg"} />
            </RightClickInfoIndex> */}
        </div>
    </>
}

export default DashBoardProducts;