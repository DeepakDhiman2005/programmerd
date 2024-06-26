"use server"

// next
import { NextResponse } from "next/server"

// database
import { db_blogs } from "@/app/db/blogs";
import ConnectMongo from "@/util/ConnectMongo";
import { Blogposts } from "@/util/mongo";

export async function GET(response) {
    await ConnectMongo();
    let blogs = await Blogposts.find();
    blogs = blogs.concat(db_blogs);
    return NextResponse.json(blogs.reverse());
}

export async function POST(response) {
    await ConnectMongo();
    let blogs = await Blogposts.find();
    const resp = await response.json();
    const _query = resp.query.toLowerCase();
    // console.log(_query);
    let get_data = {};
    blogs = [...blogs, ...db_blogs];

    blogs.filter((blog) => {
        let data = blog.data;
        if (data.title.toLowerCase().match(_query)) {
            get_data = blog;
        }
    })
    return NextResponse.json(get_data);
}
