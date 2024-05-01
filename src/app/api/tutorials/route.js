"use server"

// next
import { NextResponse } from "next/server";

// database
import { db_python } from "@/app/db/tutorials/python";
import { db_html } from "@/app/db/tutorials/html";
import { db_css } from "@/app/db/tutorials/css";
import { db_js } from "@/app/db/tutorials/javascript";

export async function GET(response){
    // const data = db_html;
    const cards = [
        {
            title: "HTML Tutorial",
            image: "/image/program/html.webp",
            path: "html"
        },
        {
            title: "CSS Tutorial",
            image: "/image/program/css.webp",
            path: "css"
        },
        {
            title: "JavaScript Tutorial",
            image: "/image/program/js.webp",
            path: "js"
        }
    ]
    return NextResponse.json(cards);
}

export async function POST(response) {
    const resp = await response.text();
    // console.log(resp);
    let db_data = null;
    if(resp === "html"){
        db_data = db_html;
    }
    else if(resp === "css"){
        db_data = db_css;
    }
    else if(resp === "js"){
        db_data = db_js;
    }

    return NextResponse.json(db_data);
}