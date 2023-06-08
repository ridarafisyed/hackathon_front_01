import React from "react"
import { getProducts } from "@/sanity/sanity-utils"
import ProductsPage from "@/views/ProductsPage"

export default async function FemaleProducts() {
  const products = getProducts()
  return (
    <div>
      <h1> Men Shoes</h1>
    </div>
  )
}
