"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { Minus, Plus, Trash2 } from "lucide-react"

import getStripe from "@/lib/getStripe"
import { toast } from "react-hot-toast"

const CartItmes = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext()
  const handleCheckout=async (params:any) => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
      
    })
    if (response.status === 500){
      return 
    }
    const data = await response.json()
    toast.loading('Redirecting...')
    stripe.redirectToCheckout({sessionId: data.id});
  }
  return (
    <section className="container  p-10">
      <h1 className="text-2xl capitalize font-bold mx-10">shopping cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex gap-3 m-10 justify-center items-center">
          <div className="grid grid-cols-4 gap-3">
            {cartItems?.map((item, index) => (
              <>
                <div className="justify-items-center">
                  <Image
                    className="rounded-lg"
                    src={item.image}
                    alt="feature"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="capitalize col-span-3 space-y-3 ">
                  <div className="flex justify-between mr-8">
                    <h1 className="text-xl font-bold font-md tracking-wide">
                      {item.name}
                    </h1>
                    <button onClick={() => onRemove(item)}>
                      <Trash2 />
                    </button>
                  </div>

                  <h3 className="text-md font-bold tracking-wide text-zinc-500">
                    {item.details}
                  </h3>
                  <h3 className="text-lg font-bold tracking-wide ">
                    Delivery Estimation
                  </h3>
                  <h3 className="text-lg font-bold tracking-wide text-yellow-500">
                    5 working days
                  </h3>
                  <div className="flex justify-between mr-5">
                    <h3 className="text-xl font-extrabold tracking-wide text-zinc-900">
                      ${item.price}
                    </h3>
                    <div className="flex">
                      <button
                        className="rounded-full mx-3 bg-zinc-300 dark:bg-zinc-400 px-2"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <Minus size={14} />
                      </button>
                      {item.quantity}
                      <button
                        className="rounded-full mx-3 bg-zinc-300 dark:bg-zinc-400 px-2"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="bg-gray-100 dark:bg-gray-600 p-10 space-y-4 rounded-lg">
            <h1 className="text-xl font-extrabold capitalize">Order Summary</h1>
            <div className="flex justify-between">
              <p>Quantity </p>
              <p>{totalQuantities}</p>
            </div>
            <div className="flex justify-between">
              <p>Sub total </p>
              <p>${totalPrice}</p>
            </div>
            <button className="bg-zinc-900 text-white py-2 px-4 w-full font-bold" onClick={handleCheckout}>
              Process to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-md capitalize m-10">
          Your Cart is empty.{" "}
          <Link href={"/"} className="underline">
            Continue Shopping
          </Link>
        </p>
      )}
    </section>
  )
}

export default CartItmes
