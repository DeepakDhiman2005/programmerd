"use client"
import React, {useRef} from "react";

// function
import { ALPHAID } from "./Functions/UNIQUEID";
import getCurrentDate from "./Functions/getCurrentDate";

/**
 * value{(e)=> e -> `e` return value }
 * @returns text and date -> in string format
 * format:- date {
 * comment: "user comment"
 * date: "YY-MM-DD"
 * }
 */
const CommentBox = (props) => {

    const commentText = useRef(null);

    const PostComment = () => {
        let comment_data = commentText.current.value;
        if(comment_data !== ""){
            let _query = props.query;
            let _name = ALPHAID("user") + "_pd"; // change
            let _comment = comment_data;
            let _date = getCurrentDate();
    
            props.value({name: _name, comment: _comment, date: _date, query: _query});
            commentText.current.value = "";
        }
    }

    return <>
        <div className="bg-white mt-10 mb-10 shadow-lg border border-solid w-[85%] border-gray-100 rounded-md p-4 flex flex-col justify-center items-start">
            <h2 className="text-xl font-bold text-black mt-5 mb-5">Add a new Comment</h2>
            <textarea ref={commentText} id="message" rows="4" className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Your Comment"></textarea>
            <button className="text-white mt-3 mb-3 bg-blue-600 cursor-pointer p-2 border border-solid border-blue-700 rounded-md hover:bg-blue-800 hover:shadow-lg active:bg-blue-400 active:text-purple-600 selection:text-white" onClick={PostComment}>Post Comment</button>
        </div>
    </>
}

export default CommentBox;