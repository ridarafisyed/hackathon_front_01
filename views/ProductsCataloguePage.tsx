import React from "react"

import ProductItems from "@/components/ProductItems"

const ProductsCataloguePage = ({ products }: any) => {
  return (
    <section className="container">
      <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
        Products
      </p>
      <h1 className="font-extrabold text-4xl text-center py-3">Catalogue</h1>
      <div>
        {products.length >= 0 ? (
          <ProductItems products={products} />
        ) : (
          "No product found"
        )}
      </div>
    </section>
  )
}

export default ProductsCataloguePage
