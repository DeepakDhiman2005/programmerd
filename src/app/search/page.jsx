"use client"
import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../../../node_modules/axios/index";

// next
import { useSearchParams } from "next/navigation";
import TopLoader from "@/components/TopLoader";

// component
import BlogCard from "@/components/Cards/BlogCard";
import Card from "@/components/Card";
import FourCard from "@/components/Cards/FourCardCollection/FourCard";

const SearchPage = (props) => {
    const searchparams = useSearchParams();
    // console.log(searchparams.get("query"))

    // useState
    const [LineHighLight, setHighLight] = useState("blogs");
    const [IsLoading, setIsLoading] = useState(0);

    // Data Divided
    const [DataPerMission, setDataPerMission] = useState(false);
    const [BlogData, setBlogData] = useState([]);
    const [ProductData, setProductData] = useState([]);

    useEffect(()=>{
        try{
            let query = searchparams.get("query");
            query = query.toLowerCase();
            query = query.split(" ");
            SearchToDB(query);
        }catch(err){}
    }, [searchparams]);

    // function
    const SearchToDB = async (query) => {
        setIsLoading(35);
        const resp = await axios.post("/api/search/", query);
        // console.log(resp.data);
        const data = resp.data;
        let blogArray = [];
        let productArray = [];
        setIsLoading(65);

        data.filter((val)=>{
            let type = val.type.toLowerCase();
            if(type === "blog"){
                blogArray.push(val.data);
            } else {
                productArray.push(val);
            }
        });

        if(blogArray.length !== 0 || productArray.length !== 0){
            setDataPerMission(true);
        }

        setIsLoading(85);
        setBlogData([...blogArray]);

        setIsLoading(90);
        setProductData([...productArray]);

        setIsLoading(100);
        let delay = setInterval(() => {
            clearInterval(delay);
            setIsLoading(0);
        }, 500);
    }

    const onClickButton = (e) => {
        try{
            let key = e.target.tagName.toLowerCase();
            let text = "";
            if(key === "h2"){
                text = e.target.innerText;
            }else if(key === "span"){
                let _text = e.target.parentNode;
                text = _text.querySelector("h2").innerText;
            }else if(key === "li"){
                text = e.target.querySelector("h2").innerText;
            }
            // console.log(text)
            text = text.split(" ")[0].toLowerCase();
            setHighLight(text);
        }catch(err){}
    }

    return <>
        <TopLoader progress={IsLoading} />
        <h2 className="text-center mt-7 mb-7 font-bold text-2xl text-slate-900">Result for query: <span className="text-purple-700 font-semibold">{searchparams.get("query")}</span></h2>

        <div key={"globalSearchBar"} className="flex flex-col justify-center items-center">
            <ul className="list-none flex justify-start w-[90%] items-center">
                <li key={"SearchBarLiBlog"} className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Blogs ({BlogData.length})</h2>
                    { LineHighLight === "blogs" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Videos (0)</h2>
                    { LineHighLight === "videos" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Products ({ProductData.length})</h2>
                    { LineHighLight === "products" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>

                <li className="text-lg flex flex-col justify-center items-center text-slate-800 font-semibold mr-4 cursor-pointer" onClick={onClickButton}>
                    <h2 className="mb-2 hover:text-purple-800">Courses (0)</h2>
                    { LineHighLight === "courses" ? <span className="bg-purple-700 w-full h-[2px]"></span>: null}
                </li>
            </ul>

            {/* results */}
            <div className="flex flex-col justify-start items-start w-[95%] mt-4 shadow-md shadow-slate-300 rounded-md">
                <h2 className="w-full bg-blue-600 text-white p-4 rounded-t-md selection:text-slate-300">On {LineHighLight.replace(LineHighLight[0], LineHighLight[0].toUpperCase())} Found Result (0)</h2>
                {
                    DataPerMission ? <>
                        <div className="flex flex-col justify-start p-4 items-start w-full bg-white list-none rounded-b-md">
                            {
                                LineHighLight === "blogs" ? BlogData.map(({title, desc, date}, i)=>{
                                    return <BlogCard title={title} desc={desc} date={date} key={"BlogCardSearch"+i}  />
                                }):
                                LineHighLight === "products" ? ProductData.map((value, i)=>{
                                    return  <>
                                        {
                                            value.type === "Card" ? <Card key={"Card"+value.data.id} title={value.data.title} desc={value.data.desc} button={"View"} image={value.data.image.match(new RegExp("http://")) || value.data.image.match(new RegExp("https://")) ? value.data.image: `/uploads/products/${value.data.image}`} href={value.data.href} />:

                                            value.type === "FourCard" ? <FourCard key={"ProductFourCard" + i} title={value.data.title} data={value.data.data} />:
                                            null
                                        }
                                    </>
                                }): <h2 className="p-4 text-xl font-bold ml-1">No Data</h2>
                            }
                        </div>
                    </>: <>
                        <h2 className="p-4 text-xl font-bold ml-1">No Data</h2>
                    </>
                }
            </div>
        </div>
    </>
}

export default SearchPage;