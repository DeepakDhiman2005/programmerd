"use client"
import React, {useState, useEffect} from "react";

// next
import Image from "next/image";

// icons
import { IoLogoGithub } from "react-icons/io"; // github
import { FaFacebook } from "react-icons/fa"; // facebook
import { FaInstagramSquare } from "react-icons/fa"; // instagram
import { FaYoutube } from "react-icons/fa"; // youtube
import { GoLinkExternal } from "react-icons/go"; // link
import { MdEmail } from "react-icons/md"; // email
import { SiFreelancer } from "react-icons/si"; // freelancer
import { TbBrandFiverr } from "react-icons/tb"; // fiverr

// component
import TopLoader from "@/components/TopLoader";
import Button from "@/components/Button";

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
        <div className="flex justify-center items-center flex-col">
            <Image src={"/image/programmerd.png"} alt="image" className="rounded-full border-4 mt-4 mb-4 border-solid border-purple-600 shadow-md shadow-purple-800" width={200} height={200} />

            <h2 className="mt-3 mb-3 text-3xl text-slate-800 font-semibold">Contact Us</h2>
            
            {/* youtube */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <FaYoutube size={"35px"} className="text-red-600" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">Youtube</h2>
                </div>
                <a href="https://www.youtube.com/@ProgrammerD7" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                        View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>

            {/* Instagram */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <FaInstagramSquare size={"35px"} className="text-purple-700" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">Instagram</h2>
                </div>
                <a href="https://www.instagram.com/deepakdhiman4367/" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                        View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>

            {/* Github */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <IoLogoGithub size={"35px"} className="text-slate-800" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">GitHub</h2>
                </div>
                <a href="https://github.com/DeepakDhiman2005" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                    View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <MdEmail size={"35px"} className="text-orange-600" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">Email</h2>
                </div>
                <a href="https://mail.google.com/mail/u/0/#advanced-search/to=dhimandeepak957%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=Deepak+Dhiman?compose=new" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                    View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>      

            {/* Freelancer */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <SiFreelancer size={"35px"} className="text-blue-700" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">Freelancer</h2>
                </div>
                <a href="https://www.freelancer.com/u/dhimandeepak957" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                    View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>

            {/* Fiverr */}
            <div className="flex justify-between items-center border shadow-sm mt-3 mb-3 shadow-slate-200 bg-white border-solid p-3 rounded-md w-[90%]">
                <div className="flex justify-center items-center">
                    <TbBrandFiverr size={"35px"} className="text-green-700" />
                    <h2 className="text-slate-800 text-xl ml-3 font-semibold">Fiverr</h2>
                </div>
                <a href="https://www.fiverr.com/deepakdhiman877?up_rollout=true" target="_blank">
                    <Button color="black" className="flex justify-center items-center">
                    View
                        <GoLinkExternal size={"20px"} className="ml-1" />
                    </Button>
                </a>
            </div>
        </div>
    </>
}

export default Contact;