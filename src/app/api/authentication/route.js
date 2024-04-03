"use server"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import bcrypt from "bcrypt"

// database
import { Auth } from "@/util/mongo";
import ConnectMongo from "@/util/ConnectMongo";

export async function POST(response) {
    await ConnectMongo();
    const user = await response.formData();
    let resp = { message: "", bool: false };
    // console.log(user);

    if(user.get("source").toLowerCase() === "dashboard"){
        try{
            let cookFind = cookies().get("programmerd");
            // console.log(cookFind)

            if(typeof cookFind !== "undefined"){
                if(cookFind.value || cookFind.value.match("true")){
                    resp.message = "Login Successfully!";
                    resp.bool = true;
                }else {
                    resp.message = "No Login!";
                    resp.bool = false;
                }
            }else {
                let email = user.get("email");
                let password = user.get("password");
                let saltRound = 10;
    
                let findData = await Auth.find({ email: email });
                // console.log(findData)
    
                let findPass = false;
                for(let i=0; i < findData.length; i++){
                    findPass = await bcrypt.compare(password, findData[0].password);
                }
    
                // console.log(findPass)
                if(findPass){
                    // console.log("login")
                    resp.message = "Login Successfully!";
                    resp.bool = true;
                    cookies().set("programmerd", true);
                }else {
                    // let salt = await bcrypt.genSaltSync(saltRound);
                    // let hashPass = await bcrypt.hashSync(password, salt);
                    // let data = await Auth({email: email, password: hashPass});
    
                    // await data.save();
                    // cookies().set("programmerd", true)
                    resp.message = "Sign up Successfully!";
                    resp.bool = true;
                }
                findPass = false;
                email = false; 
                password = false;
            }
            cookFind = false;            
        }catch(err){
            console.log(err)
        }

        // console.log("Password: "+hashPass)
    }
    return NextResponse.json({ message: resp.message, bool: resp.bool })
}