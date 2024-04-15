"use client"
import React, {useEffect, useState} from "react";

// next
import { usePathname } from "next/navigation";

// components
import TutorialContent from "@/components/TutorialsComp/TutorialContent";
import TutorialSidebar from "@/components/TutorialsComp/TutorialSidebar";

const TutorialDisplay = ({title="", keys=[], values=[]}) => {
    // useState
    const [ToConnection, setToConnection] = useState("");

    // next
    const pathname = usePathname();

    useEffect(()=>{
        if(pathname.match(/\/tutorial\/.+/)){
            // console.log(true)
            window.document.body.scrollTo(0, 0);
            let onetime = setInterval(() => {
                clearInterval(onetime);
                window.document.body.style.overflowY = "hidden";
            }, 100);
        }else {
            window.document.body.style.overflowY = "auto";
        }
    }, [pathname]);

    return <>
        <div className="flex justify-between items-start bg-slate-50">
            {/* layer1 */}
            <TutorialSidebar datalist={keys} title={title === "python" ? keys[0].points[0]: title} toConnection={ToConnection} value={(e)=>{ setToConnection(e); }} />

            {/* layer2 */}
            <TutorialContent title={title === "python" ? keys[0].points[0]: title} datalist={values[0]} toConnection={ToConnection} value={(e)=>{ setToConnection(e); }} />
        </div>
    </>
}

export default TutorialDisplay;