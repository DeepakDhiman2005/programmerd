"use client"
import React, { useEffect, useState } from "react";

// icons
import { CiCirclePlus } from "react-icons/ci";

import ProductCardDetails from "./ProductCardDetails";
import ProductPopupCardEditor from "./ProductPopupCardEditor";

const PageEditorDisplay = ({ data={} }) => {
    let title = data.title ? data.title: "";

    // useState
    const [EditorDisplay, setEditorDisplay] = useState({data: {id: 1, data: {}}, popup: false});
    const [EditorList, setEditorList] = useState([]);

    const AddCard = () => {
        setEditorList([...EditorList, {id: EditorList.length+1, data: {}, title: ""}]);
    }

    const CardEdit = (e) => {
        // console.log(e);
        let array = [];
        EditorList.map((card, i)=>{
            if(e.id === i+1){
                array.push({id: card.id, data: e.data, title: e.data.title});
            }else {
                array.push(card);
            }
        })
        // console.log(array)
        setEditorList([...array]);
    }

    const DeleteCard = (e) => {
        // console.log(e)
        let array = [];
        let onetime = false;
        EditorList.map((card, i) => {
            if(e.id !== i+1){
                if(onetime){
                    array.push({id: card.id-1, data: card.data, title: card.title});
                }else {
                    array.push(card);
                }
            }else {
                onetime = true;
            }
        })
        // console.log(array);
        setEditorList([...array]);
    }

    return <>
        {
            EditorDisplay.popup ? <>
                <ProductPopupCardEditor data={EditorDisplay.data} value={(e)=>{
                // console.log(e);
                if(e.edit){
                    CardEdit(e);
                }
                setEditorDisplay({data: {id: data.id, data: data.data}, popup: false});
            }} />
            </>: null
        }

        <div className="flex p-3 flex-col justify-center items-start w-full">
            <h2 className="text-xl text-slate-800 font-semibold">{title}</h2>

            <div className="p-3 bg-white border h-32 border-solid rounded-sm overflow-y-scroll w-full">
                {
                    EditorList.map((data)=> {
                        return <ProductCardDetails title={data.title} id={data.id} data={data.data} onDelete={DeleteCard} value={()=>{setEditorDisplay({data: {id: data.id, data: data.data}, popup: true})}} />
                    })
                }
            </div>
            
            <button className="bg-slate-50 border border-solid flex w-full mt-2 mb-2 justify-center items-center border-slate-500 rounded-md" onClick={AddCard}>
                <CiCirclePlus size={"45px"} className="mt-6 mb-6 text-slate-700" />
                <span className="ml-2 text-slate-800">Add Card</span>
            </button>
        </div>
    </>
}

export default PageEditorDisplay;