"use client"
import React, {useRef} from "react";

// icons
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

/** 
 * @param search = write search value
 * caseType: "lower" || "upper"
 */
const InputSearch = ({search=function(){}, caseType=""}) => {
    // useRef
    const searchRef = useRef(null);

    // function
    const SearchValueDeleted = () => {
        searchRef.current.value = "";
        search("");
    }

    return <>
        <div className="flex justify-center items-center sm:mr-10 bg-white p-2 border border-solid shadow-lg border-slate-50 rounded-lg">
            <label htmlFor="search">
                <IoIosSearch size={"20px"} className={"cursor-pointer text-gray-600 mr-2"} />
            </label>
            <input ref={searchRef} type="text" name="search" id="search" placeholder="Search..." className="bg-transparent outline-none border-b border-solid border-b-transparent active:border-b-blue-600" onChange={(e) => {
                if(caseType === "lower"){
                    search(e.target.value.toLowerCase());
                }else if(caseType === "upper"){
                    search(e.target.value.toUpperCase());
                }else{
                    search(e.target.value);
                }
            }} />
            <RxCross2 size={"20px"} className="text-gray-600 ml-2 mr-1 cursor-pointer" onClick={SearchValueDeleted} />
        </div>
    </>
}

export default InputSearch;