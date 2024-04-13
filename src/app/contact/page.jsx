"use client"
import React, {useState, useEffect} from "react";

// next
import Image from "next/image";

// icons
import { IoLogoGithub } from "react-icons/io"; // github
import { FaFacebook } from "react-icons/fa"; // facebook
import { FaInstagramSquare } from "react-icons/fa"; // instagram
import { FaYoutube } from "react-icons/fa"; // youtube

// component
import TopLoader from "@/components/TopLoader";

const Contact = () => {
    // useState
    const [IsLoading, setIsLoading] = useState(0);

    useEffect(()=>{
        setIsLoading(100);
        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 500);
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <div className="bg-black h-screen w-full flex flex-col justify-start items-center shadow-md shadow-slate-600">
            {/* <h2 className="text-purple-700">Free Contact For Me!</h2> */}
            <div className="w-full flex justify-center items-center">
                <Image src={"/image/pdtext.png"} alt="text" width={700} height={100} className=" bg-transparent w-[50%] " />
                <Image src={"/image/pdglow.png"} width={500} height={100} alt="image" className="rounded-full w-[40%] cursor-pointer mt-6 mb-6" />
            </div>
            <div className="flex justify-around items-center w-3/4">
                <a href="" target="_blank">
                    <FaFacebook size={"37px"} className="text-purple-700 ml-2 cursor-pointer hover:text-purple-800 active:shadow-md active:shadow-purple-600" />
                </a>
                <a href="https://www.instagram.com/deepakdhiman4367/" target="_blank">
                    <FaInstagramSquare size={"37px"} className="text-purple-700 ml-2 cursor-pointer hover:text-purple-800 active:shadow-md active:shadow-purple-600" />
                </a>
                <a href="https://www.youtube.com/@ProgrammerD7" target="_blank">
                    <FaYoutube size={"37px"} className="text-purple-700 ml-2 cursor-pointer hover:text-purple-800 active:shadow-md active:shadow-purple-600" />
                </a>
                <a href="https://github.com/deepakDhiman2005" target="_blank">
                    <IoLogoGithub size={"40px"} className="text-purple-700 ml-2 cursor-pointer hover:text-purple-800 active:shadow-md active:shadow-purple-600" />
                </a>
            </div>
        </div>
    </>
}

export default Contact;