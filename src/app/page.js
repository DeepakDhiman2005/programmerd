"use client"
import React, { useState, useEffect, useRef } from "react";

// next
import Image from "next/image";

// Components
import Card from "@/components/Card";
import ProductCard from "@/components/Cards/ProductCard";
import GiftCard from "@/components/Cards/GiftCard";
import TextCard from "@/components/Cards/TextCard";
import ReadingEffect from "@/components/ReadingEffect";
import TopScrollButton from "@/components/TopScrollButton";
import TopLoader from "@/components/TopLoader";

export default function Home(props) {
  // useRef
  const typingRef = useRef({innerText: ''});
  const welcomeTypingRef = useRef({innerText: ''});
  const videoRef = useRef(null);
  const BackgroundImageRef = useRef(null);

  // useState
  // const [MarginRem, setMarginRem] = useState("-22rem");
  const [IsLoading, setIsLoading] = useState(0);

  useEffect(() => {
    setIsLoading(25);
    try{
      if(window.innerWidth <= 490){
        videoRef.current.style.display = "none";
        BackgroundImageRef.current.style.display = "block";
      }else{
        videoRef.current.style.display = "block";
        BackgroundImageRef.current.style.display = "none";
      }  
    }catch(err){ }

    setIsLoading(45);
    try{
      let program = "Programmer D";
      let index = 0;
      let TypingInterval = setInterval(() => {
        if(index >= program.length){
          clearInterval(TypingInterval)
        }else{
          welcomeTypingRef.current.innerText = program.substring(0, index += 1);
        }
      }, 50);
    }catch(err){ }

    setIsLoading(65);
    try{
      let video_collection = ["video1", "video2"];
      let rand = Math.floor(Math.random()*2);
      videoRef.current.src = "/videos/"+video_collection[rand]+".mp4";
    }catch(err){}

    setIsLoading(75);
    try{
      let collection = ["HTML", "CSS", "Javascript", "Java", "Python", "c/c++", "Web Development", "App Development", "Reactjs", "Nextjs", "React Native"];
      let position = 0; let index = 0;

      let TypingInterval = setInterval(() => {
        if (position >= collection.length) {
          index = 0; position = 0;
          typingRef.current.innerText = "";
        }else{
          if (index >= collection[position].length) {
            index = 0;
            position += 1;
            typingRef.current.innerText = "";
          } else {
            typingRef.current.innerText = collection[position].substring(0, index += 1);
          }
        }
      }, 400);
      setIsLoading(100);
      let delay = setInterval(() => {
        setIsLoading(0);
        clearInterval(delay);
      }, 500);

      return () => clearInterval(TypingInterval);      
    }catch(err){
      console.log(err)
    }
  }, [BackgroundImageRef]);

  return (
    <>
      <TopLoader progress={IsLoading} />

      <div className="flex flex-col justify-center items-center w-full home-intro relative scroll-smooth transition-all">
        <video ref={videoRef} src={"/videos/video1.mp4"} className="w-full min-[485px]:h-full rounded-b-xl h-[20rem]" autoPlay muted loop></video>
        <img src="/image/progbg.png" ref={BackgroundImageRef} alt="" className="w-full min-[485px]:h-full rounded-b-xl h-[20rem]" style={{display: "none"}} />
        <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-center absolute rounded-b-xl text-center">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl min-[480px]:text-5xl text-white mb-3">Welcome to <span ref={welcomeTypingRef} className="text-purple-500"></span></h2>
            <h2 className="text-lg min-[485px]:text-2xl text-white">Learn <span ref={typingRef} className="text-purple-400 text-xl"></span><span className="text-slate-700">|</span></h2>
          </div>
          <div className="flex justify-start items-center">
            <a href="https://www.youtube.com/programmerd7" target="_blank">
            <button className="inline-block px-7 py-3 mb-1 mt-3 border-2 border-blue-500 text-blue-500 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go To Channel</button>
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center text-4xl mt-10 mb-10">Recommended Courses</h2>
      <div className="flex justify-around items-center flex-wrap mt-20 mb-20">
        <Card title="Tailwindcss" image="/image/image1.jpg" desc="Tailwindcss Full Courses with Free of cost!" button="Watching" />
        
        <Card title="Chat GPT" image="/image/image2.jpg" desc="Chat GPT Full Courses with Free of cost!" button="Watching" />

        <Card title="C Language" image="/image/image3.jpg" desc="C language basic to Advance Full Courses with Free of cost!" button="Watching" />
      </div>

      <div className="flex flex-col justify-around items-center flex-wrap mt-10 mb-20 sm:flex-row">
        <GiftCard title={"How to Learn Coding?"} desc={"Confused on which course to take? I have got you covered. Browse courses and find out the best course for you."} link={"See our details"} />
        <TextCard title={"Javascript Full Course in 2024!"} desc={"Welcome to the Programmer D beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as \"What is it?\" and \"What can you do with it?\""} />
      </div>

      <h2 className="text-center text-4xl mt-10 mb-5">My Gear</h2>
      <div className="flex justify-around items-center flex-wrap mt-10 mb-20 overflow-x-hidden">
        <ProductCard image={"/image/image1.jpg"} title={"This is tailwindcss full beginner to advance course!"} price={"$599"} />
        <ProductCard image={"/image/image1.jpg"} title={"This is tailwindcss full beginner to advance course!"} price={"$599"} />
      </div>

      <div className="mt-20 mb-20 flex justify-center items-center border border-solid border-grey-500 bg-black">
        {/* text */}
        <ReadingEffect className="w-2/4 text-center mt-20 mb-20 text-2xl sm:text-5xl lg:text-6xl text-slate-50 select-none" text={"programmer "} textcase={"upper"} toNewText="D" toClass="text-blue-400" />
        {/* image */}
        <Image src={"/image/programmerd.png"} width={500} height={500} alt="image" className="w-2/4 h-auto" />
      </div>

      <TopScrollButton />

    </>
  )
}
