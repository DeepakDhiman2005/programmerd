"use client"
import React, { useState } from "react";

// icons
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// components
import InputBoxTag from "@/components/Inputs/InputBoxTag";
import PageBuilder from "./PageBuilder";
import PagesTopBar from "./PagesTopBar";
import Button from "@/components/Button";
import ConfirmCard from "@/components/ConfirmCard";

const PagesEditor = () => {
    // useState
    const [AddText, setAddText] = useState(false);
    const [TextValue, setTextValue] = useState("");
    const [ConfirmDisplay, setConfirmDisplay] = useState(false);
    const [ConfirmMessage, setConfirmMessage] = useState("");

    const [PageList, setPageList] = useState(["overview"]);
    const [PageNoteList, setPageNoteList] = useState([]);
    const [PageName, setPageName] = useState("overview");

    const InputPageNameText = () => {
        if(AddText){
            setAddText(false);
        }else {
            setAddText(true);
        }
    }

    const onPageNameClick = (e) =>{
        // console.log(e);
        setPageName(e);
    }

    const AddPageEvent = () => {
        setPageList([...PageList, TextValue]);
        setAddText(false);
    }

    const DeletePageEvent = () => {
        setConfirmMessage(`Are You Sure Delete for ${PageName} Topic?`);
        setConfirmDisplay(true);
    }

    const PageNote = (e) => {
        setPageNoteList(e);
    }

    return <>
        <div className="w-full p-4 flex flex-col justify-start items-start">
            <ConfirmCard display={ConfirmDisplay} message={ConfirmMessage} value={(e)=>{
                setConfirmDisplay(false);
            }} />
            <div className="flex justify-start items-center">
                <PagesTopBar value={onPageNameClick}>
                    {
                        PageList.map((page_name)=>{
                            return <li>{page_name}</li>
                        })
                    }
                </PagesTopBar>

                <div className="flex justify-start items-center ml-3">
                    {
                        AddText ? <input type="text" className="outline-none border-b border-purple-600 border-solid" placeholder="Add Topic..." onChange={(e)=>{setTextValue(e.target.value)}} onKeyDown={(e)=>{ if(e.key === "Enter"){ AddPageEvent() } }} />: null
                    }

                    <Button color="green" className="ml-3" onClick={InputPageNameText}>
                        {
                            AddText ? <FaMinus size={"15px"} />: <FaPlus size={"15px"} />
                        }
                    </Button>
                </div>
            </div>

            <InputBoxTag defaultValue={PageName} title="Title" />
            <PageBuilder value={PageNote} />

            <div className="flex justify-start items-center">
                <Button color="purple">Save</Button>
                <Button color="red" className="ml-2" onClick={DeletePageEvent}>Delete</Button>
            </div>
        </div>
    </>
}

export default PagesEditor;