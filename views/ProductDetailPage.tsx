import React from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { Product } from "@/types/product"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  product: Product
}

const ProductDetailPage = ({
  product: { name, image, details, quantity, price },
}: Props) => {
  return (
    <div className="container flex flex-1 gap-5 ">
      <div className="">
        <Image src={image} alt={name} height={100} width={100} />
      </div>
      <div className="">
        <Image src={image} alt={name} height={500} width={500} />
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl tracking-wide  mt-10">{name}</h1>
        <h3 className="text-zinc-500 text-2xl font-semibold">{details}</h3>

        <div>
          <h3 className="font-bold">Quantity : {quantity}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
