"use server"
// next
import { NextResponse } from "next/server";
import translate from "translate";

translate.engine = "google"; // "google", "yandex", "libre", "deepl"
// translate.key = process.env.DEEPL_KEY;

export async function POST(response) {
    const data = await response.json();

    let lang = '';
    if(data.lang === "hindi"){ lang = "hi"; }
    else if(data.lang === "english"){ lang = "en"; }
    else { lang === "en"; }
    
    let article = data.article;

    const title = await translate(article.title, lang);
    let array = [];
    try{
        for(let i=0; i < article.content.length; i++){
            let content = article.content[i];
            if(content.title){
                let title = await translate(content.title, lang);
                array.push({title: title});
            }
            else if(content.desc){
                let desc = await translate(content.desc, lang);
                array.push({desc: desc});
            }
            else if(content.points){
                let arr = [];
                for(let j=0; j < content.points.length; j++){
                    let point = content.points[j];
                    let text = await translate(point, lang);
                    arr.push(text);
                }
                array.push({points: arr});
            }
            else {
                array.push(content);
            }
        }
    }catch(err){}
    article.title = title;
    article.content = array;
    // console.log(article.content);

    // console.log(data);
    return NextResponse.json({ article: article });
}