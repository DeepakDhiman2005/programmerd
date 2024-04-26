"use client"
import React, { useEffect, useRef } from "react";

/**
 * @param props = children, type="programming language", stylelist={}
 * children => <li>write code?</li>
 * let stylelist = {
 *          _string: "text-amber-500",
 *           _func: "text-yellow-300",
 *           _key: "text-blue-300",
 *           _class: "text-blue-400",
 *           _tag: "text-blue-500"
 *       }
 *   @example <CodeHighlighter type="python" array={ [<li> array define] } > 
 *           <li>print("Hello world!"); # this is print function</li>
 *   </CodeHighlighter>
 */
const CodeHighlighter = ({ children, array = false, type = "html", stylelist = {
    _string: "text-amber-500",
    _func: "text-yellow-300",
    _key: "text-blue-300",
    _class: "text-blue-400",
    _tag: "text-blue-500",
    _comment: "text-green-600"
} }, key = null) => {
    // useRef
    const codeText = useRef(null);
    const buttonRef = useRef(null);
    const bodyRef = useRef(null);

    // function
    const CopyEvent = async () => {
        let _text = codeText.current.innerText;
        await navigator.clipboard.writeText(_text);

        buttonRef.current.innerText = "copied";
        let sometime = setInterval(() => {
            try {
                buttonRef.current.innerText = "copy";
                clearInterval(sometime);
            } catch (err) { }
        }, 500);
    }

    // high lighter function
    const highlighter = (_text_, lang, stylelist = { _string: "", _func: "", _key: "", _tag: "", _class: "", _comment: "" }) => {
        // console.log(_text);
        let { _string, _func, _key, _tag, _class, _comment } = stylelist;

        let tags = ``;
        if (lang.toLowerCase() === "python" || lang.toLowerCase() === "javascript" || lang.toLowerCase() === "c" || lang.toLowerCase() === "cpp" && lang.toLowerCase() === "java") {
            for (let j = 0; j < _text_.length; j++) {
                let value = ``;
                let text = _text_[j];
                let _dispatch = "";
                let Qmark = false;
                let SQmark = false;
                let backtick = false;
                let comment = false;

                for (let i = 0; i < text.length; i++) {
                    // Qmark
                    if (text[i] === '"' && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        Qmark = true;
                        value += `<span class="${_string}">"`
                        _dispatch = ``;
                    }
                    else if (text[i] === '"' && Qmark === true && SQmark === false && backtick === false && comment === false) {
                        Qmark = false;
                        value += `${_dispatch}"</span>`
                        _dispatch = ``;
                    }
                    // SQmark
                    else if (text[i] === "'" && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        SQmark = true;
                        value += `<span class="${_string}">'`
                        _dispatch = ``;
                    }
                    else if (text[i] === "'" && Qmark === false && SQmark === true && backtick === false && comment === false) {
                        SQmark = false;
                        value += `${_dispatch}'</span>`
                        _dispatch = ``;
                    }
                    // backtick
                    else if (text[i] === "`" && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        backtick = true;
                        value += `<span class="${_string}">\``
                        _dispatch = ``;
                    }
                    else if (text[i] === "`" && Qmark === false && SQmark === false && backtick === true && comment === false) {
                        backtick = false;
                        value += `${_dispatch}\`</span>`
                        _dispatch = ``;
                    }
                    // space
                    else if (text[i] === " " && text[i + 1] === "=" && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += `<span class="${_key}">${_dispatch}</span>`;
                        value += " ";
                        _dispatch = ``;
                    }
                    else if (text[i] === " " && text[i - 1].match(/[a-z]|[A-Z]/) && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += `<span class="${_key}">${_dispatch}</span>`;
                        value += " ";
                        _dispatch = ``;
                    }
                    // symbol
                    else if (text[i] === "=" && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += "= ";
                    }
                    else if ((text[i] === "(" || text[i] === ")") && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += `<span class="${_func}">${_dispatch}</span>`;
                        value += `<span>${text[i]}</span>`;
                        _dispatch = ``;
                    }
                    else if (text[i] === "." && text[i + 1] !== "." && text[i - 1] !== "." && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += `<span class="${_class}">${_dispatch}</span>`
                        value += ".";
                        _dispatch = ``;
                    }
                    else if ((text[i] === "{" || text[i] === "}") && Qmark === false && SQmark === false && backtick === false && comment === false) {
                        value += `${_dispatch}<span>${text[i]}</span>`;
                        _dispatch = ``;
                    }
                    // comment
                    else if (text[i] === "#" && Qmark === false && SQmark === false && backtick === false && type.toLowerCase() === "python" && comment === false) {
                        value += `${_dispatch}<span class="${_comment}">#`;
                        comment = true;
                        _dispatch = ``;
                    }
                    else if (text[i] === "/" && Qmark === false && SQmark === false && backtick === false && text[i + 1] === "*" && comment === false) {
                        value += `${_dispatch}<span class="${_comment}">/`;
                        comment = true;
                        _dispatch = ``;
                    }
                    else if (text[i] === "/" && text[i - 1] === "*" && Qmark === false && SQmark === false && backtick === false && comment === true) {
                        value += `${_dispatch}/</span>`;
                        comment = false;
                        _dispatch = ``;
                    }
                    else {
                        _dispatch += text[i];
                    }
                }
                value += _dispatch;
                if (comment === true) {
                    value += `</span>`;
                }
                tags += `<li>${value}</li>`;
            }
        }
        else if (lang.toLowerCase() === "html" || lang.toLowerCase() === "css") {
            for (let j = 0; j < _text_.length; j++) {
                let value = ``;
                let text = _text_[j];
                let _dispatch = "";
                let Qmark = false;
                let SQmark = false;
                let backtick = false;
                let arrow = false;

                for (let i = 0; i < text.length; i++) {
                    // Qmark
                    if (text[i] === '"' && Qmark === false && SQmark === false && backtick === false) {
                        Qmark = true;
                        value += `<span class="${_string}">"`
                        _dispatch = ``;
                    }
                    else if (text[i] === '"' && Qmark === true && SQmark === false && backtick === false) {
                        Qmark = false;
                        value += `${_dispatch}"</span>`
                        _dispatch = ``;
                    }
                    // SQmark
                    else if (text[i] === "'" && Qmark === false && SQmark === false && backtick === false) {
                        SQmark = true;
                        value += `<span class="${_string}">'`
                        _dispatch = ``;
                    }
                    else if (text[i] === "'" && Qmark === false && SQmark === true && backtick === false) {
                        SQmark = false;
                        value += `${_dispatch}'</span>`
                        _dispatch = ``;
                    }
                    // backtick
                    else if (text[i] === "`" && Qmark === false && SQmark === false && backtick === false) {
                        backtick = true;
                        value += `<span class="${_string}">\``
                        _dispatch = ``;
                    }
                    else if (text[i] === "`" && Qmark === false && SQmark === false && backtick === true) {
                        backtick = false;
                        value += `${_dispatch}\`</span>`
                        _dispatch = ``;
                    }
                    // space
                    else if (text[i] === " " && text[i - 1].match(/[a-z]|[A-Z]/) && Qmark === false && SQmark === false && backtick === false && arrow === true) {
                        arrow = false;
                        value += `${_dispatch}</span>`;
                        value += " ";
                        value += `<span class="${_key}">`
                        _dispatch = "";
                    }

                    // symbol
                    else if (text[i] === "<" && text[i + 1] !== "/" && Qmark === false && SQmark === false && backtick === false && arrow === false) {
                        arrow = true;
                        value += `&lt;<span class="${_tag}">${_dispatch}`;
                        _dispatch = "";
                    }
                    else if (text[i] === ">" && Qmark === false && SQmark === false && backtick === false && arrow === true) {
                        arrow = false;
                        value += `${_dispatch}</span>>`;
                        _dispatch = "";
                    }
                    else if (text[i] === "<" && text[i + 1] === "/" && Qmark === false && SQmark === false && backtick === false && arrow === false) {
                        arrow = true;
                        value += `${_dispatch}`;
                        value += "&lt;"; // <
                        _dispatch = "";
                    }
                    else if (text[i - 1] === "<" && text[i] === "/" && Qmark === false && SQmark === false && backtick === false && arrow === true) {
                        value += `/<span class="${_tag}">`;
                    }
                    else if (text[i] === "=" && text[i - 1].match(/[a-z]|[A-Z]/) && Qmark === false && SQmark === false && backtick === false) {
                        value += `${_dispatch}</span>`;
                        value += "=";
                        _dispatch = "";
                    }
                    else {
                        _dispatch += text[i];
                    }
                }
                value += _dispatch;
                tags += `<li>${value}</li>`;
            }
        }
        try {
            codeText.current.innerHTML = tags;
        } catch (err) { }
    }

    // useEffect
    useEffect(() => {
        // let stylelist = {
        //     _string: "text-amber-500",
        //     _func: "text-yellow-300",
        //     _key: "text-blue-300",
        //     _class: "text-blue-400",
        //     _tag: "text-blue-500"
        // }
        let _array = [];
        try {
            if (array.type) {
                _array = array.code;
                if (array.type === "none") {
                    let tags = "";
                    _array.map((data) => {
                        tags += `${data}`
                    });
                    codeText.current.innerText = tags;
                }
                else if(array.type === "css") {
                    highlighter(_array, "html", stylelist);
                }
                if(_array.length > 12){
                    bodyRef.current.style.overflowY = "scroll";
                    bodyRef.current.style.height = "400px";
                    buttonRef.current.style.position = "sticky";
                    buttonRef.current.style.right = 0;
                    buttonRef.current.style.top = 0;
                }
            } else {
                if (type === "none" || type === "") {

                } else {
                    if (array) {
                        _array = array;
                    } else {
                        try {
                            let _text = codeText.current;
                            let _html = _text.innerHTML;

                            if (_html.match(/<li>.+<\/li>/)) {
                                let tags = _text.querySelectorAll("li");
                                tags.forEach((tag) => {
                                    _array.push(`${tag.innerText}`);
                                });
                            }
                        } catch (err) { console.log("high lighter running error...."); }
                    }

                    // console.log(_array);
                    if (_array[0].match(/<.+>/)) {
                        highlighter(_array, "html", stylelist);
                    } else {
                        highlighter(_array, type, stylelist);
                    }

                    if(_array.length > 12){
                        bodyRef.current.style.overflowY = "scroll";
                        bodyRef.current.style.height = "400px";
                        buttonRef.current.style.position = "sticky";
                        buttonRef.current.style.right = 0;
                        buttonRef.current.style.top = 0;
                    }
                }
            }
        } catch (err) { }
    }, [array]);

    return <>
        <style jsx>{`
        .code-scroll::-webkit-scrollbar{
            background-color: transparent;
        }
    `}</style>
        <div key={key} ref={bodyRef} className="bg-slate-800 p-4 flex mt-5 mb-5 justify-between items-start border border-solid border-slate-600 rounded-lg shadow-md w-full shadow-slate-700 code-scroll relative">
            {/* code side */}
            <div ref={codeText} className="text-md text-white flex flex-col justify-center selection:text-blue-300 items-start list-none">
                {/* <li>python("Hello world!")</li>
                <li>Input("Enter your Name: ")</li>
                <li>import math</li>
                <li>num = "String"</li>
                <li>if(){": print('hi')"}</li> */}
                {/* <li>{"<h2 class=\"text-white\">Hello world!</h2>"}</li>
                <li>{'<input placeholder="Hello world!" class="text-white" />'}</li> */}
                {children}
            </div>
            {/* copy button side */}
            <button ref={buttonRef} className="bg-slate-700 border border-solid border-slate-700 rounded-md transition-shadow shadow-md shadow-slate-600 cursor-pointer p-1 text-slate-50 hover:bg-slate-800 z-30" onClick={CopyEvent}>Copy</button>
        </div>
    </>
}

export default CodeHighlighter;