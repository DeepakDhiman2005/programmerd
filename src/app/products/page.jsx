"use client"
import React, { useEffect, useState } from "react";

// icons
import { FaTools } from "react-icons/fa";

// next
import Image from "next/image";

// components
import Card from "@/components/Card";
import DisplayCarousel from "@/components/Carousels/DisplayCarousel";
import FourCardCollection from "@/components/Cards/FourCardCollection";
import Loader from "@/components/Loader";

const Products = () => {
    const [Data, setData] = useState(false);

    const func = async () => {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();

        setData(data);
    }

    useEffect(()=>{
        func();
    }, []);

    return <>
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
                            value.type === "Card" ? <Card key={value.data.id} title={value.data.title} desc={value.data.desc} button={"View"} image={value.data.image.match(new RegExp("http://")) || value.data.image.match(new RegExp("https://")) ? value.data.image: `/uploads/products/${value.data.image}`} href={value.data.href} /> : null
                        }
                        {
                            value.type === "DisplayCarousel" ? <DisplayCarousel unique={`displaycarouselfetch${i+1}`}>
                                {
                                    value.data.map(({href, id, image})=>{
                                        return <a href={href} target="_blank" className="w-full h-full">
                                            <Image src={image ? image.replace("./public", ""): "/logo.svg"} alt="image" width={1000} height={1000} className="cursor-pointer w-full h-full" />
                                        </a>
                                    })
                                }
                            </DisplayCarousel>: null
                        }
                        {
                            value.type === "FourCardCollection" ? <FourCardCollection title={value.data.title} data={value.data.data} />: null
                        }
                    </>
                }): <Loader />
            }
        </div>

        {/* <DisplayCarousel>
            <Image src={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9a7a08792fde010f.jpg?q=20"} width={1000} height={1000} alt="image" className="cursor-pointer w-full h-full" />
            <Image src={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/23ccb7c379c477c8.jpg?q=20"} width={1000} height={1000} alt="image" className="cursor-pointer w-full h-full" />
            <Image src={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/97c710b1b8b764df.png?q=20"} width={1000} height={1000} alt="image" className="cursor-pointer w-full h-full" />
            <Image src={"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d3a2f1f5dfa35719.png?q=20"} width={1000} height={1000} alt="image" className="cursor-pointer w-full h-full" />
        </DisplayCarousel> */}
        
        {/* <div className="flex justify-start items-center mt-5">
            <FourCardCollection title={"Best Computer Parts"} data={FourCards} />

            <a href="https://fktr.in/7yipOsA" target="_blank" className="w-full h-auto rounded-sm m-2 border border-solid shadow-sm shadow-slate-300 cursor-pointer">
                <Image src={"https://rukminim2.flixcart.com/image/612/612/xif0q/computer/z/f/f/-original-imagtun66ff6zfjk.jpeg?q=70"} width={500} height={60} className="w-full h-[540px]" />
            </a>
        </div> */}
    </>
}

export default Products;