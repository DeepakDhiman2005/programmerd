"use client"
import React, { useEffect, useState } from "react";

// next
import Image from "next/image";

// Component
import Article from "@/components/Article";
import CommentBox from "@/components/CommentBox";
import CommentContainer from "@/components/CommentContainer";

const blog = (params) => {
    const slug = params.params.slug;

    // useState
    const [ArticleData, setArticleData] = useState(false);
    const [AddComment, setAddComment] = useState(null);
    const [_comments, set_comments] = useState(false);

    // functions
    const blogapi = async () => {
        let _query = slug.match("%20") ? slug.replaceAll("%20", " "): slug;

        const response = await fetch("http://localhost:3000/api/blogs", {
            method: "POST",
            body: JSON.stringify({query: _query}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        // console.log(data);
        setArticleData(data);
        set_comments(data.comments);
    }

    useEffect(()=> {
        blogapi();
    }, []);

    // user comment data
    // const UserCommentData = [
    //     {
    //         name: "Billu Gammer",
    //         comment: "console.log('Hello world!');",
    //         date: "2023-04-16"
    //     },
    //     {
    //         name: "Techno Gammers",
    //         comment: "python -> print('Hello world!')",
    //         date: "2023-06-14"
    //     }
    // ]

    return <>
        <div className="flex flex-col justify-center items-center pt-10 pb-10 w-full bg-slate-50">
            {/* main article */}
            <article className="bg-white shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-center">
                {/* title */}
                <h2 className="mb-2 mt-2 ml-3 text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                    {
                        slug.match("%20") ? slug.replaceAll("%20", " "): slug
                    }
                </h2>
                {/* date */}
                <div className="flex justify-center items-center mt-4">
                    <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" />
                    <p className="ml-1 text-sm"> - {ArticleData.date ? ArticleData.date: "MM:DD:YY"}</p>
                </div>
                {/* main content */}
                <div className="mt-10 mb-10 text-lg text-start font-semibold tracking-tight text-gray-700 dark:text-white">
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

export default blog;