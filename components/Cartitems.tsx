"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { RootState } from "@/store/store"

import { useSelector, useDispatch } from "react-redux"
import { clearCart, decrementItem, deleteItem, incrementItem, selectTotalItems, selectTotalPrice } from "@/store/cart.slice"
import { Item } from "@radix-ui/react-navigation-menu"

const CartItmes = () => {
  const cartItems = useSelector((state:RootState) => state.cart.items);
  const totalItems = useSelector(selectTotalItems)
  const totalPrice = useSelector(selectTotalPrice)


  const dispatch = useDispatch()

  const handleCheckout = async () => {
    // const stripe = await getStipePromise();
    // const response = await fetch("/api/stripe-session/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   cache: "no-cache",
    //   body: JSON.stringify(cartItems),
    // });

    // const data = await response.json();
    // if (data.session) {
    //   stripe?.redirectToCheckout({ sessionId: data.session.id });
    // }
    console.log("click on checkout")
  };
  

  
  return (
    <section className="container p-10">
      <h1 className="text-2xl capitalize font-bold mx-10">shopping cart</h1>
      {cartItems.length ? (
       <div className="p-10 grid grid-cols-3">
          <div className="col-span-2">
            {cartItems.map((item, index) =>(  // if there is items in the cart 
              <>
                <button className="capitalize" onClick={()=>dispatch(clearCart())}>Empty Cart</button>
              
                <div className="flex">
                <div className="flex-auto grid grid-cols-4 col-span-2 gap-2">
                
                  <div className="">
                    <Image src={item.product.imagePath} height={150} width={150} alt={item.product.name} />
                  </div>
                  <div className="col-span-2"> 
                    <h1 className="font-semibold text-xl">{item.product.name}</h1>
                    <p className="">{item.product.price}</p>

                    <div className="inline-flex gap-3">
                      <button
                        onClick={()=>dispatch(decrementItem(item.product.id))}
                        className="uppercase rounded-md bg-zinc-300  px-4 py-1 dark:bg-zinc-800"
                      >
                        -
                      </button>

                      <p className="font-semibold">{item.quantity}</p>
                      <button
                        onClick={()=>dispatch(incrementItem(item.product.id))}
                        className="uppercase rounded-md bg-zinc-300 px-4 py-1 dark:bg-zinc-800"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <button onClick={()=>dispatch(deleteItem(item.product.id))}><Trash2/></button><br/>
                  </div> 
                </div>
              
                </div>
                </>
                ))}
          </div>
          <div className="grid bg-gray-300 dark:bg-zinc-800 dark:text-zinc-300 rounded-xl items-center align-middle text-center gap-3">
            <h1 className=" text-xl font-bold mt-4">Order Summary</h1>
            <hr/>
            
            <p className="mt-3"> Subtotal ({totalItems} Items ): <span className="font-bold"> ${(totalPrice).toFixed(2)}</span></p>

            <Link href="/checkout" className="bg-purple-700 text-zinc-100 dark:bg-purple-700 dark:text-zinc-300 font-bold px-4 py-3 rounded-md  mt-3">Checkout Now </Link>
          </div>
      
     </div> )
      
      :// if there is no item in the cart 
      <p className="text-md capitalize m-10">
          Your Cart is empty.
          <Link href={"/products"}  className="underline">
            Continue Shopping
          </Link>
        </p>}
     
    </section>
  )
}

export default CartItmes
