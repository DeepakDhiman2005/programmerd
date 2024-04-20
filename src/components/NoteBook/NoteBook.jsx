"use client"
import React, {useEffect, useState} from "react";

// component
import NoteBookPad from "./NoteBookPad";

const NoteBook = ({data=false, range=null, value=function(){}}) => {
    // useState
    const [NoteArea, setNoteArea] = useState([]);

    useEffect(()=>{
        try{
            if(data || data !== null){
                let array = [];
                data.map((data, i)=>{
                    array.push({number: i+1, select: false, defaultValue: data.text});
                })
                setNoteArea([...array]);
            }else {
                setNoteArea([...NoteArea, {number: 1, select: true, defaultValue: ''}]);
            }
        }catch(err){
            setNoteArea([...NoteArea, {number: 1, select: true, defaultValue: ''}]);
        }
    }, [data]);

    // functions
    const fromTextArea = (e) => {
        if(e.event === "Enter"){
            if(NoteArea.length !== range){
                let array = [];
                let j=1;
                let val = [];
                NoteArea.map((data, i) => {
                    if(i === e.number-1){
                        array.push({number: i+j, select: false, defaultValue: data.defaultValue});
                        val.push({text: data.defaultValue, number: i+1});
                        j+=1;
                        array.push({number: i+(j), select: true, defaultValue: ''});
                        val.push({text: '', number: i+1});
                    }else {
                        array.push({number: i+j, select: false, defaultValue: data.defaultValue});
                        val.push({text: data.defaultValue, number: i+1});
                    }
                });
                // console.log(array)
                value(val);
                setNoteArea([...array]);
            }
        }
        else if(e.event === "ArrowUp") {
            let array = [];
            NoteArea.map((data, i)=>{
                if(e.number === 1){
                    if(i === 0){
                        array.push({number: i+1, select: true, defaultValue: data.defaultValue});
                    }else{
                        array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                    } 
                }else {
                    if(i === e.number-2){
                        array.push({number: i+1, select: true, defaultValue: data.defaultValue});
                    }else{
                        array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                    } 
                }
            });
            // console.log(array)
            setNoteArea([...array]);
        }
        else if(e.event === "ArrowDown"){
            let array = [];
            NoteArea.map((data, i)=> {
                if(e.number === NoteArea.length){
                    if(i === e.number-1){
                        array.push({number: i+1, select: true, defaultValue: data.defaultValue});
                    }else{
                        array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                    } 
                }else{
                    if(i === e.number){
                        array.push({number: i+1, select: true, defaultValue: data.defaultValue});
                    }else{
                        array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                    } 
                }
            });
            // console.log(array)
            setNoteArea([...array]);
        }
        else if(e.event === "Backspace"){
            if(e.text === '' && e.number !== 1){
                let array = [];
                let val = [];
                NoteArea.map((data, i)=>{
                    if(i === e.number-1){}
                    else if(i === e.number-2){
                        array.push({number: i+1, select: true, defaultValue: data.defaultValue});
                        val.push({text: data.defaultValue, number: i+1});
                    }
                    else {
                        array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                        val.push({text: data.defaultValue, number: i+1});
                    }
                })
                // console.log(array)
                // console.log(val);
                value(val);
                let onetime = setInterval(() => {
                    setNoteArea([...array]);
                    clearInterval(onetime);
                }, 100);
            }
        }
        else {
            let array = [];
            let val = [];
            NoteArea.map((data, i)=>{
                if(i === e.number-1){
                    array.push({number: i+1, select: true, defaultValue: e.text});
                    val.push({text: e.text, number: i+1});
                }else {
                    array.push({number: i+1, select: false, defaultValue: data.defaultValue});
                    val.push({text: data.defaultValue, number: i+1});
                }
            })
            // console.log(val);
            value(val);
            setNoteArea([...array]);
        }
    }

    return <>
        <div className="flex justify-start flex-col items-center w-full rounded-sm border border-solid border-slate-300 shadow-sm shadow-slate-100 mt-3 mb-3">
            {
                NoteArea.map(({defaultValue, select}, i)=>{
                    return <div className="flex justify-start items-center w-full">
                        <NoteBookPad defaultValue={defaultValue} number={i+1} select={select} value={fromTextArea} />
                    </div>
                })
            }
        </div>
        
    </>
}

export default NoteBook;