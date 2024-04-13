"use server"

// next
import { NextResponse } from "next/server"

// database
import { db_blogs } from "@/app/db/blogs";
import ConnectMongo from "@/util/ConnectMongo";
import { Blogposts } from "@/util/mongo";

export async function GET(response){
    await ConnectMongo();
    const blogs = await Blogposts.find();
    return NextResponse.json(blogs);
}

export async function POST(response){
    await ConnectMongo();
    const blogs = await Blogposts.find();
    const resp = await response.json();
    const _query = resp.query.toLowerCase();
    // console.log(_query);
    let get_data = {};
    let array = db_blogs;

    blogs.filter((data)=> {
        array.push(data.data);
    })

    array.filter((data)=>{
        if(data.title.toLowerCase().match(_query)){
            get_data = data;
        }
    });
    // console.log(get_data);

    // console.log(resp.query);
    return NextResponse.json(get_data);
}
