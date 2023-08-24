import React from "react"

import Features from "@/components/Features"
import HeroSection from "@/components/HeroSection"
import ProductItems from "@/components/ProductItems"
import Promotions from "@/components/Promotions"
import Subscribe from "@/components/Subscribe"

const HomePage = ({ products }: any) => {
  return (
    <div className="container">
      <HeroSection />
      {/* <Promotions /> */}
      {/* <section className="container mt-5">
        <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
          Products
        </p>
        <h1 className="font-extrabold text-4xl text-center py-3">
          Checkout What We Have
        </h1>
        <ProductItems products={products} />
      </section>

      <Features />
      <Subscribe /> */}
    </div>
  )
}

export default HomePage
