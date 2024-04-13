"use client"
import React, { useEffect, useState } from "react";

// next
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// component
import Article from "@/components/Article";
import CommentBox from "@/components/CommentBox";
import CommentContainer from "@/components/CommentContainer";
import TopLoader from "@/components/TopLoader";

const SearchBlogPost = () => {
    const searchparams = useSearchParams();

    // useState
    const [ArticleData, setArticleData] = useState(false);
    const [AddComment, setAddComment] = useState(null);
    const [_comments, set_comments] = useState(false);

    const [IsLoading, setIsLoading] = useState(0);

    const blogapi = async () => {
        setIsLoading(45);
        const resp = await fetch("/api/blogs/", {
            method: "POST",
            body: JSON.stringify({ query: searchparams.get("blogpost") })
        });
        setIsLoading(65);
        const data = await resp.json();
        setIsLoading(85);
        // console.log(data);
        setArticleData(data);
        set_comments(data.comments);

        setIsLoading(100);
            let delay = setInterval(() => {
                clearInterval(delay);
                setIsLoading(0);
            }, 500);
    }

    useEffect(()=>{
        try{
            blogapi();
        }catch(err){}
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <div className="flex flex-col items-center pt-10 pb-10 bg-slate-50">
            {/* main article */}
            <article className="bg-white shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-center">
                {/* title */}
                <h2 className="mb-2 mt-2 ml-3 text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                    {searchparams.get("blogpost") !== "" ? searchparams.get("blogpost"): "No Result!"}
                </h2>
                {/* date */}
                <div className="flex justify-center items-center mt-4">
                    <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" />
                    <p className="ml-1 text-sm"> - {ArticleData.date ? ArticleData.date: "MM:DD:YY"}</p>
                </div>
                {/* main content */}
                <div className="mt-10 mb-10 text-lg w-full text-start flex flex-col justify-start items-center font-semibold tracking-tight text-gray-700 dark:text-white">
                    {
                        ArticleData ? <Article data={ArticleData} /> : <p>Loading...</p>
                    }
                </div>
            </article>
            {/* comment box */}
            <CommentBox value={(e)=>{
                // console.log("CommentBox Return Object:- ", e);
                setAddComment(e);
            }} />
            {
                _comments ? <CommentContainer data={_comments} add={AddComment} />: <h2>Loading...</h2>
            }
        </div>
    </>
}

export default SearchBlogPost;