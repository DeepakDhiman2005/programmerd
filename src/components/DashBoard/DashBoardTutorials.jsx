"use client"
import React from "react";
import axios from "axios";

// components
import Button from "../Button";

const getTutorialData = async () => {
    let resp = await axios.get("/api/tutorials/", { cache: "no-store" });
    return resp.data;
}

const DashBoardTutorials = ({ value=function(){} }) => {
    return <>
        <div className="w-full mt-4 mb-4 flex justify-between items-center">
            <h2 className="text-lg text-slate-800">Tutorials (0)</h2>
            <Button onClick={()=>{ value({editor: true}) }}>Add Tutorial</Button>
        </div>
    </>
}

export default DashBoardTutorials;