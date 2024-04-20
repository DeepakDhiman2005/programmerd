"use client"
import React, {useEffect, useState} from "react";

// icons
import { CiCirclePlus } from "react-icons/ci";

// functions
import { ALPHAID } from "../Functions/UNIQUEID";

// components
import ProductPageEditor from "./Editors/productEdit/ProductPageEditor";
import PopUpElement from "../PopUpElement";
import PageEditorDisplay from "./Editors/productEdit/PageEditorDisplay";

const DashBoardProducts = () => {
    // useState
    const [PagesArea, setPagesArea] = useState([{image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/d/o/v15-g4-thin-and-light-laptop-lenovo-original-imagq57gsgyxxasy.jpeg?q=70", title: "Laptops", id: 1}]);

    const [Popup, setPopup] = useState(false);
    const [PageValue, setPageValue] = useState({});

    // functions
    const AddPage = () => {
        // console.log("add page!")
        setPagesArea([...PagesArea, {image: "", title: "", id: PagesArea.length+1}]);
    }

    const ChangeEvent = (e) => {
        // console.log(e)
        let array = [];
        PagesArea.map((page, i)=>{
            if(e.id === i+1){
                array.push({image: page.image, title: e.title, id: page.id});
            }else {
                array.push(page);
            }
        });
        // console.log(array);
        setPagesArea([...array]);
    }

    const ClickEvent = (e) => {
        if(e.value === "delete"){
            let array = [];
            let onetime = false;

            PagesArea.map((page, i)=>{
                if(e.id !== i+1){
                    if(onetime){
                        array.push({image: page.image, title: page.title, id: page.id-1});
                    }else {
                        array.push(page);
                    }
                }else {
                    onetime = true;
                }
            });
            // console.log(array);
            setPagesArea([...array]);
        }
        else if(e.value === "edit"){
            let getPage = null;
            PagesArea.map((page, i)=>{
                if(e.id == i+1){
                    getPage = page;
                }
            })
            setPageValue(getPage);
            setPopup(true);
        }
    }

    return <>
        <PopUpElement popup={Popup} value={(e)=>{setPopup(e)}}>
            <PageEditorDisplay data={PageValue} />
        </PopUpElement>

        <div className="w-full">
            {
                PagesArea.length !== 0 ? PagesArea.map((page, i)=>{
                    return <ProductPageEditor id={i+1} key={`${ALPHAID()}`+page.title} image={page.image} title={page.title} onChange={ChangeEvent} onClick={ClickEvent} />
                }): <h2>Pages Found Available!</h2>
            }
        </div>

        <button className="bg-slate-50 border border-solid flex w-full mt-2 mb-2 justify-center items-center border-slate-500 rounded-md" onClick={AddPage}>
            <CiCirclePlus size={"45px"} className="mt-6 mb-6 text-slate-700" />
            <span className="ml-2 text-slate-800">Add Page</span>
        </button>
    </>
}

export default DashBoardProducts;