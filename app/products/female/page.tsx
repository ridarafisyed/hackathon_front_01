import React from "react"
import { getProducts } from "@/sanity/sanity-utils"
import ProductsPage from "@/views/ProductsPage"

export default async function MaleProducts() {
  const products = getProducts()
  return (
    <div>
      <h2>Female Shoes</h2>
    </div>
  )
}
