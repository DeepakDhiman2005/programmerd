"use client"
import React from "react";

// next
import Image from "next/image";

// icons
import { FaCheck } from "react-icons/fa";

const HostingDetailsCard = ({ data={} }) => {
    let title = data.title ? data.title: "";
    let desc = data.desc ? data.desc: "";
    let href = data.href ? data.href: "";
    let image = data.image ? data.image: "/logo.svg";
    let point = data.points ? data.points: ["", "", "", ""];
    let score = data.score ? data.score : "0";

    return <>
        <div className="flex justify-between items-center flex-col w-full bg-white md:flex-row p-4 pt-6 pb-6 border border-solid rounded-md">
            <div className="w-full md:w-[15%] flex justify-start items-center cursor-pointer">
                <a href={href !== ""? href: null} target="_blank">
                    <Image src={image !== "" ? image: "/logo.svg"} width={100} height={100} alt={"image"} className="ml-2 mr-2" />
                </a>
                <h2 className="text-slate-900 font-bold text-xl md:hidden">{title}</h2>
            </div>

            <div className="flex w-full mt-3 mb-3 md:m-0 md:w-[30%] flex-col justify-center items-start ml-2 mr-2">
                <h2 className="text-slate-900 font-bold text-2xl hidden md:block">{title}</h2>
                <p className="text-sm mt-1">{desc}</p>
            </div>

            <ul className="flex flex-col w-full md:w-[25%] justify-around items-start list-none">
                <li className="flex justify-start items-center">
                    <FaCheck size={"20px"} className="text-green-600 mt-2" />
                    <h2 className="text-slate-600 font-normal text-sm ml-3">{point[0]}</h2>
                </li>
                <li className="flex justify-start items-center">
                    <FaCheck size={"20px"} className="text-green-600 mt-2" />
                    <h2 className="text-slate-600 font-normal text-sm ml-3">{point[1]}</h2>
                </li>
                <li className="flex justify-start items-center">
                    <FaCheck size={"20px"} className="text-green-600 mt-2" />
                    <h2 className="text-slate-600 font-normal text-sm ml-3">{point[2]}</h2>
                </li>
                <li className="flex justify-start items-center">
                    <FaCheck size={"20px"} className="text-green-600 mt-2" />
                    <h2 className="text-slate-600 font-normal text-sm ml-3">{point[3]}</h2>
                </li>
            </ul>

            <div className="flex flex-col w-full md:w-[25%] justify-center mt-4 md:mt-auto items-center">
                <div className="flex justify-start items-end">
                    <h2 className="text-slate-600 text-sm">SCORE:</h2>
                    <h2 className="font-semibold text-3xl ml-1">{score}</h2>
                    <h2 className="text-slate-600 ml-1">/10</h2>
                </div>
                <a href={href !== "" ? href: null} target="_blank" className="bg-green-600 hover:bg-green-500 cursor-pointer w-full md:w-auto rounded-sm mt-3 mb-3 text-sm text-white p-3 pl-6 pr-6 font-semibold">Visit Hostinger</a>
            </div>
        </div>
    </>
}

export default HostingDetailsCard;