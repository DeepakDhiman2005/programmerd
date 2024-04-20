"use client"
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// icons
import { GoLinkExternal } from "react-icons/go";

// components
import HostingDetailsCard from "@/components/Cards/HostingDetailsCard";

const ProductHostingPage = () => {
    let hostings = [
        {
            title: "1. Hostinger",
            desc: "Servers in India — Find the perfect Hostinger domain name by using the domain checker. Go live in minutes. Get your website up and running in a few clicks. You have everything you need.",
            image: "https://media2.cybernews.com/hostinger.svg",
            points: [
                "Free Domain, SSL, automated backup",
                "Intuitive native hPanel control panel",
                "Litespeed Web Server+caching",
                "Website builder is included"
            ],
            score: "9.8",
            href: "https://bitli.in/xUCVuaL"
        },
        {
            title: "2. Bluehost",
            image: "https://media2.cybernews.com/bluehost.svg",
            desc: "Bluehost India offers affordable and reliable Wordpress Hosting & domain services with 24/7 support and flexible plans to meet your needs.",
            points: [
                "Custom WordPress experience",
                "Free Domain SSL and CDN",
                "Modern user interface + cpanel",
                "unmetered bandwidth"
            ],
            score: "9.5",
            href: "https://www.bluehost.com/"
        },
        {
            title: "3. GoDaddy",
            image: "https://media2.cybernews.com/godaddy.svg",
            desc: "Simplistic management, very reasonable prices, and business-oriented features make GoDaddy a very solid option for those looking to create a business site.",
            points: [
                "Free domain and SSL",
                "Native user interface +classic cPanel",
                "Free automated daily backups",
                "Unmetered bandwidth"
            ],
            score: "9.2",
            href: "https://bitli.in/SRghaO8"
        },
        {
            title: "4. DigitalOcean",
            desc: "DigitalOcean offers a simple and reliable cloud hosting solution that enables businesses to get their website or application up and running quickly",
            image: "https://static-00.iconduck.com/assets.00/digitalocean-icon-256x256-8ppeo48p.png",
            href: "https://www.digitalocean.com/",
            points: [
                "App Platform",
                "Cloudways",
                "Managed DataBase",
                "Storage"
            ],
            score: "8.6"
        }
    ]
    return <>
        <div className="flex flex-col justify-center items-center w-full p-3 bg-purple-700">
            <div className="flex justify-around w-full flex-col md:flex-row items-center mt-4 mb-4">
                <div className="flex flex-col justify-center items-start w-full md:w-[50%] text-white selection:text-blue-900">
                    <h2 className="mb-3 font-semibold text-slate-300">Update in <span className="text-white">2024</span></h2>
                    <h2 className="text-3xl font-bold mb-3">Best web hosting services in India</h2>

                    <p className="text-slate-50">If you’re looking to run a personal blog, business landing page, or even an online store, a reliable and affordable hosting service is what you need. Check our list of best web hosting solutions to find the one best suited for your needs.</p>

                    <Link href={"/blogs"} className="mt-3 flex font-semibold justify-center items-center text-sm text-white hover:underline cursor-pointer">
                        Explor Blogs <GoLinkExternal size={"15px"} className="ml-1" />
                    </Link>
                </div>
                <div className="w-full md:w-[40%]">
                    <Image src={"/image/server-image.png"} alt="image" height={100} width={1000} />
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col w-full">
            {
                hostings.map((hosting)=>{
                    return <div className="mt-6 mb-6 w-[95%]">
                        <HostingDetailsCard data={hosting} />
                    </div>
                })
            }
        </div>
    </>
}

export default ProductHostingPage;