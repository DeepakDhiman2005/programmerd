"use server"

// next
import { NextResponse } from "next/server";

// database
import ConnectMongo from "@/util/ConnectMongo";
import { Products } from "@/util/mongo";

export async function POST(response){
    await ConnectMongo();
    const resp = await response.json();
    // console.log(resp);
    if(resp.method === "hide"){
        // console.log(resp)
        await Products.findByIdAndUpdate(resp._id, resp);
    }
    else if(resp.method === "edit"){
        await Products.findByIdAndUpdate(resp._id, resp);
    }
    else if(resp.method === "delete"){
        // console.log(resp);
        await Products.findByIdAndDelete(resp._id);
    }

    return NextResponse.json({ message: "Data submit successfuly!" });
}