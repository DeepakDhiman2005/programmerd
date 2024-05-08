"use client"
import React, {useState} from "react";

// icons
import { FaMicrophone } from "react-icons/fa";

// components
import Button from "@/components/Button";

const AIPage = () => {
    // useState
    const [Listening, setListening] = useState(false);

    const VoiceToText = () => {
        const recognization = new webkitSpeechRecognition();
        // console.log(recognization)
        recognization.onstart = function(){
            setListening(true);
        }
        recognization.onresult = function(e){
            console.log("result");
            var transcript = e.results[0][0].transcript;
            console.log(transcript);
            setListening(false);
        }
        recognization.start();
    }

    return <>
        <div className="mt-3 mb-3 flex justify-center items-center">
            {
                Listening ? <span onClick={()=>{setListening(false)}}>Listening...</span>: 
                <Button className="flex justify-center items-center rounded-sm" onClick={VoiceToText}>
                    <span>Voice</span>
                    <FaMicrophone size={"20px"} className="ml-1" />
                </Button>
            }
        </div>
    </>
}

export default AIPage;