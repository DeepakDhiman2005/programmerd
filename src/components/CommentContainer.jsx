"use client"
import React, {useEffect, useState} from "react";

// next
import Image from "next/image";

// components
import Button from "./Button";

/** 
 * @param props = data: [{name: "user name", comment: "user comment", date: "YY-MM-DD"}]
 * add: {name: "user name", comment: "user comment", date: "YY-MM-DD"} -> add object
 * */
const CommentContainer = (props={data: [], add: {}}) => {
    // useState
    const [_data, set_data] = useState(props.data);
    const [Reply, setReply] = useState(false);

    useEffect(()=>{
        if(props.add){
            set_data((e)=>[...e, props.add]);
        }
    }, [props.add]);

    return <>
        <div className="mt-10 mb-10 p-4 w-[85%] flex flex-col justify-center items-start">
            <h2 className="text-2xl text-black font-bold">Comments {`(${_data.length})`}</h2>
            {/* comment section */}
            <div className="border-t border-solid border-t-slate-200 mt-4 mb-4 pt-5 pb-5 w-full">
                {/* comment box */}
                {
                    _data.map((data)=>{
                        return  <div className="w-full md:w-3/4 flex justify-start mt-5 mb-5 items-center">
                            <div className="w-[10%] ml-3 mr-3 hidden sm:block">
                                <Image src={"/logo.svg"} alt={"logo"} width={50} height={50} className="rounded-full" />
                            </div>
                            <div className="bg-white border border-solid flex-wrap border-slate-200 rounded-lg shadow-md flex flex-col justify-center items-start p-4 w-full sm:w-[90%]">
                                <div className="flex justify-between flex-wrap items-center mb-2 w-full">
                                    <h2 className="sm:text-xl font-bold text-center text-slate-800">{data.name}</h2>
                                    <h2>{data.date}</h2>
                                </div>
                                <p>{data.comment}</p>
                                {
                                    !Reply ? <button className="text-white mt-3 mb-3 text-sm font-semibold bg-purple-600 cursor-pointer p-2 pt-1 pb-1 border border-solid border-purple-700 rounded-sm hover:bg-purple-800 hover:shadow-lg active:bg-purple-400 active:text-purple-600 selection:text-white" onClick={()=>{ setReply(true) }}>REPLY</button>: <>
                                        <div className="flex justify-start flex-wrap w-full items-center">
                                            <Image src={"/logo.svg"} alt={"logo"} width={30} height={30} className="rounded-full m-2 sm:m-0" />
                                            <input type="text" className="outline-none p-1 border border-solid w-full sm:w-auto ml-3 rounded-md" />
                                            <Button color="purple" className="ml-2 mt-2 sm:mt-0">Post</Button>
                                            <Button color="white" className="ml-2 mt-2 sm:mt-0" onClick={()=>{ setReply(false); }}>Cancle</Button>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

export default CommentContainer;