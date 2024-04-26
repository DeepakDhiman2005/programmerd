"use server"

// next
import { NextResponse } from "next/server"
import ConnectMongo from "@/util/ConnectMongo";
import { Products } from "@/util/mongo";

// database
import { db_books } from "@/app/db/products/books";
import { db_cpu } from "@/app/db/products/cpu";
import { db_game } from "@/app/db/products/game";
import { db_keyboard } from "@/app/db/products/keyboard";
import { db_laptops } from "@/app/db/products/laptops";
import { db_mobiles } from "@/app/db/products/mobiles";
import { db_ps5 } from "@/app/db/products/ps5";
import { db_smartwatch } from "@/app/db/products/smartwatch";
import { db_speaker } from "@/app/db/products/speaker";
import { db_tv } from "@/app/db/products/t_v";

// server
import fs from "fs";

export async function GET(response) {
    // await ConnectMongo();
    // let data = await Products.find();
    const cpu = db_cpu.data.slice(0, 3);
    const speaker = db_speaker.data.slice(0, 3);
    const keyboard = db_keyboard.data.slice(0, 3);
    const game = db_game.data.slice(0, 3);
    const laptops = db_laptops.data.slice(0, 3);
    const mobiles = db_mobiles.data.slice(0, 3);
    const smartwatch = db_smartwatch.data.slice(0, 3);
    const books = db_books.data.slice(0, 3);
    const ps5 = db_ps5.data.slice(0, 3);
    const tv = db_tv.data.slice(0, 3);
    // retrieve the current response
    return NextResponse.json([...cpu, ...speaker, ...keyboard, ...game, ...laptops, ...mobiles, ...smartwatch, ...books, ...ps5, ...tv]);
}

