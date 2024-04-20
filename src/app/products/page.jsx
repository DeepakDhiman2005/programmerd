"use client"
import React, { useEffect, useState } from "react";
// import axios from "axios";

// icons
import { FaTools } from "react-icons/fa";

// next
import Image from "next/image";

// components
import Card from "@/components/Card";
import DisplayCarousel from "@/components/Carousels/DisplayCarousel";
import Loader from "@/components/Loader";
import TopLoader from "@/components/TopLoader";
import FourCard from "@/components/Cards/FourCardCollection/FourCard";
import AdsInsertCard from "@/components/Cards/AdsInsertCard";

import ProductTopBar from "@/components/ProductComp/ProductTopBar";

async function getProducts(){
    const response = await fetch("/api/products", { method: "GET", cache: "no-store" });
    const data = await response.json();
    return data;
}

const Products = () => {
    const [Data, setData] = useState(false);
    const [IsLoading, setIsLoading] = useState(0);

    // ${process.env.API_KEY}
    const func = async () => {
        try{
            setIsLoading(45);
            const data = await getProducts();
            setIsLoading(65);
            let array = [];
            data.filter((dt)=>{
                if(dt.method !== "hide"){
                    array.push(dt);
                }
            });

            setIsLoading(85);
            setData(array);
            setIsLoading(100);

            let delay = setInterval(()=>{
                setIsLoading(0);
                clearInterval(delay);
            }, 700);
        }catch(err){
            // console.log(err)
            setIsLoading(100);
        }
    }

    useEffect(()=>{
        func();
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <ProductTopBar />

        <div className="flex justify-center items-center mt-10 mb-10 flex-col">
            <div className="flex justify-center items-center">
                <FaTools className="text-purple-700" size={"30px"} />
                <h2 className="text-2xl text-purple-800 ml-3 mr-3">Best Products</h2>
                <FaTools className="text-purple-700" size={"30px"} />
            </div>
            <h2 className="mt-3 font-normal text-slate-600 text-center">This is what I use to create my content. I am not sponsored by any of these companies.</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center mt-20 mb-20">
            {
                Data ? Data.map((value, i)=>{
                    return <>
                        {
                            value.type === "Card" ? <Card key={"Card"+value.data.id} title={value.data.title} desc={value.data.desc} button={"View"} image={value.data.image.match(new RegExp("http://")) || value.data.image.match(new RegExp("https://")) ? value.data.image: `/uploads/products/${value.data.image}`} href={value.data.href} /> : null
                        }
                        {
                            value.type === "DisplayCarousel" ? <DisplayCarousel key={"ProductDisplayCarousel" + i} unique={`displaycarouselfetch${i+1}`}>
                                {
                                    value.data.map(({href, id, image}, i)=>{
                                        return <a key={"ProductAOnDisplayCarousel" + i} href={href} target="_blank" className="w-full h-full">
                                            <Image src={image ? image.replace("./public", ""): "/logo.svg"} alt="image" width={1000} height={1000} className="cursor-pointer w-full h-full" />
                                        </a>
                                    })
                                }
                            </DisplayCarousel>: null
                        }
                        {
                            value.type === "FourCard" ? <FourCard key={"ProductFourCard" + i} title={value.data.title} data={value.data.data} />: null
                        }
                        {
                            value.type === "Ads" ? <div className="w-[90%]">
                                <AdsInsertCard data={value.data} key={"AdsInsertCard" + i} />
                            </div>: null
                        }
                    </>
                }): <Loader />
            }
        </div>
    </>
}

export default Products;