import React from "react"
import { getGenderProducts } from "@/sanity/sanity-utils"
import ProductsCataloguePage from "@/views/ProductsCataloguePage"

export default async function MaleProducts() {
  const products = await getGenderProducts("male")
  console.log(products)

  return (
    <div>
      <ProductsCataloguePage products={products} />
    </div>
  )
}