export async function POST(response) {
    await ConnectMongo();
    const data = await response.formData();
    // console.log(data);
    let _id = false;
    let obj = { method: "", date: "", data: {}, type: "" };

    for (let x of data) {
        // console.log(x);
        if (x[0] === "method") { obj.method = x[1]; }
        else if (x[0] === "date") { obj.date = x[1]; }
        else if (x[0] === "type") { obj.type = x[1]; }
        else if (x[0] === "id") { _id = x[1]; }
        else { obj.data[x[0]] = x[1]; }
    }
    // console.log(obj);

    try {
        if (obj.type === "Card") {
            if (obj.method === "edit") {
                // console.log(obj)
                const result = await Products.updateOne({ _id: _id }, {
                    $set: obj
                })
                _id = false;
            }
            else if (obj.method === "add") {
                if (obj.data.image) {
                    // console.log(true)
                    if (typeof obj.data.image === "string") { }
                    else {
                        let image = obj.data.image;
                        let img = await image.arrayBuffer();
                        let bufferimg = Buffer.from(img);
                        let imagePath = Date.now() + "-" + Math.random() * 1000 + "-" + image.name;
                        await fs.writeFileSync(`./public/uploads/products/${imagePath}`, bufferimg);
                        obj.data.image = imagePath;
                    }
                }
                let data = await Products({ method: obj.method, date: obj.date, type: obj.type, data: obj.data });
                await data.save();
            }
        }
        else if (obj.type === "FourCard") {
            let fourcard = { title: "", data: [] };
            fourcard.title = obj.data.title;
            let imagePath = Date.now() + "-" + Math.random() * 1000;

            for (let i = 0; i < 4; i++) {
                let img = obj.data[`image${i + 1}`];
                if (typeof img === "string") {
                    fourcard.data.push({ title: obj.data[`title${i + 1}`], desc: obj.data[`desc${i + 1}`], href: obj.data[`href${i + 1}`], image: img });
                } else {
                    if (!fs.existsSync(`./public/uploads/products/fourcard${imagePath}`)) {
                        await fs.mkdirSync(`./public/uploads/products/fourcard${imagePath}`);
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/fourcard${imagePath}/${imagePath}${i + 1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        fourcard.data.push({ title: obj.data[`title${i + 1}`], desc: obj.data[`desc${i + 1}`], href: obj.data[`href${i + 1}`], image: imgPath.replace("./public", "") });
                    } else {
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/fourcard${imagePath}/${imagePath}${i + 1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        fourcard.data.push({ title: obj.data[`title${i + 1}`], desc: obj.data[`desc${i + 1}`], href: obj.data[`href${i + 1}`], image: imgPath.replace("./public", "") });
                    }
                }
            }
            obj.data = fourcard

            if (obj.method === "edit") {
                // console.log("edit")
                const result = await Products.updateOne({ _id: _id }, {
                    $set: obj
                })
                _id = false;
            }
            else if (obj.method === "add") {
                // console.log(obj)
                let data = await Products({ method: obj.method, date: obj.date, type: obj.type, data: obj.data });
                await data.save();
            }
        }

        else if (obj.type === "DisplayCarousel") {
            let dt = obj.data;
            let dtlen = 0;
            let _array = [];
            let imagePath = Date.now() + "-" + Math.random() * 1000;

            for (let x in dt) {
                dtlen += 1;
            }
            dtlen = dtlen / 3;
            // console.log(dtlen);
            for (let i = 0; i < dtlen; i++) {
                let img = dt[`image${i + 1}`];

                if (typeof img === "string") {
                    _array.push({ href: dt[`href${i + 1}`], id: dt[`id${i + 1}`], image: img });
                } else {
                    if (!fs.existsSync(`./public/uploads/products/displaycarousel${imagePath}`)) {
                        await fs.mkdirSync(`./public/uploads/products/displaycarousel${imagePath}`);
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/displaycarousel${imagePath}/${imagePath}${i + 1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);

                        _array.push({ href: dt[`href${i + 1}`], id: dt[`id${i + 1}`], image: imgPath });
                    } else {
                        let image = await img.arrayBuffer();
                        let bufferimg = Buffer.from(image);
                        let imgPath = `./public/uploads/products/displaycarousel${imagePath}/${imagePath}${i + 1}-${img.name}`;
                        await fs.writeFileSync(imgPath, bufferimg);
                        _array.push({ href: dt[`href${i + 1}`], id: dt[`id${i + 1}`], image: imgPath });
                    }
                }
            }
            // console.log(_array);
            obj.data = _array;

            if (obj.method === "edit") {
                // console.log("edit")
                // console.log(obj)
                const result = await Products.updateOne({ _id: _id }, {
                    $set: obj
                })
                _id = false;
            }
            else if (obj.method === "add") {
                let data = await Products({ method: obj.method, date: obj.date, type: obj.type, data: obj.data });
                await data.save();
            }
        }
        else if(obj.type === "Ads"){
            if (obj.method === "edit") {
                // console.log(obj)
                const result = await Products.updateOne({ _id: _id }, {
                    $set: obj
                })
                _id = false;
            }
            else if (obj.method === "add") {
                if (obj.data.image) {
                    // console.log(true)
                    if (typeof obj.data.image === "string") { }
                    else {
                        let image = obj.data.image;
                        let img = await image.arrayBuffer();
                        let bufferimg = Buffer.from(img);
                        let imagePath = Date.now() + "-" + Math.random() * 1000 + "-" + image.name;
                        await fs.writeFileSync(`./public/uploads/products/${imagePath}`, bufferimg);
                        obj.data.image = imagePath;
                    }
                }
                let data = await Products({ method: obj.method, date: obj.date, type: obj.type, data: obj.data });
                await data.save();
            }
        }
        else {
            console.log("type not match!");
        }
        // console.log(obj);
        // let data = await Products({method: obj.method, date: obj.date, type: obj.type, data: obj.data});
        // await data.save();
        // console.log(data)
    } catch (err) {
        console.log(err)
    }
    return NextResponse.json({ message: "Data Submit Successfully!" });
}
