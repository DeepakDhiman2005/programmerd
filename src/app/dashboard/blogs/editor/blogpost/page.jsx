"use client"
import React from "react";

// redux
import { useSelector } from "react-redux";

// next
import Image from "next/image";

// components
import Article from "@/components/Article";
import CommentBox from "@/components/CommentBox";
import CommentContainer from "@/components/CommentContainer";

const DashboardBlogEditorBlogPost = () => {
    // variable
    let _comments = [];

    // redux
    const selector = useSelector(state => state.store.blog);
    // console.log(selector);
    
    return <>
        <div key={selector.data.title} className="flex flex-col items-center pt-10 pb-10 bg-slate-50">
            <article className="bg-white shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-center">
                <h2 className="mb-2 mt-2 ml-3 text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                    {selector.data.title}
                </h2>
                <div className="flex justify-center items-center mt-4">
                    <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" />
                    <p className="ml-1 text-sm"> - {selector.data.date}</p>
                </div>
                <div className="mt-10 mb-10 text-lg w-full text-start flex flex-col justify-start items-center font-semibold tracking-tight text-gray-700 dark:text-white">
                    {
                        selector.data ? <Article data={selector.data} /> : <p>Loading...</p>
                    }
                </div>
            </article>
            <CommentBox />
            {
                _comments ? <CommentContainer data={_comments} /> : <h2>Loading...</h2>
            }
        </div>
    </>
}

export default DashboardBlogEditorBlogPost;