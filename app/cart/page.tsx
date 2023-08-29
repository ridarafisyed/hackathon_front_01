import React from "react"
import CartPage from "@/views/CartPage"
import { auth } from '@clerk/nextjs';
import { cookies } from "next/headers"

// const getCartData = async () => {
//     const { userId } : { userId: string | null } = auth();
//     if (userId){
//       const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         cache: "no-store",


//     })
//     const result = await res.json()
//     return result
//   }
//   return ""
//   }
    

const Cart = async () => {
  // const data = await getCartData();
  
  // if (data === ""){
  //   console.log("no data found")

  // }
  // else {
  //   console.log(data)
  // }
  return (
    <div>
      <CartPage />
    </div>
  )
}

export default Cart
