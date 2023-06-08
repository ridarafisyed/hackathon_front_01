import React from "react"
import { getProducts } from "@/sanity/sanity-utils"
import ProductsPage from "@/views/ProductsPage"

export default async function KidsProducts() {
  const products = getProducts()
  return (
    <div>
      <h1> Kids Shoes</h1>
    </div>
  )
}
