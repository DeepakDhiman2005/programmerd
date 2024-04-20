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
import DisplayCarouselEidtor from "./productEdit/DisplayCarouselEditor";
import CardEditor from "./productEdit/CardEditor";
import MessageEmit from "@/components/MessageEmit";
import AdsInsertCard from "@/components/Cards/AdsInsertCard";

import FourCardEditor from "./productEdit/FourCardEditor";
import FourCard from "@/components/Cards/FourCardCollection/FourCard";
import AdsCardEditor from "./productEdit/AdsCardEditor";
import HostingCardEditor from "./productEdit/HostingCardEditor";

const DashBoardProductEditor = ({ data, value=function(){} }) => {
    // useState
    const [OverView, setOverView] = useState(false);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [EditorType, setEditorType] = useState(false);
    const [DisplayCarouselArray, setDisplayCarsouelArray] = useState([]);
    const [CardData, setCardData] = useState({title: "", desc: "", href: "", image: {src: ""}});
    const [FourCardData, setFourCardData] = useState(false);
    const [MessageDisplay, setMessageDisplay] = useState(false);
    const [AdsData, setAdsData] = useState({});

    const [Uploads, setUploads] = useState(false);
    const [DefaultData, setDefaultData] = useState(null);

    const CreateCard = async () => {
        const {method, data, date, type, id} = Uploads;
        console.log(method, data, date, type)

        const formData = new FormData();
        formData.append("method", method);
        formData.append("date", date);
        formData.append("type", type);
        // console.log(id)
        if(id !== null){
            formData.append("id", id);
        }

        if(Uploads.type === "Card"){
            for(let x in data){
                formData.append(x, data[x]);
            }
        }
        else if(Uploads.type === "FourCard"){
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
        else if(Uploads.type === "Ads"){
            for(let x in data){
                formData.append(x, data[x]);
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
        // console.log(data)
        try{
            if(data.data !== null){
                // console.log(true)
                setDefaultData(data.data);
                setEditorType(data.data.type);
            }
        }catch(err){}
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
                EditorType === "FourCard" ? <>
                    <FourCard title={FourCardData.title} data={FourCardData.data} />
                </>:
                EditorType === "Ads" ? <>
                    <AdsInsertCard data={AdsData} />
                </>: null
            }
        </PopUpElement>

        <ConfirmCard display={ConfirmDisplay} message="Product Card Add in Server:" value={(e)=>{
            if(e){ CreateCard(); }
            setConfirmDisplay(false);
        }} />

        <MessageEmit success={true} display={MessageDisplay} message="Data submit Successfully!" position={"center"} value={(e)=>{ setMessageDisplay(e); }} />

        <div className="flex justify-between items-center w-full">
            <h2 className="text-lg text-slate-800 font-semibold">Affiliate Editor</h2>
            <Dropdown color="green" className="flex justify-center items-center" value={(e)=>{
                setEditorType(e);
            }}>
                <li>Card</li>
                <li>FourCard</li>
                <li>DisplayCarousel</li>
                <li>Ads</li>
                <li>Hosting</li>
            </Dropdown>
        </div>

        {
            EditorType === "Card" ? <>
                <CardEditor data={DefaultData} value={(e)=>{
                    if(e.submit){
                        setUploads({ method: e.type, data: e.data, date: getCurrentDate(), type: "Card", id: e.id });
                        setConfirmDisplay(true);
                    }else {
                        setCardData(e.data);
                        setOverView(e.overview);
                    }
                }} />
            </>: 
            EditorType === "FourCard" ?<>
                <div className="flex justify-start items-center">
                    <FourCardEditor data={DefaultData} value={(e)=>{
                        if(e.submit){
                            setUploads({ method: e.method, data: e.data, date: getCurrentDate(), type: "FourCard", id: e.id });
                            setConfirmDisplay(true);
                        }else {
                            setFourCardData(e.data)
                            setOverView(e.overview);
                        }
                    }} />
                </div>
            </>: 
            EditorType === "DisplayCarousel" ? <>
                <DisplayCarouselEidtor data={DefaultData} value={(e)=>{
                    if(e.submit){
                        setUploads({method: e.method, data: e.data, date: getCurrentDate(), type: "DisplayCarousel", id: e.id});
                        setConfirmDisplay(true);
                    }else { 
                        setDisplayCarsouelArray(e.data);
                        setOverView(e.overview);
                    }
                }} />
            </>:
            EditorType === "Ads" ? <>
                <AdsCardEditor data={DefaultData} value={(e)=>{
                    if(e.submit){
                        setUploads({method: e.method, data: e.data, date: getCurrentDate(), type: "Ads", id: e.id});
                        setConfirmDisplay(true);
                    }else {
                        setAdsData(e.data);
                        setOverView(e.overview);
                    }
                }} />
            </>: 
            EditorType === "Hosting" ? <>
                <HostingCardEditor />
            </>: null
        }
    </>
}

export default DashBoardProductEditor;