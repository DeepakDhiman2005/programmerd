"use server"

// next
import { NextResponse } from "next/server"

// db
import { db_laptops } from "@/app/db/products/laptops";
import { db_smartwatch } from "@/app/db/products/smartwatch";
import { db_books } from "@/app/db/products/books";
import { db_tv } from "@/app/db/products/t_v";
import { db_cpu } from "@/app/db/products/cpu";
import { db_game } from "@/app/db/products/game";
import { db_keyboard } from "@/app/db/products/keyboard";
import { db_mobiles } from "@/app/db/products/mobiles";
import { db_ps5 } from "@/app/db/products/ps5";
import { db_speaker } from "@/app/db/products/speaker";


export async function POST(response) {
    let query = await response.text();
    let Data = null;

    if(query === "laptops"){
        Data = db_laptops.data;
    }
    else if(query === "books"){
        Data = db_books.data;
    }
    else if(query === "mobiles"){
        Data = db_mobiles.data;
    }
    else if(query === "t.v"){
        Data = db_tv.data;
    }
    else if(query === "keyboard"){
        Data = db_keyboard.data;
    }
    else if(query === "games"){
        Data = db_game.data;
    }
    else if(query === "ps5"){
        Data = db_ps5.data;
    }
    else if(query === "cpu"){
        Data = db_cpu.data;
    }
    else if(query === "smartwatch"){
        Data = db_smartwatch.data;
    }
    else if(query === "speaker"){
        Data = db_speaker.data;
    }
    else {
        Data = [];
    }
    // console.log(query);
    return NextResponse.json(Data);
}