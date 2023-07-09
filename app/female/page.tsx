import React from "react"
import { getGenderProducts } from "@/sanity/sanity-utils"
import ProductsCataloguePage from "@/views/ProductsCataloguePage"

export default async function FemaleProducts() {
  const products = await getGenderProducts("female")
  return (
    <div>
      <ProductsCataloguePage products={products} />
    </div>
  )
}
