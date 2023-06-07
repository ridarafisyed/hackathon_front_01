import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="container grid items-center grid-cols-2 gap-4 pb-6 mt-8 px-10 md:py-8">
      <div className="">
        <div className="flex max-w-[980px] flex-col items-start gap-2 px-10">
          <div className="bg-blue-100 px-5 py-2 rounded mb-7">
            <p className="text-blue-700 font-extrabold"> Sale 70%</p>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl tracking-normal">
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
            href={siteConfig.links.docs}
            target="_blank"
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
      <div className="p-4">
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
