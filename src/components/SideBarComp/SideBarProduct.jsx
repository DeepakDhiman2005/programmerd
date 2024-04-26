"use client"
import React, { useEffect, useState} from "react";
import axios from "axios";

// next
import { usePathname } from "next/navigation";

// api
const getProductApI = async () => {
    const resp = await axios.get("/api/products/", { cache: "no-store" });
    return resp.data;
}

// components
import ProductDetailCard from "../Cards/ProductDetailCard";
import Loader from "../Loader";

const SideBarProduct = () => {
    // useState
    const [Affiliates, setAffiliates] = useState(false);

    // next
    const pathname = usePathname();

    const ApI = async () => {
        const products = await getProductApI();
        let ran = Math.floor(Math.random()*(products.length - 4));
        // console.log(ran);
        // console.log(products.slice(0, 3));
        let array = [products[ran], products[ran !== 0 ? ran-1: ran], products[ran+1]];
        // setAffilates(products.slice(0, 3));
        setAffiliates(array);
    }

    useEffect(()=>{
        ApI();
    }, [pathname]);

    return <>
        <div className="flex justify-around w-full items-center h-full flex-wrap">
            {
                Affiliates ? Affiliates.map((value)=>{
                    let data = {
                        title: value.title,
                        image: value.image,
                        score: value.score,
                        by: value.by,
                        href: value.href
                    }
                    return <>
                        <ProductDetailCard data={data} />
                    </>
                }): <div className="flex justify-center w-full h-full items-center mt-5 mb-5">
                    <Loader />
                </div>
            }
            <h2 className="mt-10 mb-10 h-20 w-full"></h2>
        </div>
    </>
}

export default SideBarProduct;