"use client"
import React, {useRef, useState, useEffect, Suspense} from "react";

// components
import Blogposts from "@/components/Blogposts";
import Loader from "@/components/Loader";
import TopLoader from "@/components/TopLoader";

// icons
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Blogs = (props) => {
    // useRef
    const searchRef = useRef();

    // useState
    const [SearchBlogCard, setSearchBlogCard] = useState("");
    const [BlogList, setBlogList] = useState(false);

    // function
    const SearchValueDeleted = () => {
        searchRef.current.value = "";
        setSearchBlogCard("");
    }

    const blogapi = async () => {
        const response = await fetch("/api/blogs", { method: "GET" });
        const data = await response.json();
        // console.log(data);
        setBlogList(data);
    }

    useEffect(()=>{
        // console.log("fetch to api...");
        blogapi();
    }, []);

    return <Suspense fallback={<TopLoader/>}>  
        <div className="pl-5 pr-5 pb-5 bg-slate-50">
            <div className="w-full flex justify-between items-center flex-col sm:flex-row">
                {/* title */}
                <h2 className="mb-4 mt-5 ml-3 text-4xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">Welcome to Articles</h2>

                {/* search */}
                <div className="flex justify-center items-center sm:mr-10 bg-white p-2 border border-solid shadow-lg border-slate-50 rounded-lg">
                    <label htmlFor="search">
                        <IoIosSearch size={"20px"} className={"cursor-pointer text-gray-600 mr-2"} />
                    </label>
                    <input ref={searchRef} type="text" name="search" id="search" placeholder="Search..." className="bg-transparent outline-none border-b border-solid border-b-transparent active:border-b-blue-600" onChange={(e)=>{
                            setSearchBlogCard(e.target.value.toLowerCase());
                        }} />
                    <RxCross2 size={"20px"} className="text-gray-600 ml-2 mr-1 cursor-pointer" onClick={SearchValueDeleted} />
                </div>
            </div>
            {
                BlogList ? <Blogposts search={SearchBlogCard} bloglist={BlogList} />: <div className="flex justify-center items-center mt-20 mb-20">
                    <Loader />
                </div>
            }
        </div>
    </Suspense>
}

export default Blogs;