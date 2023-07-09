"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast"

import { Product } from "@/types/product"

interface StateContextProps {
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  cartItems: Product[]
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
  totalPrice: number
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
  totalQuantities: number
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>
  qty: number
  incQty: () => void
  decQty: () => void
  onAdd: (product: Product, quantity: number) => void
  toggleCartItemQuantity: (id: number, value: "inc" | "dec") => void
  onRemove: (product: Product) => void
}

interface StateContextProviderProps {
  children: React.ReactNode
}
const Context = createContext<StateContextProps | undefined>(undefined) // Initialize with undefined

export const StateContextProvider: React.FC<StateContextProviderProps> = ({
  children,
}) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct: Product | undefined
  let index: number

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    )

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! + quantity,
          }
        return cartProduct
      })

      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const onRemove = (product: Product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct!.price * foundProduct!.quantity!
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct!.quantity!
    )
    setCartItems(newCartItems)
  }

  const toggleCartItemQuantity = (id: number, value: "inc" | "dec") => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct!, quantity: foundProduct!.quantity! + 1 },
      ])
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct!.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === "dec") {
      if (foundProduct!.quantity! > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct!, quantity: foundProduct!.quantity! - 1 },
        ])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct!.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1

      return prevQty - 1
    })
  }

  const stateContextValue: StateContextProps = {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
    toggleCartItemQuantity,
    onRemove,
  }

  return (
    <Context.Provider value={stateContextValue}>{children}</Context.Provider>
  )
}

export const useStateContext = (): StateContextProps => {
  const context = useContext(Context)
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    )
  }
  return context
}
