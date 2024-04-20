"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// icons
import { FaTools } from "react-icons/fa";

// components
import ProductDetailCard from "@/components/Cards/ProductDetailCard";
import Loader from "@/components/Loader";
import TopLoader from "@/components/TopLoader";

const ProductPage = ({slug=""}) => {
    // useState
    const [ProductList, setProductList] = useState([]);
    const [IsLoading, setIsLoading] = useState(0);

    // functions
    const getProducts = async (query) =>{
        setIsLoading(35);
        let resp = await axios.post("/api/product/", query, {caches: "no-store"});
        setIsLoading(75);
        // console.log(resp.data);
        setProductList(resp.data);
        setIsLoading(100);

        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 700);
    }
    
    let data = {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/v/m/laserjet-pro-mfp-4104dw-printer-hp-original-imaghdw9v36rtqya.jpeg?q=70",
        title: "HP Printer MF 3010",
        score: "9.6",
        by: "flipkart",
        href: "https://fktr.in/1Tqm2zK"
    }

    useEffect(()=>{
        try{
            getProducts(slug.toLowerCase());
        }catch(err){}
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <div className="flex justify-center items-center mt-10 mb-10 flex-col">
            <div className="flex justify-center items-center">
                <FaTools className="text-purple-700" size={"30px"} />
                <h2 className="text-2xl text-purple-800 ml-3 mr-3">{slug}</h2>
                <FaTools className="text-purple-700" size={"30px"} />
            </div>
            <h2 className="mt-3 w-[90%] font-normal text-sm text-slate-600 text-center">In the world of immersive gaming experiences, nothing quite compares to the raw power and versatility of gaming laptops. Gaming laptops are a breed apart, purpose-built to deliver jaw-dropping graphics, lightning-fast performance, and the mobility to take your gaming adventures wherever you go.</h2>
        </div>

        <div className="flex flex-wrap w-full mt-5 mb-5 justify-around items-center">
            {
                ProductList.length !== 0 ? ProductList.map((data)=>{
                    return <ProductDetailCard data={data} />
                }): <div className="flex justify-center mt-6 mb-6 items-center w-full">
                    <Loader />
                </div>
            }
        </div>
    </>
}

export default ProductPage;