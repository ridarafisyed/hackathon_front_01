import React from "react"

import Features from "@/components/Features"
import HeroSection from "@/components/HeroSection"
import Products from "@/components/Products"
import Promotions from "@/components/Promotions"
import Subscribe from "@/components/Subscribe"

const HomePage = () => {
  return (
    <main className="container">
      <HeroSection />
      <Promotions />
      <Products />
      <Features />
      <Subscribe />
    </main>
  )
}

export default HomePage
