"use server"

// next
import { NextResponse } from "next/server"

// database
import { db_blogs } from "@/app/db/blogs";

export async function GET(response){
    let blog = {
        title: "What is Pycham?",
        desc: "Pycham is python code editior tool."
    }
    const data = db_blogs;
    return NextResponse.json(data);
}

export async function POST(response){

    const resp = await response.json();
    const _query = resp.query.toLowerCase();
    // console.log(_query);
    let get_data = {};
    db_blogs.filter((data)=>{
        if(data.title.toLowerCase().match(_query)){
            get_data = data;
        }
    });
    // console.log(get_data);

    // console.log(resp.query);
    return NextResponse.json(get_data);
}