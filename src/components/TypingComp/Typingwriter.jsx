"use client"
import React, { useEffect, useRef, useState } from 'react';

const Typingwriter = ({ reset=0, Sound=true, children, value, onChange }) => {
    // variable
    const RightType = "text-2xl m-0.5 border-b-2 border-solid border-transparent transition-all bg-green-100 text-green-400 rounded-sm";
    const WrongType = "text-2xl m-0.5 border-b-2 border-solid border-transparent transition-all bg-red-100 text-red-400 rounded-sm";
    const SelectType = "text-2xl m-0.5 text-blue-500 border-b-2 border-solid animate-bottom-line border-b-blue-500";
    const Simple = "text-2xl m-0.5 border-b-2 border-solid border-transparent text-slate-800";
    // useRef
    const TypeWriter = useRef(null);
    const TagPost = useRef(0);

    // useState
    const [TextArray, setTextArray] = useState([]);
    const [Count, setCount] = useState(0);

    const KeyEvent = (e) => {
        // console.log(e);
        value({ start : true });
        try {
            const sound = new Audio();

            if (e.key.length === 1 || e.key === "Space") {
                let tagName = TypeWriter.current.getElementsByTagName("div")[TagPost.current];
                if (tagName.innerText === e.key && !tagName.ariaValueText) {
                    tagName.className = RightType;
                    sound.src = "/sound/right.mp3";
                } else if (e.key === " " && tagName.ariaValueText === "space") {
                    tagName.className = "text-transparent" + " " + RightType;
                    tagName.innerHTML = "S";
                    sound.src = "/sound/right.mp3";
                    onChange(Count+1);
                    setCount(Count+1);
                } else {
                    if(tagName.ariaValueText === "space"){
                        tagName.innerHTML = "S";
                        tagName.attributes.after.value = e.key;
                        tagName.className = "text-transparent" + " " +  WrongType + " " + "after:content-[attr(after)] after:animate-bottom-down top-0 right-0 after:absolute relative after:w-5 after:h-5 flex justify-center items-center";
                        let onetime = setInterval(()=>{
                            clearInterval(onetime);
                            tagName.className = "text-transparent" + " " + WrongType;
                        }, 500);
                    }else{
                        tagName.attributes.after.value = e.key;
                        tagName.className = WrongType + " " + "after:content-[attr(after)] after:animate-bottom-down top-0 right-0 after:absolute relative after:w-5 after:h-5 flex justify-center items-center";
                        let onetime = setInterval(()=>{
                            clearInterval(onetime);
                            tagName.className = WrongType;
                        }, 500);
                    }
                    sound.src = "/sound/wrong.mp3";
                }
                if(Sound){
                    sound.play();
                }

                try {
                    let afterName = TypeWriter.current.getElementsByTagName("div")[TagPost.current + 1];
                    if(afterName.ariaValueText === "space"){
                        afterName.className = "text-transparent " +SelectType;
                    }else{
                        afterName.className = SelectType;
                    }
                    TagPost.current += 1;
                } catch (err) {
                    TagPost.current = children.length-1;
                    tagName.className = SelectType;
                }
            } else if (e.key === "Backspace") {                    
                let tagName = TypeWriter.current.getElementsByTagName("div")[TagPost.current];
                if(tagName.ariaValueText === "space"){
                    tagName.className = "text-transparent " +Simple;
                    tagName.innerHTML = "S";
                }else{
                    tagName.className = Simple;
                }

                sound.src = "/sound/right.mp3";
                if(Sound){
                    sound.play();
                }
                try {
                    let beforeName = TypeWriter.current.getElementsByTagName("div")[TagPost.current - 1];
                    if(beforeName.ariaValueText === "space"){
                        beforeName.className = "text-transparent " +SelectType;
                        beforeName.innerHTML = "S";
                        onChange(Count-1);
                        setCount(Count-1);
                    }else{
                        beforeName.className = SelectType;
                    }
                    TagPost.current -= 1;
                } catch (err) {
                    TagPost.current = 0;
                    tagName.className = SelectType;
                }
            }
        } catch (err) {
            // console.log(err);
        }
    }

    const SelectBox = () => {
        try{
            let typewriter = document.getElementById("typewriter");
            typewriter.focus();
        }catch(err){ }
    }

    useEffect(() => {
        try {
            // console.log(children.split(" "));
            setCount(0);
            setTextArray([])
            if (typeof children === "string") {
                let array = [];
                for (let i = 0; i < children.length; i++) {
                    array.push(children[i]);
                }
                // console.log(array)
                if(array.length > 700){
                    array = array.slice(0, 700);
                    setTextArray([...array]);
                }else {
                    setTextArray([...array]);
                }
                for(let i=0; i < array.length; i++){
                    let tagName = TypeWriter.current.getElementsByTagName("div")[i];
                    if(i === 0){
                        tagName.className='text-2xl m-0.5 text-blue-500 border-b-2 border-solid animate-bottom-line border-b-blue-500';
                    }else {
                        if(tagName.ariaValueText === "space"){
                            tagName.className="text-2xl m-0.5 border-b-2 border-solid border-transparent text-slate-800 text-transparent";
                        }else{
                            tagName.className = "text-2xl m-0.5 border-b-2 border-solid border-transparent text-slate-800";
                        }
                    }
                }
            }
            TagPost.current = 0;
        } catch (err) {
            // console.log(err)
        }    
    }, [children, reset]);

    return <>
        <div ref={TypeWriter} className='w-full bg-white p-3 border border-white border-solid rounded-md flex justify-start items-center flex-wrap cursor-pointer' onClick={SelectBox}>
        <input type="text" id='typewriter' className='w-0 h-0 outline-none' placeholder='type writer...' onKeyDown={KeyEvent} />
            {
                TextArray.map((text, i) => {
                    if (i === 0) {
                        return <div after={text} title='Start Typing!' className='text-2xl m-0.5 text-blue-500 border-b-2 border-solid animate-bottom-line border-b-blue-500'>{text}</div>
                    } else {
                        if(text === " " || text === "&nbsq;"){
                            return <div after={text} className="text-2xl m-0.5 border-b-2 border-solid border-transparent text-slate-800 text-transparent" aria-valuetext='space'>S</div>
                        }else{
                            return <div after={text} className="text-2xl m-0.5 border-b-2 border-solid border-transparent text-slate-800">{text}</div>
                        }
                    }
                })
            }
        </div>
    </>
}

export default Typingwriter;