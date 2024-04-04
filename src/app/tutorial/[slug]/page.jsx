"use client"
import React, {useState} from "react";

// next
import { useRouter } from "next/navigation"

// components
import TutorialContent from "@/components/TutorialsComp/TutorialContent";
import TutorialSidebar from "@/components/TutorialsComp/TutorialSidebar";

const TutorialStart = ({params}) => {
    // useState
    const [ToConnection, setToConnection] = useState(true);

    // next
    const router = useRouter();

    // sidebar data
    let _data = [
        {
            key: "Introduction",
            points: ["Python Overview", "install python with vs code", "write first program in python", "python structure"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        },
        {
            key: "python string",
            points: ["Python String", "Operation in String", "Methods of String", "Format String"]
        }
    ]
    let _data2 = [
        {
            // title: "Python Overview",
            title: params.slug === "python" ? "Python Overview": params.slug,
            content: [
                {
                    title: "What is Python?",
                    points: ["what is programming lanuage.", "python is hight level lanuage."],
                },
                {
                    code: [`print("Hello world")`, `num = input("Enter your name: ")`]
                },
                {
                    title: "Features of Python",
                    points: ["programming lanuage.", "hight level lanuage.", "Easy to use."]
                },
                {
                    title: "Python image",
                    image: {
                        src: "/image/programming.jpg",
                        width: 500,
                        height: 500
                        // className: "w-auto"
                    }
                },
                {
                    title: "Check my course!",
                    points: ["this is tailwindcss course:"],
                    image: {
                        src: "/image/image1.jpg",
                        width: 600,
                        height: 600
                    }
                },
                {
                    title: "Play Audio",
                    audio: "/sound/send.mp3"
                },
                {
                    title: "Code Writer!",
                    video: {
                        src: "/videos/video1.mp4",
                        loop: false
                    }
                }
            ]
        }
    ]

    return <>
        <div className="flex justify-between items-start bg-slate-50">
            {/* layer1 */}
            <TutorialSidebar datalist={_data} toConnection={ToConnection} value={(e)=>{
                // console.log(e);
                if(e === false){
                    setToConnection(e);
                }else{
                    // console.log(e);
                    router.push("/tutorial/"+e)
                }
            }} />
            {/* layer2 */}
            <TutorialContent title={params.slug === "python" ? _data[0].points[0]: params.slug} datalist={_data2} toConnection={ToConnection} value={(e)=>{
                setToConnection(e);
            }} />
        </div>
    </>
}

export default TutorialStart