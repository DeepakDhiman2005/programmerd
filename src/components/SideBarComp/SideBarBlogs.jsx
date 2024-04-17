"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// next
import { useRouter } from "next/navigation";

// components
import Blogposts from "../Blogposts";
import Footer from "../Footer";
import Loader from "../Loader";

const SideBarBlogs = () => {
    const router = useRouter();

    // useState
    const [JsonDataList, setJsonDataList] = useState([]);

    const getBlogs = async () => {
        let blogs = await axios.get("/api/blogs/");
        // let array = blogs.data.slice(0, 3);
        let array = [];
        let i=0;
        blogs.data.filter((blog)=>{
            if(blog.method !== "hide"){
                if(i <= 2){
                    array.push(blog.data);
                    i += 1;
                }
            }
        })
        setJsonDataList(array);
    }

    useEffect(()=>{
        getBlogs();
    }, []);

    return <>
        <div key={"BlogCardInSideBar"} className="p-4 w-full">
            {
                JsonDataList.length !== 0 ? <>
                    <h2 className="mb-2 mt-2 ml-5 text-4xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">Coding Articles</h2>
                    <Blogposts bloglist={JsonDataList} />
                    <button className="flex items-center justify-between mt-5 mb-5 ml-5 text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer" onClick={() => {
                        router.push("/blogs");
                    }}>more...</button>
                    <Footer />
                </>: <div className="mt-5 mb-5 w-full flex justify-center items-center">
                    <Loader />
                </div>
            }
        </div>
    </>
}

export default SideBarBlogs;