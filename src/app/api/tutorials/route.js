"use server"

// next
import { NextResponse } from "next/server";

// database
import { db_python } from "@/app/db/tutorials/python";

export async function GET(response){
    const data = db_python
    return NextResponse.json(data);
}