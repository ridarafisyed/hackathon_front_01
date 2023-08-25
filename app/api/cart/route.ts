import { NextRequest, NextResponse } from "next/server"
import {db, cartTable} from "@/lib/drizzel"

import {v4 } from "uuid"

import { cookies } from "next/headers"



export  const GET = async (request :Request) =>{
    
    try{
        const res = await db.select().from(cartTable)
        return NextResponse.json({res})
    }catch(error){


    }
}

export  const POST = async (request :Request) =>{
    const user_id = v4()
    const req= await request.json()
    const setCookie = cookies();
    if(!cookies().has("user_id")){
        setCookie.set("user_id",user_id)
    }
    
    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: req.quantity,
            user_id:setCookie.get("user_id")?.value as string,

        })
        return NextResponse.json({res})
    }catch(error){

    }
}