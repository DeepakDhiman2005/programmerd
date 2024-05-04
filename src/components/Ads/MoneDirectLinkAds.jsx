"use client"
import React, {useEffect, useState} from "react";

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const MoneDirectLinkAds = () => {
    // useState
    const [DisplayShow, setDisplayShow] = useState("flex");
    const [Img, setImg] = useState("/image/ads/Explore.png");
    const [DirectLink, setDirectLink] = useState("//zuhempih.com/4/7432886");

    const DisplayEvent = () => {
        if(DisplayShow !== "none"){
            setDisplayShow("none");
        }
    }

    useEffect(()=>{
        try{
            let image_array = ["/image/ads/Explore.png", "/image/ads/Explore2.png", "/image/ads/Explore3.png"];
            let rand_image = Math.floor(Math.random()*image_array.length);
            setImg(image_array[rand_image]);

            let ads_array = ["//shaveeps.net/4/7433204", "//zuhempih.com/4/7432886", "//glaultoa.com/4/7433437"];
            let rand_ads = Math.floor(Math.random()*ads_array.length);
            setDirectLink(ads_array[rand_ads]);
        }catch(err){}
    }, []);

    return <>
        <div className="flex mt-3 mb-3 justify-center items-center transition-all pl-2 pr-2 duration-200" style={{display: DisplayShow}}>
            <div className="relative border border-solid rounded-md">
                <a href={DirectLink} target="_blank" className="w-full">
                    <Image src={Img} alt="image" className="rounded-md" height={100} width={1000} />
                </a>
                <div className="absolute top-2 right-3 cursor-pointer hover:text-blue-700" onClick={DisplayEvent}>
                    <RxCross2 className="hover:text-blue-700" size={"20px"} />
                </div>
            </div>
        </div>
    </>
}

export default MoneDirectLinkAds;