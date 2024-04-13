"use server"

// next
import { NextResponse } from "next/server"

// DataBase
import ConnectMongo from "@/util/ConnectMongo";
import { Products, Blogposts } from "@/util/mongo";

export async function POST(response){
    await ConnectMongo();
    // const query = await response.text();
    const query = await response.json();
    const blogs = await Blogposts.find();
    const products = await Products.find();

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
        let title = product.data.title;
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

    return NextResponse.json(array);
}