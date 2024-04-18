"use client"
import React, { useState } from "react";

// components
import ListPopIndexBox from "@/components/Inputs/ListPopIndexBox";
import ContentEditor from "@/components/ContentEditor/ContentEditor";

const PageBuilder = () => {
    // useState
    const [SelectType, setSelectType] = useState([]);

    const AddPage = (e) => {
        setSelectType([...SelectType, {type: e, data: {data: null}, id: SelectType.length+1}]);
    }

    const Inputs = (e) => {
        let array = [];
        SelectType.map((data)=>{
            if(data.id === e.id){
                array.push({type: e.type, data: e.data, id: e.id});
            }else {
                array.push(data);
            }
        });
        // console.log(array);
        setSelectType([...array]);
    }

    const DeleteEvent = (e) => {
        // console.log(e);
        let array = [];
        let onetime = false;
        SelectType.map((data)=>{
            if(data.id === e.id){ onetime = true; }
            else {
                if(onetime){
                    array.push({type: data.type, data: data.data, id: data.id-1});
                }else {
                    array.push(data);
                }
            }
        });
        console.log(array);
        setSelectType([...array]);
    }

    return <>
        <div className="w-full bg-white p-3 border border-solid rounded-md flex flex-col justify-start items-start">
            {
                SelectType.length !== 0 ? <>
                    {
                        SelectType.map((page, i)=>{
                            let data = page.data;
                            return <ContentEditor type={page.type} defaultValue={data.data} id={i+1} value={Inputs} onDelete={DeleteEvent} />
                        })
                    }
                </>: null
            }
        </div>

        <ListPopIndexBox text={"Add Page"} value={AddPage}>
            <li>Title</li>
            <li>Description</li>
            <li>Link</li>
            <li>Points</li>
            <li>Code</li>
            <li>Image</li>
            <li>Video</li>
            <li>Audio</li>
        </ListPopIndexBox>
    </>
}

export default PageBuilder;