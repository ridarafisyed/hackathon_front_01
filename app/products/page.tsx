import React from "react"
import { getProducts } from "@/sanity/sanity-utils"
import ProductsCataloguePage from "@/views/ProductsCataloguePage"

export default async function Products() {
  const products = await getProducts()
  return (
    <div>
      
      <ProductsCataloguePage products={products} />
    </div>
  )
}
