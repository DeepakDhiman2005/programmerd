"use client"
import React, { useRef, useState } from "react";

// icons
import { FaUndo } from "react-icons/fa";

import Typingwriter from "@/components/TypingComp/Typingwriter";

const TypingPage = () => {
    // useState
    const [StartTyping, setStartTyping] = useState(false);

    
    let collection = [
        `Computers are sophisticated electronic devices designed to process, store, and retrieve data quickly and efficiently. They operate on the principles of binary logic, where data is represented using combinations of ones and zeros. Modern computers consist of several key components, including a central processing unit (CPU), memory (RAM), storage devices (such as hard drives or solid-state drives), input devices (like keyboards and mice), and output devices (such as monitors and printers).The CPU is often referred to as the "brain" of the computer, as it executes instructions and performs calculations. It consists of multiple cores that can handle tasks simultaneously, enabling multitasking capabilities. Memory, or RAM, temporarily stores data and instructions that the CPU needs to access quickly. Storage devices, on the other hand, provide long-term storage for programs and data even when the computer is turned off.`,

        `Input devices allow users to interact with the computer by inputting data or commands, while output devices display or present the results of those inputs. Together, these components work seamlessly to enable various computing tasks, from simple arithmetic calculations to complex data analysis and graphic rendering. Computers rely on operating systems (OS) to manage hardware resources and provide a user-friendly interface for interacting with the system. Popular operating systems include Microsoft Windows, macOS, and various distributions of Linux. Additionally, software applications enable users to perform specific tasks, such as word processing, web browsing, or image editing.`
    ]


    // useRef
    const timer = useRef(null);
    const timer_func = useRef(null);

    const [ResetValue, setResetValue] = useState(0);
    const [TextValue, setTextValue] = useState(collection[0])

    // function
    const Start_Timer = () => {
        try{
            if(!StartTyping){
                let time = timer.current.value.split(":");
                let m = parseInt(time[0]);
                let s = parseInt(time[1]);
                timer_func.current = setInterval(() => {
                    if(s === 0){
                        if(m !== 0){
                            m -= 1;
                            s = 60
                        }else {
                            alert("stop!");
                            clearInterval(timer_func.current);
                            timer.current.value = `1:00`;
                            setResetValue(true);
                        }
                    }else {
                        timer.current.value = `${m}:${s}`;
                        s -= 1;
                    }
                }, 1000);
            }
        }catch(err){
        }
    }

    return <>
    <div className="w-full p-3 flex-col flex justify-center items-center bg-slate-50">
        <div className="w-full bg-blue-600 text-white flex justify-between items-center rounded-t-md p-3">
            <h2>programmerd.in</h2>
            <div className="flex justify-center items-center">
                <input ref={timer} placeholder="0:00" defaultValue={"1:00"} type="text" className="outline-none bg-transparent w-12" />
                <FaUndo title="retry" size={"13px"} className="ml-2 cursor-pointer" onClick={()=>{
                    console.log("reset")
                    let value = collection[Math.floor(Math.random()*2)];
                    setResetValue(ResetValue + 1);
                    setTextValue(value);
                    clearInterval(timer_func.current);
                    setStartTyping(false);
                    timer.current.value = `1:00`;
                }} />
            </div>
        </div>

        <Typingwriter reset={ResetValue} value={(e)=>{
            setStartTyping(e.start);
            Start_Timer();
        }}>
            {TextValue}
        </Typingwriter>

        <div className='w-full bg-white p-3 border border-solid border-white rounded-md flex justify-start items-center'>

        </div>
    </div>
    </>
}

export default TypingPage;