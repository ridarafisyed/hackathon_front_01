import { NextRequest, NextResponse } from "next/server"
import {db, cartTable} from "@/lib/drizzel"

import {v4 } from "uuid"

import { cookies } from "next/headers"
import { eq } from "drizzle-orm"



export  const GET = async (request :NextRequest) =>{
    const user_id = request.nextUrl.searchParams.get("user_id") as string
    if (!user_id){
        return NextResponse.json({message:"something went wrong"})
    }
    
    try{
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id ))
        return NextResponse.json({res})
    }catch(error){


    }
}

// adding data to
export const POST = async (request :NextRequest) =>{
    const user_id = v4()
    const req= await request.json()
    const setCookie = cookies();
    const isUserId = setCookie.get("user_id")
    
    if(!isUserId){
        setCookie.set("user_id",user_id)
    }
    
    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: req.quantity,
            user_id:setCookie.get("user_id")?.value as string,

        }).returning();
        return NextResponse.json({res})
    }catch(error){

    }
}