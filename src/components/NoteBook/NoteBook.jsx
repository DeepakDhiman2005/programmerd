"use client"
import React, {useEffect, useState} from "react";

// function
import StringToNumber from "../Functions/StringToNumber";

// component
import NoteInputField from "./NoteInputField";
import NoteNumberField from "./NoteNumberField";

const NoteBook = ({unique="", data=false, value=function(){}}) => {
    // useState
    const [NoteNumber, setNoteNumber] = useState([]);
    const [NoteText, setNoteText] = useState([]);

    useEffect(()=>{
        if(NoteNumber.length === 0 && NoteText.length === 0){
            if(data){
                let _array = [];
                for(let i=0; i < data.length; i++){
                    _array.push(i+1);
                }
                setNoteNumber([..._array]);
                setNoteText([...data]);
            }else{
                setNoteNumber([...NoteNumber, 1]);
                setNoteText([...NoteText, {number: 1, text: ""}]);
            }
            
        }
        // console.log(notebook.current)
        value(NoteText)
    }, [NoteText]);

    // function
    const WriteText = (e) => {
        let _id = e.target.id;
        let _val = e.target.value;
        // console.log(_id, _val);
        let afterId = StringToNumber(_id);

        try{
            if(e.key === "Enter"){
                let _array = [];
                let _array2 = [];
                let onetime = false;
                let num = parseInt(afterId.number[0]) + 1;

                if(NoteText.length === num-1){
                    setNoteNumber([...NoteNumber, NoteNumber.length+1]);
                    setNoteText([...NoteText, {number: NoteNumber.length+1, text: ""}]);
                }else{
                    NoteText.map((data, i)=>{
                        if(data.number === num-1){
                            _array.push({number: data.number, text: data.text});
                            _array2.push(_array2.length+1);
                            _array.push({number: data.number+1, text: ""});
                            _array2.push(_array2.length+1);
                            onetime = true;
                        }else{
                            if(onetime){
                                _array.push({number: data.number+1, text: data.text});
                                _array2.push(_array2.length+1);
                            }else{
                                _array.push({number: data.number, text: data.text});
                                _array2.push(_array2.length+1);
                            }
                        }
                    })
                    // console.log(_array, _array2);
                    setNoteNumber([..._array2]);
                    setNoteText([..._array]);
                }

                let getID = afterId.string[0] + num;
                // console.log(getID);
    
                let ine = setInterval(() => {
                    let _seleted = document.getElementById(getID);
                    _seleted.focus();
                    clearInterval(ine)
                }, 50);
            }
            else if(e.key === "ArrowUp"){
                let num = parseInt(afterId.number[0]) - 1;
                let getID = afterId.string[0] + (num === -1 ? 0: num);
                let _seleted = document.getElementById(getID);
                _seleted.focus();
            }
            else if(e.key === "ArrowDown"){
                let num = parseInt(afterId.number[0]) + 1;
                let getID = afterId.string[0] + num;
                let _seleted = document.getElementById(getID);
                _seleted.focus();
            }
            else if(e.key === "Backspace"){
                if(_val.length === 0 && _val === ""){
                    let _array = [];
                    let _array2 = [];
                    let onetime = false;
                    NoteText.map((data, i)=>{
                        if(data.number === parseInt(afterId.number[0])){ 
                            onetime = true;
                        }else{
                            if(onetime){
                                _array.push({number: data.number-1, text: data.text});
                            }else{
                                _array.push({number: data.number, text: data.text});
                            }
                            _array2.push(_array2.length+1);
                        }
                    })
                    // console.log(_array, _array2);
                    if(_array.length >= 1 && _array2.length >= 1){
                        setNoteNumber([..._array2]);
                        setNoteText([..._array]);
                    }

                    let num = parseInt(afterId.number[0]) - 1;
                    let getID = afterId.string[0] + (num === -1 ? 0: num);
                    let _seleted = document.getElementById(getID);
                    _seleted.focus();
                }
                else{
                    let _array = [];
                    NoteText.map((data, i)=>{
                        if(data.number === parseInt(afterId.number[0])){
                            _array.push({number: data.number, text: _val});
                        }else{
                            _array.push(data);
                        }
                    })
                    setNoteText([..._array]);
                }
            }
            else{
                let _array = [];
                NoteText.map((data, i)=>{
                    if(data.number === parseInt(afterId.number[0])){
                        _array.push({number: data.number, text: _val});
                    }else{
                        _array.push(data);
                    }
                })
                // console.log(_array);
                setNoteText([..._array]);
            }
        }catch(err){}
    }

    return <>
        <div className="flex justify-start items-center w-full rounded-sm border border-solid border-slate-300 shadow-sm shadow-slate-100 mt-3 mb-3 h-full">
            {/* side 1 */}
            <div className="flex flex-col justify-center items-center w-[10%] bg-slate-100">
                {
                    NoteNumber.map((data, i)=>{
                        return <NoteNumberField id={"notebook" + unique + (i+1)} number={i+1} />
                    })
                }
            </div>
            {/* side 2 */}
            <div className="flex flex-col justify-start items-start w-[90%] bg-white">
                {
                    NoteText.map((data, i)=>{
                        return <NoteInputField id={"notebook" + unique + (i+1)} value={WriteText} defaultValue={data.text} />
                    })
                }
            </div>
        </div>
        
    </>
}

export default NoteBook;