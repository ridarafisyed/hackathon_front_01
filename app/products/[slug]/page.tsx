import React from "react"
import { getProduct, getProducts } from "@/sanity/sanity-utils"
import ProductDetailPage from "@/views/ProductDetailPage"

type Props = {
  params: { slug: string }
}
export default async function ProductDetail({ params }: Props) {
  const slug = params.slug
  const product = await getProduct(slug)
  const products = await getProducts()
  return (
    <div>
      <ProductDetailPage product={product} products={products} />
    </div>
  )
}
