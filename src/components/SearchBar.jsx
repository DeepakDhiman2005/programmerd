"use client"
import React, {useRef, useState, useEffect} from "react";

// next
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// icons
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// redux
import { useSelector, useDispatch } from "react-redux";
import { SearchBarOpenClose } from "@/app/redux/features/EventEmit";

const SearchBar = () => {
    // useRouter
    const router = useRouter();
    const searchparams = useSearchParams();

    // useRef
    const search = useRef(null);
    const searchbox = useRef(null);
    const searchvoid = useRef(null);

    // redux
    const dispatch = useDispatch();
    const searchbarvalue = useSelector((state)=>state.events.searchbar);
    
    // list
    const datacollection = [
        {
            title: "What is Computer?"
        },
        {
            title: "What is Coding?"
        },
        {
            title: "What is Programming?"
        },
        {
            title: "What is CodeWithHarry?"
        },
        {
            title: "Python tutorial Beginner to Advance?"
        },
        {
            title : "Cpp Full Course?"
        },
        {
            title: "Programmer D Channel?"
        }
    ]

    // useState
    const [SearchLists , setSearchLists] = useState(datacollection);
    const [DisplayResult, setDisplayResult] = useState(true);

    // functions
    const OnSearchBar = (e) => {
        const _id = e.target.id;

        if(_id === "searchbar_body_id"){
            // console.log(true);
            dispatch(SearchBarOpenClose(false));
        }
    }

    const CancleWriteValue = () => {
        search.current.value = "";
        setSearchLists(datacollection);
        searchbox.current.className = searchbox.current.className.replace("h-auto", "h-96");
        setDisplayResult(true);
    }

    const Searching = (e) => {
        // console.log(searchbox.current);
        let _key = e.target.value.toLowerCase();
        // console.log(_key);
        let _array = [];

        datacollection.filter((data)=>{
            if(data.title.toLowerCase().match(_key)){
                // console.log(data.title);
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
            searchbox.current.className = searchbox.current.className.replace("h-96", "h-auto");
            setDisplayResult(false);
        }else{
            searchbox.current.className = searchbox.current.className.replace("h-auto", "h-96");
            setDisplayResult(true);
        }
        setSearchLists(_array);
    }

    const onEnter = (value) => {
        // console.log(value);
        const params = new URLSearchParams(searchparams);
        if(value !== ""){
            params.set("query", value);
            // console.log(params)

            dispatch(SearchBarOpenClose(false));

            router.push(`/search/?${params.toString()}`);
        } else {
            params.delete('query');
        }
    }

    const onShowLink = (e) => {
        try{
            let tag = e.target.tagName.toLowerCase();
            let text = "";
            if(tag === "h2"){
                text = e.target.innerText;
            }else if(tag === "div"){
                text = e.target.querySelector("h2").innerText;
            }else if(tag === "svg"){
                let arrow = e.target.parentNode;
                text = arrow.querySelector("h2").innerText;
            }else if(tag === "path"){
                let arrow = e.target.parentNode.parentNode;
                text = arrow.querySelector("h2").innerText;
            }
            // console.log(text);
            const params = new URLSearchParams(searchparams);
            if(text !== ""){
                params.set("query", text);
                // console.log(params)

                dispatch(SearchBarOpenClose(false));

                router.push(`/search/?${params.toString()}`);
            } else {
                params.delete('query');
            }
        }catch(err){}
    }

    useEffect(()=>{
        // console.log(true);
        if(searchbarvalue){
            window.document.body.style.overflowY = "hidden";
            searchvoid.current.className = searchvoid.current.className.replace("w-0", "w-full");
            searchvoid.current.className = searchvoid.current.className.replace("h-0", "h-full");
        }else{
            window.document.body.style.overflowY = "scroll";
            searchvoid.current.className = searchvoid.current.className.replace("w-full", "w-0");
            searchvoid.current.className = searchvoid.current.className.replace("h-full", "h-0");
        }
    }, [searchbarvalue]);

    return <>
        <div ref={searchvoid} key={"SearchBarGlobal"} className="w-0 h-0 flex items-center justify-center fixed top-0 z-[100] backdrop-brightness-75 overflow-hidden" id="searchbar_body_id" onClick={OnSearchBar}>
            {/* main box */}
            <div className="w-3/4 bg-gray-100 rounded-lg border border-slate-300 border-solid">
                {/* layer up */}
                <div className="p-2 pt-4 pb-4 border-b border-solid bg-gray-50 border-b-gray-200 flex rounded-t-lg items-center">
                    <IoIosSearch size={"23px"} className="text-gray-600 ml-2 mr-2 cursor-pointer w-[5%]" onClick={()=>{
                        search.current.focus();
                    }} />
                    <input ref={search} type="text" className="outline-none border-none bg-transparent w-[90%]" placeholder="Search..." onChange={Searching} onKeyDown={(e)=>{
                        if(e.key === "Enter"){ onEnter(e.target.value); }
                    }} />
                    <RxCross2 size={"23px"} className="text-gray-600 ml-2 mr-2 cursor-pointer w-[5%]" onClick={CancleWriteValue} />
                </div>

                {/* layer middle */}
                <div ref={searchbox} className="flex h-96 justify-start flex-col items-center pt-4 pl-3 pr-3 overflow-y-scroll">
                    {
                        DisplayResult ? SearchLists.map((data, i)=>{
                            return <div key={"SearchLinks" + i} className="mt-3 mb-3 cursor-pointer w-full flex items-center rounded-md border border-solid justify-between border-slate-200 bg-slate-100 p-3 pt-4 pb-4 hover:bg-blue-600 hover:text-white text-gray-800" onClick={onShowLink}>
                                <h2 className="text-center">{data.title}</h2>
                                <MdOutlineKeyboardArrowRight size={"23px"} className="cursor-pointer" />
                            </div>
                        }): <h2 key={"SearchLinksNotFound"} className="text-2xl mt-10 mb-10">No Result For "<span className="text-blue-700">{search.current.value}</span>"</h2>
                    }
                    
                    {/* <h2 className="text-2xl mt-10 mb-10">No Result For "fdafda"</h2> */}
                </div>

                {/* layer down */}
                <div className="p-2 pt-4 pb-4 border-b border-solid bg-gray-50 border-t-gray-300 flex rounded-b-lg items-center justify-end">
                    <h2 className="text-gray-500 select-none">Search by</h2>
                    <Image src={"/logo.svg"} width={25} height={25} className="ml-3 mr-3 select-none" alt="logo" />
                </div>
            </div>
        </div>
    </>
}

export default SearchBar;