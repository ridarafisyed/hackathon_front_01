import React from "react"
import product from "@/sanity/product"
import { getProduct } from "@/sanity/sanity-utils"
import ProductDetailPage from "@/views/ProductDetailPage"

type Props = {
  params: { slug: string }
}
export default async function ProductDetail({ params }: Props) {
  const slug = params.slug
  const product = await getProduct(slug)
  return (
    <div>
      <ProductDetailPage product={product} />
    </div>
  )
}

// async function getProduct({ slug }: any) {

// }
