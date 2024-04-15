"use server"

// next
import { NextResponse } from "next/server";

// database
import { db_python } from "@/app/db/tutorials/python";

export async function GET(response){
    const data = db_python;
    const slug = [{slug: "python", data: data}]
    return NextResponse.json(slug);
}