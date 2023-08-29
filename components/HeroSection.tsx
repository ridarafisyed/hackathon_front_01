import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="container items-center flex gap-4 pb-6 p-3 mt-8 px-2 md:py-8 md:flex-1">
      <div className="left-side">
        <div className="flex max-w-[980px] flex-col items-start gap-2 px-10">
          <div className="bg-blue-100 px-5 py-2 rounded mb-7">
            <p className="text-blue-700 font-extrabold"> Sale 70%</p>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl tracking-normal">
            An Industrial Take
            <br className="hidden sm:inline" />
            on Streetwear
          </h1>
          <p className="max-w-[400px] text-md my-8 ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
        </div>
        <div className="flex gap-4 px-10 mb-10">
          <Link
            href="/products"
            rel="noreferrer"
            // className={buttonVariants()}
            className="flex gap-2 bg-black text-white px-7 py-5 font-extrabold"
          >
            <ShoppingCart /> Start Shopping
          </Link>
        </div>
        <div>
          <Image
            className="full-w"
            src="/asserts/icons.png"
            height={200}
            width={850}
            alt="header image"
          />
        </div>
      </div>
      <div className="hidden xl:block right-side p-4">
        <Image
          className="full-w"
          src="/asserts/header.png"
          height={800}
          width={800}
          alt="header image"
        />
      </div>
    </section>
  )
}

export default HeroSection
