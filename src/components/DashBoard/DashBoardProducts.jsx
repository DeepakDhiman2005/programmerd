"use client"
import React, {useState, useEffect} from "react";

// component
import Card from "../Card";
import RightClickInfoIndex from "./Editors/RightClickInfoIndex";
import ConfirmCard from "../ConfirmCard";

const DashBoardProducts = ({getData, value=function(){}}) => {
    const [Data, setData] = useState([]);
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [ConfirmMessage, setConfirmMessage] = useState("");

    const func = async () => {
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();
        // console.log(data);
        setData(data);
    }

    useEffect(()=>{
        func();
    }, [getData]);

    return <>
        <ConfirmCard display={ConfirmDisplay} message={ConfirmMessage} value={(e)=>{
            // console.log(e);
            if(e){
                setConfirmDisplay(false);
            } else{ setConfirmDisplay(false); }
        }} />

        <div className="flex flex-col justify-center items-center">
            <section className="flex justify-between w-full items-center mb-10">
                <div className="text-lg cursor-pointer hover:text-purple-700">
                    <h2>Products ({Data ? Data.length: "0"})</h2>
                </div>
                <div className="flex justify-start items-start ml-2">
                    <button className="flex items-center justify-between text-white bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition w-fit cursor-pointer selection:text-white mr-3" onClick={()=>{
                        value({editor: true});
                    }}>Add Product</button>
                </div>
            </section>
            <div className="flex flex-wrap justify-center items-center">
                {
                    Data.map((value, index)=>{
                        return <Card key={value.id} title={value.title} desc={value.desc} button={"View"} src={value.image} href={value.href} /> 
                    })
                }
            </div>
            <RightClickInfoIndex value={(e)=>{
                // console.log(e);
                let type = e.type.toLowerCase();
                if(type === "edit"){
                    value({editor: true, data: e.children, type: e.children.type.name});
                } else if(type === "delete"){
                    // console.log("delete");
                    setConfirmMessage("Are Your Sure Delete of This Card");
                    setConfirmDisplay(true);
                } else if(type === "hide"){

                } else if(type === "details"){

                }
            }}>
                <Card title={"Basic Info Index"} desc={"Product card in dashboard!"} button={"View"} src={"/logo.svg"} />
            </RightClickInfoIndex>
        </div>
    </>
}

export default DashBoardProducts;