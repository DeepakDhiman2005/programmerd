"use client"
import React from "react";

// icons
import { IoMdHeart } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";

// next
import Image from "next/image";

// components
import Button from "../Button";

const ProductDetailCard = ({ data={} }) => {
    let image = data.image ? data.image: "/logo.svg";
    let title = data.title ? data.title: "";
    let score = data.score ? data.score: "0.0";
    let by_prod = data.by ? data.by: "...";
    let href = data.href ? data.href: null;

    return <>
        <div className="flex flex-col justify-center items-start p-3 cursor-pointer mt-3 mb-3 bg-white hover:shadow-md hover:shadow-slate-200 w-full sm:w-[45%] md:w-[35%]">
            <div className="w-full flex justify-end items-center p-4">
                <IoMdHeart size={"20px"} className="text-slate-600" />
            </div>

            <a href={href !== "" ? href: null} target="_blank" className="w-full flex justify-center pt-4 pb-4 items-center mb-2 mt-2">
                <Image src={image !== "" ? image: "/logo.svg"} alt="image" width={200} height={100} />
            </a>

            <div className="flex flex-col justify-center items-center mt-4 mb-2">
                <h2>{title}</h2>
            </div>

            <div className="mt-2 mb-2 flex justify-start items-center">
                <div className="bg-green-700 p-1 pl-3 pr-3 flex text-sm justify-center items-center text-white rounded-sm">
                    <span>{score}</span>
                    <IoIosStar size={"12px"} className="ml-2" />
                </div>
                <h2 className="text-lg text-slate-600 ml-2">(by {by_prod})</h2>
            </div>

            <a href={href !== "" ? href: null} target="_blank" className="w-full">
                <Button color="purple" className="rounded-sm w-full flex justify-center items-center">
                    <span>View of Product</span>
                    <GoLinkExternal size={"17px"} className="ml-2" />
                </Button>
            </a>
        </div>
    </>
}

export default ProductDetailCard;