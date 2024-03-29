import React from "react"
import { getGenderProducts } from "@/sanity/sanity-utils"
import ProductsCataloguePage from "@/views/ProductsCataloguePage"

export default async function KidsProducts() {
  const products = await getGenderProducts("kid")

  return (
    <div>
      <ProductsCataloguePage products={products} />
    </div>
  )
}
