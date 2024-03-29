import React from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ProductItems = ({ products }: any) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2">

      {products.map((product: any, index: number) => (
        <Link href={`/products/${product.slug}`} key={index}>
          <Card className="hover:scale-100 transition">
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src={`${urlForImage(product.image)}`}
                  alt={product.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <CardTitle>{product.name}</CardTitle>
              <CardDescription >${product.price}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ProductItems
