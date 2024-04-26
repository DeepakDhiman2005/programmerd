"use server"

// next
import { NextResponse } from "next/server"

// DataBase
import ConnectMongo from "@/util/ConnectMongo";
import { Products, Blogposts } from "@/util/mongo";

// products
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

export async function POST(response){
    await ConnectMongo();
    // const query = await response.text();
    const query = await response.json();
    const blogs = await Blogposts.find();
    // const products = await Products.find();
    const products = [...db_books.data, ...db_cpu.data, ...db_game.data, ...db_keyboard.data, ...db_laptops.data, ...db_mobiles.data, ...db_ps5.data, ...db_smartwatch.data, ...db_speaker.data, ...db_tv.data];

    let array = [];
    blogs.filter((blog)=>{
        let title = blog.data.title.toLowerCase();

        // if(title.match(new RegExp(query))){
        //     array.push(blog);
        // }
        let onetime = false;
        query.map((slug)=>{
            if(title.match(slug) && !onetime){
                onetime = true;
                array.push(blog);
            }
        });
    });

    products.filter((product)=>{
        let title = product.title;
        if(typeof title === "string"){
            title = title.toLowerCase();
            // if(title.match(new RegExp(query))){
            //     array.push(product);
            // }
            let onetime = false;
            query.map((slug)=>{
                if(title.match(slug) && !onetime){
                    onetime = true;
                    array.push(product);
                }
            });
        }
    });
    // console.log(array);

    return NextResponse.json(array);
}