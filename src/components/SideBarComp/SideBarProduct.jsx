"use client"
import React, { useEffect, useState} from "react";
import axios from "axios";

// api
const getProductApI = async () => {
    const resp = await axios.get("/api/products/", { cache: "no-store" });
    return resp.data;
}

// components
import Card from "../Card";
import FourCard from "../Cards/FourCardCollection/FourCard";
import Loader from "../Loader";

const SideBarProduct = () => {
    // useState
    const [Affilates, setAffilates] = useState(false);

    const ApI = async () => {
        const products = await getProductApI();
        setAffilates(products);
    }

    useEffect(()=>{
        ApI();
    }, []);
    return <>
        <div className="flex justify-center w-full items-center h-full flex-wrap">
            {
                Affilates ? Affilates.map((product)=>{
                    let data = product.data;
                    return product.type === "FourCard" ? <FourCard title={data.title} data={data.data} />: null
                }): <div className="flex justify-center w-full h-full items-center mt-5 mb-5">
                    <Loader />
                </div>
            }
            <h2 className="mt-10 mb-10 h-20 w-full"></h2>
        </div>
    </>
}

export default SideBarProduct;