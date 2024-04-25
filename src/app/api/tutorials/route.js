"use server"

// next
import { NextResponse } from "next/server";

// database
import { db_python } from "@/app/db/tutorials/python";
import { db_html } from "@/app/db/tutorials/html";
import { db_css } from "@/app/db/tutorials/css";

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

    return NextResponse.json(db_data);
}