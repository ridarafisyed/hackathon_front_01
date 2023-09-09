import { NextRequest, NextResponse } from "next/server"
import {db, cartTable} from "@/lib/drizzel"
import { auth } from '@clerk/nextjs';
import {v4 } from "uuid"
import { currentUser } from '@clerk/nextjs';
import { cookies } from "next/headers"
import { eq } from "drizzle-orm"


// 
export  const GET = async (request :NextRequest) =>{

    console.log("Here we are hitting the get request")
    // const {userId} =  auth();
    // if (!userId){
    //     return NextResponse.json({message:"something went wrong"})
    // }
    // try{
    //     const res = await db.select().from(cartTable).where(eq(cartTable.user_id, userId ))
    //     return NextResponse.json({res})
    // }catch(error){


    // }
}

// adding data to
export const POST = async (request :NextRequest) =>{
    const { userId } : { userId: string | null } = auth();
    console.log("User id from post cart post .", userId)
    console.log(request.json)
    
    // const req= await request.json()
    
    // try{
    //     if(userId){
    //         const res = await db.insert(cartTable).values({
    //         product_id: req.product_id,
    //         quantity: req.quantity,
    //         user_id:userId,

    //     }).returning();
    //     return NextResponse.json({res})
    //     }
        
    // }catch(error){

    // }
}