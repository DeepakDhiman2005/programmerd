"use server"

// next
import { NextResponse } from "next/server"
import ConnectMongo from "@/util/ConnectMongo";
import { Products } from "@/util/mongo";

// server
import fs from "fs";

export async function GET(response){
    await ConnectMongo();
    let data = await Products.find();
    let _array = [];

    // let read_image = await fs.readFileSync(`./public/uploads/products/${data[0].image}`);
    for(let i = 0; i < data.length; i++){
        if(data[i].src){
            _array.push({
                title: data[i].title,
                desc: data[i].desc,
                href: data[i].href,
                src: data[i].src
            })
        }else{
            _array.push({
                title: data[i].title,
                desc: data[i].desc,
                href: data[i].href,
                src: `./public/uploads/products/${data[i].image}`
            })
        }
        
    }

    return NextResponse.json(_array);
}

export async function POST(response){
    await ConnectMongo();
    let resp = await response.formData();

    let image = resp.get("image");
    let imagePath = "";
    let obj = {};

    if(typeof image === "string"){
        obj = {
            title: resp.get("title"),
            desc : resp.get("desc"),
            href : resp.get("href"),
            src: resp.get("image")
        }
    }
    else{
        imagePath = Date.now() + "-" + Math.random()*1000 + "-" + image.name;
        obj = {
            title: resp.get("title"),
            desc : resp.get("desc"),
            href : resp.get("href"),
            image: imagePath,
        }
        let img = await image.arrayBuffer();
        const bufferimg = Buffer.from(img);
        await fs.writeFileSync(`./public/uploads/products/${imagePath}`, bufferimg);
    }
    // console.log(obj);

    let prod = new Products(obj);
    
    await prod.save();

    return NextResponse.json({ message: "data uploaded!" });
}