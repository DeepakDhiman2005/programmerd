"use client"
import React, { useEffect, useRef, useState } from "react";

// components
import Button from "./Button";

const TimeDisplayWatch = ({start=false, stop=false, reset=false, time=null, end=function(){}}) => {
    // useRef
    const timeRef = useRef(null);
    const Stop = useRef(false);

    // useState
    const [EditTime, setEditTime] = useState(false);
    const [MinuteValue, setMinuteValue] = useState('1');
    const [StopShow, setStopShow] = useState(false);

    // functions
    const MinuteChange = (e) => {
        let text = Math.floor(e.target.value);
        // console.log(text)
        setMinuteValue(text);
        timeRef.current.value = `${text}:00`;
    }

    const StartTimer = () => {
        let text = timeRef.current.value.split(":");
        let m = parseInt(text[0]);
        let s = parseInt(text[1]);

        let timer = setInterval(() => {
            if(Stop.current){
                clearInterval(timer);
            }else {
                if(m <= 0 && s <= 0){
                    clearInterval(timer);
                    end({end: true, time: `${MinuteValue}:00`, minute: parseInt(MinuteValue), originalTime: time});
                    timeRef.current.value = `${MinuteValue}:00`;
                    alert("Time Stop!");
                    setStopShow(true);
                }else if(s <= 0){
                    s = 60;
                    m -= 1;
                    timeRef.current.value = `${m}:${s}`;
                }else {
                    s -= 1;
                    timeRef.current.value = `${m}:${s}`;
                }
            }
        }, 1000);
    }

    useEffect(()=>{
        try{
            if(time !== null){
                if(time.match(/[0-9]:[0-9][0-9]/) || time.match(/[0-9]/)){
                    timeRef.current.value = time;
                }
            }
            if(start && !stop && !reset){
                StartTimer();
            }else {
                setStopShow(true);
            }
            if(stop && !reset){
                Stop.current = true;
                setStopShow(true);
            }
            if(reset !== false){
                if(time !== null){
                    timeRef.current.value = time;
                }else {
                    timeRef.current.value = `${MinuteValue}:00`;
                }
            }
        }catch(err){
            // console.log(err)
        }
    }, [start, stop, reset]);

    return <>
        <div className="flex justify-center items-center bg-white border border-solid rounded-md" style={{display: EditTime ? 'flex': 'none'}}>
            <input type="number" defaultValue={`${MinuteValue}`} onChange={MinuteChange} className="outline-none bg-transparent w-12 text-black text-center" />
            <Button color="green" className="ml-1 shadow-none" onClick={()=>{ setEditTime(false) }}>Change</Button>
        </div>
        <div className="flex justify-center items-center bg-white border border-solid rounded-md" style={{display: EditTime ? 'none': 'flex'}}>
            <input ref={timeRef} placeholder="0:00" title="change time" defaultValue={`${MinuteValue}:00`} type="text" className="outline-none text-black text-center cursor-pointer bg-transparent w-12" onClick={()=>{ 
                setEditTime(true)
                Stop.current = true;
                setStopShow(true);
                end({end: true, time: `${MinuteValue}:00`, minute: parseInt(MinuteValue), originalTime: time});
            }} />
            {
                StopShow ? <Button color="purple" className="ml-1 shadow-none" onClick={()=>{ Stop.current = false; setStopShow(false); StartTimer();
                 }}>Start</Button>:
                <Button color="red" className="ml-1 shadow-none" onClick={()=>{ Stop.current = true; setStopShow(true); }}>Stop</Button>
            }
        </div>
    </>
}

export default TimeDisplayWatch;