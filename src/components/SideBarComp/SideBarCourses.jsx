"use client"
import React from "react";

// components
import Card from "../Card";

const SideBarCourses = () => {
    return <>
        <div key={"CoursesCardInSideBar"} className="flex justify-around items-center flex-wrap w-full mt-20 mb-20">
            <Card title="Tailwindcss" image="/image/image1.jpg" desc="Tailwindcss Full Courses with Free of cost!" button="Watching" />

            <Card title="Chat GPT" image="/image/image2.jpg" desc="Chat GPT Full Courses with Free of cost!" button="Watching" />

            <Card title="C Language" image="/image/image3.jpg" desc="C language basic to Advance Full Courses with Free of cost!" button="Watching" />
        </div>
    </>
}

export default SideBarCourses;