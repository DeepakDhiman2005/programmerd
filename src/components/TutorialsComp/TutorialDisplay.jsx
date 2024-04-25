"use client"
import React, {useEffect, useState} from "react";
import axios from "axios";

// next
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// components
import TutorialContent from "@/components/TutorialsComp/TutorialContent";
import TutorialSidebar from "@/components/TutorialsComp/TutorialSidebar";
import TopLoader from "../TopLoader";

const TutorialDisplay = ({title=""}) => {
    // useState
    const [ToConnection, setToConnection] = useState("");
    const [SideData, setSideData] = useState([]);
    const [SidePage, setSidePage] = useState([]);
    const [EndPageTitle, setEndPageTitle] = useState("");

    const [FirstPage, setFirstPage] = useState(false);
    const [PageEnd, setPageEnd] = useState(false);

    const [ThrowMessage, setThrowMessage] = useState("");

    const [IsLoading, setIsLoading] = useState(0);

    // next
    const pathname = usePathname();
    const router = useRouter();
    const searchparams = useSearchParams();
    let query = searchparams.get("query");

    const getTutorial = async () => {
        try{
            setIsLoading(35);
            const resp = await axios.post("/api/tutorials/", title, { cache: "no-store" });
            // console.log(resp.data);
            setSideData(resp.data);
            setIsLoading(85);
            if(resp.data !== null){
                setThrowMessage("");
                resp.data.filter((tutorial, i)=>{
                    let page = tutorial.page;
                    page.filter((data, j)=>{
                        let title = data.title.toLowerCase();
                        if(title === query){
                            // console.log(title)
                            if(i === 0 && j === 0){
                                setFirstPage(true);
                            }else{ setFirstPage(false); }
                            setSidePage(data);
                        }
                    })
                    if(i === resp.data.length-1){
                        try{
                            setEndPageTitle(page[page.length-1].title);
                        }catch(er){}
                    }
                })
            }else {
                setThrowMessage(title + ": The Tutorial is not avaliable!");
                setSideData([]);
            }
            setIsLoading(100);
            
            let delay = setInterval(() => {
                clearInterval(delay);
                setIsLoading(0);
            }, 500);
        }catch(err){ }
    }

    const ChangePage = (e) => {
        const search = new URLSearchParams(searchparams);
        if(e === "next"){
            // console.log("next")
            let onetime = false;
            SideData.map((data)=>{
                let page = data.page;
                page.map((data)=>{
                    if(onetime){
                        setSidePage(data);
                        search.set("query", data.title);
                        router.push(`/tutorial/${title}/?${search.toString().toLowerCase()}`);
                        onetime = false;
                    }else {
                        let title = data.title.toLowerCase();
                        if(title === query){ onetime = true; }
                    }
                })
            })
        }
        else if(e === "previous"){
            // console.log("previous");
            let store = null;
            SideData.map((data)=>{
                let page = data.page;
                page.map((data)=>{
                    let tit = data.title.toLowerCase();
                    if(tit === query){
                        setSidePage(store);
                        search.set("query", store.title.toLowerCase());
                        router.push(`/tutorial/${title}/?${search.toString().toLowerCase()}`);
                    }else {
                        store = data;
                    }
                });
            })
        }
    }

    useEffect(()=>{
        getTutorial();

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
        try{
            window.document.title = query + " - in tutorial";
            if(query.toLowerCase() === EndPageTitle.toLowerCase()){
                setPageEnd(true);
            }else {
                setPageEnd(false);
            }
        }catch(err){}
    }, [pathname, query]);

    return <>
        <TopLoader progress={IsLoading} />
        <div className="flex justify-between items-start bg-slate-50">
            {/* layer1 */}
            <TutorialSidebar datalist={SideData} title={title} toConnection={ToConnection} value={(e)=>{ setToConnection(e); }} />

            {/* layer2 */}
            {
                SidePage.length !== 0 ? <TutorialContent page={FirstPage} pageEnd={PageEnd} title={query} datalist={SidePage} toConnection={ToConnection} value={(e)=>{ 
                    if(e === "next" || e === "previous"){
                        ChangePage(e);
                    }else{
                        setToConnection(e);
                    }
                }} />: <div className="mt-5 mb-5 w-full flex justify-center items-center">
                    {/* <Loader /> */}
                    <h2 className="mt-5 mb-5">{ThrowMessage !== "" ? ThrowMessage: "Result not found!"}</h2>
                </div>
            }
        </div>
    </>
}

export default TutorialDisplay;