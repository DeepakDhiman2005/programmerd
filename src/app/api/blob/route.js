"use server"

// next
import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(response){
    let data = await response.formData();
    let obj = [];
    for(let x of data){
        obj.push(x[1]);
    }
    // console.log(obj)
    let j=0;
    for(let i=0; i < obj.length/2; i++){
        let filename = obj[j];
        let file = obj[j+1];
        let byteData = await file.arrayBuffer();
        let buffer = Buffer.from(byteData);
        await fs.writeFileSync(`./public/uploads/blogs/${filename}`, buffer);
        j+=2;
    }

    return NextResponse.json({ message: "Image upload successfully..." });
}