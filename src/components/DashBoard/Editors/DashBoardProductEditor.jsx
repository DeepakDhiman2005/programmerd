"use client"
import React, { useState, useRef, useEffect } from "react";

// component
import ImageSelectBox from "@/components/SelectorBox/ImageSelectBox";
import Button from "@/components/Button";
import PopUpElement from "@/components/PopUpElement";
import Card from "@/components/Card";
import ConfirmCard from "@/components/ConfirmCard";
import Dropdown from "@/components/Dropdown";
import DisplayCarousel from "@/components/Carousels/DisplayCarousel";
import MyInput from "@/components/MyInput";
import ImageRender from "@/components/ImageRender";
import FourCardCollectionEditor from "./productEdit/FourCardCollectionEditor";
import DisplayCarouselEidtor from "./productEdit/DisplayCarouselEditor";
import CardEditor from "./productEdit/CardEditor";
import FourCardCollection from "@/components/Cards/FourCardCollection";

const DashBoardProductEditor = ({ data, value=function(){} }) => {
    // useState
    const [OverView, setOverView] = useState(false);
    const [Img, setImg] = useState(false);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [ImageInputType, setImageInputeType] = useState("");
    const [EditorType, setEditorType] = useState(false);
    const [DisplayCarouselArray, setDisplayCarsouelArray] = useState([]);
    const [CardData, setCardData] = useState({title: "", desc: "", href: "", image: {src: ""}});
    const [FourCard, setFourCard] = useState(false);

    // useRef
    const titleRef = useRef({value: ""});
    const linkRef = useRef({value: ""});
    const descRef = useRef({value: ""});

    // function
    const CreateCard = async () => {
        let obj = {
            title: titleRef.current.value,
            desc: descRef.current.value,
            href: linkRef.current.value,
            image: Img
        }
        // console.log(obj);
        // value(obj);
        if(obj.title !== "" && obj.desc !== "" && obj.href !== "" && obj.image){
            let formData = new FormData();
            formData.append("title", obj.title);
            formData.append("desc", obj.desc);
            formData.append("href", obj.href);
            formData.append("image", obj.image);

            const response = await fetch("http://localhost:3000/api/products/", {
                method: "POST",
                body: formData
            });
            const messg = await response.json();
            // console.log(messg);
        }
    }

    const CreateDisplayCarousel = () => {
    }

    useEffect(()=>{
        console.log(data)
        // if(data.type){
        //     // console.log(true)
        //     setEditorType(data.type);
        // }
    }, [data]);

    return <>
        <PopUpElement popup={OverView} value={e => {setOverView(e)}}>
            {
                EditorType === "Card" ? <>
                    <Card title={CardData.title} desc={CardData.desc} href={CardData.href} file={CardData.image} button={"View"} />
                </>:
                EditorType === "DisplayCarousel" ? <>
                    <DisplayCarousel>
                        {
                            DisplayCarouselArray.map((e)=>{
                                return <ImageRender file={e.image} width={1000} height={1000} className="cursor-pointer w-full h-full" />
                            })
                        }
                    </DisplayCarousel>
                </>: 
                EditorType === "FourCardCollection" ? <>
                    <FourCardCollection title={FourCard.title} data={FourCard.data} />
                </>:null
            }
        </PopUpElement>

        <ConfirmCard display={ConfirmDisplay} message="Product Card Add in Server:" value={(e)=>{
            if(e){ CreateCard(); }
            setConfirmDisplay(false);
        }} />

        <div className="flex justify-between items-center w-full">
            <h2 className="text-lg text-slate-800 font-semibold">Affilate Editor</h2>
            <Dropdown color="green" className="flex justify-center items-center" value={(e)=>{
                setEditorType(e);
            }}>
                <li>Card</li>
                <li>FourCardCollection</li>
                <li>DisplayCarousel</li>
            </Dropdown>
        </div>

        {
            EditorType === "Card" ? <>
                <CardEditor value={(e)=>{
                    setCardData(e.data);
                    setOverView(e.overview);
                }} />
            </>: 
            EditorType === "FourCardCollection" ?<>
                <div className="flex justify-center items-center">
                    <FourCardCollectionEditor value={(e)=>{
                        setFourCard({data: e.data, title: e.title})
                        setOverView(e.overview);
                    }} />
                </div>
            </>: 
            EditorType === "DisplayCarousel" ? <>
                <DisplayCarouselEidtor value={(e)=>{
                    setDisplayCarsouelArray(e.data);
                    setOverView(e.overview);
                }} />
            </>: null
        }
    </>
}

export default DashBoardProductEditor;