"use client"
import React, { useRef, useState } from "react";

// icons
import { FaUndo } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai"; // sound open
import { AiOutlineSound } from "react-icons/ai"; // sound close

import Typingwriter from "@/components/TypingComp/Typingwriter";
import Button from "@/components/Button";
import OnOff from "@/components/Buttons/OnOff";
import TimeDisplayWatch from "@/components/TimeDisplayWatch";
import getCurrentDate from "@/components/Functions/getCurrentDate";

const TypingPage = () => {
    // useState
    const [StartTyping, setStartTyping] = useState(false);
    const [SoundShow, setSoundShow] = useState(true);

    const [NoOfChar, setNoOfChar] = useState(0); // number of characters typed
    const [TimeTaken, setTimeTaken] = useState(1); // Total Time Taken (minutes)

    // useRef
    const textRef = useRef(null);
    const NumberOfChar = useRef(0);
    
    let collection = [
        `Computers are sophisticated electronic devices designed to process, store, and retrieve data quickly and efficiently. They operate on the principles of binary logic, where data is represented using combinations of ones and zeros. Modern computers consist of several key components, including a central processing unit (CPU), memory (RAM), storage devices (such as hard drives or solid-state drives), input devices (like keyboards and mice), and output devices (such as monitors and printers).The CPU is often referred to as the "brain" of the computer, as it executes instructions and performs calculations. It consists of multiple cores that can handle tasks simultaneously, enabling multitasking capabilities. Memory, or RAM, temporarily stores data and instructions that the CPU needs to access quickly. Storage devices, on the other hand, provide long-term storage for programs and data even when the computer is turned off.`,

        `Input devices allow users to interact with the computer by inputting data or commands, while output devices display or present the results of those inputs. Together, these components work seamlessly to enable various computing tasks, from simple arithmetic calculations to complex data analysis and graphic rendering. Computers rely on operating systems (OS) to manage hardware resources and provide a user-friendly interface for interacting with the system. Popular operating systems include Microsoft Windows, macOS, and various distributions of Linux. Additionally, software applications enable users to perform specific tasks, such as word processing, web browsing, or image editing.`,

        `Programming is a vast field with endless possibilities! Whether you're interested in web development, mobile app development, game design, data analysis, artificial intelligence, or anything else, programming is at the heart of it. It's essentially the process of creating instructions for a computer to follow in order to perform a specific task. Programming is a vast field with endless possibilities! Whether you're interested in web development, mobile app development, game design, data analysis, artificial intelligence, or anything else, programming is at the heart of it. It's essentially the process of creating instructions for a computer to follow in order to perform a specific task.`,

        `Getting started with programming usually involves learning the basics of a programming language, understanding key concepts like variables, loops, conditionals, and functions, and then gradually building on that knowledge as you tackle more complex projects. Whether you're a beginner or an experienced programmer, there's always something new to learn in the ever-evolving world of programming!`
    ]


    const [ResetValue, setResetValue] = useState(0);
    const [TextValue, setTextValue] = useState(collection[0])

    // functions
    const SelectTextFile = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e){
            const text = e.target.result;
            // console.log(text)
            setTextValue(text);
        }
        reader.readAsText(file);
        textRef.current.value = "";
    }
    
    return <>
    <div className="w-full p-3 flex-col flex justify-center items-center bg-slate-50">
        <div className="w-full bg-blue-600 text-white flex justify-between items-center rounded-t-md p-3">
            <h2>programmerd.in</h2>
            <div className="flex justify-center items-center">
                <TimeDisplayWatch start={StartTyping} reset={ResetValue} end={(e)=>{
                    console.log(e);
                    setTimeTaken(e.minute);
                    console.log(NumberOfChar.current);
                    console.log(e.minute);
                    // setResetValue(ResetValue + 1);
                    console.log(NumberOfChar.current/(e.minute*5));
                    setResetValue(ResetValue + 1);
                }} />
                <FaUndo title="retry" size={"13px"} className="ml-2 cursor-pointer" onClick={()=>{
                    // console.log("reset")
                    let value = collection[Math.floor(Math.random()*(collection.length-1))];
                    setResetValue(ResetValue + 1);
                    setTextValue(value);
                    setStartTyping(false);
                }} />
            </div>
        </div>

        <Typingwriter reset={ResetValue} Sound={SoundShow} onChange={(e)=>{
            NumberOfChar.current = e;
        }} value={(e)=>{
            setStartTyping(e.start);
        }}>
            {TextValue}
        </Typingwriter>

        <div className='w-full bg-white p-3 border border-solid border-white shadow-md shadow-slate-300 mt-4 rounded-md flex justify-start items-start flex-col'>
            <h2 className="text-2xl font-semibold text-slate-800">Settings</h2>
            <div className="flex justify-around items-center w-full mt-3 mb-3">
                <h2>Upload Custom Text</h2>
                <Button color="purple" className="rounded-sm" onClick={()=>{ textRef.current.click() }}>Upload Custom Text</Button>
                <input ref={textRef} type="file" className="hidden" onChange={SelectTextFile} accept="text/plain" />
            </div>

            <div className="flex justify-around items-center w-full mt-3 mb-3">
                <h2>Select Level</h2>
                <select className="outline-none border-2 rounded-sm cursor-pointer border-solid border-slate-200">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="flex justify-around items-center w-full mt-3 mb-3">
                <div className="flex justify-center items-center">
                    {
                        SoundShow ? <h2>Sound</h2>: <h2>No Sound</h2>
                    }
                    {
                        SoundShow ? <AiFillSound className="ml-1" size={"15px"} />:
                        <AiOutlineSound className="ml-1" size={"15px"} />
                    }
                </div>
                <OnOff defaultValue={SoundShow} value={(e) => { setSoundShow(e) }} />
            </div>

            <div className="flex justify-center flex-col items-center w-full">
                <h2 className="text-slate-800 font-semibold border-b w-full p-3 text-center border-solid text-xl">Score ({getCurrentDate()})</h2>
                <div className="flex justify-around items-center mt-2 mb-2 w-full">
                    <h2 className="text-lg text-slate-800">Total Words:</h2>
                    <h2 className="font-semibold">{NumberOfChar.current}</h2>
                </div>

                <div className="flex justify-around items-center mt-2 mb-2 w-full">
                    <h2 className="text-lg text-slate-800">Typing Speed:</h2>
                    <h2 className="font-semibold">{NumberOfChar.current/(TimeTaken*5)}</h2>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default TypingPage;