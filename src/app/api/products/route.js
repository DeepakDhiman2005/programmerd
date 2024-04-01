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
    return NextResponse.json(data);
}

export async function POST(response){
    const data = await response.formData();
    // console.log(data);
    let obj = {method: "", date: "", data: {}, type: ""};

    for(let x of data){
        // console.log(x);
        if(x[0] === "method"){ obj.method = x[1]; }
        else if(x[0] === "date"){ obj.date = x[1]; }
        else if(x[0] === "type"){ obj.type = x[1]; }
        else { obj.data[x[0]] = x[1]; }
    }
    // console.log(obj);

    try{
        if(obj.type === "Card"){
            
            if(obj.data.image){
                // console.log(true)
                if(typeof obj.data.image === "string"){ }
                else {
                    let image = obj.data.image;
                    let img = await image.arrayBuffer();
                    let bufferimg = Buffer.from(img);
                    let imagePath = Date.now() + "-" + Math.random()*1000 + "-" + image.name;
                    await fs.writeFileSync(`./public/uploads/products/${imagePath}`, bufferimg);
                    obj.data.image = imagePath;
                }
            }
        }
        else if(obj.type === "FourCardCollection"){
            let fourcard = {title: "", data: []};
            fourcard.title = obj.data.title;
            let imagePath = Date.now() + "-" + Math.random()*1000;

            for(let i=0; i < 4; i++){
                let img = obj.data[`image${i+1}`];
                if(typeof img === "string"){
                    fourcard.data.push({title: obj.data[`title${i+1}`], desc: obj.data[`desc${i+1}`], href: obj.data[`href${i+1}`], image: img});
                }else {
                    if(!fs.existsSync(`./public/uploads/products/fourcard${imagePath}`)){
                        await fs.mkdirSync(`./public/uploads/products/fourcard${imagePath}`);
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/fourcard${imagePath}/${imagePath}${i+1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        fourcard.data.push({title: obj.data[`title${i+1}`], desc: obj.data[`desc${i+1}`], href: obj.data[`href${i+1}`], image: imgPath.replace("./public", "")});
                    }else {
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/fourcard${imagePath}/${imagePath}${i+1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        fourcard.data.push({title: obj.data[`title${i+1}`], desc: obj.data[`desc${i+1}`], href: obj.data[`href${i+1}`], image: imgPath.replace("./public", "")});
                    }
                }
            }
            obj.data = fourcard
        }
        else if(obj.type === "DisplayCarousel"){
            let dt = obj.data;
            let dtlen = 0;
            let _array = [];
            let imagePath = Date.now() + "-" + Math.random()*1000;

            for(let x in dt){
                dtlen += 1;
            }
            dtlen = dtlen/3;
            // console.log(dtlen);
            for(let i=0; i < dtlen; i++){
                let img = dt[`image${i+1}`];

                if(typeof img === "string"){
                    _array.push({href: dt[`href${i+1}`], id: dt[`id${i+1}`], image: img});
                }else {
                    if(!fs.existsSync(`./public/uploads/products/displaycarousel${imagePath}`)){
                        await fs.mkdirSync(`./public/uploads/products/displaycarousel${imagePath}`);
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/displaycarousel${imagePath}/${imagePath}${i+1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);

                        _array.push({href: dt[`href${i+1}`], id: dt[`id${i+1}`], image: imgPath});
                    }else {
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/displaycarousel${imagePath}/${imagePath}${i+1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        _array.push({href: dt[`href${i+1}`], id: dt[`id${i+1}`], image: imgPath});
                    }
                }
            }
            // console.log(_array);
            obj.data = _array;
        }
        else {
            console.log("type not match!");
        }
        // console.log(obj);
        await ConnectMongo();
        let data = await Products({method: obj.method, date: obj.date, type: obj.type, data: obj.data});
        await data.save();
        // console.log(data)
    }catch(err){
        console.log(err)
    }
    return NextResponse.json({ message: "Data Submit Successfully!" });
}
