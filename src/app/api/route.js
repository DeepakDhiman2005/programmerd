"use server"
import { db_products } from '../db/product';

// next
import { NextResponse } from "next/server";
import {Blogposts} from '@/util/mongo';
import ConnectMongo from '@/util/ConnectMongo';


export async function GET(response){
    // console.log(response);
    await ConnectMongo();
    const blog = await Blogposts.find();
    // console.log(blog);

    const data = db_products;
    return NextResponse.json(data);
}