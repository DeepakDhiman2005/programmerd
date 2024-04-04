"use server"

import ConnectMongo from "@/util/ConnectMongo";
import { Blogposts } from "@/util/mongo";
// next
import { NextResponse } from "next/server"

export async function GET(response){
    await ConnectMongo();
    let resp = await Blogposts.find();
    return NextResponse.json(resp);
}

export async function POST(response){
    await ConnectMongo();
    const resp = await response.json();
    // console.log(resp)

    const { method, id } = resp;

    if(method === "add"){
        let data = await Blogposts(resp);
        await data.save();
    }
    else if(method === "edit"){
        // console.log("edit");
        await Blogposts.findByIdAndUpdate({_id : id}, {
            $set: resp
        })
    }
    return NextResponse.json({ message: "Data Submit Successfully!" });
}
