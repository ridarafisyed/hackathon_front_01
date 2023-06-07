import React from "react"

import HeroSection from "@/components/HeroSection"
import Products from "@/components/Products"
import Promotions from "@/components/Promotions"

const HomePage = () => {
  return (
    <main className="container">
      <HeroSection />
      <Promotions />
      <Products />
    </main>
  )
}

export default HomePage
