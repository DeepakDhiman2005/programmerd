"use client"
import React, {useState, useEffect} from "react";

// components
import BlogCard from "./Cards/BlogCard";

/** @param return - this function is return of blog posts data {
 * search="search value" -> pass search
 * bloglist=[] -> blog list in json data
 * and rank of blog-post card
 * } */
const Blogposts = ({search="", bloglist=[], value=function(){}}) => {
    // list

    // useState
    const [DataList, setDataList] = useState(bloglist);
    const [DisplayResult, setDisplayResult] = useState(true);

    useEffect(()=>{
        // console.log(search);
        let _key = search;
        let _array = [];

        bloglist.filter((data)=>{
            if(data.title.toLowerCase().match(_key)){
                // console.log(true);
                _array.push(data);
            }
        });

        let _empty = false;
        try{
            let vl = _array[0].title;
            _empty = false;
        }catch(err){
            // console.log("Array is empty!");
            _empty = true;
        }
        // console.log(_empty);
        if(_empty){
            setDisplayResult(false);
        }else{
            setDisplayResult(true);
        }

        // console.log(_array);
        setDataList(_array);
        value(_array);
    }, [search]);

    return <>
        {/* <BlogCard title={"This is Blog Title"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit repudiandae quo iusto illum quod ipsa, labore nesciunt asperiores quis itaque distinctio beatae consequatur vero. Fugiat dolorem obcaecati temporibus repellendus esse recusandae aut asperiores, maiores quaerat ea aperiam incidunt, fugit quidem?  veritatis doloremque rem facilis debitis quis maiores officia culpa distinctio alias omnis expedita nulla minima enim quod perspiciatis adipisci?"} date={"November 20, 2024"} /> */}
        {
            DisplayResult ? DataList.map((data, i)=>{
                return <BlogCard key={"BlogCardKey"+i} title={data.title} desc={data.desc} date={data.date} />
            }): <h2 key={"BlogCardNotFoundKey"} className="mt-10 mb-10 text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Result Not Found: <span className="text-blue-600">{search}</span>
            </h2>
        }
    </>
}

export default Blogposts;