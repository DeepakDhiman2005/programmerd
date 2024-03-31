"use server"

// next
import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(response){
    return NextResponse.json({image: "http://programmerd.com"});
}

export async function POST(response){
    let data = await response.formData();
    let file = data.get("image");

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    await fs.writeFileSync(`./public/uploads/${file.name}`, buffer);

    return NextResponse.json({ message: "Image upload successfully..." });
}