import React from "react"
import { getProducts } from "@/sanity/sanity-utils"
import ProductsPage from "@/views/ProductsPage"

export default async function Products() {
  const products = getProducts()
  return (
    <div>
      <ProductsPage />
    </div>
  )
}
