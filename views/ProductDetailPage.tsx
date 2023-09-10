"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { urlForImage } from "@/sanity/lib/image"
import product from "@/sanity/product"
import { getCategoryProducts } from "@/sanity/sanity-utils"
import { Product } from "@/types/product"
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuth } from "@clerk/nextjs"
import { useAppDispatch } from "@/store/store"
import { incrementItem, decrementItem, addToCart } from "@/store/cart.slice"

type Props = {
  product: Product
  products: Product[]
}

const ProductDetailPage = ({ product, products }: Props) => {
  const dispatch = useAppDispatch()
  const {userId} = useAuth() // getting the logged in user
  const [quantity, setQunatity] = useState(0)
  

  async function handleAddTOCart() {
    console.log("clicked on add to cart", product.name)
    try{
      dispatch(addToCart({ product:{id: product._id, imagePath:product.image, price:product.price, name: product.name}, quantity: quantity }));
      toast.success("Product added");

    }catch(error){
      console.log("Something went wrong", error)
      toast.error("Something went wrong");
    }
   
  }

  const handleDecrement =() =>{
    setQunatity(quantity - 1);
  }

    const handleIncrement =() =>{
    setQunatity(quantity + 1);
  }
  
  
  
  return (
    <div className="container">
      <div className=" grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-x-2"> 
        <div className="">
          <div className="hidden xl:block">
            <Image
              src={product.image}
              alt={product.name}
              height={100}
              width={100}
            />
          </div>
          <Image
            src={product.image}
            alt={product.name}
            height={500}
            width={500}
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl tracking-wide mt-10">{product.name}</h1>
          <h3 className="text-zinc-500 dark:text-slate-400 text-2xl font-semibold ">
            {product.details}
          </h3>
          <div className="">
            <h1 className="text-zinc-800 text-lg font-semibold uppercase">
              Select size
            </h1>
            <div className="flex flex-1 gap-3">
              <button className=" bg-zinc-300 dark:bg-zinc-800 uppercase rounded-md py-2 px-2">
                xs
              </button>
              <button className="uppercase rounded-md ">s</button>
              <button className="uppercase rounded-md ">md</button>
              <button className="uppercase rounded-md ">lg</button>
              <button className="uppercase rounded-md ">xl</button>
            </div>
          </div>
          <div className="flex flex-1 gap-4 justify-left items-center">
            <h3 className="font-bold">
              Quantity :{" "}
              <span
                className={
                  product.quantity > 0 ? "text-green-600" : "text-red-800"
                }
              >
                {product.quantity > 0 ? "in stock" : "out of Stock"}
              </span>
            </h3>
            <button
              onClick={handleDecrement}
              className="bg-zinc-300 dark:bg-zinc-800 uppercase rounded-md   px-4 py-1"
            >
              -
            </button>

            <p className="font-semibold">{quantity}</p>
            <button
              onClick={handleIncrement}
              className="bg-zinc-300 dark:bg-zinc-800 uppercase rounded-md  px-4 py-1"
            >
              +
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAddTOCart}
              className=" bg-purple-700 text-zinc-100 dark:bg-purple-700 border capitalize font-bold py-2 px-4 rounded-md border-zinc-700  "
            >
              Add to cart
            </button>
            <button
              className="bg-zinc-200 text-zinc-600 dark:bg-zinc-600 border capitalize font-bold py-2 px-4 rounded-md "
            >
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
          Products
        </p>
        <h1 className="font-extrabold text-4xl text-center py-3">
          You May Also Like
        </h1>
        <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any, index: number) => (
            <Link href={`/products/${product.slug}`} key={index}>
              <Card className="hover:scale-100 transition">
                <CardHeader>
                  <Avatar>
                    <AvatarImage
                      src={`${urlForImage(product.image)}`}
                      alt={product.name}
                      height={250}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>${product.price}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
