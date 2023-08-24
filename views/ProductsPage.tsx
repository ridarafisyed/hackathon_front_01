"use client"

import React from "react"
import { useSelectedLayoutSegments } from "next/navigation"

import ProductItems from "@/components/ProductItems"

const ProductsPage = ({ products }: any) => {
  const segments = useSelectedLayoutSegments()
  console.log(segments)
  return (
    <main className="container mt-5 px-10">
      <section>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="container mt-5">
          <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
            Products
          </p>
          <h1 className="font-extrabold text-4xl text-center py-3">
            Checkout What We Have
          </h1>
          <ProductItems products={products} />
        </div>
      </section>
    </main>
  )
}

export default ProductsPage
