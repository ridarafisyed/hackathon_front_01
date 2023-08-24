"use client "

import React from "react"
import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"

import { siteConfig } from "@/config/site"

const SocialMediaIcon = () => {
  return (
    <div className="flex m-5 mt-5 gap-5">
      <Link href="https://facebook.com/ridarsyed" target="_blank" className="bg-zinc-200 rounded-md p-2 mr-2">
        <Facebook/>
      </Link>
      <Link href="https://linkedin.com/in/ridarafisyed" target="_blank" className="bg-zinc-200 rounded-md p-2 mr-2">
        <Linkedin/>
      </Link>
      <Link href="https://twitter.com/ridarafisyed" target="_blank" className="bg-zinc-200 rounded-md p-2 mr-2">
        <Twitter/>
      </Link>
    </div>
  )
}

const UpperFooter = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5  p-5 mb-20 text-md">
      <div className="col-span-2">
        <Link href="/" className="flex items-center space-x-2 ml-5  mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="inline-block text-2xl font-extrabold">
            {siteConfig.name}
          </span>
        </Link>
        <p className="max-w-[400px] ml-5">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <SocialMediaIcon />
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Company
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Terms of Use</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">How it Works</Link>
          </li>
          <li>
            <Link href="">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Support
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">Support Carrer</Link>
          </li>
          <li>
            <Link href="">24h Service</Link>
          </li>
          <li>
            <Link href="">Quick Chat</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Contact
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">Whatsapp</Link>
          </li>
          <li>
            <Link href="">Support 24h</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const LowerFooter = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 px-10 py-10 text-md">
      <p className="">Copyright &#169; 2023 Dine Market</p>
      <p>
        Design by. <span className="font-bold">Weird Design Studio</span>
      </p>
      <p>
        Code by. <span className="font-bold"> ridarafisyed on github</span>
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="container">
      <UpperFooter />
      <hr />
      <LowerFooter />
    </div>
  )
}

export default Footer
