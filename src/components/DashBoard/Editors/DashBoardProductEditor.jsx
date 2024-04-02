"use client"
import React, { useState, useEffect } from "react";

// function
import getCurrentDate from "@/components/Functions/getCurrentDate";

// component
import PopUpElement from "@/components/PopUpElement";
import Card from "@/components/Card";
import ConfirmCard from "@/components/ConfirmCard";
import Dropdown from "@/components/Dropdown";
import DisplayCarousel from "@/components/Carousels/DisplayCarousel";
import ImageRender from "@/components/ImageRender";
import FourCardCollectionEditor from "./productEdit/FourCardCollectionEditor";
import DisplayCarouselEidtor from "./productEdit/DisplayCarouselEditor";
import CardEditor from "./productEdit/CardEditor";
import FourCardCollection from "@/components/Cards/FourCardCollection";
import MessageEmit from "@/components/MessageEmit";


const DashBoardProductEditor = ({ data, value=function(){} }) => {
    // useState
    const [OverView, setOverView] = useState(false);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [EditorType, setEditorType] = useState(false);
    const [DisplayCarouselArray, setDisplayCarsouelArray] = useState([]);
    const [CardData, setCardData] = useState({title: "", desc: "", href: "", image: {src: ""}});
    const [FourCard, setFourCard] = useState(false);
    const [MessageDisplay, setMessageDisplay] = useState(false);

    const [Uploads, setUploads] = useState(false);

    const CreateCard = async () => {
        const {method, data, date, type} = Uploads;

        const formData = new FormData();
        formData.append("method", method);
        formData.append("date", date);
        formData.append("type", type);

        if(Uploads.type === "Card"){
            for(let x in data){
                formData.append(x, data[x]);
            }
        }
        else if(Uploads.type === "FourCardCollection"){
            // console.log(Uploads.data);
            let _data = Uploads.data;
            formData.append("title", _data.title);
            let data = _data.data;
            // console.log(data);
            for(let i=0; i < data.length; i++){
                formData.append(`title${i+1}`, data[i].title);
                formData.append(`desc${i+1}`, data[i].desc);
                formData.append(`href${i+1}`, data[i].href);
                formData.append(`image${i+1}`, data[i].image);
            }
        }
        else if(Uploads.type === "DisplayCarousel"){
            // console.log(data)
            for(let i=0; i < data.length; i++){
                formData.append(`href${i+1}`, data[i].href);
                formData.append(`id${i+1}`, data[i].id);
                formData.append(`image${i+1}`, data[i].image);
            }
        }

        // console.log(Uploads);
        const response = await fetch("/api/products/", {
            method: "POST",
            body: formData
        });
        const resp = await response.json();
        // console.log(resp);
        if(resp){
            const audio = new Audio("/sound/send.mp3");
            window.scrollTo(0, 0);
            audio.play();
            setMessageDisplay(true);
    
            let onetime = setInterval(() => {
                value(Uploads);
                clearInterval(onetime);
            }, 1500);
        }
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
                    <Card title={CardData.title} desc={CardData.desc} href={CardData.href} image={CardData.image} button={"View"} />
                </>:
                EditorType === "DisplayCarousel" ? <>
                    <DisplayCarousel>
                        {
                            DisplayCarouselArray.map((e)=>{
                                return <ImageRender image={e.image} width={1000} height={1000} className="cursor-pointer w-full h-full" />
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

        <MessageEmit success={true} display={MessageDisplay} message="Data submit Successfully!" position={"center"} value={(e)=>{ setMessageDisplay(e); }} />

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
                    if(e.submit){
                        setUploads({ method: "add", data: e.data, date: getCurrentDate(), type: "Card" });
                        setConfirmDisplay(true);
                    }else {
                        setCardData(e.data);
                        setOverView(e.overview);
                    }
                }} />
            </>: 
            EditorType === "FourCardCollection" ?<>
                <div className="flex justify-center items-center">
                    <FourCardCollectionEditor value={(e)=>{
                        if(e.submit){
                            setUploads({ method: "add", data: {title: e.title, data: e.data}, date: getCurrentDate(), type: "FourCardCollection" });
                            setConfirmDisplay(true);
                        }else {
                            setFourCard({data: e.data, title: e.title})
                            setOverView(e.overview);
                        }
                    }} />
                </div>
            </>: 
            EditorType === "DisplayCarousel" ? <>
                <DisplayCarouselEidtor value={(e)=>{
                    if(e.submit){
                        setUploads({method: "add", data: e.data, date: getCurrentDate(), type: "DisplayCarousel"});
                        setConfirmDisplay(true);
                    }else { 
                        setDisplayCarsouelArray(e.data);
                        setOverView(e.overview);
                    }
                }} />
            </>: null
        }
    </>
}

export default DashBoardProductEditor;