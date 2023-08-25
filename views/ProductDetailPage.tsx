"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useStateContext } from "@/context/StateContext"
import { urlForImage } from "@/sanity/lib/image"
import product from "@/sanity/product"

import { Product } from "@/types/product"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  product: Product
  products: Product[]
}

const ProductDetailPage = ({ product, products }: Props) => {
const [quantity, setQuantity] = useState(0)
  const handleAddTOCart =async ()=>{
    const res = fetch("/api/cart/", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id,
        quantity: quantity,
      })
    })
  }

  return (
    <div className="container">
      <div className=" flex flex-1 gap-5 ">
        <div className="">
          <Image
            src={product.image}
            alt={product.name}
            height={100}
            width={100}
          />
        </div>
        <div className="">
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
              <button className="uppercase rounded-md bg-zinc-300 dark:bg-zinc-300 py-2 px-2">
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
              onClick={()=> setQuantity(quantity-1)}
              className="uppercase rounded-md bg-zinc-300 dark:bg-zinc-800 px-4 py-1"
            >
              -
            </button>

            <p className="font-semibold">{quantity}</p>
            <button
              onClick={()=> setQuantity(quantity+1)}
              className="uppercase rounded-md bg-zinc-300 px-4 py-1"
            >
              +
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleAddTOCart()}
              className="bg-white dark:bg-zinc-800  text-black dark:text-white border border-black   py-2 px-4"
            >
              Add to cart
            </button>
            <button
              className=" bg-black dark:bg-zinc-300 text-white  py-2 px-4"
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
