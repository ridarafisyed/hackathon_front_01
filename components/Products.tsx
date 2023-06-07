import React from "react"
import { urlForImage } from "@/sanity/lib/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Products = ({ products }: any) => {
  
  return (
    <section className="container mt-5">
      <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
        Products
      </p>
      <h1 className="font-extrabold text-4xl text-center py-3">
        Checkout What We Have
      </h1>
      <div className="grid grid-cols-3">
        {products.result.map((product: any, index: number) => (
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src={`${urlForImage(product.image && product.image[0])}`}
                  alt={product.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price}</CardDescription>
            </CardHeader>
          </Card>
        ))}
        
      </div>
    </section>
  )
}

export default Products
