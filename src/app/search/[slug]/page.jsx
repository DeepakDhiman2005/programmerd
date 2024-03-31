"use client"
import React from "react";

// next
import { useSearchParams } from "next/navigation";

const Search = (params) => {
    const query = params.params.slug;
    const searchparams = useSearchParams();
    console.log(searchparams.get("query"))

    return <>
        <div className="flex justify-center items-center pl-5 pr-5 pb-10">
            <h2 className="mb-2 mt-5 ml-5 text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Results for query: <span className="text-blue-700">{query}</span>
            </h2>
        </div>
    </>
}

export default Search;