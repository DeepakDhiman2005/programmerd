"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// next
import Image from "next/image";

// api
import { getBlogs } from "@/fetchapi/getBlogs";

// component
import Article from "@/components/Article";
import CommentBox from "@/components/CommentBox";
import CommentContainer from "@/components/CommentContainer";
import TopLoader from "@/components/TopLoader";
import Dropdown from "@/components/Dropdown";
import AdBanner from "@/components/AdBanner";

const BlogPage = ({query}) => {
    // useState
    const [ArticleData, setArticleData] = useState(false);
    const [AddComment, setAddComment] = useState(null);
    const [_comments, set_comments] = useState(false);
    const [ReduxData, setReduxData] = useState(null);

    const [IsLoading, setIsLoading] = useState(0);

    // lang changer
    const [TitleChange, setTitleChange] = useState(false);
    const [LangList, setLangList] = useState([]);

    const blogapi = async () => {
        try{
            setIsLoading(45);

            const resp = await getBlogs();
            setIsLoading(65);

            let data = resp.filter((blog)=>blog.data.title === query)[0];
            setIsLoading(85);
            // console.log(data);

            setReduxData(data);
            setArticleData(data.data);
            setLangList([...LangList, {lang: "english", article: data.data}]);
            set_comments(data.data.comment);

            setIsLoading(100);
                let delay = setInterval(() => {
                    clearInterval(delay);
                    setIsLoading(0);
                }, 500);
        }catch(err){ }
        
    }

    const AddCommontApI = async (redux, comment) => {
        // console.log(redux, comment);
        try{
            if(redux !== null){
                let updateBlog = redux;
                updateBlog.method = "edit";
                updateBlog.data.comment.push(comment);
                // console.log(updateBlog);
                const resp = await axios.post("/api/blogupload/", updateBlog);
                // console.log(resp);
            }
        }catch(err){}
    }

    const LanguageChanger = async (e) => {
        let lang = e.toLowerCase();
        setArticleData(false);
        // console.log(lang);
        let findout = false;
        LangList.filter((e)=>{
            if(lang === e.lang){
                setTitleChange(e.article.title);
                setArticleData(e.article);
                findout = true;
            }
        });

        if(!findout){
            let resp = await axios.post("/api/lang/", {lang: lang, article: ArticleData, cache: "no-store"});
            // console.log(resp.data);
            setTitleChange(resp.data.article.title);
            setArticleData(resp.data.article);
            setLangList([...LangList, {lang: lang, article: resp.data.article}]);
        }
    }

    useEffect(()=>{
        try{
            blogapi();
        }catch(err){}
    }, []);

    return <>
        <TopLoader progress={IsLoading} />
        <div key={query} className="flex flex-col items-center pt-10 pb-10 bg-slate-50">
            {/* main article */}
            <article className="bg-white shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-center">
                {/* title */}
                <h2 className="mb-2 mt-2 ml-3 text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-slate-900">
                    {
                        TitleChange !== false ? TitleChange: <>
                            {query !== "" ? query: "No Result!"}                    
                        </>
                    }
                </h2>
                {/* date */}
                <div className="flex justify-center items-center mt-4">
                    <Image src={"/logo.svg"} alt="logo" width={40} height={40} className="select-none cursor-pointer" />
                    <p className="ml-1 text-sm"> - {ArticleData.date ? ArticleData.date: "MM:DD:YY"}</p>
                </div>
                {/* lanauge change button */}
                <div className="flex justify-end items-center w-full">
                    <Dropdown title="Language" value={LanguageChanger} className="flex justify-center items-center">
                        <li>English</li>
                        <li>Hindi</li>
                    </Dropdown>
                </div>
                {/* main content */}
                <div className="mt-10 mb-10 text-lg w-full text-start flex flex-col justify-start items-center font-semibold tracking-tight text-gray-700 dark:text-gray-700">
                    {
                        ArticleData ?  <Article data={ArticleData} />: <p>Loading...</p>
                    }
                </div>
                
                <div className="flex justify-center items-center overflow-hidden">
                    <div className="bg-slate-100 w-[90%]">
                        <AdBanner />
                    </div>
                </div>
            </article>
            {/* comment box */}
            <CommentBox query={query} value={(e)=>{
                setAddComment(e);
                let _comment = {
                    name: e.name,
                    date: e.date,
                    comment: e.comment
                }
                AddCommontApI(ReduxData, _comment);
            }} />
            {
                _comments ? <CommentContainer data={_comments} add={AddComment} />: <h2>Loading...</h2>
            }
        </div>
    </>
}

export default BlogPage;