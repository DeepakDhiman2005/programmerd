"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// next
import { useRouter } from "next/navigation";

// icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";

// components
import Button from "@/components/Button";
import InputSearch from "@/components/Search/InputSearch";
import RightClickInfoIndex from "@/components/DashBoard/Editors/RightClickInfoIndex";
import BlogCard from "@/components/Cards/BlogCard";

const getBlogs = async () => {
    const resp = await axios.get("/api/blogupload/", { cache:"no-store" });
    return resp.data;
}

const DashBoardBlogPage = () => {
    // useState
    const [BlogList, setBlogList] = useState([]);
    const [BlogListProvider, setBlogListProvider] = useState([]);
    const [SelectorBox, setSelectorBox] = useState(false);
    const [Result, setResult] = useState("");

    // router
    const router = useRouter();

    // functions
    const blogapi = async () => {
        const resp = await getBlogs();
        setBlogList([...resp]);
        setBlogListProvider([...resp]);
    }

    const onSearch = (e) => {
        setResult(e);
        let array = [];
        BlogListProvider.map((blog)=>{
            let data = blog.data;
            if(data.title.toLowerCase().match(e)){
                // console.log(true);
                array.push(blog);
            }
        });
        if(e !== ""){
            setBlogList([...array]);
        }else {
            setBlogList([...BlogListProvider]);
        }
    }

    const onDelete = () => {
        setSelectorBox(true);
    }

    const onNotDelete = () =>{
        setSelectorBox(false);
    }
    
    useEffect(()=> {
        blogapi();
    }, []);

    return <>
        <h2 className="font-semibold text-slate-800 mb-4 flex justify-between items-center text-2xl">Blogs ({BlogList.length})</h2>
        <div className="flex flex-col justify-start items-start w-full">
            <div className="w-full p-3 flex justify-between items-center">
                <InputSearch search={onSearch} caseType="lower" />

                <div className="flex justify-center items-center">
                    <Button title={"add"} color="blue" className="rounded-sm" onClick={()=>{ router.push("/dashboard/blogs/editor") }}>
                        <FaPlus size={"20px"} className="m-0.5" />
                    </Button>
                    
                    <Button title={"detele"} color="red" className="ml-2 rounded-sm" onClick={onDelete}>
                        <RiDeleteBin6Line size={"20px"} className="m-0.5" />
                    </Button>
                    {
                        SelectorBox ? <>
                            <Button title={"all delete"} color="red" className="ml-2 rounded-sm" onClick={onDelete}>
                                <FaCheck size={"20px"} className="m-0.5" />
                            </Button>
                            <Button title={"not check"} color="purple" className="ml-2 rounded-sm" onClick={onNotDelete}>
                                <RiArrowGoBackFill size={"20px"} className="m-0.5" />
                            </Button>
                        </>: null
                    }
                </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full">
                {
                    BlogList.length !== 0 ? BlogList.map((blog, i)=>{
                        let data = blog.data;

                        return <RightClickInfoIndex key={data.title+i} redux={blog} className={"w-full flex justify-start items-center"}>
                            {
                                SelectorBox ? <input type="checkbox" className="ml-2 mr-4 cursor-pointer size-4" />: null
                            }
                            <BlogCard title={data.title} date={data.date} desc={data.desc} />
                        </RightClickInfoIndex>
                    }): <h2 className="w-full flex justify-center text-xl font-semibold text-slate-800 items-center mt-5 mb-5">Blog not Found: "<span className="text-blue-700">{Result}</span>"</h2>
                }
            </div>
        </div>
    </>
}

export default DashBoardBlogPage;