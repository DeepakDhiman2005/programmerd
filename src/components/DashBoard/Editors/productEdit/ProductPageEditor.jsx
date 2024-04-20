"use client"
import React, { useEffect, useRef, useState } from "react";

// icons
import { LuImagePlus } from "react-icons/lu";

// next
import Image from "next/image";

// components
import Button from "@/components/Button";
import PopUpElement from "@/components/PopUpElement";
import ImageTypeSelector from "@/components/Inputs/ImageTypeSelector";

const ProductPageEditor = ({ image = "", title = "", id, onClick = function () { }, onChange = function () { } }) => {
    // useRef
    const titleRef = useRef(null);

    // useState
    const [Popup, setPopup] = useState(false);
    const [Img, setImg] = useState("");

    useEffect(() => {
        try {
            if (title !== "") {
                titleRef.current.value = title;
                titleRef.current.focus();
            }
            if(image !== ""){
                setImg(image);
            }
        } catch (err) { }
    }, [title, image]);

    // functions
    const SelectImage = (e) => {
        if(typeof e === "string"){
            setImg(e);
        }else {
            const reader = new FileReader();
                reader.onload = function (event) {
                    const imageUrl = event.target.result;
                    setImg(imageUrl);
                }
                reader.readAsDataURL(e);
        }
    }

    return <>
        <PopUpElement popup={Popup} value={() => { setPopup(false) }}>
            <div className="w-3/4">
                <ImageTypeSelector defaultValue={image !== "" ? image: null} value={SelectImage} />
            </div>
        </PopUpElement>

        <div key={title} className="flex w-full mt-3 hover:border-green-600 mb-3 justify-start items-center border bg-white border-solid rounded-sm p-4">
            {
                Img !== "" ? <Image src={Img !== "" ? Img : "/logo.svg"} alt="image" width={50} height={50} className="ml-2 cursor-pointer mr-2" onClick={()=>{setPopup(true)}} /> : <>
                    <button className="p-2 cursor-pointer text-slate-700 ml-2 mr-2" onClick={() => { setPopup(true) }}>
                        <LuImagePlus size={"25px"} />
                    </button>
                </>
            }

            <input ref={titleRef} type="text" placeholder="Page title..." onChange={(e) => {
                onChange({ title: e.target.value, value: "title", id: id });
            }} className="outline-none ml-3 w-full" />

            <div className="flex justify-center items-center">
                <Button color="purple" className="rounded-sm" onClick={() => {
                    onClick({ value: "edit", title: titleRef.current.value, id: id });
                }}>Edit</Button>
                <Button color="red" className="ml-2 rounded-sm" onClick={() => {
                    onClick({ value: "delete", title: titleRef.current.value, id: id });
                }}>Delete</Button>
            </div>
        </div>
    </>
}

export default ProductPageEditor;