"use client"
import React, { Suspense } from "react";

// next
import Image from "next/image";

// icons
// import { MdEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md"; // email
import { IoKeyOutline } from "react-icons/io5"; // password
import TopLoader from "@/components/TopLoader";

const Signup = (props) => {

    return (
    <Suspense fallback={<TopLoader />}>
        <div key={"SignupPageKey"} className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-start w-11/12 bg-white border border-solid rounded-md mt-4 mb-4">
                <Image src={"/images/banner.png"} width={1000} height={100} alt="image" className="rounded-t-md w-full" />
                <form className="flex flex-col justify-center items-start bg-slate-950 rounded-b-md p-4 pl-6 w-full">
                    <div className="flex justify-start w-full items-center mb-3 mt-3">
                        <label htmlFor="email" className="cursor-pointer text-purple-600 mr-4"><MdOutlineMail size={"28px"} className="bg-transparent drop-shadow-xl shadow-purple-600" /></label>
                        <input type="text" name="email" id="email" className="bg-transparent outline-none text-purple-400 w-full" placeholder="Enter your Email: " />
                    </div>

                    <div className="flex justify-start w-full items-center mb-3 mt-3">
                        <label htmlFor="password" className="cursor-pointer text-purple-600 mr-4"><IoKeyOutline size={"28px"} className="bg-transparent drop-shadow-xl shadow-purple-600" /></label>
                        <input type="text" name="password" id="password" className="bg-transparent outline-none text-purple-400 w-full" placeholder="Enter your Password: " autoComplete="off" />
                    </div>

                    <div className="flex justify-start items-center mb-3 mt-3 md:w-1/2 w-full list-none">
                        <span className="h-[1px] bg-gray-100 w-[35%] border border-solid border-gray-100 rounded-md"></span>
                        <h2 className="ml-2 mr-2 text-slate-50 w-[30%] text-center text-sm font-semibold">Sign to Email</h2>
                        <span className="h-[1px] bg-gray-100 w-[35%] border border-solid border-gray-100 rounded-md"></span>
                    </div>

                    <div className="flex justify-start items-center w-full mt-3 mb-3">
                        <button className="text-slate-50 bg-slate-700 hover:bg-purple-700 border-slate-700 pl-3 pr-3 p-2 cursor-pointer border border-solid rounded-md">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    </Suspense>
    );
}

export default Signup;