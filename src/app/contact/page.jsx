"use client"
import React, {Suspense, useRef, useState} from "react";

// components
import MessageEmit from "@/components/MessageEmit";
import TopLoader from "@/components/TopLoader";

/** @param Contact - Contact us */
const Contact = (props) => {
    const Email = useRef(null);
    const Password = useRef(null);
    const CheckBox = useRef(null);

    // useState
    const [SuccessMessage, setSuccessMessage] = useState(false);
    const [MessageDisplay, setMessageDisplay] = useState(false);
    const [Message, setMessage] = useState(""); // message

    const WrongMessage = (message) =>{
        const PlayAudioVib = new Audio("/sound/vibration.mp3");
        PlayAudioVib.play();
        setSuccessMessage(false);
        setMessage(message);
        setMessageDisplay(true);
    }

    const RightMessage = (message) => {
        const PlayAudioSend = new Audio("/sound/send.mp3");
        PlayAudioSend.play();
        setSuccessMessage(true);
        setMessage(message);
        setMessageDisplay(true);
    }

    const SubmitData = (e) => {
        e.preventDefault();
        let email = Email.current.value;
        let password = Password.current.value;
        
        if(CheckBox.current){
            if(email !== "" && password !== ""){
                if(email.match(".+@gmail\.com")){
                    const formData = new FormData();

                    formData.append("email", email);
                    formData.append("password", password);

                    console.log("Data submit successfully!");

                    RightMessage("Your Data submit successfully!");

                    Email.current.value = "";
                    Password.current.value = "";
                    CheckBox.current.checked = false;

                }else{
                   WrongMessage("Email not correct! Format Not Match: {xyz@gmail.com}");
                }
            }else{
                WrongMessage("Data not fillup!");
            }
        }else{
            WrongMessage("Click on check box!");
        }
    }

    return <Suspense fallback={<TopLoader/>}>
        <MessageEmit success={SuccessMessage} position={"center"} display={MessageDisplay} message={Message} value={(e)=>{
            setMessageDisplay(e);
        }} />
        <h2 className="mt-5 mb-5 text-center text-green-600 text-4xl">Contact me!</h2>
        <form className="max-w-sm mx-auto mt-10 mb-20">
            <div className="mb-10">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input ref={Email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required onChange={(e)=>{
                    Email.current.value = e.target.value;
                }} />
            </div>

            <div className="mb-10">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                <input ref={Password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required autoComplete="off" onChange={(e)=>{
                    Password.current.value = e.target.value;
                }} />
            </div>

            <div className="flex items-start mb-10">
                <div className="flex items-center h-5">
                    <input ref={CheckBox} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required onChange={(e)=>{
                    CheckBox.current.checked = e.target.checked;
                }} />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={SubmitData}>Submit</button>
        </form>
    </Suspense>
}

export default Contact;