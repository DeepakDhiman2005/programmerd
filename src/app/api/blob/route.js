"use server"

// next
import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(response){
    let readfolder = [];
    try{
        readfolder = await fs.readdirSync("./public/uploads/image");
    }catch(err){ }
    // console.log(readfolder);
    return NextResponse.json({file: readfolder});
}

export async function POST(response) {
    const resp = await response.formData();
    // console.log(resp);
    const name = resp.get("name");
    const file = resp.get("file");
    const type = resp.get("type");
    // console.log(type);
    // console.log(name);
    // console.log(file);

    if(type === "image"){
        let byteData = await file.arrayBuffer();
        let buffer = Buffer.from(byteData);
        if(await fs.existsSync("./public/uploads/image")){
            await fs.writeFileSync(`./public/uploads/image/${name}`, buffer);
        }else {
            await fs.mkdirSync("./public/uploads/image");
            await fs.writeFileSync(`./public/uploads/image/${name}`, buffer);
        }
    }
    
    return NextResponse.json({ message: "File upload successfully..." });
}

export async function DELETE(response) {
    const resp = await response.json();
    // console.log(resp);
    await fs.rmSync(`./public/uploads/image/${resp.file}`);
    let readfolder = await fs.readdirSync("./public/uploads/image");
    return NextResponse.json({ message: `${resp.file}: File Deleted successfully!`, data: readfolder });
}

export async function PUT(response) {
    const resp = await response.formData();
    // console.log(resp);

    const name = resp.get("name");
    const file = resp.get("file");
    const type = resp.get("type");

    if(type === "image"){
        let byteData = await file.arrayBuffer();
        let buffer = Buffer.from(byteData);
        if(await fs.existsSync("./public/uploads/image")){
            await fs.writeFileSync(`./public/uploads/image/${name}`, buffer);
        }else {
            await fs.mkdirSync("./public/uploads/image");
            await fs.writeFileSync(`./public/uploads/image/${name}`, buffer);
        }
    }

    const readfolder = await fs.readdirSync("./public/uploads/image");

    return NextResponse.json({ message: "File update successfully!", data: readfolder });
}
