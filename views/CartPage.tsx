"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"

import CartItems from "@/components/Cartitems"
import Wishlist from "@/components/WishList"

const CartPage = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext()

  return (
    <>
      <CartItems />
      {/* <Wishlist /> */}
    </>
  )
}

export default CartPage
