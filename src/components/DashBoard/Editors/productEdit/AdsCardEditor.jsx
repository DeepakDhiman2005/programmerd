"use client"
import React, {useEffect, useState} from "react";

// components
import InputBoxTag from "@/components/Inputs/InputBoxTag";
import ImageTypeSelector from "@/components/Inputs/ImageTypeSelector";
import DescriptionBoxTag from "@/components/Inputs/DescriptionBoxTag";
import NoteBook from "@/components/NoteBook/NoteBook";
import Button from "@/components/Button";

const AdsCardEditor = ({data=null, value=function(){}}) => {
    // useState
    const [Title, setTitle] = useState("");
    const [Href, setHref] = useState("");
    const [Desc, setDesc] = useState("");
    const [Details, setDetails] = useState(null);
    const [Img, setImg] = useState(null);

    const [UID, setUID] = useState(null);
    const [Method, setMethod] = useState(false);

    const OverView = () => {
        try{
            let data = {
                title: Title,
                href: Href,
                desc: Desc,
                image: Img,
                details: {key: Details[0].text, value: Details[1].text}
            }
            value({ overview: true, data: data });
        }catch(err){
            alert("Check of points(2) and Image (data)!");
        }
    }

    const Submit = () => {
        let data = {
            title: Title,
            href: Href,
            desc: Desc,
            image: Img,
            details: {key: Details[0].text, value: Details[1].text}
        }
        value({data: data, method: Method ? Method: "add", submit: true, id: UID});
    }

    useEffect(()=>{
        try{
            if(data !== null){
                let dt = data.data;
                setTitle(dt.tile);
                setDesc(dt.desc);
                setImg(dt.image);
                setHref(dt.href);
                setDetails(dt.details);

                setUID(data._id);
                setMethod("edit");
            }
        }catch(err){}
    }, [data]);
    
    return <>
        <InputBoxTag title={"Title"} defaultValue={Title} onChange={(e)=>{ setTitle(e.target.value) }} />
        <InputBoxTag title={"Href"} defaultValue={Href} onChange={(e)=>{ setHref(e.target.value) }} />
        <ImageTypeSelector defaultValue={Img} value={(e)=> { setImg(e) }} />
        <DescriptionBoxTag defaultValue={Desc} onChange={(e)=>{ setDesc(e.target.value) }} />
        <h2 className="mt-1">Details:</h2>
        <NoteBook data={Details} value={(e)=>{ setDetails(e) }} range={2} />

        <div className="flex justify-start items-center">
            <Button color="purple" className="mr-2" onClick={Submit}>Submit</Button>
            <Button color="blue" onClick={OverView}>Overview</Button>
        </div>
    </>
}

export default AdsCardEditor;